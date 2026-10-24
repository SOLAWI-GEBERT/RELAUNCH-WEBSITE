## Why

Der Prototyp zeigt Wege, die es real nicht gibt: ein eigenes Anmeldeformular `/anmeldung`
("Verbindlich anmelden") und im Menü einen Eintrag "Kontaktformular", der ein Formular ohne
Zweck und ohne Thema öffnet. Der echte Ablauf ist ein anderer: Interessierte laden die
Teilnahmevereinbarung (TNV) herunter, füllen sie aus und schicken sie per Mail an
`Team.Koordination@stadt-land-beides.de`. Das Kontaktformular ist nur ein niederschwelliges
Zusatzangebot; das Team antwortet auf ein Interesse mit einem kleinen Beratungsblock und
erwartet danach die TNV per Mail. Einen Newsletter-Baustein, wie ihn die Live-Seite unten
hat, gibt es im Prototyp nicht.

## What Changes

- **BREAKING** Die Route `/anmeldung` und die Seite `Anmeldung.tsx` entfallen samt
  Bestätigungsansicht und Pflichtfeld-Regeln.
- **BREAKING** Die Route `/kontakt-anmeldung` und die Seite `KontaktAnmeldung.tsx` entfallen.
- Alle Einstiege zur Anmeldung ("Zur Anmeldung" auf `/mitmachen`) führen stattdessen in den
  echten Ablauf: TNV laden (`/so-funktionierts`), ausfüllen, per Mail an die Koordination.
- Die FAQ `/haeufige-fragen` bekommt als letzten Abschnitt "Antwort nicht dabei?" mit kurzer
  Flow-Wiederholung, einem Formular "Interesse oder Frage" (Thema, E-Mail, Nachricht, Depot-Wunsch und Höfe optional,
  Datenschutz-Zustimmung), dem Mail-Link und den Ansprechpartnern.
- Die Antwort "Wie kann ich Ernteteiler werden?" in den Schnellen Fragen erklärt den Weg schlicht
  (TNV laden, ankreuzen, mailen) und macht die Arbeitsweise transparent (Ehrenamt, internes Ticketsystem mit Verteilung, Bearbeitung mindestens einmal pro Woche). Einen eigenen Anmelde-Abschnitt
  gibt es nicht, um Duplikate zu vermeiden.
- Das Untermenü "Fragen & Antworten" ersetzt "Kontaktformular" durch "Antwort nicht dabei?"
  (Anker auf der FAQ-Seite). Footer-Links "Kontakt" zeigen auf
  den FAQ-Abschnitt.
- Der Fußbereich bekommt eine Newsletter-Anmeldung (E-Mail, Datenschutz-Zustimmung,
  "Abonnieren", Hinweis auf ca. monatlichen Versand und jederzeitige Abmeldung).
- Neue Seite "Newsletter verwalten" für Abmeldung und Datenänderung.
- Formulare sind im Prototyp Platzhalter für die späteren Joomla-Module und werden so markiert.

## Capabilities

### New Capabilities
- `newsletter`: Newsletter-Anmeldung im Fußbereich und die Seite zum Verwalten des Abonnements.

### Modified Capabilities
- `registration-contact`: Anmeldeformular und Kontakt-&-Anmeldung-Seite entfallen; die Spec
  beschreibt künftig nur noch das Interesse-/Rückfrage-Formular und die Ansprechpartner.
- `faq`: neuer Abschnitt "Antwort nicht dabei?" und geschärfte Antwort zum Ernteteiler-Werden; die Anforderung
  "Kontaktformular über das Menü erreichbar" entfällt.
- `site-navigation`: Untermenü "Fragen & Antworten" und Footer-Links ändern sich; der
  Fußbereich enthält die Newsletter-Anmeldung.
- `participation`: Abschluss-CTA "Zur Anmeldung" führt nicht mehr nach `/anmeldung`.

## Impact

- Code: `routes.tsx`, `components/Navigation.tsx`, `components/Footer.tsx`,
  `pages/FragenAntworten.tsx`, `pages/Mitmachen.tsx`; entfernt werden `pages/Anmeldung.tsx` und
  `pages/KontaktAnmeldung.tsx`; neu eine Newsletter-Verwalten-Seite.
- Specs: wie oben; `start-page` bleibt unverändert, da dessen CTAs schon auf
  `/so-funktionierts` zeigen.
- Abhängigkeit: Der laufende Change `update-hoefe-tnv-v26-4` stellt noch die Paketauswahl in
  `Anmeldung.tsx` um (Abschnitt 6 seiner Aufgaben). Das Zusammenspiel steht im Design.
- Kein Backend: Formulare bleiben clientseitige Platzhalter.
