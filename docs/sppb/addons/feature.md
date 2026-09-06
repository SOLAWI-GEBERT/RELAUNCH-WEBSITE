# Addon: feature

Quelle: `components/com_sppagebuilder/addons/feature/admin.php`

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `title` | text | `"Feature Box"` | – |
| `heading_selector` | headings | `"h3"` | – |
| `title_typography` | typography | – | – |
| `title_margin_top`/`title_margin_bottom` | slider (responsive) | – | – |
| `alignment` | alignment (responsive) | `{xl:'center', ...}` | – |
| `title_position` | select (`after`\|`before`\|`left`\|`right`) | – | – |
| `feature_type` | radio (`icon`\|`image`\|`both`) | `"icon"` | – |
| `icon_name` | icon | `"fas fa-trophy"` | `feature_type != 'image'` |
| `icon_size`/`icon_padding`/`icon_background`/`icon_hover_bg`/`icon_border_width`/`icon_border_color`/`icon_boxshadow`/`icon_border_radius`/`icon_margin_top`/`icon_margin_bottom` | diverse | siehe Datei | `feature_type != 'image'` (teilweise) |
| `feature_image` | media | `{src:'',height:'',width:''}` | `feature_type != 'icon'` |
| `feature_image_alt` | text | `""` | `feature_type != 'icon'` |
| `feature_image_width` | slider (responsive) | – | `feature_type != 'icon'` |
| `text` | editor (HTML) | Platzhaltertext | – |
| `content_typography` | typography | – | – |
| `text_background` | color | – | – |
| `text_padding` | padding (responsive) | – | – |
| `title_url` | link | – | – |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

**Von `tools/sppb-export/builders/feature.mjs` gesetzt:** `title`, `heading_selector`, `text`, `feature_type`, `alignment`, je nach `feature_type` `icon_name` + `icon_size` (responsiv, Default 48 px) + `icon_color`/`icon_hover_color` (Default `var(--link-color)` — Preset-treu; SPPB gibt den Wert unverändert als `color:` aus) oder `feature_image`/`feature_image_alt`, optional `title_url`, optional globale Felder (Hintergrund, Padding, Schatten, Animation).

Hinweis: Das SPPB-Farbfeld zeigt `var(--link-color)` im Editor nicht als Farbe an — beim
manuellen Nachbearbeiten dort ggf. durch einen Hex-Wert ersetzen (Fallback: `iconColor: '#d10038'`).
