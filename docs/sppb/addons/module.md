# Addon: module

Quelle: `components/com_sppagebuilder/addons/module/admin.php`

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `module_type` | select (`module`\|`position`) | `"module"` | – |
| `id` | module (`module: 'module'`) | – | `module_type = 'module'` |
| `position` | module (`module: 'position'`) | – | `module_type = 'position'` |
| `title` | text | – | – |
| `heading_selector` | headings | `"h3"` | – |
| `title_typography` | typography | – | – |
| `title_text_color` | color | – | – |
| `title_margin_separator` | separator | – | – |
| `title_margin_top` | slider (responsive) | – (max `400`) | – |
| `title_margin_bottom` | slider (responsive) | – (max `400`) | – |

`attr` ist ein leeres Array (kein zusätzliches Feld-Set außerhalb von `settings`).

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

Noch kein Builder in `tools/sppb-export/builders/` — bei Bedarf für die jeweilige Seite ergänzen.
