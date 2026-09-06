# Addon: button_group

Quelle: `components/com_sppagebuilder/addons/button_group/admin.php`

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `sp_button_group_item` | repeatable (Gruppen: `button`, `icon`, `style`, `link_style` — siehe unten) | – | – |
| ↳ `button.title` | text | `"Button"` | – |
| ↳ `button.url` | link (`link_popup: true`) | – | – |
| ↳ `button.typography` | typography | – | – |
| ↳ `button.type` | select (`default\|primary\|secondary\|success\|info\|warning\|danger\|dark\|link\|custom`, inline) | `"primary"` | – |
| ↳ `button.link_button_padding_bottom` | slider (max `100`) | – | `type = 'link'` |
| ↳ `button.appearance` | select (`""\|outline\|gradient`, inline) | `"flat"` (nicht in `values` enthalten) | `type != 'link'` |
| ↳ `button.shape` | radio (`rounded`\|`square`\|`round`) | `"rounded"` | – |
| ↳ `button.size` | select (`""\|lg\|xlg\|sm\|xs\|custom`) | – | – |
| ↳ `button.button_padding` | padding (responsive) | – | `size = 'custom'` |
| ↳ `button.block` | select (`""\|sppb-btn-block`) | – | – |
| ↳ `icon.icon` | icon | – | – |
| ↳ `icon.icon_position` | select (`left`\|`right`) | `"left"` | – |
| ↳ `style.style_tab` | buttons (Tabs: `normal`\|`hover`) | `"normal"` | Gruppe: `type = 'custom'` |
| ↳ `style.color` | color | `"#fff"` | `style_tab != 'hover'` |
| ↳ `style.color_hover` | color | `"#fff"` | `style_tab = 'hover'` |
| ↳ `style.background_color` | color | `"#444444"` | `appearance != 'gradient'` AND `style_tab != 'hover'` |
| ↳ `style.background_color_hover` | color | `"#222"` | `appearance != 'gradient'` AND `style_tab = 'hover'` |
| ↳ `style.background_gradient` | gradient | `{color:'#3366FF', color2:'#0037DD', deg:'45', type:'linear'}` | `appearance = 'gradient'` AND `style_tab != 'hover'` |
| ↳ `style.background_gradient_hover` | gradient | `{color:'#0037DD', color2:'#3366FF', deg:'45', type:'linear'}` | `appearance = 'gradient'` AND `style_tab = 'hover'` |
| ↳ `link_style.link_style_tab` | buttons (Tabs: `normal`\|`hover`) | `"normal"` | Gruppe: `type = 'link'` |
| ↳ `link_style.link_button_color` | color | – | `link_style_tab != 'hover'` |
| ↳ `link_style.link_button_border_width` | slider (max `30`) | – | `link_style_tab != 'hover'` |
| ↳ `link_style.link_border_color` | color | – | `link_style_tab != 'hover'` |
| ↳ `link_style.link_button_hover_color` | color | – | `link_style_tab = 'hover'` |
| ↳ `link_style.link_button_border_hover_color` | color | – | `link_style_tab = 'hover'` |
| `margin_separator` | separator | – | – |
| `margin` | slider (responsive, Gap zwischen Buttons, max `100`) | `{xl: 5}` | – |
| `alignment_separator` | separator | – | – |
| `alignment` | alignment (responsive, `left`\|`center`\|`right`) | `{xl:'center', lg:'', md:'', sm:'', xs:''}` | – |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

Noch kein Builder in `tools/sppb-export/builders/` — bei Bedarf für die jeweilige Seite ergänzen.
