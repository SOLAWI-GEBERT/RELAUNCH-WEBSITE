# Addon: accordion

Quelle: `components/com_sppagebuilder/addons/accordion/admin.php`

Hinweis: `sp_accordion_item[].content` ist vom Feldtyp `builder` — der Inhalt referenziert
eine `nested_row` (siehe `docs/sp_page_builder.md` bzw. `CLAUDE.md`-Abschnitt zum
JSON-Export: Accordion-Inhalte verweisen per `id` auf eigenständige Sections mit
`parent`-Referenz im selben Export-Array).

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `sp_accordion_item` | repeatable (Attr: `title`, `visual_item_type`, `image`, `icon`, `content`) | Item-`title`: `"Accordion Title"`, `visual_item_type`: `"icon"`, `content` (builder): Lorem-Ipsum | – |
| ↳ `image` | media | – | `visual_item_type = 'image'` |
| ↳ `icon` | icon | – | `visual_item_type = 'icon'` |
| `openitem` | select (`""`=erstes offen\|`show`=alle offen\|`hide`=alle zu) | – | – |
| `style` | select (`panel-modern`\|`panel-default`\|`panel-primary`\|`panel-success`\|`panel-info`\|`panel-warning`\|`panel-danger`\|`panel-faq`\|`panel-custom`) | `"panel-custom"` | – |
| `item_bg` | color | `"#FFFFFF"` | `style = 'panel-custom'` |
| `item_margin` | margin (responsive) | – | `style = 'panel-custom'` |
| `item_padding` | padding (responsive) | – | `style = 'panel-custom'` |
| `item_border_separator` | separator | – | `style = 'panel-custom'` |
| `item_border_width` | slider (min `0`, max `10`) | `"1"` | `style = 'panel-custom'` |
| `item_border_color` | color | `"#D5D7E0"` | `style = 'panel-custom'` |
| `item_border_radius` | slider (responsive, min `1`, max `100`) | `{xl: 4}` | `style = 'panel-custom'` |
| `item_spacing_separator` | separator | – | `style = 'panel-custom'` |
| `item_spacing` | slider (responsive) | `{xl: 10}` | `style = 'panel-custom'` |
| `item_title_padding` | padding (responsive) | – | `style = 'panel-custom'` (Gruppe `header`) |
| `icon_position` | radio (`left`\|`right`) | – | `style = 'panel-custom'` |
| `icon_fontsize` | slider (responsive, max `400`) | – | `style = 'panel-custom'` |
| `icon_margin` | margin (responsive, max `400`) | – | `style = 'panel-custom'` |
| `active_icon_rotate` | slider (max `360`) | `0` | `style = 'panel-custom'` |
| `item_title_typography` | typography | – | `style = 'panel-custom'` |
| `header_style_tab` | buttons (Tabs: `normal`\|`active`) | `"normal"` | Gruppe: `style = 'panel-custom'` |
| `item_title_text_color` | color | – | `header_style_tab = 'normal'` |
| `item_title_bg_color` | color | – | `header_style_tab = 'normal'` |
| `icon_text_color` | color | – | `header_style_tab = 'normal'` |
| `active_title_text_color` | color | – | `header_style_tab = 'active'` |
| `active_title_bg_color` | color | – | `header_style_tab = 'active'` |
| `active_icon_color` | color | – | `header_style_tab = 'active'` |
| `item_content_padding` | padding (responsive) | – | `style = 'panel-custom'` (Gruppe `content_style`) |
| `title` | text | – | – |
| `heading_selector` | headings | `"h3"` | – |
| `title_typography` | typography | – | – |
| `title_text_color` | color | – | – |
| `title_margin_top` | slider (responsive, max `400`) | – | – |
| `title_margin_bottom` | slider (responsive, max `400`) | – | – |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

Noch kein Builder in `tools/sppb-export/builders/` — bei Bedarf für die jeweilige Seite ergänzen.
