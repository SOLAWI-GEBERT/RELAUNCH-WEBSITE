# Spec Delta

## MODIFIED Requirements

### Requirement: Abschnitt "Was bekomme ich?"
Die Startseite SHALL einen Abschnitt mit `id="was-bekomme-ich"` und der Überschrift "Was bekomme ich?" enthalten. Er SHALL sechs verlinkte Kacheln zeigen, jeweils mit Produktname, Hof und Kurzbeschreibung, die auf die Ernteanteil-Detailseiten `/ernteanteile/tristan-gemuese`, `/ernteanteile/schweigerts-edelpilze`, `/ernteanteile/kirschgarten-beeren`, `/ernteanteile/walz-huhn`, `/ernteanteile/walz-getreide` und `/ernteanteile/walz-hack` führen. Produktname, Hof und Kurzbeschreibung SHALL mit der entsprechenden Kachel der Ernteanteile-Übersicht übereinstimmen.

#### Scenario: Sechs Kacheln mit Zielen
- **WHEN** der Abschnitt geprüft wird
- **THEN** gibt es sechs Kacheln, deren Links genau auf die sechs genannten Routen zeigen

#### Scenario: Kein toter Link
- **WHEN** jede Kachel angeklickt wird
- **THEN** rendert die Zielroute eine Seite mit passendem `h1` und nicht die Fehler- oder Leerseite

#### Scenario: Anker vorhanden
- **WHEN** `/#was-bekomme-ich` geöffnet wird
- **THEN** scrollt die Seite zu diesem Abschnitt

#### Scenario: Gleiche Texte wie die Übersicht
- **WHEN** die sechs Kacheln mit den Kacheln auf `/ernteanteile` verglichen werden
- **THEN** sind Produktname, Hof und Kurzbeschreibung jeweils identisch

#### Scenario: Produktnamen der TNV
- **WHEN** die Kachel zu `/ernteanteile/walz-getreide` geprüft wird
- **THEN** lautet der Produktname "More..Ur-Getreide"

#### Scenario: Gemüse-Kachel nennt beide Saisons
- **WHEN** die Kachel zu `/ernteanteile/tristan-gemuese` geprüft wird
- **THEN** nennt die Kurzbeschreibung Winter- und Sommergemüse
