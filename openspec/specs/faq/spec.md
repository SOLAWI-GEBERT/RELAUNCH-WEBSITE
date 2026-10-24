# faq Specification

## Purpose
Beschreibt die Seite Fragen & Antworten /haeufige-fragen mit Grundlagen, Schnellen Fragen und Vereinsgeschichte.

## Requirements

### Requirement: FAQ-Seite und Kopfbereich
Die Route `/haeufige-fragen` SHALL eine Seite mit dem Label "Für Einsteiger*innen & Ernteteiler" und dem `h1` "Fragen & Antworten" zeigen.

#### Scenario: Kopfbereich
- **WHEN** `/haeufige-fragen` geöffnet wird
- **THEN** ist genau ein `h1` "Fragen & Antworten" vorhanden

### Requirement: Vier Abschnitte mit Menü-Ankern
Die Seite SHALL vier Abschnitte in dieser Reihenfolge enthalten: `id="grundlagen"` ("Grundlagen"), `id="schnelle-fragen"` ("Schnelle Fragen", Untertitel "Für alle, die schon Ernteteiler sind"), `id="vereinsgeschichte"` ("Vereinsgeschichte") und `id="antwort-nicht-dabei"` ("Antwort nicht dabei?"). Jeder Abschnitt SHALL den Namen als `h2` tragen.

#### Scenario: Anker und Reihenfolge
- **WHEN** die Seite geladen wird
- **THEN** existieren die vier Abschnitte mit den genannten `id`-Werten in der Reihenfolge grundlagen, schnelle-fragen, vereinsgeschichte, antwort-nicht-dabei

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
Der Abschnitt "Schnelle Fragen" SHALL acht Fragen als Akkordeon mit demselben Öffnungsverhalten enthalten: "Was macht der Solawi-Verein?", "Wer oder was ist der Solawi-Verein?", "Muss ich mich einbringen an einem Hof oder im Verein?", "Kann ich direkt zu den Landwirten Kontakt aufnehmen?", "Wie kann ich Ernteteiler werden?", "Wie kann ich wieder aussteigen?", "Gibt es einen Newsletter?" und "Wie erfahre ich von Terminen und Mitmachangeboten?".

#### Scenario: Acht Fragen
- **WHEN** der Abschnitt geprüft wird
- **THEN** sind acht Fragen in der genannten Reihenfolge vorhanden

#### Scenario: Antwort einsehbar
- **WHEN** "Wie kann ich wieder aussteigen?" angeklickt wird
- **THEN** wird ein Antworttext sichtbar, der die Teilnahmevereinbarung erwähnt

### Requirement: Vereinsgeschichte
Der Abschnitt "Vereinsgeschichte" SHALL die Gründung des Vereins im Jahr 2016 in Nürnberg und die rein ehrenamtliche Arbeit als Fließtext darstellen, nicht als Akkordeon.

#### Scenario: Fließtext
- **WHEN** der Abschnitt geprüft wird
- **THEN** ist der Text ohne Klick sichtbar und nennt "2016" und "Nürnberg"

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

### Requirement: Newsletter-Kanäle in den Schnellen Fragen
Der Abschnitt "Schnelle Fragen" SHALL eine Frage "Gibt es einen Newsletter?" enthalten, deren Antwort einen externen, öffentlichen Newsletter von einem internen Newsletter für Mitglieder unterscheidet.

#### Scenario: Zwei Newsletter unterschieden
- **WHEN** "Gibt es einen Newsletter?" angeklickt wird
- **THEN** nennt der Antworttext den externen Newsletter mit Kochevents und Infoveranstaltungen, abonnierbar ohne Mitgliedschaft
- **AND** nennt er den internen Newsletter für Mitglieder mit Protokollen und internen Treffen wie der Jahreshauptversammlung

#### Scenario: Link zum Anmeldeformular
- **WHEN** die Antwort geöffnet ist
- **THEN** führt ein Link zum Newsletter-Anmeldeformular im Footer derselben Seite (Anker `#newsletter`)

### Requirement: Hinweis zur internen Newsletter-Eintragung
Dieselbe Antwort SHALL darauf hinweisen, dass die automatische Eintragung in den internen Newsletter noch nicht steht, und bis dahin zu einer Mail an `Team.Koordination@stadt-land-beides.de` auffordern.

#### Scenario: Hinweis zur internen Eintragung
- **WHEN** die Antwort geöffnet ist
- **THEN** fordert der Text dazu auf, Team.Koordination@stadt-land-beides.de zu schreiben, um den internen Newsletter nicht zu verpassen

### Requirement: Weg zu Terminen und Mitmachangeboten
Der Abschnitt "Schnelle Fragen" SHALL eine Frage "Wie erfahre ich von Terminen und Mitmachangeboten?" enthalten. Die Antwort SHALL drei Kanäle unterscheiden: Hofaktionen (automatisch per Hof-Post, sobald man bei diesem Hof Ernteteiler ist), vereinsweite Termine wie die Jahreshauptversammlung (interner Newsletter) und öffentliche Angebote wie Kochevents oder Infoveranstaltungen (externer Newsletter).

#### Scenario: Drei Kanäle genannt
- **WHEN** "Wie erfahre ich von Terminen und Mitmachangeboten?" angeklickt wird
- **THEN** nennt der Antworttext Hof-Post für Hofaktionen, den internen Newsletter für vereinsweite Termine und den externen Newsletter für öffentliche Angebote

### Requirement: Antwort nicht dabei
Der letzte Abschnitt "Antwort nicht dabei?" SHALL das Formular "Interesse oder Frage", den Mail-Link zur Koordination und die Ansprechpartner enthalten, wie in `registration-contact` beschrieben.

#### Scenario: Inhalte vorhanden
- **WHEN** der Abschnitt geprüft wird
- **THEN** sind ein Formular, ein Link auf `mailto:Team.Koordination@stadt-land-beides.de` und die Ansprechpartner vorhanden
