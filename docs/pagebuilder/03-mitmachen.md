# Mitmachen -- SP Page Builder Anleitung

## Ueberblick
Die Mitmachen-Seite erklaert, wie man Mitglied bei "Stadt, Land, Beides" wird. Sie enthaelt den Ablauf (4 Schritte), Hofbeteiligungen & Kosten (Preistabellen), verfuegbare Ernteteile, Depot-Standorte, Erwartungen und Engagement-Moeglichkeiten. 7 Sektionen.

---

## Sektion 1: Hero
**Addon:** SP Image + SP Heading + SP Text Block
**Section Background:** var(--solawi-green) (#c2ddb2) -- Pastell-Hintergrund
**Hoehe:** 400px, zentriert
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: weiss (#ffffff)
**Animation:** Keine

### Columns Layout: 6+6

**Column 1 (Text):**
- Addon: SP Heading
  - Tag: H1
  - Text: "Wie kann ich mitmachen?"
  - Font Family: EB Garamond, 48px
  - Farbe: foreground
- Addon: SP Text Block
  - Text: "Werde Teil unserer Gemeinschaft und geniesse frische, regionale Lebensmittel"
  - Font Size: 20px

**Column 2 (Illustration):**
- Addon: SP Image
  - Bild: /ablauf-mitmachen.jpg (zwei Menschen balancieren Ernteturm)
  - **object-fit: contain, NICHT beschneiden!**
  - Max-Height: 350px

---

## Sektion 2: So wirst du Mitglied (4 Schritte)
**Addon:** SP Heading + SP Feature Box (4x) + SP Button
**Section Background:** weiss (#ffffff)
**Section Padding:** 80px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: var(--solawi-mauve) (#c7afc7)
**Animation:** Fade Up, gestaffelt (Delay 0ms, 150ms, 300ms, 450ms)

### Columns Layout: 12 (Heading)

- Addon: SP Heading
  - Tag: H2, Text: "So wirst du Mitglied", EB Garamond, 36px, zentriert
- Addon: SP Text Block
  - Text: "In wenigen Schritten zur Mitgliedschaft bei Stadt, Land, Beides"
  - Zentriert, max-width 768px

### Columns Layout: 3+3+3+3 (Schritte)

**Schritt 1:**
- Addon: SP Feature Box
  - Nummer-Badge: Kreis 64px, Background var(--solawi-pink) (#d10038), weiss, 24px
  - Titel: "Informieren", Font: EB Garamond
  - Text: "Lerne unsere Hoefe und Angebote kennen"
  - Alignment: zentriert

**Schritt 2:**
- Titel: "Ernteanteil waehlen"
- Text: "Entscheide dich fuer deine Hoefe"

**Schritt 3:**
- Titel: "Depot finden"
- Text: "Waehle ein Depot in deiner Naehe"

**Schritt 4:**
- Titel: "Anmelden"
- Text: "Fuelle das Anmeldeformular aus"

### CTA Button (zentriert):
- Addon: SP Button
  - Text: "Jetzt anmelden" + Pfeil
  - Background: var(--solawi-pink) (#d10038)
  - Link: /anmeldung

---

## Sektion 3: Hofbeteiligungen & Kosten (Preistabelle)
**SP Section ID:** hofbeteiligungen
**Addon:** SP Heading + SP Pricing Table (3x) + SP Text Block
**Section Background:** var(--solawi-mauve) (#c7afc7)
**Section Padding:** 80px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: weiss (#ffffff)
**Animation:** Fade Up, gestaffelt

### Columns Layout: 12

- Addon: SP Heading
  - Tag: H2, Text: "Hofbeteiligungen & Kosten", EB Garamond, 36px

### Columns Layout: 4+4+4 (Pricing Cards)

**Pricing Card 1 -- Sommergemuese:**
- Addon: SP Pricing Table
  - Titel: "Sommergemuese"
  - Preis: "45EUR"
  - Periode: "pro Monat"
  - Features:
    - Woechentlich 5-7 kg frisches Gemuese
    - Mai bis Oktober (6 Monate)
    - Vom Reimehof
  - Card: weiss, Padding 32px, Border Radius 8px, shadow-lg
  - Feature-Bullets: Kreis-Dots in var(--solawi-pink)

**Pricing Card 2 -- Ganzjahrespaket (hervorgehoben):**
- Addon: SP Pricing Table
  - Badge: "Beliebt" -- Font: Cantora One, Background var(--solawi-pink), weiss, rounded-full
  - Titel: "Ganzjahrespaket"
  - Preis: "75EUR"
  - Periode: "pro Monat"
  - Features:
    - Sommer- und Wintergemuese
    - Ganzjaehrig frische Ernte
    - Reimehof + Biohof Walz
  - Card: weiss, **Border: 2px solid var(--solawi-pink)** (#d10038)
  - shadow-lg

**Pricing Card 3 -- Wintergemuese:**
- Addon: SP Pricing Table
  - Titel: "Wintergemuese"
  - Preis: "40EUR"
  - Periode: "pro Monat"
  - Features:
    - Woechentlich 5-7 kg Wintergemuese
    - November bis April (6 Monate)
    - Vom Biohof Walz
  - Card: weiss, shadow-lg

### Zusatzanteile (volle Breite):
- Addon: SP Text Block in Card
  - Background: weiss, Padding 24px, Border Radius 8px, shadow-md
  - Titel: "Zusatzanteile (optional)" (H3, EB Garamond, 20px)

### Columns Layout: 4+4+4 (Zusatz-Boxen)

- **Obst vom Hederer:** 20EUR / Monat (Juni - November), Background var(--solawi-green)/20, Border Radius 8px
- **Kaese von Kerschbaum:** 15EUR / Monat
- **Eier Gallini Fellici:** 8EUR / Monat (6 Eier/Woche)

---

## Sektion 4: Verfuegbare Ernteteile
**SP Section ID:** ernteteile
**Addon:** SP Heading + SP Text Block / SP Feature Box
**Section Background:** weiss (#ffffff)
**Section Padding:** 80px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: var(--solawi-orange) (#ffa673)
**Animation:** Fade Up

### Columns Layout: 12

- Addon: SP Heading
  - Tag: H2, Text: "Verfuegbare Ernteteile", EB Garamond, 36px

### Columns Layout: 6+6 (in Info-Box)

- Gesamt-Box Background: var(--solawi-green)/20, Padding 32px, Border Radius 8px

**Column 1 -- Aktuell verfuegbar:**
- Addon: SP Heading (H3): "Aktuell verfuegbar"
- 3 Zeilen (jeweils weisse Card):
  - "Sommergemuese" -- Badge: "12 frei" (Background var(--solawi-pink), weiss, rounded-full)
  - "Wintergemuese" -- Badge: "8 frei"
  - "Obstanteil" -- Badge: "5 frei"

**Column 2 -- Warteliste:**
- Addon: SP Heading (H3): "Warteliste"
- 2 Zeilen:
  - "Kaeseanteil" -- Badge: "Warteliste" (Background #f59e0b amber, weiss)
  - "Eieranteil" -- Badge: "Warteliste"
- Addon: SP Text Block
  - Text: "Die Zahlen werden monatlich aktualisiert. Bei Interesse trage dich in die Warteliste ein."
  - Font Size: 14px, Farbe #6B7280

---

## Sektion 5: Unsere Depot-Standorte
**SP Section ID:** depots
**Addon:** SP Heading + SP Feature Box (6x) + SP Text Block
**Section Background:** var(--solawi-orange) (#ffa673)
**Section Padding:** 80px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: weiss (#ffffff)
**Animation:** Fade Up, gestaffelt

### Columns Layout: 12 (Heading)

- Addon: SP Heading
  - Tag: H2, Text: "Unsere Depot-Standorte", EB Garamond, 36px, zentriert
- Addon: SP Text Block
  - Text: "Waehle ein Depot in deiner Naehe fuer die woechentliche Abholung"
  - Zentriert

### Columns Layout: 4+4+4 (Depot-Cards, 2 Reihen)

**Depot 1 -- Innenstadt:**
- Addon: SP Feature Box / SP Text Block
  - Card Background: weiss, Padding 24px, Border Radius 8px, shadow-md
  - Icon: /depot.png (Marker-Icon, klein) oder MapPin-Illustration
  - Titel: "Depot Innenstadt", Font: EB Garamond
  - Adresse: "Hauptstrasse 45, 12345 Musterstadt", Font Size 14px, Farbe #6B7280
  - Abholzeit: **Donnerstag 16-19 Uhr**
  - Kapazitaet: **35 Mitglieder (5 Plaetze frei)**

**Depot 2 -- Nordstadt:**
- Adresse: "Gruener Weg 12, 12345 Musterstadt"
- Abholzeit: **Freitag 15-18 Uhr**
- Kapazitaet: **25 Mitglieder (10 Plaetze frei)**

**Depot 3 -- Suedviertel:**
- Adresse: "Lindenallee 8, 12345 Musterstadt"
- Abholzeit: **Mittwoch 17-20 Uhr**
- Kapazitaet: **30 Mitglieder (vollstaendig belegt)**

**Depot 4 -- Westend:**
- Adresse: "Parkstrasse 23, 12345 Musterstadt"
- Abholzeit: **Donnerstag 15-18 Uhr**
- Kapazitaet: **20 Mitglieder (8 Plaetze frei)**

**Depot 5 -- Altstadt:**
- Adresse: "Marktplatz 5, 12345 Musterstadt"
- Abholzeit: **Freitag 16-19 Uhr**
- Kapazitaet: **40 Mitglieder (2 Plaetze frei)**

**Depot 6 -- Eigenes Depot gruenden:**
- Card mit **Border: 2px solid var(--solawi-pink)** (#d10038)
- Background: var(--solawi-pink)/10
- Titel: "Eigenes Depot gruenden"
- Text: "Du findest kein passendes Depot? Gruende dein eigenes!"
- Link: "Mehr erfahren" + Pfeil, Farbe var(--solawi-pink)

### Info-Box (volle Breite):
- Addon: SP Text Block
  - Card Background: weiss, Padding 24px, Border Radius 8px, shadow-md
  - Titel: "Wie macht man ein Depot?" (H3, EB Garamond) + FileText-Icon
  - Text: "Ein Depot zu betreuen ist einfacher als du denkst! Du benoetigst nur einen Raum (z.B. Keller, Garage) und 3-4 Stunden Zeit pro Woche. Wir unterstuetzen dich beim Aufbau und bei der Organisation."
  - Link: "Anleitung als PDF herunterladen" + Pfeil, Farbe var(--solawi-pink)

---

## Sektion 6: Was erwartet mich?
**SP Section ID:** erwartungen
**Addon:** SP Heading + SP Text Block + SP Feature Box (2x)
**Section Background:** weiss (#ffffff)
**Section Padding:** 80px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: var(--solawi-green) (#c2ddb2)
**Animation:** Fade Up

### Columns Layout: 12

- Addon: SP Heading
  - Tag: H2, Text: "Was erwartet mich?", EB Garamond, 36px
- Addon: SP Text Block
  - Text: "Als Mitglied erhaeltst du jede Woche frisches, saisonales Gemuese und kannst dich aktiv in die Gemeinschaft einbringen. Hier ein Ueberblick ueber deine Rechte und Pflichten:"

### Columns Layout: 6+6

**Column 1 -- Das bekommst du:**
- Addon: SP Feature Box
  - Background: var(--solawi-green)/20
  - Padding: 24px, Border Radius: 8px
  - Titel: "Das bekommst du" (H3, EB Garamond, 24px)
  - Liste mit Illustrations-Icons:
    - Woechentlich frisches Bio-Gemuese nach Saison
    - Zugang zu einer lebendigen Gemeinschaft
    - Einladungen zu Hofaktionen und Veranstaltungen
    - Newsletter mit Rezepten und Infos

**Column 2 -- Das erwarten wir:**
- Addon: SP Feature Box
  - Background: var(--solawi-green)/20
  - Titel: "Das erwarten wir"
  - Liste:
    - Puenktliche Zahlung des monatlichen Beitrags
    - Regelmaessige Abholung am Depot
    - Optional: 2-4 Hofaktionen pro Jahr (freiwillig)
    - Respektvoller Umgang in der Gemeinschaft

---

## Sektion 7: Mitarbeit & Engagement
**SP Section ID:** engagement
**Addon:** SP Heading + SP Text Block (4x Cards) + SP Alert Box
**Section Background:** var(--solawi-green) (#c2ddb2)
**Section Padding:** 80px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: var(--solawi-blue) (#97b0c7)
**Animation:** Fade Up, gestaffelt

### Columns Layout: 12

- Addon: SP Heading
  - Tag: H2, Text: "Mitarbeit & Engagement", EB Garamond, 36px

- Addon: SP Text Block
  - Text: "Stadt, Land, Beides lebt von der aktiven Beteiligung seiner Mitglieder. Es gibt viele Moeglichkeiten, sich einzubringen:"

### Engagement-Cards (gestapelt, 12 Spalten):

**Card 1 -- Hofaktionen:**
- Background: weiss, Padding 24px, Border Radius 8px, shadow-md, Margin Bottom 24px
- Titel: "Hofaktionen" (H3, EB Garamond, 20px)
- Text: "3-4 Mal im Jahr finden Mitmach-Aktionen auf den Hoefen statt: Pflanzen, Jaeten, Ernten oder einfach gemeinsam Zeit verbringen. Die Teilnahme ist freiwillig, aber sehr bereichernd!"

**Card 2 -- Depotbetreuung:**
- Titel: "Depotbetreuung"
- Text: "Jedes Depot braucht 2-3 Betreuer*innen, die die Gemuesekisten auspacken, verteilen und den Raum pflegen. Eine tolle Moeglichkeit, die Gemeinschaft am Depot mitzugestalten."

**Card 3 -- Fahrdienst:**
- Titel: "Fahrdienst"
- Text: "Wir brauchen Menschen mit Fuehrerschein und groesserem Auto/Transporter, die gelegentlich bei der Gemueseauslieferung helfen koennen (wird verguetet)."

**Card 4 -- Vereinsarbeit:**
- Titel: "Vereinsarbeit"
- Text: "Wir suchen immer Menschen, die sich in Arbeitsgruppen engagieren: Oeffentlichkeitsarbeit, Veranstaltungsorganisation, IT, Finanzen oder Bildung."

### Hinweis-Box:
- Addon: SP Alert Box / SP Text Block
  - Background: var(--solawi-pink)/10
  - Border Left: 4px solid var(--solawi-pink) (#d10038)
  - Padding: 24px
  - Text: "**Wichtig:** Alle Aufgaben sind freiwillig! Niemand wird zu etwas verpflichtet. Aber je mehr Menschen sich einbringen, desto lebendiger wird unsere Gemeinschaft."

---

## Sektion 8: CTA
**Addon:** SP Heading + SP Text Block + SP Button
**Section Background:** var(--solawi-blue) (#97b0c7)
**Section Padding:** 80px oben/unten
**Shape Divider:** Nein
**Animation:** Fade Up

### Columns Layout: 12 (zentriert)

- Addon: SP Heading
  - Tag: H2, Text: "Bereit mitzumachen?", EB Garamond, 36px, zentriert
- Addon: SP Text Block
  - Text: "Fuelle jetzt das Anmeldeformular aus und werde Teil unserer Gemeinschaft!"
  - Zentriert, 20px
- Addon: SP Button
  - Text: "Zur Anmeldung" + Pfeil
  - Background: var(--solawi-pink) (#d10038)
  - Link: /anmeldung
