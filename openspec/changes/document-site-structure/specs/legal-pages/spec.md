## ADDED Requirements

### Requirement: Impressum erreichbar
Die Route `/impressum` SHALL eine Seite mit dem `h1` "Impressum" zeigen und von jeder Seite über den Footer-Link "Impressum" erreichbar sein. Die Seite SHALL nicht im Hauptmenü stehen.

#### Scenario: Footer-Link
- **WHEN** auf einer beliebigen Seite im Footer "Impressum" angeklickt wird
- **THEN** öffnet sich `/impressum` mit dem `h1` "Impressum"

### Requirement: Impressum – Pflichtabschnitte
Das Impressum SHALL die Abschnitte "Herausgeber", "Vertretungsberechtigt", "Inhaltliche Verantwortung", "Registerdaten", "Bankverbindung", "Konzeption der Gemeinschaftsseite", "Bildrechte" und "Haftungsausschluss" in dieser Reihenfolge als `h2` zeigen.

#### Scenario: Abschnittsfolge
- **WHEN** die `h2` des Impressums gelesen werden
- **THEN** erscheinen die acht Abschnitte in der genannten Reihenfolge

### Requirement: Impressum – Anbieterangaben
Das Impressum SHALL den Vereinsnamen "Solidarische Landwirtschaft Stadt, Land, Beides e.V.", die Postanschrift Findelwiesenstr. 25, 90478 Nürnberg, eine Telefonnummer, die E-Mail-Adresse `Team.Koordination@stadt-land-beides.de` als `mailto:`-Link und das Registergericht "Nürnberg" mit "VR 202062" nennen.

#### Scenario: Anbieterangaben vollständig
- **WHEN** das Impressum geprüft wird
- **THEN** sind Vereinsname, Anschrift, Telefon, E-Mail-Link und Registerdaten sichtbar

#### Scenario: Konsistenz mit Footer
- **WHEN** Anschrift, E-Mail-Adresse und Registerangaben im Footer und im Impressum verglichen werden
- **THEN** stimmen sie überein

### Requirement: Datenschutzerklärung erreichbar
Die Route `/datenschutz` SHALL eine Seite mit dem `h1` "Datenschutzerklärung" zeigen und von jeder Seite über den Footer-Link "Datenschutzerklärung" erreichbar sein. Die Seite SHALL nicht im Hauptmenü stehen.

#### Scenario: Footer-Link
- **WHEN** auf einer beliebigen Seite im Footer "Datenschutzerklärung" angeklickt wird
- **THEN** öffnet sich `/datenschutz` mit dem `h1` "Datenschutzerklärung"

### Requirement: Datenschutz – Gliederung
Die Datenschutzerklärung SHALL zehn nummerierte Hauptabschnitte als `h2` in fester Reihenfolge zeigen. Abschnitt 9 SHALL die Unterabschnitte "9.1 Hosting", "9.2 OpenStreetMap", "9.3 Buchhaltung (Lexoffice)" und "9.4 Google Analytics" enthalten.

#### Scenario: Zehn Abschnitte
- **WHEN** die `h2` der Seite gelesen werden
- **THEN** lauten sie in dieser Reihenfolge: "1. Verantwortlicher", "2. Allgemeines zur Datenverarbeitung", "3. Art, Umfang und Zweck der Verarbeitung", "4. Datensicherheit", "5. Empfänger von Daten", "6. Datenlöschung", "7. Cookies und Tracking", "8. Deine Rechte", "9. Eingesetzte Dienste und Drittanbieter", "10. Aktualität dieser Datenschutzerklärung"

#### Scenario: Drittanbieter
- **WHEN** Abschnitt 9 geprüft wird
- **THEN** sind vier Unterabschnitte 9.1 bis 9.4 vorhanden
- **AND** 9.1 bis 9.3 verlinken die Datenschutzinformationen des jeweiligen Anbieters extern

### Requirement: Datenschutz – Keine Analysedienste
Die Website SHALL keine Analyse- oder Tracking-Dienste laden. Dies entspricht den Aussagen in Abschnitt 7 ("Cookies und Tracking") und 9.4 der Datenschutzerklärung.

#### Scenario: Kein Tracking-Skript
- **WHEN** eine beliebige Seite geladen wird und die Netzwerkanfragen geprüft werden
- **THEN** gibt es keine Anfrage an Google Analytics, Google Tag Manager oder vergleichbare Analyse-Domains
- **AND** Schrift- und Kartendienste (Google Fonts, OpenStreetMap-Tiles) zählen nicht als Analysedienste

### Requirement: Datenschutz – Ansprache
Die Datenschutzerklärung SHALL die Betroffenen konsequent duzen.

#### Scenario: Rechte-Abschnitt
- **WHEN** Abschnitt "8. Deine Rechte" gelesen wird
- **THEN** werden die Betroffenen mit "du" bzw. "dein" angesprochen und nicht mit "Sie"
