# Spec Delta

## ADDED Requirements

### Requirement: Nicht buchbare Ernteanteile sind im Formular erkennbar
Ein Ernteanteil, der nicht sofort buchbar ist, SHALL in der Ernteanteil-Auswahl als nicht auswählbar (deaktiviert) dargestellt werden und seinen Verfügbarkeitshinweis tragen.

#### Scenario: Deaktivierte Option
- **WHEN** die Ernteanteil-Auswahl im Anmeldeformular geprüft wird
- **THEN** sind die Optionen für Tristan Sommergemüse und Kirschgarten Stein- & Kernobst deaktiviert und tragen einen Hinweis ("ab April 2027" bzw. "Warteliste")
