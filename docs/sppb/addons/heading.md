# Addon: heading

Quelle: `components/com_sppagebuilder/addons/heading/admin.php`

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `title` | textarea | `"This is a heading"` | – |
| `heading_selector` | headings (h1–h6) | `"h3"` | – |
| `title_link` | link | – | – |
| `heading_typography` | typography | – | – |
| `title_color` | advancedcolor | – | – |
| `title_text_shadow` | boxshadow | `"0 0 0 transparent"` | – |
| `alignment` | alignment (responsive) | `{xl:'left', lg:'', md:'', sm:'', xs:''}` | – |
| `title_icon` | icon | – | – |
| `title_icon_color` | color | – | – |
| `title_icon_position` | select (`before`\|`after`) | `"before"` | – |
| `title_margin` | margin (responsive) | `{xl:'0px 0px 0px 0px', ...}` | – |
| `title_padding` | padding (responsive) | `{xl:'0px 0px 0px 0px', ...}` | – |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

**Von `tools/sppb-export/builders/heading.mjs` gesetzt:** `title` (HTML erlaubt — wird roh per `nl2br()` ausgegeben, z.B. `<strong>`, `<span class="underline-sketch">`), `heading_selector`, `alignment`, optional `title_color` (Hex-String; `CSSHelper::parseColor` akzeptiert String oder `{type, color, …}`), optional globale Felder (Hintergrund, Animation).
