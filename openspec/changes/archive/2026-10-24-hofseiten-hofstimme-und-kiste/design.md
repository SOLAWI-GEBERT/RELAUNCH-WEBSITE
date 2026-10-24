# Design

## Context

Alle neun Detailseiten laufen durch `ErnteanteilSeite` (Kopfband, `HofSteckbrief`, Inhalt, CTA); der Inhaltsblock je Ernteanteil steckt in `ErnteanteilAbschnitt` (Beschreibung mit optionalem Foto, "Was steckt drin", "Das kostet", "Lieferung & Info"). Hofdaten (`Hof`: Name, Badge, Beschreibung, Foto) liegen in `src/app/data/hoefe.ts`, Ernteanteil-Daten in `src/app/data/ernteanteile.ts`; Kopf- und Flächenfarbe kommen aus `kategorieFarben`. `TristanGemuese` stapelt Winter und Sommer als zwei Abschnitte mit den Ankern `#winter` und `#sommer`, jeweils mit eigenem `ErnteanteilAbschnitt`. Motivation: siehe proposal.md. Das Seitengerüst liegt in den Specs (`harvest-shares`).

## Goals / Non-Goals

**Goals:**
- Hof-Identität (Logo, Foto, Stimme) auf allen neun Seiten, ohne die Kategorie-Pastellfarben zu verdrängen.
- Alle neuen Teile optional und datengetrieben: Fehlt ein Feld, entfällt nur der betroffene Teil, die Seite bleibt vollständig.
- Neue Teile exportierbar nach SP Page Builder.

**Non-Goals:**
- Keine eigene Hofseiten-Ebene, keine Routenänderung, keine Änderung von Preisen oder Verfügbarkeiten.
- Keine mehrteilige Fotostrecke (das Wireframe zeigt ein breites Foto) und keine gezeichneten Hofmotive.
- Kein Saisonband, keine Mengenberichte, keine Hoftermine oder Hofnews.
- Keine Texte oder Zahlen, die nicht vom Hof stammen.

## Decisions

**Hof als Absender: Daten am `Hof`, Rahmen aus der Kategorie.** `Hof` bekommt optionale Felder `logo { src, alt }` und `zitat { anrede, text, signatur }`. Alles Farbige (Kopfband, Karte der Hofstimme, Foto-Versatzrahmen) kommt weiter aus `kategorieFarben`; die Farbwelt des Hoflogos wirkt nie auf Flächen. *Alternative:* Hoffarbe als zweite Akzentfarbe — verworfen, weil sie die thematische Pastell-Signatur bricht und vier Hof-Paletten bei neun Seiten nicht pflegbar sind.

**Einfarb-Stempel per CSS-Maske.** Das Logo wird als Bild mit Alpha-Kanal (SVG oder PNG, transparent) über `mask-image` und `background-color: currentColor` eingefärbt, nicht als `<img>` mit Filter. Dadurch passt die Farbe automatisch zur Textfarbe (auch im Dark Mode) und Zertifikats-Signets bleiben davon ausgenommen (sie sind Teil der Badge-Zeile, nicht des Logo-Felds). Alt-Text kommt per `role="img"` und `aria-label`. *Alternative:* `filter: brightness(0)` — verworfen, weil es nur Schwarz kann und beim Wechsel der Textfarbe nachgezogen werden müsste.

**Kistenetikett und Rahmung als Klassen.** Zwei Klassen in `theme.css`: eine für das gerahmte Foto (Rundung, Versatzschatten ohne Weichzeichner), eine für das Etikett (leichte Drehung, Rahmen, Versatzschatten). Die Rahmenfarbe kommt aus der Kategorie über eine CSS-Variable am Seitencontainer, gesetzt aus `kategorieFarben`. So gibt es eine Stelle für die Optik, `docs/styleguide.md` dokumentiert sie. Das Etikett sitzt unten rechts am Bildrand, damit es das Motiv nicht überdeckt.

**Abschnitte in den Daten, Reihenfolge im Bauteil.** `Ernteanteil` bekommt optionale Felder `kiste { beispiele[], mengen }` und `kueche[]` (Karten mit Titel, Text, optionalem Link, höchstens drei). `ErnteanteilAbschnitt` rendert nach "Was steckt drin": "In der Kiste", "Aus der Küche", danach "Das kostet" — jeweils nur, wenn Daten da sind. Die Hofstimme rendert `ErnteanteilSeite` selbst direkt nach dem Steckbrief, weil sie am Hof und nicht am Ernteanteil hängt.

**Kistenkarte mit Foto und Produktliste, Größe nach TNV.** Eine Beispiel-Lieferung (`KistenBeispiel`) ist eine Karte im Raster (drei pro Reihe, mobil eine): oben ein 4:3-Foto in der gerahmten Optik der Hoffotos, darunter Titel, Produktliste (`produkte: { name, menge? }[]`, ersatzweise der einfache Text `inhalt`) und die Kochidee. Die TNV kennt je Ernteanteil mehrere Größen (z. B. Normal/Klein bei Gemüse, 600 g/300 g bei Pilzen); ein optionales Feld `groesse` ordnet die Karte einer Größe zu und wird als Badge gezeigt, damit pro Größe ein eigenes Foto möglich ist. Ein Foto pro Karte, nicht mehrere in einer Karte. *Alternative:* kleine Textkarten (80 px) — verworfen, weil sie die Kiste nicht zeigen; große Einzelkarten über volle Breite — verworfen, weil sie echtes Fotomaterial je Lieferung voraussetzen.

**Farbband mit Holzkiste.** "Was steckt drin" und "In der Kiste" liegen gemeinsam in einem Farbband in der Kategoriefarbe (`kategorieFarben[...].band`); die Karten darin sind weiß, damit sie sich abheben und der Versatzrahmen der Kistenfotos sichtbar bleibt. Die freigestellte Holzkiste (`public/kiste-illustration.png`) steht links auf der oberen Kante des Bands, die erste Überschrift rückt ab `sm` nach rechts. Das Band erscheint, sobald einer der beiden Teile Inhalt hat, die Kiste damit auch auf Seiten ohne "Was steckt drin". *Alternative:* Kiste rechts neben der Überschrift — verworfen, sie hing dort am Rand; Band nur um "Was steckt drin" — verworfen, weil Seiten ohne dieses Karten-Set die Kiste verlören.

**Übersicht `/ernteanteile` als Kachelwand.** Sieben Kategorien mit je einer einzelnen Kachel ließen die Seite lang und leer wirken. Die Übersicht zeigt jetzt alle Ernteanteile als eine mehrspaltige Wand (drei Spalten ab `lg`, zwei ab `sm`, eine auf Handybreite) in der bisherigen Kategorienreihenfolge; die Kategorie steht als Icon über dem Titel statt als eigene Überschrift. Bild der Kachel: das Foto der ersten Beispiel-Lieferung (bei Gemüse die von `tristan-winter`), sonst das eigene Produktfoto des Ernteanteils, sonst das Hoffoto, sonst kein Bild — nie ein Foto eines anderen Hofs. Solange Platzhalter aktiv sind, steht das Platzhalter-Kistenfoto erst an letzter Stelle, damit echte Hoffotos nicht von grauen Platzhaltern verdrängt werden. Das Hoflogo erscheint als kleiner Einfarb-Stempel (`HofLogo`) neben dem Hofnamen. Weil die `h2` je Kategorie entfallen, leitet eine nur für Screenreader sichtbare `h2` die Wand ein. *Alternative:* nach Hof sortierte Blöcke — verworfen, weil die Seite dadurch höher wird und für den Hof-Eindruck die Detailseiten da sind; Kategorien als Filter-Chips — verworfen, weil mit neun Kacheln kein Filter nötig ist.

**Gemüse ohne Tabs.** Winter und Sommer sind bereits eigene Abschnitte mit Ankern und eigenen Daten (`tristan-winter`, `tristan-sommer`); "In der Kiste" und "Aus der Küche" erscheinen innerhalb jedes Abschnitts. *Alternative:* Saison-Tabs wie im Wireframe — verworfen, weil sie die vorhandene Saisonstruktur und die Anker `#winter`/`#sommer` doppeln würden, Tabs im SP Page Builder nur eingeschränkt möglich sind und Inhalte hinter Tabs schlechter auffindbar sind. Das Wireframe bleibt für Reihenfolge und Optik der übrigen Teile maßgeblich.

**Inhalte nur mit Quelle.** Es gibt keine Beispieltexte im Code. Die erste Befüllung beschränkt sich auf belegte Inhalte: Zitate, die aus den Hof-Webseiten übernommen und noch vom Hof bestätigt werden müssen; Logos in der Qualität, die vorliegt. Kistenbeispiele, Mengen und Küchentipps bleiben leer, bis ein Hof sie liefert. Die Bauteile sind bis dahin ohne sichtbare Wirkung (Abschnitt entfällt).

**Export nach Joomla.** Logo, Foto, Zitatblock und Karten sind Standard-Addons des SP Page Builder; die Rahmung läuft über CSS-Klassen im Joomla-Template. Das bestätigt `sppb-export` bei der Umsetzung (Aufgabe in tasks.md), bevor die Bauteile als fertig gelten.

## Risks / Trade-offs

- [Logos liegen nur als Screenshot oder mit Hintergrund vor (Tristans Logo ist Rot auf Lime) — Maske liefert dann einen Block statt eines Stempels] → Das Feld bleibt leer, bis eine Datei mit transparentem Hintergrund da ist; kein Einfärben von Dateien mit Hintergrund.
- [Zitate wirken ohne Freigabe wie ungefragte Aussagen] → Wortlaut von den Höfen bestätigen lassen, bevor produktiv; bis dahin als offene Aufgabe markiert.
- [Das Seitenbild wirkt zwischen Höfen ungleich (Tristan mit zwei Fotos, Schweigerts keins)] → Rahmung und Platzhalter sind einheitlich; ein Hof ohne Foto zeigt weiter den neutralen Platzhalter.
- [Die Sektionen bleiben monatelang leer und die Seite sieht unverändert aus] → Gewollt: lieber keine Sektion als erfundener Inhalt; der Fortschritt hängt an den Höfen.
- [Das Etikett überdeckt Bildmotive bei Hochformaten] → Position unten rechts, Größe begrenzt; im Browser bei allen vier Höfen prüfen.
- [Dark Mode: Stempel und Etikett verlieren Kontrast] → Textfarbe als Maskenfarbe, Etikett mit eigener Fläche; beide Modi im Browser prüfen.

## Open Questions

- Welche Logo-Dateien (SVG oder PNG mit Alpha) liefern Tristan, Walz und Schweigerts? Kirschgarten hat kein Logo und bleibt ohne Stempel.
- Welche Signatur trägt die Hofstimme je Hof ("Dein Tristan", "Familie Walz")? Das legt der Hof fest; im Code reicht ein Feld.
