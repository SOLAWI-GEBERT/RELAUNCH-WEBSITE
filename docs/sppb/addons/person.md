# Addon: person

Quelle: `components/com_sppagebuilder/addons/person/admin.php`

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `person_style_preset` | thumbnail (`default`\|`layout1`\|`layout2`\|`layout3`\|`layout4`, 3 Spalten) | `"default"` | – |
| `name` | text | `"John Doe"` | – |
| `title_link` | link | – | – |
| `name_typography` | typography | – | – |
| `name_color` | color | – | – |
| `designation_separator` | separator | – | – |
| `designation` | text | `"Creative Director"` | – |
| `designation_typography` | typography | – | – |
| `designation_color` | color | – | – |
| `designation_margin` | margin (responsive) | – | – |
| `email` | text | – | – |
| `intro_separator` | separator | – | – |
| `introtext` | textarea | – | `person_style_preset != 'layout3'` |
| `intro_typography` | typography | – | – |
| `introtext_color` | color | – | – |
| `alignment_separator` | separator | – | – |
| `alignment` | alignment (responsive, `left`\|`center`\|`right`) | – | – |
| `image` | media (`hideTitle: true`, `format: image`) | `{src: 'https://sppagebuilder.com/addons/person/person1.jpg'}` | – |
| `image_border_radius` | slider (max `400`) | `0` | – |
| `name_desig_padding` | padding (responsive) | `{xl:'15px 0px 15px 15px', ...}` | `person_style_preset = 'layout1'` (Gruppe zusätzlich: `!= default/layout2/layout3`) |
| `name_desig_bg` | color | `"#FFFFFF"` | `person_style_preset = 'layout1'` |
| `person_content_bg` | color | `"#FFFFFF"` | `person_style_preset = 'layout4'` |
| `person_content_padding` | padding (responsive) | `{xl:'15px 15px 15px 15px', ...}` | `person_style_preset = 'layout4'` |
| `content_overlay_type` | radio (`color`\|`gradient`, `is_header`) | `"gradient"` | Gruppe: `person_style_preset != 'layout4'` |
| `content_overlay_color` | color | – | `content_overlay_type != 'gradient'` |
| `content_overlay_backdrop_filter` | select (`blur`\|`brightness`\|`contrast`\|`grayscale`\|`invert`\|`opacity`\|`sepia`\|`saturate`) | `""` | `person_style_preset != layout1/default` AND `content_overlay_type != 'gradient'` |
| `content_overlay_backdrop_filter_value` | slider (max `100`) | – | `person_style_preset != layout1/default` AND `content_overlay_backdrop_filter != ''` |
| `content_overlay_gradient` | gradient | `{color:'rgba(127,0,255,0.8)', color2:'rgba(225,0,255,0.7)', deg:'45', type:'linear'}` | `content_overlay_type = 'gradient'` |
| `facebook` | text | `"https://www.facebook.com/joomshaper"` | – |
| `twitter` | text | `"https://twitter.com/joomshaper"` | – |
| `youtube` | text | – | – |
| `linkedin` | text | – | – |
| `pinterest` | text | – | – |
| `flickr` | text | – | – |
| `dribbble` | text | – | – |
| `behance` | text | – | – |
| `instagram` | text | – | – |
| `social_icon_color_separator` | separator | – | – |
| `social_icon_color` | color | – | – |
| `social_icon_hover_color` | color | – | – |
| `social_icon_fontsize_separator` | separator | – | – |
| `social_icon_fontsize` | slider (max `200`) | – | – |
| `social_icon_margin` | margin (responsive) | – | – |
| `social_position` | select (`before`\|`after`) | `"after"` | `person_style_preset != 'layout3'` |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

Noch kein Builder in `tools/sppb-export/builders/` — bei Bedarf für die jeweilige Seite ergänzen.
