# Kalender -- SP Page Builder Anleitung

## Ueberblick
Veranstaltungskalender mit allen Terminen (Hofaktionen, Workshops, Veranstaltungen, Info-Termine, Vereinstermine). Enthaelt Filterleiste, Eventliste, Anlieferungsinformationen und CTA. 5 Sektionen.

---

## Sektion 1: Hero
**Addon:** SP Image + SP Heading + SP Text Block
**Section Background:** var(--solawi-orange) (#ffa673) -- Pastell-Hintergrund
**Hoehe:** 400px, zentriert
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: var(--solawi-gray) (#e5e5e5)
**Animation:** Keine

### Columns Layout: 6+6

**Column 1 (Text):**
- Addon: SP Heading
  - Tag: H1
  - Text: "Kalender"
  - Font Family: EB Garamond, 48px
  - Farbe: foreground
- Addon: SP Text Block
  - Text: "Veranstaltungen, Hofaktionen und Mitmach-Termine"
  - Font Size: 20px

**Column 2 (Illustration):**
- Addon: SP Image
  - Bild: /ablauf-ernteteiler.jpg (Uhr mit Karotten-Zeiger)
  - **object-fit: contain, NICHT beschneiden!**
  - Max-Height: 350px

---

## Sektion 2: Filter & Legende
**Addon:** SP Button Group / SP Custom HTML
**Section Background:** var(--solawi-gray) (#e5e5e5)
**Section Padding:** 32px oben/unten
**Shape Divider:** Nein
**Animation:** Keine

### Columns Layout: 12 (zentriert)

- Addon: SP Button Group (oder Custom HTML fuer Filter-Buttons)
  - Alignment: zentriert, flex-wrap, gap 12px
  - Buttons (Pill-Style, rounded-full):
    - "Alle" -- Background: #4B5563 (gray-600), Text: weiss
    - "Hofaktion" -- Background: var(--solawi-pink) (#d10038), Text: weiss
    - "Workshop" -- Background: #2563EB (blue-600), Text: weiss
    - "Veranstaltung" -- Background: #7C3AED (purple-600), Text: weiss
    - "Info-Veranstaltung" -- Background: #EA580C (orange-600), Text: weiss
    - "Vereinstermin" -- Background: #DC2626 (red-600), Text: weiss
  - Hover: opacity 80%

**Hinweis fuer Joomla:** Die Filterfunktion kann ueber ein Joomla-Kalendersystem (z.B. JEvents, DPCalendar) oder Custom JavaScript realisiert werden. Die Buttons dienen in der SP Page Builder Version primaer als Legende, da SP Page Builder keine native Filterfunktion hat.

---

## Sektion 3: Eventliste
**Addon:** SP Text Block / SP Article Scroller / Custom HTML (8x Event-Cards)
**Section Background:** weiss (#ffffff)
**Section Padding:** 80px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: var(--solawi-blue) (#97b0c7)
**Animation:** Fade Up, gestaffelt

**Hinweis:** In Joomla empfiehlt sich eine Kalender-Erweiterung (JEvents, DPCalendar) fuer die dynamische Verwaltung von Events. Die folgende Struktur zeigt das statische Layout in SP Page Builder.

### Columns Layout: 12 (max-width 1024px)

Jeder Event als Card (gestapelt, Margin Bottom 24px):

**Event-Card Vorlage:**
- Container: weiss, Border: 1px solid #e5e7eb, Border Radius 8px, shadow-md, Hover shadow-xl
- Padding: 24px
- Layout: Flex Row (Desktop), Stack (Mobile)

- **Datums-Badge (links, flex-shrink-0):**
  - Background: var(--solawi-pink)/10
  - Border Radius: 8px, Padding: 16px
  - Min-Width: 100px, zentriert
  - Kalender-Icon oben
  - Datum darunter, Font: bold, 14px

- **Event-Details (rechts, flex-1):**
  - Zeile 1: Titel (H3, EB Garamond, 24px) + Typ-Badge (Pill, rounded-full, Font Size 14px, weiss auf Typ-Farbe)
  - Beschreibung (Text, 16px, Farbe #374151)
  - Info-Grid (2 Spalten):
    - Uhr-Icon + **Zeit:** [Uhrzeit]
    - Pin-Icon + **Ort:** [Adresse]
    - Users-Icon + **Teilnehmer:** [Anzahl]
  - Button: "Anmelden"
    - Background: var(--solawi-pink) (#d10038)
    - Text: weiss
    - Border Radius: 8px
    - Margin Top: 16px

### Alle Events:

**Event 1:**
- Datum: 15. Maerz 2026
- Titel: "Hofaktion Reimehof - Fruehjahrsanbau"
- Typ: Hofaktion (var(--solawi-pink))
- Zeit: 10:00 - 16:00 Uhr
- Ort: Reimehof, Reimehof 1, 12345 Musterstadt
- Beschreibung: Gemeinsames Pflanzen von Tomaten, Paprika und Salaten. Mittagessen wird gestellt.
- Plaetze: Unbegrenzt

**Event 2:**
- Datum: 22. Maerz 2026
- Titel: "Online Info-Veranstaltung"
- Typ: Info-Veranstaltung (orange)
- Zeit: 19:00 - 20:30 Uhr
- Ort: Online via Zoom
- Beschreibung: Interessiert an Solidarischer Landwirtschaft? Erfahre mehr ueber Stadt, Land, Beides und stelle deine Fragen.
- Plaetze: 50 Plaetze

**Event 3:**
- Datum: 5. April 2026
- Titel: "Obstbaumschnitt-Kurs"
- Typ: Workshop (blau)
- Zeit: 14:00 - 17:00 Uhr
- Ort: Obstplantage Hederer, Obstweg 12, 12347 Obstdorf
- Beschreibung: Lerne die Grundlagen des Obstbaumschnitts direkt auf der Plantage. Fuer Mitglieder kostenlos.
- Plaetze: 15 Plaetze (5 frei)

**Event 4:**
- Datum: 12. April 2026
- Titel: "Generalversammlung"
- Typ: Vereinstermin (rot)
- Zeit: 18:00 - 21:00 Uhr
- Ort: Gemeindehaus Musterstadt, Hauptstrasse 100
- Beschreibung: Jaehrliche Mitgliederversammlung mit Berichten, Abstimmungen und gemuetlichem Beisammensein.
- Plaetze: Fuer Mitglieder

**Event 5:**
- Datum: 26. April 2026
- Titel: "Spargel-Ernteaktion"
- Typ: Hofaktion
- Zeit: 8:00 - 12:00 Uhr
- Ort: Biohof Walz, Landstrasse 45, 12346 Musterdorf
- Beschreibung: Fruehmorgenliche Spargelernte - wer dabei ist, bekommt frischen Spargel mit nach Hause!
- Plaetze: 20 Plaetze (12 frei)

**Event 6:**
- Datum: 10. Mai 2026
- Titel: "Fruehlingsfest"
- Typ: Veranstaltung (lila)
- Zeit: 14:00 - 20:00 Uhr
- Ort: Reimehof, Reimehof 1, 12345 Musterstadt
- Beschreibung: Gemeinsames Fest mit Hoffuehrungen, Lagerfeuer, Musik und gutem Essen. Familien willkommen!
- Plaetze: Unbegrenzt

**Event 7:**
- Datum: 24. Mai 2026
- Titel: "Workshop: Fermentieren & Einkochen"
- Typ: Workshop (blau)
- Zeit: 15:00 - 18:00 Uhr
- Ort: Depot Innenstadt, Hauptstrasse 45
- Beschreibung: Lerne, wie du deine Ernte haltbar machst. Wir fermentieren Gemuese und kochen Marmelade ein.
- Plaetze: 12 Plaetze (3 frei)

**Event 8:**
- Datum: 7. Juni 2026
- Titel: "Beerenernte bei Hederer"
- Typ: Hofaktion
- Zeit: 9:00 - 12:00 Uhr
- Ort: Obstplantage Hederer, Obstweg 12, 12347 Obstdorf
- Beschreibung: Gemeinsame Erdbeerernte - mit frischen Beeren zum Mitnehmen!
- Plaetze: 25 Plaetze (18 frei)

---

## Sektion 4: Anlieferung von Ernteteilen
**Addon:** SP Heading + SP Text Block (2-spaltig) + SP List
**Section Background:** var(--solawi-blue) (#97b0c7)
**Section Padding:** 80px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: var(--solawi-green) (#c2ddb2)
**Animation:** Fade Up

### Columns Layout: 12 (Heading)

- Addon: SP Heading
  - Tag: H2, Text: "Anlieferung von Ernteteilen", EB Garamond, 36px, zentriert

### Weisse Card (volle Breite):
- Background: weiss, Padding 32px, Border Radius 8px, shadow-md

#### Columns Layout: 6+6 (innerhalb der Card)

**Column 1 -- Sommergemuese:**
- Titel: "Sommergemuese (Reimehof)" (H3, EB Garamond, 24px) + Sprout-Icon
- Kalender-Icon + **Saison:** Mai bis Oktober
- Uhr-Icon + **Liefertag:** Jeden Donnerstag
- Info-Box: Background var(--solawi-green)/20, Padding 16px, Border Radius 8px
  - Text: "Die genauen Abholzeiten variieren je nach Depot. In der Regel zwischen 15:00 und 19:00 Uhr."

**Column 2 -- Wintergemuese:**
- Titel: "Wintergemuese (Biohof Walz)" (H3) + Sprout-Icon
- Kalender-Icon + **Saison:** November bis April
- Uhr-Icon + **Liefertag:** Jeden Freitag
- Info-Box (gleich wie Sommergemuese)

#### Wichtige Hinweise (volle Breite, unter den Spalten):
- Border Top: 1px solid #e5e7eb, Padding Top 32px, Margin Top 32px
- Titel: "Wichtige Hinweise" (H3, EB Garamond, 20px)
- Liste mit Pink-Dots:
  - Bitte hole deine Ernteanteile regelmaessig ab. Nicht abgeholte Anteile werden am Folgetag verteilt.
  - Bei Urlaub oder Verhinderung kannst du deinen Anteil verschenken oder spenden.
  - Die Zusammensetzung variiert je nach Saison und Ernte - das macht es spannend!

---

## Sektion 5: CTA
**Addon:** SP Heading + SP Text Block + SP Button Group
**Section Background:** var(--solawi-green) (#c2ddb2)
**Section Padding:** 80px oben/unten
**Shape Divider:** Nein (letzte Sektion)
**Animation:** Fade Up

### Columns Layout: 12 (zentriert)

- Addon: SP Heading
  - Tag: H2, Text: "Moechtest du bei einer Aktion dabei sein?"
  - EB Garamond, 36px, zentriert
- Addon: SP Text Block
  - Text: "Melde dich fuer Veranstaltungen an oder werde Mitglied, um an allen Aktionen teilzunehmen."
  - Zentriert, 20px
- Addon: SP Button Group
  - Button 1: "Newsletter abonnieren"
    - Background: var(--solawi-pink) (#d10038)
    - Text: weiss
  - Button 2: "Mitglied werden"
    - Border: 2px solid foreground
    - Text: foreground
    - Link: /mitmachen
