# Proposal

## Why

Die neun Ernteanteil-Detailseiten sind sauber, aber nüchtern: Ein Hof-Steckbrief, Karten, eine Preistabelle. Es fehlt der Moment, in dem man den Hof kennenlernt und die Kiste vor sich sieht. Die Webseiten der Höfe (Tristans Biohof, Demeterhof Walz) leben von ihrem Logo, von Originalfotos und von der persönlichen Stimme der Betriebsleitung — genau das fehlt hier. Das gemeinsame Seitengerüst (`ErnteanteilSeite`) macht es möglich, das einmal zu bauen und auf allen neun Seiten wirken zu lassen.

## What Changes

- **Hof als Absender, wir als Briefpapier:** Unser Seitenrahmen (Kategoriefarbe, Wellenkante, Schrift) bleibt; der Hof tritt darin mit Logo, Foto und eigener Stimme auf.
- **Logo des Hofs** erscheint einfarbig als Stempel im Kopfband und als Kistenetikett am Hof-Foto; Zertifikats-Signets (z. B. Demeter) bleiben unverändert.
- **Hoffotos im Steckbrief** werden größer und einheitlich gerahmt (Rundung, Versatzrahmen in der Kategoriefarbe).
- **Neuer Abschnitt "Hofstimme":** ein Zitat des Hofs als kurzer Brief mit Anrede und Signatur, im Du der Solawi. Er entfällt ohne Zitat.
- **Neuer Abschnitt "In der Kiste":** Beispiel-Lieferungen und Mengen im Alltag, bei Gemüse mit Saison-Tabs. Er entfällt ohne Inhalt.
- **Neuer Abschnitt "Aus der Küche":** Lagerung, Verwertung und Rezeptideen in kompakten Karten. Er entfällt ohne Inhalt.
- Logo, Zitat, Signatur, Kistenbeispiele und Küchentipps sind optionale Daten. Fehlt etwas, entfällt nur der betroffene Teil; kein Platzhaltertext, kein fremdes Bildmaterial.
- Das Seitengerüst bekommt zwei neue Positionen (Hofstimme nach dem Steckbrief, "In der Kiste" und "Aus der Küche" nach "Was steckt drin"); "Das kostet" und "Lieferung & Info" bleiben unverändert.

**Nicht Teil dieser Änderung:** Hoftermine, Hofladen und Märkte, Hofnews, Saisonband, Mengenberichte und Erntebilanz, gezeichnete Hofmotive, mehrteilige Fotostrecken.

## Capabilities

### New Capabilities

Keine.

### Modified Capabilities

- `harvest-shares`: Gerüst der Detailseiten um Hofstimme, "In der Kiste" und "Aus der Küche" erweitert; Hof-Steckbrief zeigt Logo-Stempel, Kistenetikett und einheitlich gerahmtes Foto; neue Anforderungen für die optionalen Abschnitte und für Inhalte, die nur mit belegter Quelle erscheinen.

## Impact

- **Code:** `src/app/data/hoefe.ts` (optionale Felder Logo, Zitat, Signatur), `src/app/data/ernteanteile.ts` (optionale Felder Kistenbeispiele, Mengen, Küchentipps), `src/app/components/ErnteanteilSeite.tsx`, `HofSteckbrief.tsx`, drei neue Bauteile (Hofstimme, Kisten-Abschnitt, Küchen-Abschnitt), `src/app/pages/ernteanteile/TristanGemuese.tsx` (Saison-Tabs), Rahmungsklassen in `src/styles/theme.css`.
- **Assets:** Logo-Dateien der Höfe unter `public/` (SVG oder PNG mit transparentem Hintergrund).
- **Specs:** Delta für `harvest-shares`; `docs/seiten-katalog.md` bleibt (keine Routenänderung); `docs/styleguide.md` bekommt die Rahmungsregel.
- **Joomla-Export:** `sppb-export` muss die neuen Bauteile abbilden können (Logo, Bild, Zitatblock sind Standard-Addons; Tabs sind eingeschränkt).
- **Inhalt von den Höfen:** Zitate, Kistenbeispiele, Mengen und Küchentipps müssen von den Höfen kommen oder bestätigt sein. Die Einwilligung für Logos, Fotos und Zitate wird vorausgesetzt.
- Keine neuen Abhängigkeiten, keine Routenänderung.
