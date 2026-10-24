# Design

## Context

`AusDerKueche.tsx` rendert bis zu drei Karten (`KuechenTipp`: Titel, Text, optionaler Link). `ErnteanteilAbschnitt` in `ErnteanteilSeite.tsx` setzt den Abschnitt zwischen Farbband ("Was steckt drin" / "In der Kiste") und "Das kostet". Dieselbe Funktion rendert auf `tristan-gemuese` einmal je Saison mit `h3`. Daten stehen statisch in `ernteanteile.ts`, fehlende Felder füllt `platzhalter.ts` (`PLATZHALTER_AKTIV`). Die Hofstimme ist ein Brief in `kategorieFarben[...].flaeche` mit `font-accent italic`; Fotos nutzen die Klasse `hof-foto` (Versatzrahmen aus `--hof-rahmen`). Motivation: siehe proposal.md.

## Goals / Non-Goals

**Goals:**
- Rezept und Ernteteiler-Stimmen fügen sich in die vorhandenen Muster ein, ohne neue Tokens oder Schriften.
- Beide Teile sind optional und lassen sich je Ernteanteil, auf Tristan je Saison, pflegen.

**Non-Goals:**
- Keine Rezept-Unterseiten, keine Routen, keine Rezeptsuche oder Filter.
- Kein Formular zum Einreichen von Stimmen oder Rezepten.
- Kein Joomla-Export in dieser Änderung.

## Decisions

**Rezept als Zettel im Abschnitt, nicht als Unterseite.** Pro Produkt gibt es genau ein Rezept. Eine Route bräuchte Einträge in `routes.tsx`, Navigation und ein eigenes Export-Rezept. Slugs und strukturierte Daten bleiben so angelegt, dass ein späterer Umstieg auf Unterseiten die Daten nicht ändert.

**Datenmodell am Ernteanteil.**
```ts
rezept?: {
  titel: string; zeit?: string; portionen?: string; saison?: string;
  zutaten: string[]; schritte: string[];
  foto?: { src: string; alt: string };
  hofTipp?: string;
  quelle?: { text: string; link?: string };
}
stimmen?: { text: string; signatur: string; zutat?: string }[]   // höchstens 3; zutat = Kennzeichnung, z. B. "Hokkaido"
```
Eckdaten sind Freitext (z. B. "30 Min."), damit der Hof schreibt, was er weiß, statt Zahlenfelder zu füllen. `KuechenTipp.link` entfällt, weil die Rezeptidee nicht mehr als Karte erscheint.

**Layout.** Der Zettel nutzt `kategorieFarben[...].flaeche` und leicht gedrehte Kante (wie der Stempel der Hofstimme). Titel in der Cormorant-Überschrift der Ebene (`h3`/`h4` je nach `ebene`), Eckdaten als Zeile mit Trennern, zwei Spalten ab `md`. Das Foto sitzt mit `hof-foto` rechts neben dem Titel. Die Ernteteiler-Stimmen sind weiße Karten mit Kursivzitat (`font-accent`) auf farbloser Fläche. So lassen sie sich von Hofstimme und Zettel unterscheiden, und die Farbfläche bleibt dem Hof und der Küche vorbehalten.

**Überschrift der Stimmen: "Das gefällt Ernteteiler:innen besonders".** Sie beschreibt die Zitate in dritter Person, ohne die Leser:innen anzusprechen; "Was Ihnen gefällt" scheidet wegen der Duz-Regel aus. Inhaltlich geht es um Zutaten und Geschmack, nicht um Service oder Lieferung. Die optionale `zutat` erscheint als kleines Etikett über dem Zitat und macht den Bezug zum Rezept sichtbar.

**Platzhalter im bestehenden Mechanismus.** `anteilMitPlatzhaltern` ergänzt `rezept` und `stimmen`, die Texte beginnen mit "Platzhalter:". Vor dem Livegang schaltet `PLATZHALTER_AKTIV = false` alles ab, wie schon bei Kiste und Küche. Die Spec-Regel "kein Platzhaltertext" gilt damit unverändert für den Livegang.

**Tristan je Saison.** `tristan-gemuese` rendert pro Saison einen Ernteanteil, also trägt jeder seine eigenen Felder. Dafür ist keine Sonderbehandlung nötig.

**Reihenfolge.** Die Stimmen stehen nach "Aus der Küche", weil sie das Essen und das Produkt bewerten, aber vor dem Preis, wo die Kaufentscheidung fällt.

## Risks / Trade-offs

- **Datenschutz bei Zitaten** → Signatur ist auf Vorname begrenzt (Spec); Einwilligung und Wortlautfreigabe stehen als Todo vor dem Livegang. Platzhalter nennen keine echten Personen.
- **Rezeptrechte bei fremden Quellen** → Rezepte nur vom Hof oder mit Quellenzeile; kein Text aus fremden Seiten kopieren.
- **Lange Rezepte sprengen die Seite** → Spec begrenzt nicht die Länge, aber der Zettel ist auf eine Idee ausgelegt. Das Datenmodell hat keine Unterabschnitte. Bei Bedarf später Unterseite.
- **Gedrehte Kante auf kleinen Bildschirmen** → Rotation nur klein (≤ 1°) und ohne Überstand, damit kein horizontales Scrollen entsteht.
- **Entfallene Rezeptidee-Zeile** → Platzhalter-Link `example.org` wird mit entfernt; es gibt keine echten Einträge, die migriert werden müssten.
