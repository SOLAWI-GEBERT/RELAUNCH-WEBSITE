# Design: Figma-Prototyp → SP Page Builder Pro Export-Toolset

**Datum:** 2026-09-06
**Status:** Entwurf zur Freigabe

## Ziel

Der bestehende React/Figma-Prototyp (`src/app/pages/*.tsx`) dient als Design-Referenz für die finale Website, die produktiv in Joomla mit **SP Page Builder Pro** (Helix-Ultimate-Template, JoomShaper) umgesetzt wird. Diese Session baut ein wiederverwendbares **Skill + Skript-Set**, mit dem sich einzelne Prototyp-Seiten mit wenig Aufwand in importierbare SP-Page-Builder-JSON-Dateien überführen lassen – und mit dem sich spätere Design-Korrekturen leicht nachziehen lassen, statt jede Seite von Hand in der Joomla-Oberfläche neu aufzubauen.

Scope dieser Session: **Tool bauen + an einer Pilot-Seite (Home) verifizieren.** Die Konvertierung aller 20 Seiten ist bewusst nicht Teil dieser Runde, sondern folgt in späteren Durchgängen mit dem fertigen Tool.

## Grundlage: SP Page Builder Pro JSON-Schema

Das Testsystem unter `/Users/linus/Documents/0_Development/Joomla4` hat eine installierte SP Page Builder Pro Instanz (`components/com_sppagebuilder`, `administrator/components/com_sppagebuilder`) sowie das Helix-Ultimate-Template (`templates/shaper_helixultimate`). Das ist die autoritative Quelle für das Zielschema – zuverlässiger als die alte Export-Referenz `export_origin/Landing_page.json` (Export einer älteren SPPB-Version der alten Joomla-Site).

Bestätigte Fakten aus dem Quellcode:

- **Top-Level-Envelope** (`administrator/.../editor/traits/ImportTrait.php`, `ExportTrait.php`): `{ template, css, seo, title, language }`, wobei `template` ein JSON-String eines Section-Arrays ist. Identisch zur Struktur von `export_origin/Landing_page.json`.
- **Struktur**: Sections (Rows) → Columns → Addons, exakt wie in `sp_page_builder.md` dokumentiert (Section-Settings für Background/Shape-Dividers/Animation, Column-Settings für Breite/Order/Responsive).
- **Autoritative Addon-Feldschemata** liegen pro Addon in `components/com_sppagebuilder/addons/<name>/admin.php` als `SpAddonsConfig::addonConfig([...])` – mit Feldname, Typ (`editor`, `slider`, `typography`, `color`, `alignment`, `checkbox`, `number`, `text`, …), Default (`std`) und Bedingungen (`depends`). Das ist die Quelle für die zu erstellende Doku, nicht Reverse-Engineering aus der alten Referenzdatei.
- **Legacy-Kompatibilität**: `SppagebuilderHelperSite::sanitizeImportJSON()` (`components/com_sppagebuilder/helpers/helper.php`) migriert beim Import automatisch ältere, flachere Feldformate (z.B. separate `title_fontsize`/`title_lineheight`) auf aktuelle Composite-Typen (z.B. `typography`-Objekt mit Breakpoint-Werten `{xl,lg,md,sm,xs}`). Das senkt das Risiko, gibt uns aber keinen Freibrief – wir generieren bevorzugt direkt nach aktuellem Schema, da es uns vorliegt.

## Gewählter Ansatz: Builder-Bibliothek + Claude-geführter Skill

Verworfene Alternativen:
- **Voll automatischer AST-Parser** (TSX → JSON ohne Interpretation): verworfen, da die im Prototyp verwendeten freien Tailwind/Motion-Kompositionen und datengetriebenen Listen (z.B. Höfe-Karten) keine saubere 1:1-Zuordnung zu Addons erlauben. Eine Parser-Heuristik, die das abbildet, wäre selbst komplex und schwer punktuell korrigierbar – widerspricht dem Ziel "Fehler leicht korrigieren".
- **Content-Extraktion in Zwischenformat + separate Recipe**: verworfen als unnötiger Zwischenschritt, da Claude die TSX-Dateien ohnehin direkt lesen und inhaltlich verstehen kann.

Gewählt: Eine **Builder-Funktionsbibliothek** kapselt pro Addon-Typ die SPPB-Feld-Boilerplate und SoLaWi-spezifische Defaults (Farben aus `design_signature.md`, Fonts, Standard-Paddings). Ein **Claude-Skill** liest eine Prototyp-Seite, trifft pro Abschnitt die Addon-Wahl (gestützt auf die bereits dokumentierten Design-Regeln in `sp_page_builder.md`, `design_signature.md`, `signature_images.md`) und schreibt eine kompakte **Recipe-Datei**, die nur die Builder-Funktionen aufruft. Korrekturen bedeuten: eine Zeile in der Recipe-Datei ändern und neu generieren – nicht Parser-Logik debuggen.

## Architektur / Dateilayout

```
docs/sppb/
  page-format.md          # Envelope, Section/Column-Struktur, globale Addon-Felder
                           # (Background/Border/Spacing/Animation/Responsive-Visibility),
                           # gemeinsame Feldtypen (typography, color, alignment,
                           # Breakpoint-Objekte {xl,lg,md,sm,xs})
  addons/<name>.md         # Pro relevantem Addon: Feldname, Typ, Default, Bedingungen
                           # (generiert aus admin.php der ~19 in sp_page_builder.md
                           # gelisteten Addons + Row/Column/Section-Wrapper)

tools/sppb-export/
  builders/*.mjs           # Eine Builder-Funktion pro Addon-Typ, SoLaWi-Defaults vorbelegt
                           # (heading(), textBlock(), feature(), accordion(), image(), …)
                           # plus section(), column(), page() als Wrapper
  pages/<page>.mjs          # Recipe pro Seite: ruft Builder-Funktionen in Reihenfolge auf
  generate.mjs              # Recipe → export/<page>.json
  validate.mjs              # Struktur-/Schema-Validierung gegen docs/sppb/

.claude/skills/sppb-export/
  SKILL.md                  # Orchestriert den Workflow (siehe unten)

export/                     # Generierte, importierbare JSON-Dateien – versioniert, damit
                             # Änderungen zwischen Generierungsläufen im Diff sichtbar sind
```

Sprache/Tooling: einfache Node-ESM-Skripte (`.mjs`), kein Build-Schritt, passend zum bestehenden "kein Linter/Test-Runner"-Charakter des Repos.

## Workflow (Ende-zu-Ende)

1. Skill wird für eine Seite aufgerufen (Pilot: `Home.tsx`).
2. Claude liest die TSX, zerlegt sie in inhaltliche Abschnitte, ordnet jedem Abschnitt eine Pastellfarbe (`design_signature.md`) und ein oder mehrere Addons zu (`sp_page_builder.md`), inkl. Signature-Grafiken (`signature_images.md`) wo inhaltlich passend.
3. Claude schreibt/aktualisiert `tools/sppb-export/pages/home.mjs`.
4. `node generate.mjs home` → `export/home.json`.
5. `node validate.mjs export/home.json` prüft: bekannte Addon-Namen, Pflichtfelder vorhanden, gültige Section/Column/Addon-Verschachtelung, aufgelöste `nested_row`-Referenzen (Accordion/Tab). Bricht mit konkreter Fehlermeldung ab (z.B. „Addon `foo` unbekannt", „Pflichtfeld `text` fehlt bei `text_block`").
6. **Pilot-Verifikation (manuell durch den Nutzer):** Import von `export/home.json` über die SP-Page-Builder-Oberfläche im Joomla4-Testsystem, visuelle Kontrolle im Frontend. Rückmeldung/Screenshot bei Abweichungen fließt zurück in Builder-Defaults oder Recipe.

## Fehlerkorrektur-Modell

Da Builder-Funktionen die SPPB-Boilerplate kapseln, sind zwei Korrekturebenen sauber getrennt:
- **Seiteninhalt/-layout falsch** → Recipe-Datei der betroffenen Seite anpassen, neu generieren.
- **SoLaWi-weiter Default falsch** (z.B. falscher Grünton) → einmal im Builder ändern, wirkt auf alle Seiten, die diesen Builder nutzen.

## Out of Scope (diese Session)

- Konvertierung aller 20 Seiten (folgt nach Freigabe des Piloten)
- Automatisierter Import in Joomla (Browser-Automatisierung/API) – Pilot-Test läuft manuell
- Automatisierter Bild-Upload in den Joomla-Media-Manager (Bildpfade werden referenziert, Upload bleibt vorerst manueller Schritt)
- Vollständige Dokumentation aller ~70 SPPB-Addons – dokumentiert werden die ~19 in `sp_page_builder.md` gelisteten plus Row/Column/Section, Erweiterung bei Bedarf

## Erfolgskriterium

`export/home.json` besteht die Struktur-Validierung und lässt sich im Joomla4-Testsystem importieren; das Frontend-Ergebnis entspricht dem Prototyp so weit, dass nur kleinere manuelle Nacharbeiten in der SPPB-Oberfläche nötig sind (keine grundsätzlichen Struktur-/Schema-Fehler).
