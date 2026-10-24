# Spec Delta

## MODIFIED Requirements

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

#### Scenario: Popup des neuen Hofs
- **WHEN** auf den Marker "Schweigerts Hof" geklickt wird
- **THEN** zeigt das Popup den Namen und die Adresse "Rockenbach", aber keine Öffnungszeiten

#### Scenario: Scrollen über der Karte
- **WHEN** das Mausrad über der Karte gedreht wird
- **THEN** scrollt die Seite und die Karte ändert ihren Zoom nicht

#### Scenario: Quellenangabe
- **WHEN** die Karte angezeigt wird
- **THEN** ist die OpenStreetMap-Attribution sichtbar

### Requirement: Lieferrhythmus-Tabelle
Der Abschnitt "Lieferrhythmus" SHALL eine Tabelle mit den Spalten Hof, Produkt, Zyklus und Phase und sechs Zeilen zeigen: Tristan Wintergemüse (wöchentl./14-tägig, Okt–Mrz), Tristan Sommergemüse (wöchentl./14-tägig, Apr–Sept (ab 2027)), Schweigerts Bio..Edelpilze (wöchentl./14-tägig, ganzjährig), Walz Fleisch, Eier, Getreide (1–2x/Monat, ganzjährig), Kirschgarten Bio..Beeren (wöchentlich, Jul–Sept) und Kirschgarten Stein- & Kernobst (unregelmäßig, Jul–Dez (Warteliste)).

#### Scenario: Tabellenstruktur
- **WHEN** die Tabelle geprüft wird
- **THEN** hat sie vier Spaltenköpfe und sechs Datenzeilen mit den genannten Werten

#### Scenario: Konsistenz mit Detailseiten
- **WHEN** die Phase je Produkt mit den Zeiträumen auf den Detailseiten unter `/ernteanteile/…` verglichen wird
- **THEN** stimmen die Zeiträume für Wintergemüse, Sommergemüse, Bio..Edelpilze, Bio..Beeren und Stein- & Kernobst überein
