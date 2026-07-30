# Seiten-Katalog

Übersicht aller aktuell im Router (`src/app/routes.tsx`) registrierten Seiten, Stand 2026-07-30.

## Im Hauptmenü verlinkt

| Route | Komponente | Kurzbeschreibung | Abschnitte (Anker) |
|---|---|---|---|
| `/` | `Home.tsx` | Startseite mit Überblick über die SoLaWi | `solawi-60-sekunden`, `was-bekomme-ich` |
| `/hoefe-und-ernteanteile` | `HoefeUndErnteanteile.tsx` | Vorstellung der beteiligten Höfe und ihrer Ernteanteile | `hederer` (Sommergemüse & Obst), `tristans` (Wintergemüse), `walz` (Fleisch, Eier & Ur-Getreide), `kirschgarten` (Bio-Beeren), `gallini-fellici` (Kooperation) |
| `/mitmachen` | `Mitmachen.tsx` | Zentrale Seite zum Mitgliedwerden: Beitrag, Depots, Engagement, Gemeinschaft | `ueberblick`, `ernteteile`, `teilnahme`, `depots`, `erwartungen`, `mitarbeit-engagement`, `termine`, `kontakt`, `rollen`, `vereinsarbeit` |
| `/lieferung-kalender` | `LieferungKalender.tsx` | Depot-Karte, Öffnungszeiten, Lieferrhythmus, FAQ für Ernteteiler | `karte`, `depots`, `lieferung`, `anlieferung`, `faq` |
| `/kontakt-anmeldung` | `KontaktAnmeldung.tsx` | Anmeldeformular + Kontaktformular + Ansprechpartner | `anmeldung`, `kontakt`, `ansprechpartner` |

## Registriert, aber nicht im Hauptmenü (nur intern verlinkt)

| Route | Komponente | Kurzbeschreibung | Verlinkt von |
|---|---|---|---|
| `/solidarische-landwirtschaft` | `SolidarischeLandwirtschaft.tsx` | Erklärt das SoLaWi-Konzept allgemein (Leitbild, weltweite Bewegung, Netzwerk) | Footer, Home.tsx, Mitmachen.tsx |
| `/anmeldung` | `Anmeldung.tsx` | Eigenständiges Anmeldeformular (separat von `/kontakt-anmeldung#anmeldung`) | Home.tsx, Mitmachen.tsx |

## Registriert, noch ohne Verlinkung (Link folgt später)

| Route | Komponente | Kurzbeschreibung |
|---|---|---|
| `/so-funktionierts` | `SoFunktionierts.tsx` | Ablauf in 3 Schritten (Ernteanteil wählen, Depot auswählen, Genießen & mitmachen) — am 2026-07-30 aus der Startseite ausgelagert, noch nicht im Menü verlinkt |
| `/haeufige-fragen` | `HaeufigeFragen.tsx` | Einsteiger-FAQ als Accordion (Was ist Solawi, Unterschied zu Bio-Markt/Abo-Kiste, Besonderheit von SLB, mehrere Landwirte) — am 2026-07-30 aus der Startseite ausgelagert, noch nicht im Menü verlinkt |

## Registriert, aktuell nirgends verlinkt (Legacy/Waise)

| Route | Komponente | Kurzbeschreibung |
|---|---|---|
| `/kalender` | `Kalender.tsx` | Veranstaltungskalender — kein Link mehr im Code gefunden, evtl. Altlast |

## Rechtliches (im Footer)

| Route | Komponente | Kurzbeschreibung |
|---|---|---|
| `/impressum` | `Impressum.tsx` | Impressum |
| `/datenschutz` | `Datenschutz.tsx` | Datenschutzerklärung (DSGVO) |

---

**Hinweis:** Der CTA-Menüpunkt "Ernteteiler werden" wurde am 2026-07-30 aus der Hauptnavigation entfernt (Desktop + Mobile), verlinkte aber auf `/kontakt-anmeldung#anmeldung` — diese Seite existiert weiterhin.

**Hinweis:** Der Abschnitt "Was kostet das?" wurde am 2026-07-30 ersatzlos von der Startseite entfernt (inkl. Menüpunkt) — ausführliche Kosteninfos gibt es weiterhin unter `/mitmachen#ernteteile`.

**Hinweis:** Die Abschnitte "Depot in deiner Nähe" und "Aktuelles" wurden am 2026-07-30 ersatzlos von der Startseite entfernt (inkl. Menüpunkte). Der Depot-Hinweis (Nürnberg, Fürth) lebt als vierte Kachel in "Warum mitmachen?" weiter; Depot-Details gibt es weiterhin unter `/lieferung-kalender#karte`.
