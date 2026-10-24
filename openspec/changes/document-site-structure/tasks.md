# Tasks

## 1. Specs formal prüfen

- [ ] 1.1 `openspec validate document-site-structure --strict` ausführen und alle Fehler/Warnungen beheben; Verifikation: Befehl endet mit Exit-Code 0 und meldet neun Capabilities
- [ ] 1.2 Jede Requirement-Beschreibung auf höchstens 500 Zeichen und jede Requirement auf mindestens ein `####`-Szenario prüfen; Verifikation: `--strict` meldet keine Längen- oder Szenario-Warnung

## 2. Specs gegen die laufende Seite abgleichen

Der Dev-Server läuft beim Nutzer; die Prüfung erfolgt gegen diese Instanz, ohne einen eigenen Server zu starten. Abweichungen werden entweder in der Spec korrigiert (Spec war falsch) oder in `design.md` unter "Befunde" ergänzt (Seite ist falsch).

- [ ] 2.1 `site-navigation` prüfen: vier Haupteinträge, alle 21 Untermenü-Ziele (2 Start, 9 Ernteanteile, 6 Mitmachen, 4 Fragen & Antworten) inklusive Anker, Desktop-Hover bei 1280 px, Mobile-Panel bei 390 px, Footer-Links; Verifikation: Ergebnisliste je Szenario (ok/Abweichung) liegt vor
- [ ] 2.2 `start-page` und `harvest-shares` prüfen: Anker `solawi-60-sekunden`/`was-bekomme-ich`, sechs Kacheln, Kategorien-Reihenfolge, alle neun Detailseiten mit `h1`, Zeiträumen und Preishinweis; Verifikation: Ergebnisliste, jede der neun Routen einzeln abgehakt
- [ ] 2.3 `participation`, `faq` und `depots` prüfen: fünf Anker auf `/mitmachen`, drei Anker und Akkordeon-Verhalten auf `/haeufige-fragen`, 13 Kartenmarker, neun Depotkarten, Tabelle mit fünf Zeilen; Verifikation: Ergebnisliste
- [ ] 2.4 `registration-contact`, `supporting-pages` und `legal-pages` prüfen: Pflichtfeld-Validierung und Bestätigungsansicht auf `/anmeldung`, Abschnitte auf `/kontakt-anmeldung`, PDF-Download (HTTP 200, `application/pdf`), zehn Datenschutz-Abschnitte, keine Analyse-Anfragen im Netzwerk-Tab; Verifikation: Ergebnisliste
- [ ] 2.5 Alle in 2.1–2.4 gefundenen Abweichungen in Spec oder `design.md` einarbeiten und `openspec validate document-site-structure --strict` erneut ausführen; Verifikation: Validierung grün, `git diff` zeigt die Korrekturen

## 3. Veraltete Doku ablösen

- [ ] 3.1 `docs/seiten-katalog.md` durch eine kurze Datei ersetzen, die auf `openspec/specs/` verweist und nur die Routenliste (Route → Capability) enthält; Verifikation: Jede der 21 Routen aus `src/app/routes.tsx` steht genau einmal mit zugehöriger Capability in der Datei, keine nicht existierende Route kommt vor
- [ ] 3.2 In `CLAUDE.md` unter "Architecture" den Satz "8 pages" korrigieren und auf `openspec/specs/` als Beschreibung der Seitenstruktur verweisen; Verifikation: `grep -n "8 pages" CLAUDE.md` liefert keinen Treffer, der Verweis ist vorhanden

## Workflow follow-up

- Review der Specs durch den Nutzer, danach Archivierung des Changes (`/opsx:archive`), damit die Specs unter `openspec/specs/` entstehen.
- Verifizieren, dass nach Archivierung neun Verzeichnisse unter `openspec/specs/` existieren.
- Aus den Befunden in `design.md` pro Thema einen eigenen Change vorschlagen (z. B. Anmeldeweg vereinheitlichen, Platzhalter auf `/anmeldung` ersetzen, toten Anker `#teilnahme` beheben, `/kalender` verlinken oder entfernen, Newsletter-Button und Social-Links klären). Jeder dieser Changes formuliert sein Delta gegen die hier entstandenen Specs.
- Optional: Playwright-Smoke-Tests aus den Szenarien ableiten (eigener Change, da Test-Infrastruktur fehlt).
