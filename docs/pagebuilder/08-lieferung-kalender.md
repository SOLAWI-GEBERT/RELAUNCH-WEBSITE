# Lieferung & Kalender -- SP Page Builder Anleitung

## Ueberblick
Informationsseite ueber Lieferung/Abholung und den Veranstaltungskalender. Enthaelt praktische Infos (Wann/Was wird geliefert, Aenderungen, Depot-Hinweise), Kalender-Platzhalter mit Veranstaltungsarten und Newsletter-CTA. 4 Sektionen.

---

## Sektion 1: Hero
**Addon:** SP Heading + SP Text Block + SP Image
**Section Background:** var(--solawi-blue) (#97b0c7) -- Pastell-Hintergrund
**Hoehe:** auto (Padding-basiert), Padding 64px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: weiss (#ffffff)
**Animation:** Keine

### Columns Layout: 6+6

**Column 1 (Text):**
- Addon: SP Heading
  - Tag: H1
  - Text: "Lieferung & Kalender"
  - Font Family: EB Garamond, 48px
  - Farbe: foreground
- Addon: SP Text Block
  - Text: "Alle Informationen zu Lieferungen, Abholungen und kommenden Veranstaltungen"
  - Font Size: 20px
  - Farbe: foreground/90

**Column 2 (Illustration):**
- Addon: SP Image
  - Bild: /ablauf-ernteteiler.jpg (Uhr mit Karotten-Zeiger)
  - **object-fit: contain, NICHT beschneiden!**
  - Max-Height: 300px

---

## Sektion 2: Lieferung & Abholung
**SP Section ID:** lieferung
**Addon:** SP Icon + SP Heading + SP Feature Box (4x)
**Section Background:** weiss (#ffffff)
**Section Padding:** 64px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: var(--solawi-gray) (#e5e5e5)
**Animation:** Fade Up, gestaffelt

### Columns Layout: 12 (Heading-Zeile)

- Addon: SP Heading (mit Truck-Icon als Inline-Akzent)
  - Oder: Illustration /ablauf-depot.jpg (Stadtsilhouette + Gemuesekiste) klein daneben
  - Tag: H2, Text: "Lieferung & Abholung"
  - EB Garamond, 30px

### Columns Layout: 6+6 (2 Reihen = 4 Cards)

**Card 1 -- Wann wird geliefert? (id: wann)**
- Addon: SP Feature Box / SP Text Block
  - Background: var(--solawi-mauve) (#c7afc7)
  - Padding: 24px, Border Radius: 8px
  - Titel: "Wann wird geliefert?" (H3, EB Garamond, 20px)
  - Text: "Die Lieferung erfolgt woechentlich zu festen Zeiten an die verschiedenen Depots. Die genauen Lieferzeiten variieren je nach Depot."

**Card 2 -- Was wird geliefert? (id: was)**
- Background: var(--solawi-mauve)
- Titel: "Was wird geliefert?"
- Text: "Je nach Saison erhalten Sie frisches Gemuese, Obst und weitere landwirtschaftliche Produkte von unseren Hoefen. Der Ernteanteil variiert saisonal."

**Card 3 -- Aenderungen/Feiertage/Ausfaelle (id: aenderungen)**
- Background: var(--solawi-mauve)
- Titel: "Aenderungen/Feiertage/Ausfaelle" (mit AlertCircle-Icon)
- Text: "Bei Feiertagen oder besonderen Umstaenden koennen sich Liefertermine verschieben. Wir informieren Sie rechtzeitig ueber alle Aenderungen."

**Card 4 -- Depot-Hinweise (id: depot-hinweise)**
- Background: var(--solawi-mauve)
- Titel: "Depot-Hinweise" (mit MapPin-Icon)
- Text: "Bitte beachten Sie die individuellen Regeln und Oeffnungszeiten Ihres Depots. Weitere Informationen erhalten Sie direkt von Ihren Depotbetreuern."

---

## Sektion 3: Kalender
**SP Section ID:** kalender
**Addon:** SP Icon + SP Heading + SP Text Block + SP Feature Box (4x)
**Section Background:** var(--solawi-gray) (#e5e5e5)
**Section Padding:** 64px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: var(--solawi-green) (#c2ddb2)
**Animation:** Fade Up, gestaffelt

### Columns Layout: 12 (Heading)

- Addon: SP Heading (mit Kalender-Icon)
  - Tag: H2, Text: "Kalender", EB Garamond, 30px

### Kommende Termine (Platzhalter):
- Addon: SP Text Block
  - Card: weiss, Padding 32px, Border Radius 8px, shadow-sm
  - Titel: "Kommende Termine" (H3, EB Garamond, 24px)
  - Text: "Hier finden Sie alle wichtigen Termine fuer Veranstaltungen, Mitmachaktionen, Hofaktionen und Anlieferungstermine."
  - Platzhalter-Box:
    - Background: var(--solawi-mauve) (#c7afc7)
    - Padding: 24px, Border Radius: 8px
    - Text (italic): "Der interaktive Kalender wird in Kuerze verfuegbar sein."

**Hinweis fuer Joomla:** Hier wird spaeter ein Joomla-Kalender-Modul (JEvents, DPCalendar) eingebettet. Das Modul kann ueber "SP Module" Addon in SP Page Builder geladen werden.

### Columns Layout: 3+3+3+3 (Veranstaltungsarten)

**Karte 1 -- Veranstaltungen (id: veranstaltungen):**
- Addon: SP Feature Box
  - Card: weiss, Padding 24px, Border Radius 8px, shadow-sm
  - Illustration: /features-gemeinschaft.jpg (klein, 32px) oder Kalender-Icon
  - Titel: "Veranstaltungen" (H3, EB Garamond, 18px)
  - Text: "Feste, Maerkte und gesellige Zusammenkuenfte"
  - Font Size: 14px

**Karte 2 -- Mitmachaktionen (id: mitmachaktionen):**
- Illustration: /ablauf-mitmachen.jpg (klein) oder Clock-Icon
- Titel: "Mitmachaktionen"
- Text: "Gemeinsame Aktionen auf den Hoefen"

**Karte 3 -- Hofaktionen (id: hofaktionen):**
- Illustration: /inline-hof.jpg (klein) oder Truck-Icon
- Titel: "Hofaktionen"
- Text: "Besondere Aktivitaeten auf unseren Partnerhoefen"

**Karte 4 -- Anlieferungstermine (id: anlieferung):**
- Illustration: /ablauf-depot.jpg (klein) oder MapPin-Icon
- Titel: "Anlieferungstermine"
- Text: "Uebersicht aller Liefertermine"

---

## Sektion 4: CTA -- Newsletter
**Addon:** SP Heading + SP Text Block + SP Button
**Section Background:** var(--solawi-green) (#c2ddb2)
**Section Padding:** 48px oben/unten
**Shape Divider:** Nein (letzte Sektion)
**Animation:** Fade Up

### Columns Layout: 12 (zentriert)

- Addon: SP Heading
  - Tag: H2, Text: "Bleiben Sie auf dem Laufenden"
  - EB Garamond, 30px, zentriert
- Addon: SP Text Block
  - Text: "Melden Sie sich fuer unseren Newsletter an, um keine Termine zu verpassen"
  - Zentriert, 20px, max-width 672px
  - Farbe: foreground/90
- Addon: SP Button
  - Text: "Zum Newsletter"
  - Background: var(--solawi-pink) (#d10038)
  - Text: weiss, bold
  - Border Radius: 8px
  - Padding: 12px 32px

**Hinweis:** Den Newsletter-Button mit dem Joomla-Newsletter-System (z.B. Acymailing, Mailchimp-Integration) verlinken oder direkt ein Newsletter-Anmelde-Modul einbetten.
