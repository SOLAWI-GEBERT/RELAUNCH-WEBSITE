# participation Specification

## Purpose
Beschreibt die Mitmachen-Seite /mitmachen mit SoLaWi in Aktion, SoLaWi in der Stadt und dem Weg zur Anmeldung.

## Requirements

### Requirement: Mitmachen-Seite und Kopfbereich
Die Route `/mitmachen` SHALL eine Seite mit dem Label "Dabei sein", dem `h1` "Wie kann ich mitmachen?" und einem Bild mit nicht leerem Alternativtext zeigen.

#### Scenario: Kopfbereich
- **WHEN** `/mitmachen` geöffnet wird
- **THEN** ist genau ein `h1` "Wie kann ich mitmachen?" vorhanden

### Requirement: Zwei Hauptabschnitte
Die Seite SHALL zwei Hauptabschnitte mit den `h2` "SoLaWi in Aktion" und "SoLaWi in der Stadt" in dieser Reihenfolge enthalten, gefolgt von einem Abschluss-Abschnitt "Bereit mitzumachen?".

#### Scenario: Reihenfolge der Abschnitte
- **WHEN** die `h2` der Seite in Dokumentreihenfolge gelesen werden
- **THEN** lauten sie "SoLaWi in Aktion", "SoLaWi in der Stadt", "Bereit mitzumachen?"

### Requirement: Menü-Anker auf der Seite
Die Seite SHALL für jeden Untermenü-Eintrag von "Mitmachen" ein Sprungziel besitzen: `id="events"`, `id="highlights"`, `id="engagement"`, `id="depots"` und `id="logistik"`. Jedes Sprungziel SHALL eine Überschrift (`h3`) mit dem Namen "Zukünftige Events", "Highlights", "Engagement im Verein", "Die Depots" bzw. "Unsere Logistik" tragen.

#### Scenario: Alle Anker vorhanden
- **WHEN** `/mitmachen` geladen wird
- **THEN** existieren fünf Elemente mit den genannten `id`-Werten
- **AND** die Reihenfolge im Dokument ist events, highlights, engagement, depots, logistik

#### Scenario: Überschrift je Anker
- **WHEN** `/mitmachen#depots` geöffnet wird
- **THEN** ist das Sprungziel sichtbar und enthält die Überschrift "Die Depots"

### Requirement: Zukünftige Events
Der Abschnitt "Zukünftige Events" SHALL die beiden Terminarten "Jahreshauptversammlung" und "Hofaktionen" beschreiben und darauf hinweisen, dass Termine per Hof-Post (E-Mail) und Newsletter bekannt gegeben werden. Er SHALL keine konkreten Kalenderdaten als Platzhalter enthalten.

#### Scenario: Terminarten
- **WHEN** der Abschnitt geprüft wird
- **THEN** sind zwei Karten "Jahreshauptversammlung" und "Hofaktionen" vorhanden
- **AND** ein Hinweis nennt Hof-Post und Newsletter als Informationsweg

### Requirement: Highlights
Der Abschnitt "Highlights" SHALL ein Bild mit Alternativtext und Beschreibungstext zu Pflanzaktion, Ernten und Erntedankfest enthalten.

#### Scenario: Bild und Text
- **WHEN** der Abschnitt geprüft wird
- **THEN** ist ein Bild mit nicht leerem `alt` und ein Text sichtbar, der Pflanzaktion, Ernten und Erntedankfest nennt

### Requirement: Engagement im Verein
Der Abschnitt "Engagement im Verein" SHALL den Depot-Dienst (1–2x pro Jahr, ca. 20 Minuten) erwähnen und die drei ehrenamtlichen Rollen "Hofbetreuer", "Depotbetreuer" und "Fahrer" als Karten darstellen.

#### Scenario: Drei Rollen
- **WHEN** der Abschnitt geprüft wird
- **THEN** sind drei Karten mit den Titeln Hofbetreuer, Depotbetreuer und Fahrer vorhanden

### Requirement: Depot-Übersicht
Der Abschnitt "Die Depots" SHALL die Depots nach Stadt gruppieren: unter "Nürnberg" Depot Stadtpark, Depot St. Peter, Depot Die Wiese, Depot Johannis, Depot Gostenhof, Depot AKi und Depot Altenfurt; unter "Fürth" Depot Tataa und Depot Spiegelfabrik. Depot Gostenhof und Depot Spiegelfabrik SHALL mit "(Warteliste)" gekennzeichnet sein. Ein Link "Adressen, Zeiten & Karte" SHALL auf `/depots#karte` führen.

#### Scenario: Gruppierung und Anzahl
- **WHEN** der Abschnitt geprüft wird
- **THEN** listet "Nürnberg" sieben und "Fürth" zwei Depots

#### Scenario: Wartelisten-Kennzeichnung
- **WHEN** die Depotlisten geprüft werden
- **THEN** tragen genau Depot Gostenhof und Depot Spiegelfabrik den Zusatz "(Warteliste)"

#### Scenario: Link zur Karte
- **WHEN** "Adressen, Zeiten & Karte" angeklickt wird
- **THEN** öffnet sich `/depots` mit Anker `karte`

### Requirement: Eigenes Depot anregen
Im Abschnitt "Die Depots" SHALL ein Hinweisblock "Eigenes Depot?" einen `mailto:`-Link "Kontakt aufnehmen" an die Koordinations-Adresse enthalten.

#### Scenario: Mailto-Link
- **WHEN** der Hinweisblock geprüft wird
- **THEN** zeigt der Link "Kontakt aufnehmen" auf `mailto:Team.Koordination@stadt-land-beides.de`

### Requirement: Logistik-Abschnitt
Der Abschnitt "Unsere Logistik" SHALL drei Kennzahlen (4 Partnerhöfe im Umland, 9 Depots in Nürnberg & Fürth, 1 ehrenamtliches Logistik-Team) und einen Link "Lieferrhythmus" auf `/depots#anlieferung` enthalten.

#### Scenario: Kennzahlen
- **WHEN** der Abschnitt geprüft wird
- **THEN** sind die Zahlen 4, 9 und 1 mit den genannten Beschriftungen sichtbar

#### Scenario: Konsistenz der Depot-Zahl
- **WHEN** die Kennzahl der Depots mit der Anzahl der Depots unter "Die Depots" verglichen wird
- **THEN** stimmen beide überein

#### Scenario: Link zum Lieferrhythmus
- **WHEN** "Lieferrhythmus" angeklickt wird
- **THEN** öffnet sich `/depots` mit Anker `anlieferung`

### Requirement: Abschluss-CTA zur Anmeldung
Der letzte Abschnitt SHALL einen Button "Zur Anmeldung" enthalten, der auf `/so-funktionierts` führt.

#### Scenario: Button
- **WHEN** "Zur Anmeldung" angeklickt wird
- **THEN** öffnet sich `/so-funktionierts`
