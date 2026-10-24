# Spec Delta

## MODIFIED Requirements

### Requirement: Ergänzende Seiten außerhalb des Hauptmenüs
Die Seiten `/so-funktionierts` und `/solidarische-landwirtschaft` SHALL als Routen erreichbar sein, ohne einen Eintrag im Hauptmenü (erste, zweite oder dritte Ebene) zu besitzen.

#### Scenario: Kein Menüeintrag
- **WHEN** alle Linkziele des Hauptmenüs gesammelt werden
- **THEN** ist keines davon `/so-funktionierts` oder `/solidarische-landwirtschaft`

#### Scenario: Routen laden
- **WHEN** jede der beiden Routen direkt aufgerufen wird
- **THEN** rendert sie eine Seite mit eigenem `h1` im gemeinsamen Seitenrahmen

### Requirement: Einstiegspunkte zu So funktioniert's
Die Seite `/so-funktionierts` SHALL von den Buttons "Jetzt dabei sein" und "Jetzt mitmachen" auf der Startseite erreichbar sein.

#### Scenario: Von der Startseite
- **WHEN** auf `/` "Jetzt dabei sein" angeklickt wird
- **THEN** öffnet sich `/so-funktionierts`

## REMOVED Requirements

### Requirement: Kalender – Kopf und Terminarten
**Reason**: Die Route `/kalender` entfällt — sie war von keiner Seite aus verlinkt und wiederholte Inhalte, die bereits auf `/mitmachen#events` (Jahreshauptversammlung, Hofaktionen) stehen.
**Migration**: Siehe `participation` (Requirement "Zukünftige Events").

Die Route `/kalender` SHALL das Label "Termine", das `h1` "Kalender" und einen Abschnitt `id="terminarten"` ("Welche Termine es gibt") mit drei Karten zeigen: "Jahreshauptversammlung" (einmal im Jahr, im Herbst), "Hofaktionen" (in unregelmäßigen Abständen) und "Depot-Dienst" (1–2x im Jahr, ca. 20 Minuten). Sie SHALL keine konkreten, erfundenen Kalenderdaten enthalten.

#### Scenario: Drei Terminarten
- **WHEN** der Abschnitt geprüft wird
- **THEN** sind drei Karten mit Titel und Rhythmus wie genannt vorhanden

#### Scenario: Keine Platzhalter-Termine
- **WHEN** die Seite nach Datumsangaben im Format Tag.Monat.Jahr durchsucht wird
- **THEN** gibt es keinen Treffer

### Requirement: Kalender – Ankündigungsweg
**Reason**: Entfällt mit der Route `/kalender`; der Ankündigungsweg wird jetzt in der FAQ erklärt.
**Migration**: Siehe `faq` (Requirement "Weg zu Terminen und Mitmachangeboten").

Der Abschnitt `id="ankuendigung"` SHALL erklären, dass konkrete Termine über Hof-Post (E-Mail) und Newsletter kommuniziert werden, und die Adresse `Team.Koordination@stadt-land-beides.de` als `mailto:`-Link zeigen.

#### Scenario: Mailto-Link
- **WHEN** der Abschnitt geprüft wird
- **THEN** zeigt ein Link auf `mailto:Team.Koordination@stadt-land-beides.de`

### Requirement: Kalender – Verweis auf Lieferrhythmus
**Reason**: Entfällt mit der Route `/kalender`; die Lieferrhythmus-Tabelle steht bereits vollständig auf `/depots#anlieferung`, die Seite fügte nur eine redundante Kurzfassung hinzu.
**Migration**: Siehe `depots` (Requirement "Lieferrhythmus-Tabelle").

Der Abschnitt "Wann dein Ernteanteil kommt" SHALL die Lieferphasen von Wintergemüse, Bio..Edelpilzen und den More..-Anteilen nennen und mit einem Link "Lieferrhythmus & Depots" auf `/depots#anlieferung` verweisen.

#### Scenario: Verweislink
- **WHEN** "Lieferrhythmus & Depots" angeklickt wird
- **THEN** öffnet sich `/depots` mit Anker `anlieferung`

### Requirement: Kalender – Abschluss-CTAs
**Reason**: Entfällt mit der Route `/kalender`; beide Ziele sind bereits über `/mitmachen` erreichbar.
**Migration**: Siehe `participation` (Abschluss-CTA zur Anmeldung, Engagement-Abschnitt).

Die Seite `/kalender` SHALL am Ende die Buttons "Ernteteiler:in werden" (→ `/so-funktionierts`) und "Im Verein mitarbeiten" (→ `/mitmachen#engagement`) enthalten.

#### Scenario: Zwei Buttons
- **WHEN** das Seitenende geprüft wird
- **THEN** sind beide Buttons mit den genannten Zielen vorhanden
