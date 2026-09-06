# Addon: text_block

Quelle: `components/com_sppagebuilder/addons/text_block/admin.php`

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `text` | editor (HTML) | Lorem-Ipsum-Platzhalter | – |
| `column_count` | slider (responsive) | – | – |
| `column_gap` | slider (responsive) | – | – |
| `text_typography` | typography | – | – |
| `global_text_color` | color | – | – |
| `alignment` | alignment (responsive) | – | – |
| `content_truncation` | checkbox | `0` | – |
| `content_truncation_max_word` | number | `30` | `content_truncation = 1` |
| `content_truncation_action_text` | text | `"Show More"` | `content_truncation = 1` |
| `content_truncation_action_typography` | typography | – | `content_truncation = 1` |
| `content_truncation_action_text_color` | color | `"#3366FF"` | `content_truncation = 1` |
| `dropcap` | checkbox | `0` | – |
| `dropcap_font_size` | slider (responsive) | – | `dropcap = 1` |
| `dropcap_color` | color | – | `dropcap = 1` |
| `title` | text | – | – |
| `heading_selector` | headings | `"h3"` | – |
| `title_typography` | typography | – | – |
| `title_text_color` | color | – | – |
| `title_margin_top` | slider (responsive) | – | – |
| `title_margin_bottom` | slider (responsive) | – | – |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

**Von `tools/sppb-export/builders/textBlock.mjs` gesetzt:** `text`, optional `alignment`, optional `global_background_type`/`global_background_color`.
