# Addon: carouselpro

Quelle: `components/com_sppagebuilder/addons/carouselpro/admin.php`

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `sp_carouselpro_item` | repeatable (Attr: `title`, `title_margin`, `content_separator`, `content`, `content_margin`, `media_separator`, `bg`, `image`, `video`, `button_separator`, `button_text`, `button_url`, `button_icon`, `button_icon_position`) | Item-`title`: `"Carousel Item Title"`, `content` (editor): Lorem-Ipsum, `button_text`: `"Button"` | – |
| ↳ `button_url`/`button_icon`/`button_icon_position` | link/icon/select | – | `button_text != ''` |
| `item_title_typography` | typography | – | – |
| `item_title_color` | color | – | – |
| `full_container` | checkbox | `0` | – |
| `item_content_separator` | separator | – | – |
| `item_content_typography` | typography | – | – |
| `item_title_content` | color | – | – |
| `content_column_separator` | separator | – | – |
| `content_column` | select (`1`–`12`) | – | – |
| `item_padding_separator` | separator | – | – |
| `item_padding` | padding (responsive) | `{xl:'', lg:'', md:'', sm:'', xs:''}` | – |
| `button_typography` | typography | – | – |
| `button_type` | select (`default\|primary\|secondary\|success\|info\|warning\|danger\|dark\|link\|custom`) | `"custom"` | – |
| `link_button_padding_bottom` | slider (max `100`) | – | `button_type = 'link'` |
| `button_appearance` | select (`""\|gradient\|outline`) | – | – |
| `button_shape` | select (`rounded`\|`square`\|`round`) | `"rounded"` | – |
| `button_size` | select (`""\|lg\|xlg\|sm\|xs\|custom`) | – | – |
| `button_padding` | padding (responsive) | `{xl:'8px 22px 10px 22px', ...}` | `button_size = 'custom'` |
| `button_block` | select (`""\|sppb-btn-block`) | – | `button_type != 'link'` |
| `button_style_tab` | buttons (Tabs: `normal`\|`hover`) | `"normal"` | `button_type = 'custom'` |
| `button_color` | color | `"#FFFFFF"` | `button_type = 'custom'` AND `button_style_tab = 'normal'` |
| `button_background_color` | color | `"#3366FF"` | `button_appearance != 'gradient'` AND `button_type = 'custom'` AND `button_style_tab = 'normal'` |
| `button_background_gradient` | gradient | `{color:'#3366FF', color2:'#0037DD', deg:'45', type:'linear'}` | `button_appearance = 'gradient'` AND `button_type = 'custom'` AND `button_style_tab = 'normal'` |
| `button_color_hover` | color | `"#FFFFFF"` | `button_type = 'custom'` AND `button_style_tab = 'hover'` |
| `button_background_color_hover` | color | `"#0037DD"` | `button_appearance != 'gradient'` AND `button_type = 'custom'` AND `button_style_tab = 'hover'` |
| `button_background_gradient_hover` | gradient | `{color:'#0037DD', color2:'#3366FF', deg:'45', type:'linear'}` | `button_appearance = 'gradient'` AND `button_type = 'custom'` AND `button_style_tab = 'hover'` |
| `link_button_style_tab` | buttons (Tabs: `normal`\|`hover`) | `"normal"` | `button_type = 'link'` |
| `link_button_color` | color | – | `button_type = 'link'` AND `link_button_style_tab = 'normal'` |
| `link_button_border_width` | slider (max `30`) | – | `button_type = 'link'` AND `link_button_style_tab = 'normal'` |
| `link_button_border_color` | color | `""` | `button_type = 'link'` AND `link_button_style_tab = 'normal'` |
| `link_button_hover_color` | color | `""` | `button_type = 'link'` AND `link_button_style_tab = 'hover'` |
| `link_button_border_hover_color` | color | `""` | `button_type = 'link'` AND `link_button_style_tab = 'hover'` |
| `carousel_height` | slider (responsive, max `2500`) | `{xl: 500}` | – |
| `autoplay_separator` | separator | – | – |
| `autoplay` | checkbox (`1`=Ja\|`0`=Nein) | `1` | – |
| `interval` | slider | `5` | `autoplay = 1` |
| `speed` | slider | `600` | – |
| `randomize_carousel` | checkbox | `0` | – |
| `controllers_separator` | separator | – | – |
| `controllers` | checkbox (`1`=Ja\|`0`=Nein) | `1` | – |
| `arrows_separator` | separator | – | – |
| `arrows` | checkbox (`1`=Ja\|`0`=Nein) | `1` | – |
| `arrow_font_size` | slider (max `100`) | – | `arrows = 1` |
| `arrow_position` | select (`default`\|`bottom-left`\|`bottom-center`\|`bottom-right`) | `"default"` | `arrows = 1` |
| `arrow_height` | slider (min `10`, max `200`) | – | `arrows = 1` AND `arrow_position != 'default'` |
| `arrow_width` | slider (min `10`, max `200`) | – | `arrows = 1` AND `arrow_position != 'default'` |
| `arrow_icon_separator` | separator | – | `arrows = 1` |
| `arrow_icon` | select (`angle`\|`angle_double`\|`arrow`\|`arrow_circle`\|`long_arrow`\|`chevron`) | `"chevron"` | `arrows = 1` |
| `arrow_margin` | margin | – | `arrows = 1` AND `arrow_position != 'default'` |
| `arrow_style_separator` | separator | – | – |
| `arrow_style` | buttons (Tabs: `normal`\|`hover`) | `"normal"` | `arrows = 1` |
| `arrow_color` | color | – | `arrows = 1` AND `arrow_style = 'normal'` |
| `arrow_background` | color | – | `arrows = 1` AND `arrow_style = 'normal'` AND `arrow_position != 'default'` |
| `arrow_border_width` | slider (max `20`) | – | `arrows = 1` AND `arrow_style = 'normal'` AND `arrow_position != 'default'` |
| `arrow_border_color` | color | – | `arrows = 1` AND `arrow_style = 'normal'` AND `arrow_position != 'default'` |
| `arrow_hover_color` | color | – | `arrows = 1` AND `arrow_style = 'hover'` |
| `arrow_hover_background` | color | – | `arrows = 1` AND `arrow_style = 'hover'` AND `arrow_position != 'default'` |
| `arrow_hover_border_color` | color | – | `arrows = 1` AND `arrow_style = 'hover'` AND `arrow_position != 'default'` |
| `arrow_border_radius_separator` | separator | – | `arrows = 1` AND `arrow_position != 'default'` |
| `arrow_border_radius` | slider (max `1000`) | – | `arrows = 1` AND `arrow_position != 'default'` |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

Noch kein Builder in `tools/sppb-export/builders/` — bei Bedarf für die jeweilige Seite ergänzen.
