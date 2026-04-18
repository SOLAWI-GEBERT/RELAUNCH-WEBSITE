# Design: Menü-Inhalt-Abgleich

Stand: 2026-04-18

## Problem

23 von 38 Menülinks zeigen auf nicht existierende Anker oder Sections. 4 weitere sind Dummies. Die Navigation verspricht Inhalte, die die Seiten nicht liefern.

## Tonalität

Zwei Modi je nach Zielgruppe der Section:

- **Ton A (Einladung):** Für Einsteiger und erste Information. Solawi-Perspektive. Nicht "Das kostet X" sondern "Dein Beitrag deckt, was der Hof zum Wirtschaften braucht." Persönlich, du-Ansprache, Sinn vor Zahl.
- **Ton B (Transparenz):** Für Insider-Themen, wo Fakten gebraucht werden. Tabellen, Preise, Fristen — klar und direkt. Dinge dürfen freundlich wiederholt werden.

Datengrundlage: TNV V9.3 (infos/TNV_StadtLandBeides_V9_3_2026.pdf) und SP Page Builder Export (export_origin/Landing_page.json).

---

## 1. Höfe & Ernteanteile — 9 MISSING

Kernseite. Entscheidet, ob jemand Ernteteiler wird.

### Struktur pro Hof (wiederkehrend)

```
Hof-Header (Name, Zertifizierung-Badge, Standort)
├─ Intro (2-3 Sätze, Ton A: wer ist dieser Mensch/Hof)
├─ Ernteanteile (Sub-Sections mit Anker)
│   ├─ Was bekomme ich? (saisonale Inhalte)
│   ├─ Lieferzyklus & Zeitraum
│   └─ Beitrag (Paketpreis + Solidarischer Beitrag = Gesamt)
├─ Probemonat / Einstieg
└─ Kommunikation (Hof-Post, WhatsApp/Signal)
```

### Konkrete Sections

**Demeterhof Hederer** `#hederer`
- `#hederer-sommer` — Sommergemüse: 105€ + 23€ Logistik = 128€/M. Wöchentlich Apr–Sept. Für 1-2 Personen. Einstiegspunkte: 01.04., 01.06., 01.08. Max 80 Anteile. Probemonat nur als Doppelmonat.
- `#hederer-obst` — Obst & Säfte: 37€ + 2,50€ = 39,50€/M. Nach Bedarf Jul–Dez. Äpfel, Kirschen, Zwetschgen, Walnüsse etc. Einstieg: 01.07., 01.10. Max 35 Anteile. Kein Probemonat.
- Intro Ton A: Heribert Hederer, seit 2001 in Uffenheim, 20 Jahre Demeter-Erfahrung, vier Gewächshäuser.
- Bieterrunde erklären (TNV S.6).
- Quelle: TNV S.6

**Biohof Tristan** `#tristans` — FEHLT KOMPLETT
- `#tristans-winter` — Wintergemüse, 3 Varianten:
  - Ganzer Anteil (2-4 Pers.): 122,20€ + 14€ = 136,20€/M, wöchentlich
  - Halber Anteil (1-2 Pers.): 61,10€ + 11€ = 72,10€/M, 14-tägig
  - Kleiner Anteil (1-2 Pers.): 85,54€ + 14€ = 99,54€/M, wöchentlich
  - Okt–Mrz. Probemonat jeden Monat zum 1. möglich.
- Intro Ton A: Hofstelle in Emskirchen/Gunzendorf, 2017 übernommen, Bioland, 35 ha, bunte Anbaupalette. Aktuell 40 Ernteteiler + 10 im UKAMA.
- Kisteninhalte Winter: Spinat, Salate, Kräuter (Folienhaus), Lauch, Rosenkohl, Palmkohl (Feld), Karotten, Pastinaken, Bete, Kraut, Zwiebeln, Kürbis, Kartoffeln (Lager).
- Kommunikation: 2 Tage vor Abholung Mail, am Abholtag WhatsApp/Signal.
- Quelle: TNV S.5

**Demeterhof Walz** `#walz`
- `#walz-huhn` — More..Huhn: 15€ + 2,90€ = 17,90€/M. 2x/Monat, ganzjährig. Eier + anteilmäßig Bruderhahn/Suppenhenne/Bolognese. Ganzheitliche Verantwortung für Henne, Bruder und Ei.
- `#walz-getreide` — More..Ur-Getreide: 6€ + 0,90€ = 6,90€/M. 1x/Monat, ganzjährig. 1kg/Monat individuell zusammenstellbar (Mehl, Reis, Nudeln). Sorten: Schwarzes Einkorn, Sommeremmer, Weißer Urdinkel etc.
- Weitere Sub-Sections (ohne eigenen Menülink, aber auf der Seite):
  - More..Bratgockerl: 8€ + 1€ = 9€/M. 1x/4 Monate (1 Anteil). Freilandhaltung. Bei Probemonat immer 4 Anteile.
  - More..Hack: 10€ + 1,40€ = 11,40€/M. 500g/Monat. Aberdeen Angus, Weidehaltung, Muttertierhaltung, nur Raufutter.
  - More..Wurst: 15€ + 2€ = 17€/M. 500g/Monat. Salami, Rinderschinken, Wienerle, Bratwürste etc.
- Intro Ton A: Familienbetrieb in Schäflohe bei Amberg, Demeter, Kreislaufgedanke. "Wir möchten die Tiere in ihrer Ganzheit betrachten."
- Quelle: TNV S.7

**Kirschgarten** `#kirschgarten` — FEHLT KOMPLETT
- `#kirschgarten-beeren` — Bio..Beeren: 35€ + 3€ = 38€/M. Wöchentlich Jul–Sept (Zahlung 3 Monate). 200-400g/Lieferung. Max 30 Anteile. Einstieg: 01.07., 01.08., 01.09.
- Intro Ton A: Ganz neu bei SLB. Verein pachtet seit 2023 Grundstück bei Igensdorf. Bio-zertifiziert seit 2019, Mischkultur, extensiv. Johannisbeeren, Himbeeren, Stachelbeeren, Brombeeren, Jostabeeren, Aronia etc.
- Naturnahe Hecken, Totholzriegel, insektenschonendes Mähen — Beitrag zur Biodiversität.
- Quelle: TNV S.8

**Gallini Fellici** `#gallini-fellici` — Hofkooperation
- Kein regulärer Ernteanteil. Gelegentliche Sammelbestellungen (z.B. Orangen aus Italien).
- Kurzer Block Ton A: "Hin und wieder organisieren wir Sammelbestellungen bei befreundeten Höfen — zum Beispiel Orangen von Gallini Fellici in Italien."

### Zu entfernen
- Schallerhof (nicht mehr dabei)
- Reimehof/Michlbauer (seit 01.01.2026 nicht mehr dabei)

---

## 2. Mitmachen — 8 MISSING

Beantwortet "Ich will dabei sein — wie genau?"

### Sections

**#ueberblick** — "So wirst du Ernteteiler" (Ton A)
- 3-4 Schritte visuell: Höfe ansehen → Ernteanteil wählen → TNV ausfüllen → Depot abholen
- Nur Anker-ID fehlt, Section existiert inhaltlich.

**#ernteteile** — Ernteanteil-Übersichtstabelle (Ton B)
- Existiert mit Dummy-Zahlen ("12 frei", "8 frei"). Ersetzen durch echte Tabelle aus TNV S.1:
  Hof | Produkt | Zyklus | Phase | Paketpreis | Solidarischer Beitrag | Gesamt
- Erklärung Bieterrunde (Ton A): "Ihr entscheidet gemeinsam bei der Jahreshauptversammlung..."
- Hinweis: Preise mit BR) sind Richtpreise, Bieterrunde bestimmt den tatsächlichen Beitrag.

**#teilnahme** — Laufzeit / Wechsel / Kündigung (Ton B, freundlich)
- Wirtschaftsjahr: 01.04.–31.03. (12 Monate)
- Wintergemüse / Sommergemüse: jeweils 6 Monate
- Automatische Verlängerung wenn nicht bis 31.12. gekündigt
- Kündigung schriftlich per Post oder E-Mail
- Teilkündigung einzelner Anteile möglich
- Ausnahme bei schwerwiegenden Gründen (z.B. Umzug)
- Ton A-Einleitung: "So kann der Hof sicher planen — und du bekommst ein ganzes Jahr lang frische Lebensmittel."
- Quelle: TNV S.9

**#depots** — Regeln & Ablauf (Ton A→B)
- Existiert, aber mit Dummy-Adressen ("Musterstadt"). Echte Daten einsetzen.
- "Du bist für die Abholung verantwortlich. Nicht geschafft? Organisier eine Vertretung."
- Öffnungszeiten und Fristen beachten.
- Nicht Abgeholtes geht an Foodsharing.
- Quelle: TNV S.4

**#depotstandorte** — Karte + Depotliste
- Verweis auf /lieferung-kalender#karte (Karte nicht duplizieren)
- Kompakte Liste: Depot | Adresse | Stadtteil
- Warteliste-Hinweis für Gostenhof und Spiegelfabrik
- Quelle: TNV S.2

**#mitarbeit-engagement** — Was kann ich tun? (Ton A)
- Nicht verpflichtend, aber willkommen.
- JHV: Pflichttermin im Herbst. "Dort lernst du unsere Landwirte kennen, blickst auf den vergangenen Zeitraum zurück und planst zusammen das neue Jahr."
- Konsensverfahren: Entscheidungen sind für alle verbindlich.
- Depot-Dienst: 1-2x/Jahr Aufräumen und Reinigen (ca. 20 Min).
- Hofaktionen: freiwillig, rechtzeitig angekündigt.
- Quelle: TNV S.4

**#rollen** — Hofbetreuer / Depotbetreuer / Fahrer (Ton B)
- Kurze Rollenbeschreibungen.
- Hofbetreuer: ehrenamtlicher Ansprechpartner zwischen Hof und Ernteteilern
- Depotbetreuer: kümmert sich um das Depot vor Ort
- Fahrer: Logistik-Team, holt Ernteanteile ab Hof und liefert in die Depots
- Quelle: Export + TNV allgemein

**#vereinsarbeit** — Der Verein (Ton A→B)
- Förderverein seit 2016, kümmert sich um Infrastruktur: Transport, Öffentlichkeitsarbeit, Depots.
- Mitgliedschaft optional (1€/Monat), nicht Pflicht für Ernteteiler.
- Vorstand: Sebastian Lades, Kassenwart: Andreas Gebert.
- Risikobeitrag/Netzwerkbeitrag: 1,50€/Monat (1€ Risikoabsicherung + 0,50€ Netzwerkbeitrag), Pflicht für alle Ernteteiler.
- Vereinsbudget: nicht gewinnorientiert, Überschüsse werden im Folgejahr kompensiert.
- Quelle: TNV S.9, S.11

**#depot-eroeffnen-anleitung** + **#depot-pdf** — Depot eröffnen
- Schritt-für-Schritt-Anleitung (Inhalt aus Export falls vorhanden, sonst Platzhalter mit ehrlichem Text: "Interesse? Melde dich bei uns.")
- PDF-Download-Link falls vorhanden.

---

## 3. Home (Startseite) — 6 MISSING

Gibt Vorgeschmack, verlinkt tiefer. Kein Detail wiederholen.

### Fehlende IDs für existierende Sections
- `id="so-funktionierts"` ergänzen
- `id="aktuelles"` ergänzen

### Neue Sections

**#solawi-60-sekunden** — nach Hero (Ton A)
- 3 kompakte Blöcke mit Icon:
  - "Du bezahlst den Hof, nicht das Produkt"
  - "Saisonal & regional — direkt vom Acker"
  - "Gemeinsam tragen wir das Risiko"
- 2-3 Sätze Fließtext darunter.

**#was-bekomme-ich** — Produktkategorien visuell (Ton A)
- 6 Karten: Sommergemüse | Wintergemüse | Obst | Fleisch & Eier | Ur-Getreide | Bio-Beeren
- Je mit Hof-Name und Link zu /hoefe-und-ernteanteile#...
- "Keine Supermarkt-Einheitskiste — sondern das, was die Natur gerade hergibt."

**#kosten-beitragsmodell** — "Was kostet das?" (Ton A→B)
- Einstieg Ton A: "Kein Gewinnaufschlag, keine Handelsspanne."
- Preisrange: ab 6,90€/M (Ur-Getreide) bis 136,20€/M (ganzer Gemüseanteil)
- Bieterrunde in 2 Sätzen
- CTA → /mitmachen#ernteteile

**#depot-finden** — Depot-Kurzliste (Ton A)
- Name + Stadtteil, kompakt
- CTA → /lieferung-kalender#karte

---

## 4. Lieferung & Kalender — 4 DUMMY

### Änderungen

**#veranstaltungen** — Statt leere Kachel:
- "Termine werden per Hof-Post und Newsletter kommuniziert. Die nächste JHV findet im Herbst statt."

**#hofaktionen** — Hof- & Mitmachaktionen:
- "Arbeitseinsätze, gemeinsame Treffen, den Hof kennenlernen. Freiwillig und rechtzeitig angekündigt."
- Quelle: TNV S.4

**#anlieferung** — Lieferrhythmus-Tabelle statt leere Kachel:
- Hof | Zyklus | Phase (aus TNV S.1)

**Kalender-Platzhalter** — Ehrlich:
- "Termine erfährst du aktuell über die Hof-Post per E-Mail. Ein gemeinsamer Kalender ist in Planung."

---

## 5. Kontakt — komplett, keine Änderungen nötig

---

## Nicht im Scope

- Routen ohne Menüeintrag (SolidarischeLandwirtschaft, Kalender, Anmeldung) — werden separat geklärt.
- Backend/Formulare — kein Backend vorhanden, Formulare bleiben clientseitig.
- Interaktiver Kalender — als Platzhalter mit ehrlichem Text.
