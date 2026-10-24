# Tasks

Reihenfolge nach `design.md` — Decisions, „Reihenfolge: anlegen, umhängen, dann löschen".
Der Dev-Server läuft während der Arbeit; Gruppe 7 darf erst starten, wenn Gruppe 5 und 6
abgeschlossen sind.

## 1. Datenmodell und Quellendokumentation

- [ ] 1.1 `docs/anforderung-tnv-v26-4.md` anlegen mit dem Delta V9.3 → V26.4, allen 23
      Preisvarianten mit Seitenbeleg und den festgehaltenen Annahmen; verifizieren, indem
      jede Preiszeile gegen die TNV-Seiten 1, 2 und 9 gegengelesen wird
- [ ] 1.2 `src/app/data/ernteanteile.ts` anlegen mit den Typen `Ernteanteil`, `Variante`,
      `Verfuegbarkeit` und `Kategorie`, dem Vereinsbeitrag und allen 10 Ernteanteilen;
      verifizieren mit `npx tsc --noEmit` ohne Fehler
- [ ] 1.3 Bieterrunden-Kennzeichen je Variante setzen — bei Tristan nur Normal und Klein,
      nicht die Studierenden-Varianten; verifizieren gegen die `BR`-Markierungen in der
      TNV-Tabelle S. 1
- [ ] 1.4 Gruppierungsfunktion nach Kategorie ergänzen, die leere Kategorien auslässt;
      verifizieren, dass sie 7 Kategorien in der definierten Reihenfolge liefert und
      „Pilze" enthält
- [ ] 1.5 `src/app/data/hoefe.ts` um `schweigerts` erweitern (Rockenbach, Pilzzucht, nach
      TNV S. 10) und `tristan` nach TNV S. 6 aktualisieren (Bioland, 35 ha, Vermarktung
      über SoLawi, Märkte, Hofladen); `hederer` bleibt vorerst stehen — Verifikation über
      `npx tsc --noEmit`
- [ ] 1.6 Fehlendes Bildmaterial für Schweigerts als offenen Punkt in
      `docs/anforderung-tnv-v26-4.md` festhalten statt Fremdmaterial als Hoffoto
      auszugeben; verifizieren, dass der Punkt im Abschnitt „Offene Punkte" steht

## 2. Darstellungs-Komponenten

- [ ] 2.1 `VerfuegbarkeitsBadge.tsx` anlegen, das für „geplant" den Zeitpunkt und für
      „Warteliste" den Hinweis zeigt und bei „verfügbar" nichts rendert; verifizieren
      durch Einbinden auf der Übersicht und Sichtprüfung aller drei Zustände
- [ ] 2.2 `PreisTabelle.tsx` anlegen, das je Variante Größe, Zyklus, Lieferphase,
      Paketpreis, solidarischen Beitrag und Gesamtbetrag ausgibt und Bieterrunden-Zeilen
      als Richtpreis kennzeichnet; verifizieren an Tristan Wintergemüse, wo gemischte
      Varianten auftreten
- [ ] 2.3 Variantenhinweise (Laufzeit, Lieferpause, kein Probemonat) an der jeweiligen
      Zeile ausgeben, nicht als Fußnote; verifizieren an den Studierenden-Varianten
- [ ] 2.4 Vereinsbeitrag als eigenen Posten mit Einmal-Hinweis darstellen; verifizieren,
      dass er auf jeder Ernteanteil-Detailseite erscheint und nicht in den Paketbetrag
      eingerechnet ist

## 3. Neue Ernteanteil-Seiten und Routen

- [ ] 3.1 `ernteanteile/SchweigertsEdelpilze.tsx` anlegen mit Hof-Steckbrief,
      Preistabelle und Sortiment nach TNV S. 10; verifizieren über Aufruf von
      `/ernteanteile/schweigerts-edelpilze`
- [ ] 3.2 `ernteanteile/TristanSommergemuese.tsx` anlegen mit Badge „ab April 2027";
      verifizieren über Aufruf von `/ernteanteile/tristan-sommer`
- [ ] 3.3 `ernteanteile/KirschgartenObst.tsx` anlegen mit Badge „Warteliste" und dem
      Hinweis nach TNV S. 9, dass zunächst keine neuen Anteile möglich sind; verifizieren
      über Aufruf von `/ernteanteile/kirschgarten-obst`
- [ ] 3.4 Die drei neuen Routen in `routes.tsx` eintragen und
      `/ernteanteile/tristans-winter` auf `tristan-winter` umbenennen; verifizieren, dass
      alle vier Routen laden

## 4. Bestehende Detailseiten auf Preise umstellen

- [ ] 4.1 `TristansWintergemuese.tsx` auf `PreisTabelle` umstellen, Varianten-Tabelle und
      den Platzhaltersatz „siehe Teilnahmevereinbarung" ersetzen; verifizieren, dass alle
      6 Varianten mit Beträgen erscheinen
- [ ] 4.2 `KirschgartenBeeren.tsx` auf `PreisTabelle` umstellen; verifizieren, dass
      38,00 €/Monat und der Zahlzeitraum Juli–September erscheinen
- [ ] 4.3 Die fünf `Walz*.tsx` auf `PreisTabelle` umstellen; verifizieren, dass keine
      Datei mehr „siehe Teilnahmevereinbarung" enthält (`grep -rn "siehe
      Teilnahmevereinbarung" src/`)
- [ ] 4.4 Bieterrunden-Erklärung nur auf Seiten mit Bieterrunden-Varianten einbinden;
      verifizieren, dass sie bei Tristan erscheint und bei Walz, Kirschgarten und
      Schweigerts fehlt

## 5. Übersichten und Navigation auf den Katalog umstellen

- [ ] 5.1 `pages/Ernteanteile.tsx` auf die Gruppierungsfunktion umstellen statt lokaler
      Kategorienliste, mit Verfügbarkeits-Badge je Kachel; verifizieren, dass 10
      Ernteanteile in 7 Kategorien erscheinen
- [ ] 5.2 `components/Navigation.tsx` aus demselben Katalog speisen; verifizieren, dass
      die Kategorie „Pilze" erscheint und kein Hederer-Eintrag mehr auftaucht
- [ ] 5.3 `pages/Home.tsx` — Teaser-Kacheln auf bestehende Ernteanteile umhängen, Hederer
      ersetzen; verifizieren, dass jede Kachel auf eine ladende Route zeigt
- [ ] 5.4 `pages/SolidarischeLandwirtschaft.tsx` von 4 auf 5 Hof-Kacheln erweitern;
      verifizieren, dass Schweigerts erscheint und Hederer fehlt
- [ ] 5.5 `pages/Depots.tsx` — Hederer-Kartenmarker entfernen, Schweigerts (Rockenbach)
      ergänzen, Tristans Beschreibung um Sommergemüse erweitern; Depot-Liste unverändert
      lassen; verifizieren, dass die Karte 4 Höfe und unverändert 9 Depots zeigt
- [ ] 5.6 `pages/Kalender.tsx` — Lieferrhythmus auf den aktuellen Bestand bringen;
      verifizieren, dass keine Hederer-Zeile mehr erscheint

## 6. Anmeldung

- [ ] 6.1 Paketauswahl in `pages/Anmeldung.tsx` auf den Katalog umstellen und die
      erfundenen Pakete entfernen; verifizieren, dass „Käse von Kerschbaum", „Eier Gallini
      Fellici", „Reimehof" und „Ganzjahrespaket" nicht mehr vorkommen
- [ ] 6.2 Nicht buchbare Ernteanteile aus der Auswahl ausschließen oder als nicht wählbar
      kennzeichnen; verifizieren, dass Tristan Sommergemüse und Kirschgarten Obst nicht
      als sofort buchbar erscheinen
- [ ] 6.3 Depotauswahl auf die 9 realen Depots nach TNV S. 3 umstellen, Wartelisten-Depots
      gekennzeichnet; verifizieren gegen die Depot-Liste in `pages/Depots.tsx`

## 7. Hederer entfernen

- [ ] 7.1 `ernteanteile/HedererSommergemuese.tsx` und `ernteanteile/HedererObst.tsx`
      löschen sowie ihre beiden Routen aus `routes.tsx` entfernen; verifizieren, dass die
      Dateien weg sind
- [ ] 7.2 `hederer` aus `src/app/data/hoefe.ts` entfernen; verifizieren mit
      `npx tsc --noEmit` ohne Fehler
- [ ] 7.3 Auf verwaiste Referenzen prüfen:
      `grep -rn "Hederer\|hederer-sommer\|hederer-obst\|tristans-winter" src/` muss leer
      bleiben

## 8. Integrationsprüfung

- [ ] 8.1 `npx tsc --noEmit` läuft fehlerfrei durch
- [ ] 8.2 `npm run build` läuft fehlerfrei durch
- [ ] 8.3 Alle 11 Ernteanteil-Routen und die Seiten Start, Ernteanteile, SoLaWi, Depots,
      Kalender und Anmeldung im Browser aufrufen; verifizieren, dass keine Seite einen
      Fehler zeigt und nirgends ein Hof genannt wird, der nicht mehr dabei ist
- [ ] 8.4 Stichprobe gegen die TNV: drei Preiszeilen aus verschiedenen Höfen auf der
      Website mit den Tabellen auf TNV S. 1 und S. 2 vergleichen
