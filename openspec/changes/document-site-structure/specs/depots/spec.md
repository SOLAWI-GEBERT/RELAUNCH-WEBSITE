## ADDED Requirements

### Requirement: Depot-Seite und Kopfbereich
Die Route `/depots` SHALL eine Seite mit dem Label "Abholung & Termine", dem `h1` "Depots" und einem Bild mit nicht leerem Alternativtext zeigen.

#### Scenario: Kopfbereich
- **WHEN** `/depots` geöffnet wird
- **THEN** ist genau ein `h1` "Depots" vorhanden

### Requirement: Abschnitte und Anker
Die Seite SHALL folgende Abschnitte mit Anker-`id` in dieser Reihenfolge enthalten: `karte` ("Höfe & Depots"), `depots` ("Depot-Öffnungszeiten"), `lieferung` ("Lieferung & Abholung") und `anlieferung` ("Lieferrhythmus"). Die Unterblöcke von `lieferung` SHALL die `id` `wann`, `was`, `aenderungen` und `depot-hinweise` tragen.

#### Scenario: Alle Anker vorhanden
- **WHEN** `/depots` geladen wird
- **THEN** existieren die vier Abschnitte und die vier Unterblöcke mit den genannten `id`-Werten

#### Scenario: Eingehende Links funktionieren
- **WHEN** `/depots#karte` und `/depots#anlieferung` (verlinkt aus Menü, Mitmachen und Kalender) geöffnet werden
- **THEN** scrollt die Seite jeweils zum zugehörigen Abschnitt

### Requirement: Karte mit Depots und Höfen
Der Abschnitt "Höfe & Depots" SHALL eine interaktive Karte mit je einem Marker pro Depot (9) und pro Hof (4) zeigen. Ein Klick auf einen Marker SHALL ein Popup mit Name und Adresse öffnen, bei Depots zusätzlich mit den Öffnungszeiten. Eine Legende SHALL Depot- und Hof-Symbol erklären. Das Zoomen per Mausrad über der Karte SHALL deaktiviert sein, damit die Seite beim Scrollen nicht gefangen wird.

#### Scenario: Markeranzahl
- **WHEN** die Karte geladen ist
- **THEN** sind 13 Marker sichtbar oder erreichbar (9 Depots, 4 Höfe)

#### Scenario: Popup eines Depots
- **WHEN** auf den Marker "Depot St. Peter" geklickt wird
- **THEN** zeigt das Popup den Namen, die Adresse "Findelwiesenstr. 25, Nürnberg" und die Öffnungszeiten

#### Scenario: Popup eines Hofs
- **WHEN** auf den Marker "Demeterhof Andreas Walz" geklickt wird
- **THEN** zeigt das Popup den Namen und die Adresse, aber keine Öffnungszeiten

#### Scenario: Scrollen über der Karte
- **WHEN** das Mausrad über der Karte gedreht wird
- **THEN** scrollt die Seite und die Karte ändert ihren Zoom nicht

#### Scenario: Quellenangabe
- **WHEN** die Karte angezeigt wird
- **THEN** ist die OpenStreetMap-Attribution sichtbar

### Requirement: Depot-Liste
Das System SHALL die neun Depots Stadtpark, St. Peter, Die Wiese, Gostenhof, Johannis, AKi, Tataa, Spiegelfabrik und Altenfurt führen. Depot Gostenhof und Depot Spiegelfabrik SHALL den Zusatz "(Warteliste)" im Namen tragen. Der Abschnitt "Depot-Öffnungszeiten" SHALL für jedes Depot eine Karte mit Name (`h3`) und Öffnungszeiten zeigen.

#### Scenario: Neun Karten
- **WHEN** der Abschnitt "Depot-Öffnungszeiten" geprüft wird
- **THEN** gibt es neun Karten, jede mit Name und Zeiten

#### Scenario: Wartelisten
- **WHEN** die Namen geprüft werden
- **THEN** enden genau "Depot Gostenhof (Warteliste)" und "Depot Spiegelfabrik (Warteliste)" auf "(Warteliste)"

#### Scenario: Konsistenz mit Mitmachen
- **WHEN** die Depotnamen dieser Seite mit denen unter `/mitmachen#depots` verglichen werden
- **THEN** sind die Mengen gleich

### Requirement: Lieferung und Abholung
Der Abschnitt "Lieferung & Abholung" SHALL vier Blöcke enthalten: "Wann wird geliefert?", "Was wird geliefert?", "Änderungen/Feiertage/Ausfälle" und "Abholung & Depot-Regeln". Der letzte Block SHALL fünf Regeln auflisten, darunter die Eigenverantwortung für die Abholung, den Verbleib nicht abgeholter Ware bei Foodsharing und den Depot-Dienst von 1–2 Mal im Jahr (ca. 20 Minuten).

#### Scenario: Vier Blöcke
- **WHEN** der Abschnitt geprüft wird
- **THEN** sind vier Überschriften wie genannt vorhanden

#### Scenario: Fünf Regeln
- **WHEN** der Block "Abholung & Depot-Regeln" geprüft wird
- **THEN** besteht die Liste aus fünf Punkten und nennt "Foodsharing"

### Requirement: Lieferrhythmus-Tabelle
Der Abschnitt "Lieferrhythmus" SHALL eine Tabelle mit den Spalten Hof, Produkt, Zyklus und Phase und fünf Zeilen zeigen: Hederer Sommergemüse (wöchentlich, Apr–Sept), Hederer Obst (nach Bedarf, Jul–Dez), Tristan Wintergemüse (wöchentl./14-tägig, Okt–Mrz), Walz Fleisch, Eier, Getreide (1–2x/Monat, ganzjährig) und Kirschgarten Bio..Beeren (wöchentlich, Jul–Sept).

#### Scenario: Tabellenstruktur
- **WHEN** die Tabelle geprüft wird
- **THEN** hat sie vier Spaltenköpfe und fünf Datenzeilen mit den genannten Werten

#### Scenario: Konsistenz mit Detailseiten
- **WHEN** die Phase je Produkt mit den Zeiträumen auf den Detailseiten unter `/ernteanteile/…` verglichen wird
- **THEN** stimmen die Zeiträume für Sommergemüse, Obst, Wintergemüse und Bio..Beeren überein

### Requirement: Newsletter-Hinweis am Seitenende
Die Seite SHALL am Ende einen Abschnitt "Bleib auf dem Laufenden" mit einem Button "Zum Newsletter" zeigen.

#### Scenario: Abschnitt vorhanden
- **WHEN** das Seitenende geprüft wird
- **THEN** sind die Überschrift und der Button "Zum Newsletter" sichtbar
