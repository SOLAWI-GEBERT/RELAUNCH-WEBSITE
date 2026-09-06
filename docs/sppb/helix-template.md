# Helix Ultimate — Template-Style (Corporate-Design-Schicht)

Quelle: `export/SLB_init_27-09-2025.json` (Export des Template-Styles der alten Site,
Template `educon_ii`, ein Helix-Ultimate-Derivat).

**Aktives Template im Joomla4-Testsystem ist `educon_ii` (v1.0.2)** — Style-ID 13
„Educon_ii - Default", `home = 1` (verifiziert in `#__template_styles`; das Live-CSS
kommt aus `cache/com_templates/templates/educon_ii/`). `shaper_helixultimate` ist
zwar installiert (Style 12), aber nicht aktiv. Beide nutzen dasselbe Plugin
`plugins/system/helixultimate` (2.1.2); `educon_ii` bringt eigene `options.xml`
und SCSS mit — u.a. **`custom_color_1..6` und CSS-Variablen `--link-color`,
`--link-hover-color`, `--custom-color-1..6`** (siehe unten).

## Schichtenmodell

| Schicht | Quelle | Verantwortlich für |
|---|---|---|
| **Helix-Template-Style** (global, einmal importiert) | `SLB_init_*.json` | Farb-Preset (Body/Text/Link/Hover, Header, Menü, Footer), Typografie h1–h6/Body/Navigation, Header-Layout, Footer, Logo |
| **SPPB-Seiten** (pro Seite, aus diesem Toolset) | `tools/sppb-export/pages/*.mjs` → `export/*.json` | Sektionen mit Pastell-Hintergründen, Addons, Karten-Padding/Schatten, Entrance-Animationen, Abstände |

Regel: Das Toolset setzt **nur, was Helix nicht liefern kann**. Farben von Buttons,
Links, Text und die Fonts kommen aus dem Preset — Buttons deshalb als `type: 'primary'`
(siehe unten), nie mit hart codierten Farben.

## Was SPPB-Inhalte vom Helix-Preset erben

Aus `templates/shaper_helixultimate/scss/presets.scss` und
`plugins/system/helixultimate/src/Core/HelixUltimate.php`:

| Preset-Feld | Wirkt auf |
|---|---|
| `bg_color`, `text_color` | `body` — Hintergrund und Standard-Textfarbe (auch in SPPB-Sections ohne eigenen Hintergrund) |
| `link_color`, `link_hover_color` | `a`, **`.sppb-btn-primary`** (Rahmen + Hintergrund, Hover), `.sp-page-title` |
| `h1_font` … `h6_font`, `body_font` | Webfonts + Größen per Selektor `h1`…`h6`, `body` → SPPB-`heading`-Addons erben Font/Größe |
| `custom_font` + `custom_font_selectors` | zusätzlicher Selektor (hier: `logo`) |

**Nicht** von Helix gestylt: SPPB-Buttons anderer Typen (`custom`, `link`, …),
Sektionshintergründe, Addon-Padding/-Schatten, Animationen.

## Aktiver Stand der Init-Datei (Auszug)

**Preset** (`preset`, aktiv `preset2`):

| Feld | Wert |
|---|---|
| `text_color` | `#4A4A4A` |
| `bg_color` | `#C7AFC7` (Mauve — Body-Hintergrund!) |
| `link_color` | `#d10038` — SoLaWi-Pink (`--solawi-pink`/`--cta` im Prototyp); färbt `a`, **`.sppb-btn-primary`**, `.sp-page-title`, Social-Hover. Ursprünglich `#97B0C7`, am 2026-09-06 geändert, damit Buttons dem CD folgen |
| `link_hover_color` | `#b80030` (`--cta-hover`); ursprünglich `#8A2B7D` |
| `header_bg_color` | `#FFFFFF` |
| `logo_text_color` | `#8A2B7D` |
| `menu_text_color` / `_hover` / `_active` | `#4A4A4A` / `#8A2B7D` / `#000000` |
| `footer_bg_color` / `footer_text_color` | `#97B0C7` / `#4A4A4A` |

Die sechs Presets unterscheiden sich im Body-Hintergrund (`#97B0C7`, `#C7AFC7`,
`#FFA673`, `#F3ABA2`, `#C2DDB2`, `#9CB1C6`) und der `link_color`.

**Typografie** (JSON-Strings pro Feld: `fontFamily`, `fontSize`, `fontSize_sm`,
`fontSize_xs`, `fontWeight`, `fontSubset`, `fontColor`, `fontLineHeight`,
`fontLetterSpacing`, `textDecoration`, `textAlign`):

| Feld | Font | Größe xl / sm / xs | Zeilenhöhe |
|---|---|---|---|
| `body_font` | Roboto | 16 / 14 / 13 px | 1.4 |
| `h1_font` | EB Garamond | 106 / 72 / 52 px | 1 |
| `h2_font` | EB Garamond | 64 / 50 / 38 px | 1 |
| `h3_font` | Cormorant Garamond | 36 / 34 / 28 px | 1.2 |
| `h4_font` | EB Garamond | 28 / 24 / 20 px | 1.2 |
| `h5_font` | Cormorant Garamond | 24 / 22 / 18 px | 1.2 |
| `h6_font` | EB Garamond | 24 / 20 / 16 px | 1.2 |
| `navigation_font` | Roboto Condensed | – | – |
| `custom_font` (Selektor `logo`) | EB Garamond | 24 px | 1.4 |

**Header/Layout:** `header_style: 3-MinimalLayout`, 80 px, `sticky_header: 1`,
Logo als Text „Stadt, Land, Beides." (`logo_type: text`). `layout` (Helix-Layout-Builder):
Page Title (`title`) / Main Body (`left` 4 + Component 4 + `right` 4) / `bottom1` / `footer1` —
alle Positionen existieren in `shaper_helixultimate/templateDetails.xml`.

## Buttons in `educon_ii`: drei Regeln, eine gewinnt

`educon_ii/scss/presets.scss` erzeugt für `.sppb-btn-primary` zwei Regeln:

| Regel | Spezifität | Hintergrund | Schrift | Hover |
|---|---|---|---|---|
| `.btn-primary, .sppb-btn-primary` (Z. 244) | 0,1,0 | `link_color` | – | `link_hover_color` |
| `body .sppb-btn.sppb-btn-primary` (Z. 871) | 0,2,1 | **`custom_color_1`** | **`text_color`** (grau) | `link_color` |

Die zweite gewinnt — mit `link_color = #d10038` wären Buttons also weiterhin blau
(`custom_color_1 = #97B0C7`) mit grauer Schrift. Deshalb enthält die Init-Datei im
Feld **`custom_css`** ein Override mit höherer Spezifität (0,3,1), das die
Preset-Variablen nutzt und damit automatisch jeder Preset-Änderung folgt:

```css
body .sppb-addon-wrapper .sppb-btn.sppb-btn-primary{background-color:var(--link-color);border-color:var(--link-color);color:#fff}
body .sppb-addon-wrapper .sppb-btn.sppb-btn-primary:hover, …:focus, …:active{background-color:var(--link-hover-color);border-color:var(--link-hover-color);color:#fff}
```

`custom_css` wird von `educon_ii/index.php` per `addStyledeclaration()` als
Inline-`<style>` **nach** dem kompilierten Template-CSS ausgegeben.

## Wortbildmarke im Header

`logo_type: text` → `educon_ii/features/logo.php:199` gibt `logo_text` **roh** aus
(`<span class="logo"><a href="/">…</a></span>`), HTML ist also erlaubt:
`logo_text = "Stadt, Land, <strong>Beides.</strong>"`.

`logo_text_color` aus dem Preset wird von `educon_ii` **nicht verwendet** (0 Treffer im
SCSS) — der Logo-Link erbt sonst `a { color: $link_color }` und wurde mit dem
SoLaWi-Pink rot. Deshalb in `custom_css`:
`#sp-header .logo a { color: #1b1b1b }` (auch Hover/Focus), `strong { font-weight: 700 }`.
Die Schrift kommt weiterhin aus `custom_font` (EB Garamond 24 px, Selektor `logo`).

**Größen (2026-09-06, „zu klein zum Inhalt"):** `header_height` 80 → **96 px**
(steuert `line-height` der Menüpunkte), Logo 24 → **36 px**, Menü 18 → **22 px**,
Dropdown 18 px. Die Werte stehen in `custom_font.fontSize` / `navigation_font.fontSize`
**und** als Override in `custom_css`, weil das Template `#sp-header .logo a{font-size:24px}`
und `.sp-megamenu-parent>li>a{font-size:18px}` fest setzt. Im Prototyp ist das Menü mit
`text-sm` (14 px) und die GIF-Marke mit `h-10` (40 px) übrigens kleiner — die
Joomla-Überschriften (h2 64 px) verlangen ein anderes Verhältnis.

Alternative, falls die Typografie exakt der Marke entsprechen soll: `logo_type: image`
mit `public/SLB.gif` (400 × 44 px, 2,5 KB) als `logo_image` — dann muss die Datei in den
Joomla-Media-Manager.

## Freche Akzente: `badge-frech`, `underline-sketch`

Ebenfalls in `custom_css` (Farbe über `--link-color`, folgt dem Preset):

| Klasse | Prototyp (`src/styles/theme.css`) | Umsetzung im Template | Nutzung im Recipe |
|---|---|---|---|
| `.badge-frech` | Pink-Badge, `--font-accent` (Cantora One), −2° gedreht | Cormorant Garamond fett (bereits als h3/h5-Font geladen, kein Google-Request), `transform: rotate(-2deg)` | `textBlock({ text: '<span class="badge-frech">…</span>' })` |
| `.underline-sketch` | handgezeichnete SVG-Unterstreichung (Hex fest, `background-size: 200px`) | `::after` mit derselben SVG-Welle (eine Periode: `M0 6 Q50 0 100 5 Q150 8 200 4`) als **`mask`**, auf Wortbreite gestreckt (`preserveAspectRatio='none'`, `mask-size: 100% 100%`), Farbe `background-color: var(--link-color)` | `heading({ title: 'Warum <span class="underline-sketch">mitmachen</span>?' })` — `heading` gibt den Titel roh (`nl2br`) aus |

Bewusst nicht 1:1: Cantora One wurde nicht eingebunden (DSGVO/Google Fonts).
`text-decoration: wavy` wurde verworfen — feste kurze Wellenlänge, „zu viele
Schwünge"; die Mask-Variante zeigt pro Wort genau eine Welle.

## Keys ohne Wirkung / Platzhalter

- `presets-data` (Preset-Bibliothek des alten Templates) wird von der aktuellen
  Helix-Logik nicht gelesen (nur `preset`), in der Datei aber konsistent gehalten.
- Platzhalter-Reste aus dem JoomShaper-Demo: `copyright` („Your Company"), `contact_*`,
  Social-Links `#`, `comingsoon_*` — vor dem Livegang im Template ersetzen.
- SoLaWi-Palette in `custom_color_1..6` (`#97B0C7 #7697B5 #8A2B7D #9AB08C #F3ABA2 #FFA673`)
  steht als `--custom-color-N` zur Verfügung; Sektions-/Kartenfarben in den Recipes
  bleiben trotzdem explizite Hex-Werte (SPPB-Felder akzeptieren keine `var()`).

## Import in Joomla

System → Templates → Styles → **Educon_ii - Default** (ID 13, der aktive Style — nicht
`shaper_helixultimate`) → Tab **Advanced** → Gruppe **Import & Export** →
**Import Settings** → JSON wählen.

**Danach zwingend den kompilierten CSS-Cache leeren**, sonst bleibt das alte
Farbschema sichtbar (so passiert am 2026-09-06: DB hatte bereits `#d10038`, das
Live-CSS noch `#97B0C7`): Dateien `*.css` und `*.scss.cache` in
`cache/com_templates/templates/educon_ii/` löschen — Helix kompiliert beim nächsten
Seitenaufruf neu (Prüfung: `curl -sk https://joomla4/index.php` und im verlinkten
`/cache/com_templates/…css` nach `.sppb-btn-primary{…#d10038` suchen).

Technisch (`plugins/system/helixultimate/src/Platform/Request.php::importTemplateStyle`
→ `Platform/Helper.php::updateTemplateStyle`): der Import **ersetzt die komplette
`params`-Spalte** des Styles in `#__template_styles` — kein Merge. Die im JSON
enthaltenen Zeilen-Felder `id`, `template`, `client_id`, `home`, `title` landen
mit in `params` und sind dort wirkungslos.

Export zum Vergleich: gleiche Stelle, **Export Settings**
(`index.php?option=com_ajax&helix=ultimate&task=export&id=<style-id>`).
