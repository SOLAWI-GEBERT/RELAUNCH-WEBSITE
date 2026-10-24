# Anforderung: Webseitenentwurf auf TNV V26.4 aktualisieren

Quelle: `public/TNV_StadtLandBeides_V26_4.pdf` (Teilnahmevereinbarung V26.4, Stand 15.10.2026).
Löst `docs/anmeldung-daten-tnv-v9-3.md` ab. Die TNV ist die autoritative Quelle — bei
Abweichungen gilt sie, nicht der Code.

Umgesetzt im OpenSpec-Change `openspec/changes/update-hoefe-tnv-v26-4/`.

---

## 1. Ziel

Der Prototyp bildete den Höfe- und Ernteanteil-Bestand der TNV V9.3 ab. Die V26.4 ändert
diesen Bestand grundlegend: ein Hof fällt weg, ein Hof kommt dazu, zwei Pakete wechseln
den Hof. Der Entwurf bildet nun den Stand der V26.4 ab.

## 2. Was sich geändert hat

Belegstellen: TNV V26.4 S. 11 („Haupt-Neuerungen ab 01. Oktober 2025") und S. 13
(„Änderungshistorie").

| Hof | Prototyp (V9.3) | V26.4 | Konsequenz |
|---|---|---|---|
| Demeterhof Hederer | Sommergemüse, Obst & Säfte | raus ab 01.10.2026 | gelöscht |
| Biohof Michlbauer (Käse) | nie im Prototyp | raus ab 01.01.2026 | nichts zu tun |
| Biohof Tristan | Wintergemüse | Winter- **und** Sommergemüse | Sommergemüse neu |
| Demeterhof Walz | 5 More..-Pakete | unverändert | Preise ergänzt |
| Kirschgarten | Bio..Beeren | Beeren **und** Stein-/Kernobst | Obst neu |
| Schweigerts Hof | — | Bio..Edelpilze ab 10/2026 | Hof + Paket neu |

Das Obst-Paket verschwindet nicht, es wechselt den Hof: „Paket Obst ‚wandert' von Hederer
zum Kirschgarten über" (S. 13) und heißt dort „Stein- und Kernobst".

## 3. Entschiedene Punkte

Drei Fragen, die sich nicht aus dem PDF beantworten ließen, wurden am 2026-10-24
entschieden:

### 3.1 Zeitachse — Status-Badge pro Ernteanteil

Nicht alle Angebote sind heute buchbar. Jeder Ernteanteil trägt einen Zustand, der auf
Kachel und Detailseite sichtbar ist:

| Zustand | Gilt für | Anzeige |
|---|---|---|
| `verfuegbar` | Wintergemüse, Edelpilze, 5× Walz, Bio..Beeren | kein Badge |
| `geplant` | Tristan Sommergemüse | „ab April 2027" |
| `warteliste` | Kirschgarten Stein- & Kernobst | „Warteliste" |

Die Navigation führt alle Anteile vollständig, unabhängig vom Zustand.

Begründung Warteliste: „In der ersten Zeit sind keine neuen Ernteanteile möglich. Sobald der
Ertrag für weitere Ernteanteile reicht, wird darüber informiert." (S. 9)

### 3.2 Preise — mit Unterscheidung Bieterrunde / Festpreis

Die Zahlen stehen jetzt auf den Seiten, aufgeschlüsselt in Paketpreis, solidarischen
Beitrag und Gesamtbetrag.

Entscheidend: Die Bieterrunden-Kennzeichnung gilt **pro Variante, nicht pro Paket**. In der
TNV-Tabelle (S. 1) tragen die Normal- und Klein-Varianten bei Tristan das Kürzel `BR`, die
Studierenden-Varianten nicht.

Bieterrunden-Preise erscheinen nie als Festpreis — sie sind Richtpreise.

### 3.3 `Anmeldung.tsx` — mit aufgeräumt

Die Seite enthielt durchgehend Figma-Platzhalter („Anna Müller", „Käse von Kerschbaum",
„Depot Nordstadt", „Sommergemüse 45 €/Monat"). Paket- und Depotauswahl wurden auf die
echten V26.4-Daten umgestellt. Die erfundenen Ansprechpartner bleiben vorerst stehen, weil
die TNV keine Namen nennt — siehe offene Punkte.

## 4. Preise V26.4

Monatsbeträge pro Anteil. `BR` = Richtpreis aus der Bieterrunde, kein Festpreis.

### Biohof Tristan — Sommergemüse (S. 1), ab April 2027

| Größe | Für | Zyklus | Lieferphase | Paketpreis | Soli | Gesamt |
|---|---|---|---|---:|---:|---:|
| Normal | 2–4 Pers. | wöchentlich | April – September | 122,20 € *(BR)* | 14,00 € | **136,20 €** |
| Normal | 1–2 Pers. | 14-tägig | April – September | 61,10 € *(BR)* | 11,00 € | **72,10 €** |
| Klein | 1–2 Pers. | wöchentlich | April – September | 85,54 € *(BR)* | 14,00 € | **99,54 €** |
| Klein | 1–2 Pers. | 14-tägig | April – September | 42,35 € *(BR)* | 11,00 € | **53,35 €** |
| Normal — Studierende | | wöchentlich | April, Mai, Juni | 122,20 € | 14,00 € | **136,20 €** |
| Klein — Studierende | | wöchentlich | April, Mai, Juni | 85,54 € | 14,00 € | **99,54 €** |

### Biohof Tristan — Wintergemüse (S. 1)

| Größe | Für | Zyklus | Lieferphase | Paketpreis | Soli | Gesamt |
|---|---|---|---|---:|---:|---:|
| Normal | 2–4 Pers. | wöchentlich | Oktober – März | 122,20 € *(BR)* | 14,00 € | **136,20 €** |
| Normal | 1–2 Pers. | 14-tägig | Oktober – März | 61,10 € *(BR)* | 11,00 € | **72,10 €** |
| Klein | 1–2 Pers. | wöchentlich | Oktober – März | 85,54 € *(BR)* | 14,00 € | **99,54 €** |
| Klein | 1–2 Pers. | 14-tägig | Oktober – März | 42,35 € *(BR)* | 11,00 € | **53,35 €** |
| Normal — Studierende | | wöchentlich | Nov., Dez., Jan. | 94,00 € | 14,00 € | **108,00 €** |
| Klein — Studierende | | wöchentlich | Nov., Dez., Jan. | 65,75 € | 14,00 € | **79,75 €** |

Die kleine Paketgröße entspricht ca. 2/3 des normalen Pakets (ca. 60–70 % laut S. 6).
Studierenden-Pakete laufen über 3 Monate; vom 23.12. bis 07.01. keine Lieferung. Bei
Studierenden-Paketen ist kein Probemonat möglich (S. 13).

### Schweigerts Hof — Bio..Edelpilze (S. 2), verfügbar

| Größe | Zyklus | Lieferphase | Paketpreis | Soli | Gesamt |
|---|---|---|---:|---:|---:|
| 600 g | wöchentlich | ganzjährig | 55,56 € | 3,00 € | **58,56 €** |
| 600 g | 14-tägig | ganzjährig | 27,78 € | 2,00 € | **29,78 €** |
| 300 g | wöchentlich | ganzjährig | 27,78 € | 3,00 € | **30,78 €** |
| 300 g | 14-tägig | ganzjährig | 13,89 € | 2,00 € | **15,89 €** |

### Demeterhof Walz (S. 2), alle verfügbar

| Paket | Zyklus | Lieferphase | Paketpreis | Soli | Gesamt |
|---|---|---|---:|---:|---:|
| More..Huhn | 2x pro Monat | ganzjährig | 15,00 € | 2,90 € | **17,90 €** |
| More..Bratgockerl | 1x pro 4 Monate | ganzjährig | 8,00 € | 1,00 € | **9,00 €** |
| More..Hack | 1x pro Monat | ganzjährig | 10,00 € | 1,40 € | **11,40 €** |
| More..Wurst | 1x pro Monat | ganzjährig | 15,00 € | 2,00 € | **17,00 €** |
| More..Ur-Getreide | 1x pro Monat | ganzjährig | 6,00 € | 0,90 € | **6,90 €** |

Bei einem Probemonat für More..Bratgockerl sind immer 4 Anteile einzutragen (S. 11).

### Kirschgarten (S. 2)

| Paket | Zyklus | Lieferphase | Paketpreis | Soli | Gesamt | Status |
|---|---|---|---:|---:|---:|---|
| Bio..Beeren | wöchentlich | Juli – September | 35,00 € | 3,00 € | **38,00 €** | verfügbar |
| Stein- & Kernobst | unregelmäßig | Juli – Dezember | 37,00 € | 2,50 € | **39,50 €** | Warteliste |

Beeren: Lieferzeitraum ca. Mitte Juni bis Mitte Oktober, Zahlzeitraum Juli bis September.
Max. 30 Anteile, Einstieg spätestens 1. Juli, Anmeldeschluss 15. des Vormonats, Anmeldung
am besten schon zum 1. Juni (S. 9).

### Vereinsbeitrag

1,50 €/Monat pro Ernteteiler:in, verpflichtend (Risikobeitrag 1,00 € + Netzwerkbeitrag
0,50 €). Wird nur einmal erhoben, auch bei mehreren Teilnahmevereinbarungen (S. 2, S. 13).

Wird als eigener Posten neben den Paketpreisen geführt.

## 5. Umsetzung

### 5.1 Datenmodell

`src/app/data/ernteanteile.ts` ist die einzige Quelle für Ernteanteile, Preise und
Verfügbarkeit.

```
Ernteanteil
  slug            Routen-Segment unter /ernteanteile/
  titel           Anzeigename
  hof             Schlüssel in hoefe.ts
  kategorie       Gemüse | Pilze | Obst | Beeren | Getreide | Eier | Fleisch
  kurz            ein Satz für Kacheln und Navigation
  verfuegbarkeit  { verfuegbar } | { geplant, ab } | { warteliste }
  varianten       Variante[]

Variante
  groesse, fuer?, zyklus, lieferphase
  paketpreis, soli            Zahlen; gesamt = paketpreis + soli
  bieterrunde?                true = Richtpreis, kein Festpreis
  hinweis?                    Fußnote zur Variante
```

`nachKategorie()` liefert die gruppierte Struktur für Übersichtsseite und Navigation.

`src/app/data/hoefe.ts`: `hederer` entfernt, `schweigerts` ergänzt, `tristan` nach TNV
S. 6 aktualisiert (Bioland-zertifiziert, 35 ha, Vermarktung über SoLawi, Märkte und
Hofladen).

### 5.2 Seiten

| Aktion | Datei | Route |
|---|---|---|
| gelöscht | `ernteanteile/HedererSommergemuese.tsx` | `/ernteanteile/hederer-sommer` |
| gelöscht | `ernteanteile/HedererObst.tsx` | `/ernteanteile/hederer-obst` |
| neu | `ernteanteile/TristanSommergemuese.tsx` | `/ernteanteile/tristan-sommer` |
| neu | `ernteanteile/SchweigertsEdelpilze.tsx` | `/ernteanteile/schweigerts-edelpilze` |
| neu | `ernteanteile/KirschgartenObst.tsx` | `/ernteanteile/kirschgarten-obst` |
| geändert | `ernteanteile/TristansWintergemuese.tsx` | Preise statt TNV-Verweis |
| geändert | `ernteanteile/KirschgartenBeeren.tsx` | Preise statt TNV-Verweis |
| geändert | 5× `ernteanteile/Walz*.tsx` | Preise statt TNV-Verweis |

Die bisherige Route `/ernteanteile/tristans-winter` wurde zu
`/ernteanteile/tristan-winter`, damit die Slugs einem Muster folgen. Keine Redirects — der
Prototyp ist nicht veröffentlicht.

Neue Komponenten: `VerfuegbarkeitsBadge.tsx` und `PreisTabelle.tsx`.

### 5.3 Referenzstellen

- `components/Navigation.tsx`
- `pages/Ernteanteile.tsx`
- `pages/Home.tsx`
- `pages/SolidarischeLandwirtschaft.tsx`
- `pages/Depots.tsx`
- `pages/Kalender.tsx`
- `pages/Anmeldung.tsx`
- `routes.tsx`

`pages/Depots.tsx` stimmte bei den **Depots** bereits exakt mit S. 3 überein, inklusive der
beiden Wartelisten-Depots Gostenhof und Spiegelfabrik. Dort wurde nur die Hof-Liste
geändert.

### 5.4 Verifikation

```
grep -rn "Hederer\|hederer-sommer\|hederer-obst\|tristans-winter" src/
npx tsc --noEmit
npm run build
```

## 6. Festgehaltene Annahmen

| Annahme | Begründung |
|---|---|
| Schreibweise bleibt `More..Ur-Getreide` | Die TNV ist bei sich selbst uneins: S. 2 „More..Urgetreide", S. 8 „More...Ur-Getreide". Der Prototyp-Stand bleibt. |
| Keine Redirects für alte Routen | Prototyp, nicht veröffentlicht, keine SEO-Last. |
| Pilz-Icon = `Soup` aus lucide | lucide-react 0.487 hat kein `Mushroom` — geprüft. |
| Ansprechpartner auf `/anmeldung` bleiben Platzhalter | Die TNV nennt keine Namen. |

## 7. Offene Punkte

1. **Echtes Bildmaterial für den Schweigerts Hof.** `public/fotos/` hatte kein Material für
   diesen Hof; die Bestandsbilder (`lillinghof-*`, `reimehof-*`, `vollandhof-*`) sind
   erkennbar Fremdmaterial anderer Betriebe. In der TNV (S. 10) stecken ein Porträt von
   Annabelle und Thomas Schweigert sowie das Hoflogo. Bis echtes Material vorliegt,
   verwendet die Website kein Foto, das fälschlich als Schweigerts-Hof ausgegeben wird.
2. **Ansprechpartner auf `/anmeldung`.** Wer steht für Mitgliederbetreuung, Depotkoordination
   und allgemeine Fragen? Einzige belegte Adresse: `Team.Koordination@stadt-land-beides.de`.
3. **Sortiment Tristan Sommergemüse.** S. 6 beschreibt die Kisteninhalte gemeinsam für
   Sommer und Winter. Ob für das Sommerpaket ein eigenes Sortiment kommuniziert wird, ist
   mit dem Hof abzustimmen.
4. **Hoffotos allgemein.** `lillinghof-*`, `reimehof-*` und `vollandhof-*` gehören zu Höfen,
   die nicht (mehr) Partner sind.

## 8. Bezüge

- `public/TNV_StadtLandBeides_V26_4.pdf` — autoritative Quelle
- `docs/anmeldung-daten-tnv-v9-3.md` — Vorgängerfassung
- `docs/styleguide.md` — Typo-Skala, gilt unverändert
- `openspec/changes/update-hoefe-tnv-v26-4/` — OpenSpec-Change mit Proposal, Specs, Design,
  Tasks
