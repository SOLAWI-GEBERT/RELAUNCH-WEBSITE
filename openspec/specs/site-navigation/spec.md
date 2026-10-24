# site-navigation Specification

## Purpose
Beschreibt Seitenrahmen, dreistufiges Hauptmenü (Desktop und Mobile), aktiven Menüzustand und Footer.

## Requirements

### Requirement: Gemeinsamer Seitenrahmen
Jede Seite der Website SHALL innerhalb eines gemeinsamen Rahmens aus Kopfnavigation, Inhaltsbereich und Fußbereich ausgeliefert werden. Die Kopfnavigation SHALL beim Scrollen am oberen Rand sichtbar bleiben.

#### Scenario: Rahmen auf jeder Route
- **WHEN** eine beliebige registrierte Route geöffnet wird
- **THEN** sind Kopfnavigation, Seiteninhalt und Fußbereich vorhanden

#### Scenario: Navigation bleibt beim Scrollen sichtbar
- **WHEN** die Seite um mindestens eine Viewport-Höhe nach unten gescrollt wird
- **THEN** ist die Kopfnavigation weiterhin am oberen Rand sichtbar

### Requirement: Hauptmenü-Struktur
Das Hauptmenü SHALL genau diese vier Einträge der ersten Ebene in dieser Reihenfolge enthalten: "Start", "Ernteanteile", "Mitmachen", "Fragen & Antworten". Die Einträge SHALL auf `/`, `/ernteanteile`, `/mitmachen` und `/haeufige-fragen` verlinken.

#### Scenario: Einträge der ersten Ebene
- **WHEN** die Kopfnavigation im Desktop-Layout gerendert wird
- **THEN** zeigt sie vier Einträge in der Reihenfolge Start, Ernteanteile, Mitmachen, Fragen & Antworten
- **AND** jeder Eintrag führt auf die zugehörige Route

#### Scenario: Kein weiterer Haupteintrag
- **WHEN** die erste Menüebene gezählt wird
- **THEN** gibt es keinen fünften Eintrag und keinen separaten Button wie "Ernteteiler werden"

### Requirement: Untermenü Start
Der Eintrag "Start" SHALL ein Untermenü mit den Einträgen "SoLaWi in 60 Sekunden" (`/#solawi-60-sekunden`) und "Was bekomme ich?" (`/#was-bekomme-ich`) haben.

#### Scenario: Sprung zu Startseiten-Abschnitt
- **WHEN** der Eintrag "SoLaWi in 60 Sekunden" aktiviert wird
- **THEN** öffnet sich `/` und der Abschnitt mit `id="solawi-60-sekunden"` ist der Sprungziel-Anker

### Requirement: Untermenü Ernteanteile
Der Eintrag "Ernteanteile" SHALL ein Untermenü mit den Kategorien Gemüse, Obst, Beeren, Getreide, Eier und Fleisch in dieser Reihenfolge haben. Jede Kategorie SHALL die ihr zugeordneten Ernteanteil-Seiten als dritte Ebene enthalten. Die Kategorieköpfe SHALL keine eigene Seite als Ziel haben (sie dienen nur der Gruppierung).

#### Scenario: Kategorien und Blätter
- **WHEN** das Untermenü "Ernteanteile" geöffnet wird
- **THEN** enthält Gemüse die Einträge "Sommergemüse (Demeterhof Hederer)" → `/ernteanteile/hederer-sommer` und "Wintergemüse (Biohof Tristan)" → `/ernteanteile/tristans-winter`
- **AND** Obst enthält "Obst & Säfte (Demeterhof Hederer)" → `/ernteanteile/hederer-obst`
- **AND** Beeren enthält "Bio..Beeren (Kirschgarten)" → `/ernteanteile/kirschgarten-beeren`
- **AND** Getreide enthält "More..Ur-Getreide (Demeterhof Walz)" → `/ernteanteile/walz-getreide`
- **AND** Eier enthält "More..Huhn (Demeterhof Walz)" → `/ernteanteile/walz-huhn`
- **AND** Fleisch enthält "More..Bratgockerl", "More..Hack", "More..Wurst" (je Demeterhof Walz) → `/ernteanteile/walz-bratgockerl`, `/ernteanteile/walz-hack`, `/ernteanteile/walz-wurst`

#### Scenario: Produktnamen unverändert
- **WHEN** Menüeinträge der Produkte aus Hof Walz und Kirschgarten angezeigt werden
- **THEN** werden die Namen mit zwei Punkten geschrieben ("More..Huhn", "Bio..Beeren"), nicht mit einem

### Requirement: Untermenü Mitmachen
Der Eintrag "Mitmachen" SHALL ein Untermenü mit den Gruppen "SoLaWi in Aktion" und "SoLaWi in der Stadt" haben. Die Gruppe "SoLaWi in Aktion" SHALL "Zukünftige Events" (`/mitmachen#events`), "Highlights" (`/mitmachen#highlights`) und "Engagement im Verein" (`/mitmachen#engagement`) enthalten. Die Gruppe "SoLaWi in der Stadt" SHALL "Die Depots" (`/mitmachen#depots`), "Unsere Logistik" (`/mitmachen#logistik`) und "Adressen, Zeiten & Karte" (`/depots`) enthalten.

#### Scenario: Gruppen und Ziele
- **WHEN** das Untermenü "Mitmachen" geöffnet wird
- **THEN** sind beide Gruppen mit je drei Einträgen und den genannten Zielen vorhanden

#### Scenario: Jeder Anker hat ein Ziel
- **WHEN** ein Eintrag mit Anker aus dem Untermenü "Mitmachen" aktiviert wird
- **THEN** existiert auf `/mitmachen` ein Element mit der entsprechenden `id` (`events`, `highlights`, `engagement`, `depots`, `logistik`)

### Requirement: Untermenü Fragen & Antworten
Der Eintrag "Fragen & Antworten" SHALL ein Untermenü mit "Grundlagen" (`/haeufige-fragen#grundlagen`), "Schnelle Fragen" (`/haeufige-fragen#schnelle-fragen`), "Vereinsgeschichte" (`/haeufige-fragen#vereinsgeschichte`) und "Kontaktformular" (`/kontakt-anmeldung#kontakt`) haben.

#### Scenario: Einträge und Ziele
- **WHEN** das Untermenü "Fragen & Antworten" geöffnet wird
- **THEN** sind vier Einträge in dieser Reihenfolge vorhanden
- **AND** die ersten drei führen zu Ankern auf `/haeufige-fragen`, der vierte zum Anker `kontakt` auf `/kontakt-anmeldung`

### Requirement: Desktop-Verhalten
Ab Viewport-Breite 1024 px SHALL das Menü waagerecht dargestellt werden, und Untermenüs SHALL sich beim Überfahren des Haupteintrags öffnen. Der Hamburger-Button SHALL in diesem Layout nicht sichtbar sein.

#### Scenario: Hover öffnet Untermenü
- **WHEN** bei 1280 px Breite die Maus über "Ernteanteile" bewegt wird
- **THEN** wird das Untermenü mit den sechs Kategorien sichtbar

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
- **THEN** sind sechs Kategorieköpfe (Gemüse, Obst, Beeren, Getreide, Eier, Fleisch) als nicht klickbare Überschriften sichtbar
- **AND** darunter stehen alle neun Produktlinks, unter "Fleisch" die drei Fleisch-Produkte

#### Scenario: Link schließt Panel
- **WHEN** im geöffneten Panel ein Ziellink angeklickt wird
- **THEN** navigiert die Seite zum Ziel und das Panel ist geschlossen

#### Scenario: Veranstaltungs-Button
- **WHEN** das Panel geöffnet wird
- **THEN** ist am Ende ein Button "Veranstaltungen" sichtbar, der auf `/mitmachen#events` führt

### Requirement: Aktiver Menüzustand
Der Haupteintrag, dessen Pfad exakt dem aktuellen Pfad entspricht, SHALL visuell als aktiv hervorgehoben werden.

#### Scenario: Aktiver Eintrag
- **WHEN** `/mitmachen` geöffnet ist
- **THEN** ist "Mitmachen" hervorgehoben und die übrigen Haupteinträge nicht

### Requirement: Logo-Link
Das Logo "Stadt, Land, Beides." in der Kopfnavigation SHALL auf `/` verlinken.

#### Scenario: Klick auf Logo
- **WHEN** auf einer beliebigen Unterseite das Logo angeklickt wird
- **THEN** öffnet sich die Startseite

### Requirement: Fußbereich – Links
Der Fußbereich SHALL auf jeder Seite einen Block "Schnellzugriff" mit sechs Links enthalten und daneben die Links "Impressum", "Datenschutzerklärung" und "Kontakt" anbieten.

#### Scenario: Schnellzugriff-Links
- **WHEN** der Fußbereich auf beliebiger Seite geprüft wird
- **THEN** führen "Über uns" auf `/solidarische-landwirtschaft`, "Ernteanteile" auf `/ernteanteile`, "Mitmachen" auf `/mitmachen`, "Depots" auf `/depots`, "Termine & Aktionen" auf `/mitmachen#events` und "Kontakt" auf `/kontakt-anmeldung`

#### Scenario: Rechtliche Links und Kontakt
- **WHEN** der Fußbereich auf beliebiger Seite geprüft wird
- **THEN** führen "Impressum" auf `/impressum`, "Datenschutzerklärung" auf `/datenschutz` und der zweite Link "Kontakt" auf `/kontakt-anmeldung#kontakt`

### Requirement: Fußbereich – Vereins- und Kontaktangaben
Der Fußbereich SHALL die Vereinsdaten (Registergericht Nürnberg, VR 202062, USt-IdNr.), die Kontaktadresse (E-Mail und Postanschrift) und einen Copyright-Hinweis zeigen.

#### Scenario: Kontaktdaten sichtbar
- **WHEN** der Fußbereich geprüft wird
- **THEN** ist die E-Mail-Adresse als `mailto:`-Link und die Postanschrift (Findelwiesenstr. 25, 90478 Nürnberg) vorhanden

#### Scenario: Vereinsdaten sichtbar
- **WHEN** der Fußbereich geprüft wird
- **THEN** sind "Registergericht Nürnberg: VR 202062" und eine USt-IdNr. sichtbar
