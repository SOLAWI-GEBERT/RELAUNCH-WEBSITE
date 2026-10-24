# Tasks

Reihenfolge nach `design.md` — Decisions, „Reihenfolge: anlegen, umhängen, dann löschen".
Der Dev-Server läuft während der Arbeit; Gruppe 7 darf erst starten, wenn Gruppe 5 und 6
abgeschlossen sind.

## 1. Datenmodell und Quellendokumentation

- [x] 1.1 `docs/anforderung-tnv-v26-4.md` anlegen mit dem Delta V9.3 → V26.4, allen 23
      Preisvarianten mit Seitenbeleg und den festgehaltenen Annahmen; verifizieren, indem
      jede Preiszeile gegen die TNV-Seiten 1, 2 und 9 gegengelesen wird
- [x] 1.2 `src/app/data/ernteanteile.ts` anlegen mit den Typen `Ernteanteil`, `Variante`,
      `Verfuegbarkeit` und `Kategorie`, dem Vereinsbeitrag und allen 10 Ernteanteilen;
      verifizieren mit `npm run build` ohne Fehler
- [x] 1.3 Bieterrunden-Kennzeichen je Variante setzen — bei Tristan nur Normal und Klein,
      nicht die Studierenden-Varianten; verifizieren gegen die `BR`-Markierungen in der
      TNV-Tabelle S. 1
- [x] 1.4 Gruppierungsfunktion nach Kategorie ergänzen, die leere Kategorien auslässt;
      verifizieren, dass sie 7 Kategorien in der definierten Reihenfolge liefert und
      „Pilze" enthält
- [x] 1.5 `src/app/data/hoefe.ts` um `schweigerts` erweitern (Rockenbach, Pilzzucht, nach
      TNV S. 10) und `tristan` nach TNV S. 6 aktualisieren (Bioland, 35 ha, Vermarktung
      über SoLawi, Märkte, Hofladen); `hederer` bleibt vorerst stehen — Verifikation über
      `npm run build`
- [x] 1.6 Fehlendes Bildmaterial für Schweigerts als offenen Punkt in
      `docs/anforderung-tnv-v26-4.md` festhalten statt Fremdmaterial als Hoffoto
      auszugeben; verifizieren, dass der Punkt im Abschnitt „Offene Punkte" steht

## 2. Darstellungs-Komponenten

- [x] 2.1 `VerfuegbarkeitsBadge.tsx` anlegen, das für „geplant" den Zeitpunkt und für
      „Warteliste" den Hinweis zeigt und bei „verfügbar" nichts rendert; verifizieren
      durch Einbinden auf der Übersicht und Sichtprüfung aller drei Zustände
- [x] 2.2 `PreisTabelle.tsx` anlegen, das je Variante Größe, Zyklus, Lieferphase,
      Paketpreis, solidarischen Beitrag und Gesamtbetrag ausgibt und Bieterrunden-Zeilen
      als Richtpreis kennzeichnet; verifizieren an Tristan Wintergemüse, wo gemischte
      Varianten auftreten
- [x] 2.3 Variantenhinweise (Laufzeit, Lieferpause, kein Probemonat) an der jeweiligen
      Zeile ausgeben, nicht als Fußnote; verifizieren an den Studierenden-Varianten
- [x] 2.4 Vereinsbeitrag als eigenen Posten mit Einmal-Hinweis darstellen; verifizieren,
      dass er auf jeder Ernteanteil-Detailseite erscheint und nicht in den Paketbetrag
      eingerechnet ist

## 3. Neue Ernteanteil-Seiten und Routen

- [x] 3.1 `ernteanteile/SchweigertsEdelpilze.tsx` anlegen mit Hof-Steckbrief,
      Preistabelle und Sortiment nach TNV S. 10; verifizieren über Aufruf von
      `/ernteanteile/schweigerts-edelpilze`
- [x] 3.2 `ernteanteile/TristanSommergemuese.tsx` anlegen mit Badge „ab April 2027";
      verifizieren über Aufruf von `/ernteanteile/tristan-sommer`
- [x] 3.3 `ernteanteile/KirschgartenObst.tsx` anlegen mit Badge „Warteliste" und dem
      Hinweis nach TNV S. 9, dass zunächst keine neuen Anteile möglich sind; verifizieren
      über Aufruf von `/ernteanteile/kirschgarten-obst`
- [x] 3.4 Die drei neuen Routen in `routes.tsx` eintragen und
      `/ernteanteile/tristans-winter` auf `tristan-winter` umbenennen; verifizieren, dass
      alle vier Routen laden

## 4. Bestehende Detailseiten auf Preise umstellen

- [x] 4.1 `TristansWintergemuese.tsx` auf `PreisTabelle` umstellen, Varianten-Tabelle und
      den Platzhaltersatz „siehe Teilnahmevereinbarung" ersetzen; verifizieren, dass alle
      6 Varianten mit Beträgen erscheinen
- [x] 4.2 `KirschgartenBeeren.tsx` auf `PreisTabelle` umstellen; verifizieren, dass
      38,00 €/Monat und der Zahlzeitraum Juli–September erscheinen
- [x] 4.3 Die fünf `Walz*.tsx` auf `PreisTabelle` umstellen; verifizieren, dass keine
      Datei mehr „siehe Teilnahmevereinbarung" enthält (`grep -rn "siehe
      Teilnahmevereinbarung" src/`) — Stand nach Gruppe 4: nur noch die beiden
      Hederer-Seiten betroffen, die in Gruppe 7 entfallen
- [x] 4.4 Bieterrunden-Erklärung nur auf Seiten mit Bieterrunden-Varianten einbinden;
      verifizieren, dass sie bei Tristan erscheint und bei Walz, Kirschgarten und
      Schweigerts fehlt — über `PreisTabelle`s `hatBieterrunde()`-Prüfung strukturell
      sichergestellt, kein manuelles Einbinden mehr nötig

## 5. Übersichten und Navigation auf den Katalog umstellen

- [x] 5.1 `pages/Ernteanteile.tsx` auf die Gruppierungsfunktion umstellen statt lokaler
      Kategorienliste, mit Verfügbarkeits-Badge je Kachel; verifizieren, dass 10
      Ernteanteile in 7 Kategorien erscheinen
- [x] 5.2 `components/Navigation.tsx` aus demselben Katalog speisen; verifizieren, dass
      die Kategorie „Pilze" erscheint und kein Hederer-Eintrag mehr auftaucht
- [x] 5.3 `pages/Home.tsx` — Teaser-Kacheln auf bestehende Ernteanteile umhängen, Hederer
      ersetzen; verifizieren, dass jede Kachel auf eine ladende Route zeigt
- [x] 5.4 `pages/SolidarischeLandwirtschaft.tsx` — Hederer-Kachel durch Schweigerts
      ersetzen, Tristan-Kachel auf die neue Route umhängen (bleibt bei 4 Hof-Kacheln,
      nicht 5 — Korrektur eines Zählfehlers in proposal.md); verifizieren, dass
      Schweigerts erscheint und Hederer fehlt
- [x] 5.5 `pages/Depots.tsx` — Hederer-Kartenmarker entfernen, Schweigerts (Rockenbach)
      ergänzen, Tristans Beschreibung um Sommergemüse erweitern; Depot-Liste unverändert
      lassen; zusätzlich entdeckt und mitkorrigiert: eine zweite, bisher nicht erfasste
      Lieferrhythmus-Tabelle in derselben Datei (Abschnitt „Lieferrhythmus") nannte
      ebenfalls Hederer — auf den aktuellen Katalog gebracht; verifizieren, dass die
      Karte 4 Höfe und unverändert 9 Depots zeigt
- [x] 5.6 `pages/Kalender.tsx` — Lieferrhythmus auf den aktuellen Bestand bringen;
      verifizieren, dass keine Hederer-Zeile mehr erscheint

## 6. Anmeldung

- [x] 6.1 Paketauswahl in `pages/Anmeldung.tsx` auf den Katalog umstellen und die
      erfundenen Pakete entfernen; verifizieren, dass „Käse von Kerschbaum", „Eier Gallini
      Fellici", „Reimehof" und „Ganzjahrespaket" in der Paketauswahl nicht mehr vorkommen
      — NICHT behoben: dieselben Begriffe stehen separat im FAQ-Block am Seitenende
      (fiktive Saison-/Kündigungsregeln), außerhalb des Scopes dieser Task; dem Nutzer
      gemeldet
- [x] 6.2 Nicht buchbare Ernteanteile aus der Auswahl ausschließen oder als nicht wählbar
      kennzeichnen; verifizieren, dass Tristan Sommergemüse und Kirschgarten Obst nicht
      als sofort buchbar erscheinen — per `disabled`-Radio plus VerfuegbarkeitsBadge
- [x] 6.3 Depotauswahl auf die 9 realen Depots nach TNV S. 3 umstellen, Wartelisten-Depots
      gekennzeichnet; verifizieren gegen die Depot-Liste in `pages/Depots.tsx` — `depots`
      dort exportiert und hier importiert, eine Quelle statt Dublette

## 7. Hederer entfernen

- [x] 7.1 `ernteanteile/HedererSommergemuese.tsx` und `ernteanteile/HedererObst.tsx`
      löschen sowie ihre beiden Routen aus `routes.tsx` entfernen; verifizieren, dass die
      Dateien weg sind — zusätzlich `components/BieterrundeInfo.tsx` gelöscht, da nur von
      diesen beiden Seiten verwendet und seit Gruppe 4 durch `PreisTabelle` ersetzt
- [x] 7.2 `hederer` aus `src/app/data/hoefe.ts` entfernen; verifizieren mit
      `npm run build` ohne Fehler — grün, 2105 → 2102 Module
- [x] 7.3 Auf verwaiste Referenzen prüfen:
      `grep -rn "Hederer\|hederer-sommer\|hederer-obst\|tristans-winter" src/` — zwei
      Treffer in `src/imports/*.md`, unreferenzierte Figma-Export-Dokumente (siehe
      CLAUDE.md), kein Live-Code; sonst leer

## 8. Integrationsprüfung

- [x] 8.1 `npm run build` läuft fehlerfrei durch — einziger verfügbarer Build-/Typecheck,
      da das Projekt kein `tsconfig.json` und keinen Testrunner hat
- [x] 8.2 Alle 11 Ernteanteil-Routen und die Seiten Start, Ernteanteile, SoLaWi, Depots,
      Kalender und Anmeldung im Browser aufrufen; verifizieren, dass keine Seite einen
      Fehler zeigt und nirgends ein Hof genannt wird, der nicht mehr dabei ist —
      ABWEICHUNG: kein echter Browser-Rundgang möglich, Chrome DevTools MCP konnte sich
      nicht verbinden (Profil bereits durch ein laufendes Chrome-Fenster belegt, vermutlich
      des Nutzers). Ersatzweise verifiziert: alle 16 Routen liefern HTTP 200 vom
      Dev-Server; jedes `ernteanteilNach("<slug>")!` referenziert einen tatsächlich
      definierten Slug (kein Laufzeitabsturz durch den Non-Null-Operator möglich); jeder
      verwendete `hof`-Schlüssel existiert in `hoefe.ts`. Kein echter Check auf
      Konsolenfehler oder visuelles Rendering — dem Nutzer gemeldet
- [x] 8.3 Stichprobe gegen die TNV: drei Preiszeilen aus verschiedenen Höfen auf der
      Website mit den Tabellen auf TNV S. 1 und S. 2 vergleichen — Tristan Winter Normal
      wöchentlich (122,20 €+14,00 €, BR), Schweigerts 300 g 14-tägig (13,89 €+2,00 €),
      Walz Bratgockerl (8,00 €+1,00 €): alle drei stimmen exakt
