# Addon: image

Quelle: `components/com_sppagebuilder/addons/image/admin.php`

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `image` | media | `{src,height,width,alt}` | – |
| `image_2x` | media | `{src:'',height:'',width:''}` | – |
| `alt_text` | text | `"Image"` | – |
| `image_title` | text | `""` | – |
| `image_fit` | select (`none\|cover\|contain\|fill\|scale-down`) | `""` | – |
| `position` | alignment (responsive) | – | – |
| `is_image_shape_enabled` | checkbox | `0` | – |
| `image_shape` | image_shape (12 Formen) | `""` | `is_image_shape_enabled = 1` |
| `image_shape_scale` | slider | `1.2` | `is_image_shape_enabled = 1` |
| `is_effects_enabled` | checkbox | `0` | – |
| `image_effects` | effects | – | `is_effects_enabled = 1` |
| `image_width`/`image_height` | slider (responsive) | – | – |
| `border_radius` | advancedslider | `0` | – |
| `fetch_priority` | select (`high`\|`low`) | `""` | – |
| `open_lightbox` | checkbox | `0` | – |
| `overlay_color` | color | `"rgba(119, 219, 31, .5)"` | `open_lightbox != 0` |
| `is_zoom_enabled` | checkbox | `0` | – |
| `zoom_scale` | slider | `1.2` | `is_zoom_enabled = 1` |
| `link` | link | `""` | `open_lightbox != 1` |
| `title` | text | – | – |
| `heading_selector` | headings | `"h3"` | – |
| `title_typography` | typography | – | – |
| `title_text_color` | color | – | – |
| `title_position` | select (`top`\|`bottom`) | `"top"` | – |
| `title_margin_top`/`title_margin_bottom` | slider (responsive) | – | – |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

**Von `tools/sppb-export/builders/image.mjs` gesetzt:** `image.{src,height,width,alt}`, `alt_text`, optional `position`, optional `global_background_type`/`global_background_color`.
