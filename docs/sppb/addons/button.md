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
| *(weitere Style-/Farb-/Icon-Felder analog zu `image_content`'s `button_options`-Gruppe — siehe Datei für die vollständige Liste, falls Custom-Farben statt `type`-Presets benötigt werden)* | | | |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

**Von `tools/sppb-export/builders/button.mjs` gesetzt:** `text`, `url` (Link-Feld), `type`. Bewusst **kein** Custom-Farb-Override — die builder-seitig unverifizierten Farbfelder (`button_color`, `button_background_color`, ...) werden erst ergänzt, wenn ein `type`-Preset im Piloten-Test nicht ausreicht.
