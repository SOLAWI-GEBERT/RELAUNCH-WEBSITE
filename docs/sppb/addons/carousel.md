# Addon: carousel

Quelle: `components/com_sppagebuilder/addons/carousel/admin.php`

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `sp_carousel_item` | repeatable (Attr-Gruppen: `title`, `content`, `button` — siehe unten) | – | – |
| ↳ `title.title` | text | `"Where Art and Technology Collide"` | – |
| ↳ `title.title_padding` | padding (responsive) | `{xl:'0px 0px 0px 0px', ...}` | – |
| ↳ `title.title_margin` | margin (responsive) | `{xl:'0px 0px 0px 0px', ...}` | – |
| ↳ `content.content` | editor (HTML) | Platzhaltertext (Dell-Anekdote) | – |
| ↳ `content.content_padding` | padding (responsive) | `{xl:'20px 0px 30px 0px', ...}` | – |
| ↳ `content.content_margin` | margin (responsive) | `{xl:'0px 0px 0px 0px', ...}` | – |
| ↳ `content.bg` | media (`format: image`) | `{src: 'https://sppagebuilder.com/addons/carousel/carousel-bg.jpg'}` | – |
| ↳ `button.button_text` | text | `"Learn More"` | – |
| ↳ `button.button_url` | link | – | – |
| ↳ `button.button_icon` | icon | – | – |
| ↳ `button.button_icon_position` | select (`left`\|`right`) | – | – |
| `alignment_separator` | separator | – | – |
| `alignment` | alignment | `"center"` | – |
| `autoplay` | checkbox (`1`=Ja\|`0`=Nein) | `1` | – |
| `interval` | slider | `5` | `autoplay = 1` |
| `speed` | slider | `600` | – |
| `randomize_carousel` | checkbox | `0` | – |
| `controllers` | checkbox (`1`=Ja\|`0`=Nein) | `1` | – |
| `arrows` | checkbox (`1`=Ja\|`0`=Nein) | `1` | – |
| `options_tab` | buttons (Tabs: `typography`\|`color`\|`button`) | `"typography"` | – |
| `item_title_typography` | typography | – | `options_tab = 'typography'` |
| `item_content_typography` | typography | – | `options_tab = 'typography'` |
| `item_title_color` | color | – | `options_tab = 'color'` |
| `item_content_color` | color | – | `options_tab = 'color'` |
| `button_typography` | typography | – | `options_tab = 'button'` |
| `button_type` | select (`default\|primary\|secondary\|success\|info\|warning\|danger\|dark\|link\|custom`) | `"custom"` | `options_tab = 'button'` |
| `link_button_padding_bottom` | slider (max `100`) | – | `button_type = 'link'` AND `options_tab = 'button'` |
| `button_appearance` | select (`""\|gradient\|outline`) | – | `options_tab = 'button'` AND `button_type != 'link'` |
| `button_shape` | select (`rounded`\|`square`\|`round`) | `"rounded"` | `options_tab = 'button'` AND `button_type != 'link'` |
| `button_size` | select (`""\|lg\|xlg\|sm\|xs\|custom`) | – | `options_tab = 'button'` |
| `button_padding` | padding (responsive) | `{xl:'8px 22px 10px 22px', ...}` | `button_size = 'custom'` AND `options_tab = 'button'` |
| `button_block` | select (`""\|sppb-btn-block`) | – | `options_tab = 'button'` AND `button_type != 'link'` |
| `button_colors_tab` | buttons (Tabs: `normal`\|`hover`) | `"normal"` | `options_tab = 'button'` AND `button_type = 'custom'` |
| `button_color` | color | `"#FFFFFF"` | `options_tab = 'button'` AND `button_type = 'custom'` AND `button_colors_tab != 'hover'` |
| `button_color_hover` | color | `"#FFFFFF"` | `options_tab = 'button'` AND `button_type = 'custom'` AND `button_colors_tab = 'hover'` |
| `button_background_color` | color | `"#3366FF"` | `options_tab = 'button'` AND `button_type = 'custom'` AND `button_appearance != 'gradient'` AND `button_colors_tab != 'hover'` |
| `button_background_color_hover` | color | `"#0037DD"` | analog mit `button_colors_tab = 'hover'` |
| `button_background_gradient` | gradient | `{color:'#3366FF', color2:'#0037DD', deg:'45', type:'linear'}` | `button_appearance = 'gradient'`, `button_colors_tab != 'hover'` |
| `button_background_gradient_hover` | gradient | `{color:'#0037DD', color2:'#3366FF', deg:'45', type:'linear'}` | `button_appearance = 'gradient'`, `button_colors_tab = 'hover'` |
| `link_button_colors_tab` | buttons (Tabs: `normal`\|`hover`) | `"normal"` | `options_tab = 'button'` AND `button_type = 'link'` |
| `link_button_color` | color | – | `link_button_colors_tab != 'hover'` |
| `link_button_border_width` | slider (max `30`) | – | `link_button_colors_tab != 'hover'` |
| `link_button_border_color` | color | `""` | `link_button_colors_tab != 'hover'` |
| `link_button_hover_color` | color | `""` | `link_button_colors_tab = 'hover'` |
| `link_button_border_hover_color` | color | `""` | `link_button_colors_tab = 'hover'` |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

Noch kein Builder in `tools/sppb-export/builders/` — bei Bedarf für die jeweilige Seite ergänzen.
