# Spec Delta

## ADDED Requirements

### Requirement: Hof-Logo als Stempel im Kopfband
Das Kopfband einer Detailseite SHALL, sofern der Hof ein Logo hinterlegt hat, dieses einfarbig in der Textfarbe als Stempel zeigen. Zertifikats-Signets (z. B. Demeter) SHALL unverändert bleiben. Fehlt das Logo, SHALL das Kopfband ohne Stempel und ohne Platzhalter erscheinen.

#### Scenario: Logo vorhanden
- **WHEN** die Detailseite eines Hofs mit hinterlegtem Logo geöffnet wird
- **THEN** zeigt das Kopfband das Logo einfarbig in der Textfarbe, mit nicht leerem Alternativtext

#### Scenario: Logo fehlt
- **WHEN** die Detailseite eines Hofs ohne Logo geöffnet wird (z. B. Kirschgarten)
- **THEN** erscheint das Kopfband vollständig ohne Stempel und ohne leere Fläche

#### Scenario: Kopffarbe bleibt Kategoriefarbe
- **WHEN** zwei Seiten verschiedener Höfe derselben Kategorie geöffnet werden
- **THEN** haben ihre Kopfbänder dieselbe Hintergrundfarbe, unabhängig von der Farbe des Hoflogos

### Requirement: Hofstimme als Brief
Eine Detailseite SHALL, sofern der Hof ein Zitat hinterlegt hat, unmittelbar nach dem Hof-Steckbrief einen Abschnitt "Hofstimme" zeigen: eine Karte in der Flächenfarbe der Kategorie mit Anrede, Zitat in Ich- oder Wir-Form des Hofs und Signatur. Der Text SHALL die Leser:innen duzen.

#### Scenario: Zitat vorhanden
- **WHEN** die Detailseite eines Hofs mit hinterlegtem Zitat geöffnet wird
- **THEN** erscheint nach dem Hof-Steckbrief eine Karte mit Anrede, Zitat und Signatur des Hofs

#### Scenario: Logo als Absender
- **WHEN** der Hof zusätzlich ein Logo hinterlegt hat
- **THEN** trägt die Karte das Logo einfarbig als Absender-Stempel

#### Scenario: Zitat fehlt
- **WHEN** die Detailseite eines Hofs ohne Zitat geöffnet wird
- **THEN** erscheint der Abschnitt "Hofstimme" nicht, und die übrigen Abschnitte folgen unmittelbar nach dem Hof-Steckbrief

#### Scenario: Du-Ansprache
- **WHEN** der Text einer Hofstimme geprüft wird
- **THEN** enthält er keine Anrede mit "Sie" oder "Ihr/Ihre" an die Leser:innen

### Requirement: Abschnitt "In der Kiste"
Eine Detailseite SHALL, sofern Kistenbeispiele oder Mengenangaben hinterlegt sind, nach "Was steckt drin" einen Abschnitt "In der Kiste" zeigen: Beispiel-Lieferungen als Karten mit optionalem Foto, Produktliste (mit Menge, sofern angegeben) und optionaler Zeile "Was du damit kochst", dazu Mengen im Alltag. Bietet die TNV mehrere Größen an, SHALL jede Karte ihre Größe nennen. Bei `tristan-gemuese` erscheint der Abschnitt im jeweiligen Saisonabschnitt.

#### Scenario: Beispiel-Lieferung
- **WHEN** die Detailseite eines Ernteanteils mit hinterlegten Beispiel-Lieferungen geöffnet wird
- **THEN** zeigt der Abschnitt "In der Kiste" je Beispiel eine Karte mit Titel und den enthaltenen Produkten, je Produkt in einer Zeile, mit Menge, sofern angegeben

#### Scenario: Foto je Karte
- **WHEN** eine Beispiel-Lieferung ein Foto hinterlegt hat
- **THEN** zeigt ihre Karte oben eine Bildfläche im Format 4:3 mit nicht leerem Alternativtext, und ohne Foto zeigt die Karte keine Bildfläche

#### Scenario: Größe nach TNV
- **WHEN** `/ernteanteile/tristan-gemuese` geöffnet wird und für Wintergemüse Beispiele für die Größen "Normal" und "Klein" hinterlegt sind
- **THEN** nennt jede Karte ihre Größe, und beide Größen erscheinen im Abschnitt Wintergemüse (`#winter`)

#### Scenario: Eigene Beispiele je Saison
- **WHEN** `/ernteanteile/tristan-gemuese` geöffnet wird und für Winter und Sommer Beispiele hinterlegt sind
- **THEN** steht "In der Kiste" sowohl im Abschnitt Wintergemüse (`#winter`) als auch im Abschnitt Sommergemüse (`#sommer`) mit den jeweils eigenen Beispielen

#### Scenario: Mengen im Alltag
- **WHEN** für einen Ernteanteil eine Mengenangabe hinterlegt ist
- **THEN** zeigt der Abschnitt sie als Aussage mit Alltagsbezug (z. B. Zahl der Mahlzeiten oder Personen), nicht als Preis

#### Scenario: Ohne Inhalt
- **WHEN** für einen Ernteanteil weder Beispiele noch Mengen hinterlegt sind
- **THEN** erscheint der Abschnitt "In der Kiste" nicht

### Requirement: Abschnitt "Aus der Küche"
Eine Detailseite SHALL, sofern für den Ernteanteil Küchentipps hinterlegt sind, nach "In der Kiste" einen Abschnitt "Aus der Küche" mit bis zu drei Karten zu Lagerung, Verwertung und Rezeptideen zeigen. Rezeptideen SHALL als Kurzzeile mit optionalem Link erscheinen.

#### Scenario: Küchentipps vorhanden
- **WHEN** die Detailseite eines Ernteanteils mit hinterlegten Küchentipps geöffnet wird
- **THEN** zeigt der Abschnitt "Aus der Küche" je Tipp eine Karte, höchstens drei

#### Scenario: Rezept mit Link
- **WHEN** eine Rezeptidee einen Link trägt
- **THEN** ist die Kurzzeile als Link erkennbar und führt auf die angegebene Adresse

#### Scenario: Ohne Küchentipps
- **WHEN** für einen Ernteanteil keine Küchentipps hinterlegt sind
- **THEN** erscheint der Abschnitt "Aus der Küche" nicht

### Requirement: Hofinhalte nur mit Quelle vom Hof
Zitate, Beispiel-Lieferungen, Mengenangaben, Küchentipps, Logos und Fotos SHALL nur erscheinen, wenn sie vom Hof stammen oder von ihm bestätigt sind. Fehlt eine Angabe, SHALL der betroffene Teil entfallen; es SHALL kein Platzhaltertext und kein Bild eines anderen Betriebs erscheinen.

#### Scenario: Kein Platzhaltertext
- **WHEN** eine Detailseite geöffnet wird, für die ein optionales Feld nicht hinterlegt ist
- **THEN** erscheint an dieser Stelle weder Platzhaltertext noch leere Karte noch Überschrift ohne Inhalt

#### Scenario: Kein fremdes Bild
- **WHEN** die Detailseiten von Schweigerts Hof und Kirschgarten geöffnet werden, soweit eigenes Bildmaterial fehlt
- **THEN** zeigen sie keinen Foto-Ersatz eines anderen Hofs

## MODIFIED Requirements

### Requirement: Hof-Steckbrief auf Detailseiten
Jede Detailseite SHALL einen Hof-Steckbrief mit Hofname, Zertifizierungs-Badge, Beschreibung, Zertifizierungszeile und — sofern vorhanden — einem einheitlich gerahmten Bild mit nicht leerem Alternativtext enthalten. Hinterlegt der Hof ein Logo, SHALL es als Kistenetikett am Bild erscheinen. Fehlt eigenes Bildmaterial, SHALL statt eines fremden Hoffotos ein neutraler Platzhalter gezeigt werden. Produkte desselben Hofs SHALL denselben Steckbrief zeigen.

#### Scenario: Badges je Hof
- **WHEN** die Steckbriefe geprüft werden
- **THEN** zeigt Demeterhof Walz das Badge "demeter", Biohof Tristan das Badge "Bioland", Kirschgarten das Badge "EU-Bio" und Schweigerts Hof das Badge "Pilzzucht"

#### Scenario: Gleicher Steckbrief je Hof
- **WHEN** `/ernteanteile/walz-huhn` und `/ernteanteile/walz-wurst` verglichen werden
- **THEN** sind Hofname, Badge, Beschreibung, Bild, Rahmung und Logo im Steckbrief identisch

#### Scenario: Platzhalter ohne Bildmaterial
- **WHEN** der Steckbrief von Schweigerts Hof geprüft wird
- **THEN** zeigt er statt eines Fotos einen neutralen Platzhalter mit dem Zertifizierungs-Icon

#### Scenario: Einheitliche Rahmung
- **WHEN** die Steckbriefe von Biohof Tristan und Demeterhof Walz verglichen werden
- **THEN** haben beide Bilder dieselbe Eckenrundung und denselben Versatzrahmen in der Kategoriefarbe der geöffneten Seite

#### Scenario: Logo als Kistenetikett
- **WHEN** der Steckbrief eines Hofs mit hinterlegtem Logo geprüft wird
- **THEN** hängt das Logo leicht schräg als Etikett am Bildrand und überdeckt kein Gesicht und keine Bildmitte

### Requirement: Einheitliches Seitengerüst der Detailseiten
Alle neun Ernteanteil-Detailseiten SHALL dasselbe Gerüst in dieser Reihenfolge zeigen: Kopfband, Hof-Steckbrief, Hofstimme (sofern vorhanden), Beschreibung des Ernteanteils, Abschnitt "Was steckt drin" (sofern Inhalte vorhanden), "In der Kiste" (sofern vorhanden), "Aus der Küche" (sofern vorhanden), Abschnitt "Das kostet", Abschnitt "Lieferung & Info" (sofern Inhalte vorhanden), Button "Jetzt Ernteanteil sichern".

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
- **THEN** wiederholen sich die Abschnitte "Was steckt drin" und "Das kostet" für Wintergemüse (`#winter`) und Sommergemüse (`#sommer`)

#### Scenario: Seite ohne optionale Abschnitte
- **WHEN** eine Detailseite geöffnet wird, für die weder Zitat noch Kistenbeispiele noch Küchentipps hinterlegt sind
- **THEN** zeigt sie nur Kopfband, Hof-Steckbrief, Beschreibung, "Das kostet" und Button, plus "Was steckt drin" und "Lieferung & Info", soweit Inhalte vorhanden sind
