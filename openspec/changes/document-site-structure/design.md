# Design

## Context

Die Website ist ein reiner Client-Prototyp (React + React Router, keine API, kein CMS). Die Informationsstruktur wird über `src/app/components/Navigation.tsx` (drei Menüebenen), `Footer.tsx` und `routes.tsx` (21 Routen) definiert. Das Hauptmenü ist die Quelle der Wahrheit für "was ist die Struktur"; `docs/seiten-katalog.md` ist veraltet und nennt Routen, die es nicht mehr gibt. Motivation: siehe proposal.md.

Die Specs wurden aus dem Code von `main` (Commit `1699e59`) abgeleitet, nicht aus dem Katalog.

## Goals / Non-Goals

**Goals:**
- Der Ist-Stand ist pro Capability so beschrieben, dass jedes Szenario ohne Interpretation in einen Browser-Test (oder manuellen Check) übersetzt werden kann.
- Die Gliederung der Specs folgt dem Weg eines Besuchenden durch das Menü, damit ein künftiger Change sofort der passenden Spec zugeordnet werden kann.
- Befunde, die dem Soll widersprechen, sind sichtbar, ohne sie als Soll-Verhalten festzuschreiben.

**Non-Goals:**
- Kein Visual-Regression-Vertrag (Farben, Wellen, Typografie, Illustrationen). Die gelten über `docs/styleguide.md`.
- Kein Wortlaut-Vertrag für Fließtexte. Specs prüfen Überschriften, Labels, Links, Anker, Zahlen und Pflichtbegriffe.
- Keine Behebung der Befunde (siehe unten). Jeder Befund wird ein eigener Change.
- Kein Test-Framework wird in diesem Change eingeführt.

## Decisions

### 1. Capabilities nach Menüweg statt nach Dateistruktur
Eine Capability pro Menüast bzw. Seitengruppe (`start-page`, `harvest-shares`, `participation`, `faq`, `depots`), dazu `site-navigation` für den Rahmen, `registration-contact` für die Formulare, `supporting-pages` für Routen ohne Menüeintrag und `legal-pages`.
*Alternative:* eine Spec pro `.tsx`-Datei. Verworfen, weil die neun Ernteanteil-Detailseiten dasselbe Muster haben und eine Datei-Spec 21 nahezu identische Dokumente ergäbe; außerdem würde ein Umbau der Dateien die Specs ändern, obwohl sich das Verhalten nicht ändert.

### 2. Selektoren sind Text, Rolle und Anker, keine Klassen
Szenarien verweisen auf Überschriften, Linktexte, `id`-Anker, Linkziele und Formulartypen. Tailwind-Klassen und Komponentennamen tauchen nicht auf.
*Warum:* Diese Merkmale überleben den geplanten Joomla/SPPB-Export und Design-Umbauten. Klassen nicht.

### 3. Bekannte Abweichungen kommen nicht in die Specs
Wo der Ist-Stand erkennbar falsch oder ein Platzhalter ist, beschreibt die Spec nur die Struktur (z. B. "Pflichtfelder", "Depot-Auswahl vorhanden"), nicht die Inhalte. Der Inhalt ist Befund unten.
*Alternative:* Platzhalter als Ist-Verhalten festschreiben. Verworfen, weil jeder Content-Fix sonst als Spec-Änderung auftaucht und die Spec Falsches bestätigt.

### 4. Konsistenz-Szenarien zwischen Seiten
Mehrere Szenarien vergleichen bewusst zwei Seiten (Menü ↔ Ernteanteile-Übersicht, Mitmachen ↔ Depots, Detailseiten ↔ Lieferrhythmus-Tabelle, Footer ↔ Impressum). Genau hier entstehen Fehler bei Content-Änderungen, weil dieselbe Information an mehreren Stellen hartkodiert ist.

### 5. Archivierung
Nach Review wird der Change archiviert. Dadurch entstehen die neun Specs unter `openspec/specs/`, gegen die künftige Changes ihre Deltas formulieren.

## Risks / Trade-offs

- [Specs ohne Automatisierung veralten] → Die Szenarien sind so geschrieben, dass sie 1:1 in Playwright-Tests übersetzbar sind. Ein Folge-Change soll die Test-Infrastruktur einführen. Bis dahin gilt der manuelle Abgleich beim Review.
- [Hart codierte Zahlen (9 Depots, 4 Höfe, 13 Marker) lassen Specs bei normalen Content-Änderungen brechen] → Gewollt: Eine Änderung der Depot-Anzahl muss ein Delta auf `depots` und `participation` auslösen, damit beide Seiten konsistent bleiben (Decision 4).
- [Der Wortlaut mancher Labels (z. B. "Ernteteiler" vs. "Ernteteiler:in") schwankt im Ist-Stand] → Specs übernehmen den aktuellen Wortlaut. Eine Vereinheitlichung ist ein eigener Change.
- [Spec wird für Soll gehalten] → `proposal.md` und diese Datei stellen klar: Die Specs beschreiben den Ist-Stand. Befunde sind nicht Teil davon.

## Befunde im Ist-Stand

Beim Ableiten der Specs aus dem Code aufgefallen und bewusst **nicht** als Soll übernommen. Jeder Punkt ist ein Kandidat für einen eigenen, dann testbaren Change.

**Struktur und Navigation**
- `/kalender` ist von nirgends verlinkt (weder Menü noch Footer noch andere Seite).
- `/anmeldung` ist nur über den Button "Zur Anmeldung" auf `/mitmachen` erreichbar, nicht aus dem Menü. Die eigentliche Teilnahme läuft laut `/so-funktionierts` über das Versenden des TNV-PDFs per E-Mail. Es gibt also zwei konkurrierende Anmeldewege (Formular vs. PDF), und `/kontakt-anmeldung#anmeldung` ist ein dritter Einstieg.
- Der Link "Teilnahmebedingungen" auf `/so-funktionierts` zeigt auf `/mitmachen#teilnahme`. Diesen Anker gibt es auf `/mitmachen` nicht (vorhanden: `events`, `highlights`, `engagement`, `depots`, `logistik`).
- Unbekannte Routen (z. B. `/ernteanteile/gibt-es-nicht`) zeigen die React-Router-Standardfehlerseite ("Unexpected Application Error! 404"), es gibt keine eigene 404-Seite.
- `docs/seiten-katalog.md` nennt `/hoefe-und-ernteanteile` und `/lieferung-kalender`, die nicht mehr existieren.

**Formulare und tote Bedienelemente**
- `/anmeldung` enthält Platzhalter statt echter Daten: Ansprechpartner "Anna Müller", "Michael Schmidt", "Sarah Weber" mit Telefonnummern `0123 - 456 789 0x`; Ernteanteile mit Preisen (45 €, 40 €, 75 €/Monat) und Höfen "Reimehof" und "Biohof Walz"; Zusatzanteile Käse und Eier mit Preisen; fünf erfundene Depots (Innenstadt, Nordstadt, Südviertel, Westend, Altstadt), die zu den neun echten Depots auf `/depots` nicht passen; ein Frist-FAQ (6 Monate Saison, 4 bzw. 8 Wochen Kündigung), das zur TNV V9.3 nicht abgeglichen ist. Maßgebliche Quelle wäre `docs/anmeldung-daten-tnv-v9-3.md`.
- Gleichzeitig widerspricht die Preisregel der Detailseiten ("Richtpreis & Logistikkosten: siehe Teilnahmevereinbarung") den Euro-Beträgen in `/anmeldung`.
- Der Download-Link der TNV im Anmeldeformular hat `href="#"`. Das tatsächliche PDF `/TNV_StadtLandBeides_V9_3_2026.pdf` liegt in `public/` und wird nur von `/so-funktionierts` verlinkt.
- `/anmeldung`: Das Absenden zeigt nur die Bestätigung an, es gibt kein Backend. Die Bestätigung verspricht aber eine Bestätigungsmail und Rückmeldung in 3 Werktagen.
- `/kontakt-anmeldung`: Der Button "Jetzt anmelden" hat weder Link noch Handler. Das Kontaktformular hat keinen Submit-Handler; ein Absenden löst einen nativen Seiten-Reload aus und sendet nichts. Namen im Abschnitt "Direkter Ansprechpartner" sind echt (Vorstand, Kassenwart), die Ansprechpartner auf `/anmeldung` nicht.
- `/depots`: Der Button "Zum Newsletter" hat keine Funktion.
- Footer: Die Social-Links (Facebook, Instagram) haben `href="#"`.

**Datenschutz**
- `index.html` lädt Schriften von Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`). Das ist ein Drittanbieter-Request mit IP-Übertragung, den die Datenschutzerklärung nicht nennt; Abschnitt 7 sagt zudem, Cookies von Drittanbietern würden nicht geladen. Kandidat: Schriften lokal einbinden oder Abschnitt 9 ergänzen.

**Inhalte, die an mehreren Stellen gepflegt werden** (Quelle des Konsistenz-Risikos)
- Depotliste: `Depots.tsx` (Marker und Öffnungszeiten), `Mitmachen.tsx` (Liste und Kennzahl "9") und `Anmeldung.tsx` (Dropdown, abweichend).
- Lieferphasen: je Detailseite, in der Tabelle auf `/depots#anlieferung` und in `/kalender`.
- Kontakt-Adresse und Vereinsdaten: Footer, Impressum, `/kontakt-anmeldung`.

## Verifikation dieses Changes

- `openspec validate document-site-structure --strict` muss ohne Fehler laufen.
- Stichprobe gegen die laufende Seite durch den Nutzer: je Capability ein Szenario (Menü-Hover, Anker `#events`, Akkordeon, Kartenpopup, Pflichtfeld-Validierung). Der Dev-Server wird dafür nicht von der Assistenz gestartet.
