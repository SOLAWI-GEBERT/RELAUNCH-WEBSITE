# Tasks

## 1. FAQ: Newsletter-Kanäle erklären

- [x] 1.1 In `src/app/pages/FragenAntworten.tsx`, Abschnitt "Schnelle Fragen": neuen Akkordeon-Eintrag "Gibt es einen Newsletter?" ergänzen — externer öffentlicher Newsletter (Kochevents, Infoveranstaltungen, Opt-in ohne Mitgliedschaft) vs. interner Newsletter für Mitglieder (Protokolle, interne Treffen), inkl. Hinweis, dass die automatische Eintragung noch nicht steht und bis dahin eine Mail an `Team.Koordination@stadt-land-beides.de` hilft. Verifizieren: Akkordeon öffnet den neuen Eintrag und zeigt den Text; `npm run build` läuft fehlerfrei.
- [x] 1.2 Im selben Abschnitt: neuen Akkordeon-Eintrag "Wie erfahre ich von Terminen und Mitmachangeboten?" ergänzen — Hofaktionen (automatisch per Hof-Post), vereinsweite Termine wie die Jahreshauptversammlung (interner Newsletter), öffentliche Angebote wie Kochevents/Infoveranstaltungen (externer Newsletter). Verifizieren: Akkordeon öffnet den Eintrag und nennt alle drei Kanäle.

## 2. Mitmachen: Hinweis-Satz präzisieren

- [x] 2.1 In `src/app/pages/Mitmachen.tsx`, Abschnitt `#events`: den Satz "Alle Termine erfährst du über die Hof-Post per E-Mail und unseren Newsletter." ersetzen durch eine Formulierung, die Hofaktionen (Hof-Post) von vereinsweiten Terminen (interner Newsletter) unterscheidet, mit einem `Link` auf `/haeufige-fragen#schnelle-fragen`. Verifizieren: Link navigiert zur FAQ-Sektion; Wortlaut widerspricht nicht den neuen FAQ-Antworten aus Gruppe 1.

## 3. `/kalender` entfernen

- [x] 3.1 Route `kalender` (Import und Route-Eintrag) aus `src/app/routes.tsx` entfernen. Verifizieren: `npm run build` läuft fehlerfrei, kein Import-Fehler.
- [x] 3.2 Datei `src/app/pages/Kalender.tsx` löschen. Verifizieren: `grep -rn "Kalender\b" src/app` findet keine verbleibende Referenz auf die Komponente.
- [x] 3.3 Erwähnungen von `/kalender` in `docs/seiten-katalog.md` und `docs/informationsstruktur.md` entfernen bzw. aktualisieren (die Sitemap und die Beobachtungen zum verwaisten Route-Eintrag). Verifizieren: `grep -rn "kalender" docs/` zeigt keinen veralteten Verweis mehr.

## 4. Verifikation

- [x] 4.1 `npm run build` ausführen und auf Fehler prüfen.
- [ ] 4.2 Manuell im Browser prüfen: beide neuen FAQ-Antworten, der präzisierte Mitmachen-Satz samt Link, und dass `/kalender` keine Route mehr liefert.
