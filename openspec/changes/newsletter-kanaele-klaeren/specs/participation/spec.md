# Spec Delta

## MODIFIED Requirements

### Requirement: Zukünftige Events
Der Abschnitt "Zukünftige Events" SHALL die beiden Terminarten "Jahreshauptversammlung" und "Hofaktionen" beschreiben. Er SHALL darauf hinweisen, dass Hofaktionen automatisch per Hof-Post (E-Mail) bekannt gegeben werden und vereinsweite Termine wie die Jahreshauptversammlung im internen Newsletter stehen, mit einem Verweis auf die FAQ für Details zu den Newsletter-Kanälen. Er SHALL keine konkreten Kalenderdaten als Platzhalter enthalten.

#### Scenario: Terminarten
- **WHEN** der Abschnitt geprüft wird
- **THEN** sind zwei Karten "Jahreshauptversammlung" und "Hofaktionen" vorhanden

#### Scenario: Kanäle korrekt zugeordnet
- **WHEN** der Hinweis unter den beiden Karten geprüft wird
- **THEN** nennt er Hof-Post für Hofaktionen und den internen Newsletter für vereinsweite Termine
- **AND** ein Link führt auf `/haeufige-fragen#schnelle-fragen`
