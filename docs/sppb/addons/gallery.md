# Addon: gallery

Quelle: `components/com_sppagebuilder/addons/gallery/admin.php`

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `sp_gallery_item` | repeatable (`bulk_import: true`; Attr: `title`, `thumb`, `full`, `description`) | Item-`title`: `"Gallery Item 1"`, `thumb`/`full`: `{src:'https://sppagebuilder.com/addons/gallery/gallery1.jpg', height:'', width:''}` | – |
| `description_alignment` | buttons (responsive, `start`\|`center`\|`end`) | `"center"` | – |
| `show_thumb_desc` | checkbox | `0` | – |
| `show_full_desc` | checkbox | `0` | – |
| `item_alignment` | alignment (responsive, `left`\|`center`\|`right`) | `{xl:'left', lg:'', md:'', sm:'', xs:''}` | – |
| `width` | slider (responsive, min `10`, max `1000`) | `{xl: 200}` | – |
| `height` | slider (responsive, min `10`, max `1000`) | `{xl: 200}` | – |
| `item_gap` | slider (responsive, max `80`) | `{xl: 0}` | – |
| `border_radius` | advancedslider (max `1200`) | `0` | – |
| `title` | text | – | – |
| `heading_selector` | headings | `"h3"` | – |
| `title_typography` | typography | – | – |
| `title_text_color` | color | – | – |
| `title_margin_separator` | separator | – | – |
| `title_margin_top` | slider (responsive, max `400`) | – | – |
| `title_margin_bottom` | slider (responsive, max `400`) | – | – |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

Noch kein Builder in `tools/sppb-export/builders/` — bei Bedarf für die jeweilige Seite ergänzen.
