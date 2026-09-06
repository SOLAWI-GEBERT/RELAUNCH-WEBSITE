# Addon: pricing

Quelle: `components/com_sppagebuilder/addons/pricing/admin.php`

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `title` | text | `"Professional"` | – |
| `heading_selector` | headings | `"h3"` | – |
| `title_typography` | typography | – | – |
| `title_text_color` | color | `"#4060FF"` | – |
| `title_margin_separator` | separator | – | – |
| `title_margin_top` | slider (responsive, max `500`) | `{xl: 0}` | – |
| `title_margin_bottom` | slider (responsive, max `500`) | `{xl: 20}` | – |
| `pricing_content` | textarea | `"10 GB Storage\n100 GB Bandwidth\nSpeed 500 Mbps\nDNS Automation\nSupport Time 24 hrs"` | – |
| `pricing_content_typography` | typography | – | – |
| `global_text_color` | color | – | – |
| `pricing_content_spacing_separator` | separator | – | – |
| `pricing_content_gap` | slider (responsive, max `500`) | `{xl: 20}` | – |
| `pricing_content_margin_bottom` | slider (responsive, max `500`) | `{xl: 40}` | – |
| `alignment` | alignment | – | – |
| `price` | text (inline) | `"$19.99"` | – |
| `price_typography` | typography | – | – |
| `price_color` | color | – | – |
| `price_symbol_separator` | separator | – | – |
| `price_symbol` | text (inline, placeholder `$`) | – | – |
| `price_symbol_color` | color | – | – |
| `price_symbol_font_size` | slider (responsive, max `500`) | – | – |
| `price_symbol_alignment` | select (`middle`\|`super`\|`sub`) | – | – |
| `duration_separator` | separator | – | – |
| `duration` | text | – | – |
| `duration_color` | color | – | – |
| `duration_font_size` | slider (responsive, max `500`) | – | – |
| `price_position_separator` | separator | – | – |
| `price_position` | select (`after`\|`before`) | `"after"` | – |
| `price_border_separator` | separator | – | – |
| `price_border_bottom` | slider (max `15`) | – | – |
| `price_border_bottom_color` | color | – | – |
| `price_spacing_separator` | separator | – | – |
| `price_margin_bottom` | slider (responsive, max `500`) | `{xl:30, lg:30, md:30, sm:30, xs:30}` | – |
| `price_padding_bottom` | slider (responsive, max `200`) | – | – |
| `button_text` | text | – | – |
| `button_url` | link | – | – |
| `button_aria_label` | text | `""` | – |
| `button_typography` | typography | – | – |
| `button_type` | select (`default\|primary\|secondary\|success\|info\|warning\|danger\|dark\|link\|custom`) | `"custom"` | – |
| `button_position` | select (`top`\|`bottom`\|`both`) | `"bottom"` | – |
| `link_button_padding_bottom` | slider (max `100`) | `""` | `button_type = 'link'` |
| `button_appearance` | select (`""\|gradient\|outline`) | – | `type != 'link'` (Hinweis: prüft `type`, nicht `button_type` — vermutlich Feldnamen-Inkonsistenz in der Quelle) |
| `button_shape` | select (`rounded`\|`square`\|`round`) | `"rounded"` | `button_type != 'link'` |
| `button_size` | select (`""\|lg\|xlg\|sm\|xs\|custom`) | – | – |
| `button_padding` | padding (responsive) | – | `button_size = 'custom'` |
| `button_block` | select (`""\|sppb-btn-block`) | `""` | `button_type != 'link'` |
| `button_icon_separator` | separator | – | – |
| `button_icon` | icon | – | – |
| `button_icon_position` | radio (`left`\|`right`) | `"left"` | – |
| `button_margin_separator` | separator | – | – |
| `button_margin_top` | slider (responsive, max `400`) | `{xl: 20}` | – |
| `button_margin_bottom` | slider (responsive, max `400`) | `{xl: 20}` | – |
| `button_style_tab_separator` | separator | – | – |
| `button_style_tab` | buttons (Tabs: `normal`\|`hover`) | `"hover"` | `button_type = 'custom'` |
| `button_color` | color | `"#FFFFFF"` | `button_style_tab = 'normal'` AND `button_type = 'custom'` |
| `button_background_color` | color | `"#3366FF"` | `button_style_tab = 'normal'`, `button_type = 'custom'`, `button_appearance != 'gradient'` |
| `button_background_gradient` | gradient | `{color:'#3366FF', color2:'#0037DD', deg:'45', type:'linear'}` | `button_style_tab = 'normal'`, `button_type = 'custom'`, `button_appearance = 'gradient'` |
| `button_color_hover` | color | `"#FFFFFF"` | `button_style_tab = 'hover'`, `button_type = 'custom'` |
| `button_background_color_hover` | color | `"#0037DD"` | `button_style_tab = 'hover'`, `button_type = 'custom'`, `button_appearance != 'gradient'` |
| `button_background_gradient_hover` | gradient | `{color:'#0037DD', color2:'#3366FF', deg:'45', type:'linear'}` | `button_style_tab = 'hover'`, `button_type = 'custom'`, `button_appearance = 'gradient'` |
| `link_button_color_tab` | buttons (Tabs: `normal`\|`hover`) | `"hover"` | `button_type = 'link'` |
| `link_button_color` | color | – | `link_button_color_tab = 'normal'`, `button_type = 'link'` |
| `link_button_border_width` | slider (max `30`) | – | `link_button_color_tab = 'normal'`, `button_type = 'link'` |
| `link_button_border_color` | color | `""` | `link_button_color_tab = 'normal'`, `button_type = 'link'` |
| `link_button_hover_color` | color | `""` | `link_button_color_tab = 'hover'`, `button_type = 'link'` |
| `link_button_border_hover_color` | color | `""` | `link_button_color_tab = 'hover'`, `button_type = 'link'` |
| `pricing_hover_scale` | slider (min `1`, max `3`, step `.01`) | `1` | – |
| `pricing_hover_color` | color | – | – |
| `pricing_hover_bg` | color | – | – |
| `pricing_hover_border_color` | color | – | – |
| `pricing_hover_boxshadow` | boxshadow | `"0 0 0 0 #ffffff"` | – |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

Noch kein Builder in `tools/sppb-export/builders/` — bei Bedarf für die jeweilige Seite ergänzen.
