## ADDED Requirements

### Requirement: Ergänzende Seiten außerhalb des Hauptmenüs
Die Seiten `/so-funktionierts`, `/solidarische-landwirtschaft` und `/kalender` SHALL als Routen erreichbar sein, ohne einen Eintrag im Hauptmenü (erste, zweite oder dritte Ebene) zu besitzen.

#### Scenario: Kein Menüeintrag
- **WHEN** alle Linkziele des Hauptmenüs gesammelt werden
- **THEN** ist keines davon `/so-funktionierts`, `/solidarische-landwirtschaft` oder `/kalender`

#### Scenario: Routen laden
- **WHEN** jede der drei Routen direkt aufgerufen wird
- **THEN** rendert sie eine Seite mit eigenem `h1` im gemeinsamen Seitenrahmen

### Requirement: So funktioniert's – Kopf und Ablauf
Die Route `/so-funktionierts` SHALL das Label "Mitmachen", das `h1` "So funktioniert's" und den Untertitel "In vier einfachen Schritten zur Mitgliedschaft" zeigen. Ein Abschnitt mit `id="so-funktionierts"` SHALL vier nummerierte Schritte mit den Überschriften "Ernteanteil wählen", "Depot auswählen", "Teilnahme wegschicken" und "Genießen & mitmachen" in dieser Reihenfolge zeigen. Jeder Schritt SHALL ein Bild mit nicht leerem Alternativtext enthalten.

#### Scenario: Vier Schritte
- **WHEN** `/so-funktionierts` geöffnet wird
- **THEN** sind vier Schritte mit den Nummern 1 bis 4 und den genannten Überschriften sichtbar

#### Scenario: Schritt 3 nennt den Einsendeweg
- **WHEN** Schritt 3 "Teilnahme wegschicken" geprüft wird
- **THEN** ist die Zieladresse `Team.Koordination@stadt-land-beides.de` als Bild mit entsprechendem Alternativtext vorhanden

### Requirement: Download der Teilnahmevereinbarung
Die Seite `/so-funktionierts` SHALL einen Download-Link "Teilnahmevereinbarung" enthalten, der auf `/TNV_StadtLandBeides_V9_3_2026.pdf` zeigt und ein PDF liefert.

#### Scenario: PDF-Download
- **WHEN** der Download-Link angeklickt wird
- **THEN** wird das PDF `TNV_StadtLandBeides_V9_3_2026.pdf` mit HTTP-Status 200 und Inhaltstyp `application/pdf` geliefert

### Requirement: Vorschau der Teilnahmevereinbarung
Die Seite `/so-funktionierts` SHALL zwei Vorschaubilder der Teilnahmevereinbarung (Ernteanteil-Auswahl, Depot-Auswahl) mit erklärendem Text und einen Link "Teilnahmebedingungen" auf `/mitmachen` (mit Anker) enthalten.

#### Scenario: Zwei Vorschaubilder
- **WHEN** der Vorschau-Abschnitt geprüft wird
- **THEN** sind zwei Bilder mit nicht leerem `alt` vorhanden, die Seite 1 (Ernteanteil) und Seite 2 (Depot) erläutern

### Requirement: Einstiegspunkte zu So funktioniert's
Die Seite `/so-funktionierts` SHALL von den Buttons "Jetzt dabei sein" und "Jetzt mitmachen" auf der Startseite sowie vom Button "Ernteteiler:in werden" auf `/kalender` erreichbar sein.

#### Scenario: Von der Startseite
- **WHEN** auf `/` "Jetzt dabei sein" angeklickt wird
- **THEN** öffnet sich `/so-funktionierts`

### Requirement: Solidarische Landwirtschaft – Kopf und Abschnitte
Die Route `/solidarische-landwirtschaft` SHALL das Label "Über uns" und das `h1` "Solidarische Landwirtschaft" zeigen. Sie SHALL fünf Abschnitte in dieser Reihenfolge enthalten: `was-ist` ("Was ist Solidarische Landwirtschaft?"), `leitbild` ("Unser Leitbild"), `hoefe` ("Unsere Partnerhöfe"), `weltweit` ("SoLaWi weltweit") und `netzwerk` ("Netzwerk Solidarische Landwirtschaft").

#### Scenario: Fünf Abschnitte
- **WHEN** `/solidarische-landwirtschaft` geladen wird
- **THEN** existieren fünf Abschnitte mit den genannten `id` und `h2` in der genannten Reihenfolge

### Requirement: Partnerhöfe verlinken auf Ernteanteile
Der Abschnitt "Unsere Partnerhöfe" SHALL vier verlinkte Kacheln zeigen, die auf `/ernteanteile/hederer-sommer`, `/ernteanteile/tristans-winter`, `/ernteanteile/walz-huhn` und `/ernteanteile/kirschgarten-beeren` führen.

#### Scenario: Vier Hofkacheln
- **WHEN** der Abschnitt geprüft wird
- **THEN** gibt es vier Kacheln mit den genannten Zielen
- **AND** jedes Ziel rendert eine Ernteanteil-Detailseite

### Requirement: Netzwerk-Abschnitt mit externem Link
Der Abschnitt "Netzwerk Solidarische Landwirtschaft" SHALL einen Link auf `https://www.solidarische-landwirtschaft.org` enthalten, der in einem neuen Tab mit `rel="noopener noreferrer"` öffnet.

#### Scenario: Externer Link
- **WHEN** der Link geprüft wird
- **THEN** hat er `target="_blank"` und `rel="noopener noreferrer"`

### Requirement: Abschluss-CTA auf Solidarische Landwirtschaft
Der letzte Abschnitt SHALL einen Button "Ernteteiler werden" enthalten, der auf `/mitmachen` führt.

#### Scenario: CTA
- **WHEN** "Ernteteiler werden" angeklickt wird
- **THEN** öffnet sich `/mitmachen`

### Requirement: Einstiegspunkte zu Solidarische Landwirtschaft
Die Seite `/solidarische-landwirtschaft` SHALL über den Footer-Link "Über uns" und über den Link "Mehr über SoLaWi erfahren" auf der Startseite erreichbar sein.

#### Scenario: Footer-Link
- **WHEN** im Footer "Über uns" angeklickt wird
- **THEN** öffnet sich `/solidarische-landwirtschaft`

### Requirement: Kalender – Kopf und Terminarten
Die Route `/kalender` SHALL das Label "Termine", das `h1` "Kalender" und einen Abschnitt `id="terminarten"` ("Welche Termine es gibt") mit drei Karten zeigen: "Jahreshauptversammlung" (einmal im Jahr, im Herbst), "Hofaktionen" (in unregelmäßigen Abständen) und "Depot-Dienst" (1–2x im Jahr, ca. 20 Minuten). Sie SHALL keine konkreten, erfundenen Kalenderdaten enthalten.

#### Scenario: Drei Terminarten
- **WHEN** der Abschnitt geprüft wird
- **THEN** sind drei Karten mit Titel und Rhythmus wie genannt vorhanden

#### Scenario: Keine Platzhalter-Termine
- **WHEN** die Seite nach Datumsangaben im Format Tag.Monat.Jahr durchsucht wird
- **THEN** gibt es keinen Treffer

### Requirement: Kalender – Ankündigungsweg
Der Abschnitt `id="ankuendigung"` SHALL erklären, dass konkrete Termine über Hof-Post (E-Mail) und Newsletter kommuniziert werden, und die Adresse `Team.Koordination@stadt-land-beides.de` als `mailto:`-Link zeigen.

#### Scenario: Mailto-Link
- **WHEN** der Abschnitt geprüft wird
- **THEN** zeigt ein Link auf `mailto:Team.Koordination@stadt-land-beides.de`

### Requirement: Kalender – Verweis auf Lieferrhythmus
Der Abschnitt "Wann dein Ernteanteil kommt" SHALL die Lieferphasen von Sommergemüse, Wintergemüse und den More..-Anteilen nennen und mit einem Link "Lieferrhythmus & Depots" auf `/depots#anlieferung` verweisen.

#### Scenario: Verweislink
- **WHEN** "Lieferrhythmus & Depots" angeklickt wird
- **THEN** öffnet sich `/depots` mit Anker `anlieferung`

### Requirement: Kalender – Abschluss-CTAs
Die Seite `/kalender` SHALL am Ende die Buttons "Ernteteiler:in werden" (→ `/so-funktionierts`) und "Im Verein mitarbeiten" (→ `/mitmachen#engagement`) enthalten.

#### Scenario: Zwei Buttons
- **WHEN** das Seitenende geprüft wird
- **THEN** sind beide Buttons mit den genannten Zielen vorhanden
