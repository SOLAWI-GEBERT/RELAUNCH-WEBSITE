# Kontakt & Anmeldung -- SP Page Builder Anleitung

## Ueberblick
Kombinierte Kontakt- und Anmeldeseite. Enthaelt Anmeldungs-Ablauf, Kontaktformular, Ansprechpersonen und FAQ. 5 Sektionen. Diese Seite wird ggf. als Einstiegsseite fuer Interessierte genutzt, waehrend /anmeldung das ausfuehrliche Formular enthaelt.

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
  - Text: "Kontakt & Anmeldung"
  - Font Family: EB Garamond, 48px
  - Farbe: foreground
- Addon: SP Text Block
  - Text: "Werden Sie Teil unserer Gemeinschaft oder kontaktieren Sie uns bei Fragen"
  - Font Size: 20px
  - Farbe: foreground/90

**Column 2 (Illustration):**
- Addon: SP Image
  - Bild: /ablauf-kontakt.jpg (Figur mit Gurken-Telefon)
  - **object-fit: contain, NICHT beschneiden!**
  - Max-Height: 300px

---

## Sektion 2: Anmeldung / Teilnahmevereinbarung
**SP Section ID:** anmeldung
**Addon:** SP Heading + SP Text Block + SP Feature Box (Schritte) + SP Button
**Section Background:** weiss (#ffffff)
**Section Padding:** 64px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: var(--solawi-gray) (#e5e5e5)
**Animation:** Fade Up, Delay 200ms

### Columns Layout: 12 (max-width 896px, zentriert)

- Addon: SP Heading
  - Tag: H2, Text: "Anmeldung / Teilnahmevereinbarung"
  - EB Garamond, 30px, zentriert
- Addon: SP Text Block
  - Text: "Werden Sie Teil von Stadt, Land, Beides und geniessen Sie frisches, regionales Gemuese aus solidarischer Landwirtschaft"
  - Zentriert, max-width 672px

### Ablauf-Box:
- Background: var(--solawi-green)/20 (#f0f7ec), Padding 32px, Border Radius 8px

- Titel: "So funktioniert die Anmeldung" (H3, EB Garamond, 24px)

**4 Schritte (vertikal gestapelt mit Nummer-Badges):**

Jeder Schritt: Flex Row, gap 16px

**Schritt 1:**
- Badge: Kreis 32px, Background var(--solawi-pink) (#d10038), weiss, bold
- Titel: "Ernteanteil waehlen" (bold)
- Text: "Entscheiden Sie sich fuer einen Sommer- oder Winteranteil"

**Schritt 2:**
- Badge: "2"
- Titel: "Depot auswaehlen"
- Text: "Waehlen Sie ein Depot in Ihrer Naehe fuer die Abholung"

**Schritt 3:**
- Badge: "3"
- Titel: "Formular ausfuellen"
- Text: "Fuellen Sie die Teilnahmevereinbarung aus"

**Schritt 4:**
- Badge: "4"
- Titel: "Loslegen"
- Text: "Sie erhalten eine Bestaetigung und koennen ab der naechsten Saison loslegen"

### CTA Button (zentriert):
- Addon: SP Button
  - Text: "Jetzt anmelden"
  - Background: var(--solawi-pink) (#d10038)
  - Text: weiss, 18px, bold
  - Border Radius: 8px
  - Padding: 16px 32px
  - Link: /anmeldung

---

## Sektion 3: Kontaktformular
**SP Section ID:** kontakt
**Addon:** SP Icon + SP Heading + SP Form Builder
**Section Background:** var(--solawi-gray) (#e5e5e5)
**Section Padding:** 64px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: weiss (#ffffff)
**Animation:** Fade Up

### Columns Layout: 12 (max-width 896px, zentriert)

- Addon: SP Icon (oder SP Image)
  - Illustration: /kontakt.jpg (Hahn am Laptop, blau BG)
  - Groesse: 48px, zentriert, Margin Bottom 16px
  - **Alternativ:** kleines rundes Bild (64x64) als Akzent
- Addon: SP Heading
  - Tag: H2, Text: "Kontaktformular", EB Garamond, 30px, zentriert
- Addon: SP Text Block
  - Text: "Sie haben Fragen? Schreiben Sie uns!"
  - Zentriert

### Formular (SP Form Builder oder Joomla Kontaktformular):
- Container: weiss, Border Radius 8px, shadow-sm, Padding 32px

**Felder:**
- Name (text) | E-Mail (email) -- 2-spaltig
- Betreff (text) -- volle Breite
- Nachricht (textarea, 6 Zeilen) -- volle Breite
- Submit: "Nachricht senden"
  - Volle Breite
  - Background: var(--solawi-pink) (#d10038)
  - Text: weiss, bold
  - Border Radius: 8px

---

## Sektion 4: Ansprechpersonen
**SP Section ID:** ansprechpersonen
**Addon:** SP Icon + SP Heading + SP Feature Box (3x)
**Section Background:** weiss (#ffffff)
**Section Padding:** 64px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: var(--solawi-salmon)/light (#fce8e5)
**Animation:** Fade Up, gestaffelt

### Columns Layout: 12 (Heading)

- Addon: SP Image (optional)
  - Bild: /decision-mitmachen.jpg als kleines Akzent-Bild (48px)
- Addon: SP Heading
  - Tag: H2, Text: "Ansprechpersonen", EB Garamond, 30px, zentriert
- Addon: SP Text Block
  - Text: "Unser Team steht Ihnen gerne zur Verfuegung"
  - Zentriert

### Columns Layout: 4+4+4

**Kontakt 1 -- Allgemeine Fragen:**
- Addon: SP Feature Box
  - Card: Background #f9fafb (gray-50), Padding 24px, Border Radius 8px
  - Titel: "Allgemeine Fragen" (H3, EB Garamond, 20px)
  - Mail-Icon + info@stadt-land-beides.de
  - Phone-Icon + 0123 / 456789

**Kontakt 2 -- Koordination:**
- Card gleich
- Titel: "Koordination"
- Name: "Max Mustermann" (bold)
- Mail-Icon + koordination@stadt-land-beides.de

**Kontakt 3 -- Depots:**
- Titel: "Depots"
- Name: "Anna Schmidt" (bold)
- Mail-Icon + depots@stadt-land-beides.de

---

## Sektion 5: Haeufig gestellte Fragen (FAQ)
**SP Section ID:** faq
**Addon:** SP Icon + SP Heading + SP Accordion (4x)
**Section Background:** var(--solawi-salmon)/light (#fce8e5)
**Section Padding:** 64px oben/unten
**Shape Divider:** Nein (letzte Sektion)
**Animation:** Fade Up

### Columns Layout: 12

- Addon: SP Image (optional)
  - Bild: /decision-auszeichnung.jpg (drei Gemuese-Freunde) als Akzent, 48px
- Addon: SP Heading
  - Tag: H2, Text: "Haeufig gestellte Fragen (FAQ)", EB Garamond, 30px, zentriert

### FAQ-Items (SP Accordion empfohlen):

**Frage 1:**
- Card: weiss, Padding 24px, Border Radius 8px, shadow-sm
- Frage: "Was kostet ein Ernteanteil?" (H3, EB Garamond, 18px)
- Antwort: "Die Kosten variieren je nach Ernteanteil. Ein Sommergemueseanteil kostet beispielsweise ca. 20-25 Euro pro Woche. Detaillierte Informationen finden Sie auf der Seite 'Mitmachen'."

**Frage 2:**
- Frage: "Wie lange bin ich gebunden?"
- Antwort: "Die Teilnahme ist saisonabhaengig (Sommer oder Winter). Eine Kuendigung ist zum Saisonende mit einer Frist von 4 Wochen moeglich."

**Frage 3:**
- Frage: "Wo kann ich mein Gemuese abholen?"
- Antwort: "Wir haben verschiedene Depots in der Region. Eine Uebersicht aller Standorte finden Sie auf der Seite 'Mitmachen' unter 'Depotstandorte'."

**Frage 4:**
- Frage: "Muss ich auf dem Hof mitarbeiten?"
- Antwort: "Mitarbeit ist erwuenscht, aber nicht verpflichtend. Es gibt regelmaessig Mitmachaktionen, bei denen Sie die Hoefe kennenlernen und mithelfen koennen."
