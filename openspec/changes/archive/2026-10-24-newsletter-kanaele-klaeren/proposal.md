# Proposal

## Why

Eine bestehende Ernteteilerin kann aktuell nicht klar unterscheiden, über welchen
Kanal sie welche Information bekommt: "Termine kommen per Hof-Post und Newsletter"
vermischt drei tatsächlich getrennte Kanäle (hofspezifische Hof-Post, interner
Vereins-Newsletter, öffentlicher externer Newsletter) zu einer vagen Aussage.
Gleichzeitig existiert mit `/kalender` eine Seite, die praktisch denselben Inhalt
wie `/depots` (Lieferrhythmus, Abholregeln) und `/mitmachen` (Termine, Engagement)
nochmal anders gerahmt wiederholt — und die von nirgends aus verlinkt ist. Die
Dublette sollte weg, die Kanal-Verwechslung aufgeklärt werden, ohne Navigation oder
Seitenstruktur anzufassen.

## What Changes

- FAQ-Abschnitt "Schnelle Fragen" bekommt zwei neue Fragen: "Gibt es einen
  Newsletter?" (erklärt externen vs. internen Newsletter) und "Wie erfahre ich von
  Terminen und Mitmachangeboten?" (ordnet Hofaktionen, Jahreshauptversammlung und
  öffentliche Angebote den drei Kanälen zu).
- Der Hinweis-Satz im Abschnitt `#events` auf `/mitmachen` wird präzisiert: statt
  der generischen Aussage "Hof-Post per E-Mail und unseren Newsletter" wird nach
  Hofaktionen (Hof-Post) und vereinsweiten Terminen (interner Newsletter)
  unterschieden, mit Verweis auf die FAQ.
- **BREAKING**: Die Route `/kalender` und `src/app/pages/Kalender.tsx` entfallen
  ersatzlos. Der Inhalt ist bereits auf `/depots#anlieferung` (Lieferrhythmus) und
  `/mitmachen#events`/`#engagement` (Termine, Mitmachangebote) abgedeckt; die Seite
  war in der Navigation, im Footer und auf keiner anderen Seite verlinkt.

## Capabilities

### Modified Capabilities
- `faq`: zwei neue Requirements im Abschnitt "Schnelle Fragen" zu Newsletter-Kanälen
  und zum Weg zu Termininformationen.
- `participation`: das Requirement "Zukünftige Events" wird präzisiert (Hof-Post
  für Hofaktionen, interner Newsletter für vereinsweite Termine, statt der
  bisherigen generischen "Hof-Post und Newsletter"-Formulierung).
- `supporting-pages`: die vier Kalender-spezifischen Requirements entfallen; zwei
  weitere Requirements, die `/kalender` als dritte ergänzende Seite bzw. als
  Einstiegspunkt zu `/so-funktionierts` nennen, werden entsprechend angepasst.

## Impact

- Code: `src/app/pages/FragenAntworten.tsx` (zwei neue Akkordeon-Einträge in
  "Schnelle Fragen"), `src/app/pages/Mitmachen.tsx` (Hinweis-Satz in `#events`),
  `src/app/routes.tsx` (Route `/kalender` entfernen), `src/app/pages/Kalender.tsx`
  (Datei entfernen).
- Specs: `faq`, `participation`, `supporting-pages`.
- Kein Backend, keine neuen Abhängigkeiten.
