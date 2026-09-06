# Addon: tab

Quelle: `components/com_sppagebuilder/addons/tab/admin.php`

Hinweis: `sp_tab_item[].content` ist vom Feldtyp `builder` (analog `accordion`) — verweist
ebenfalls auf eine `nested_row`-Struktur, nicht auf reinen HTML-Text.

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `sp_tab_item` | repeatable (Attr: `title`, `subtitle`, `image_or_icon`, `icon`, `image`, `content`) | Item-`title`: `"Tab"`, `image_or_icon`: `"icon"`, `content` (builder): Lorem-Ipsum | – |
| ↳ `icon` | icon | `""` | `image_or_icon = 'icon'` |
| ↳ `image` | media | – | `image_or_icon = 'image'` |
| `style` | select (`modern`\|`tabs`\|`pills`\|`lines`\|`custom`, inline) | `"modern"` | – |
| `nav_position` | select (responsive, `nav-top`\|`nav-bottom`\|`nav-left`\|`nav-right`) | `{xl:'nav-top', lg:'', md:'', sm:'', xs:''}` | Gruppe `nav`: `style = 'custom'` |
| `nav_gutter` | slider (responsive, max `100`) | – | – |
| `nav_width` | slider (responsive, min `10`, max `100`) | `{xl: 30}` | `nav_position != 'nav-top'` AND `nav_position != 'nav-bottom'` |
| `nav_spacing_separator` | separator | – | – |
| `nav_padding` | padding (responsive) | – | – |
| `nav_margin` | margin (responsive) | – | – |
| `nav_justified_separator` | separator | – | – |
| `nav_justified` | checkbox (responsive) | `{xl: 0}` | `nav_position != 'nav-left'` AND `nav_position != 'nav-right'` |
| `nav_text_align` | alignment (responsive) | `{xl:'left', lg:'', md:'', sm:'', xs:''}` | – |
| `nav_typography_separator` | separator | – | – |
| `nav_typography` | typography | – | – |
| `nav_color_separator` | separator | – | – |
| `nav_color_tab` | buttons (Tabs: `normal`\|`hover`\|`active`) | `"normal"` | – |
| `nav_color` | color | `"#020B53"` | `nav_color_tab = 'normal'` |
| `nav_bg_color` | color | `"#F7F7F9"` | `nav_color_tab = 'normal'` |
| `icon_color` | color | – | `nav_color_tab = 'normal'` |
| `nav_border_separator` | separator | – | `nav_color_tab = 'normal'` |
| `nav_border` | margin (Border-Width) | – | `nav_color_tab = 'normal'` |
| `nav_border_color` | color | – | `nav_color_tab = 'normal'` |
| `nav_border_radius` | slider (responsive, min `0`, max `100`) | – | `nav_color_tab = 'normal'` |
| `hover_tab_color` | color | `"#FFFFFF"` | `nav_color_tab = 'hover'` |
| `hover_tab_bg` | color | `"#3366FF"` | `nav_color_tab = 'hover'` |
| `icon_color_hover` | color | – | `nav_color_tab = 'hover'` |
| `hover_nav_border_separator` | separator | – | `nav_color_tab = 'hover'` |
| `hover_tab_border_width` | margin | `""` | `nav_color_tab = 'hover'` |
| `hover_tab_border_color` | color | `""` | `nav_color_tab = 'hover'` |
| `active_tab_color` | color | `"#333333"` | `nav_color_tab = 'active'` |
| `active_tab_bg` | color | `"#e5e5e5"` | `nav_color_tab = 'active'` |
| `icon_color_active` | color | – | `nav_color_tab = 'active'` |
| `active_nav_border_separator` | separator | – | `nav_color_tab = 'active'` |
| `active_tab_border_width` | margin | `""` | `nav_color_tab = 'active'` |
| `active_tab_border_color` | color | – | `nav_color_tab = 'active'` |
| `image_or_icon_style_separator` | separator | – | – |
| `image_or_icon_style` | select (`icon_style`\|`image_style`) | `"icon_style"` | – |
| `nav_icon_postion` | select (`top`\|`right`\|`bottom`\|`left`, inline) | `"left"` | `image_or_icon_style = 'icon_style'` |
| `icon_fontsize` | slider (responsive, max `400`) | – | `image_or_icon_style = 'icon_style'` |
| `icon_margin` | margin (responsive) | – | `image_or_icon_style = 'icon_style'` |
| `nav_image_postion` | select (`top`\|`right`\|`bottom`\|`left`, inline) | `"left"` | `image_or_icon_style = 'image_style'` |
| `image_height` | slider (responsive, max `200`) | `{xl: 30}` | `image_or_icon_style = 'image_style'` |
| `image_width` | slider (responsive, max `200`) | `{xl: 30}` | `image_or_icon_style = 'image_style'` |
| `image_margin` | margin (responsive) | – | `image_or_icon_style = 'image_style'` |
| `content_typography` | typography | – | Gruppe `tab_content`: `style = 'custom'` |
| `content_color` | color | – | – |
| `content_backround` | color | `"#F7F7F9"` | – |
| `content_border_separator` | separator | – | – |
| `content_border` | slider (min `0`, max `10`) | `"0"` | – |
| `content_border_color` | color | – | – |
| `content_border_radius` | slider (min `0`, max `100`) | – | – |
| `content_separator` | separator | – | – |
| `content_width` | slider (responsive, min `10`, max `100`) | `{xl: 100}` | – |
| `content_padding` | padding (responsive) | – | – |
| `content_margin` | margin (responsive) | – | – |
| `content_box_shadow_separator` | separator | – | – |
| `show_boxshadow` | checkbox | `1` | – |
| `shadow_color` | color | `"#000"` | `show_boxshadow = 1` |
| `shadow_horizontal` | slider (max `100`) | – | `show_boxshadow = 1` |
| `shadow_vertical` | slider (max `100`) | – | `show_boxshadow = 1` |
| `shadow_blur` | slider (max `100`) | – | `show_boxshadow = 1` |
| `shadow_spread` | slider (max `100`) | – | `show_boxshadow = 1` |
| `title` | text | – | – |
| `heading_selector` | headings | `"h3"` | – |
| `title_typography` | typography | – | – |
| `title_text_color` | color | – | – |
| `title_margin_separator` | separator | – | – |
| `title_margin_top` | slider (responsive, max `400`) | – | – |
| `title_margin_bottom` | slider (responsive, max `400`) | – | – |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

Noch kein Builder in `tools/sppb-export/builders/` — bei Bedarf für die jeweilige Seite ergänzen.
