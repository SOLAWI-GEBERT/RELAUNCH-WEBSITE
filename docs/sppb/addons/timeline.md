# Addon: timeline

Quelle: `components/com_sppagebuilder/addons/timeline/admin.php`

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `sp_timeline_items` | repeatable (Attr: `title`, `content`, `date`, `end_date`, `image`) | Item-`title`: `"Timeline Item Title"`, `content`: Lorem-Ipsum, `date`: `"12 June 2030"` | – |
| `options_tab` | buttons (Tabs: `typography`\|`color`) | `"typography"` | – |
| `item_title_typography` | typography | – | `options_tab != 'color'` |
| `item_content_typography` | typography | – | `options_tab != 'color'` |
| `item_date_typography` | typography | – | `options_tab != 'color'` |
| `bar_color` | color | `"#3366FF"` | `options_tab = 'color'` |
| `background_color` | color | `"#FFFFFF"` | `options_tab = 'color'` |
| `item_title_color` | color | – | `options_tab = 'color'` |
| `item_content_color` | color | – | `options_tab = 'color'` |
| `item_date_color` | color | – | `options_tab = 'color'` |
| `image_width` | text (responsive) | – | – |
| `image_height` | text (responsive) | – | – |
| `image_shape` | select (`sppb-image-sqaure`\|`sppb-image-round`\|`sppb-image-circle`) | `"sppb-image-round"` | – |
| `title` | text | – | – |
| `heading_selector` | headings | `"h3"` | – |
| `title_typography` | typography | – | – |
| `title_text_color` | color | – | – |
| `title_margin_separator` | separator | – | – |
| `title_margin_top` | slider (responsive) | – (max `400`) | – |
| `title_margin_bottom` | slider (responsive) | – (max `400`) | – |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

Noch kein Builder in `tools/sppb-export/builders/` — bei Bedarf für die jeweilige Seite ergänzen.
