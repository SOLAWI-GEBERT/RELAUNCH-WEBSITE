# Informationsstruktur

Dieses Dokument bildet die Informationsarchitektur des Prototyps ab: welche Seiten es
gibt, wie sie miteinander verlinkt sind, und welche Wege typische Besucher*innen durch
die Seite nehmen. Grundlage sind `src/app/routes.tsx`, `src/app/components/Navigation.tsx`,
`src/app/components/Footer.tsx` und die Purpose-Beschreibungen in `openspec/specs/`.

Ergänzend zu den Routen-/Capability-Zuordnungen in [`docs/seiten-katalog.md`](./seiten-katalog.md)
zeigt dieses Dokument die **Navigationswege** – wie man von A nach B kommt, nicht nur, was
auf jeder Seite steht.

## Gesamtstruktur (Sitemap)

Durchgezogene Pfeile sind Hauptmenü-Links, gestrichelte Pfeile sind Footer- oder
Inline-Links innerhalb von Seiteninhalten.

```mermaid
flowchart TD
    Start["/ · Start"]
    Ernteanteile["/ernteanteile · Ernteanteile-Übersicht"]
    Detail["/ernteanteile/:slug · 10 Ernteanteil-Steckbriefe"]
    Mitmachen["/mitmachen · Wie kann ich mitmachen?"]
    Depots["/depots · Depots & Karte"]
    FAQ["/haeufige-fragen · Fragen & Antworten"]
    SoFunktionierts["/so-funktionierts · So funktioniert's"]
    SolidarischeLW["/solidarische-landwirtschaft · Was ist SoLaWi?"]
    Kalender["/kalender · Kalender (verwaist, derzeit nicht verlinkt)"]
    NewsletterVerwalten["/newsletter · Newsletter verwalten"]
    Impressum["/impressum"]
    Datenschutz["/datenschutz"]
    Mail[["E-Mail an Team.Koordination (TNV-Anhang)"]]

    Start -->|Hauptmenü| Ernteanteile
    Start -->|Hauptmenü| Mitmachen
    Start -->|Hauptmenü| FAQ
    Start -.->|Hero-CTA «Jetzt dabei sein»| SoFunktionierts
    Start -.->|«Mehr erfahren»| SolidarischeLW
    Start -.->|Produktkacheln| Detail

    Ernteanteile --> Detail

    Mitmachen -.->|«SoLaWi in der Stadt» → Depot-Details| Depots
    Mitmachen -.->|Abschluss-CTA| SoFunktionierts

    FAQ -.->|«So läuft die Anmeldung»| SoFunktionierts
    FAQ -.->|«Antwort nicht dabei?» Formular + Mail-Link| Mail

    SoFunktionierts -.->|TNV-PDF laden, ausfüllen, senden| Mail

    Start -.->|Footer| Impressum
    Start -.->|Footer| Datenschutz
    Start -.->|Footer «Über uns»| SolidarischeLW
    Start -.->|Footer-Newsletter-Formular| NewsletterVerwalten
    Start -.->|Footer «Kontakt»| FAQ
```

**Hauptmenü (3 Ebenen):** Start · Ernteanteile (nach Kategorie: Gemüse, Pilze, Obst, Beeren,
Getreide, Eier, Fleisch) · Mitmachen (SoLaWi in Aktion / SoLaWi in der Stadt) · Fragen & Antworten.

**Nicht im Hauptmenü, aber erreichbar:** `/so-funktionierts`, `/solidarische-landwirtschaft`,
`/depots` (nur über `/mitmachen` bzw. Footer), `/newsletter` (nur über das Footer-Formular),
`/impressum`, `/datenschutz` (nur Footer). `/kalender` existiert als Route, hat aber aktuell
keinen eingehenden Link.

## Personas und ihre Wege

### 1. Interessent*in – noch kein Mitglied

**Ziel:** Verstehen, was SoLaWi ist, einen passenden Ernteanteil finden und Mitglied werden.

```mermaid
flowchart LR
    A["/ Start<br/>Hero liest Claim"] --> B["#solawi-60-sekunden<br/>SoLaWi in 60 Sekunden"]
    B --> C["/solidarische-landwirtschaft<br/>vertieft «Was ist SoLaWi?»"]
    B --> D["#was-bekomme-ich<br/>Produktkacheln"]
    D --> E["/ernteanteile<br/>Übersicht nach Kategorie"]
    E --> F["/ernteanteile/:slug<br/>Hof-Steckbrief, Preis, Verfügbarkeit"]
    A --> G["Button «Jetzt dabei sein»"]
    F -->|CTA «Jetzt Ernteanteil sichern»| H
    G --> H["/so-funktionierts<br/>4 Schritte + TNV-PDF-Download"]
    H --> I["TNV ausfüllen"]
    I --> J[["Mail an<br/>Team.Koordination@stadt-land-beides.de"]]
```

Alternative Einstiege ins gleiche Ziel: Die FAQ-Sektion `#grundlagen` ("Wie kann ich
Ernteteiler werden?") verweist ebenfalls auf `/so-funktionierts`; wer vorher Rückfragen hat,
landet über `#antwort-nicht-dabei` (Formular + direkte Ansprechpartner) bei einer Beratung,
bevor die TNV verschickt wird.

### 2. Bestehende*r Ernteteiler*in – braucht Praxisinfos

**Ziel:** Wissen, wo/wann das eigene Depot öffnet, was bei Änderungen zu tun ist.

```mermaid
flowchart LR
    A["/ Start"] --> B["/mitmachen<br/>«SoLaWi in der Stadt»"]
    B --> C["#depots<br/>Depot-Teaser + Logistik"]
    C --> D["/depots#karte<br/>Karte: Höfe & Depots"]
    D --> E["#depots<br/>Öffnungszeiten je Depot"]
    E --> F["#lieferung<br/>Wann / Was / Änderungen / Hinweise"]
    F --> G["#anlieferung<br/>Lieferrhythmus"]
    B -.->|bei offenen Fragen| H["/haeufige-fragen#schnelle-fragen"]
    H -.-> I["#antwort-nicht-dabei<br/>Formular / Mail"]
```

### 3. Engagement-Interessierte*r – will sich einbringen

**Ziel:** Events finden, Ehrenamt im Verein, Vereinsgeschichte verstehen.

```mermaid
flowchart LR
    A["/ Start"] --> B["/mitmachen<br/>«SoLaWi in Aktion»"]
    B --> C["#events<br/>Zukünftige Events"]
    B --> D["#highlights<br/>Vergangene Highlights"]
    B --> E["#engagement<br/>Engagement im Verein"]
    A --> F["/haeufige-fragen"]
    F --> G["#vereinsgeschichte<br/>Wie der Verein entstand"]
    E -.->|Kontaktwunsch| H["#antwort-nicht-dabei<br/>Formular / Mail"]
```

### 4. Allgemeine*r Besucher*in / Presse – sucht rechtliche oder formale Infos

**Ziel:** Impressum, Datenschutz, Ansprechpartner oder Vereinsdaten finden — meist über
den Footer, unabhängig von der aktuell geöffneten Seite.

```mermaid
flowchart LR
    A["Beliebige Seite"] --> B["Footer"]
    B --> C["/impressum"]
    B --> D["/datenschutz"]
    B --> E["«Kontakt» → /haeufige-fragen#antwort-nicht-dabei"]
    B --> F["Newsletter-Formular → /newsletter<br/>(Abmelden / Ändern)"]
    E --> G[["Mail an<br/>Team.Koordination@stadt-land-beides.de"]]
```

## Beobachtungen

- `/kalender` ist als Route vorhanden, wird aber derzeit von keiner Seite aus verlinkt
  (toter Einstieg, kein Besucher erreicht ihn über die UI).
- Es gibt keinen eigenständigen `/anmeldung`- oder `/kontakt-anmeldung`-Pfad mehr (siehe
  `openspec/changes/kontakt-newsletter-neu-ordnen/`): Der reale Anmeldeweg führt immer über
  TNV-Download auf `/so-funktionierts` und eine E-Mail, nicht über ein Webformular.

### Behoben (2026-10-24)

- **Veraltetes PDF:** Der Download-Button auf `/so-funktionierts` verlinkte noch auf
  `TNV_StadtLandBeides_V9_3_2026.pdf`, während die aktuelle Datengrundlage
  (`src/app/data/ernteanteile.ts`, Change `update-hoefe-tnv-v26-4`) bereits
  `TNV_StadtLandBeides_V26_4.pdf` nutzt. Link korrigiert.
- **Sackgasse Ernteanteil-Detailseiten:** Die zehn Hof-Steckbriefseiten hatten keinen
  Link oder CTA. Jede Seite bekommt jetzt am Fuß einen Button "Jetzt Ernteanteil
  sichern" → `/so-funktionierts`.
- **Kaputter Anker:** Der Link "Teilnahmebedingungen" auf `/so-funktionierts` zeigte auf
  `/mitmachen#teilnahme`, den es nicht gab. `Mitmachen.tsx` hat jetzt
  `id="teilnahme"` auf dem Abschluss-Abschnitt "Bereit mitzumachen?", auf den der Link
  zeigt.
