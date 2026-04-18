# Homepage -- SP Page Builder Anleitung

## Ueberblick
Die Homepage ist die Einstiegsseite der SoLaWi-Website "Stadt, Land, Beides". Sie besteht aus 6 Sektionen: Hero, Was ist SoLaWi, Warum mitmachen (Features), Unsere Partner-Hoefe, So funktioniert's (Schritte), Aktuelle Veranstaltungen und CTA. Das Redesign setzt auf Pastell-Hintergruende, Signature-Illustrationen und wellige Shape Dividers.

---

## Sektion 1: Hero
**Addon:** SP Image + SP Heading + SP Button Group
**Section Background:** var(--solawi-green) (#c2ddb2) -- Pastell-Hintergrund statt dunklem Overlay
**Hoehe:** 600px, zentriert (Flexbox: align-items center)
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: var(--solawi-blue) (#97b0c7) -- ueberleitet zur naechsten Sektion
**Animation:** Keine (Hero soll sofort sichtbar sein)

### Columns Layout: 6+6

**Column 1 (Text):**
- Addon: SP Heading
  - Tag: H1
  - Text: "Stadt, Land, Beides"
  - Font Family: EB Garamond
  - Font Size: 60px (Desktop), 48px (Tablet), 36px (Mobile)
  - Farbe: #1a1a1a (foreground)
- Addon: SP Text Block
  - Text: "Solidarische Landwirtschaft fuer eine nachhaltige Zukunft"
  - Font Size: 24px (Desktop), 20px (Mobile)
  - Farbe: #333333
- Addon: SP Button Group
  - Button 1: "Jetzt mitmachen" + Pfeil-Icon rechts
    - Background: var(--solawi-pink) (#d10038)
    - Text: weiss
    - Link: /mitmachen
    - Border Radius: 8px
    - Padding: 16px 32px
  - Button 2: "Mehr erfahren"
    - Background: weiss mit leichter Transparenz
    - Text: #1a1a1a
    - Link: /solidarische-landwirtschaft
    - Border Radius: 8px
    - Padding: 16px 32px

**Column 2 (Illustration):**
- Addon: SP Image
  - Bild: /start.png (Gummistiefel + Stoeckelschuh)
  - **WICHTIG: object-fit: contain, NICHT cover/crop!**
  - Alt-Text: "Stadt, Land, Beides - Stiefel Illustration"
  - Max-Height: 500px
  - Zentriert in Spalte

---

## Sektion 2: Was ist Solidarische Landwirtschaft?
**Addon:** SP Heading + SP Text Block + SP Image + SP Button
**Section Background:** var(--solawi-blue) (#97b0c7)
**Section Padding:** 80px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: weiss (#ffffff)
**Animation:** Fade Up, Delay 200ms

### Columns Layout: 6+6

**Column 1 (Text):**
- Addon: SP Heading
  - Tag: H2
  - Text: "Was ist Solidarische Landwirtschaft?"
  - Font Family: EB Garamond
  - Font Size: 36px
  - Farbe: foreground
- Addon: SP Text Block
  - Absatz 1: "Solidarische Landwirtschaft (SoLaWi) ist eine innovative Partnerschaft zwischen landwirtschaftlichen Betrieben und Verbraucher*innen. Gemeinsam tragen wir die Verantwortung, das Risiko und die Ernte."
  - Absatz 2: "Durch direkte Zusammenarbeit schaffen wir eine nachhaltige, regionale und transparente Lebensmittelversorgung -- fuer Mensch und Umwelt."
  - Font Size: 18px
  - Farbe: #374151
- Addon: SP Button
  - Text: "Mehr ueber SoLaWi erfahren" + Pfeil-Icon
  - Style: Text-Link (kein Button-Hintergrund)
  - Farbe: var(--solawi-pink) (#d10038)
  - Link: /solidarische-landwirtschaft

**Column 2 (Bild):**
- Addon: SP Image
  - Bild: /fotos/reimehof-aktionstag.jpg
  - Alt-Text: "Gemeinschaftliches Essen beim Aktionstag am Reimehof"
  - object-fit: cover
  - Hoehe: 400px
  - Border Radius: 8px
  - Box Shadow: xl (0 20px 25px rgba(0,0,0,0.1))

---

## Sektion 3: Warum mitmachen? (Features)
**Addon:** SP Heading + SP Feature Box (3x)
**Section Background:** weiss (#ffffff)
**Section Padding:** 80px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: var(--solawi-mauve) (#c7afc7)
**Animation:** Fade Up, gestaffelt (Delay 0ms, 200ms, 400ms pro Card)

### Columns Layout: 12 (volle Breite fuer Heading)

**Row 1 -- Heading:**
- Addon: SP Heading
  - Tag: H2
  - Text: "Warum mitmachen?"
  - Font Family: EB Garamond
  - Alignment: zentriert
  - Margin Bottom: 16px
- Addon: SP Text Block
  - Text: "Gemeinsam gestalten wir eine nachhaltige Zukunft und geniessen frische, regionale Lebensmittel."
  - Alignment: zentriert
  - Max Width: 672px (mx-auto)
  - Farbe: #6B7280

### Columns Layout: 4+4+4 (Feature Cards)

**Card 1 -- Nachhaltig & Regional:**
- Addon: SP Feature Box oder SP Image + SP Heading + SP Text Block
  - Bild: /features-nachhaltigkeit.jpg (Frau mit Gemuesewagen, rosa BG)
  - **WICHTIG: Bild als Illustration verwenden, object-contain, nicht als Icon!**
  - Bild-Groesse: 80px x 80px oder groesser
  - Titel: "Nachhaltig & Regional"
  - Titel Font: EB Garamond, 20px
  - Text: "Frische Lebensmittel direkt vom Hof in deiner Region. Kurze Transportwege und oekologischer Anbau schonen die Umwelt."
  - Card Background: weiss
  - Padding: 32px
  - Border Radius: 8px
  - Box Shadow: md
  - Hover: shadow-xl

**Card 2 -- Gemeinschaft:**
- Bild: /features-gemeinschaft.jpg (5 Menschen auf Acker, orange BG)
- Titel: "Gemeinschaft"
- Text: "Werde Teil einer lebendigen Gemeinschaft. Lerne die Landwirt*innen kennen und gestalte aktiv mit."
- (restliche Einstellungen wie Card 1)

**Card 3 -- Transparenz:**
- Bild: /features-lebensmittel.jpg (Fuellhorn, lila BG)
- Titel: "Transparenz"
- Text: "Volle Transparenz: Du weisst genau, wo dein Essen herkommt und wie es angebaut wird."
- (restliche Einstellungen wie Card 1)

---

## Sektion 4: Unsere Partner-Hoefe
**Addon:** SP Heading + SP Image Content Box (3x)
**Section Background:** var(--solawi-mauve) (#c7afc7)
**Section Padding:** 80px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: weiss (#ffffff)
**Animation:** Fade Up, gestaffelt (Delay 0ms, 200ms, 400ms)

### Columns Layout: 12 (Heading)

- Addon: SP Heading
  - Tag: H2, Text: "Unsere Partner-Hoefe", zentriert, EB Garamond
  - Margin Bottom: 16px
- Addon: SP Text Block
  - Text: "Lerne die Hoefe kennen, die uns mit frischen Lebensmitteln versorgen"
  - Zentriert, Farbe: #6B7280

### Columns Layout: 4+4+4 (Hof-Cards)

**Card 1 -- Reimehof:**
- Addon: SP Image Content Box
  - Bild: /fotos/reimehof-ziege.jpg
  - Bild-Hoehe: 192px, object-cover
  - Titel: "Reimehof"
  - Text: "Sommergemuese in Bio-Qualitaet aus regionalem Anbau"
  - Link-Text: "Mehr erfahren" + Pfeil
  - Link: /hoefe-und-ernteanteile#reimehof
  - Link-Farbe: var(--solawi-pink) (#d10038)
  - Card: weiss, Border Radius 8px, shadow-lg

**Card 2 -- Biohof Walz:**
- Bild: /fotos/walz-weide.jpg
- Titel: "Biohof Walz"
- Text: "Wintergemuese und Lagergemuese fuer die kalte Jahreszeit"
- Link: /hoefe-und-ernteanteile#walz

**Card 3 -- Obst vom Hederer:**
- Bild: /fotos/lillinghof-obstbau.jpg
- Titel: "Obst vom Hederer"
- Text: "Frisches Obst aus biologischem Anbau direkt vom Erzeuger"
- Link: /hoefe-und-ernteanteile#hederer

---

## Sektion 5: So funktioniert's (3 Schritte)
**Addon:** SP Heading + SP Feature Box (3x) + SP Button
**Section Background:** weiss (#ffffff)
**Section Padding:** 80px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: var(--solawi-orange) (#ffa673)
**Animation:** Fade Up, gestaffelt

### Columns Layout: 12 (Heading)

- Addon: SP Heading
  - Tag: H2, Text: "So funktioniert's", zentriert, EB Garamond
- Addon: SP Text Block
  - Text: "In drei einfachen Schritten zur Mitgliedschaft"
  - Zentriert

### Columns Layout: 4+4+4 (Schritte)

**Schritt 1:**
- Addon: SP Feature Box oder Custom HTML
  - Nummer-Badge: Kreis (80px), Background var(--solawi-pink) (#d10038), weiss, Font 30px
  - Nummer: "1"
  - Illustration: /decision-funktion.jpg (Flussdiagramm) -- alternativ als Hintergrund-Akzent
  - Titel: "Ernteanteil waehlen", Font: EB Garamond
  - Text: "Waehle deinen Ernteanteil und entscheide, welche Hoefe du unterstuetzen moechtest."
  - Alignment: zentriert

**Schritt 2:**
- Nummer: "2"
- Illustration: /ablauf-depot.jpg (Stadtsilhouette + Gemuesekiste) als Akzent
- Titel: "Depot auswaehlen"
- Text: "Finde ein Depot in deiner Naehe, wo du woechentlich deine frischen Lebensmittel abholen kannst."

**Schritt 3:**
- Nummer: "3"
- Illustration: /features-mitmachen.jpg (Bauer zeigt auf Betrachter) als Akzent
- Titel: "Geniessen & mitmachen"
- Text: "Hole deine Ernte ab und werde Teil der Gemeinschaft bei Hofaktionen und Veranstaltungen."

### CTA Button (volle Breite, zentriert):
- Addon: SP Button
  - Text: "Jetzt Mitglied werden" + Pfeil
  - Background: var(--solawi-pink) (#d10038)
  - Text: weiss
  - Link: /mitmachen
  - Margin Top: 48px

---

## Sektion 6: Aktuelle Veranstaltungen
**Addon:** SP Heading + SP Button + SP Feature Box (3x)
**Section Background:** var(--solawi-orange) (#ffa673)
**Section Padding:** 80px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: var(--solawi-green) (#c2ddb2)
**Animation:** Fade Up, gestaffelt

### Columns Layout: 8+4 (Heading-Zeile)

**Column 1:**
- Addon: SP Heading
  - Tag: H2, Text: "Aktuelle Veranstaltungen", EB Garamond
- Addon: SP Text Block
  - Text: "Komm vorbei und lerne uns kennen!"

**Column 2:**
- Addon: SP Button (nur Desktop sichtbar)
  - Text: "Alle Termine" + Pfeil
  - Style: Text-Link
  - Farbe: var(--solawi-pink) (#d10038)
  - Link: /kalender
  - Alignment: rechts

### Columns Layout: 4+4+4 (Event-Cards)

**Event 1:**
- Addon: SP Feature Box / SP Text Block
  - Card Background: weiss, Padding 24px, Border Radius 8px, shadow-md
  - Icon-Box links: Kalender-Icon, Background var(--solawi-pink)/10, Border Radius 8px, Padding 12px
  - Datum: "15. Maerz 2026", Font Size 14px, Farbe #6B7280
  - Titel: "Hofaktion Reimehof", Font EB Garamond, 18px
  - Text: "Gemeinsames Pflanzen und Kennenlernen", Font Size 14px
  - Ort-Zeile: Pin-Icon + "Reimehof, Musterstadt", Font Size 14px, Farbe #6B7280

**Event 2:**
- Datum: "22. Maerz 2026"
- Titel: "Info-Veranstaltung"
- Text: "Erfahre mehr ueber Solidarische Landwirtschaft"
- Ort: "Online via Zoom"

**Event 3:**
- Datum: "5. April 2026"
- Titel: "Ernte-Fest"
- Text: "Gemeinsames Feiern und Ernten"
- Ort: "Biohof Walz"

### Mobile CTA (nur Mobile sichtbar):
- Addon: SP Button
  - Text: "Alle Termine" + Pfeil
  - Alignment: zentriert
  - Margin Top: 32px

---

## Sektion 7: CTA (Call to Action)
**Addon:** SP Heading + SP Text Block + SP Button Group
**Section Background:** var(--solawi-green) (#c2ddb2)
**Section Padding:** 80px oben/unten
**Shape Divider:** Nein (letzte Sektion)
**Animation:** Fade Up, Delay 200ms

### Columns Layout: 12 (zentriert)

- Addon: SP Heading
  - Tag: H2
  - Text: "Bereit fuer frische, regionale Lebensmittel?"
  - Font Family: EB Garamond
  - Font Size: 36px
  - Alignment: zentriert
- Addon: SP Text Block
  - Text: "Werde Teil unserer Gemeinschaft und unterstuetze nachhaltige Landwirtschaft in deiner Region."
  - Font Size: 20px
  - Alignment: zentriert
  - Margin Bottom: 32px
- Addon: SP Button Group
  - Button 1: "Jetzt anmelden" + Pfeil
    - Background: var(--solawi-pink) (#d10038)
    - Text: weiss
    - Link: /anmeldung
  - Button 2: "Mehr Informationen"
    - Border: 2px solid foreground
    - Text: foreground
    - Link: /mitmachen

---

## Allgemeine Hinweise fuer die Homepage

### Fonts
- **Ueberschriften (H1, H2, H3):** EB Garamond
- **Badge-Labels, Subheadlines, freche Akzente:** Cantora One
- **Fliesstext:** System-Font / sans-serif

### Farben (CSS Custom Properties)
- CTA-Buttons: var(--solawi-pink) #d10038
- Sektions-Hintergruende alternieren: weiss, --solawi-blue, weiss, --solawi-mauve, weiss, --solawi-orange, --solawi-green

### Shape Dividers
Zwischen jeder Sektion eine wellige Trennlinie (Wave Shape Divider). Die Farbe des Dividers entspricht der Hintergrundfarbe der folgenden Sektion.

### Bilder
- Signature-Illustrationen (PNG/JPG aus /public/): IMMER object-contain, nie beschneiden!
- Fotos (/public/fotos/): object-cover ist OK
