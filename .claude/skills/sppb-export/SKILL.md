---
name: sppb-export
description: Wandelt eine Seite aus src/app/pages/*.tsx in eine importierbare SP Page Builder Pro JSON-Datei um. Nutzen, wenn eine Prototyp-Seite für die Joomla-Umsetzung exportiert werden soll.
---

# SPPB Export

Wandelt eine React-Prototyp-Seite in `src/app/pages/*.tsx` in eine SP Page Builder
Pro Import-Datei (`export/<page>.json`) um. Hintergrund: `docs/superpowers/specs/2026-09-06-sppb-export-toolset-design.md`.

## Ablauf

1. **Seite lesen:** Die Ziel-TSX-Datei vollständig lesen (`src/app/pages/<Name>.tsx`).
2. **Farbe & Abschnitte zuordnen:** Für jeden JSX-`<section>` die Hintergrundfarbe
   anhand der tatsächlichen Tailwind-Klasse und `src/styles/theme.css` bestimmen
   (nicht aus altem Gedächtnis übernehmen — Farben ändern sich). Bei mehreren
   inhaltlich zusammengehörigen `<section>`-Blöcken mit gleicher Farbe: als mehrere
   SPPB-Sections mit identischem `backgroundColor` abbilden (siehe `pages/home.mjs`
   als Beispiel für "SoLaWi in 60 Sekunden").
3. **Addon je Inhaltsblock wählen**, gestützt auf:
   - `docs/sppb/page-format.md` für die Grundstruktur (Envelope/Section/Column/globale Felder)
   - `docs/sppb/addons/*.md` für die verfügbaren Felder je Addon-Typ
   - vorhandene Builder in `tools/sppb-export/builders/*.mjs` — wenn ein Builder für
     den gebrauchten Addon-Typ fehlt, zuerst nach demselben Muster wie die
     bestehenden Builder (siehe Task 1–4 des Implementierungsplans,
     `docs/superpowers/plans/2026-09-06-sppb-export-toolset.md`) ergänzen,
     inkl. Test (Testkommando: `node --test 'tools/sppb-export/**/*.test.mjs'` —
     Achtung: `node --test tools/sppb-export` mit bloßem Verzeichnis funktioniert
     unter Node 22 NICHT)
   - Farbsignatur/Illustrationszuordnung, falls in den Projekt-Memories vorhanden
     (`design_signature.md`, `signature_images.md`) — vor Verwendung gegen den
     aktuellen Code verifizieren, Memories können veraltet sein
4. **Recipe schreiben** unter `tools/sppb-export/pages/<page>.mjs`, die `buildPage()`
   exportiert (siehe `pages/home.mjs`).
5. **Generieren:** `node tools/sppb-export/generate.mjs <page>`
6. **Validieren:** `node tools/sppb-export/validate.mjs export/<page>.json` — Fehler
   in der Recipe beheben, bis die Ausgabe `OK: ...` zeigt.
7. **Bilder bereitstellen:** Alle referenzierten `images/...`-Pfade müssen vor dem
   Import manuell in den Joomla-Media-Manager unter demselben relativen Pfad
   hochgeladen werden (Dateien liegen im Prototyp unter `/public/`).
8. **Manueller Import-Test** (siehe Abschnitt unten) — Ergebnis abwarten, bevor die
   nächste Seite angegangen wird.

## Schichtenmodell: Helix-Template vs. SPPB-Seite

Das Corporate Design (Farb-Preset für Body/Links/**Buttons**, Fonts h1–h6/Body,
Header/Footer) liegt im **Helix-Template-Style** und wird einmal importiert
(`export/SLB_init_*.json`, Weg und Schema in `docs/sppb/helix-template.md`).
Das Toolset setzt nur, was Helix nicht liefert: Sektions-/Kartenhintergründe,
Padding/Schatten, Abstände, Entrance-Animationen.

- Buttons immer `type: 'primary'` (Default des Builders) — erbt `link_color`/`link_hover_color`
  des Presets. Keine hart codierten Button-Farben.
- Der Body-Hintergrund des aktiven Presets ist **mauve** (`#C7AFC7`): Abschnitte, die im
  Prototyp weiß sind, brauchen `backgroundColor: '#ffffff'`.
- Vor jedem Import-Test prüfen, dass der Helix-Style im Testsystem importiert ist —
  sonst sind Fonts/Button-Farben nicht vergleichbar. Ziel-Style ist **Educon_ii - Default**
  (das aktive Template `educon_ii`, Style-ID 13), und nach dem Import muss der
  kompilierte CSS-Cache geleert werden (`cache/com_templates/templates/educon_ii/`),
  sonst bleibt das alte Farbschema stehen. Details: `docs/sppb/helix-template.md`.
- Ein Prototyp-Abschnitt, der auf mehrere SPPB-Sections verteilt wird, bekommt über
  `padding` die doppelten 96px-Abstände herausgenommen (Muster in `pages/home.mjs`:
  `PAD_HEADING` / `PAD_MIDDLE` / `PAD_ROW_GAP` / `PAD_LAST`).
- Animationen (im Editor unter *Style → Animation*) nur auf **Bildern und Boxen**
  (`image`, `feature`, `image_content`): `animation: 'headShake'` — der Attention
  Seeker entspricht dem frechen `hover-wiggle`/`hover-tilt` des Prototyps.
  Überschriften, Text und Buttons bekommen keine Animation. `animationDelay` (ms)
  staffelt Karten in einer Reihe (0/100/200 …). `ScrollReveal`-Einblendungen des
  Prototyps werden nicht nachgebaut.
- Freche Akzente `badge-frech` (Hero-Badge) und `underline-sketch` (Wort-Unterstreichung
  in Überschriften) sind als CSS-Klassen im Helix-Style hinterlegt (`custom_css`).
  Im Recipe nur das Markup: `textBlock({ text: '<span class="badge-frech">…</span>' })`
  bzw. `heading({ title: 'Warum <span class="underline-sketch">mitmachen</span>?' })`
  — Helper `badge()`/`sketch()` in `pages/home.mjs`. Neue Akzent-Klassen gehören in
  die Init-Datei, nicht in Recipes.
- Die Wortbildmarke „Stadt, Land, **Beides.**" lebt im **Header-Logo des Helix-Styles**
  (`logo_type: text`), nicht in den Recipes — Farbe/Fettung dort regeln
  (`docs/sppb/helix-template.md`). Der Hero-h1 darf die Welle behalten.
- Wellige Sektionsteiler (`wave-top`/`wave-bottom`) → `section({ topShape/bottomShape:
  { name: 'wavy-opacity', color } })` mit `color` = Hintergrund der **angrenzenden**
  Section (oben: vorherige, unten: folgende); bei mehreren SPPB-Sections pro
  Prototyp-Abschnitt nur auf der ersten (top) bzw. letzten (bottom). Alternative
  `'rocky-mountain'` für den comic-artigen Stil.

## Fehlerkorrektur

- **Seiteninhalt/-layout falsch** → die betroffene Stelle in
  `tools/sppb-export/pages/<page>.mjs` anpassen, Schritt 5+6 wiederholen.
- **SoLaWi-weiter Default falsch** (z.B. Farbwert, Standard-Padding) → einmal im
  betroffenen Builder in `tools/sppb-export/builders/` ändern — wirkt auf alle
  Seiten, die diesen Builder verwenden.
- **Addon-Feld fehlt/falsch benannt** → den passenden Eintrag in
  `docs/sppb/addons/<name>.md` gegen die aktuelle
  `Joomla4/components/com_sppagebuilder/addons/<name>/admin.php` prüfen und sowohl
  Doku als auch Builder korrigieren.

## Manueller Import-Test (Joomla4-Testsystem)

1. Im Joomla-Backend des Testsystems (`/Users/linus/Documents/0_Development/Joomla4`)
   unter **Components → Page Builder** eine neue Seite anlegen.
2. Die Import-Funktion der SP-Page-Builder-Oberfläche nutzen und `export/<page>.json`
   hochladen.
3. Im Frontend die Seite ansehen, mit der TSX-Referenzseite vergleichen: Struktur,
   Texte, Bilder (nach manuellem Upload), Farben, Links.
4. Button-Styling prüfen (`type: 'custom'` ohne Farbfelder kann ungestylt erscheinen).
5. Link-Felder prüfen (Buttons, `title_url`, `button_url` korrekt übernommen?).
6. Abweichungen zurückmelden — Korrektur läuft über den Abschnitt "Fehlerkorrektur"
   oben.
