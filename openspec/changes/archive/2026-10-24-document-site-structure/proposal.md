# Proposal

## Why

Die Website hat eine klare Informationsstruktur (Hauptmenü mit Start, Ernteanteile, Mitmachen, Fragen & Antworten), aber sie ist nirgends als überprüfbarer Vertrag festgehalten. `docs/seiten-katalog.md` ist veraltet (z. B. `/hoefe-und-ernteanteile`, `/lieferung-kalender` existieren nicht mehr). Ohne Ist-Spec lassen sich weitere Änderungen nicht als testbare Deltas formulieren: Es fehlt der Maßstab, gegen den ein Change "richtig" oder "regressiv" ist.

## What Changes

- Der Ist-Stand der Website wird **ausgehend vom Hauptmenü** als Spec dokumentiert: erst Navigation, dann jede Menüebene mit den dahinterliegenden Seiten, danach nicht im Menü verlinkte und rechtliche Seiten.
- Jede Spec beschreibt beobachtbares Verhalten (Routen, Menüeinträge, Anker, Überschriften, Pflichtinhalte, Formularfelder) mit Szenarien, die sich per Browser-/E2E-Test oder manuell prüfen lassen.
- Der Ist-Stand wird beschrieben, **nicht** verändert: kein Code, kein Content wird angefasst.
- Bekannte Abweichungen und Platzhalter im Ist-Stand (z. B. Depot-Liste im Anmeldeformular weicht von der Depot-Seite ab) werden in `design.md` als Befund festgehalten und nicht als Soll-Verhalten in die Specs übernommen.
- `docs/seiten-katalog.md` wird als Folgeschritt auf die neue Spec umgestellt bzw. durch einen Verweis ersetzt, damit es nur eine Quelle der Wahrheit gibt.

## Capabilities

### New Capabilities

- `site-navigation`: Hauptmenü (Desktop-Hover, Mobile-Accordion, drei Ebenen), Zielrouten und Anker, aktiver Menüzustand, Footer-Links, Layout-Rahmen.
- `start-page`: Startseite `/` mit Hero, "SoLaWi in 60 Sekunden", "Was bekomme ich?" und Abschluss-CTA.
- `harvest-shares`: Ernteanteile-Übersicht `/ernteanteile` nach Kategorien und die neun Ernteanteil-Detailseiten je Produkt/Hof.
- `participation`: Mitmachen `/mitmachen` mit "SoLaWi in Aktion" (Events, Highlights, Engagement), "SoLaWi in der Stadt" (Depots, Logistik) und Anmelde-CTA.
- `faq`: Fragen & Antworten `/haeufige-fragen` mit Grundlagen, Schnellen Fragen und Vereinsgeschichte.
- `depots`: Depots `/depots` mit Karte (Depots und Höfe), Öffnungszeiten, Lieferung & Abholung und Lieferrhythmus.
- `registration-contact`: Anmeldeformular `/anmeldung` und Kontakt/Anmeldung `/kontakt-anmeldung` inklusive Kontaktformular.
- `supporting-pages`: Nicht im Hauptmenü verlinkte Inhaltsseiten `/so-funktionierts`, `/solidarische-landwirtschaft`, `/kalender` und ihre Einstiegspunkte.
- `legal-pages`: `/impressum` und `/datenschutz` mit Pflichtinhalten und Footer-Erreichbarkeit.

### Modified Capabilities

<!-- Keine: openspec/specs/ ist leer, es gibt nichts zu ändern. -->

## Impact

- **Code:** keiner. Nur neue Dateien unter `openspec/changes/document-site-structure/` und nach Archivierung unter `openspec/specs/`.
- **Docs:** `docs/seiten-katalog.md` wird Folgearbeit (siehe tasks.md).
- **Nutzen für Folgearbeit:** Jede künftige Änderung (z. B. Menü umbauen, Seiten zusammenlegen, `/so-funktionierts` ins Menü aufnehmen) kann als MODIFIED/ADDED/REMOVED-Delta gegen diese Specs formuliert und über deren Szenarien getestet werden.
- **Nicht im Scope:** Gestaltung (Farben, Typografie, Wellen, Illustrationen), Texte im Wortlaut, Joomla-/SPPB-Export, Behebung der in design.md gelisteten Abweichungen.
