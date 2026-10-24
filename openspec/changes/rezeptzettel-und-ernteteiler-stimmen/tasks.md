# Tasks

## 1. Datenmodell

- [ ] 1.1 In `src/app/data/ernteanteile.ts` die Typen `Rezept` und `Stimme` anlegen, `rezept?` und `stimmen?` am `Ernteanteil` ergänzen, `KuechenTipp.link` entfernen und die Kommentare zur Quellenregel anpassen. Prüfen: `npm run build` läuft ohne Typfehler.
- [ ] 1.2 In `src/app/data/platzhalter.ts` Platzhalter für `rezept` und `stimmen` ergänzen (Texte beginnen mit "Platzhalter:" und handeln von Geschmack der Zutaten, Signatur ohne echten Namen), den Platzhalter-Link in `kuechePlatzhalter` entfernen und beide Felder in `anteilMitPlatzhaltern` einsetzen. Prüfen: Build läuft, `PLATZHALTER_AKTIV = false` blendet beide Felder aus.

## 2. Rezeptzettel

- [ ] 2.1 Neue Komponente `src/app/components/Rezeptzettel.tsx`: Titel in Ebenen-Überschrift, Eckdaten-Zeile nur mit vorhandenen Angaben, Zutaten links und nummerierte Schritte rechts (ab `md`, sonst untereinander), optionales Foto mit `hof-foto`, optionaler Hof-Tipp, optionale Quellenzeile mit Link (`rel="noopener noreferrer"`). Fläche aus `kategorieFarben`. Prüfen im Browser: Seite `/ernteanteile/walz-huhn` bei 1280 px und 390 px Breite, kein horizontaler Scroll.
- [ ] 2.2 `src/app/components/AusDerKueche.tsx` umbauen: höchstens zwei kompakte Karten, darunter der Rezeptzettel; der Abschnitt samt Überschrift entfällt, wenn weder Tipps noch Rezept vorhanden sind. Prüfen: Seite mit Rezept ohne Tipps zeigt keine leere Karte, Seite ohne beides zeigt keine "Aus der Küche"-Überschrift (mit `PLATZHALTER_AKTIV = false` testen und danach zurücksetzen).

## 3. Stimmen der Ernteteiler:innen

- [ ] 3.1 Neue Komponente `src/app/components/ErnteteilerStimmen.tsx`: Überschrift "Das gefällt Ernteteiler:innen besonders", höchstens drei weiße Karten mit optionalem Zutat-Etikett, Kursivzitat (`font-accent`) und Signatur, `null` ohne Daten. Prüfen im Browser: Karten heben sich von der Hofstimme und vom Zettel ab; Ebene `h2` bzw. `h3` stimmt zur Seite.
- [ ] 3.2 Beide neuen Teile in `ErnteanteilAbschnitt` (`ErnteanteilSeite.tsx`) einbinden: Stimmen nach "Aus der Küche", vor "Das kostet". Prüfen: `/ernteanteile/tristan-gemuese` zeigt in `#winter` und `#sommer` je eigenen Zettel und eigene Stimmen, genau ein `h1` pro Seite, Überschriftenfolge ohne Sprung.

## 4. Doku und Abschluss

- [ ] 4.1 `docs/todo.md` Abschnitt 3a ergänzen: Rezepte von den Höfen holen, Zitate von Ernteteiler:innen zu Geschmack und Zutaten mit Einwilligung und Wortlautfreigabe einholen (Verweis auf Foto-Einwilligung in Abschnitt 4), Platzhalter vor Livegang abschalten gilt auch für beide Felder, Joomla-Export-Rezept um Zettel und Stimmen erweitern. Prüfen: Einträge im gleichen Format wie die vorhandenen.
- [ ] 4.2 `docs/styleguide.md` um die Muster Rezeptzettel und Ernteteiler-Karte ergänzen. Prüfen: Beschreibung nennt Farbe, Schrift und Abgrenzung zur Hofstimme.
- [ ] 4.3 Gesamtprüfung: `npm run build` fehlerfrei; `grep -rn "Sie \|Ihre" ` über die neuen Komponenten und Platzhaltertexte findet keine Sie-Ansprache; alle neun Detailseiten im Browser durchsehen, Reihenfolge der Abschnitte wie in der Spec.
