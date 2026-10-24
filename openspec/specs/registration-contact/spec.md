# registration-contact Specification

## Purpose
Beschreibt Anmeldeformular /anmeldung sowie Kontakt und Anmeldung /kontakt-anmeldung inklusive Kontaktformular.

## Requirements

### Requirement: Kontakt-&-Anmeldung-Seite mit drei Abschnitten
Die Route `/kontakt-anmeldung` SHALL das Label "Schreib uns", das `h1` "Kontakt & Anmeldung" und drei Abschnitte mit den Anker-`id` `anmeldung`, `kontakt` und `ansprechpartner` in dieser Reihenfolge zeigen.

#### Scenario: Kopf und Anker
- **WHEN** `/kontakt-anmeldung` geladen wird
- **THEN** ist das `h1` "Kontakt & Anmeldung" vorhanden
- **AND** die Abschnitte `anmeldung`, `kontakt`, `ansprechpartner` existieren in dieser Reihenfolge

#### Scenario: Eingehender Menü- und Footer-Link
- **WHEN** `/kontakt-anmeldung#kontakt` aus dem Untermenü "Fragen & Antworten" oder dem Footer geöffnet wird
- **THEN** ist der Abschnitt "Kontaktformular" das Sprungziel

### Requirement: Anmeldehinweis auf Kontakt-&-Anmeldung
Der Abschnitt `anmeldung` SHALL die Überschrift "Anmeldung / Teilnahmevereinbarung", eine Schrittfolge "So funktioniert die Anmeldung" mit vier nummerierten Schritten und einen Button "Jetzt anmelden" enthalten.

#### Scenario: Vier Schritte
- **WHEN** der Abschnitt geprüft wird
- **THEN** sind vier Schritte mit den Nummern 1 bis 4 sichtbar

### Requirement: Kontaktformular
Der Abschnitt `kontakt` SHALL ein Formular mit den Feldern Name (Text), E-Mail (E-Mail-Typ), Betreff (Text) und Nachricht (Mehrzeiliger Text) sowie einem Absende-Button "Nachricht senden" enthalten. Jedes Feld SHALL eine sichtbare Beschriftung besitzen.

#### Scenario: Felder und Typen
- **WHEN** das Formular geprüft wird
- **THEN** gibt es vier beschriftete Felder, das E-Mail-Feld hat den Typ `email` und das Nachrichtenfeld ist ein `textarea`

#### Scenario: Absende-Button
- **WHEN** der Abschnitt geprüft wird
- **THEN** ist ein Button "Nachricht senden" vom Typ `submit` vorhanden

### Requirement: Ansprechpartner auf Kontakt-&-Anmeldung
Der Abschnitt `ansprechpartner` SHALL die Funktionsträger des Vereins (Vorstand, Kassenwart) benennen und die Koordinations-Adresse `Team.Koordination@stadt-land-beides.de` als `mailto:`-Link zeigen.

#### Scenario: Mailto
- **WHEN** der Abschnitt geprüft wird
- **THEN** zeigt ein Link auf `mailto:Team.Koordination@stadt-land-beides.de`

### Requirement: Anmeldeformular unter eigener Route
Die Route `/anmeldung` SHALL eine Seite mit dem Label "Jetzt starten", dem `h1` "Anmeldung" und einem Anmeldeformular mit dem Absende-Button "Verbindlich anmelden" zeigen. Das Formular SHALL die Abschnitte "Persönliche Daten", "Ernteanteil wählen", "Depot wählen", "Nachricht (optional)" und eine Zustimmungsgruppe zur Teilnahmevereinbarung in dieser Reihenfolge enthalten.

#### Scenario: Reihenfolge der Formularabschnitte
- **WHEN** `/anmeldung` geöffnet wird
- **THEN** erscheinen die `h3` "Persönliche Daten", "Ernteanteil wählen", "Depot wählen", "Nachricht (optional)" in dieser Reihenfolge

### Requirement: Pflichtfelder der Anmeldung
Das Anmeldeformular SHALL folgende Felder als Pflichtfelder kennzeichnen und die Absendung ohne sie verhindern: Vorname, Nachname, E-Mail, Telefon, Straße & Hausnummer, PLZ, Ort, Ernteanteil-Auswahl, Depot-Auswahl sowie die beiden Zustimmungen (Teilnahmevereinbarung, Datenschutz). Das Nachrichtenfeld SHALL optional sein.

#### Scenario: Leeres Formular absenden
- **WHEN** auf "Verbindlich anmelden" geklickt wird, ohne ein Feld auszufüllen
- **THEN** wird das Formular nicht abgesendet und die Browser-Validierung meldet ein fehlendes Pflichtfeld

#### Scenario: Ohne Zustimmung
- **WHEN** alle Felder außer den beiden Zustimmungen ausgefüllt sind und abgesendet wird
- **THEN** wird nicht abgesendet

#### Scenario: Nachricht leer
- **WHEN** alle Pflichtfelder ausgefüllt sind und das Nachrichtenfeld leer bleibt
- **THEN** lässt sich das Formular absenden

### Requirement: Feldtypen der Anmeldung
Das Feld E-Mail SHALL den Typ `email` und das Feld Telefon den Typ `tel` haben. Die Ernteanteil-Auswahl SHALL eine Einfachauswahl (Radio-Gruppe) sein, die Depot-Auswahl ein Auswahlfeld mit Platzhalter "Bitte wählen...".

#### Scenario: Feldtypen
- **WHEN** das Formular geprüft wird
- **THEN** haben E-Mail und Telefon die Typen `email` bzw. `tel`
- **AND** genau eine Ernteanteil-Option kann gleichzeitig gewählt sein

### Requirement: Teilnahmevereinbarung im Formular
Das Anmeldeformular SHALL einen Hinweisblock "Teilnahmevereinbarung" mit einem Download-Link-Text "Teilnahmevereinbarung als PDF herunterladen" enthalten.

#### Scenario: Hinweisblock sichtbar
- **WHEN** das Anmeldeformular geprüft wird
- **THEN** sind der Block "Teilnahmevereinbarung" und der Link-Text vorhanden

### Requirement: Bestätigungsansicht nach Absenden
Nach erfolgreicher Validierung SHALL die Seite `/anmeldung` das Formular durch eine Bestätigung mit der Überschrift "Vielen Dank für deine Anmeldung!" ersetzen.

#### Scenario: Erfolgreiche Anmeldung
- **WHEN** alle Pflichtfelder ausgefüllt und beide Zustimmungen gesetzt sind und "Verbindlich anmelden" angeklickt wird
- **THEN** zeigt die Seite "Vielen Dank für deine Anmeldung!" und das Formular ist nicht mehr sichtbar

### Requirement: Einstiegspfade zur Anmeldung
Die Anmeldeseite `/anmeldung` SHALL aus dem Abschluss-Abschnitt von `/mitmachen` über den Button "Zur Anmeldung" erreichbar sein.

#### Scenario: Pfad von Mitmachen
- **WHEN** auf `/mitmachen` "Zur Anmeldung" angeklickt wird
- **THEN** öffnet sich `/anmeldung`
