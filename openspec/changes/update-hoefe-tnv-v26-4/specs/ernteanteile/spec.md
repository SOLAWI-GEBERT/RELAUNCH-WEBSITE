# Spec Delta

## Purpose

Der Katalog der Ernteanteile: welche Anteile angeboten werden, zu welchem Hof sie gehören,
in welchen Varianten, zu welchem Preis und ob sie heute buchbar sind. Legt außerdem fest,
wie dieser Katalog Interessenten gegenübertritt — auf der Übersicht, in der Navigation, auf
den Detailseiten und bei der Anmeldung.

## ADDED Requirements

### Requirement: Katalog folgt der geltenden Teilnahmevereinbarung

Der Katalog SHALL ausschließlich Ernteanteile führen, die in der aktuell geltenden
Teilnahmevereinbarung aufgeführt sind. Ein Ernteanteil, dessen Hof ausgeschieden ist, MUSS
aus allen Oberflächen verschwinden; ein neu aufgenommener MUSS erscheinen. Wechselt ein
Paket den Hof, MUSS es dem neuen Hof zugeordnet sein.

#### Scenario: Ausgeschiedener Hof

- **WHEN** ein Hof laut Teilnahmevereinbarung nicht mehr beteiligt ist
- **THEN** erscheinen seine Ernteanteile weder auf der Übersicht noch in der Navigation,
  der Startseite, dem Lieferrhythmus oder der Anmeldung
- **AND** ihre bisherigen Detailseiten sind nicht mehr erreichbar

#### Scenario: Paket wechselt den Hof

- **WHEN** ein Paket laut Teilnahmevereinbarung von einem Hof zu einem anderen übergeht
- **THEN** wird es unter dem neuen Hof geführt
- **AND** es existiert keine zweite Fassung unter dem alten Hof

### Requirement: Verfügbarkeit ist erkennbar

Jeder Ernteanteil SHALL einen von drei Zuständen tragen: heute buchbar, zu einem genannten
künftigen Zeitpunkt startend, oder vorhanden aber ohne neue Anteile (Warteliste). Nicht
buchbare Anteile MÜSSEN als solche erkennbar sein, bevor jemand die Detailseite öffnet.

#### Scenario: Künftig startender Anteil

- **WHEN** ein Ernteanteil erst zu einem späteren Zeitpunkt geliefert wird
- **THEN** trägt seine Kachel einen Hinweis mit diesem Zeitpunkt
- **AND** die Detailseite nennt den Zeitpunkt ebenfalls

#### Scenario: Warteliste

- **WHEN** ein Ernteanteil existiert, aber keine neuen Anteile vergeben werden
- **THEN** ist er als Warteliste gekennzeichnet

#### Scenario: Buchbarer Anteil

- **WHEN** ein Ernteanteil heute buchbar ist
- **THEN** trägt er keinen einschränkenden Hinweis

### Requirement: Preise werden aufgeschlüsselt genannt

Für jede Variante eines Ernteanteils SHALL der Monatsbeitrag genannt werden, aufgeteilt in
Paketpreis und solidarischen Beitrag, zusammen mit dem Gesamtbetrag. Lieferzyklus und
Lieferphase MÜSSEN je Variante erkennbar sein.

#### Scenario: Anteil mit mehreren Varianten

- **WHEN** ein Ernteanteil in mehreren Größen oder Zyklen angeboten wird
- **THEN** ist jede Variante mit Paketpreis, solidarischem Beitrag und Gesamtbetrag
  aufgeführt
- **AND** jede Variante nennt ihren Lieferzyklus und ihre Lieferphase

### Requirement: Bieterrunden-Preise sind keine Festpreise

Ein Paketpreis, der in der Teilnahmevereinbarung als Bieterrunden-Preis gekennzeichnet ist,
SHALL als Richtpreis ausgewiesen werden und nie als feststehender Betrag. Die Kennzeichnung
gilt je Variante, nicht je Ernteanteil.

#### Scenario: Anteil mit gemischten Varianten

- **WHEN** ein Ernteanteil Varianten mit und ohne Bieterrunden-Kennzeichnung enthält
- **THEN** sind nur die gekennzeichneten Varianten als Richtpreis ausgewiesen
- **AND** die übrigen erscheinen als Festpreis

#### Scenario: Erklärung der Bieterrunde

- **WHEN** ein Ernteanteil mindestens eine Bieterrunden-Variante hat
- **THEN** erklärt die Detailseite, was die Bieterrunde bedeutet

### Requirement: Vereinsbeitrag ist als eigener Posten ausgewiesen

Der verpflichtende Vereinsbeitrag SHALL getrennt von den Paketbeiträgen genannt werden,
mit dem Hinweis, dass er pro Ernteteiler:in nur einmal anfällt — auch bei mehreren
Ernteanteilen.

#### Scenario: Interessent rechnet seinen Monatsbeitrag

- **WHEN** jemand die Kosten mehrerer Ernteanteile zusammenzählt
- **THEN** ist erkennbar, dass der Vereinsbeitrag nur einmal hinzukommt

### Requirement: Katalog ist nach Produktkategorien gegliedert

Ernteanteile SHALL nach Produktkategorien gruppiert dargestellt werden. Eine Kategorie
MUSS entfallen, sobald sie keinen Ernteanteil mehr enthält, und erscheinen, sobald ein
Ernteanteil sie belegt.

#### Scenario: Neue Produktart

- **WHEN** ein Ernteanteil zu einer bisher unbelegten Produktkategorie gehört
- **THEN** erscheint diese Kategorie auf der Übersicht und in der Navigation

#### Scenario: Leergelaufene Kategorie

- **WHEN** der letzte Ernteanteil einer Kategorie entfällt
- **THEN** verschwindet die Kategorie aus Übersicht und Navigation

### Requirement: Alle Oberflächen zeigen denselben Katalog

Übersichtsseite, Navigation, Startseiten-Teaser, Lieferrhythmus und die Paketauswahl der
Anmeldung SHALL denselben Bestand an Ernteanteilen abbilden. Keine Oberfläche darf einen
Anteil nennen, den eine andere nicht kennt.

#### Scenario: Anteil kommt hinzu oder entfällt

- **WHEN** sich der Bestand der Ernteanteile ändert
- **THEN** bilden alle genannten Oberflächen den geänderten Bestand ab
- **AND** keine Oberfläche nennt einen Hof oder Anteil, den es nicht mehr gibt

### Requirement: Anmeldung führt reale Angebote

Die Paketauswahl der Anmeldung SHALL die Ernteanteile der geltenden Teilnahmevereinbarung
mit ihren echten Beiträgen anbieten, und die Depotauswahl die real existierenden Depots.
Erfundene Pakete, Preise oder Depots MÜSSEN entfallen.

#### Scenario: Interessent wählt einen Ernteanteil

- **WHEN** jemand das Anmeldeformular ausfüllt
- **THEN** entsprechen die angebotenen Pakete und Beiträge der Teilnahmevereinbarung
- **AND** die wählbaren Depots entsprechen den real existierenden

#### Scenario: Depot mit Warteliste

- **WHEN** ein Depot nur über eine Warteliste zugänglich ist
- **THEN** ist es als solches gekennzeichnet
