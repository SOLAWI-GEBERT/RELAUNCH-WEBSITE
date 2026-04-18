# Hoefe & Ernteanteile -- SP Page Builder Anleitung

## Ueberblick
Detailseite ueber die Partner-Hoefe und Ernteanteile. Stellt jeden Hof einzeln vor (Reimehof, Biohof Walz, Obst vom Hederer), zeigt verfuegbare Ernteanteile (Sommer/Winter) und listet aktuelle Hof-Neuigkeiten sowie weitere Kooperationen. 7 Sektionen.

---

## Sektion 1: Hero
**Addon:** SP Image + SP Heading + SP Text Block
**Section Background:** var(--solawi-blue) (#97b0c7) -- Pastell-Hintergrund
**Hoehe:** 400px, zentriert
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: weiss (#ffffff)
**Animation:** Keine

### Columns Layout: 6+6

**Column 1 (Text):**
- Addon: SP Heading
  - Tag: H1
  - Text: "Unsere Hoefe & Ernteanteile"
  - Font Family: EB Garamond, 48px
  - Farbe: foreground
- Addon: SP Text Block
  - Text: "Lerne unsere Partner-Hoefe und ihre Angebote kennen"
  - Font Size: 20px

**Column 2 (Illustration):**
- Addon: SP Image
  - Bild: /ablauf-hof.jpg (Vogelperspektive Stadt + 6 Hoefe)
  - **object-fit: contain, NICHT beschneiden!**
  - Max-Height: 350px

---

## Sektion 2: Unsere Ernteanteile (Ueberblick)
**Addon:** SP Heading + SP Text Block + SP Feature Box (2x)
**Section Background:** weiss (#ffffff)
**Section Padding:** 80px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: var(--solawi-blue) (#97b0c7)
**Animation:** Fade Up, Delay 200ms

### Columns Layout: 12 (Heading)

- Addon: SP Heading
  - Tag: H2, Text: "Unsere Ernteanteile", EB Garamond, 36px, zentriert
- Addon: SP Text Block
  - Text: "Waehle aus verschiedenen Ernteanteilen und stelle dir dein individuelles Paket zusammen. Alle Hoefe arbeiten nach biologischen Richtlinien."
  - Zentriert, max-width 768px

### Columns Layout: 6+6

**Card 1 -- Sommergemuese (id: sommer):**
- Addon: SP Feature Box / SP Text Block
  - Background: var(--solawi-mauve) (#c7afc7)
  - Padding: 32px, Border Radius: 8px
  - Titel: "Sommergemuese" (H3, EB Garamond, 24px)
  - Text: "Von Mai bis Oktober erhaeltst du woechentlich eine vielfaeltige Auswahl an frischem Saisongemuese. Das Angebot variiert je nach Jahreszeit und Ernte."
  - Beispiele: "Tomaten, Gurken, Zucchini, Paprika, Salate, Kraeuter, Mangold, Rote Bete, Moehren, Radieschen, Kohlrabi"
  - Info-Zeilen:
    - Uhr-Icon + "Mai - Oktober"
    - Paket-Icon + "Ca. 5-7 kg pro Woche"

**Card 2 -- Wintergemuese (id: winter):**
- Background: var(--solawi-mauve)
- Titel: "Wintergemuese"
- Text: "Von November bis April versorgen wir dich mit robustem Wintergemuese und Lagergemuese. Auch im Winter musst du nicht auf regionale Frische verzichten."
- Beispiele: "Kohl (Weiss-, Rot-, Gruenkohl), Moehren, Kartoffeln, Kuerbis, Pastinaken, Sellerie, Lauch, Rote Bete"
- Info-Zeilen:
  - Uhr-Icon + "November - April"
  - Paket-Icon + "Ca. 5-7 kg pro Woche"

---

## Sektion 3: Reimehof
**SP Section ID:** reimehof
**Addon:** SP Image + SP Heading + SP Text Block + SP Feature Box
**Section Background:** var(--solawi-blue) (#97b0c7)
**Section Padding:** 80px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: weiss (#ffffff)
**Animation:** Fade Up

### Columns Layout: 6+6

**Column 1 (Bild):**
- Addon: SP Image
  - Bild: /fotos/vollandhof-salaternte.jpg
  - Alt-Text: "Salaternte auf dem Feld"
  - object-fit: cover
  - Hoehe: 400px
  - Border Radius: 8px
  - Box Shadow: xl

**Column 2 (Text):**
- Addon: SP Heading
  - Tag: H2, Text: "Reimehof", EB Garamond, 36px

- Addon: SP Text Block
  - Text: "Der Reimehof liegt am Stadtrand und bewirtschaftet seit ueber 30 Jahren biologisch. Auf 5 Hektar Flaeche wird hier eine grosse Vielfalt an Sommergemuese angebaut."

- Info-Block (3 Zeilen mit Icons):
  - MapPin + **Standort:** Reimehof 1, 12345 Musterstadt
  - Paket + **Angebot:** Sommergemuese, Kraeuter, Blumen
  - Uhr + **Saison:** Mai bis Oktober

- Addon: SP Text Block (Besonderheiten-Card)
  - Background: weiss, Padding 24px, Border Radius 8px, shadow-md
  - Titel: "Besonderheiten" (H3, EB Garamond, 20px)
  - Liste:
    - Ueber 40 verschiedene Gemuesorten
    - Eigene Jungpflanzenanzucht
    - Hofverkauf und Fuehrungen moeglich
    - Regelmaessige Mitmach-Aktionen

---

## Sektion 4: Biohof Walz
**SP Section ID:** walz
**Addon:** SP Image + SP Heading + SP Text Block + SP Feature Box
**Section Background:** weiss (#ffffff)
**Section Padding:** 80px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: var(--solawi-blue) (#97b0c7)
**Animation:** Fade Up

### Columns Layout: 6+6 (Reihenfolge umgekehrt: Text links, Bild rechts)

**Column 1 (Text):**
- Addon: SP Heading
  - Tag: H2, Text: "Biohof Walz", EB Garamond, 36px

- Addon: SP Text Block
  - Text: "Der Biohof Walz ist ein traditioneller Familienbetrieb im Umland. Hier wird seit Generationen nach biologisch-dynamischen Prinzipien gewirtschaftet."

- Info-Block:
  - MapPin + **Standort:** Landstrasse 45, 12346 Musterdorf
  - Paket + **Angebot:** Wintergemuese, Lagergemuese, Kartoffeln
  - Uhr + **Saison:** November bis April

- Besonderheiten-Card (weiss, rounded, shadow):
  - Ueber 40 verschiedene Gemuesorten -> Demeter-zertifiziert
  - Grosse Auswahl an Kohlsorten
  - Eigener Kartoffelanbau (10+ Sorten)
  - Lagerkeller fuer optimale Frische

**Column 2 (Bild):**
- Addon: SP Image
  - Bild: /fotos/walz-kaelber.jpg
  - Alt-Text: "Kaelber im Stall am Biohof Walz"
  - object-fit: cover, Hoehe 400px, Border Radius 8px, shadow-xl

---

## Sektion 5: Obst vom Hederer
**SP Section ID:** hederer
**Addon:** SP Image + SP Heading + SP Text Block + SP Feature Box
**Section Background:** var(--solawi-blue) (#97b0c7)
**Section Padding:** 80px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: weiss (#ffffff)
**Animation:** Fade Up

### Columns Layout: 6+6 (Bild links, Text rechts -- wie Reimehof)

**Column 1 (Bild):**
- Addon: SP Image
  - Bild: /fotos/lillinghof-obstbau.jpg
  - Alt-Text: "Apfelbaeume am Lillinghof"
  - object-fit: cover, Hoehe 400px, Border Radius 8px, shadow-xl

**Column 2 (Text):**
- Addon: SP Heading
  - Tag: H2, Text: "Obst vom Hederer", EB Garamond, 36px

- Addon: SP Text Block
  - Text: "Die Obstplantage Hederer spezialisiert sich auf den biologischen Anbau von Aepfeln, Birnen und Beerenobst. Alte Sorten und moderne Zuechtungen wachsen hier im Einklang."

- Info-Block:
  - MapPin + **Standort:** Obstweg 12, 12347 Obstdorf
  - Paket + **Angebot:** Aepfel, Birnen, Beeren, Steinobst
  - Uhr + **Saison:** Juni bis November

- Besonderheiten-Card:
  - Ueber 30 alte Apfelsorten
  - Eigene Mosterei
  - Beerenstraeucher zum Selberpfluecken
  - Naturbelassene Streuobstwiesen

---

## Sektion 6: Aktuelles von den Hoefen
**SP Section ID:** aktuelles
**Addon:** SP Heading + SP Article Scroller / SP Text Block (3x)
**Section Background:** weiss (#ffffff)
**Section Padding:** 80px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: var(--solawi-gray) (#e5e5e5)
**Animation:** Fade Up, gestaffelt

### Columns Layout: 12 (Heading)

- Addon: SP Heading
  - Tag: H2, Text: "Aktuelles von den Hoefen", EB Garamond, 36px, zentriert

### Columns Layout: 4+4+4 (News-Cards)

**News 1:**
- Card: weiss, Padding 24px, Border Radius 8px, shadow-md
- Meta: "Reimehof - 20. Feb 2026", Font Size 14px, Farbe var(--solawi-pink)
- Titel: "Anzucht hat begonnen" (H3, EB Garamond, 20px)
- Text: "Die ersten Tomaten und Paprika sind bereits in der Anzucht. Bald geht es wieder los mit frischem Gemuese!"
- Link: "Weiterlesen" + Pfeil, Farbe var(--solawi-pink)

**News 2:**
- Meta: "Biohof Walz - 18. Feb 2026"
- Titel: "Gruenkohl-Saison endet"
- Text: "Die letzten Gruenkohle werden diese Woche geerntet. Dafuer gibt es bald frischen Spinat und Mangold!"

**News 3:**
- Meta: "Obst vom Hederer - 15. Feb 2026"
- Titel: "Baumschnitt-Kurs"
- Text: "Am 5. Maerz bieten wir einen Obstbaumschnitt-Kurs an. Lernt die Grundlagen des Baumschnitts direkt auf der Plantage!"

---

## Sektion 7: Weitere Hofkooperationen
**Addon:** SP Heading + SP Text Block (2x Cards)
**Section Background:** var(--solawi-gray) (#e5e5e5)
**Section Padding:** 80px oben/unten
**Shape Divider:** Nein (letzte Sektion)
**Animation:** Fade Up

### Columns Layout: 12

- Addon: SP Heading
  - Tag: H2, Text: "Weitere Hofkooperationen", EB Garamond, 36px

- Addon: SP Text Block
  - Text: "Zusaetzlich zu unseren Hauptpartnern kooperieren wir mit weiteren regionalen Erzeugern, um das Angebot zu erweitern:"

### Columns Layout: 6+6

**Card 1 -- Hofkaeserei Kerschbaum:**
- Background: weiss, Padding 24px, Border Radius 8px, shadow-md
- Titel: "Hofkaeserei Kerschbaum" (H3, EB Garamond, 20px)
- Text: "Handwerklich hergestellte Milchprodukte und Kaese von Kuehen aus Weidehaltung. Optional als Zusatzanteil buchbar."

**Card 2 -- Gallini Fellici:**
- Background: weiss, Padding 24px, Border Radius 8px, shadow-md
- Titel: "Gallini Fellici"
- Text: "Bio-Eier von gluecklichen Huehnern in mobiler Haltung. Die Huehner werden regelmaessig auf frische Weiden umgesetzt."
