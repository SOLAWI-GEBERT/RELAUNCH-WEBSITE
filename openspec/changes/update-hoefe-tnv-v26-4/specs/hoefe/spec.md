# Spec Delta

## Purpose

Die Partnerhöfe als eigenständige Einheiten: wer sie sind, wie sie wirtschaften, wo sie
liegen und wie sie Interessenten vorgestellt werden. Trägt die Angaben, die unabhängig
davon gelten, welche Ernteanteile ein Hof gerade liefert.

## ADDED Requirements

### Requirement: Höfe-Bestand folgt der Teilnahmevereinbarung

Geführt SHALL werden genau die Höfe, die laut geltender Teilnahmevereinbarung Ernteanteile
liefern. Ein ausgeschiedener Hof MUSS vollständig entfallen, ein neu aufgenommener MUSS
aufgenommen werden.

#### Scenario: Hof scheidet aus

- **WHEN** ein Hof laut Teilnahmevereinbarung nicht mehr beteiligt ist
- **THEN** erscheint er weder in der Höfe-Übersicht noch auf der Karte noch in einem
  Hof-Steckbrief

#### Scenario: Hof kommt hinzu

- **WHEN** ein Hof neu Ernteanteile liefert
- **THEN** ist er in der Höfe-Übersicht und auf der Karte vertreten
- **AND** er hat einen Steckbrief mit Beschreibung und Zertifizierung

### Requirement: Jeder Hof hat einen vollständigen Steckbrief

Ein Hof SHALL mit Name, Zertifizierung, beschreibendem Text, Standortangabe und Bild
dargestellt werden. Die Angaben MÜSSEN der Teilnahmevereinbarung entsprechen, soweit diese
sie nennt.

#### Scenario: Steckbrief auf einer Ernteanteil-Seite

- **WHEN** jemand die Detailseite eines Ernteanteils öffnet
- **THEN** zeigt sie den Steckbrief des liefernden Hofes
- **AND** der Steckbrief nennt Name, Zertifizierung, Beschreibung und Standort

#### Scenario: Hof liefert mehrere Ernteanteile

- **WHEN** ein Hof mehrere Ernteanteile liefert
- **THEN** zeigen alle zugehörigen Detailseiten denselben Steckbrief

### Requirement: Höfe sind auf der Karte verortet

Jeder Partnerhof SHALL mit seiner Lage auf der Höfe- und Depot-Karte erscheinen, erkennbar
unterschieden von den Depots, und mit einem Hinweis darauf, was er liefert.

#### Scenario: Betrachter sucht den Hof hinter seiner Kiste

- **WHEN** jemand die Karte öffnet
- **THEN** sind alle Partnerhöfe verortet
- **AND** jeder Hof nennt seine Zertifizierung und seine Ernteanteile

#### Scenario: Hof scheidet aus

- **WHEN** ein Hof nicht mehr beteiligt ist
- **THEN** ist seine Markierung von der Karte entfernt

### Requirement: Bildmaterial ist dem Hof zuzuordnen

Das Bild eines Hofes SHALL diesen Hof zeigen. Steht noch kein eigenes Material zur
Verfügung, MUSS die Lücke als offener Punkt festgehalten werden, statt Material eines
anderen Betriebs als das des Hofes auszugeben.

#### Scenario: Neuer Hof ohne eigenes Bildmaterial

- **WHEN** ein Hof aufgenommen wird, für den kein eigenes Foto vorliegt
- **THEN** ist der fehlende Bildnachweis als offener Punkt dokumentiert
