# Anmeldung -- SP Page Builder Anleitung

## Ueberblick
Anmeldeseite mit Kontaktpersonen, einem ausfuehrlichen Anmeldeformular (persoenliche Daten, Ernteanteil-Auswahl, Depot-Auswahl, Teilnahmevereinbarung) und FAQ-Bereich. 4 Sektionen plus Erfolgsseite.

---

## Sektion 1: Hero
**Addon:** SP Image + SP Heading + SP Text Block
**Section Background:** var(--solawi-salmon) (#f3aba2) -- Pastell-Hintergrund
**Hoehe:** 300px, zentriert
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: var(--solawi-blue)/light
**Animation:** Keine

### Columns Layout: 6+6

**Column 1 (Text):**
- Addon: SP Heading
  - Tag: H1
  - Text: "Anmeldung"
  - Font Family: EB Garamond, 48px
  - Farbe: foreground
- Addon: SP Text Block
  - Text: "Werde Teil unserer Gemeinschaft"
  - Font Size: 20px

**Column 2 (Illustration):**
- Addon: SP Image
  - Bild: /ablauf-kontakt.jpg (Figur mit Gurken-Telefon "Hallo?")
  - **object-fit: contain, NICHT beschneiden!**
  - Max-Height: 260px

---

## Sektion 2: Deine Ansprechpartner
**Addon:** SP Heading + SP Team Member / SP Feature Box (3x)
**Section Background:** var(--solawi-blue)/light (helles Blau, ca. #d4e1ed)
**Section Padding:** 48px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: weiss (#ffffff)
**Animation:** Fade Up, gestaffelt

### Columns Layout: 12 (Heading)

- Addon: SP Heading
  - Tag: H2, Text: "Deine Ansprechpartner", EB Garamond, 30px, zentriert
- Addon: SP Text Block
  - Text: "Bei Fragen zur Anmeldung helfen wir dir gerne weiter"
  - Zentriert

### Columns Layout: 4+4+4

**Person 1 -- Anna Mueller:**
- Addon: SP Team Member oder SP Feature Box
  - Card: weiss, Padding 24px, Border Radius 8px, shadow-md, zentriert
  - Avatar: Platzhalter-Kreis (64px) mit User-Icon, Background var(--solawi-pink)/10
  - Name: "Anna Mueller", Font: EB Garamond, 18px
  - Rolle: "Mitgliederbetreuung", Font Size 14px, Farbe #6B7280
  - E-Mail: anna@stadt-land-beides.de (verlinkt)
  - Telefon: 0123 - 456 789 01

**Person 2 -- Michael Schmidt:**
- Rolle: "Depotkoordination"
- E-Mail: michael@stadt-land-beides.de
- Telefon: 0123 - 456 789 02

**Person 3 -- Sarah Weber:**
- Rolle: "Allgemeine Fragen"
- E-Mail: info@stadt-land-beides.de
- Telefon: 0123 - 456 789 00

---

## Sektion 3: Anmeldeformular
**Addon:** SP Heading + SP Form Builder (oder Joomla-Kontaktformular / RS Form / ChronoForms)
**Section Background:** weiss (#ffffff)
**Section Padding:** 80px oben/unten
**Shape Divider:** Ja, Welle (Wave) unten, Farbe: var(--solawi-salmon)/light
**Animation:** Fade Up

### Columns Layout: 12 (max-width 768px, zentriert)

- Addon: SP Heading
  - Tag: H2, Text: "Anmeldeformular", EB Garamond, 36px, zentriert
- Addon: SP Text Block
  - Text: "Fuelle das Formular aus, um dich fuer eine Mitgliedschaft anzumelden"
  - Zentriert

### Formular (SP Form Builder oder Joomla-Erweiterung):

**Hinweis:** SP Page Builder hat ein eingebautes Form Addon. Fuer komplexere Formulare empfiehlt sich RS Form Pro oder ChronoForms als Joomla-Erweiterung. Das Formular wird dann als Modul eingebettet.

**Formular-Container:**
- Background: weiss, Border: 1px solid #e5e7eb, Border Radius 8px, shadow-lg, Padding 32px

#### Abschnitt 1: Persoenliche Daten
- Ueberschrift: "Persoenliche Daten" (H3, EB Garamond, 24px)
- Felder (2-spaltig wo moeglich):
  - Vorname * (text, Pflicht)
  - Nachname * (text, Pflicht)
  - E-Mail * (email, Pflicht) -- volle Breite
  - Telefon * (tel, Pflicht) -- volle Breite
  - Strasse & Hausnummer * (text, Pflicht) -- volle Breite
  - PLZ * (text, Pflicht) | Ort * (text, Pflicht) -- 2-spaltig
- Alle Felder: Border 1px solid #d1d5db, Border Radius 8px, Padding 12px 16px
- Focus: Ring 2px var(--solawi-pink)

#### Abschnitt 2: Ernteanteil waehlen
- Ueberschrift: "Ernteanteil waehlen" (H3, EB Garamond, 24px)
- Border Top: 1px solid #e5e7eb, Padding Top 32px
- Radio-Buttons (Cards):
  - **Sommergemuese (45EUR/Monat)** -- Mai bis Oktober - Reimehof
    - Card: Border 2px solid #d1d5db, Padding 16px, Border Radius 8px
    - Hover: Border var(--solawi-pink)
  - **Wintergemuese (40EUR/Monat)** -- November bis April - Biohof Walz
  - **Ganzjahrespaket (75EUR/Monat)** -- Sommer- und Wintergemuese - Beide Hoefe
    - Card: **Border 2px solid var(--solawi-pink)**, Background var(--solawi-green)/20
    - Badge: "Empfohlen", Font: Cantora One, Background var(--solawi-pink), weiss, rounded-full, Font Size 12px

- Zusatzanteile (Checkboxen):
  - Obst vom Hederer (20EUR/Monat)
  - Kaese von Kerschbaum (15EUR/Monat)
  - Eier Gallini Fellici (8EUR/Monat)

#### Abschnitt 3: Depot waehlen
- Ueberschrift: "Depot waehlen" (H3)
- Select-Dropdown (Pflicht):
  - Bitte waehlen...
  - Depot Innenstadt - Donnerstag 16-19 Uhr
  - Depot Nordstadt - Freitag 15-18 Uhr
  - Depot Suedviertel - Mittwoch 17-20 Uhr (ausgebucht)
  - Depot Westend - Donnerstag 15-18 Uhr
  - Depot Altstadt - Freitag 16-19 Uhr

#### Abschnitt 4: Nachricht (optional)
- Ueberschrift: "Nachricht (optional)" (H3)
- Textarea, 5 Zeilen
- Placeholder: "Hast du Fragen oder Anmerkungen? Schreib uns hier..."

#### Abschnitt 5: Teilnahmevereinbarung
- Info-Box: Background var(--solawi-green)/20, Padding 24px, Border Radius 8px
  - FileText-Icon + Titel: "Teilnahmevereinbarung"
  - Text + PDF-Download-Link
- Checkbox 1 (Pflicht): "Ich habe die Teilnahmevereinbarung gelesen und akzeptiere sie. *"
- Checkbox 2 (Pflicht): "Ich stimme der Verarbeitung meiner Daten gemaess der Datenschutzerklaerung zu. *"

#### Submit Button:
- Text: "Verbindlich anmelden"
- Volle Breite
- Background: var(--solawi-pink) (#d10038)
- Text: weiss, 18px
- Border Radius: 8px, Padding: 16px
- Hinweis darunter: "Nach dem Absenden erhaeltst du eine Bestaetigungsmail mit weiteren Informationen."
- Font Size 14px, Farbe #6B7280, zentriert

---

## Sektion 4: Haeufig gestellte Fragen (FAQ)
**Addon:** SP Heading + SP Accordion / SP Text Block (3x)
**Section Background:** var(--solawi-salmon)/light (helles Rosa, ca. #fce8e5)
**Section Padding:** 80px oben/unten
**Shape Divider:** Nein (letzte Sektion)
**Animation:** Fade Up

### Columns Layout: 12

- Addon: SP Heading
  - Tag: H2, Text: "Haeufig gestellte Fragen", EB Garamond, 30px, zentriert

### FAQ-Items (SP Accordion oder gestapelte Cards):

**Frage 1:**
- Card: weiss, Padding 24px, Border Radius 8px, shadow-md, Margin Bottom 24px
- Frage: "Wann kann ich starten?" (H3, EB Garamond, 18px)
- Antwort: "Der Einstieg ist zum Beginn der jeweiligen Saison moeglich. Sommergemuese startet im Mai, Wintergemuese im November. Bei freien Plaetzen ist auch ein Einstieg waehrend der laufenden Saison moeglich."

**Frage 2:**
- Frage: "Wie lange bin ich gebunden?"
- Antwort: "Die Mitgliedschaft laeuft fuer eine Saison (6 Monate). Eine Kuendigung ist mit 4 Wochen Kuendigungsfrist zum Saisonende moeglich. Das Ganzjahrespaket verlaengert sich automatisch, kann aber jederzeit mit 8 Wochen Frist gekuendigt werden."

**Frage 3:**
- Frage: "Kann ich auch verschenken oder spenden?"
- Antwort: "Ja! Wenn du im Urlaub bist oder deine Ernte nicht abholen kannst, darfst du deinen Anteil gerne an Freunde weitergeben oder fuer unseren Spendentopf zur Verfuegung stellen."

---

## Erfolgsseite (nach Absenden)

Nach erfolgreichem Absenden des Formulars wird eine Bestaetigungsseite angezeigt. In Joomla kann dies ueber eine Weiterleitungs-URL des Formulars oder eine eigene Seite realisiert werden.

**Section Background:** weiss
**Hoehe:** min 600px, vertikal zentriert

### Columns Layout: 12 (max-width 672px, zentriert)

- Addon: SP Icon / Custom HTML
  - Kreis: 80px, Background var(--solawi-green) (#c2ddb2)
  - Icon: Haekchen (CheckCircle), Farbe var(--solawi-pink)
- Addon: SP Heading
  - Tag: H1, Text: "Vielen Dank fuer deine Anmeldung!"
  - EB Garamond, 36px, zentriert
- Addon: SP Text Block
  - Text: "Wir haben deine Anmeldung erhalten und werden uns innerhalb der naechsten 3 Werktage bei dir melden."
  - Font Size: 20px, zentriert
- Addon: SP Text Block
  - Text: "Du erhaeltst eine Bestaetigungs-E-Mail mit weiteren Informationen zur Mitgliedschaft und den naechsten Schritten."
  - Farbe: #6B7280, zentriert
