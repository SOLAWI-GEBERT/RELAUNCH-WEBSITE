# Design

## Context

Siehe `proposal.md` — Why. Zwei Eigenschaften des Ist-Zustands prägen den Ansatz:

**Der Bestand ist über neun Dateien verstreut.** Höfe und Ernteanteile stehen hartkodiert
in `routes.tsx`, `Navigation.tsx`, `Ernteanteile.tsx`, `Home.tsx`,
`SolidarischeLandwirtschaft.tsx`, `Depots.tsx`, `Kalender.tsx`, `Anmeldung.tsx` und je
einmal pro Detailseite. Nur `src/app/data/hoefe.ts` ist bereits zentral. Eine TNV-Änderung
erfordert heute neun synchrone Edits — genau die Stelle, an der der aktuelle Stand
auseinandergelaufen ist.

**Die TNV ist in sich uneinheitlich.** Sie schreibt „More..Urgetreide" (S. 2) und
„More...Ur-Getreide" (S. 8); sie markiert Bieterrunden-Preise pro Tabellenzeile, nicht pro
Paket; sie mischt Zeitangaben („ab Oktober 2026", „ab April 2027", „Sommer 2027, anfangs
keine neuen Ernteanteile"). Das Datenmodell muss diese Unschärfen abbilden können, ohne
sie zu glätten.

Weitere Randbedingungen: kein Backend, keine API, kein Testrunner. Der Entwurf ist
statisch und wird später nach Joomla/SP Page Builder exportiert. Während der Arbeit läuft
ein Dev-Server mit HMR, den der Nutzer live sieht.

## Goals / Non-Goals

**Goals:**

- Eine TNV-Änderung soll künftig eine Datei betreffen, nicht neun.
- Der Katalog soll die Unschärfen der TNV tragen können — Bieterrunde pro Variante,
  drei Verfügbarkeitszustände, Varianten mit abweichender Laufzeit.
- Kein kaputter Zwischenstand im laufenden Dev-Server.

**Non-Goals:**

- Keine Verallgemeinerung zu einem CMS oder einer Datenquelle außerhalb des Repos. Der
  Katalog bleibt getypte TypeScript-Konstanten.
- Keine Umstellung der Detailseiten auf eine generische, datengetriebene Seite. Jeder
  Ernteanteil behält seine eigene Komponente mit eigenem Text und eigener Farbgebung —
  das ist Teil der Gestaltung, nicht Duplikation.
- Kein automatischer Abgleich mit dem PDF. Die Übertragung bleibt manuell und belegt.

## Decisions

### Zentrale Katalogdatei, aus der Übersichten ableiten

`src/app/data/ernteanteile.ts` wird die einzige Quelle für Ernteanteile, Preise und
Verfügbarkeit. Übersichtsseite und Navigation leiten ihre Listen über eine
Gruppierungsfunktion daraus ab, statt sie zu wiederholen.

*Warum:* Die Spec verlangt, dass alle Oberflächen denselben Bestand abbilden. Mit neun
Kopien ist das eine Disziplinfrage; mit einer Quelle ist es strukturell erzwungen.

*Alternative — alles bei den Detailseiten belassen und nur Daten korrigieren:* billiger
für diesen Change, hätte aber genau die Divergenz konserviert, die den Change nötig
gemacht hat.

*Grenze:* Startseiten-Teaser und Lieferrhythmus bleiben redaktionell handverlesen — sie
zeigen eine Auswahl, nicht den Katalog. Sie verweisen auf Einträge des Katalogs, erzeugen
aber keine eigenen.

### Bieterrunde pro Variante, nicht pro Ernteanteil

Das Kennzeichen hängt an der einzelnen Preisvariante.

*Warum:* In der TNV-Tabelle (S. 1) tragen die Normal- und Klein-Varianten bei Tristan das
Kürzel `BR`, die Studierenden-Varianten nicht. Ein Kennzeichen auf Paketebene würde sechs
Varianten über einen Kamm scheren und wäre für vier davon falsch.

*Alternative — Flag am Ernteanteil:* einfacher, aber sachlich unzutreffend. Bei einem
Preis, den Interessenten für verhandelbar halten sollen oder gerade nicht, ist das kein
akzeptabler Rundungsfehler.

### Verfügbarkeit als Variante mit Nutzlast, nicht als Flag

Drei Zustände: buchbar, geplant mit Zeitpunkt, Warteliste. Der geplante Zustand trägt den
Zeitpunkt als Text mit sich.

*Warum:* Ein Boolean `verfuegbar` könnte den Unterschied zwischen „ab April 2027" und
„existiert, aber keine neuen Anteile" nicht ausdrücken — zwei Zustände, die für
Interessenten sehr Verschiedenes bedeuten. Der Zeitpunkt gehört an den Zustand, der ihn
braucht, nicht als separates, bei zwei Dritteln der Anteile leeres Feld.

*Zeitpunkt als Text, nicht als Datum:* Die TNV nennt „Sommer 2027" — eine Kalenderangabe
gibt es gar nicht. Ein Datumstyp erzwänge eine Präzision, die die Quelle nicht hergibt.

### Preise in den Code statt Verweis auf die TNV

*Warum:* Der Verweis beantwortet die wichtigste Frage eines Interessenten nicht. Die
Kosten sind der Kern der Entscheidung.

*Trade-off:* Der Entwurf kann künftig gegenüber der TNV veralten. Abgefedert dadurch, dass
alle Zahlen an einer Stelle mit Quellenangabe (TNV-Version und Seitenzahl) stehen — ein
Versionswechsel ist ein Ein-Datei-Diff, kein Suchlauf.

### Keine Redirects für entfallene Routen

`/ernteanteile/hederer-sommer` und `/ernteanteile/hederer-obst` verschwinden ersatzlos.

*Warum:* Der Prototyp ist nicht veröffentlicht, es gibt keine eingehenden Links und keine
SEO-Last. Ein Redirect auf einen anderen Hof wäre zudem inhaltlich irreführend — das
Sommergemüse von Tristan ist nicht das Sommergemüse von Hederer.

*Folge:* Die bisherige Route `/ernteanteile/tristans-winter` wird zu
`tristan-winter`, damit die Slugs einem Muster folgen (`<hof>-<produkt>`). Gleiche
Begründung: keine Altlast zu schützen.

### Reihenfolge: anlegen, umhängen, dann löschen

1. Datenmodell und neue Komponenten
2. Neue Detailseiten und Routen
3. Referenzstellen umhängen
4. Erst dann Hederer-Seiten und `hoefe.hederer` entfernen
5. Abschließend auf verwaiste Referenzen prüfen, dann Typecheck und Build

*Warum:* Der Dev-Server läuft während der Arbeit und der Nutzer sieht jeden
Zwischenstand. Löschen zuerst hieße: Navigation und Startseite zeigen minutenlang auf
nicht mehr existierende Komponenten, der HMR-Overlay schlägt zu.

### Pilz-Kategorie mit `Soup`

Die Icon-Bibliothek (lucide-react 0.487) hat kein Pilz-Symbol — geprüft. `Soup` ist das
nächstliegende verfügbare.

*Alternative — eigenes SVG:* Im Projekt existieren handgezeichnete Signature-Grafiken;
ein eigenes Pilz-Icon in diesem Stil wäre die bessere Lösung. Das ist aber eine
Gestaltungsaufgabe, keine Datenmigration, und blockiert diesen Change nicht.

## Risks / Trade-offs

**Studierenden-Varianten verwirren mehr als sie nutzen** → Tristan hat damit sechs
Preiszeilen je Gemüse-Paket statt vier. Abgefedert durch den `hinweis` je Variante
(Laufzeit, Lieferpause, kein Probemonat), sodass die Einschränkung an der Zeile steht und
nicht in einer Fußnote weit darunter.

**Der Katalog veraltet gegenüber der nächsten TNV** → Quellenangabe mit Version und
Seitenzahl im Dateikopf; die Ablöse-Doku `docs/anmeldung-daten-tnv-v26-4.md` hält den
Abgleich fest.

**Verwaiste Referenzen nach dem Löschen** → eigener Verifikationsschritt mit `grep` auf
`Hederer`, `hederer-sommer`, `hederer-obst` und `tristans-winter`, danach
`tsc --noEmit` und `npm run build`. Das Projekt hat keinen Testrunner; der Typecheck ist
das stärkste verfügbare Netz.

**Schweigerts ohne eigenes Bildmaterial** → Die Spec verlangt, die Lücke als offenen Punkt
festzuhalten, statt fremdes Material als das des Hofes auszugeben. Platzhalter wird als
solcher dokumentiert, nicht stillschweigend eingesetzt.

**Zwei Ernteanteile sind nicht buchbar** → Sie erscheinen trotzdem im Katalog, mit
Zustandskennzeichnung. Das ist bewusst: Die TNV, die Interessenten vorliegt, nennt sie
bereits; sie wegzulassen erzeugt den Eindruck eines Fehlers.

## Migration Plan

Kein Deployment, kein Datenbestand, keine Nutzerdaten — der Entwurf ist statisch und läuft
lokal. Rollback ist ein `git revert` des Commits.

Die Arbeit erfolgt direkt auf `main`, ohne Feature-Branch und ohne PR, entsprechend der
Projektgewohnheit.

## Open Questions

- **Sortiment des Sommergemüses bei Tristan.** Die TNV beschreibt die Kisteninhalte (S. 6)
  gemeinsam für Sommer und Winter. Ob für das Sommerpaket ein eigenes Sortiment
  kommuniziert wird, ist mit dem Hof abzustimmen. Bis dahin trägt die Seite die
  gemeinsame Beschreibung — die Spec verlangt kein getrenntes Sortiment.
- **Ansprechpartner auf der Anmeldeseite.** Die TNV nennt keine Namen, nur
  `Team.Koordination@stadt-land-beides.de`. Die Platzhalter bleiben vorerst stehen; das
  berührt weder die Paket- noch die Depotauswahl.
- **Eigenes Pilz-Icon im Signature-Stil.** Gestaltungsaufgabe, unabhängig vom Datenmodell
  nachrüstbar.
