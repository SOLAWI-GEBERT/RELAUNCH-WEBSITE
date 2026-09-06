# Addon: raw_html

Quelle: `components/com_sppagebuilder/addons/raw_html/admin.php`

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `html` | codeeditor (`syntax: htmlmixed`) | `"<p>Insert raw html here.<br/>Here is an example of hyper link <a href=\"https://www.joomshaper.com/\">JoomShaper</a></p>"` | – |
| `title` | text | – | – |
| `heading_selector` | headings | `"h3"` | – |
| `title_typography` | typography | – | – |
| `title_text_color` | color | – | – |
| `title_margin_top` | slider (responsive) | – (max `400`) | – |
| `title_margin_bottom` | slider (responsive) | – (max `400`) | – |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

Noch kein Builder in `tools/sppb-export/builders/` — bei Bedarf für die jeweilige Seite ergänzen.
