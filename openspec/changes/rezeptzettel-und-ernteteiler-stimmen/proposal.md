# Proposal

## Why

Jede Ernteanteil-Seite hat im Abschnitt "Aus der Küche" nur eine Rezeptidee als Kurzzeile mit externem Link. Dafür gibt es kein eigenes Design, und die Seite verlässt der Link. Ein Rezept ist aber der Moment, in dem aus einem Produkt eine Mahlzeit wird. Dazu fehlt die Stimme der anderen Ernteteiler:innen. Sie sagt, was ihnen an den Zutaten gefällt, etwa wie sie schmecken, und das überzeugt Interessierte glaubwürdiger als der Hof allein. Die Hofstimme ist bereits als Brief gestaltet, ihr Gegenstück fehlt.

## What Changes

- Neue Komponente **Rezeptzettel** im Abschnitt "Aus der Küche": Titel, Eckdaten (Zeit, Portionen, Saison), Zutaten und Zubereitungsschritte nebeneinander, optionales Foto im Versatzrahmen, optionaler Hof-Tipp. Die Karten für Lagerung und Verwertung bleiben kompakt.
- Neuer Abschnitt **"Das gefällt Ernteteiler:innen besonders"** mit bis zu drei kurzen Zitaten von Ernteteiler:innen über das, was ihnen an den Zutaten gefällt: Geschmack, Frische, Sorten. Jedes Zitat hat eine Signatur (Vorname) und nennt optional die Zutat, um die es geht. Er steht nach "Aus der Küche", vor "Das kostet".
- Neue optionale Datenfelder `rezept` und `stimmen` am Ernteanteil. Auf `tristan-gemuese` hat jede Saison ihr eigenes Rezept und ihre eigenen Stimmen, weil die Saisonabschnitte je einen Ernteanteil rendern.
- Platzhalter für Rezept und Stimmen im bestehenden Platzhalter-Mechanismus, damit der Seitenaufbau vor dem Livegang prüfbar ist.
- Die bisherige Rezeptidee als Kurzzeile mit Link entfällt als Kartentyp. Ein Rezept mit externer Quelle bleibt als Quellenzeile im Zettel möglich.
- Todo-Einträge: Rezepte vom Hof holen, Zitate und Einwilligung der Ernteteiler:innen einholen.

Keine eigene Unterseite und keine neue Route.

## Capabilities

### New Capabilities

### Modified Capabilities
- `harvest-shares`: Abschnitt "Aus der Küche" bekommt den Rezeptzettel, neuer Abschnitt Ernteteiler-Stimmen, Seitengerüst und Quellenregel werden entsprechend erweitert.

## Impact

- Code: `src/app/data/ernteanteile.ts` (Typen), `src/app/components/AusDerKueche.tsx`, neue Komponenten `Rezeptzettel.tsx` und `ErnteteilerStimmen.tsx`, `src/app/components/ErnteanteilSeite.tsx` (Einbindung), `src/app/data/platzhalter.ts`.
- Spec: `openspec/specs/harvest-shares/spec.md`.
- Doku: `docs/todo.md` (Abschnitt 3a), `docs/styleguide.md` (neue Muster).
- Joomla-Export: Das noch offene Export-Rezept für Ernteanteil-Seiten muss den Zettel und die Stimmen mit abbilden. Das ist kein Teil dieser Änderung.
- Rechtlich: Zitate von Ernteteiler:innen sind personenbezogen. Sie brauchen Einwilligung und ein bestätigtes Zitat, siehe Foto-Einwilligung in der TNV (`docs/todo.md`, Abschnitt 4).
