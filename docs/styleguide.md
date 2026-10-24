# Styleguide Prototyp — Typografie & Layout

Stand 2026-09-06. Ziel: Der React-Prototyp rendert dieselbe Hierarchie wie das
Joomla-Template (Helix-Style `export/SLB_init_27-09-2025.json`), damit der
SPPB-Export ohne Nacharbeit dieselbe Wirkung hat.

## Grundregel: Die Größe kommt aus dem Tag

`h1`–`h6`, `body` sind zentral in `src/styles/theme.css` definiert. In den
Seiten **keine** `text-*`-Größen und keine `font-bold`/`font-semibold` auf
Überschriften. Wer eine kleinere Überschrift braucht, nimmt das nächste Tag
(h3 → h4), nicht eine Utility.

| Tag | Font | ≥1024 | 768–1023 | <768 | Einsatz |
|---|---|---|---|---|---|
| h1 | EB Garamond 500 | 106 | 72 | 52 | Seitentitel im Hero, genau einer pro Seite |
| h2 | EB Garamond 500 | 64 | 50 | 38 | Sektionstitel |
| h3 | Cormorant Garamond 600 | 36 | 34 | 28 | Feature-/Argument-Karten, Teaser-Titel, Untertitel in Sektionen |
| h4 | EB Garamond 500 | 28 | 24 | 20 | Titel in Daten-Karten (Ernteanteil, Hof, Depot, Event) |
| h5 | Cormorant Garamond 600 | 24 | 22 | 18 | Zwischentitel in Karten/Listen |
| h6 | EB Garamond 500 | 24 | 20 | 24 | Footer-Spalten, Akkordeon-Fragen, Formular-Gruppen |

## Fließtext

| Klasse | Größe | Einsatz |
|---|---|---|
| (keine) | 16 px / 1.4, Roboto, `#4a4a4a` | Standard. `<p>` braucht keine Farb- und Größenklasse |
| `lead` | 20 px | Einleitung unter h1/h2, Hero-Subline (im Hero zusätzlich `md:text-2xl` erlaubt) |
| `meta` | 14 px | Hofname unter Kartentitel, Datum, Fußnoten, Tabellen-Meta. Nie für Lauftext |
| `text-foreground` | `#1b1b1b` | Fließtext **auf Pastellflächen** (Karten mit `bg-solawi-*`), damit der Kontrast ≥ 4,5:1 bleibt |

Verboten: `text-gray-*`, `text-[#…]`, `text-foreground/50…/90`, `text-xs`,
`text-sm` (außer über `meta`), `prose*` (Plugin nicht installiert).

## Schriften

- Body/Buttons: Roboto (`font-sans`)
- Navigation: Roboto Condensed (`font-nav`), 22 px Desktop
- Akzent/Badges: Cormorant Garamond fett (`badge-frech`). Cantora One ist entfernt.

## Farben

- Icons: immer `text-cta` (Pink `#d10038`, entspricht `--link-color`/`icon_color` im Export). Kein `text-primary` auf Icons.
- Zertifikat-/Kategorie-Badges: Pastell-Tokens (`bg-solawi-green|mauve|orange|salmon|blue` + `text-foreground`), keine Tailwind-Farben wie `amber-700`, `emerald-600`, `blue-600`.
- Sektionshintergründe: Signatur-Regel aus `design_signature` — gleiche Farbe nie in zwei aufeinander folgenden Sektionen; Weiß als Trenner.
- Illustration und Fläche: Eine Signature-Grafik liegt immer auf einer Fläche in **ihrer eigenen** Bildhintergrundfarbe, damit sie randlos einläuft. Kein Pastellfeld in der Bildfarbe auf einer Gegenfarbe — das liest sich als Kasten. Farbe vorher messen: `magick datei.jpg -format "%[pixel:p{3,3}]" info:`. Passt keine Palettenfarbe, bekommt die Grafik ein eigenes Token (so entstand `solawi-aubergine` #bfa9c4 für `Geschichte_aubergine.png`).
- Bildposition wechselt von Sektion zu Sektion (rechts, links, mittig, neben dem Inhalt); eine Sektion ohne Bild dient als Atempause.
- Hover auf Links: `hover:text-accent` (Lila) oder `hover:text-cta`.

## Bausteine

| Klasse | Stil |
|---|---|
| `btn-cta` | Pink, Roboto 500 16 px, Padding 14/32. Größe **nicht** per Utility ändern |
| `btn-cta btn-cta-lg` | 18 px, Padding 16/40 — nur im Hero und in der Abschluss-CTA-Sektion |
| `btn-outline` | Rahmen Pink, Text Pink, Hover gefüllt |
| `link-cta` | Textlink Pink mit Pfeil (`<ArrowRight className="w-5 h-5" />`) |
| `badge-frech` | Pink-Badge über h1/h2 |

Keine Inline-Buttons mehr aus `bg-cta hover:bg-cta-hover px-… font-…`.

## Hof-Auftritt (Ernteanteil-Seiten)

Der Hof tritt als Absender auf, wir liefern das Briefpapier. Spec: `openspec/specs/harvest-shares` ("Hof-Logo als Stempel", "Hofstimme als Brief").

| Klasse / Bauteil | Zweck |
|---|---|
| `hof-foto` | Hoffoto: Rundung 14 px, Versatzrahmen 10 px ohne Weichzeichner in `--hof-rahmen` |
| `hof-etikett` | Kistenetikett: Logo leicht schräg (−4°) unten rechts am Foto, eigene weiße Fläche |
| `hof-stempel` / `<HofLogo>` | Logo als Einfarb-Stempel: Alpha-Kanal der Datei als Maske, Farbe = Textfarbe |
| `<Hofstimme>` | Zitat als Brief auf `flaeche`-Karte der Kategorie, Logo als Absender-Stempel |

- `--hof-rahmen` setzt `ErnteanteilSeite` am Container aus `kategorieFarben[...].rahmen`. **Die Farbwelt des Hoflogos wirkt nie auf Flächen**, die Kategorie bleibt führend.
- Logodateien brauchen einen **transparenten Hintergrund** (SVG oder PNG mit Alpha). Dateien mit Hintergrund ergeben einen Block statt eines Stempels und werden nicht eingetragen.
- Zertifikats-Signets (z. B. Demeter) bleiben unverändert und gehören in die Badge-Zeile, nicht ins Logo-Feld.
- Alles Optionale (Logo, Zitat, Kiste, Küche) entfällt ohne Daten vollständig — kein Platzhaltertext, keine leere Karte, kein fremdes Bild.
- Der Stempel im Kopfband ist auf Handybreite ausgeblendet (`hidden sm:block`).

## Layout

- Container breit: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` — Raster, Karten, Tabellen, Hero.
- Container schmal: `max-w-4xl mx-auto px-4 sm:px-6 lg:px-8` — reine Textsektionen, FAQ, Formulare.
- Sektions-Padding: immer `py-20`. Ausnahme Hero: `py-16 md:py-20`.
- Hero Startseite (Signature-Look): `min-h-[600px]`, h1 in voller Tag-Größe (106 px).
- Unterseiten-Hero (jede Seite mit Banderole, auch ohne Bild): `min-h-[320px] flex items-center`, Innenabstand `py-12 md:py-14`, zweispaltig `grid md:grid-cols-2 gap-8 items-center`, rechts Signature-Illustration `h-[220px] md:h-[260px]`. Badge `mb-6` → `<h1 className="h1-seite mb-6">` (h2-Stufe: 38/50/64 px) → `lead max-w-lg`.
- Karten: Pastellkarte `bg-solawi-* p-8` (Argumente) oder Weißkarte `bg-white p-6 shadow-md` (Daten). `rounded-*` weglassen (Radius ist 0).
- Icons in Feature-Karten `w-12 h-12 text-cta`, in Daten-Karten `w-10 h-10 text-cta`.
