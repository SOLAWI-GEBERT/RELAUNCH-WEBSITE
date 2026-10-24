## 1. FAQ: Ablauf und "Antwort nicht dabei?"

- [x] 1.1 In `pages/FragenAntworten.tsx` die Antwort „Wie kann ich Ernteteiler werden?" in den Schnellen Fragen schlicht umschreiben: TNV laden, ankreuzen, per Mail an die Koordination; Link auf `/so-funktionierts`; Bestätigung durch das Team; Hinweis auf das Formular unten (Zweck: Rückfrage und kurze Beratung); Transparenz zur Arbeitsweise (Ehrenamt, internes Ticketsystem mit Verteilung, Bearbeitung mindestens einmal pro Woche). Kein eigener Anmelde-Abschnitt. Verifikation: Im Browser Akkordeon öffnen, Text und Link prüfen; `grep -n 'id="anmeldung"'` ist leer.
- [x] 1.2 Am Seitenende den Abschnitt `id="antwort-nicht-dabei"` anlegen: kurze Ablauf-Wiederholung mit Link auf `/so-funktionierts`, Ansprechpartner (Vorstand, Kassenwart; Texte aus `KontaktAnmeldung.tsx` übernehmen) und `mailto:Team.Koordination@stadt-land-beides.de`. Verifikation: Abschnitt ist der letzte `<section>` der Seite, `grep` findet den `mailto:`-Link.
- [x] 1.3 Formular "Interesse oder Frage" im Abschnitt `antwort-nicht-dabei` bauen (Thema Pflicht, E-Mail Pflicht, Name optional, Nachricht optional, Datenschutz-Zustimmung Pflicht, Button "Nachricht senden"). Depot-Wunsch (Liste `depots` aus `pages/Depots.tsx`) und Höfe (`hoefe` aus `data/hoefe.ts`) nur bei Thema "Ich möchte Ernteteiler zur Probe werden" anzeigen. Verifikation: im Browser leeres Absenden wird blockiert, Themenwechsel blendet Depot und Höfe ein und aus.
- [x] 1.4 Bestätigungsansicht nach dem Absenden (Beratung durch das Team, danach TNV per Mail) und sichtbarer Platzhalter-Hinweis; es darf keine Netzwerkanfrage entstehen. Verifikation: im Browser absenden, Netzwerk-Tab zeigt keine Anfrage, Bestätigung ersetzt das Formular.

## 2. Newsletter

- [x] 2.1 Newsletter-Baustein in `components/Footer.tsx` (E-Mail Pflicht, Datenschutz-Zustimmung mit Link auf `/datenschutz`, "Abonnieren", Hinweis "ca. 1× im Monat, jederzeit abmeldbar", Link "Newsletter verwalten"), Bestätigung nach dem Absenden und Platzhalter-Hinweis. Verifikation: auf zwei verschiedenen Seiten im Browser prüfen; Absenden ohne Zustimmung wird blockiert.
- [x] 2.2 Neue Seite `pages/Newsletter.tsx` ("Newsletter verwalten", Aktionen "Abmelden" und "Adresse ändern", je mit E-Mail-Feld und Button, Platzhalter-Hinweis) und Route `/newsletter` in `routes.tsx`. Verifikation: `/newsletter` im Browser öffnen, genau ein `h1`.

## 3. Navigation und Einstiege

- [x] 3.1 In `components/Navigation.tsx` das Untermenü "Fragen & Antworten" auf vier Einträge umstellen (Grundlagen, Schnelle Fragen, Vereinsgeschichte, Antwort nicht dabei?) mit Zielen aus der Spec. Verifikation: Desktop-Hover und mobiles Menü zeigen vier Einträge, jeder Sprung landet auf einem vorhandenen Anker.
- [x] 3.2 In `components/Footer.tsx` beide "Kontakt"-Links auf `/haeufige-fragen#antwort-nicht-dabei` ändern. Verifikation: `grep -n "kontakt-anmeldung" src/app/components` ist leer.
- [x] 3.3 In `pages/Mitmachen.tsx` den Button "Zur Anmeldung" auf `/so-funktionierts` umbiegen. Verifikation: `grep -rn "/anmeldung" src/app/pages/Mitmachen.tsx` ist leer; Klick im Browser öffnet `/so-funktionierts`.

## 4. Alte Seiten entfernen

- [x] 4.1 Routen `anmeldung` und `kontakt-anmeldung` aus `routes.tsx` entfernen und die Dateien `pages/Anmeldung.tsx` und `pages/KontaktAnmeldung.tsx` löschen. Zuvor `grep -rn "Anmeldung\b\|KontaktAnmeldung" src` prüfen, damit keine Importe verwaisen (z. B. Exporte, die andere Dateien nutzen). Verifikation: `npm run build` läuft ohne Fehler, `grep -rn "kontakt-anmeldung\|\"/anmeldung\"" src` ist leer.
- [x] 4.2 Prüfen, ob ungenutzte Assets oder Daten ausschließlich von den entfernten Seiten genutzt wurden (z. B. `kontakt.jpg` wird noch im Footer verwendet). Nur belegt Verwaistes entfernen. Verifikation: `grep` je Dateiname in `src` vor dem Löschen. Ergebnis: `kontakt.jpg` und `ablauf-kontakt.jpg` werden weiter genutzt, nichts entfernt.

## 5. Specs und Doku abgleichen

- [x] 5.1 `docs/seiten-katalog.md`: Zeilen für `/anmeldung` und `/kontakt-anmeldung` entfernen, `/newsletter` mit der Capability `newsletter` ergänzen. Verifikation: Datei zeigt nur noch existierende Routen.
- [x] 5.2 Nach dem Archivieren den Purpose in `openspec/specs/registration-contact/spec.md` anpassen (er nennt noch `/anmeldung` und `/kontakt-anmeldung`). Verifikation: `grep -n "anmeldung" openspec/specs/registration-contact/spec.md` zeigt keine entfernten Routen mehr.
- [x] 5.3 `openspec validate kontakt-newsletter-neu-ordnen --strict` ausführen. Verifikation: Ausgabe "is valid".

## Workflow follow-up

- Aufgabe 6 im Change `update-hoefe-tnv-v26-4` betrifft `Anmeldung.tsx`; vor dem Löschen in 4.1 klären, ob dieser Change zuerst archiviert wird.
