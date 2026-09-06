# Addon: button

Quelle: `components/com_sppagebuilder/addons/button/admin.php`

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `text` | text | `"Button"` | – |
| `url` | link | – | – |
| `aria_label` | text | `""` | – |
| `typography` | typography | – | – |
| `type` | select (`default\|primary\|secondary\|success\|info\|warning\|danger\|dark\|link\|custom`) | `"custom"` | – |
| `link_button_padding_bottom` | slider | – | `type = 'link'` |
| `appearance` | select (`""` flat \| `gradient` \| `outline`) | `""` | `type != 'link'` |
| `shape` | select (`rounded\|square\|round`) | `"rounded"` | `type != 'link'` |
| `size` | select (`""` default \| `lg` \| `xlg` \| `sm` \| `xs` \| `custom`) | – | – |
| `button_padding` | padding (responsive) | `""` | `size = 'custom'` |
| `block` | select (`""` \| `sppb-btn-block`) | – | `type != 'link'` |
| `alignment` | alignment (responsive, `left\|center\|right`) | `{xl:'center', ...}` | – |
| `icon` | icon | – | – |
| `icon_position` | radio (`left\|right`) | `"left"` | – |
| `icon_margin` | margin (responsive) | `{xl:'0px 0px 0px 0px', ...}` | – |
| `button_style_state` | buttons (`normal\|hover`) | `"normal"` | `type = 'custom'` |
| `color` / `color_hover` | color | `#FFFFFF` / `#FFFFFF` | `type = 'custom'` |
| `background_color` / `background_color_hover` | color | `#3366FF` / `#0037DD` | `type = 'custom'`, `appearance != 'gradient'` |
| `background_gradient` / `background_gradient_hover` | gradient | siehe Datei | `type = 'custom'`, `appearance = 'gradient'` |
| `link_button_color` / `link_button_hover_color` | color | `#3366FF` / `#0037DD` | `type = 'link'` |
| `link_button_border_width` | slider | `1` | `type = 'link'` |
| `link_border_color` / `link_button_border_hover_color` | color | `#3366FF` / `#0037DD` | `type = 'link'` |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

**Von `tools/sppb-export/builders/button.mjs` gesetzt:** `text`, `url` (Link-Feld),
`type` (Default **`primary`**), optional `size`, `shape`, `alignment`, optional
Animation über die globalen Felder.

**Warum `primary` statt `custom`:** `.sppb-btn-primary` wird von Helix Ultimate
(`scss/presets.scss`) mit `link_color`/`link_hover_color` des aktiven Presets
gestylt — der Button folgt damit dem Corporate Design des Templates
(siehe `docs/sppb/helix-template.md`). `custom` ohne gesetzte Farbfelder erscheint
ungestylt (im Piloten-Import bestätigt); die Farbfelder sind oben dokumentiert,
falls ein Button bewusst vom Preset abweichen soll.
