# harvest-shares Specification

## Purpose
Beschreibt die Ernteanteile-Übersicht nach Kategorien und die neun Ernteanteil-Detailseiten mit Hof-Steckbrief und Konditionen.

## Requirements

### Requirement: Ernteanteile-Übersicht nach Kategorien
Die Route `/ernteanteile` SHALL eine Seite mit dem `h1` "Ernteanteile" und dem Label "Unsere Höfe" zeigen. Sie SHALL die Kategorien Gemüse, Pilze, Obst, Beeren, Getreide, Eier und Fleisch in dieser Reihenfolge als `h2` darstellen, wobei eine Kategorie nur erscheint, solange sie mindestens einen Ernteanteil enthält. Jede Kachel SHALL Titel (`h3`), Hof, Kurzbeschreibung und — sofern der Ernteanteil nicht sofort buchbar ist — seinen Verfügbarkeitshinweis zeigen.

#### Scenario: Kategorienreihenfolge
- **WHEN** `/ernteanteile` geöffnet wird
- **THEN** erscheinen die `h2` in der Reihenfolge Gemüse, Pilze, Obst, Beeren, Getreide, Eier, Fleisch

#### Scenario: Kacheln je Kategorie
- **WHEN** die Kategorien geprüft werden
- **THEN** enthält Gemüse eine Kachel (Gemüse, Biohof Tristan; Winter- und Sommergemüse teilen sich eine Detailseite), Pilze eine (Bio..Edelpilze, Schweigerts Hof), Obst eine (Stein- & Kernobst, Kirschgarten), Beeren eine (Bio..Beeren, Kirschgarten), Getreide eine (More..Ur-Getreide, Demeterhof Walz), Eier eine (More..Huhn, Demeterhof Walz) und Fleisch drei (More..Bratgockerl, More..Hack, More..Wurst, je Demeterhof Walz)

#### Scenario: Verfügbarkeitshinweis auf Kachel
- **WHEN** die Kachel "Sommergemüse" (Tristan) oder "Stein- & Kernobst" (Kirschgarten) geprüft wird
- **THEN** zeigt die Kachel einen Hinweis ("ab April 2027" bzw. "Warteliste")

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
Jede Detailseite SHALL einen Hof-Steckbrief mit Hofname, Zertifizierungs-Badge, Beschreibung, Zertifizierungszeile und — sofern vorhanden — einem Bild mit nicht leerem Alternativtext enthalten. Fehlt eigenes Bildmaterial, SHALL statt eines fremden Hoffotos ein neutraler Platzhalter gezeigt werden. Produkte desselben Hofs SHALL denselben Steckbrief zeigen.

#### Scenario: Badges je Hof
- **WHEN** die Steckbriefe geprüft werden
- **THEN** zeigt Demeterhof Walz das Badge "demeter", Biohof Tristan das Badge "Bioland", Kirschgarten das Badge "EU-Bio" und Schweigerts Hof das Badge "Pilzzucht"

#### Scenario: Gleicher Steckbrief je Hof
- **WHEN** `/ernteanteile/walz-huhn` und `/ernteanteile/walz-wurst` verglichen werden
- **THEN** sind Hofname, Badge und Beschreibung im Steckbrief identisch

#### Scenario: Platzhalter ohne Bildmaterial
- **WHEN** der Steckbrief von Schweigerts Hof geprüft wird
- **THEN** zeigt er statt eines Fotos einen neutralen Platzhalter mit dem Zertifizierungs-Icon

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
Alle neun Ernteanteil-Detailseiten SHALL dasselbe Gerüst in dieser Reihenfolge zeigen: Kopfband, Hof-Steckbrief, Beschreibung des Ernteanteils, Abschnitt "Was steckt drin" (sofern Inhalte vorhanden), Abschnitt "Das kostet", Abschnitt "Lieferung & Info" (sofern Inhalte vorhanden), Button "Jetzt Ernteanteil sichern".

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
