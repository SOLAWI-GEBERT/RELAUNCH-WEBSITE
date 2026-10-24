# Spec Delta

## MODIFIED Requirements

### Requirement: Untermenü Fragen & Antworten
Der Eintrag "Fragen & Antworten" SHALL ein Untermenü mit "Grundlagen" (`/haeufige-fragen#grundlagen`), "Schnelle Fragen" (`/haeufige-fragen#schnelle-fragen`), "Vereinsgeschichte" (`/haeufige-fragen#vereinsgeschichte`) und "Antwort nicht dabei?" (`/haeufige-fragen#antwort-nicht-dabei`) haben.

#### Scenario: Einträge und Ziele
- **WHEN** das Untermenü "Fragen & Antworten" geöffnet wird
- **THEN** sind vier Einträge in dieser Reihenfolge vorhanden
- **AND** alle führen zu Ankern auf `/haeufige-fragen`

### Requirement: Fußbereich – Links
Der Fußbereich SHALL auf jeder Seite einen Block "Schnellzugriff" mit sechs Links enthalten und daneben die Links "Impressum", "Datenschutzerklärung" und "Kontakt" anbieten.

#### Scenario: Schnellzugriff-Links
- **WHEN** der Fußbereich auf beliebiger Seite geprüft wird
- **THEN** führen "Über uns" auf `/solidarische-landwirtschaft`, "Ernteanteile" auf `/ernteanteile`, "Mitmachen" auf `/mitmachen`, "Depots" auf `/depots`, "Termine & Aktionen" auf `/mitmachen#events` und "Kontakt" auf `/haeufige-fragen#antwort-nicht-dabei`

#### Scenario: Rechtliche Links und Kontakt
- **WHEN** der Fußbereich auf beliebiger Seite geprüft wird
- **THEN** führen "Impressum" auf `/impressum`, "Datenschutzerklärung" auf `/datenschutz` und der zweite Link "Kontakt" auf `/haeufige-fragen#antwort-nicht-dabei`
