# Helix Ultimate — Template-Style (Corporate-Design-Schicht)

Quelle: `export/SLB_init_27-09-2025.json` (Export des Template-Styles der alten Site,
Template `educon_ii`, ein Helix-Ultimate-Derivat), abgeglichen mit dem installierten
`templates/shaper_helixultimate` (Helix Ultimate **2.1.2**) und dem Plugin
`plugins/system/helixultimate` im Joomla4-Testsystem.

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

## Keys, die Helix Ultimate 2.1.2 nicht kennt (werden beim Import ignoriert)

- `custom_color_1` … `custom_color_6` (SoLaWi-Palette `#97B0C7 #7697B5 #8A2B7D #9AB08C #F3ABA2 #FFA673`) — waren `educon_ii`-spezifisch; die Palette steht daher **nicht** als Template-Variable zur Verfügung. Sektions-/Kartenfarben bleiben explizite Hex-Werte in den Recipes (`src/styles/theme.css` ist die Quelle).
- `presets-data` (Preset-Bibliothek des alten Templates), `hu-webfont-size-field*`.
- Platzhalter-Reste aus dem JoomShaper-Demo: `copyright` („Your Company"), `contact_*`, Social-Links `#`, `comingsoon_*` — vor dem Livegang im Template ersetzen.

## Import in Joomla

System → Templates → Styles → **shaper_helixultimate** → Tab **Advanced** → Gruppe
**Import & Export** → **Import Settings** → JSON wählen. Danach im selben Tab den
CSS-Cache leeren (bzw. `cache/com_templates/templates/shaper_helixultimate` löschen).

Technisch (`plugins/system/helixultimate/src/Platform/Request.php::importTemplateStyle`
→ `Platform/Helper.php::updateTemplateStyle`): der Import **ersetzt die komplette
`params`-Spalte** des Styles in `#__template_styles` — kein Merge. Die im JSON
enthaltenen Zeilen-Felder `id`, `template`, `client_id`, `home`, `title` landen
mit in `params` und sind dort wirkungslos.

Export zum Vergleich: gleiche Stelle, **Export Settings**
(`index.php?option=com_ajax&helix=ultimate&task=export&id=<style-id>`).
