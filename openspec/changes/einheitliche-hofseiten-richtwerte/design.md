# Design

## Context

Geteilt sind heute `HofSteckbrief`, `PreisTabelle`, `VerfuegbarkeitsBadge` und der CTA-Button; alles dazwischen steht pro Seite in `src/app/pages/ernteanteile/*.tsx`. Die Preise liegen als exakte Zahlen (`paketpreis`, `soli`, `bieterrunde`) in `src/app/data/ernteanteile.ts` und werden in `PreisTabelle` mit `gesamtbetrag()` und `formatEuro()` gerendert. Die Übersichtsseite liest aus den Daten (`kacheln()`), die Startseite schreibt ihre sechs Kacheln von Hand in `Home.tsx`. Motivation: siehe proposal.md.

## Goals / Non-Goals

**Goals:**
- Ein Seitengerüst für alle neun Seiten; Inhalte kommen aus den Daten, Layout aus einem Bauteil.
- Preise, die ohne Pflege nicht falsch werden, und eine klare Verweiskette zur TNV.
- Startseiten-Kacheln ohne eigene Textkopie.

**Non-Goals:**
- Kein Umbau von Navigation, Routen, Hof-Steckbrief-Inhalten oder der Anmeldung.
- Keine Hof-Ebene (eigene Hofseiten) und keine Änderung der Auswahl der sechs Startseiten-Produkte.
- Kein automatischer Import der Preise aus der TNV.

## Decisions

**Seitengerüst als Bauteil mit Slots.** Ein Bauteil `ErnteanteilSeite` rendert Kopfband, `HofSteckbrief`, Beschreibung (Text, optional Foto), "Was steckt drin" (0–3 Karten), "Das kostet", "Lieferung & Info" und CTA. Kopffarbe und Icon kommen aus der Kategorie, nicht aus der Seite. Für Tristan wird derselbe Inhaltsblock je Saison wiederholt (`#winter`, `#sommer`). *Alternative:* neun Seiten behalten und nur Klassen angleichen — verworfen, weil die Abweichungen dann beim nächsten Edit wieder entstehen. *Alternative:* eine generische Route `/ernteanteile/:slug` — verworfen, weil die neun Komponenten in `routes.tsx` und Specs benannt sind; die Seiten werden dünne Hüllen um das Bauteil.

**Inhalte in den Daten.** `Ernteanteil` bekommt Felder für Beschreibung, optionales Foto samt Alt-Text, Sortimentskarten und Info-Absätze. Die Seitendateien enthalten nur noch `ernteanteilNach(slug)` und das Bauteil. Hof oben bleibt: Steckbrief direkt nach dem Kopfband.

**Richtwert statt Paketpreis/Soli.** `Variante` ersetzt `paketpreis`, `soli` und `bieterrunde`-Anzeige durch `richtwert: { von, bis }` (Euro pro Monat, inkl. Soli). Die Spanne wird beim Eintragen aus dem TNV-Gesamtbetrag abgeleitet und als feste Zahlen gespeichert, damit eine Preisänderung innerhalb der Spanne keine Änderung am Code braucht. Regel: Stufe 5 € ab 30 €, sonst 1 €; `von` = TNV-Betrag abgerundet auf die Stufe und eine Stufe tiefer, `bis` = aufgerundet und eine Stufe höher. *Alternative:* Spanne zur Laufzeit rechnen — verworfen, weil dann die exakten Beträge weiter im Code stünden und gepflegt werden müssten. Das Bieterrunden-Flag bleibt als Schalter für den Erklärblock "Was ist die Bieterrunde?", nicht für eine eigene Preiszeile.

**TNV-Verweis zentral.** Version, Stand und PDF-Pfad (`/TNV_StadtLandBeides_V26_4.pdf`) stehen einmal als Konstanten in den Daten; der Hinweis im Abschnitt "Das kostet" liest sie. Beim nächsten TNV-Wechsel ändert sich nur diese Stelle plus die Spannen. Der Vereinsbeitrag von 1,50 € bleibt exakt, weil er ein fester TNV-Satz ist.

**Startseite aus `kacheln()`.** `Home.tsx` ersetzt die sechs Handkacheln durch eine feste Slug-Liste, die über die Daten aufgelöst wird (Titel, Hof, `kurz`, Kategorie-Icon). Die Kurzbeschreibung der Gemüse-Kachel kommt damit aus `gemueseKachel.kurz` ("Winter- und Sommergemüse …"). Der Produktname "More..Ur-Getreide" ergibt sich aus den Daten.

## Risks / Trade-offs

- [Spannen wirken zu vage und mindern die Kaufentscheidung] → Spannen eng halten (eine Stufe), TNV-Link direkt daneben, genauer Betrag steht in der TNV.
- [Spanne stimmt nach TNV-Änderung nicht mehr] → Versions- und Stand-Angabe sichtbar; Spannen sind als Daten an einer Stelle prüfbar.
- [Gerüst passt nicht für jeden Inhalt, z. B. Seiten ohne Sortiment] → Abschnitte "Was steckt drin" und "Lieferung & Info" sind optional und entfallen leer.
- [Lieferzyklus Bratgockerl ist uneindeutig] → vor dem Eintragen der Spanne gegen die TNV V26.4 prüfen und im Label ausweisen (pro Lieferung oder pro Monat).
- [Verlust der Preisaufschlüsselung] → bewusst, laut Anforderung; die Aufschlüsselung bleibt in der TNV.
