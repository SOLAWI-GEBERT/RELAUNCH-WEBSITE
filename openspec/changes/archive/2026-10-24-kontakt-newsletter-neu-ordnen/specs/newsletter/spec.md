# Spec Delta

## Purpose

Beschreibt die Newsletter-Anmeldung im Fußbereich und die Seite zum Verwalten des Abonnements. Die Bausteine sind im Prototyp Platzhalter für den späteren Newsletter-Dienst.

## ADDED Requirements

### Requirement: Newsletter-Anmeldung im Fußbereich
Der Fußbereich SHALL auf jeder Seite eine Newsletter-Anmeldung mit einem E-Mail-Feld (Typ `email`, Pflicht), einer Zustimmung zur Datenschutzerklärung (Pflicht) und einem Button "Abonnieren" enthalten. Ein Hinweis SHALL den Versand von etwa einmal im Monat und die jederzeitige Abmeldung nennen.

#### Scenario: Bausteine sichtbar
- **WHEN** der Fußbereich auf beliebiger Seite geprüft wird
- **THEN** sind E-Mail-Feld, Datenschutz-Checkbox und Button "Abonnieren" vorhanden
- **AND** der Hinweis zu Versandrhythmus und Abmeldung ist sichtbar

#### Scenario: Ohne Zustimmung
- **WHEN** eine E-Mail eingetragen ist, die Datenschutz-Zustimmung fehlt und "Abonnieren" angeklickt wird
- **THEN** wird nicht abgesendet

### Requirement: Weg zum Verwalten
Der Newsletter-Baustein im Fußbereich SHALL einen Link "Newsletter verwalten" auf `/newsletter` enthalten.

#### Scenario: Link zur Verwaltung
- **WHEN** "Newsletter verwalten" angeklickt wird
- **THEN** öffnet sich `/newsletter`

### Requirement: Datenschutz-Verweis der Anmeldung
Die Zustimmung in der Newsletter-Anmeldung SHALL auf `/datenschutz` verlinken.

#### Scenario: Link zur Datenschutzerklärung
- **WHEN** der Link der Zustimmung angeklickt wird
- **THEN** öffnet sich `/datenschutz`

### Requirement: Bestätigung nach der Anmeldung
Nach erfolgreicher Validierung SHALL die Newsletter-Anmeldung eine Bestätigung zeigen, die auf eine Bestätigungs-E-Mail hinweist.

#### Scenario: Erfolgreiche Anmeldung
- **WHEN** eine gültige E-Mail eingetragen, die Zustimmung gesetzt und "Abonnieren" angeklickt wird
- **THEN** zeigt der Fußbereich einen Hinweis, dass eine Bestätigungs-E-Mail folgt
- **AND** das Eingabefeld ist nicht mehr bedienbar

### Requirement: Seite Newsletter verwalten
Die Route `/newsletter` SHALL eine Seite mit dem `h1` "Newsletter verwalten" zeigen, auf der ein Abonnement abbestellt und die E-Mail-Adresse geändert werden kann. Beide Aktionen SHALL ein E-Mail-Feld und einen eigenen Absende-Button besitzen.

#### Scenario: Zwei Aktionen
- **WHEN** `/newsletter` geöffnet wird
- **THEN** ist genau ein `h1` "Newsletter verwalten" vorhanden
- **AND** es gibt je eine Aktion "Abmelden" und "Adresse ändern" mit E-Mail-Feld und Button

### Requirement: Platzhalter-Kennzeichnung
Formulare der Newsletter-Anmeldung und -Verwaltung SHALL im Prototyp als Platzhalter erkennbar sein, die nichts versenden.

#### Scenario: Platzhalter erkennbar
- **WHEN** ein Newsletter-Formular abgesendet wird
- **THEN** wird keine Anfrage an einen Server gesendet
- **AND** ein sichtbarer Hinweis nennt die Anmeldung als Platzhalter
