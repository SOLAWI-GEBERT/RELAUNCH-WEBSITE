# To-do

Offene Punkte aus der Datenschutz- und Impressumsprüfung vom **24.10.2026**.
Ausführliche Begründungen und die Fristen-Tabelle stehen in
[loeschkonzept.md](loeschkonzept.md).

Legende: 🔴 vor dem Livegang zwingend · 🟠 vor dem Livegang empfohlen ·
🟡 danach

---

## 1. Verträge und Nachweise (Verein)

- [ ] 🔴 **AV-Vertrag mit ALL-INKL abschließen** (Art. 28 DSGVO).
      Die AGB des Hosters genügen dafür nicht — Art. 28 Abs. 3 verlangt
      festgelegte Pflichtinhalte (Weisungsbindung, Unterauftragsverarbeiter,
      Löschung nach Auftragsende, Unterstützung bei Betroffenenanfragen).
      ALL-INKL stellt den AVV im Mitgliederbereich (KAS) bereit.
      Bestätigung archivieren — sie ist der Nachweis gegenüber dem BayLDA.
      *Solange das offen ist, ist die Zusage in `Datenschutz.tsx` § 9.1 falsch.*
- [ ] 🔴 **AV-Vertrag mit Haufe-Lexware abschließen**, sobald Lexware Office
      im Einsatz ist. Im Konto unter den Einstellungen mit einem Klick
      möglich. Betrifft die Zusage in § 9.3.
- [ ] 🟠 **Logfile-Speicherdauer bei ALL-INKL erfragen.** In § 9.1 und § 6.4
      stehen 7 Tage — die Zahl stammt aus der alten Erklärung und ist
      unbelegt. Üblich sind 14 oder 30 Tage. Echten Wert melden, dann werden
      beide Stellen korrigiert.
- [ ] 🟠 **Vorstandsbeschluss zum Löschkonzept** fassen. Fertiger
      Formulierungsvorschlag in [loeschkonzept.md](loeschkonzept.md)
      Abschnitt 6. Grund: Die Datenschutzerklärung sagt jetzt eine
      Zwei-Jahres-Frist zu; eine zugesagte, aber unverbindlich abgearbeitete
      Frist ist im Prüffall schlechter als keine.
- [ ] 🟡 **Technische und organisatorische Maßnahmen (Art. 32 DSGVO)**
      festlegen für die Arbeit auf privaten Geräten der Ehrenamtlichen —
      mindestens Geräteverschlüsselung und Bildschirmsperre. Danach § 4 der
      Erklärung präzisieren („haushaltsübliche Schutzmaßnahmen" ist derzeit
      ein schriftlicher Eigenbeleg für ein mögliches Defizit).
- [x] ~~🟡 **§ 36 VSBG prüfen**~~ — geprüft am 24.10.2026, **kein Hinweis
      nötig**. § 36 Abs. 3 VSBG nimmt Unternehmer aus, die am 31. Dezember des
      Vorjahres zehn oder weniger Personen beschäftigt haben. Der Verein
      arbeitet rein ehrenamtlich. Gilt auch dann, wenn die TNV online
      angebahnt wird — die Ausnahme greift unabhängig von der
      AGB-Verwendung. Neu zu prüfen erst, wenn der Verein mehr als zehn
      Personen beschäftigt.

## 1a. Impressum

- [ ] 🔴 **Vertretungsberechtigte vollständig nennen** (§ 5 Abs. 1 Nr. 1 DDG).
      `Impressum.tsx` nennt nur Sebastian Lades. Satzung § 9 Abs. 3 bestimmt
      den Vorstand als 1. Vorsitzender, 2. Vorsitzender und Kassenwart —
      drei Personen. Maßgeblich ist der Eintrag im Vereinsregister VR 202062
      samt Vertretungsregelung (Einzel- oder Gesamtvertretung).
      Danach `Impressum.tsx`, `Datenschutz.tsx` § 1 und
      `FragenAntworten.tsx:327` auf einen Stand bringen — die drei Stellen
      nennen derzeit drei verschiedene Besetzungen.
      *Verstoß ist bußgeldbewehrt (bis 50.000 €) und abmahnfähig; Abmahnkosten
      kann ein Mitbewerber seit § 13 Abs. 4 Nr. 1 UWG nicht verlangen,
      Verbände schon.*
- [ ] 🔴 **Urheber der Signature-Illustrationen klären** (`ablauf-*.jpg`,
      `decision-*.jpg`, `features-*.jpg`). Im Bildnachweis steht derzeit ein
      sichtbarer Platzhalter — **der darf nicht live gehen**. Bei
      Auftragsarbeit ist die Namensnennung nach § 13 UrhG verpflichtend; bei
      rein KI-generierten Bildern entfällt sie (kein Urheber im Sinne des
      UrhG), eine freiwillige Kennzeichnung ist trotzdem sinnvoll.
- [ ] 🟡 **Wirtschafts-Identifikationsnummer ergänzen**, sobald das Schreiben
      des BZSt vorliegt. § 5 Abs. 1 Nr. 6 DDG verlangt neben der USt-IdNr.
      auch die W-IdNr. nach § 139c AO, sofern vorhanden. Vergabe läuft seit
      November 2024 gestaffelt.
- [ ] 🟡 **Depositphotos-Lizenzen je Bild prüfen:** Manche Lizenzmodelle
      verlangen eine Nennung pro Bild, nicht nur eine Sammelnennung.
- [ ] 🟡 **IBAN im Impressum überdenken** — keine Rechtspflicht nach § 5 DDG.
      Veröffentlichte Kontodaten werden regelmäßig für unberechtigte
      Lastschriften missbraucht. Reine Erwägung, kein Mangel.

## 2. Newsletter (AcyMailing)

- [ ] 🔴 **Double-Opt-in verifizieren.** In AcyMailing unter
      *Konfiguration → Abonnement* muss der Schalter
      **„Bestätigung erforderlich"** aktiv sein.
      Hintergrund: Ein Newsletter ist rechtlich Werbung, § 7 Abs. 2 Nr. 2 UWG
      verlangt die vorherige ausdrückliche Einwilligung, und Art. 7 Abs. 1
      DSGVO verlangt, dass ihr sie nachweisen könnt. Single-Opt-in erfüllt
      beides nicht. `Datenschutz.tsx` § 9.4 beschreibt bereits
      Double-Opt-in — Erklärung und Praxis müssen übereinstimmen.
- [ ] 🟠 **Opt-in-Protokollierung prüfen:** Zeitpunkt von Anmeldung und
      Bestätigung müssen gespeichert werden (so in § 9.4 zugesagt),
      Aufbewahrung 3 Jahre nach Abmeldung.

## 3. Website / Joomla-Umsetzung

- [ ] 🔴 **Google Fonts im Helix-Template lokal laden.** Im Prototyp ist das
      erledigt (`public/fonts/`, `src/styles/fonts.css`, keine Google-Hosts
      mehr in `index.html`). Helix lädt die Schriften aber standardmäßig
      selbst von Google — ohne die entsprechende Template-Einstellung ist der
      Fehler nach dem Umzug wieder drin. Die 24 `woff2`-Dateien können direkt
      ins Template-Verzeichnis übernommen werden.
      *Hintergrund: LG München I, 20.01.2022, Az. 3 O 17493/20.*
- [ ] 🟠 **OpenStreetMap-Karte: Zwei-Klick-Lösung.** `Depots.tsx:88` lädt die
      Tiles beim Seitenaufruf ungefragt, damit geht die IP an die
      OSM-Tileserver. § 9.2 stützt das auf Art. 6 Abs. 1 lit. f, was
      vertretbar aber angreifbar ist (OLG Frankfurt, Dez. 2025, zu § 25
      TDDDG). Alternative: Tiles von einem EU-Anbieter oder selbst hosten.
      Beim Bau so umsetzen, dass es als SPPB-Addon nachbildbar ist.
      *Drittland ist kein Problem: UK-Angemessenheitsbeschluss gilt bis
      Dezember 2031.*
- [ ] 🟠 **Opt-in für die Sichtbarkeit im Mitgliederbereich.** § 3.3 nennt,
      dass Name, E-Mail und Telefon für andere Ernteteiler einsehbar sind.
      Das ist für die Vertragserfüllung nicht erforderlich, lässt sich also
      nicht auf Art. 6 Abs. 1 lit. b stützen — es braucht ein separat
      abwählbares Opt-in (Art. 7 Abs. 4, Koppelungsverbot).
- [ ] 🟡 **Formulare anschließen.** `InteresseFormular.tsx`,
      `NewsletterAnmeldung.tsx` und `Newsletter.tsx` sind derzeit Platzhalter
      und versenden nichts. Beim Anschluss an die Joomla-Formularmodule
      prüfen: Pflichtfeld-Kennzeichnung, Zweckbindung der erhobenen Felder,
      und ob § 9 um den eingesetzten Dienst ergänzt werden muss.

## 4. Teilnahmevereinbarung (TNV)

- [ ] 🟠 **Widerrufshinweis bei der Foto-Einwilligung ergänzen.** Die TNV
      V9.3 kennzeichnet die Einwilligung korrekt als freiwillig
      („nicht verpflichtend!"), nennt aber nicht, dass sie jederzeit
      widerrufen werden kann. Art. 7 Abs. 3 Satz 3 DSGVO verlangt, dass
      darauf **vor** Abgabe der Einwilligung hingewiesen wird.
      Vorschlag für den Zusatz:
      > Diese Einwilligung kannst du jederzeit widerrufen, ohne dass dir
      > daraus Nachteile entstehen. Der Widerruf wirkt für die Zukunft:
      > Wir entfernen die Fotos aus unseren digitalen Kanälen, bereits
      > gedruckte Materialien können wir nicht zurückrufen. Eine E-Mail an
      > Team.Koordination@stadt-land-beides.de genügt.
- [ ] 🟡 **Verweis auf die Löschfristen** in der TNV ergänzen, damit TNV und
      Datenschutzerklärung Ziffer 6 übereinstimmen.

---

## Erledigt am 24.10.2026

- [x] Google Fonts lokalisiert — 24 `woff2` in `public/fonts/`,
      `src/styles/fonts.css` gefüllt, `preconnect`- und Stylesheet-Links aus
      `index.html` entfernt. Verifiziert: keine Google-Hosts mehr in `src/`,
      `index.html`, `dist/index.html`.
- [x] Impressum: `§§ 5 I TMG, 55 I RStV` → `§ 5 DDG`,
      `§ 55 I RStV / § 5 I TMG` → `§ 5 Abs. 1 Nr. 1 DDG`,
      `§ 55 II RStV` → `§ 18 Abs. 2 MStV`.
- [x] § 1: „Zusätzlich Befugte" zu den Empfängern verschoben, § 38
      BDSG-Klarstellung zum Datenschutzbeauftragten ergänzt.
- [x] § 3.1 / § 3.2: Widerspruch zu § 9.1 aufgelöst, Interessenten und
      Warteliste sowie Fördermitglieder als eigene Kategorie aufgenommen.
- [x] § 3.3: vorvertragliche Maßnahmen ergänzt, berechtigtes Interesse auf
      die Kassenprüfer-Begründung präzisiert, Koppelungssatz durch eine
      erklärende Fassung ersetzt.
- [x] § 5: Empfänger als vier klare Kategorien inkl. Auftragsverarbeiter,
      UK-Angemessenheitsbeschluss ergänzt.
- [x] § 6 neu gegliedert: 6.1 laufender Ernteanteil (Kündigungsmechanismus
      aus der TNV), 6.2 nach dem Ausstieg (2 Jahre, HGB/AO 10 Jahre, SEPA
      14 Monate, Trennung Ernteanteil/Mitgliedschaft), 6.3 Anfragen und
      Warteliste (24 Monate), 6.4 Newsletter/Fotos/Logfiles.
- [x] § 7: § 25 Abs. 2 Nr. 2 TDDDG benannt, lokale Schriften dokumentiert.
- [x] § 8: Widerspruchsrecht gegen Direktwerbung als hervorgehobener Block
      (Art. 21 Abs. 4), Klarstellung zu Art. 22 (kein Profiling).
- [x] § 9.1: falsches Normzitat korrigiert — Art. 28 DSGVO ist die
      AV-Vertragsnorm, keine Rechtsgrundlage.
- [x] § 9.3: „Lexoffice" → „Lexware Office" (Umbenennung Ende 2024),
      Datenkategorien, Rechtsgrundlagen, Serverstandort ergänzt.
- [x] § 9.4 Newsletter neu (AcyMailing auf eigenem Server, Double-Opt-in).
- [x] § 9.5: Google-Analytics-Altlast ersetzt durch Aussage zu Analyse- und
      Social-Media-Diensten.
- [x] § 10: Stand auf Oktober 2026.
- [x] `docs/loeschkonzept.md` als interne Vorstandsunterlage angelegt.

### Impressumsprüfung, zweiter Durchgang

- [x] **§ 18 Abs. 2 MStV:** Anschrift des inhaltlich Verantwortlichen
      ergänzt. Die Norm verlangt „Name **und Anschrift**" — genannt war nur
      der Name. *Nebenbefund: Die Pflicht greift nur bei
      journalistisch-redaktionell gestalteten Angeboten. Die Seite hat keine
      Blog-, News- oder Aktuelles-Route, die Norm ist derzeit also
      wahrscheinlich nicht anwendbar. Angabe bleibt als Vorsorge stehen und
      wird mit einer Aktuelles-Seite zwingend.*
- [x] **§ 5 Abs. 1 Nr. 4 DDG:** „Registergericht Nürnberg" →
      „Vereinsregister des Amtsgerichts Nürnberg". Die Norm verlangt die
      Angabe des *Registers*, nicht des Gerichts.
- [x] **§ 5 Abs. 1 Nr. 6 DDG:** USt-IdNr. mit Normbezug „nach § 27a UStG"
      versehen.
- [x] **Überschrift „Haftungsausschluss"** → „Werbe- und Spamwiderspruch".
      Der Text war nie ein Haftungsausschluss. Ein formelhafter Disclaimer
      wurde bewusst *nicht* ergänzt: Die Verantwortlichkeit für eigene und
      fremde Inhalte regeln §§ 7–10 DDG kraft Gesetzes.
- [x] **Bildnachweis** nach Kategorien gegliedert (Hof-/Depotaufnahmen →
      Andreas Gebert, Stockmaterial → Depositphotos, Wort-/Bildmarke →
      Verein, Kartendarstellung → OpenStreetMap/ODbL). Illustrationen offen,
      siehe Abschnitt 1a.
- [x] **ODR-Link:** geprüft, keiner vorhanden — richtig so. Die
      ODR-Verordnung (EU) 524/2013 ist durch VO (EU) 2024/3228 aufgehoben,
      die Plattform am 20.07.2025 abgeschaltet. Ein vorhandener Link wäre
      jetzt irreführend.
- [x] **Aufsichtsbehörde (§ 5 Abs. 1 Nr. 3 DDG):** keine Angabe nötig. Der
      Depotbetrieb ist nach Art. 6 Abs. 2 VO (EG) 852/2004 registrierungs-,
      nicht zulassungspflichtig. Neu zu prüfen nur bei eigener Zerlegung oder
      Verarbeitung tierischer Erzeugnisse (VO (EG) 853/2004).
- [x] **Fernabsatzangaben** (Art. 246a EGBGB, Widerrufsbelehrung): derzeit
      kein Online-Vertragsschluss, keine `/anmeldung`-Route. Beim Anschluss
      der Formulare neu bewerten — gehört dann in die TNV, nicht ins
      Impressum.
- [x] **Erreichbarkeit** (§ 5 Abs. 1 DDG, „leicht erkennbar, unmittelbar
      erreichbar, ständig verfügbar"): Footer-Link auf jeder Seite über
      `Layout.tsx`, ein Klick. Erfüllt.
