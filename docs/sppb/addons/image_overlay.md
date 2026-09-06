# Addon: image_overlay

Quelle: `components/com_sppagebuilder/addons/image_overlay/admin.php`

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `image` | media (`hide_alt_text: true`) | `{src: 'https://sppagebuilder.com/addons/image/image1.jpg'}` | – |
| `image_height` | slider (responsive) | `{xl: 300}` (max `1200`) | – |
| `background_image_animation` | select (`slide-top`\|`slide-right`\|`slide-bottom`\|`slide-left`\|`zoom-in`\|`zoom-out`, inline) | `"slide-left"` | – |
| `image_in_lightbox` | checkbox | `0` | – |
| `lightbox_icon_bg` | color | `""` | `image_in_lightbox != 0` |
| `title_subtitle_position` | select (9 Positionen `top-left`…`bottom-right`) | `"bottom-left"` | – |
| `show_content_on_hover` | checkbox | `0` | – |
| `content_padding` | padding (responsive) | – | – |
| `title_link` | link (`mediaType: attachment`) | – | – |
| `linking_style` | select (`on_title`\|`on_content`) | `"on_title"` | – |
| `title` | text | `"Image Overlay"` | – |
| `title_icon` | icon | – | – |
| `heading_selector` | headings | `"h4"` | – |
| `title_typography` | typography | – | – |
| `title_text_color` | color | – | – |
| `title_margin_separator` | separator | – | – |
| `title_margin` | margin (responsive, max `400`) | – | – |
| `sub_title` | text | `"Subtitle of the Image Overlay addon"` | – |
| `subtitle_heading_selector` | headings | `"div"` | – |
| `sub_title_icon` | icon | – | – |
| `sub_title_typography` | typography | – | – |
| `sub_title_text_color` | color | – | – |
| `sub_title_margin_separator` | separator | – | – |
| `sub_title_margin` | margin (responsive) | – | – |
| `overlay_style_tab` | buttons (Tabs: `normal`\|`hover`) | `"normal"` | – |
| `overlay_type` | select (`none`\|`color`\|`gradient`) | `"gradient"` | `overlay_style_tab = 'normal'` |
| `overlay_color` | color | `"rgba(0, 91, 234, 0.5)"` | `overlay_style_tab = 'normal'` AND `overlay_type = 'color'` |
| `overlay_gradient` | gradient | `{color:'rgba(127,0,255,0.8)', color2:'rgba(225,0,255,0.7)', deg:'45', type:'linear'}` | `overlay_style_tab = 'normal'` AND `overlay_type = 'gradient'` |
| `overlay_hover_type` | select (`none`\|`color`\|`gradient`) | `"none"` | `overlay_style_tab = 'hover'` |
| `overlay_hover_color` | color | – | `overlay_style_tab = 'hover'` AND `overlay_hover_type = 'color'` |
| `overlay_hover_gradient` | gradient | `{color:'rgba(127,0,255,0.8)', color2:'rgba(225,0,255,0.7)', deg:'45', type:'linear'}` | `overlay_style_tab = 'hover'` AND `overlay_hover_type = 'gradient'` |
| `text` (Button-Label) | text | – | – |
| `url` (Button-URL) | link | – | – |
| `typography` (Button) | typography | – | – |
| `type` (Button-Stil) | select (`default\|primary\|secondary\|success\|info\|warning\|danger\|dark\|link\|custom`, inline) | `"custom"` | – |
| `link_padding_bottom` | slider (max `100`) | `""` | `type = 'link'` |
| `appearance` | select (`""\|gradient\|outline`) | – | `type != 'link'` |
| `shape` | select (`rounded`\|`square`\|`round`) | `"rounded"` | `type != 'link'` |
| `size` | select (`""\|lg\|xlg\|sm\|xs\|custom`) | – | – |
| `button_padding` | padding (responsive) | – | `size = 'custom'` |
| `block` | select (`""\|sppb-btn-block`) | `""` | `type != 'link'` |
| `button_icon_separator` | separator | – | – |
| `button_icon` | icon | – | – |
| `button_icon_position` | radio (`left`\|`right`) | `"left"` | – |
| `button_margin_separator` | separator | – | – |
| `button_margin` | margin (responsive) | `{xl:'10px 0px 0px 0px', ...}` | – |
| `style_tab_separator` | separator | – | – |
| `style_tab` | buttons (Tabs: `normal`\|`hover`) | `"hover"` | `type = 'custom'` |
| `color` | color | `"#FFFFFF"` | `style_tab = 'normal'` AND `type = 'custom'` |
| `background_color` | color | `"#3366FF"` | `style_tab = 'normal'` AND `type = 'custom'` AND `appearance != 'gradient'` |
| `background_gradient` | gradient | `{color:'#3366FF', color2:'#0037DD', deg:'45', type:'linear'}` | `style_tab = 'normal'` AND `type = 'custom'` AND `appearance = 'gradient'` |
| `color_hover` | color | `"#FFFFFF"` | `style_tab = 'hover'` AND `type = 'custom'` |
| `background_color_hover` | color | `"#0037DD"` | `style_tab = 'hover'` AND `type = 'custom'` AND `appearance != 'gradient'` |
| `background_gradient_hover` | gradient | `{color:'#0037DD', color2:'#3366FF', deg:'45', type:'linear'}` | `style_tab = 'hover'` AND `type = 'custom'` AND `appearance = 'gradient'` |
| `link_style_tab` | buttons (Tabs: `normal`\|`hover`) | `"hover"` | `type = 'link'` |
| `link_color` | color | – | `link_style_tab = 'normal'` AND `type = 'link'` |
| `link_border_width` | slider (max `30`) | – | `link_style_tab = 'normal'` AND `type = 'link'` |
| `link_border_color` | color | `""` | `link_style_tab = 'normal'` AND `type = 'link'` |
| `link_hover_color` | color | `""` | `link_style_tab = 'hover'` AND `type = 'link'` |
| `link_border_hover_color` | color | `""` | `link_style_tab = 'hover'` AND `type = 'link'` |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

Noch kein Builder in `tools/sppb-export/builders/` — bei Bedarf für die jeweilige Seite ergänzen.
