# Proposal

## Why

Der Webseitenentwurf bildet den Höfe- und Ernteanteil-Bestand der Teilnahmevereinbarung
V9.3 ab. Die aktuelle TNV V26.4 (`public/TNV_StadtLandBeides_V26_4.pdf`, Stand 15.10.2026)
hat diesen Bestand grundlegend geändert: Der Demeterhof Hederer ist seit 01.10.2026 nicht
mehr dabei, der Schweigerts Hof ist seit Oktober 2026 neu, und zwei Pakete wechseln den
Hof. Der Entwurf zeigt damit heute zwei Höfe-Angebote, die es nicht mehr gibt, und
verschweigt eines, das bereits buchbar ist.

Gleichzeitig verweist der Entwurf bei jedem Ernteanteil nur auf „siehe Teilnahme-
vereinbarung", statt Preise zu nennen — Interessenten müssen das PDF öffnen, um die
wichtigste Frage beantwortet zu bekommen.

## What Changes

- **BREAKING**: Die Seiten und Routen `/ernteanteile/hederer-sommer` und
  `/ernteanteile/hederer-obst` entfallen ersatzlos. Keine Redirects — der Prototyp ist
  nicht veröffentlicht.
- Der Schweigerts Hof (Rockenbach) kommt als vierter Partnerhof dazu, mit dem Ernteanteil
  **Bio..Edelpilze** und der neuen Kategorie „Pilze".
- Das Sommergemüse wandert vom Demeterhof Hederer zum Biohof Tristan (ab April 2027).
- Das Obst-Paket wandert vom Demeterhof Hederer zum Kirschgarten und heißt dort
  **Stein- & Kernobst** (ab Sommer 2027, zunächst Warteliste).
- Jeder Ernteanteil bekommt einen sichtbaren Verfügbarkeitszustand: heute buchbar,
  „ab April 2027" oder „Warteliste". Bisher wirkten alle Angebote gleich verfügbar.
- Preise werden genannt statt verschwiegen: Paketpreis, solidarischer Beitrag und
  Gesamtbetrag pro Monat und Variante — mit klarer Unterscheidung zwischen
  Bieterrunden-Richtpreisen und Festpreisen.
- Ernteanteile, Preise und Verfügbarkeit ziehen in eine zentrale Datei
  (`src/app/data/ernteanteile.ts`). Übersichtsseite und Navigation leiten ihre Listen
  daraus ab, statt sie je einzeln hartzukodieren.
- `src/app/pages/Anmeldung.tsx` verliert seine Figma-Platzhalter bei Paket- und
  Depotauswahl („Käse von Kerschbaum", „Depot Nordstadt", „Sommergemüse 45 €/Monat").

## Capabilities

### New Capabilities

Keine. Zum Zeitpunkt des ursprünglichen Proposals gab es noch keine Main-Specs
(`openspec list --specs` meldete „No specs found"), weshalb hier zunächst eigene
Capabilities `ernteanteile` und `hoefe` entworfen wurden. Parallel wurde über einen
zweiten Change (`document-site-structure`, archiviert) eine seitenbezogene
Capability-Struktur für das gesamte Projekt angelegt. Die Inhalte dieses Changes wurden
daraufhin in diese bestehende Struktur eingeordnet, siehe Modified Capabilities.

### Modified Capabilities

- `harvest-shares`: Kategorien (neu: Pilze), Detailseiten (zehn statt neun, neue Slugs),
  Hof-Steckbriefe (Schweigerts-Badge, Platzhalter ohne Foto), Konditionen (jetzt mit
  Euro-Beträgen statt Preisverweis), Bieterrunden-Hinweis (Tristan statt Hederer),
  Verfügbarkeitszustand und Vereinsbeitrag als neue Requirements.
- `depots`: Lieferrhythmus-Tabelle (sechs statt fünf Zeilen, neuer Hof-Marker Schweigerts).
- `site-navigation`: Untermenü Ernteanteile (sieben Kategorien, zehn Blatt-Einträge).
- `start-page`: Abschnitt „Was bekomme ich?" (neue Kachelauswahl und -ziele).
- `supporting-pages`: Partnerhöfe-Kacheln auf `/solidarische-landwirtschaft`,
  Lieferrhythmus-Verweis auf `/kalender`.
- `registration-contact`: neue Anforderung, dass nicht buchbare Ernteanteile im
  Anmeldeformular deaktiviert erscheinen.

Nicht betroffen: `faq`, `legal-pages`, `participation` — ihre Seiten (`/haeufige-fragen`,
`/impressum`, `/datenschutz`, `/mitmachen`) wurden von diesem Change nicht geändert.

## Impact

**Datenmodell**
- `src/app/data/hoefe.ts` — `hederer` entfällt, `schweigerts` kommt dazu, `tristan` wird
  nach TNV S. 6 aktualisiert
- `src/app/data/ernteanteile.ts` — neu

**Seiten**
- entfallen: `ernteanteile/HedererSommergemuese.tsx`, `ernteanteile/HedererObst.tsx`
- neu: `ernteanteile/TristanSommergemuese.tsx`, `ernteanteile/SchweigertsEdelpilze.tsx`,
  `ernteanteile/KirschgartenObst.tsx`
- geändert: `ernteanteile/TristansWintergemuese.tsx`, `ernteanteile/KirschgartenBeeren.tsx`,
  5× `ernteanteile/Walz*.tsx`

**Komponenten**
- neu: `VerfuegbarkeitsBadge.tsx`, `PreisTabelle.tsx`

**Referenzstellen mit hartkodierten Hof- oder Anteilslisten**
- `routes.tsx`, `components/Navigation.tsx`, `pages/Ernteanteile.tsx`, `pages/Home.tsx`,
  `pages/SolidarischeLandwirtschaft.tsx`, `pages/Depots.tsx`, `pages/Kalender.tsx`,
  `pages/Anmeldung.tsx`

**Unberührt**
- Die Depot-Liste in `pages/Depots.tsx` stimmt bereits exakt mit TNV S. 3 überein,
  inklusive der Wartelisten-Depots Gostenhof und Spiegelfabrik. Dort ändert sich nur die
  Hof-Liste.

**Dokumentation**
- `docs/anmeldung-daten-tnv-v9-3.md` wird durch eine V26.4-Fassung abgelöst

**Keine Abhängigkeitsänderungen.** Kein Backend, keine API — der Entwurf bleibt statisch.
