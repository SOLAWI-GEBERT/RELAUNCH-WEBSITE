# Spec Delta

## RENAMED Requirements

- FROM: `### Requirement: Drei Abschnitte mit Menü-Ankern`
- TO: `### Requirement: Vier Abschnitte mit Menü-Ankern`

## MODIFIED Requirements

### Requirement: Vier Abschnitte mit Menü-Ankern
Die Seite SHALL vier Abschnitte in dieser Reihenfolge enthalten: `id="grundlagen"` ("Grundlagen"), `id="schnelle-fragen"` ("Schnelle Fragen", Untertitel "Für alle, die schon Ernteteiler sind"), `id="vereinsgeschichte"` ("Vereinsgeschichte") und `id="antwort-nicht-dabei"` ("Antwort nicht dabei?"). Jeder Abschnitt SHALL den Namen als `h2` tragen.

#### Scenario: Anker und Reihenfolge
- **WHEN** die Seite geladen wird
- **THEN** existieren die vier Abschnitte mit den genannten `id`-Werten in der Reihenfolge grundlagen, schnelle-fragen, vereinsgeschichte, antwort-nicht-dabei

#### Scenario: Menü-Sprung
- **WHEN** `/haeufige-fragen#schnelle-fragen` geöffnet wird
- **THEN** ist der Abschnitt "Schnelle Fragen" das Sprungziel

## ADDED Requirements

### Requirement: Anmeldeweg in den Schnellen Fragen
Die Antwort auf "Wie kann ich Ernteteiler werden?" SHALL den Weg schlicht erklären: Teilnahmevereinbarung herunterladen, ankreuzen, per Mail an die Koordination schicken. Sie SHALL auf `/so-funktionierts` verlinken, die Bestätigung durch das Team nennen und auf das Formular im Abschnitt "Antwort nicht dabei?" für Rückfragen und eine kurze Beratung hinweisen.

#### Scenario: Weg und Links
- **WHEN** "Wie kann ich Ernteteiler werden?" angeklickt wird
- **THEN** nennt der Antworttext die Teilnahmevereinbarung und die Mail an die Koordination
- **AND** ein Link führt auf `/so-funktionierts`
- **AND** ein Link führt auf `#antwort-nicht-dabei`

### Requirement: Arbeitsweise offenlegen
Dieselbe Antwort SHALL die Arbeitsweise transparent machen: Alle arbeiten ehrenamtlich, Anfragen landen in einem internen Ticketsystem und werden an die zuständige Person verteilt, das System wird mindestens einmal pro Woche bearbeitet.

#### Scenario: Ehrenamt, Ticketsystem und Rhythmus
- **WHEN** die Antwort geöffnet ist
- **THEN** nennt der Text das Ehrenamt, das interne Ticketsystem mit Verteilung und die Bearbeitung mindestens einmal pro Woche

### Requirement: Antwort nicht dabei
Der letzte Abschnitt "Antwort nicht dabei?" SHALL das Formular "Interesse oder Frage", den Mail-Link zur Koordination und die Ansprechpartner enthalten, wie in `registration-contact` beschrieben.

#### Scenario: Inhalte vorhanden
- **WHEN** der Abschnitt geprüft wird
- **THEN** sind ein Formular, ein Link auf `mailto:Team.Koordination@stadt-land-beides.de` und die Ansprechpartner vorhanden

## REMOVED Requirements

### Requirement: Kontaktformular über das Menü erreichbar
**Reason**: Das Formular liegt nicht mehr auf einer eigenen Seite, sondern im FAQ-Abschnitt "Antwort nicht dabei?".
**Migration**: Der Menüeintrag "Antwort nicht dabei?" führt auf `/haeufige-fragen#antwort-nicht-dabei` (siehe `site-navigation`).
