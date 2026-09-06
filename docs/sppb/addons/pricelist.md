# Addon: pricelist

Quelle: `components/com_sppagebuilder/addons/pricelist/admin.php`

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `title` | textarea | `"Grilled Peach & Summer Berries"` | – |
| `title_typography` | typography | – | – |
| `title_text_color` | color | – | – |
| `title_margin_separator` | separator | – | – |
| `title_margin_top` | slider (responsive, max `400`) | – | – |
| `title_margin_bottom` | slider (responsive, max `400`) | – | – |
| `price` | text (placeholder `$20.00`) | `"$20.00"` | – |
| `price_typography` | typography | – | – |
| `price_color` | color | – | – |
| `price_position` | select (`with-title`\|`right-to-title`\|`content-bottom`) | `"right-to-title"` | – |
| `price_top_gap` | slider | – | – |
| `price_bottom_gap` | slider | – | – |
| `zero_position` | select (`top`\|`baseline`) | `"baseline"` | – |
| `discount_price_separator` | separator | – | – |
| `discount_price` | text (placeholder `$15.00`) | – | – |
| `discount_price_color` | color | – | – |
| `discount_price_position` | select (`top`\|`baseline`) | `"baseline"` | – |
| `line_separator` | separator | – | `price_position != 'content-bottom'` |
| `add_line` | checkbox | `1` | `price_position != 'content-bottom'` |
| `line_style` | select (`solid`\|`dotted`\|`dashed`\|`double`) | `"dotted"` | `price_position != 'content-bottom'` AND `add_line != 0` |
| `line_size` | slider (max `20`) | – | `price_position != 'content-bottom'` AND `add_line != 0` |
| `line_color` | color | – | `price_position != 'content-bottom'` AND `add_line != 0` |
| `line_position` | select (`center`\|`flex-end`\|`title-bottom`) | `"center"` | `price_position != 'content-bottom'` AND `add_line != 0` |
| `line_top_gap` | slider (max `100`) | `0` | `line_position != 'center'`, `line_position != 'flex-end'`, `price_position != 'content-bottom'`, `add_line != 0` |
| `line_bottom_gap` | slider (max `100`) | `0` | analog zu `line_top_gap` |
| `add_number_or_image` | checkbox (`is_header`) | `1` | – |
| `number_or_image_left` | select (`image`\|`number`) | `"image"` | `add_number_or_image != 0` |
| `image` | media (`show_input: true`) | `{src: 'http://demo.joomshaper.com/2015/cuisine/images/frying-pank.jpg'}` | `add_number_or_image != 0` AND `number_or_image_left = 'image'` |
| `image_width` | slider (responsive, max `100`) | `15` | `add_number_or_image != 0` AND `number_or_image_left = 'image'` |
| `image_gutter` | slider (responsive, max `100`) | `15` | `add_number_or_image != 0` AND `number_or_image_left = 'image'` |
| `image_border_radius` | slider (max `100`) | `""` | `add_number_or_image != 0` AND `number_or_image_left = 'image'` |
| `separator_image_tag` | separator | – | `add_number_or_image != 0` AND `number_or_image_left = 'image'` |
| `image_tag` | checkbox | `0` | `add_number_or_image != 0` AND `number_or_image_left = 'image'` |
| `image_tag_text` | text (inline, placeholder `HOT`) | `"HOT"` | + `image_tag != 0` |
| `image_tag_bg` | color | `"#FA0606"` | + `image_tag != 0` |
| `image_tag_radius` | slider (max `100`) | – | + `image_tag != 0` |
| `image_tag_top_margin` | slider (max `500`) | `0` | + `image_tag != 0` |
| `image_tag_left_margin` | slider (max `500`) | `0` | + `image_tag != 0` |
| `number_text` | text | `"01"` | `number_or_image_left != 'image'` AND `add_number_or_image != 0` |
| `number_typography` | typography | – | `number_or_image_left != 'image'` AND `add_number_or_image != 0` |
| `number_color` | color | – | `number_or_image_left != 'image'` AND `add_number_or_image != 0` |
| `number_bg_color` | color | – | `number_or_image_left != 'image'` AND `add_number_or_image != 0` |
| `number_spacing_separator` | separator | – | `number_or_image_left != 'image'` AND `add_number_or_image != 0` |
| `number_top_padding` | slider (max `200`) | `""` | `number_or_image_left != 'image'` AND `add_number_or_image != 0` |
| `number_bottom_padding` | slider (max `200`) | `""` | `number_or_image_left != 'image'` AND `add_number_or_image != 0` |
| `text` | editor (HTML) | `"Mixed greens, fresh pulled mozzarella, garden basil, Hawaiian sea salt,extra virgin olive oil"` | – |
| `content_typography` | typography | – | – |
| `global_text_color` | color | – | – |
| `content_position_separator` | separator | – | – |
| `content_position` | alignment (responsive, `left`\|`center`\|`right`) | – | – |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

Noch kein Builder in `tools/sppb-export/builders/` — bei Bedarf für die jeweilige Seite ergänzen.
