# Spec Delta

## ADDED Requirements

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
