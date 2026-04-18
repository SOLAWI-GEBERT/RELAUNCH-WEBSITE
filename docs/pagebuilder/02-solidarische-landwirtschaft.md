# Solidarische Landwirtschaft -- SP Page Builder Anleitung

## Ueberblick
Informationsseite ueber das Konzept der Solidarischen Landwirtschaft (SoLaWi). Erklaert was SoLaWi ist, wie "Stadt, Land, Beides" es umsetzt, das Selbstverstaendnis, die Ziele, das Netzwerk, den Foerderverein und enthaelt Erfahrungsberichte. 8 Sektionen insgesamt.

---

## Sektion 1: Hero
**Addon:** SP Image + SP Heading + SP Text Block
**Section Background:** var(--solawi-orange) (#ffa673) -- Pastell-Hintergrund
**Hoehe:** 400px, zentriert
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: weiss (#ffffff)
**Animation:** Keine

### Columns Layout: 6+6

**Column 1 (Text):**
- Addon: SP Heading
  - Tag: H1
  - Text: "Solidarische Landwirtschaft"
  - Font Family: EB Garamond
  - Font Size: 48px
  - Farbe: foreground (#1a1a1a)
- Addon: SP Text Block
  - Text: "Gemeinsam fuer eine nachhaltige Zukunft"
  - Font Size: 20px
  - Farbe: foreground

**Column 2 (Illustration):**
- Addon: SP Image
  - Bild: /features-gemeinschaft.jpg (5 Menschen auf Acker, orange BG)
  - **object-fit: contain, NICHT beschneiden!**
  - Alt-Text: "Solidarische Landwirtschaft Gemeinschaft"
  - Max-Height: 350px

---

## Sektion 2: Was ist Solidarische Landwirtschaft?
**Addon:** SP Heading + SP Text Block + SP Feature Box (2x)
**Section Background:** weiss (#ffffff)
**Section Padding:** 80px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: var(--solawi-blue) (#97b0c7)
**Animation:** Fade Up, Delay 200ms

### Columns Layout: 12

- Addon: SP Heading
  - Tag: H2
  - Text: "Was ist Solidarische Landwirtschaft?"
  - Font Family: EB Garamond, 36px

- Addon: SP Text Block (3 Absaetze)
  - Absatz 1: "Solidarische Landwirtschaft (SoLaWi) bedeutet: Eine Gruppe von Menschen traegt die Kosten eines landwirtschaftlichen Betriebs, wofuer sie im Gegenzug dessen Ernteertrag erhaelt. Durch den persoenlichen Bezug zueinander erfahren sowohl die Erzeuger*innen als auch die Verbraucher*innen die vielfaeltigen Vorteile einer nicht-industriellen, marktunabhaengigen Landwirtschaft."
  - Absatz 2: "Die Mitglieder der Solidarischen Landwirtschaft schaffen und erhalten Arbeitsplaetze in der Landwirtschaft und ermoeglichen den Erzeuger*innen ein planbares Einkommen sowie langfristige Perspektiven fuer ihre Hoefe. Dies foerdert Vielfalt in der Produktion und artgerechte Tierhaltung."
  - Absatz 3: "Durch die Bildung einer neuen, verantwortungsvollen Gemeinschaft wird die Verbindung von Menschen zur Landwirtschaft und zur Lebensmittelerzeugung wieder gestaerkt."

### Columns Layout: 6+6 (Info-Boxen)

**Box 1 -- Fuer die Landwirt*innen:**
- Addon: SP Feature Box
  - Illustration: /ablauf-hof.jpg (Vogelperspektive) als kleines Bild, object-contain
  - Titel: "Fuer die Landwirt*innen", Font: EB Garamond
  - Liste:
    - Planbare Einkommen und langfristige Sicherheit
    - Unabhaengigkeit von Marktpreisen
    - Direkte Wertschaetzung ihrer Arbeit
    - Moeglichkeit fuer vielfaeltige Produktion
  - Box Background: var(--solawi-green)/20 oder #f0f7ec
  - Padding: 24px, Border Radius: 8px

**Box 2 -- Fuer die Mitglieder:**
- Addon: SP Feature Box
  - Illustration: /decision-mitmachen.jpg (Handschlag ueber Salatblatt) als kleines Bild
  - Titel: "Fuer die Mitglieder"
  - Liste:
    - Frische, saisonale Bio-Lebensmittel
    - Transparenz ueber Anbau und Herkunft
    - Aktive Mitgestaltung moeglich
    - Teil einer lebendigen Gemeinschaft
  - Box Background: var(--solawi-green)/20

---

## Sektion 3: Wie machen wir das bei Stadt, Land, Beides?
**Addon:** SP Heading + SP Text Block + SP Nested Rows
**Section Background:** var(--solawi-blue) (#97b0c7)
**Section Padding:** 80px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: weiss (#ffffff)
**Animation:** Fade Up, Delay 200ms

### Columns Layout: 12

- Addon: SP Heading
  - Tag: H2, Text: "Wie machen wir das bei Stadt, Land, Beides?"
  - Font Family: EB Garamond, 36px

- Addon: SP Text Block
  - Text: "Bei Stadt, Land, Beides kooperieren wir mit mehreren regionalen Bio-Hoefen. Unsere Mitglieder koennen sich fuer Ernteanteile von verschiedenen Hoefen entscheiden und so ihr individuelles Paket zusammenstellen."

- Addon: SP Text Block (weisse Card)
  - Card Background: weiss, Padding 24px, Border Radius 8px, shadow-md
  - Titel: "Unsere Partnerhoefe" (H3, EB Garamond, 24px)
  - Unterpunkte:
    - **Reimehof - Sommergemuese:** Vielfaeltiges Gemuese waehrend der Sommermonate von Mai bis Oktober
    - **Biohof Walz - Wintergemuese:** Lagergemuese und winterhartes Gemuese von November bis April
    - **Obst vom Hederer:** Saisonales Obst und Beeren aus biologischem Anbau

- Addon: SP Text Block
  - Text: "Die Ernte wird woechentlich an verschiedene Depots in der Region geliefert. Unsere Mitglieder holen dort ihre Anteile ab und koennen sich bei Hofaktionen aktiv einbringen."

---

## Sektion 4: Unser Selbstverstaendnis
**Addon:** SP Heading + SP Text Block + SP Feature Box (3x)
**Section Background:** weiss (#ffffff)
**Section Padding:** 80px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: var(--solawi-salmon) (#f3aba2)
**Animation:** Fade Up, gestaffelt

### Columns Layout: 12

- Addon: SP Heading
  - Tag: H2, Text: "Unser Selbstverstaendnis", EB Garamond, 36px

- Addon: SP Text Block
  - Text: "Wir verstehen uns als demokratische Gemeinschaft, in der alle Mitglieder gleichberechtigt sind. Entscheidungen werden gemeinsam getroffen, und jede*r kann sich einbringen."

### Columns Layout: 4+4+4 (Werte-Icons)

**Wert 1 -- Gemeinschaft:**
- Addon: SP Feature Box
  - Illustration: /features-gemeinschaft.jpg (object-contain, klein 64x64)
  - Titel: "Gemeinschaft", Font: EB Garamond
  - Untertitel: "Gemeinsam statt einsam"
  - Alignment: zentriert

**Wert 2 -- Wertschaetzung:**
- Illustration: /decision-mitmachen.jpg
- Titel: "Wertschaetzung"
- Untertitel: "Fuer Mensch und Natur"

**Wert 3 -- Transparenz:**
- Illustration: /decision-funktion.jpg
- Titel: "Transparenz"
- Untertitel: "Offene Kommunikation"

### Abschluss-Text (12 Spalten):
- Addon: SP Text Block
  - Text: "Wir setzen uns ein fuer oekologische Landwirtschaft, faire Preise fuer Erzeuger*innen und Zugang zu gesunden Lebensmitteln fuer alle Menschen -- unabhaengig vom Einkommen."

---

## Sektion 5: Unsere Ziele
**Addon:** SP Heading + SP Text Block (4x als Cards)
**Section Background:** var(--solawi-salmon) (#f3aba2)
**Section Padding:** 80px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: weiss (#ffffff)
**Animation:** Fade Up, gestaffelt (Delay 0ms, 150ms, 300ms, 450ms)

### Columns Layout: 12

- Addon: SP Heading
  - Tag: H2, Text: "Unsere Ziele", EB Garamond, 36px

### Columns Layout: 12 (gestapelte Cards)

**Ziel 1:**
- Addon: SP Text Block in Card
  - Background: weiss, Padding 24px, Border Radius 8px, shadow-md, Margin Bottom 24px
  - Titel: "Nachhaltige Landwirtschaft foerdern" (H3, EB Garamond, 20px)
  - Text: "Wir unterstuetzen oekologische Anbaumethoden, die Boeden regenerieren, Artenvielfalt foerdern und das Klima schuetzen."

**Ziel 2:**
- Titel: "Regionale Kreislaeufe staerken"
- Text: "Durch kurze Transportwege und lokale Produktion schaffen wir resiliente Versorgungsstrukturen in unserer Region."

**Ziel 3:**
- Titel: "Gemeinschaft aufbauen"
- Text: "Wir bringen Menschen zusammen, die Werte wie Nachhaltigkeit, Fairness und Solidaritaet teilen."

**Ziel 4:**
- Titel: "Bewusstsein schaffen"
- Text: "Durch Bildungsarbeit und praktisches Erleben vermitteln wir Wissen ueber Landwirtschaft und Ernaehrung."

---

## Sektion 6: Netzwerk Solidarische Landwirtschaft
**Addon:** SP Heading + SP Text Block
**Section Background:** weiss (#ffffff)
**Section Padding:** 80px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: var(--solawi-mauve) (#c7afc7)
**Animation:** Fade Up, Delay 200ms

### Columns Layout: 12

- Addon: SP Heading
  - Tag: H2, Text: "Netzwerk Solidarische Landwirtschaft", EB Garamond, 36px

- Addon: SP Text Block
  - Text: "Wir sind Teil des bundesweiten Netzwerks Solidarische Landwirtschaft e.V., das die Verbreitung der Solidarischen Landwirtschaft in Deutschland foerdert."

- Addon: SP Text Block (Info-Box)
  - Background: var(--solawi-green)/20 oder #f0f7ec
  - Padding: 24px, Border Radius: 8px
  - Text: "Das Netzwerk bietet:"
  - Liste:
    - Austausch und Vernetzung zwischen SoLawis
    - Beratung fuer Gruender*innen
    - Oeffentlichkeitsarbeit und Bildungsangebote
    - Politische Interessenvertretung

- Addon: SP Text Block
  - Text mit Link: "Mehr Informationen findest du unter: www.solidarische-landwirtschaft.org"
  - Link: https://www.solidarische-landwirtschaft.org (target _blank)
  - Link-Farbe: var(--solawi-pink)

---

## Sektion 7: Foerderverein
**Addon:** SP Heading + SP Text Block + SP Nested Row
**Section Background:** var(--solawi-mauve) (#c7afc7)
**Section Padding:** 80px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: weiss (#ffffff)
**Animation:** Fade Up, Delay 200ms

### Columns Layout: 12

- Addon: SP Heading
  - Tag: H2, Text: "Foerderverein", EB Garamond, 36px

- Addon: SP Text Block
  - Text: "Unser Foerderverein unterstuetzt die Arbeit von Stadt, Land, Beides und ermoeglicht Menschen mit geringerem Einkommen den Zugang zu unseren Ernteanteilen."

- Addon: SP Text Block (weisse Card)
  - Background: weiss, Padding 24px, Border Radius 8px, shadow-md
  - Titel: "Wie kannst du helfen?" (H3, EB Garamond, 24px)
  - Unterpunkte:
    - **Foerdermitgliedschaft:** Werde Foerdermitglied und unterstuetze uns mit einem regelmaessigen Beitrag
    - **Spenden:** Einmalige oder regelmaessige Spenden helfen uns, unsere Ziele zu erreichen
    - **Ehrenamtliches Engagement:** Bringe deine Zeit und Faehigkeiten ein, um die Gemeinschaft zu staerken

---

## Sektion 8: Interviews & Erfahrungsberichte
**Addon:** SP Heading + SP Testimonial / SP Text Block (3x)
**Section Background:** weiss (#ffffff)
**Section Padding:** 80px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: var(--solawi-green) (#c2ddb2)
**Animation:** Fade Up, gestaffelt

### Columns Layout: 12

- Addon: SP Heading
  - Tag: H2, Text: "Interviews & Erfahrungsberichte", EB Garamond, 36px

### Testimonials (gestapelt):

**Zitat 1:**
- Addon: SP Testimonial oder Custom Card
  - Background: weiss, Padding 24px, Border Radius 8px, shadow-md
  - Border Left: 4px solid var(--solawi-pink) (#d10038)
  - Zitat: "Fuer mich ist die SoLaWi mehr als nur frisches Gemuese. Es ist eine Lebenseinstellung. Ich weiss genau, wo mein Essen herkommt und kann die Landwirt*innen persoenlich unterstuetzen."
  - Zitat Font: italic, 18px
  - Autor: "- Maria, Mitglied seit 2020", Font: bold

**Zitat 2:**
- Zitat: "Als Landwirt schaetze ich die Planungssicherheit und die direkte Verbindung zu den Menschen, die meine Produkte essen. Es motiviert mich, jeden Tag mein Bestes zu geben."
- Autor: "- Thomas Reime, Reimehof"

**Zitat 3:**
- Zitat: "Meine Kinder lernen durch die Hofbesuche, wo Lebensmittel herkommen und entwickeln Wertschaetzung fuer die Natur. Das ist unbezahlbar."
- Autor: "- Sophie, Mitglied seit 2022"

---

## Sektion 9: CTA
**Addon:** SP Heading + SP Text Block + SP Button
**Section Background:** var(--solawi-green) (#c2ddb2)
**Section Padding:** 80px oben/unten
**Shape Divider:** Nein (letzte Sektion)
**Animation:** Fade Up

### Columns Layout: 12 (zentriert)

- Addon: SP Heading
  - Tag: H2, Text: "Moechtest du Teil unserer Gemeinschaft werden?"
  - EB Garamond, 36px, zentriert
- Addon: SP Text Block
  - Text: "Erfahre mehr darueber, wie du mitmachen kannst und werde Teil der Bewegung fuer nachhaltige Landwirtschaft."
  - Zentriert, 20px, Farbe: foreground/80
- Addon: SP Button
  - Text: "Jetzt informieren" + Pfeil
  - Background: var(--solawi-pink) (#d10038)
  - Text: weiss
  - Link: /mitmachen
