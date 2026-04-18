# Menu-Content Alignment Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Alle 23 fehlenden und 4 Dummy-Sections mit echten Inhalten füllen, sodass jeder Menülink auf existierenden, inhaltlich korrekten Content zeigt.

**Architecture:** Reine Content-Arbeit in 4 bestehenden Page-Komponenten. Keine neuen Routen, keine neuen Komponenten. Daten kommen aus der TNV V9.3 (infos/TNV_StadtLandBeides_V9_3_2026.pdf). Zwei Tonalitäten: Ton A (einladend, Solawi-Perspektive) für Einsteiger-Sections, Ton B (transparent, tabellarisch) für Insider-Sections.

**Tech Stack:** React 18, Tailwind CSS v4, shadcn/ui Accordion, Lucide Icons. Kein Testrunner — Verifikation über `npm run build`.

**Datenquellen:**
- TNV V9.3: `infos/TNV_StadtLandBeides_V9_3_2026.pdf` (Preise, Höfe, Konditionen)
- SP Page Builder Export: `export_origin/Landing_page.json` (Texte, Beschreibungen)
- Design-Dokument: `docs/plans/2026-04-18-menu-content-alignment-design.md`

---

## Task 1: HoefeUndErnteanteile.tsx — Kompletter Neuaufbau (9 MISSING)

**Files:**
- Rewrite: `src/app/pages/HoefeUndErnteanteile.tsx` (350 Zeilen → ca. 600)

Dies ist die größte Aufgabe. Die Seite muss komplett neu strukturiert werden: Reimehof/Schallerhof entfernen, Tristan und Kirschgarten hinzufügen, alle Sub-Anker setzen.

**Step 1: Seite lesen und Bestandsaufnahme**

Read `src/app/pages/HoefeUndErnteanteile.tsx` vollständig.
Notieren: welche Sections behalten (Walz, Hederer — aber überarbeiten), welche entfernen (Reimehof, Schallerhof, Käserei Kerschbaum).

**Step 2: Hero + Einleitung überarbeiten**

Hero bleibt, Intro-Text anpassen:
- Ton A: "Unsere Höfe versorgen dich mit allem, was du brauchst — von Gemüse und Obst über Fleisch und Eier bis hin zu Ur-Getreide und Bio-Beeren."
- Kurze Übersicht der 4 aktiven Höfe + Kirschgarten als Karten mit Zertifizierungs-Badge (Bioland/demeter/EU-Bio).

**Step 3: Demeterhof Hederer Section überarbeiten**

Section `id="hederer"` existiert, aber als "Obst vom Hederer" mit Dummy-Adresse. Komplett überarbeiten:

```
#hederer — Hof-Header + Intro (Ton A)
  Heribert Hederer, seit 2001 in Uffenheim, demeter.
  4 Gewächshäuser, 20 Jahre natürliche Anbaumethoden.

#hederer-sommer — Sommergemüse (Ton B)
  Für 1-2 Personen, wöchentlich Apr–Sept
  Richtpreis: 105€ + 23€ Logistik = 128€/M (Bieterrunde)
  Einstieg: 01.04., 01.06., 01.08. | Max 80 Anteile
  Probemonat: nur als Doppelmonat
  Sortiment: Gurken, Tomaten, Kartoffeln, Kürbis, Salat, Knoblauch, Bohnen, Paprika, Auberginen...

#hederer-obst — Obst & Säfte (Ton B)
  Nach Bedarf Jul–Dez
  37€ + 2,50€ = 39,50€/M (Bieterrunde)
  Einstieg: 01.07., 01.10. | Max 35 Anteile | Kein Probemonat
  Äpfel, Kirschen, Ringlotten, Zwetschgen, Trauben, Birnen, Walnüsse, Physalis
```

Bieterrunde erklären: "Bei der Jahreshauptversammlung wird ein Richtpreis festgelegt. In der Bieterrunde gibst du an, welchen Beitrag du stemmen kannst — über oder unter dem Richtpreis. So entsteht ein sozialer Ausgleich."

**Step 4: Biohof Tristan Section NEU erstellen**

Komplett neue Section nach Hederer einfügen:

```
#tristans — Hof-Header + Intro (Ton A)
  Hofstelle in Emskirchen/Gunzendorf, Bioland.
  2017 übernommen, 35 ha, bunte Anbaupalette.
  Aktuell 40 Ernteteiler am Hof, 10 im UKAMA.

#tristans-winter — Wintergemüse (Ton B)
  Tabelle mit 3 Varianten:
  | Variante | Für | Zyklus | Preis + Logistik | Gesamt |
  | Ganzer Anteil | 2-4 Pers. | wöchentlich | 122,20€ + 14€ | 136,20€/M |
  | Halber Anteil | 1-2 Pers. | 14-tägig | 61,10€ + 11€ | 72,10€/M |
  | Kleiner Anteil | 1-2 Pers. | wöchentlich | 85,54€ + 14€ | 99,54€/M |
  Okt–Mrz. Probemonat jeden Monat zum 1. möglich.

  Kisteninhalte:
  - Folienhaus: Spinat, Salate, Kräuter
  - Feld: Lauch, Rosenkohl, Palmkohl
  - Lager: Karotten, Pastinaken, Bete, Kraut, Zwiebeln, Kürbis, Kartoffeln

  Kommunikation: 2 Tage vorher Mail (Kisteninhalt), am Abholtag WhatsApp/Signal (genaue Mengen).
```

Preise sind Richtpreise (Bieterrunde). Ab Okt 2026 gelten die BR*-Preise.

**Step 5: Demeterhof Walz Section überarbeiten**

Section `id="walz"` existiert mit Dummy-Adresse. Überarbeiten und Sub-Anker ergänzen:

```
#walz — Hof-Header + Intro (Ton A)
  Familienbetrieb in Schäflohe bei Amberg, demeter.
  Kreislaufgedanke: "Wir möchten die Tiere in ihrer Ganzheit betrachten."

#walz-huhn — More..Huhn (Ton B)
  15€ + 2,90€ = 17,90€/M. 2x/Monat, ganzjährig.
  Eier + anteilmäßig Bruderhahn/Suppenhenne/Bolognese.

  Weitere Ernteanteile (ohne eigenen Menülink):
  - More..Bratgockerl: 8€ + 1€ = 9€/M. Freilandhaltung.
  - More..Hack: 10€ + 1,40€ = 11,40€/M. 500g/M. Aberdeen Angus, Weidehaltung.
  - More..Wurst: 15€ + 2€ = 17€/M. 500g/M. Salami, Wienerle, Bratwürste etc.

#walz-getreide — More..Ur-Getreide (Ton B)
  6€ + 0,90€ = 6,90€/M. 1x/Monat, ganzjährig. 1kg individuell.
  Sorten: Schwarzes Einkorn, Sommeremmer, Weißer Urdinkel, Champagnerroggen etc.
```

**Step 6: Kirschgarten Section NEU erstellen**

Komplett neue Section nach Walz:

```
#kirschgarten — Hof-Header + Intro (Ton A)
  Verein pachtet seit 2023 Grundstück bei Igensdorf.
  Bio-zertifiziert seit 2019, Mischkultur, extensiv.
  Naturnahe Hecken, Totholzriegel — Beitrag zur Biodiversität.

#kirschgarten-beeren — Bio..Beeren (Ton B)
  35€ + 3€ = 38€/M. Wöchentlich Jul–Sept (Zahlung 3 Monate).
  200-400g/Lieferung. Max 30 Anteile.
  Einstieg: 01.07., 01.08., 01.09. Anmeldeschluss 15. des Vormonats.
  Johannisbeeren, Himbeeren, Stachelbeeren, Brombeeren, Jostabeeren, Aronia etc.
```

**Step 7: Gallini Fellici + Hofkooperationen**

Section `#gallini-fellici` mit kurzem Block:
"Hin und wieder organisieren wir Sammelbestellungen bei befreundeten Höfen — zum Beispiel Orangen von Gallini Fellici in Italien."

Käserei Kerschbaum entfernen (Michlbauer/Reimehof nicht mehr dabei).

**Step 8: Entfernen von Reimehof, Schallerhof, veralteten Inhalten**

- Section `#reimehof` komplett entfernen
- Section `#aktuelles` mit veralteten Daten (Feb/Mrz 2026) entfernen oder ehrlich umformulieren
- Dummy-Adressen ("Musterstadt") durch echte ersetzen

**Step 9: Build und Commit**

```bash
npm run build
git add src/app/pages/HoefeUndErnteanteile.tsx
git commit -m "feat: rewrite Höfe page with real content from TNV V9.3

- Add Biohof Tristan (winter vegetables, 3 variants)
- Add Kirschgarten (organic berries)
- Update Hederer with sub-sections (summer veg, fruit)
- Update Walz with sub-sections (poultry, grain, meat)
- Add Gallini Fellici as cooperation
- Remove Reimehof/Schallerhof (no longer active)
- Replace all dummy addresses with real data
- All menu anchors now resolve to real content"
```

---

## Task 2: Mitmachen.tsx — Fehlende Sections + Dummy-Daten ersetzen (8 MISSING)

**Files:**
- Modify: `src/app/pages/Mitmachen.tsx` (542 Zeilen → ca. 700)

**Step 1: Seite lesen, Dummy-Stellen markieren**

Read `src/app/pages/Mitmachen.tsx` vollständig. Notieren: welche Sections haben Dummy-Daten, wo fehlen Anker.

**Step 2: Anker-IDs für existierende Sections ergänzen**

- "So wirst du Mitglied" Section (Z. ~29-92): `id="ueberblick"` ergänzen
- Engagement Section: `id="engagement"` → `id="mitarbeit-engagement"` umbenennen (Match mit Menü)

**Step 3: Ernteanteile-Section überarbeiten (#ernteteile)**

Dummy-Zahlen ("12 frei", "8 frei") ersetzen durch echte Tabelle aus TNV S.1:

```
| Hof | Produkt | Zyklus | Phase | Gesamt/M |
|-----|---------|--------|-------|----------|
| Hederer | Sommergemüse | wöchentlich | Apr–Sept | 128€ |
| Hederer | Obst & Säfte | nach Bedarf | Jul–Dez | 39,50€ |
| Tristan | Wintergemüse (ganz) | wöchentlich | Okt–Mrz | 136,20€ |
| Tristan | Wintergemüse (halb) | 14-tägig | Okt–Mrz | 72,10€ |
| Tristan | Wintergemüse (klein) | wöchentlich | Okt–Mrz | 99,54€ |
| Walz | More..Huhn | 2x/Monat | ganzjährig | 17,90€ |
| Walz | More..Bratgockerl | 1x/4 Mon. | ganzjährig | 9€ |
| Walz | More..Hack | 1x/Monat | ganzjährig | 11,40€ |
| Walz | More..Wurst | 1x/Monat | ganzjährig | 17€ |
| Walz | More..Ur-Getreide | 1x/Monat | ganzjährig | 6,90€ |
| Kirschgarten | Bio..Beeren | wöchentlich | Jul–Sept | 38€ |
```

Hinweis: "Preise mit Bieterrunde-Verfahren. Dein tatsächlicher Beitrag kann darüber oder darunter liegen."
Hinweis: Risikobeitrag 1,50€/M kommt für jeden Ernteteiler einmalig dazu.

Satz "Die Zahlen werden monatlich aktualisiert" entfernen.

**Step 4: Neue Section #teilnahme einfügen**

Nach `#ernteteile`:

Ton A-Intro: "So kann der Hof sicher planen — und du bekommst ein ganzes Jahr lang frische Lebensmittel."

Dann Ton B:
- Wirtschaftsjahr: 01.04.–31.03.
- Wintergemüse/Sommergemüse: jeweils 6 Monate
- Verlängerung automatisch, wenn nicht bis 31.12. gekündigt
- Kündigung schriftlich (Post oder E-Mail an Team.Koordination@stadt-land-beides.de)
- Teilkündigung einzelner Anteile möglich
- Ausnahme bei schwerwiegenden Gründen (z.B. Umzug)
- Probemonat: +5€ Verwaltungsaufwand pro Hof. Start immer zum 1. eines Monats, 2-3 Wochen Vorlauf.

**Step 5: Depot-Section (#depots) Dummy-Adressen ersetzen**

Alle "Musterstadt"-Adressen durch echte Depot-Adressen aus TNV S.2:
- Depot Stadtpark: Berliner Platz 20, Nürnberg
- Depot St. Peter: Findelwiesenstr. 25, Nürnberg
- Depot Die Wiese: Wiesenstraße 19, Nürnberg
- Depot Johannis: Julienstr. 8, Nürnberg
- Depot Gostenhof: Reitackerstr. 18, Nürnberg (Warteliste)
- Depot Altenfurt: Schornbaumstraße 12, Nürnberg
- Depot AKi: Grünewaldstr. 24, Nürnberg (Zugang via Uhlandstr.)
- Depot Tataa: Marktplatz 4, Fürth
- Depot Spiegelfabrik: Dr.-Mack-Str. 42, Fürth (Warteliste)

Depot-Text anpassen (Ton A→B):
"Du bist für die Abholung verantwortlich. Nicht geschafft? Organisier eine Vertretung. Nicht abgeholtes Gemüse geht an Foodsharing."

**Step 6: Neue Section #depotstandorte einfügen**

Nach `#depots`. Verweis auf Karte:
"Alle Depots auf der Karte findest du unter Lieferung & Kalender."
Link zu `/lieferung-kalender#karte`.

**Step 7: Engagement-Section überarbeiten (#mitarbeit-engagement)**

ID von `engagement` auf `mitarbeit-engagement` ändern (Menü-Match).

Inhalt aus TNV S.4 ergänzen:
- JHV: Pflichttermin im Herbst. Konsensverfahren, verbindlich.
- Depot-Dienst: 1-2x/Jahr Aufräumen (ca. 20 Min).
- Hofaktionen: freiwillig, rechtzeitig angekündigt.

**Step 8: Neue Section #rollen einfügen**

Nach `#mitarbeit-engagement`:
- Hofbetreuer: ehrenamtlich, Ansprechpartner zwischen Hof und Ernteteilern
- Depotbetreuer: kümmert sich um Depot vor Ort
- Fahrer: Logistik-Team, Abholung ab Hof → Depots

**Step 9: Neue Section #vereinsarbeit einfügen**

Nach `#rollen`:
- Förderverein seit 2016: Transport, Öffentlichkeitsarbeit, Depots
- Mitgliedschaft optional, 1€/Monat (nicht Pflicht)
- Risikobeitrag 1,50€/M (Pflicht): 1€ Risikoabsicherung + 0,50€ Netzwerkbeitrag
- Nicht gewinnorientiert, Überschüsse werden kompensiert
- Vorstand: Sebastian Lades, Kassenwart: Andreas Gebert

**Step 10: Section Depot eröffnen (#depot-eroeffnen-anleitung, #depot-pdf)**

Tote Links (`href="#"`) ersetzen. Ehrlicher Text:
"Du möchtest ein neues Depot in deiner Nachbarschaft eröffnen? Melde dich bei uns — wir helfen dir bei den ersten Schritten."
CTA → mailto:Team.Koordination@stadt-land-beides.de

**Step 11: Preise in #hofbeteiligungen aktualisieren**

Platzhalter-Preise (45€/75€/40€) durch echte Ranges ersetzen oder Section mit der neuen Ernteanteile-Tabelle zusammenführen.

**Step 12: Build und Commit**

```bash
npm run build
git add src/app/pages/Mitmachen.tsx
git commit -m "feat: fill Mitmachen page with real TNV content

- Replace dummy prices with real TNV V9.3 data
- Replace dummy addresses with real depot locations
- Add sections: #teilnahme, #depotstandorte, #rollen, #vereinsarbeit
- Fix anchor IDs to match navigation
- Add depot-opening info with honest CTA"
```

---

## Task 3: Home.tsx — Fehlende Sections + Anker (6 MISSING)

**Files:**
- Modify: `src/app/pages/Home.tsx` (518 Zeilen → ca. 650)

**Step 1: Seite lesen, existierende Sections mit IDs versehen**

- "So funktioniert's" Section: `id="so-funktionierts"` ergänzen
- "Aktuelle Veranstaltungen" Section: `id="aktuelles"` ergänzen

**Step 2: Veraltete Inhalte korrigieren**

- Veranstaltungsdaten (15. Mrz, 22. Mrz, 5. Apr 2026) liegen in der Vergangenheit → durch ehrlichen Text ersetzen: "Termine erfährst du über unseren Newsletter und die Hof-Post."
- "Reimehof, Musterstadt" → entfernen (Hof nicht mehr dabei)
- Hof-Karten aktualisieren: Reimehof entfernen, durch aktuelle Höfe ersetzen

**Step 3: Neue Section #solawi-60-sekunden einfügen**

Nach Hero, vor "Was ist SoLaWi". 3 kompakte Blöcke:
1. "Du bezahlst den Hof, nicht das Produkt"
2. "Saisonal & regional — direkt vom Acker"
3. "Gemeinsam tragen wir das Risiko"
Kurzer Fließtext darunter.

**Step 4: Neue Section #was-bekomme-ich einfügen**

Nach "Warum mitmachen". 6 Produktkarten:
- Sommergemüse (Hederer) → Link /hoefe-und-ernteanteile#hederer-sommer
- Wintergemüse (Tristan) → Link /hoefe-und-ernteanteile#tristans-winter
- Obst (Hederer) → Link /hoefe-und-ernteanteile#hederer-obst
- Fleisch & Eier (Walz) → Link /hoefe-und-ernteanteile#walz-huhn
- Ur-Getreide (Walz) → Link /hoefe-und-ernteanteile#walz-getreide
- Bio-Beeren (Kirschgarten) → Link /hoefe-und-ernteanteile#kirschgarten-beeren

"Keine Supermarkt-Einheitskiste — sondern das, was die Natur gerade hergibt."

**Step 5: Neue Section #kosten-beitragsmodell einfügen**

Nach "So funktioniert's". Ton A→B:
- "Kein Gewinnaufschlag, keine Handelsspanne. Dein Beitrag deckt, was der Hof zum Wirtschaften braucht."
- Preisrange: ab 6,90€/M (Ur-Getreide) bis 136,20€/M (ganzer Wintergemüse-Anteil)
- Bieterrunde in 2 Sätzen
- CTA-Button → /mitmachen#ernteteile

**Step 6: Neue Section #depot-finden einfügen**

Nach #kosten-beitragsmodell. Kompakte Depot-Liste (Name + Stadtteil):
- Nürnberg: St. Peter, Stadtpark, Die Wiese, Johannis, Gostenhof, AKi, Altenfurt
- Fürth: Tataa, Spiegelfabrik
CTA → /lieferung-kalender#karte "Alle Depots auf der Karte"

**Step 7: Hof-Karten aktualisieren**

Section "Unsere Partner-Höfe": Reimehof entfernen, 4 aktuelle Höfe zeigen:
Hederer (demeter, Sommergemüse & Obst), Tristan (Bioland, Wintergemüse), Walz (demeter, Fleisch & Ur-Getreide), Kirschgarten (EU-Bio, Beeren).

**Step 8: Build und Commit**

```bash
npm run build
git add src/app/pages/Home.tsx
git commit -m "feat: add missing Home sections and fix stale content

- Add #solawi-60-sekunden, #was-bekomme-ich, #kosten-beitragsmodell, #depot-finden
- Add IDs to existing sections (#so-funktionierts, #aktuelles)
- Update partner farm cards (remove Reimehof, add Tristan/Kirschgarten)
- Replace stale event dates with honest messaging"
```

---

## Task 4: LieferungKalender.tsx — Dummies durch echte Inhalte ersetzen (4 DUMMY)

**Files:**
- Modify: `src/app/pages/LieferungKalender.tsx`

**Step 1: Veranstaltungen-Kachel (#veranstaltungen) mit echtem Text füllen**

Statt leere Kachel:
"Termine werden per Hof-Post und Newsletter kommuniziert. Die nächste Jahreshauptversammlung findet im Herbst statt — als Ernteteiler bist du zur Teilnahme eingeladen."

**Step 2: Hof- & Mitmachaktionen (#hofaktionen) mit echtem Text füllen**

"In unregelmäßigen Abständen gibt es Hofaktionen: Arbeitseinsätze, gemeinsame Treffen, den Hof und andere Ernteteiler kennenlernen. Die Teilnahme ist freiwillig und wird rechtzeitig angekündigt."

**Step 3: Anlieferungstermine (#anlieferung) — Lieferrhythmus-Tabelle**

Statt leere Kachel eine kompakte Tabelle:

| Hof | Produkt | Zyklus | Phase |
|-----|---------|--------|-------|
| Hederer | Sommergemüse | wöchentlich | Apr–Sept |
| Hederer | Obst | nach Bedarf | Jul–Dez |
| Tristan | Wintergemüse | wöchentlich/14-tägig | Okt–Mrz |
| Walz | Fleisch, Eier, Getreide | 1-2x/Monat | ganzjährig |
| Kirschgarten | Bio-Beeren | wöchentlich | Jul–Sept |

**Step 4: Kalender-Platzhalter ehrlich formulieren**

"Der interaktive Kalender wird in Kürze verfügbar sein" →
"Termine erfährst du aktuell über die Hof-Post per E-Mail. Ein gemeinsamer Kalender ist in Planung."

**Step 5: Build und Commit**

```bash
npm run build
git add src/app/pages/LieferungKalender.tsx
git commit -m "feat: replace Lieferung dummy content with real data

- Fill event/action tiles with honest descriptions
- Add delivery schedule table from TNV
- Replace calendar placeholder with honest status"
```

---

## Reihenfolge und Abhängigkeiten

```
Task 1 (Höfe)  ──┐
                  ├──→  Task 3 (Home) verlinkt auf Höfe-Anker
Task 2 (Mitmachen)┘
Task 4 (Lieferung) — unabhängig
```

**Empfohlene Reihenfolge:** Task 1 → Task 2 → Task 3 → Task 4

Task 1 und 2 können parallel bearbeitet werden (unabhängige Seiten), aber Task 3 (Home) verlinkt auf Anker aus Task 1, sollte also danach kommen. Task 4 ist vollständig unabhängig.
