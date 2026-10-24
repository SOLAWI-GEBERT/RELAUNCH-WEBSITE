# Datenvorlage für das Refactoring von `/anmeldung`

Quelle: `public/TNV_StadtLandBeides_V9_3_2026.pdf` (Teilnahmevereinbarung V9.3, Stand 11.01.2026).
Die TNV ist die autoritative Quelle — bei Abweichungen gilt sie, nicht der Code.

Die Seite `src/app/pages/Anmeldung.tsx` enthält derzeit durchgehend Platzhalterdaten aus dem
Figma-Make-Export (erfundene Ansprechpartner, erfundene Höfe, erfundene Depots, erfundene Preise).
Dieses Dokument hält die echten Daten fest, damit das Refactoring nicht erneut aus dem PDF
rekonstruiert werden muss.

---

## 1. Ernteanteile

Paketpreis = Anteil der Bäuerin/des Bauern. Solidarischer Beitrag = Logistik, Depot-Miete, Transport.
Gesamtbetrag gilt pro Anteil und Monat.

| # | Hof | Gruppe/Paket | Lieferzyklus | Lieferphase | Paketpreis | Soli-Beitrag | Gesamt/Monat |
|---|-----|--------------|--------------|-------------|-----------:|-------------:|-------------:|
| 1 | Biohof Tristan | Gemüse Winter – Ganzer Anteil | wöchentlich | Okt–Mrz | 121,01 € *(BR)* | 14,00 € | **135,01 €** |
| 2 | Biohof Tristan | Gemüse Winter – Halber Anteil | 14-tägig | Okt–Mrz | 60,50 € *(BR)* | 7,00 € | **67,50 €** |
| 3 | Biohof Tristan | Gemüse Winter – Kleiner Anteil | wöchentlich | Okt–Mrz | 84,70 € *(BR)* | 14,00 € | **98,70 €** |
| 4 | Demeterhof Hederer | Gemüse Sommer | wöchentlich | Apr–Sept | 105,00 € *(BR)* | 23,00 € | **128,00 €** |
| 5 | Demeterhof Hederer | Obst & Säfte | nach Bedarf | Jul–Dez | 37,00 € | 2,50 € | **39,50 €** |
| 6 | Demeterhof Walz | More..Huhn | 2x pro Monat | ganzjährig | 15,00 € | 2,90 € | **17,90 €** |
| 7 | Demeterhof Walz | More..Bratgockerl | 1x pro 4 Monate | ganzjährig | 8,00 € | 1,00 € | **9,00 €** |
| 8 | Demeterhof Walz | More..Hack | 1x pro Monat | ganzjährig | 10,00 € | 1,40 € | **11,40 €** |
| 9 | Demeterhof Walz | More..Wurst | 1x pro Monat | ganzjährig | 15,00 € | 2,00 € | **17,00 €** |
| 10 | Demeterhof Walz | More..Ur-Getreide | 1x pro Monat | ganzjährig | 6,00 € | 0,90 € | **6,90 €** |
| 11 | Kirschgarten | Bio..Beeren | wöchentlich | Jul–Sept | 35,00 € | 3,00 € | **38,00 €** |

**(BR) = Bieter-Runde.** Der tatsächliche Beitrag wird in der Bieter-Runde bestimmt; die Zahl ist ein
Richtpreis. Auf der Website deshalb nie als Festpreis darstellen.

**Richtpreis-Änderung Biohof Tristan ab Okt. 2026:** Ganzer Anteil 122,20 € + 14,00 € = 136,20 €;
Halber Anteil 61,10 € + 11,00 € = 72,10 €; Kleiner Anteil 85,54 € + 14,00 € = 99,54 €.

**Anteilsgrößen Tristan:** Ganzer Anteil für 2–4 Menschen (wöchentlich voller Inhalt), Halber Anteil
für 1–2 Menschen (14-tägig voller Inhalt), Kleiner Anteil für 1–2 Menschen (wöchentlich ca. 60–70 %
des ganzen Anteils).

## 2. Pflicht- und Zusatzbeiträge

| Beitrag | Betrag | Hinweis |
|---------|-------:|---------|
| Risiko-/Netzwerkbeitrag | 1,50 €/Monat | Pflicht, aber **nur einmal pro Ernteteiler:in** — auch bei mehreren TNV |
| Vereinsmitgliedschaft | ab 1,00 €/Monat | optional, Betrag frei wählbar |
| Fördermitgliedschaft | ab 2,00 €/Monat | für Teilnehmende **ohne** Ernteanteil |
| Zuschlag Probemonat | 5,00 € einmalig | **pro Hof**, nicht pro Ernteanteil |

## 3. Einstiegspunkte und Probemonat

| Ernteanteil | Einstiegspunkte | Probemonat | Anteile begrenzt auf |
|-------------|-----------------|------------|---------------------:|
| Gemüse Sommer (Hederer) | 01.04., 01.06., 01.08. | nur als Probe-**Doppel**monat | 80 |
| Obst & Säfte (Hederer) | 01.07., 01.10. | nicht vorgesehen | 35 |
| Gemüse Winter (Tristan) | jeden Monat zum 1. (Okt–Mrz) | ja | — |
| More..* (Walz) | zum 1. eines Monats | ja; bei Bratgockerl immer **4 Anteile** | — |
| Bio..Beeren (Kirschgarten) | 01.07., 01.08., 01.09. — Anmeldeschluss jeweils 15. des Vormonats | — | 30 |

Ein Ernteanteil startet immer zum 1. eines Monats; es werden 2–3 Wochen Vorlauf benötigt.
Ein Probemonat verlängert sich **nicht** automatisch.

## 4. Depots

Das Auswahlfeld auf `/anmeldung` muss genau diese neun Depots anbieten.
Adressen und Öffnungszeiten stehen bereits korrekt in `src/app/pages/Depots.tsx`.

| Depot | Ort | Adresse | Status |
|-------|-----|---------|--------|
| Depot Stadtpark | Nürnberg | Berliner Platz 20, 90489 | frei |
| Depot St. Peter | Nürnberg | Findelwiesenstraße 25 | frei |
| Depot Die Wiese | Nürnberg | Wiesenstraße 19, 90443 | frei |
| Depot Altenfurt | Nürnberg | Schornbaumstraße 12 | frei |
| Depot Johannis | Nürnberg | Julienstr. 8, 90419 | frei |
| Depot AKi | Nürnberg | Grünewaldstr. 24 (Zugang via Uhlandstr.) | frei |
| Depot Gostenhof | Nürnberg | Reitackerstr. 18 | **Warteliste** |
| Depot Tataa | Fürth | Marktplatz 4 | frei |
| Depot Spiegelfabrik | Fürth | Dr.-Mack-Str. 42 | **Warteliste** |

Selbstabholer:innen tragen das in das Bemerkungsfeld ein.

## 5. Konditionen

- **Wirtschaftsjahr:** 01.04. bis 31.03. des Folgejahres, immer 12 Monate.
- **Kündigung:** bis spätestens 31.12. zum 31.03. des laufenden Wirtschaftsjahres, schriftlich per
  Post oder E-Mail. Ohne Kündigung verlängert sich der Ernteanteil automatisch um ein Jahr.
  Teilkündigung einzelner Anteile ist möglich.
- **Zahlung:** SEPA-Lastschrift, Einzug normalerweise bis zum 7. des Monats.
  Gläubiger-ID DE83ZZZ00001981737. Überweisung nur nach Rücksprache.
- **Abholung:** Ernteteiler:innen sind selbst verantwortlich; Öffnungszeiten und Fristen des Depots
  beachten. Nicht abgeholte Anteile gehen an Foodsharing.
- **Kontakt:** Team.Koordination@stadt-land-beides.de — es gibt **keine** personalisierten
  Ansprechpartner-Adressen.
- **Verein:** Solidarische Landwirtschaft Stadt, Land, Beides e.V., Findelwiesenstr. 25,
  90478 Nürnberg. Vorstand Sebastian Lades, Kassenwart Andreas Gebert.

## 6. Was auf `/anmeldung` konkret ersetzt werden muss

| Zeile in `Anmeldung.tsx` | Aktuell (erfunden) | Muss werden |
|--------------------------|--------------------|-------------|
| 74–128 | Anna Müller, Michael Schmidt, Sarah Weber mit Telefonnummern „0123 – 456 789 0x“ | Team.Koordination@stadt-land-beides.de als einziger Kontakt |
| 253–254 | „Sommergemüse (45 €/Monat) – Mai bis Oktober – Reimehof“ | Gemüse Sommer, Demeterhof Hederer, Apr–Sept, Richtpreis 128,00 € |
| 267–268 | „Wintergemüse (40 €/Monat) – November bis April – Biohof Walz“ | Gemüse Winter, **Biohof Tristan**, Okt–Mrz, drei Anteilsgrößen |
| 282–285 | „Ganzjahrespaket (75 €/Monat) – Empfohlen“ | gibt es nicht — streichen |
| 295 | „Obst vom Hederer (20 €/Monat)“ | Obst & Säfte, 39,50 €/Monat |
| 299 | „Käse von Kerschbaum (15 €/Monat)“ | gibt es nicht — durch die fünf More..-Anteile ersetzen |
| 303 | „Eier Gallini Fellici (8 €/Monat)“ | More..Huhn, 17,90 €/Monat |
| 322–326 | Depot Innenstadt / Nordstadt / Südviertel / Westend / Altstadt | die neun echten Depots aus Abschnitt 4 |
| 354 | `href="#"` | `/TNV_StadtLandBeides_V9_3_2026.pdf` |
| 413–415 | „Sommergemüse startet im Mai, Wintergemüse im November“ | Einstiegspunkte aus Abschnitt 3 |
| 422–424 | „6 Monate Saison, 4 Wochen Kündigungsfrist, Ganzjahrespaket 8 Wochen“ | Wirtschaftsjahr und Kündigung aus Abschnitt 5 |
| 8–11, 392 | `handleSubmit` setzt nur State, Button „Verbindlich anmelden“, Text „Bestätigungsmail“ | Es gibt kein Backend. Der echte Weg ist TNV-PDF ausfüllen und per E-Mail schicken — vgl. `/so-funktionierts` |

Die Risikobeiträge und die Probemonat-Regel fehlen im Formular bisher vollständig.
