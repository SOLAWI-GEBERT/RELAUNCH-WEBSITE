# Spec Delta

## MODIFIED Requirements

### Requirement: Partnerhöfe verlinken auf Ernteanteile
Der Abschnitt "Unsere Partnerhöfe" SHALL vier verlinkte Kacheln zeigen, die auf `/ernteanteile/tristan-winter`, `/ernteanteile/schweigerts-edelpilze`, `/ernteanteile/walz-huhn` und `/ernteanteile/kirschgarten-beeren` führen.

#### Scenario: Vier Hofkacheln
- **WHEN** der Abschnitt geprüft wird
- **THEN** gibt es vier Kacheln mit den genannten Zielen
- **AND** jedes Ziel rendert eine Ernteanteil-Detailseite

### Requirement: Kalender – Verweis auf Lieferrhythmus
Der Abschnitt "Wann dein Ernteanteil kommt" SHALL die Lieferphasen von Wintergemüse, Bio..Edelpilzen und den More..-Anteilen nennen und mit einem Link "Lieferrhythmus & Depots" auf `/depots#anlieferung` verweisen.

#### Scenario: Verweislink
- **WHEN** "Lieferrhythmus & Depots" angeklickt wird
- **THEN** öffnet sich `/depots` mit Anker `anlieferung`
