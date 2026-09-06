# Addon: flip_box

Quelle: `components/com_sppagebuilder/addons/flip_box/admin.php`

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `front_text` | textarea | Icon+Überschrift-HTML (`Product Design`) | – |
| `front_bgcolor` | color | – | – |
| `front_textcolor` | color | `"#FFFFFF"` | – |
| `front_bgimg` | media (`hide_alt_text: true`) | `{src: 'https://sppagebuilder.com/addons/flipbox/flipbox-bg-1.jpg'}` | – |
| `text_align` | alignment (responsive, `left`\|`center`\|`right`) | `{xl:'left', lg:'', md:'', sm:'', xs:''}` | – |
| `flip_text` | textarea | Überschrift+Absatz-HTML (`Product Design`) | – |
| `back_bgcolor` | color | `"#2E3B3E"` | – |
| `back_textcolor` | color | `"#FFFFFF"` | – |
| `back_bgimg` | media (`hide_alt_text: true`) | – | – |
| `flip_bhave` | select (`hover`\|`click`, inline) | `"hover"` | – |
| `flip_style` | select (`rotate_style`\|`slide_style`\|`fade_style`\|`threeD_style`, inline) | `"flat_style"` (nicht in `values` enthalten) | – |
| `rotate` | select (`flip_top`\|`flip_bottom`\|`flip_left`\|`flip_right`, inline) | `"flip_right"` | `flip_style != 'fade_style'` |
| `height` | slider (responsive) | `""` (max `1000`) | – |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

Noch kein Builder in `tools/sppb-export/builders/` — bei Bedarf für die jeweilige Seite ergänzen.
