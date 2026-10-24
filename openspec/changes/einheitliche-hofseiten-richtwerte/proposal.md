# Proposal

## Why

Die neun Ernteanteil-Detailseiten teilen nur Kopfband, Hof-Steckbrief, Preistabelle und CTA. Der Mittelteil (Beschreibung, Foto, Sortiment, Hinweise) ist pro Seite von Hand gebaut, Überschriften und Kopffarben sind uneinheitlich. Zugleich stehen die Preise auf Cent genau im Code (z. B. 122,20 € + 14,00 €), obwohl sie nicht aktiv gepflegt werden können — die Teilnahmevereinbarung (TNV) ist das Maß. Genaue Beträge veralten still und erwecken den Eindruck von Festpreisen.

## What Changes

- Alle neun Hofseiten bekommen dasselbe Seitengerüst mit festen Abschnitten in fester Reihenfolge; der Hof-Steckbrief bleibt oben.
- Texte, Sortiment, Foto und Hinweise je Ernteanteil wandern aus den Seiten in die Daten; Kopffarbe und Icon kommen aus der Kategorie.
- Preise werden als **Richtwert-Spannen** pro Monat (inkl. solidarischem Beitrag) gezeigt, nicht mehr als exakte Beträge. Jede Preisangabe verweist auf die TNV als verbindliche Quelle (Version und Stand).
- Die Spalten Paketpreis / Soli-Beitrag / Gesamt entfallen zugunsten einer Spalte "Richtwert pro Monat". Einzelvarianten werden als Zeile statt als Tabelle gezeigt.
- Bieterrunden-Hinweis und Richtwert-Hinweis werden zu einer Aussage zusammengeführt ("Richtwert, verbindlich ist die TNV").
- Die sechs Kacheln "Was bekomme ich?" auf der Startseite werden aus denselben Daten gespeist wie die Ernteanteile-Übersicht; Gemüse-Kachel beschreibt Winter und Sommer, "Ur-Getreide" heißt "More..Ur-Getreide".
- **BREAKING** (inhaltlich): exakte Paketpreise, Soli-Beitrag und Gesamtbetrag erscheinen nicht mehr auf der Website.

## Capabilities

### New Capabilities

Keine.

### Modified Capabilities

- `harvest-shares`: einheitliches Seitengerüst der Detailseiten; Preise als Richtwert-Spannen mit TNV-Verweis statt Paketpreis/Soli/Gesamt; Bieterrunden-Hinweis geht im Richtwert-Hinweis auf.
- `start-page`: Kacheln "Was bekomme ich?" zeigen dieselben Produktnamen und Kurztexte wie die Ernteanteile-Übersicht.

## Impact

- Code: `src/app/data/ernteanteile.ts` (Datenmodell, Texte, Richtwerte), `src/app/components/PreisTabelle.tsx`, neues Seitengerüst-Bauteil, alle neun Dateien in `src/app/pages/ernteanteile/`, Kachelabschnitt in `src/app/pages/Home.tsx`.
- Specs: Deltas für `harvest-shares` und `start-page`; `docs/seiten-katalog.md` bleibt unverändert (Routen ändern sich nicht).
- Keine neuen Abhängigkeiten, keine Routenänderung.
- Inhaltlich zu klären bei der Umsetzung: Lieferzyklus von More..Bratgockerl ("1x pro 4 Monate") gegen die TNV V26.4 prüfen, damit die Spanne eindeutig pro Lieferung oder pro Monat gilt.
