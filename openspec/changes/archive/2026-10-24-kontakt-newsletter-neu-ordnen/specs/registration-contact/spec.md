# Spec Delta

## MODIFIED Requirements

### Requirement: Kontaktformular
Der FAQ-Abschnitt "Antwort nicht dabei?" auf `/haeufige-fragen` SHALL ein Formular "Interesse oder Frage" mit den beschrifteten Feldern Thema (Auswahl, Pflicht), E-Mail (Typ `email`, Pflicht), Name (Text, optional) und Nachricht (mehrzeiliger Text, optional) sowie einer Datenschutz-Zustimmung (Pflicht) und dem Absende-Button "Nachricht senden" enthalten. Die Themen SHALL "Ich möchte Ernteteiler zur Probe werden", "Ich habe nur eine Frage" und "Ich möchte Infos zur nächsten Veranstaltung" umfassen.

#### Scenario: Felder und Typen
- **WHEN** das Formular geprüft wird
- **THEN** besitzt jedes Feld eine sichtbare Beschriftung
- **AND** das E-Mail-Feld hat den Typ `email` und das Nachrichtenfeld ist ein `textarea`

#### Scenario: Absende-Button
- **WHEN** der Abschnitt geprüft wird
- **THEN** ist ein Button "Nachricht senden" vom Typ `submit` vorhanden

#### Scenario: Ohne Pflichtangaben
- **WHEN** Thema, E-Mail oder die Datenschutz-Zustimmung fehlen und abgesendet wird
- **THEN** wird nicht abgesendet

## ADDED Requirements

### Requirement: Depot-Wunsch und Höfe bei Interesse am Ernteanteil
Das Formular SHALL die optionalen Felder Depot-Wunsch (Auswahl aus den Depots) und Höfe (Mehrfachauswahl) nur zeigen, solange das Thema "Ich möchte Ernteteiler zur Probe werden" gewählt ist.

#### Scenario: Felder bei Interesse sichtbar
- **WHEN** das Thema "Ich möchte Ernteteiler zur Probe werden" gewählt wird
- **THEN** erscheinen Depot-Wunsch und Höfe

#### Scenario: Felder bei anderen Themen verborgen
- **WHEN** das Thema "Ich habe nur eine Frage" gewählt ist
- **THEN** sind Depot-Wunsch und Höfe nicht sichtbar

### Requirement: Flow-Hinweis im Formularabschnitt
Der Abschnitt "Antwort nicht dabei?" SHALL den Ablauf kurz wiederholen (Teilnahmevereinbarung herunterladen, ausfüllen, per Mail an die Koordination schicken) und auf `/so-funktionierts` verlinken.

#### Scenario: Ablauf und Link
- **WHEN** der Abschnitt geprüft wird
- **THEN** nennt ein Text die drei Schritte
- **AND** ein Link führt auf `/so-funktionierts`

### Requirement: Bestätigung nach dem Absenden
Nach erfolgreicher Validierung SHALL das Formular durch eine Bestätigung ersetzt werden, die nennt, dass das Team sich mit einer kurzen Beratung meldet und danach die ausgefüllte Teilnahmevereinbarung per Mail erwartet. Sie SHALL außerdem nennen, dass Anfragen mindestens einmal pro Woche bearbeitet werden.

#### Scenario: Erfolgreiche Anfrage
- **WHEN** alle Pflichtangaben ausgefüllt sind und "Nachricht senden" angeklickt wird
- **THEN** ist das Formular nicht mehr sichtbar
- **AND** eine Bestätigung nennt Beratung und Versand der Teilnahmevereinbarung per Mail
- **AND** die Bestätigung nennt die Bearbeitung mindestens einmal pro Woche

### Requirement: Platzhalter-Kennzeichnung des Formulars
Das Formular SHALL im Prototyp als Platzhalter erkennbar sein, der nichts versendet.

#### Scenario: Platzhalter erkennbar
- **WHEN** das Formular abgesendet wird
- **THEN** wird keine Anfrage an einen Server gesendet
- **AND** ein sichtbarer Hinweis nennt das Formular als Platzhalter

### Requirement: Ansprechpartner in der FAQ
Der Abschnitt "Antwort nicht dabei?" SHALL die Funktionsträger des Vereins (Vorstand, Kassenwart) benennen und die Koordinations-Adresse `Team.Koordination@stadt-land-beides.de` als `mailto:`-Link zeigen.

#### Scenario: Mailto
- **WHEN** der Abschnitt geprüft wird
- **THEN** zeigt ein Link auf `mailto:Team.Koordination@stadt-land-beides.de`

## REMOVED Requirements

### Requirement: Kontakt-&-Anmeldung-Seite mit drei Abschnitten
**Reason**: Die Seite `/kontakt-anmeldung` vermischt Anmeldung, Kontakt und Ansprechpartner. Die Anmeldung läuft real per Mail mit der Teilnahmevereinbarung; Formular und Ansprechpartner wandern in die FAQ.
**Migration**: Formular und Ansprechpartner stehen im FAQ-Abschnitt "Antwort nicht dabei?" auf `/haeufige-fragen`. Eingehende Links auf `/kontakt-anmeldung` führen dorthin.

### Requirement: Anmeldehinweis auf Kontakt-&-Anmeldung
**Reason**: Der Anmeldehinweis mit vier Schritten und "Jetzt anmelden" verwies auf ein Anmeldeformular, das es nicht gibt.
**Migration**: Der Ablauf wird in der FAQ-Antwort "Wie kann ich Ernteteiler werden?" und auf `/so-funktionierts` erklärt.

### Requirement: Ansprechpartner auf Kontakt-&-Anmeldung
**Reason**: Die Seite entfällt.
**Migration**: Siehe die neue Anforderung "Ansprechpartner in der FAQ".

### Requirement: Anmeldeformular unter eigener Route
**Reason**: Es gibt keinen Online-Anmeldeflow. Interessierte schicken die ausgefüllte Teilnahmevereinbarung per Mail.
**Migration**: Weg über `/so-funktionierts` (PDF laden, ausfüllen, per Mail senden; Schritt 3 "Teilnahme wegschicken" nennt die Adresse).

### Requirement: Pflichtfelder der Anmeldung
**Reason**: Das Anmeldeformular entfällt.
**Migration**: Keine; Pflichtangaben gelten nur noch für das Formular "Interesse oder Frage".

### Requirement: Feldtypen der Anmeldung
**Reason**: Das Anmeldeformular entfällt.
**Migration**: Keine.

### Requirement: Teilnahmevereinbarung im Formular
**Reason**: Das Anmeldeformular entfällt; der Download der Teilnahmevereinbarung liegt bereits auf `/so-funktionierts`.
**Migration**: Siehe Anforderung "Download der Teilnahmevereinbarung" in `supporting-pages`.

### Requirement: Bestätigungsansicht nach Absenden
**Reason**: Die Bestätigung "Vielen Dank für deine Anmeldung!" versprach eine Online-Anmeldung.
**Migration**: Siehe die neue Anforderung "Bestätigung nach dem Absenden".

### Requirement: Einstiegspfade zur Anmeldung
**Reason**: Die Route `/anmeldung` entfällt.
**Migration**: "Zur Anmeldung" auf `/mitmachen` führt auf `/so-funktionierts` (siehe `participation`).
