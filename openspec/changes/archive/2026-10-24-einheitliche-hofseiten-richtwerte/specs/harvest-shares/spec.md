# Spec Delta

## ADDED Requirements

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

## MODIFIED Requirements

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
