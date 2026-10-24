# Spec Delta

## MODIFIED Requirements

### Requirement: Einheitliches Seitengerüst der Detailseiten
Alle neun Ernteanteil-Detailseiten SHALL dasselbe Gerüst in dieser Reihenfolge zeigen: Kopfband, Hof-Steckbrief, Hofstimme (sofern vorhanden), Beschreibung des Ernteanteils, Abschnitt "Was steckt drin" (sofern Inhalte vorhanden), "In der Kiste" (sofern vorhanden), "Aus der Küche" (sofern vorhanden), Stimmen der Ernteteiler:innen (sofern vorhanden), Abschnitt "Das kostet", Abschnitt "Lieferung & Info" (sofern Inhalte vorhanden), Button "Jetzt Ernteanteil sichern".

#### Scenario: Gleiche Reihenfolge auf allen Seiten
- **WHEN** die neun Detailseiten nacheinander geöffnet werden
- **THEN** erscheinen die vorhandenen Abschnitte auf jeder Seite in der genannten Reihenfolge, der Hof-Steckbrief unmittelbar nach dem Kopfband

#### Scenario: Überschriftenhierarchie
- **WHEN** eine Detailseite geöffnet wird
- **THEN** gibt es genau ein `h1` mit dem Produktnamen, und der Produktname wird im Inhalt nicht als weitere Überschrift wiederholt

#### Scenario: Kopffarbe folgt der Kategorie
- **WHEN** zwei Ernteanteile derselben Kategorie (z. B. `walz-hack` und `walz-wurst`) geöffnet werden
- **THEN** haben ihre Kopfbänder dieselbe Hintergrundfarbe

#### Scenario: Zwei Saisonabschnitte bei Gemüse
- **WHEN** `/ernteanteile/tristan-gemuese` geöffnet wird
- **THEN** wiederholen sich die Abschnitte "Was steckt drin", "Aus der Küche", die Stimmen der Ernteteiler:innen und "Das kostet" für Wintergemüse (`#winter`) und Sommergemüse (`#sommer`), soweit für die Saison Inhalte vorhanden sind

#### Scenario: Seite ohne optionale Abschnitte
- **WHEN** eine Detailseite geöffnet wird, für die weder Zitat noch Kistenbeispiele noch Küchentipps noch Rezept noch Ernteteiler-Stimmen hinterlegt sind
- **THEN** zeigt sie nur Kopfband, Hof-Steckbrief, Beschreibung, "Das kostet" und Button, plus "Was steckt drin" und "Lieferung & Info", soweit Inhalte vorhanden sind

### Requirement: Abschnitt "Aus der Küche"
Eine Detailseite SHALL, sofern für den Ernteanteil Küchentipps oder ein Rezept hinterlegt sind, nach "In der Kiste" einen Abschnitt "Aus der Küche" zeigen: bis zu zwei kompakte Karten zu Lagerung und Verwertung, darunter den Rezeptzettel. Die Rezeptidee als Kurzzeile mit Link entfällt.

#### Scenario: Küchentipps vorhanden
- **WHEN** die Detailseite eines Ernteanteils mit hinterlegten Küchentipps geöffnet wird
- **THEN** zeigt der Abschnitt "Aus der Küche" je Tipp eine kompakte Karte, höchstens zwei

#### Scenario: Nur Rezept
- **WHEN** für einen Ernteanteil ein Rezept, aber keine Küchentipps hinterlegt sind
- **THEN** zeigt der Abschnitt "Aus der Küche" nur den Rezeptzettel, ohne leere Karten

#### Scenario: Rezept mit Link
- **WHEN** das Rezept eine Quelle mit Link trägt
- **THEN** ist die Quellenzeile des Zettels als Link erkennbar und führt auf die angegebene Adresse

#### Scenario: Ohne Küchentipps
- **WHEN** für einen Ernteanteil weder Küchentipps noch ein Rezept hinterlegt sind
- **THEN** erscheint der Abschnitt "Aus der Küche" nicht, auch keine Überschrift

### Requirement: Hofinhalte nur mit Quelle vom Hof
Zitate, Beispiel-Lieferungen, Mengenangaben, Küchentipps, Rezepte, Logos und Fotos SHALL nur erscheinen, wenn sie vom Hof stammen oder von ihm bestätigt sind. Zitate von Ernteteiler:innen SHALL nur erscheinen, wenn die Person eingewilligt hat. Fehlt eine Angabe, SHALL der betroffene Teil entfallen; es SHALL kein Platzhaltertext und kein Bild eines anderen Betriebs erscheinen.

#### Scenario: Kein Platzhaltertext
- **WHEN** eine Detailseite geöffnet wird, für die ein optionales Feld nicht hinterlegt ist
- **THEN** erscheint an dieser Stelle weder Platzhaltertext noch leere Karte noch Überschrift ohne Inhalt

#### Scenario: Kein fremdes Bild
- **WHEN** die Detailseiten von Schweigerts Hof und Kirschgarten geöffnet werden, soweit eigenes Bildmaterial fehlt
- **THEN** zeigen sie keinen Foto-Ersatz eines anderen Hofs

## ADDED Requirements

### Requirement: Rezeptzettel
Das Rezept eines Ernteanteils SHALL im Abschnitt "Aus der Küche" als Zettel in der Flächenfarbe der Kategorie erscheinen mit Titel, Eckdaten (Zeit, Portionen, Saison; jede Angabe optional), Zutatenliste und nummerierten Zubereitungsschritten. Ein Foto im Versatzrahmen, ein Hof-Tipp und eine Quellenzeile mit Link SHALL nur erscheinen, wenn sie hinterlegt sind.

#### Scenario: Zutaten neben Schritten
- **WHEN** die Detailseite eines Ernteanteils mit hinterlegtem Rezept auf breitem Bildschirm geöffnet wird
- **THEN** stehen die Zutaten links und die nummerierten Schritte rechts, auf schmalem Bildschirm untereinander

#### Scenario: Optionale Teile fehlen
- **WHEN** ein Rezept ohne Foto, Hof-Tipp und Quelle hinterlegt ist
- **THEN** zeigt der Zettel nur Titel, vorhandene Eckdaten, Zutaten und Schritte, ohne leere Flächen

#### Scenario: Rezept je Saison
- **WHEN** `/ernteanteile/tristan-gemuese` geöffnet wird und beide Saisons ein Rezept hinterlegt haben
- **THEN** zeigt jeder Saisonabschnitt sein eigenes Rezept

### Requirement: Stimmen der Ernteteiler:innen
Eine Detailseite SHALL, sofern Zitate von Ernteteiler:innen hinterlegt sind, nach "Aus der Küche" einen Abschnitt "Das gefällt Ernteteiler:innen besonders" mit bis zu drei Zitaten zeigen. Ein Zitat SHALL schildern, was der Person an den Zutaten des Ernteanteils gefällt (z. B. Geschmack, Frische, Sorte), und eine Signatur tragen, die höchstens den Vornamen und die Dauer der Teilnahme nennt. Es kann die gemeinte Zutat benennen. Texte SHALL die Leser:innen nicht siezen.

#### Scenario: Zitate vorhanden
- **WHEN** die Detailseite eines Ernteanteils mit hinterlegten Zitaten geöffnet wird
- **THEN** zeigt der Abschnitt je Zitat eine Karte mit Text und Signatur, höchstens drei

#### Scenario: Bezug zur Zutat
- **WHEN** ein Zitat eine Zutat benennt
- **THEN** steht der Name der Zutat als Kennzeichnung auf der Karte, und ein Zitat ohne Zutat zeigt keine leere Kennzeichnung

#### Scenario: Keine Zitate
- **WHEN** für einen Ernteanteil keine Zitate hinterlegt sind
- **THEN** erscheint der Abschnitt nicht, auch keine Überschrift

#### Scenario: Datensparsame Signatur
- **WHEN** die Signatur eines Zitats geprüft wird
- **THEN** enthält sie keinen Nachnamen, keine E-Mail-Adresse und keine Ortsangabe unterhalb der Stadt

#### Scenario: Abgrenzung zur Hofstimme
- **WHEN** eine Seite sowohl eine Hofstimme als auch Ernteteiler-Stimmen zeigt
- **THEN** sind beide in Aufbau und Farbe unterscheidbar, die Hofstimme als Brief in der Flächenfarbe, die Ernteteiler-Stimmen als weiße Karten
