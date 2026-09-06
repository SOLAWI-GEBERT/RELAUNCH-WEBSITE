# Addon: image_content

Quelle: `components/com_sppagebuilder/addons/image_content/admin.php`

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `text` | editor (HTML) | Platzhaltertext | – |
| `text_typography` | typography | – | – |
| `content_padding` | padding (responsive) | `{xl:'120px 0 120px 50px', ...}` | – |
| `image` | media | `{src:'...'}` (nur `src`, kein height/width/alt) | – |
| `image_alignment` | select (`left`\|`right`) | `"left"` | – |
| `aria_label` | text | `""` | – |
| `title` | text | – | – |
| `heading_selector` | headings | `"h3"` | – |
| `title_typography` | typography | – | – |
| `title_text_color` | color | – | – |
| `title_margin_top`/`title_margin_bottom` | slider (responsive) | – | – |
| `button_text` | text | – | – |
| `button_url` | link | – | – |
| `button_typography` | typography | – | – |
| `button_type` | select (`default\|primary\|secondary\|success\|info\|warning\|danger\|dark\|link\|custom`) | `"custom"` | – |
| `button_appearance` | select (`""\|gradient\|outline`) | – | `type != 'link'` |
| `button_shape` | select (`rounded\|square\|round`) | `"rounded"` | `button_type != 'link'` |
| `button_size` | select | – | – |
| `button_padding` | padding (responsive) | – | `button_size = 'custom'` |
| `button_block` | select | `""` | `button_type != 'link'` |
| `button_icon` | icon | – | – |
| `button_icon_position` | radio (`left`\|`right`) | `"left"` | – |
| `button_margin_top` | slider (responsive) | `{xl:20}` | – |
| `button_color`/`button_background_color`(+`_hover`) | color | siehe Datei | `button_type = 'custom'` |
| `link_button_color`/`link_button_border_width`/`link_button_border_color`(+`_hover`) | color/slider | siehe Datei | `button_type = 'link'` |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

**Von `tools/sppb-export/builders/imageContent.mjs` gesetzt:** `text`, `image.src`, `image_alignment`, optional `title`/`heading_selector`, optional `button_text`/`button_url`, optional `global_background_type`/`global_background_color`.
