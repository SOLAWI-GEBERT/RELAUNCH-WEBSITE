# Tasks

## 1. Datenmodell und Richtwerte

- [ ] 1.1 `Variante` um `richtwert { von, bis }` erweitern, `paketpreis`/`soli` ablösen; TNV-Konstanten (Version V26.4, Stand, PDF-Pfad) anlegen. Prüfen mit `npm run build` ohne Typfehler.
- [ ] 1.2 Spannen für alle Varianten aus der TNV V26.4 nach der Regel im Design eintragen; Lieferzyklus Bratgockerl gegen die TNV klären. Prüfen: jede Spanne schließt den TNV-Gesamtbetrag ein, Stichprobe von fünf Varianten gegen das PDF.
- [ ] 1.3 Beschreibung, Foto, Sortimentskarten und Info-Absätze je Ernteanteil in die Daten übernehmen (Texte aus den neun Seiten). Prüfen: kein Text geht verloren, Diff der gerenderten Seiten vor/nachher.

## 2. Seitengerüst und Preisbereich

- [ ] 2.1 Bauteil `ErnteanteilSeite` mit Slots, Kategorie-Farbe und -Icon bauen; ein einzelner `h1`. Prüfen: Walz-Seiten zeigen dieselbe Kopffarbe je Kategorie.
- [ ] 2.2 `PreisTabelle` auf Richtwert-Spanne umbauen (Spalten Größe, Zyklus, Lieferphase, Richtwert; Einzelvariante als Zeile), Hinweis "Richtwert, verbindlich ist die TNV" mit Link, Vereinsbeitrag unverändert. Prüfen im Browser: keine Cent-Beträge auf den Detailseiten.
- [ ] 2.3 Bieterrunden-Block und Richtwert-Hinweis zusammenführen; Zusatz "Richtpreis" in den Zeilen entfernen. Prüfen auf `/ernteanteile/tristan-gemuese`.

## 3. Seiten umstellen

- [ ] 3.1 Acht Seiten außer Tristan auf `ErnteanteilSeite` umstellen, doppelte Überschrift entfernen. Prüfen: Reihenfolge Kopf → Steckbrief → Beschreibung → Preise → CTA auf allen acht.
- [ ] 3.2 `TristanGemuese.tsx` auf dasselbe Gerüst mit Saisonabschnitten `#winter`/`#sommer` umstellen; Redirects `tristan-winter`/`tristan-sommer` prüfen. Prüfen: Anker scrollen, Hinweis "ab April 2027" sichtbar.
- [ ] 3.3 Abgleich mit `harvest-shares`: Verfügbarkeits-Badges, Vereinsbeitrag-Hinweis und Platzhalter bei Schweigerts weiterhin vorhanden. Prüfen durch Durchklicken aller neun Routen.

## 4. Startseite

- [ ] 4.1 Kacheln in `Home.tsx` aus den Daten speisen (feste Slug-Liste, Titel, Hof, `kurz`, Icon). Prüfen: Texte stimmen mit `/ernteanteile` überein, "More..Ur-Getreide", Gemüse nennt beide Saisons, sechs Links ohne Fehlerseite.

## 5. Abschluss

- [ ] 5.1 `grep` auf verwaiste Referenzen (`paketpreis`, `soli`, `gesamtbetrag`, `formatEuro`, V9.3-Links) und `npm run build`; `docs/anforderung-tnv-v26-4.md` bei Bedarf um die Richtwert-Regel ergänzen.

## Workflow follow-up

- Specs per `/opsx:archive` in die Main-Specs übernehmen, sobald die Umsetzung geprüft ist.
