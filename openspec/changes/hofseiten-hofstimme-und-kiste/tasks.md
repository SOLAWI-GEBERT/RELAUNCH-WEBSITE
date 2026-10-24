# Tasks

Prüfung im Browser läuft über den bereits laufenden Dev-Server des Nutzers (`localhost:5173`), nie selbst `npm run dev` starten.

## 1. Datenmodell

- [x] 1.1 `Hof` in `src/app/data/hoefe.ts` um optionale Felder `logo { src, alt }` und `zitat { anrede, text, signatur }` erweitern; Prüfen: `npm run build` ohne Typfehler, bestehende Höfe unverändert gültig.
- [x] 1.2 `Ernteanteil` in `src/app/data/ernteanteile.ts` um optionale Felder `kiste { beispiele[], mengen }` (Beispiel: Titel, Inhalt, optional Kochidee) und `kueche[]` (Titel, Text, optional Link; höchstens drei) erweitern; Kommentar zur Quellenregel ("nur vom Hof bestätigt") ergänzen; Prüfen: `npm run build`, alle neun Seiten rendern unverändert.

## 2. Rahmung, Stempel und Etikett

- [x] 2.1 Klassen für gerahmtes Hoffoto (Rundung, Versatzrahmen in Kategoriefarbe) und Kistenetikett (leichte Drehung, Rahmen, Versatz) in `src/styles/theme.css` anlegen, Rahmenfarbe über eine CSS-Variable aus `kategorieFarben`; Prüfen: Biohof Tristan und Demeterhof Walz zeigen im Browser dieselbe Rundung und denselben Versatz, Farbe folgt der Kategorie.
- [x] 2.2 Bauteil `HofLogo` (Einfarb-Stempel per Maske in Textfarbe, `role="img"` mit Alt-Text) anlegen und im Kopfband von `ErnteanteilSeite` einbinden, nur wenn `logo` gesetzt ist; Prüfen: mit Test-Logo auf einem Hof erscheint der Stempel in Hell- und Dunkelmodus lesbar, ohne Logo kein Leerraum im Kopfband.
- [x] 2.3 `HofSteckbrief` auf gerahmtes Foto und Logo als Kistenetikett umstellen (unten rechts am Bild); Platzhalter ohne Foto bleibt; Prüfen: `walz-huhn` und `walz-wurst` zeigen identischen Steckbrief, Schweigerts zeigt weiter den neutralen Platzhalter, Etikett überdeckt kein Motiv.
- [x] 2.4 Regel zu Rahmung, Stempel und Etikett in `docs/styleguide.md` ergänzen; Prüfen: Abschnitt nennt Klassen, Position und die Regel "Hoffarbe wirkt nie auf Flächen".

## 3. Hofstimme

- [x] 3.1 Bauteil `Hofstimme` (Karte in `flaeche`-Farbe der Kategorie, Anrede, Zitat, Signatur, Logo als Absender-Stempel) anlegen; Prüfen: Karte rendert mit Test-Zitat, Typografie folgt `docs/styleguide.md`.
- [x] 3.2 In `ErnteanteilSeite` unmittelbar nach dem Hof-Steckbrief einbinden, nur wenn `zitat` gesetzt ist; Prüfen: ohne Zitat folgen die übrigen Abschnitte unmittelbar nach dem Steckbrief, mit Zitat erscheint die Karte auf allen Seiten dieses Hofs.

## 4. In der Kiste und Aus der Küche

- [x] 4.1 Bauteil `InDerKiste` (Beispiel-Karten mit optionaler Zeile "Was du damit kochst", Mengen im Alltag) anlegen und in `ErnteanteilAbschnitt` nach "Was steckt drin" einbinden; Prüfen: mit Testdaten rendert der Abschnitt, ohne Daten fehlt er samt Überschrift.
- [x] 4.2 Bauteil `AusDerKueche` (bis drei Karten, Rezeptidee als Kurzzeile mit optionalem Link) anlegen und nach "In der Kiste", vor "Das kostet" einbinden; Prüfen: Link öffnet das Ziel, ohne Daten fehlt der Abschnitt.
- [x] 4.3 `TristanGemuese` prüfen: "In der Kiste" und "Aus der Küche" erscheinen innerhalb von `#winter` und `#sommer` mit je eigenen Daten, Anker scrollen weiter; Prüfen: im Browser `/ernteanteile/tristan-gemuese#sommer` mit Testdaten.
- [x] 4.4 Testdaten wieder entfernen; Prüfen: `grep` findet keine Testtexte oder Platzhalter in `src/app/data`, `npm run build` ohne Fehler.

- [x] 4.5 `KistenBeispiel` um `groesse`, `foto` und `produkte { name, menge? }` erweitern (`inhalt` bleibt als einfache Variante) und `InDerKiste` auf Kistenkarte umbauen (4:3-Foto, Größen-Badge, Produktliste mit Menge); Prüfen: Karte rendert mit und ohne Foto, mit Liste und mit `inhalt`, mobil eine Spalte.
- [x] 4.6 Platzhalter auf Kistenkarten umstellen: Bild-Platzhalter als Datei unter `public/platzhalter/`, eine Karte je TNV-Größe bei Ernteanteilen mit mehreren Größen (Gemüse Normal/Klein, Pilze 600 g/300 g), sonst drei allgemeine Karten; Prüfen: `tristan-gemuese` zeigt je Saison Karten für Normal und Klein, `walz-huhn` drei Karten ohne Größen-Badge.

- [x] 4.7 Handgezeichnete Holzkiste (`public/Holzkiste.png`) freigestellt und auf 480 px verkleinert als `public/kiste-illustration.png` (58 KB) neben die Überschrift "In der Kiste" setzen, dekorativ mit leerem Alt-Text; Prüfen: Bild lädt, auf Seiten mit lachsfarbenem und grünem Kopfband ohne Randsaum, kein horizontaler Überlauf.

## 5. Belegte Inhalte einpflegen

- [ ] 5.1 Logo-Dateien der Höfe (SVG oder PNG mit Alpha) unter `public/` ablegen und in `hoefe.ts` verknüpfen, soweit geliefert; Prüfen: jedes eingetragene Logo ist transparent und als Stempel erkennbar, fehlende Logos bleiben ungesetzt (Kirschgarten ohnehin).
- [x] 5.2 Zitate und Signaturen nur dort eintragen, wo sie aus den Hof-Webseiten stammen oder vom Hof bestätigt sind; Prüfen: je Eintrag ein Kommentar mit Quelle, Du-Ansprache in Anrede und Signatur, Wortlaut vom Hof bestätigt (offen markieren, falls noch nicht erfolgt).
- [ ] 5.3 Kistenbeispiele, Mengen und Küchentipps nur eintragen, soweit vom Hof geliefert; Prüfen: kein Text ohne Quelle, keine Mengenangabe, die der TNV widerspricht.

- [ ] 5.4 Platzhalter vor dem Livegang abschalten: `PLATZHALTER_AKTIV = false` in `src/app/data/platzhalter.ts` setzen oder die Datei samt `public/platzhalter/` löschen und Aufrufe entfernen; Prüfen: `grep -rni "platzhalter" src public` findet keine Hofinhalte mehr, Seiten ohne echte Daten zeigen die Abschnitte nicht.

## 6. Abschluss

- [x] 6.1 Alle neun Detailseiten im Browser durchgehen (Hell und Dunkel, Handybreite): Reihenfolge Kopfband → Steckbrief → Hofstimme → Beschreibung → Was steckt drin → In der Kiste → Aus der Küche → Das kostet → Lieferung & Info → Button, kein leerer Abschnitt, genau ein `h1`.
- [ ] 6.2 Joomla-Export mit dem Skill `sppb-export` für eine Seite mit Logo, Zitat und Kistenbeispielen probeweise erzeugen; Prüfen: Logo, Foto, Zitat und Karten erscheinen als Standard-Addons, Abweichungen in `docs/sppb` notieren.
- [x] 6.3 `docs/seiten-katalog.md` auf Aktualität prüfen (keine Routenänderung erwartet) und `npm run build` ausführen; Prüfen: Build ohne Fehler.

## Workflow follow-up

- Archive the change after the project's review requirements are satisfied.
- Verify the archived result.
