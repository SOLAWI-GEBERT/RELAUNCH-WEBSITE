# Spec Delta

## MODIFIED Requirements

### Requirement: Untermenü Ernteanteile
Der Eintrag "Ernteanteile" SHALL ein Untermenü mit den Kategorien Gemüse, Pilze, Obst, Beeren, Getreide, Eier und Fleisch in dieser Reihenfolge haben, wobei eine Kategorie nur erscheint, solange sie mindestens einen Ernteanteil enthält. Jede Kategorie SHALL die ihr zugeordneten Ernteanteil-Seiten als dritte Ebene enthalten. Die Kategorieköpfe SHALL keine eigene Seite als Ziel haben (sie dienen nur der Gruppierung).

#### Scenario: Kategorien und Blätter
- **WHEN** das Untermenü "Ernteanteile" geöffnet wird
- **THEN** enthält Gemüse die Einträge "Wintergemüse (Biohof Tristan)" → `/ernteanteile/tristan-winter` und "Sommergemüse (Biohof Tristan)" → `/ernteanteile/tristan-sommer`
- **AND** Pilze enthält "Bio..Edelpilze (Schweigerts Hof)" → `/ernteanteile/schweigerts-edelpilze`
- **AND** Obst enthält "Stein- & Kernobst (Kirschgarten)" → `/ernteanteile/kirschgarten-obst`
- **AND** Beeren enthält "Bio..Beeren (Kirschgarten)" → `/ernteanteile/kirschgarten-beeren`
- **AND** Getreide enthält "More..Ur-Getreide (Demeterhof Walz)" → `/ernteanteile/walz-getreide`
- **AND** Eier enthält "More..Huhn (Demeterhof Walz)" → `/ernteanteile/walz-huhn`
- **AND** Fleisch enthält "More..Bratgockerl", "More..Hack", "More..Wurst" (je Demeterhof Walz) → `/ernteanteile/walz-bratgockerl`, `/ernteanteile/walz-hack`, `/ernteanteile/walz-wurst`

#### Scenario: Produktnamen unverändert
- **WHEN** Menüeinträge der Produkte aus Hof Walz, Kirschgarten und Schweigerts angezeigt werden
- **THEN** werden die Namen mit zwei Punkten geschrieben ("More..Huhn", "Bio..Beeren", "Bio..Edelpilze"), nicht mit einem

### Requirement: Desktop-Verhalten
Ab Viewport-Breite 1024 px SHALL das Menü waagerecht dargestellt werden, und Untermenüs SHALL sich beim Überfahren des Haupteintrags öffnen. Der Hamburger-Button SHALL in diesem Layout nicht sichtbar sein.

#### Scenario: Hover öffnet Untermenü
- **WHEN** bei 1280 px Breite die Maus über "Ernteanteile" bewegt wird
- **THEN** wird das Untermenü mit den sieben Kategorien sichtbar

#### Scenario: Kein Hamburger auf Desktop
- **WHEN** die Seite bei 1280 px Breite geladen wird
- **THEN** ist der Button mit `aria-label="Toggle menu"` nicht sichtbar

### Requirement: Mobiles Menü
Unterhalb von 1024 px SHALL das Menü hinter einem Hamburger-Button erreichbar sein und als seitliches Panel mit Abdunklung öffnen. Haupteinträge mit Untermenü SHALL ein auf- und zuklappbares Untermenü besitzen. Kategorieköpfe im Untermenü SHALL als nicht klickbare Überschriften mit ihren Einträgen darunter dargestellt werden. Nach Auswahl eines Links SHALL sich das Panel schließen. Am Ende des Panels SHALL ein Button "Veranstaltungen" auf `/mitmachen#events` verlinken.

#### Scenario: Öffnen und Schließen
- **WHEN** bei 390 px Breite der Hamburger-Button angeklickt wird
- **THEN** erscheint das seitliche Panel mit den vier Haupteinträgen
- **AND** ein Klick auf die Abdunklung schließt es wieder

#### Scenario: Untermenü mit Kategorien
- **WHEN** im Panel "Ernteanteile" aufgeklappt wird
- **THEN** sind sieben Kategorieköpfe (Gemüse, Pilze, Obst, Beeren, Getreide, Eier, Fleisch) als nicht klickbare Überschriften sichtbar
- **AND** darunter stehen alle zehn Produktlinks, unter "Fleisch" die drei Fleisch-Produkte

#### Scenario: Link schließt Panel
- **WHEN** im geöffneten Panel ein Ziellink angeklickt wird
- **THEN** navigiert die Seite zum Ziel und das Panel ist geschlossen

#### Scenario: Veranstaltungs-Button
- **WHEN** das Panel geöffnet wird
- **THEN** ist am Ende ein Button "Veranstaltungen" sichtbar, der auf `/mitmachen#events` führt
