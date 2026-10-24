# faq Specification

## Purpose
Beschreibt die Seite Fragen & Antworten /haeufige-fragen mit Grundlagen, Schnellen Fragen und Vereinsgeschichte.

## Requirements

### Requirement: FAQ-Seite und Kopfbereich
Die Route `/haeufige-fragen` SHALL eine Seite mit dem Label "Für Einsteiger*innen & Ernteteiler" und dem `h1` "Fragen & Antworten" zeigen.

#### Scenario: Kopfbereich
- **WHEN** `/haeufige-fragen` geöffnet wird
- **THEN** ist genau ein `h1` "Fragen & Antworten" vorhanden

### Requirement: Drei Abschnitte mit Menü-Ankern
Die Seite SHALL drei Abschnitte in dieser Reihenfolge enthalten: `id="grundlagen"` ("Grundlagen"), `id="schnelle-fragen"` ("Schnelle Fragen", Untertitel "Für alle, die schon Ernteteiler sind") und `id="vereinsgeschichte"` ("Vereinsgeschichte"). Jeder Abschnitt SHALL den Namen als `h2` tragen.

#### Scenario: Anker und Reihenfolge
- **WHEN** die Seite geladen wird
- **THEN** existieren die drei Abschnitte mit den genannten `id`-Werten in der Reihenfolge grundlagen, schnelle-fragen, vereinsgeschichte

#### Scenario: Menü-Sprung
- **WHEN** `/haeufige-fragen#schnelle-fragen` geöffnet wird
- **THEN** ist der Abschnitt "Schnelle Fragen" das Sprungziel

### Requirement: Grundlagen als Akkordeon
Der Abschnitt "Grundlagen" SHALL fünf Fragen als Akkordeon enthalten: "Was ist Solawi?", "Was unterscheidet eine Solawi vom Bio-Markt/Hofladen?", "Was unterscheidet die Solawi von der „Abo-Kiste/Öko-Kiste"?", "Was ist das Besondere an Stadt, Land, Beides.?" und "Wieso sind mehrere Landwirte dabei?". Das Akkordeon SHALL höchstens eine geöffnete Antwort gleichzeitig zeigen und eine geöffnete Antwort wieder schließen lassen.

#### Scenario: Fünf Fragen, alle zu
- **WHEN** die Seite geladen wird
- **THEN** sind im Abschnitt "Grundlagen" fünf Fragen sichtbar
- **AND** keine Antwort ist geöffnet

#### Scenario: Nur eine Antwort offen
- **WHEN** die Frage "Was ist Solawi?" und danach "Wieso sind mehrere Landwirte dabei?" angeklickt werden
- **THEN** ist nur die zweite Antwort sichtbar

#### Scenario: Antwort wieder schließen
- **WHEN** eine geöffnete Frage erneut angeklickt wird
- **THEN** wird ihre Antwort ausgeblendet

### Requirement: Schnelle Fragen als Akkordeon
Der Abschnitt "Schnelle Fragen" SHALL sechs Fragen als Akkordeon mit demselben Öffnungsverhalten enthalten: "Was macht der Solawi-Verein?", "Wer oder was ist der Solawi-Verein?", "Muss ich mich einbringen an einem Hof oder im Verein?", "Kann ich direkt zu den Landwirten Kontakt aufnehmen?", "Wie kann ich Ernteteiler werden?" und "Wie kann ich wieder aussteigen?".

#### Scenario: Sechs Fragen
- **WHEN** der Abschnitt geprüft wird
- **THEN** sind sechs Fragen in der genannten Reihenfolge vorhanden

#### Scenario: Antwort einsehbar
- **WHEN** "Wie kann ich wieder aussteigen?" angeklickt wird
- **THEN** wird ein Antworttext sichtbar, der die Teilnahmevereinbarung erwähnt

### Requirement: Vereinsgeschichte
Der Abschnitt "Vereinsgeschichte" SHALL die Gründung des Vereins im Jahr 2016 in Nürnberg und die rein ehrenamtliche Arbeit als Fließtext darstellen, nicht als Akkordeon.

#### Scenario: Fließtext
- **WHEN** der Abschnitt geprüft wird
- **THEN** ist der Text ohne Klick sichtbar und nennt "2016" und "Nürnberg"

### Requirement: Kontaktformular über das Menü erreichbar
Der Menüpunkt "Kontaktformular" unter "Fragen & Antworten" SHALL zum Kontaktformular auf `/kontakt-anmeldung#kontakt` führen.

#### Scenario: Weg zum Kontaktformular
- **WHEN** im Untermenü "Fragen & Antworten" der Eintrag "Kontaktformular" angeklickt wird
- **THEN** öffnet sich `/kontakt-anmeldung` und der Abschnitt `kontakt` ist das Sprungziel
