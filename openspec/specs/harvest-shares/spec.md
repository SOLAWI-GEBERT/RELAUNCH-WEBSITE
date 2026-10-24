# harvest-shares Specification

## Purpose
Beschreibt die Ernteanteile-Übersicht nach Kategorien und die neun Ernteanteil-Detailseiten mit Hof-Steckbrief und Konditionen.

## Requirements

### Requirement: Ernteanteile-Übersicht nach Kategorien
Die Route `/ernteanteile` SHALL eine Seite mit dem `h1` "Ernteanteile" und dem Label "Unsere Höfe" zeigen. Sie SHALL die Ernteanteile als mehrspaltige Kachelwand in der Reihenfolge der Kategorien Gemüse, Pilze, Obst, Beeren, Getreide, Eier und Fleisch darstellen; jede Kachel trägt das Kategorie-Icon in der Gestaltung der Produktkarten der Startseite. Jede Kachel SHALL Bild, Titel (`h4`), Hof, Kurzbeschreibung und — sofern nicht sofort buchbar — ihren Verfügbarkeitshinweis zeigen.

#### Scenario: Kategorienreihenfolge
- **WHEN** `/ernteanteile` geöffnet wird
- **THEN** erscheinen die Kacheln in der Reihenfolge Gemüse, Pilze, Obst, Beeren, Getreide, Eier, Fleisch

#### Scenario: Kategorie als Icon
- **WHEN** die Kacheln geprüft werden
- **THEN** zeigt jede Kachel das Icon ihrer Kategorie in Pink (`text-cta`) über dem Titel, wie die Produktkarten der Startseite, die Kategorie steht für Screenreader als Text daneben, und es gibt keine eigene Überschrift je Kategorie

#### Scenario: Gleiche Gestaltung wie Startseite
- **WHEN** eine Kachel auf `/ernteanteile` mit der Produktkarte desselben Ernteanteils unter "Was bekomme ich?" auf der Startseite verglichen wird
- **THEN** stimmen Icon, Titel, Hofname und Kurzbeschreibung in Größe, Schrift und Farbe überein

#### Scenario: Kacheln je Kategorie
- **WHEN** die Kategorien geprüft werden
- **THEN** enthält Gemüse eine Kachel (Gemüse, Biohof Tristan; Winter- und Sommergemüse teilen sich eine Detailseite), Pilze eine (Bio..Edelpilze, Schweigerts Hof), Obst eine (Stein- & Kernobst, Kirschgarten), Beeren eine (Bio..Beeren, Kirschgarten), Getreide eine (More..Ur-Getreide, Demeterhof Walz), Eier eine (More..Huhn, Demeterhof Walz) und Fleisch drei (More..Bratgockerl, More..Hack, More..Wurst, je Demeterhof Walz)

#### Scenario: Verfügbarkeitshinweis auf Kachel
- **WHEN** die Kachel "Sommergemüse" (Tristan) oder "Stein- & Kernobst" (Kirschgarten) geprüft wird
- **THEN** zeigt die Kachel einen Hinweis ("ab April 2027" bzw. "Warteliste")

#### Scenario: Mehrspaltig
- **WHEN** `/ernteanteile` in Desktopbreite geöffnet wird
- **THEN** stehen mindestens drei Kacheln nebeneinander, und auf Handybreite steht eine Kachel pro Reihe

#### Scenario: Bild der Kachel
- **WHEN** der Ernteanteil eine Beispiel-Lieferung mit Foto hat
- **THEN** zeigt die Kachel dieses Foto; hat er keines, zeigt sie sein eigenes Produktfoto, dann das Foto des Hofs, und hat auch der Hof keines, erscheint kein Bild eines anderen Hofs

#### Scenario: Logo auf der Kachel
- **WHEN** der Hof ein Logo hinterlegt hat
- **THEN** zeigt die Kachel es einfarbig als kleinen Stempel neben dem Hofnamen

#### Scenario: Überschriftenhierarchie der Übersicht
- **WHEN** `/ernteanteile` geöffnet wird
- **THEN** gibt es genau ein `h1`, die Kacheltitel sind `h4` wie auf der Startseite, und eine für Screenreader sichtbare `h2` leitet die Kachelwand ein

### Requirement: Übersicht und Menü sind deckungsgleich
Jede Kachel der Ernteanteile-Übersicht SHALL auf dieselbe Route führen wie der entsprechende Blatt-Eintrag im Untermenü "Ernteanteile", und umgekehrt SHALL es für jeden Blatt-Eintrag eine Kachel geben.

#### Scenario: Abgleich Menü gegen Übersicht
- **WHEN** die Linkziele der neun Kacheln mit den neun Blatt-Einträgen des Untermenüs verglichen werden
- **THEN** sind beide Mengen identisch

### Requirement: Neun Ernteanteil-Detailseiten
Das System SHALL unter `/ernteanteile/<slug>` neun Detailseiten bereitstellen. Jede Detailseite SHALL das Label "Ernteanteil", den Produktnamen als `h1` und den Hofnamen als Untertitel zeigen.

#### Scenario: Routen, Produktnamen und Höfe
- **WHEN** die neun Routen geöffnet werden
- **THEN** lautet das `h1` bzw. der Untertitel für `tristan-gemuese` "Gemüse" / "Biohof Tristan"
- **AND** zeigt die Seite die Abschnitte "Wintergemüse" (`#winter`) und "Sommergemüse" (`#sommer`) mit je eigener Preistabelle
- **AND** für `schweigerts-edelpilze` "Bio..Edelpilze" / "Schweigerts Hof"
- **AND** für `kirschgarten-beeren` "Bio..Beeren" / "Kirschgarten"
- **AND** für `kirschgarten-obst` "Stein- & Kernobst" / "Kirschgarten"
- **AND** für `walz-getreide`, `walz-huhn`, `walz-bratgockerl`, `walz-hack` und `walz-wurst` "More..Ur-Getreide", "More..Huhn", "More..Bratgockerl", "More..Hack" bzw. "More..Wurst" / jeweils "Demeterhof Walz"

#### Scenario: Kopf jeder Detailseite
- **WHEN** eine der neun Routen geöffnet wird
- **THEN** zeigt sie das Label "Ernteanteil", das `h1` mit dem Produktnamen und darunter den Hofnamen

#### Scenario: Produktnamen mit zwei Punkten
- **WHEN** `/ernteanteile/walz-huhn`, `/ernteanteile/kirschgarten-beeren` und `/ernteanteile/schweigerts-edelpilze` geöffnet werden
- **THEN** lauten die `h1` exakt "More..Huhn", "Bio..Beeren" und "Bio..Edelpilze"

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

### Requirement: Konditionen und Preise auf Detailseiten
Jede Detailseite SHALL für jede Variante des Ernteanteils Größe, Lieferzyklus, Lieferphase und Richtwert-Spanne pro Monat zeigen. Hat der Ernteanteil nur eine Variante, genügt eine Zeile statt einer Tabelle.

#### Scenario: Preise mit Betrag
- **WHEN** eine beliebige Ernteanteil-Detailseite geöffnet wird
- **THEN** enthält sie mindestens eine Richtwert-Spanne mit Euro-Zeichen je Variante

#### Scenario: Saisonale Anteile
- **WHEN** `/ernteanteile/tristan-gemuese` geöffnet wird
- **THEN** ist im Abschnitt Wintergemüse die Lieferphase "Oktober – März" sichtbar

#### Scenario: Weitere saisonale Anteile
- **WHEN** `/ernteanteile/tristan-gemuese` (Abschnitt Sommergemüse), `/ernteanteile/kirschgarten-beeren` und `/ernteanteile/kirschgarten-obst` geöffnet werden
- **THEN** zeigen sie die Lieferphasen "April – September", "Juli – September" bzw. "Juli – Dezember"

#### Scenario: Ganzjahresanteile
- **WHEN** `/ernteanteile/walz-huhn` und `/ernteanteile/walz-getreide` geöffnet werden
- **THEN** zeigen sie den Rhythmus "2x pro Monat, ganzjährig" bzw. "1x pro Monat, ganzjährig"

#### Scenario: Eindeutiger Bezug der Spanne
- **WHEN** `/ernteanteile/walz-bratgockerl` geöffnet wird
- **THEN** ist erkennbar, ob die Spanne pro Lieferung oder pro Monat gilt

### Requirement: Bieterrunden-Hinweis bei Tristan
Die Detailseite `tristan-gemuese` SHALL einen Hinweisblock "Was ist die Bieterrunde?" enthalten, sobald mindestens eine ihrer Varianten über die Bieterrunde bestimmt wird. Die Richtwert-Spanne SHALL diese Varianten ohne zusätzlichen Zusatz "Richtpreis" kennzeichnen.

#### Scenario: Hinweisblock
- **WHEN** `/ernteanteile/tristan-gemuese` geöffnet wird
- **THEN** ist der Hinweisblock "Was ist die Bieterrunde?" sichtbar

#### Scenario: Keine doppelte Kennzeichnung
- **WHEN** die Preiszeilen von `/ernteanteile/tristan-gemuese` geprüft werden
- **THEN** tragen sie die Richtwert-Spanne, aber keinen zusätzlichen Zusatz "Richtpreis"

### Requirement: Unbekannte Ernteanteil-Route
Eine Route unter `/ernteanteile/`, die keiner der neun Detailseiten entspricht, SHALL keine Detailseite rendern.

#### Scenario: Unbekannter Slug
- **WHEN** `/ernteanteile/gibt-es-nicht` geöffnet wird
- **THEN** wird keine der neun Detailseiten angezeigt

### Requirement: Verfügbarkeitszustand eines Ernteanteils
Ein Ernteanteil SHALL einen von drei Zuständen tragen: sofort buchbar (kein Hinweis), zu einem späteren Zeitpunkt startend (Hinweis mit Zeitpunkt) oder Warteliste (Hinweis "Warteliste"). Der Zustand SHALL sowohl auf der Übersichtskachel als auch auf der Detailseite erkennbar sein.

#### Scenario: Künftig startender Anteil
- **WHEN** `/ernteanteile/tristan-gemuese` geöffnet wird
- **THEN** trägt der Abschnitt Sommergemüse den Hinweis "ab April 2027"

#### Scenario: Warteliste
- **WHEN** `/ernteanteile/kirschgarten-obst` geöffnet wird
- **THEN** zeigen Kachel und Detailseite den Hinweis "Warteliste"

### Requirement: Vereinsbeitrag wird separat ausgewiesen
Jede Ernteanteil-Detailseite SHALL den monatlichen Vereinsbeitrag getrennt von den Paketpreisen nennen, mit dem Hinweis, dass er pro Ernteteiler:in nur einmal anfällt.

#### Scenario: Hinweis auf jeder Detailseite
- **WHEN** eine beliebige Ernteanteil-Detailseite geöffnet wird
- **THEN** ist der Hinweis auf den Vereinsbeitrag von 1,50 €/Monat sichtbar

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

### Requirement: Preise als Richtwert-Spannen
Preise auf Detailseiten SHALL als Spanne in Euro pro Monat angegeben werden (z. B. "130–145 €"), nie als exakter Betrag. Die Spanne enthält den solidarischen Beitrag und SHALL den in der TNV genannten Gesamtbetrag einschließen. Paketpreis, Soli-Beitrag und Gesamtbetrag SHALL nicht getrennt ausgewiesen werden.

#### Scenario: Spanne statt Festbetrag
- **WHEN** eine beliebige Ernteanteil-Detailseite geöffnet wird
- **THEN** zeigt jede Variante eine Spanne "von–bis €" pro Monat und keinen Betrag mit Cent-Stellen

#### Scenario: Soli-Beitrag eingeschlossen
- **WHEN** der Abschnitt "Das kostet" geprüft wird
- **THEN** steht dort ein Hinweis, dass der solidarische Beitrag in der Spanne enthalten ist

### Requirement: TNV als verbindliche Preisquelle
Der Abschnitt "Das kostet" jeder Detailseite SHALL kenntlich machen, dass die Spannen Richtwerte sind und die Teilnahmevereinbarung verbindlich ist. Er SHALL die TNV mit Versionsnummer und Stand nennen und auf das PDF verlinken.

#### Scenario: Hinweis und Link
- **WHEN** eine beliebige Ernteanteil-Detailseite geöffnet wird
- **THEN** ist im Abschnitt "Das kostet" der Hinweis "Richtwert" mit Link auf die TNV-Datei der aktuellen Version (V26.4) sichtbar

#### Scenario: Keine veraltete TNV verlinkt
- **WHEN** die Detailseiten nach TNV-Links durchsucht werden
- **THEN** verweist keiner auf eine ältere Version als V26.4

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
