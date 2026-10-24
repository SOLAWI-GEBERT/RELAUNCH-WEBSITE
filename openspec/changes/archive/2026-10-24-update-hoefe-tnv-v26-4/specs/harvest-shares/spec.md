# Spec Delta

## RENAMED Requirements

- FROM: `### Requirement: Neun Ernteanteil-Detailseiten`
- TO: `### Requirement: Zehn Ernteanteil-Detailseiten`
- FROM: `### Requirement: Bieterrunden-Hinweis bei Hederer`
- TO: `### Requirement: Bieterrunden-Hinweis bei Tristan`

## MODIFIED Requirements

### Requirement: Ernteanteile-Übersicht nach Kategorien
Die Route `/ernteanteile` SHALL eine Seite mit dem `h1` "Ernteanteile" und dem Label "Unsere Höfe" zeigen. Sie SHALL die Kategorien Gemüse, Pilze, Obst, Beeren, Getreide, Eier und Fleisch in dieser Reihenfolge als `h2` darstellen, wobei eine Kategorie nur erscheint, solange sie mindestens einen Ernteanteil enthält. Jede Kachel SHALL Titel (`h3`), Hof, Kurzbeschreibung und — sofern der Ernteanteil nicht sofort buchbar ist — seinen Verfügbarkeitshinweis zeigen.

#### Scenario: Kategorienreihenfolge
- **WHEN** `/ernteanteile` geöffnet wird
- **THEN** erscheinen die `h2` in der Reihenfolge Gemüse, Pilze, Obst, Beeren, Getreide, Eier, Fleisch

#### Scenario: Kacheln je Kategorie
- **WHEN** die Kategorien geprüft werden
- **THEN** enthält Gemüse zwei Kacheln (Wintergemüse, Sommergemüse — beide Biohof Tristan), Pilze eine (Bio..Edelpilze, Schweigerts Hof), Obst eine (Stein- & Kernobst, Kirschgarten), Beeren eine (Bio..Beeren, Kirschgarten), Getreide eine (More..Ur-Getreide, Demeterhof Walz), Eier eine (More..Huhn, Demeterhof Walz) und Fleisch drei (More..Bratgockerl, More..Hack, More..Wurst, je Demeterhof Walz)

#### Scenario: Verfügbarkeitshinweis auf Kachel
- **WHEN** die Kachel "Sommergemüse" (Tristan) oder "Stein- & Kernobst" (Kirschgarten) geprüft wird
- **THEN** zeigt die Kachel einen Hinweis ("ab April 2027" bzw. "Warteliste")

### Requirement: Zehn Ernteanteil-Detailseiten
Das System SHALL unter `/ernteanteile/<slug>` zehn Detailseiten bereitstellen. Jede Detailseite SHALL das Label "Ernteanteil", den Produktnamen als `h1` und den Hofnamen als Untertitel zeigen.

#### Scenario: Routen, Produktnamen und Höfe
- **WHEN** die zehn Routen geöffnet werden
- **THEN** lautet das `h1` bzw. der Untertitel für `tristan-winter` "Wintergemüse" / "Biohof Tristan"
- **AND** für `tristan-sommer` "Sommergemüse" / "Biohof Tristan"
- **AND** für `schweigerts-edelpilze` "Bio..Edelpilze" / "Schweigerts Hof"
- **AND** für `kirschgarten-beeren` "Bio..Beeren" / "Kirschgarten"
- **AND** für `kirschgarten-obst` "Stein- & Kernobst" / "Kirschgarten"
- **AND** für `walz-getreide`, `walz-huhn`, `walz-bratgockerl`, `walz-hack` und `walz-wurst` "More..Ur-Getreide", "More..Huhn", "More..Bratgockerl", "More..Hack" bzw. "More..Wurst" / jeweils "Demeterhof Walz"

#### Scenario: Kopf jeder Detailseite
- **WHEN** eine der zehn Routen geöffnet wird
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

### Requirement: Bieterrunden-Hinweis bei Tristan
Die Detailseiten `tristan-winter` und `tristan-sommer` SHALL einen Hinweisblock zur Bieterrunde enthalten, sobald mindestens eine ihrer Varianten einen Bieterrunden-Richtpreis hat.

#### Scenario: Hinweisblock
- **WHEN** `/ernteanteile/tristan-winter` oder `/ernteanteile/tristan-sommer` geöffnet wird
- **THEN** ist der Hinweisblock "Was ist die Bieterrunde?" sichtbar
- **AND** die betroffenen Preiszeilen tragen den Zusatz "Richtpreis"

## REMOVED Requirements

### Requirement: Konditionen auf Detailseiten
**Reason**: Die Detailseiten verweisen nicht mehr nur auf die Teilnahmevereinbarung,
sondern zeigen die Preise direkt — der bisherige Preishinweis ohne Betrag ist damit
sachlich überholt (genau umgekehrtes Verhalten).
**Migration**: Siehe die neue Requirement "Konditionen und Preise auf Detailseiten" unter
ADDED Requirements; sie übernimmt die unverändert gültigen Szenarien zu Lieferphasen und
ergänzt die Preisdarstellung.

## ADDED Requirements

### Requirement: Konditionen und Preise auf Detailseiten
Jede Detailseite SHALL für jede Variante des Ernteanteils Größe, Lieferzyklus,
Lieferphase, Paketpreis, solidarischen Beitrag und Gesamtbetrag pro Monat in einer
Tabelle zeigen. Ein Paketpreis aus der Bieterrunde SHALL als Richtpreis gekennzeichnet
sein, nie als Festbetrag.

#### Scenario: Preise mit Betrag
- **WHEN** eine beliebige Ernteanteil-Detailseite geöffnet wird
- **THEN** enthält sie mindestens eine Zahl mit Euro-Zeichen je Variante

#### Scenario: Saisonale Anteile
- **WHEN** `/ernteanteile/tristan-winter` geöffnet wird
- **THEN** ist die Lieferphase "Oktober – März" sichtbar

#### Scenario: Weitere saisonale Anteile
- **WHEN** `/ernteanteile/tristan-sommer`, `/ernteanteile/kirschgarten-beeren` und `/ernteanteile/kirschgarten-obst` geöffnet werden
- **THEN** zeigen sie die Lieferphasen "April – September", "Juli – September" bzw. "Juli – Dezember"

#### Scenario: Ganzjahresanteile
- **WHEN** `/ernteanteile/walz-huhn` und `/ernteanteile/walz-getreide` geöffnet werden
- **THEN** zeigen sie den Rhythmus "2x pro Monat, ganzjährig" bzw. "1x pro Monat, ganzjährig"

### Requirement: Verfügbarkeitszustand eines Ernteanteils
Ein Ernteanteil SHALL einen von drei Zuständen tragen: sofort buchbar (kein Hinweis), zu einem späteren Zeitpunkt startend (Hinweis mit Zeitpunkt) oder Warteliste (Hinweis "Warteliste"). Der Zustand SHALL sowohl auf der Übersichtskachel als auch auf der Detailseite erkennbar sein.

#### Scenario: Künftig startender Anteil
- **WHEN** `/ernteanteile/tristan-sommer` geöffnet wird
- **THEN** zeigen Kachel und Detailseite den Hinweis "ab April 2027"

#### Scenario: Warteliste
- **WHEN** `/ernteanteile/kirschgarten-obst` geöffnet wird
- **THEN** zeigen Kachel und Detailseite den Hinweis "Warteliste"

### Requirement: Vereinsbeitrag wird separat ausgewiesen
Jede Ernteanteil-Detailseite SHALL den monatlichen Vereinsbeitrag getrennt von den Paketpreisen nennen, mit dem Hinweis, dass er pro Ernteteiler:in nur einmal anfällt.

#### Scenario: Hinweis auf jeder Detailseite
- **WHEN** eine beliebige Ernteanteil-Detailseite geöffnet wird
- **THEN** ist der Hinweis auf den Vereinsbeitrag von 1,50 €/Monat sichtbar
