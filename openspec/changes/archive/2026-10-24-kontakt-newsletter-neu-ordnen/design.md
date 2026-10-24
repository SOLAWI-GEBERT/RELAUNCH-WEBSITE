## Context

Warum die Änderung nötig ist, steht im Proposal. Für den Zuschnitt zählen diese Fakten:

- Der reale Ablauf: Interessierte laden die TNV (`/so-funktionierts`, Schritt 3 "Teilnahme wegschicken"), füllen sie aus und mailen sie an `Team.Koordination@…`. Die Adresse steht dort bewusst als Bild (`email-teilnahme.png`).
- Das Kontaktformular ist ein niederschwelliges Zusatzangebot. Es erzeugt ein Interesse-Signal; das Team antwortet mit einem Beratungsblock und erwartet danach die TNV per Mail.
- Die Live-Seite bietet unten Newsletter (acymail, Double-Opt-in) und ein Kontaktformular mit Thema, Depot-Wunsch und Höfe-Auswahl.
- Die Startseite (`/`) verlinkt bereits auf `/so-funktionierts`; `start-page` bleibt unverändert.
- `src/app/pages/Depots.tsx` exportiert die Depot-Liste (`depots`), `src/app/data/hoefe.ts` die Höfe. Beide kann das Formular für Depot-Wunsch und Höfe-Auswahl wiederverwenden, statt eigene Listen zu pflegen.
- Der laufende Change `update-hoefe-tnv-v26-4` stellt in Aufgabe 6 noch `Anmeldung.tsx` um.

## Goals / Non-Goals

**Goals:**
- Der Prototyp zeigt nur Wege, die es real gibt: TNV laden und mailen, Rückfrage/Interesse über das Formular, Newsletter.
- Die FAQ erklärt den Ablauf einmal, in den Schnellen Fragen, und ist zugleich der Ort für "Antwort nicht dabei?".
- Formulare sind im Prototyp erkennbar Platzhalter für die späteren Joomla-Module.

**Non-Goals:**
- Kein Backend, kein Versand, keine Anbindung an acymail oder ein Formular-Modul.
- Keine Änderung am Inhalt der TNV oder am Katalog der Ernteanteile.
- Keine Weiterleitungen alter URLs im Prototyp; Joomla-Umleitungen sind eine spätere Aufgabe.
- Keine Änderung der Startseite.

## Decisions

**1. Formular und Ansprechpartner wohnen in der FAQ, nicht auf einer eigenen Seite.** Der Ablauf wird dort nicht in einem eigenen Abschnitt erklärt, sondern nur in der Antwort "Wie kann ich Ernteteiler werden?"; ein eigener Abschnitt wiederholte `/so-funktionierts` und die Schnellen Fragen (verworfen nach Review).
Wer eine Frage hat, soll sie dort stellen können, wo sie entsteht. Eine zusätzliche Seite wäre ein weiterer Einstieg neben der FAQ. Verworfen: `/kontakt` als eigene Seite (zusätzlicher Menüpunkt, gleiche Inhalte) und `/kontakt-anmeldung` behalten (der Name verspricht eine Anmeldung, die es nicht gibt).

**2. Ein Formular mit Themenauswahl statt zwei Formularen.**
Das Thema steuert, ob Depot-Wunsch und Höfe erscheinen. Das hält die Pflege klein und entspricht der Live-Seite. Verworfen: getrenntes Interesse- und Rückfrage-Formular (doppelte Pflege, gleiche Zielperson im Team).

**3. Pflicht sind nur Thema, E-Mail und Datenschutz-Zustimmung.**
Das Team antwortet per Mail; Name und Nachricht erleichtern die Beratung, sind aber optional, damit die Hürde niedrig bleibt. Die Live-Seite verlangt Vor- und Nachnamen; das entfällt hier bewusst.

**4. Depot- und Höfe-Auswahl nutzen die vorhandenen Daten.**
`depots` aus `Depots.tsx` und `hoefe` aus `data/hoefe.ts` werden importiert. Nur bei Thema "Ernteteiler zur Probe" sichtbar. Ein Spamschutz-Rätsel wie auf der Live-Seite entfällt, das ist Sache des späteren Joomla-Moduls.

**5. `/anmeldung` und `/kontakt-anmeldung` werden ersatzlos entfernt.**
Der Prototyp ist noch nicht live; Umleitungen sind hier unnötig. Verweise (Navigation, Footer, `Mitmachen.tsx`) werden umgebogen. "Zur Anmeldung" auf `/mitmachen` führt auf `/so-funktionierts`, damit der Weg über das PDF läuft.

**6. Newsletter als eigene Capability.**
Die Anmeldung sitzt im Footer, weil er auf jeder Seite vorhanden ist. Die Seite `/newsletter` ("Newsletter verwalten") ist nur über den Footer-Link erreichbar, nicht über das Menü. Neu angelegt wird eine eigene Spec `newsletter`, weil das Verhalten weder zur FAQ noch zur Navigation gehört.

**7. Platzhalter sichtbar kennzeichnen.**
Beide Formulare senden nichts und zeigen einen Hinweis. Das verhindert, dass der Prototyp ein funktionierendes Formular vortäuscht.

## Risks / Trade-offs

- [Das FAQ-Ende wird lang und die Frage-Anker liegen weit unten] → Menü und Footer verlinken direkt auf `#antwort-nicht-dabei`, ein Teaser-Link ist nicht nötig.
- [`update-hoefe-tnv-v26-4` hat Aufgabe 6 in `Anmeldung.tsx` abgeschlossen; sie wird durch das Entfernen der Seite obsolet] → Die bereits erledigten Änderungen dort bleiben als Historie bestehen. Die Depot-Liste (`depots`), die `Anmeldung.tsx` importierte, bleibt in `Depots.tsx` erhalten und wird vom Formular weiterverwendet.
- [Footer wächst um einen Baustein] → Newsletter-Anmeldung kompakt in der vorhandenen Spaltenstruktur unterbringen, keine neue Zeile.
- [Datenschutz: Zwei Formulare erfassen E-Mail-Adressen] → Beide verlinken die Datenschutzerklärung; Text der Erklärung bleibt außerhalb des Scopes (`legal-pages` unverändert). Vor dem Live-Gang prüfen, ob die Datenschutzerklärung die Newsletter-Verarbeitung nennt.
- [Dokumentation unter `docs/` (Seitenkatalog, Pagebuilder-Notizen) nennt die entfernten Routen weiterhin] → Beim Archivieren des Changes wird `docs/seiten-katalog.md` aus den Specs nachgezogen; die Pagebuilder-Notizen sind Arbeitsstand und werden nicht Teil dieses Changes.

## Migration Plan

Der Prototyp ist nicht öffentlich ausgeliefert, daher ist keine Datenmigration nötig. Reihenfolge: zuerst neue Bausteine anlegen (FAQ-Abschnitte, Newsletter), dann Verweise umbiegen, zuletzt die alten Seiten und Routen entfernen. So bleibt zwischen den Schritten kein Link ins Leere. Rollback: Git-Revert, da keine Daten betroffen sind.

## Open Questions

- Wie viele Wochen der Beratungsantwort soll der Bestätigungstext versprechen? (Der Spec-Text nennt bewusst keine Frist.)
