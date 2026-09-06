# Addon: icons_group

Quelle: `components/com_sppagebuilder/addons/icons_group/admin.php`

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `sp_icons_group_item` | repeatable (Attr: siehe unten) | – | – |
| ↳ `title` | text | – | – |
| ↳ `icon_name` | icon | `"fa-cogs"` | – |
| ↳ `icon_link` | link | – | – |
| ↳ `color` | color | – | – |
| ↳ `background` | color | – | – |
| ↳ `width` | slider (responsive, max `500`) | `{xl: 80}` | – |
| ↳ `height` | slider (responsive, max `500`) | `{xl: 80}` | – |
| ↳ `border_width` | slider (responsive) | – | – |
| ↳ `border_style` | select (`solid`\|`dotted`\|`dashed`\|`double`\|`none`) | `"solid"` | `border_width !== 0` |
| ↳ `border_radius` | slider (responsive, max `500`) | – | `border_width !== 0` |
| ↳ `border_color` | color | – | – |
| ↳ `padding` | padding (responsive) | `{xl:'20px 20px 20px 20px', lg:'', md:'', sm:'', xs:''}` | – |
| ↳ `label_separator` | separator | – | – |
| ↳ `show_label` | checkbox | `0` | – |
| ↳ `label_position` | select (`top`\|`right`\|`bottom`) | `"top"` | `show_label = 1` |
| ↳ `label_text` | text | – | `show_label = 1` |
| ↳ `label_typography` | typography | – | `show_label = 1` |
| ↳ `label_margin` | margin (responsive) | – | `show_label = 1` |
| ↳ `separator` | separator | – | – |
| ↳ `use_hover` | checkbox | `0` | – |
| ↳ `hover_background` | color | – | `use_hover = 1` |
| ↳ `hover_color` | color | – | `use_hover = 1` |
| ↳ `hover_border_color` | color | – | `use_hover = 1` |
| ↳ `icon_class` | text | `""` | – |
| `icon_alignment` | alignment (responsive, `left`\|`center`\|`right`) | `{xl:'center', lg:'', md:'', sm:'', xs:''}` | – |
| `size` | slider (responsive, max `400`) | `{xl: 34}` | – |
| `margin` | slider (responsive, Gap, max `100`) | `{xl: 5}` | – |
| `item_display` | select (`inline-block`\|`block`) | `"inline-block"` | – |
| `title` | text | – | – |
| `heading_selector` | headings | `"h3"` | – |
| `title_typography` | typography | – | – |
| `title_text_color` | color | – | – |
| `title_position` | select (`top`\|`left`\|`right`) | `"top"` | – |
| `title_icon` | icon | – | – |
| `title_icon_position` | radio (`before`\|`after`) | `"before"` | – |
| `title_margin` | margin (responsive) | – | – |
| `title_padding` | padding (responsive) | – | – |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

Noch kein Builder in `tools/sppb-export/builders/` — bei Bedarf für die jeweilige Seite ergänzen.
