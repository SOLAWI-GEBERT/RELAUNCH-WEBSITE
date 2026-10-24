## ADDED Requirements

### Requirement: Ernteanteile-Übersicht nach Kategorien
Die Route `/ernteanteile` SHALL eine Seite mit dem `h1` "Ernteanteile" und dem Label "Unsere Höfe" zeigen. Sie SHALL die Kategorien Gemüse, Obst, Beeren, Getreide, Eier und Fleisch in dieser Reihenfolge als `h2` darstellen. Jede Kategorie SHALL ihre Ernteanteile als verlinkte Kacheln mit Titel (`h3`), Hof und Kurzbeschreibung zeigen.

#### Scenario: Kategorienreihenfolge
- **WHEN** `/ernteanteile` geöffnet wird
- **THEN** erscheinen die `h2` in der Reihenfolge Gemüse, Obst, Beeren, Getreide, Eier, Fleisch

#### Scenario: Kacheln je Kategorie
- **WHEN** die Kategorien geprüft werden
- **THEN** enthält Gemüse zwei Kacheln (Sommergemüse, Wintergemüse), Obst eine (Obst & Säfte), Beeren eine (Bio..Beeren), Getreide eine (More..Ur-Getreide), Eier eine (More..Huhn) und Fleisch drei (More..Bratgockerl, More..Hack, More..Wurst)

### Requirement: Übersicht und Menü sind deckungsgleich
Jede Kachel der Ernteanteile-Übersicht SHALL auf dieselbe Route führen wie der entsprechende Blatt-Eintrag im Untermenü "Ernteanteile", und umgekehrt SHALL es für jeden Blatt-Eintrag eine Kachel geben.

#### Scenario: Abgleich Menü gegen Übersicht
- **WHEN** die Linkziele der neun Kacheln mit den neun Blatt-Einträgen des Untermenüs verglichen werden
- **THEN** sind beide Mengen identisch

### Requirement: Neun Ernteanteil-Detailseiten
Das System SHALL unter `/ernteanteile/<slug>` neun Detailseiten bereitstellen. Jede Detailseite SHALL das Label "Ernteanteil", den Produktnamen als `h1` und den Hofnamen als Untertitel zeigen.

#### Scenario: Routen, Produktnamen und Höfe
- **WHEN** die neun Routen geöffnet werden
- **THEN** lautet das `h1` bzw. der Untertitel für `hederer-sommer` "Sommergemüse" / "Demeterhof Hederer"
- **AND** für `tristans-winter` "Wintergemüse" / "Biohof Tristan"
- **AND** für `hederer-obst` "Obst & Säfte" / "Demeterhof Hederer"
- **AND** für `kirschgarten-beeren` "Bio..Beeren" / "Kirschgarten"
- **AND** für `walz-getreide`, `walz-huhn`, `walz-bratgockerl`, `walz-hack` und `walz-wurst` "More..Ur-Getreide", "More..Huhn", "More..Bratgockerl", "More..Hack" bzw. "More..Wurst" / jeweils "Demeterhof Walz"

#### Scenario: Kopf jeder Detailseite
- **WHEN** eine der neun Routen geöffnet wird
- **THEN** zeigt sie das Label "Ernteanteil", das `h1` mit dem Produktnamen und darunter den Hofnamen

#### Scenario: Produktnamen mit zwei Punkten
- **WHEN** `/ernteanteile/walz-huhn` und `/ernteanteile/kirschgarten-beeren` geöffnet werden
- **THEN** lauten die `h1` exakt "More..Huhn" und "Bio..Beeren"

### Requirement: Hof-Steckbrief auf Detailseiten
Jede Detailseite SHALL einen Hof-Steckbrief mit Hofname, Zertifizierungs-Badge, Beschreibung, Zertifizierungszeile und Bild mit nicht leerem Alternativtext enthalten. Produkte desselben Hofs SHALL denselben Steckbrief zeigen.

#### Scenario: Badges je Hof
- **WHEN** die Steckbriefe geprüft werden
- **THEN** zeigt Demeterhof Hederer und Demeterhof Walz das Badge "demeter", Biohof Tristan das Badge "Bioland" und Kirschgarten das Badge "EU-Bio"

#### Scenario: Gleicher Steckbrief je Hof
- **WHEN** `/ernteanteile/walz-huhn` und `/ernteanteile/walz-wurst` verglichen werden
- **THEN** sind Hofname, Badge und Beschreibung im Steckbrief identisch

### Requirement: Konditionen auf Detailseiten
Jede Detailseite SHALL die Konditionen des Ernteanteils (Rhythmus oder Menge, bei saisonalen Anteilen Zeitraum und Einstiegstermine) und einen Preishinweis zeigen. Der Preishinweis SHALL auf die Teilnahmevereinbarung verweisen und SHALL keinen Euro-Betrag nennen.

#### Scenario: Preishinweis ohne Betrag
- **WHEN** eine beliebige Ernteanteil-Detailseite geöffnet wird
- **THEN** enthält sie den Text "Richtpreis & Logistikkosten: siehe Teilnahmevereinbarung"
- **AND** enthält keine Zahl mit Euro-Zeichen

#### Scenario: Saisonale Anteile
- **WHEN** `/ernteanteile/hederer-sommer` geöffnet wird
- **THEN** sind Zeitraum "April – September" und Einstiegspunkte "01.04., 01.06., 01.08." sichtbar

#### Scenario: Weitere saisonale Anteile
- **WHEN** `/ernteanteile/hederer-obst`, `/ernteanteile/kirschgarten-beeren` und `/ernteanteile/tristans-winter` geöffnet werden
- **THEN** zeigen sie die Zeiträume "Juli – Dezember", "Juli – September" bzw. "Oktober – März"

#### Scenario: Ganzjahresanteile
- **WHEN** `/ernteanteile/walz-huhn` und `/ernteanteile/walz-getreide` geöffnet werden
- **THEN** zeigen sie den Rhythmus "2x pro Monat, ganzjährig" bzw. "1x pro Monat, ganzjährig"

### Requirement: Bieterrunden-Hinweis bei Hederer
Die Detailseiten `hederer-sommer` und `hederer-obst` SHALL einen Hinweisblock zur Bieterrunde enthalten.

#### Scenario: Hinweisblock
- **WHEN** `/ernteanteile/hederer-sommer` oder `/ernteanteile/hederer-obst` geöffnet wird
- **THEN** ist der Bieterrunden-Hinweisblock sichtbar
- **AND** die Preiszeile nennt "(Bieterrunde)"

### Requirement: Unbekannte Ernteanteil-Route
Eine Route unter `/ernteanteile/`, die keiner der neun Detailseiten entspricht, SHALL keine Detailseite rendern.

#### Scenario: Unbekannter Slug
- **WHEN** `/ernteanteile/gibt-es-nicht` geöffnet wird
- **THEN** wird keine der neun Detailseiten angezeigt
