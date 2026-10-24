# start-page Specification

## Purpose
Beschreibt die Startseite / mit Hero, SoLaWi in 60 Sekunden, Warum mitmachen, Was bekomme ich und Abschluss-CTA.

## Requirements

### Requirement: Startseite unter Wurzelroute
Die Startseite SHALL unter `/` erreichbar sein und als Hauptüberschrift (`h1`) "Stadt, Land, Beides." tragen.

#### Scenario: Hauptüberschrift
- **WHEN** `/` geöffnet wird
- **THEN** existiert genau ein `h1` mit dem Text "Stadt, Land, Beides."

### Requirement: Hero mit Einstiegs-CTA
Der Hero-Bereich SHALL das Label "Solidarische Landwirtschaft", einen Einleitungstext und einen Button "Jetzt dabei sein" enthalten. Der Button SHALL auf `/so-funktionierts` verlinken. Das Hero-Bild SHALL einen nicht leeren Alternativtext besitzen.

#### Scenario: Hero-CTA
- **WHEN** der Button "Jetzt dabei sein" im Hero angeklickt wird
- **THEN** öffnet sich `/so-funktionierts`

#### Scenario: Hero-Bild barrierefrei
- **WHEN** das Hero-Bild geprüft wird
- **THEN** hat es ein `alt`-Attribut mit Text

### Requirement: Abschnitt "SoLaWi in 60 Sekunden"
Die Startseite SHALL einen Abschnitt mit `id="solawi-60-sekunden"` und der Überschrift "SoLaWi in 60 Sekunden" enthalten. Er SHALL eine Kurzerklärung der Solidarischen Landwirtschaft, einen Link "Mehr über SoLaWi erfahren" auf `/solidarische-landwirtschaft` und drei Kernaussagen enthalten: "Du bezahlst den Hof, nicht das Produkt", "Saisonal & regional — direkt vom Acker" und "Gemeinsam tragen wir das Risiko".

#### Scenario: Anker vorhanden
- **WHEN** `/#solawi-60-sekunden` geöffnet wird
- **THEN** scrollt die Seite zum Abschnitt "SoLaWi in 60 Sekunden"

#### Scenario: Drei Kernaussagen
- **WHEN** der Abschnitt geprüft wird
- **THEN** sind drei Kernaussagen mit den genannten Überschriften vorhanden

#### Scenario: Weiterführender Link
- **WHEN** "Mehr über SoLaWi erfahren" angeklickt wird
- **THEN** öffnet sich `/solidarische-landwirtschaft`

### Requirement: Abschnitt "Warum mitmachen?"
Die Startseite SHALL einen Abschnitt "Warum mitmachen?" mit vier Kacheln enthalten: "Nachhaltig & Regional", "Gemeinschaft", "Vielfalt & Transparenz" und "Depot in deiner Nähe". Dieser Abschnitt SHALL keinen Menü-Anker besitzen.

#### Scenario: Vier Kacheln
- **WHEN** der Abschnitt "Warum mitmachen?" geprüft wird
- **THEN** sind genau vier Kacheln mit den genannten Überschriften vorhanden

### Requirement: Abschnitt "Was bekomme ich?"
Die Startseite SHALL einen Abschnitt mit `id="was-bekomme-ich"` und der Überschrift "Was bekomme ich?" enthalten. Er SHALL sechs verlinkte Kacheln zeigen, jeweils mit Produktname, Hof und Kurzbeschreibung, die auf die Ernteanteil-Detailseiten `/ernteanteile/tristan-gemuese`, `/ernteanteile/schweigerts-edelpilze`, `/ernteanteile/kirschgarten-beeren`, `/ernteanteile/walz-huhn`, `/ernteanteile/walz-getreide` und `/ernteanteile/walz-hack` führen. Produktname, Hof und Kurzbeschreibung SHALL mit der entsprechenden Kachel der Ernteanteile-Übersicht übereinstimmen.

#### Scenario: Sechs Kacheln mit Zielen
- **WHEN** der Abschnitt geprüft wird
- **THEN** gibt es sechs Kacheln, deren Links genau auf die sechs genannten Routen zeigen

#### Scenario: Kein toter Link
- **WHEN** jede Kachel angeklickt wird
- **THEN** rendert die Zielroute eine Seite mit passendem `h1` und nicht die Fehler- oder Leerseite

#### Scenario: Anker vorhanden
- **WHEN** `/#was-bekomme-ich` geöffnet wird
- **THEN** scrollt die Seite zu diesem Abschnitt

#### Scenario: Gleiche Texte wie die Übersicht
- **WHEN** die sechs Kacheln mit den Kacheln auf `/ernteanteile` verglichen werden
- **THEN** sind Produktname, Hof und Kurzbeschreibung jeweils identisch

#### Scenario: Produktnamen der TNV
- **WHEN** die Kachel zu `/ernteanteile/walz-getreide` geprüft wird
- **THEN** lautet der Produktname "More..Ur-Getreide"

#### Scenario: Gemüse-Kachel nennt beide Saisons
- **WHEN** die Kachel zu `/ernteanteile/tristan-gemuese` geprüft wird
- **THEN** nennt die Kurzbeschreibung Winter- und Sommergemüse

### Requirement: Abschluss-CTA
Die Startseite SHALL am Ende einen Abschnitt mit der Frage "Bereit für frische, regionale Lebensmittel?" und einem Button "Jetzt mitmachen" enthalten, der auf `/so-funktionierts` verlinkt.

#### Scenario: Abschluss-Button
- **WHEN** "Jetzt mitmachen" angeklickt wird
- **THEN** öffnet sich `/so-funktionierts`

### Requirement: Keine entfernten Abschnitte
Die Startseite SHALL die am 2026-07-30 entfernten Abschnitte "Was kostet das?", "Depot in deiner Nähe" (als eigener Abschnitt) und "Aktuelles" nicht mehr enthalten.

#### Scenario: Entfernte Überschriften
- **WHEN** die Startseite nach `h2` durchsucht wird
- **THEN** ist keine Überschrift "Was kostet das?" oder "Aktuelles" vorhanden
