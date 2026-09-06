# SP Page Builder Pro — JSON-Seitenformat

Quelle: `administrator/components/com_sppagebuilder/editor/traits/{ImportTrait,ExportTrait}.php`,
`components/com_sppagebuilder/helpers/helper.php`,
`components/com_sppagebuilder/builder/settings/{row,column,addon}.php`
im Joomla4-Testsystem (`/Users/linus/Documents/0_Development/Joomla4`).

## Envelope (Top-Level)

```json
{
  "template": "<JSON-String eines Section-Arrays>",
  "css": "",
  "seo": "<JSON-String, z.B. '{}' oder SEO-Settings-Objekt>",
  "title": "Seitentitel",
  "language": "*"
}
```

`template` ist **kein** verschachteltes JSON-Objekt, sondern ein String, der beim
Parsen (`JSON.parse`) ein Array von Sections ergibt. Import (`ImportTrait::importLayout`)
und Export (`ExportTrait::exportLayout`) verwenden exakt dieses Envelope.

## Section (Row)

```json
{
  "id": 1577551197921,
  "visibility": true,
  "collapse": false,
  "settings": { "...": "siehe unten" },
  "layout": "7,5",
  "columns": [ "...siehe Column..." ]
}
```

`layout` ist ein Komma-String der Column-Breiten im 12er-Grid (z.B. `"7,5"` für zwei
Spalten mit 7/12 und 5/12 Breite).

### Section-Settings (Auswahl, aus `builder/settings/row.php`)

| Feld | Typ | Bedeutung |
|---|---|---|
| `admin_label` | string | Interner Name im Builder |
| `background_type` | `none\|color\|image\|gradient\|video` | Hintergrundmodus |
| `background_color` | string (hex) | nur relevant wenn `background_type=color` |
| `background_image` | `{src,...}` | nur relevant wenn `background_type=image` |
| `padding` | `{xl,lg,md,sm,xs}` (CSS-Shorthand-String je Breakpoint) | z.B. `"96px 0px 96px 0px"` |
| `margin` | `{xl,lg,md,sm,xs}` | wie `padding` |
| `overlay_type` | string | Overlay über dem Hintergrund |
| `columns_align_center` | bool | Vertikale Zentrierung der Columns |
| `hidden_xs`/`hidden_sm`/`hidden_md`/`hidden_lg`/`hidden_xl` | bool | Responsive Visibility |
| `show_top_shape` (`0\|1`), `shape_name`, `shape_color`, `shape_width`, `shape_height`, `shape_flip`, `shape_invert`, `shape_to_front` | | Shape-Divider oben; Bottom-Variante mit Präfix `bottom_` (`show_bottom_shape`, `bottom_shape_name`, …). `shape_name` = SVG-Name aus `assets/shapes/` (z.B. `wavy-opacity`, `rocky-mountain`, `single-wave`, `clouds-flat`); std `#e5e5e5`. `shape_to_front = true` schiebt den Inhalt statt zu überlappen. Builder: `section({ topShape: { name, color, toFront? }, bottomShape: … })` — Farbe = Hintergrund der angrenzenden Section |

## Column

```json
{
  "id": 1577563705146,
  "class_name": "col-md-6",
  "visibility": true,
  "settings": { "width": { "xl": "50%", "lg": "50%", "md": "100%", "sm": "100%", "xs": "100%" } },
  "addons": [ "...siehe Addon..." ],
  "width": { "xl": "50%", "lg": "50%", "md": "100%", "sm": "100%", "xs": "100%" }
}
```

`width` erscheint sowohl auf Column-Ebene als auch (identisch) unter `settings.width` —
verifiziert an echten Exporten. `class_name` folgt dem Muster `col-md-<span>` mit
`<span>` aus dem 12er-Grid.

## Addon (allgemeine Hülle)

```json
{
  "id": 1577563705152,
  "name": "heading",
  "visibility": true,
  "settings": { "...": "addon-spezifisch, siehe docs/sppb/addons/<name>.md" }
}
```

## Globale Addon-Felder (jedes Addon hat sie zusätzlich)

Quelle: `SpPgaeBuilderBase::addonOptions()` → `builder/settings/addon.php`. Jedes
Addon bekommt diese Felder automatisch zu seinen eigenen `settings` gemerged
(`Helper::prepareAddonFieldStructures()`). Am relevantesten für die Export-Toolset-Builder:

| Feld | Bedeutung |
|---|---|
| `global_background_type` | `none\|color\|image\|gradient` — Hintergrund **des einzelnen Addons** (z.B. eine pastellfarbene Feature-Karte, unabhängig vom Section-Hintergrund) |
| `global_background_color` | hex/rgba-Farbe, nur bei `global_background_type=color` |
| `global_text_color` | Textfarbe |
| `global_padding`/`global_margin` | `{xl,lg,md,sm,xs}` |
| `global_user_border` + `global_border_*` | Rahmen |
| `global_boxshadow` | Schatten, Format `"x y blur spread color"` (std `"0 0 0 0 #FFFFFF"`) |
| `global_border_radius` | `{xl,lg,md,sm,xs}` |
| `global_use_animation` (`0\|1`), `global_animation`, `global_animationduration`, `global_animationdelay` | Entrance-Animation beim Scrollen: Name = animate.css-Klasse (`fadeIn`, `fadeInUp`, `fadeInLeft`, `fadeInRight`, `zoomIn`, …), Dauer/Delay als ms-Strings (std `"300"`/`"0"`). Rendering: `layouts/addon/start.php` → `class="sppb-wow <name>"`, `data-sppb-wow-duration/-delay` |

`tools/sppb-export/lib/fields.mjs::globalStyleFields({backgroundColor, padding, boxShadow, animation, animationDelay})`
bündelt diese Felder für alle Builder.

Section-Ebene: `columns_align_center` (`0|1`) zentriert die Columns vertikal
(Prototyp: `items-center`); `section({ alignCenter: true })`.

Fonts, Link-/Button-/Textfarben kommen **nicht** aus diesen Feldern, sondern aus dem
Helix-Template-Preset — siehe `docs/sppb/helix-template.md`.

`tools/sppb-export/lib/fields.mjs::globalBackgroundFields(color)` bildet genau
diesen Mechanismus ab.

## Wiederkehrende Feldtypen

- **Responsive-Objekt** (`alignment`, `padding`, `margin`, viele Slider): `{xl, lg, md, sm, xs}`.
  Nicht gesetzte Breakpoints (leerer String) erben vom nächsthöheren Breakpoint im
  Frontend. Für unsere Zwecke reicht es, nur `xl` zu befüllen
  (siehe `tools/sppb-export/lib/fields.mjs::responsive`).
- **Link-Feld** (`type: 'link'` in der Addon-Config, z.B. `title_url`, `button_url`, `url`):
  ```json
  { "type": "url", "url": "/pfad", "menu": "", "page": 0, "new_tab": false, "nofollow": false, "noreferrer": false, "noopener": false }
  ```
  Verifiziert gegen `export_origin/Landing_page.json` (Feld `title_link` der
  `heading`-Addon-Instanzen). Abgebildet in `linkField()`.
- **Media-Feld** (`type: 'media'`, z.B. `image` bei den Addons `image`/`image_content`/`feature`):
  mindestens `{ src: string }`; die Addons `image` und `feature` ergänzen zusätzlich
  `height`, `width` (und bei `image` auch `alt`) im selben Objekt.
- **Typography-Feld** (`type: 'typography'`): in dieser Toolset-Version bewusst nicht
  gesetzt — SPPB nutzt dann die Font-/Größen-Defaults des Helix-Ultimate-Templates.
  Bei Bedarf später ergänzen.

## Bekannte Lücke / offener Punkt für den Piloten

Der genaue `type`-Wert des Link-Felds (`"url"` vs. z.B. `"external"`) stammt aus der
**alten** Referenz-Export-Datei (`export_origin/Landing_page.json`), nicht aus einer
frisch mit der installierten Version erzeugten Export-Datei. Der Importer migriert
alte Formate automatisch (`SppagebuilderHelperSite::sanitizeImportJSON`), das Feld
sollte also in jedem Fall funktionieren — beim Piloten-Import (Task 10) trotzdem
gezielt prüfen, ob Links (Buttons, `title_url`, `button_url`) korrekt übernommen werden.
