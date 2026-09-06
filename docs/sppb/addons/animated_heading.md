# Addon: animated_heading

Quelle: `components/com_sppagebuilder/addons/animated_heading/admin.php`

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `heading_style` | select (`highlighted`\|`text-animation`) | `"text-animation"` | – |
| `heading_selector` | headings (h1–h6) | `"h3"` | – |
| `animated_text_separator` | separator | – | – |
| `animated_text` | textarea | `"awesome\nnice\ncool"` | `heading_style = 'text-animation'` |
| `animated_text_typography` | typography | – | `heading_style = 'text-animation'` |
| `highlighted_text` | text | `"awesome"` | `heading_style = 'highlighted'` |
| `highlighted_typography` | typography | – | `heading_style = 'highlighted'` |
| `animated_text_color` | color | `"#3366FF"` | – |
| `shape_color` | color | `"#3366FF"` | `heading_style = 'highlighted'` |
| `heading_before_part_separator` | separator | – | – |
| `heading_before_part` | text | `"This heading is"` | – |
| `heading_after_part` | text | `"from the beginning."` | – |
| `heading_typography` | typography | – | – |
| `heading_color` | color | `"#333333"` | – |
| `heading_margin_separator` | separator | – | – |
| `heading_margin` | margin (responsive) | `""` | – |
| `heading_padding` | padding (responsive) | `""` | – |
| `alignment_separator` | separator | – | – |
| `alignment` | alignment (responsive, `left`\|`center`\|`right`) | – | – |
| `text_animation_name` | select (`blinds`\|`clip`\|`delete-typing`\|`flip`\|`fade-in`\|`loading-bar`\|`scale`\|`slide`\|`push`\|`wave`) | `"clip"` | `heading_style = 'text-animation'` AND `animated_text != ''` |
| `shape_width` | slider | `""` (max `200`) | `heading_style = 'highlighted'` AND `highlighted_shape != ''` |
| `shape_radius` | checkbox | `0` | `heading_style = 'highlighted'` AND `highlighted_shape != ''` |
| `highlighted_shape` | select (`bg-fill`\|`circle`\|`cross`\|`diagonal`\|`strikethrough`\|`square`\|`top-botm-line`\|`underline`\|`dubl-underline`\|`zigzag-underline`\|`sharpe-zigzag`\|`wave`) | `"circle"` | `heading_style = 'highlighted'` AND `highlighted_text != ''` |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

Noch kein Builder in `tools/sppb-export/builders/` — bei Bedarf für die jeweilige Seite ergänzen.
