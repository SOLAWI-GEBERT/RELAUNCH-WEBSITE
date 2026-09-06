import { nextId } from '../lib/ids.mjs';
import { responsive } from '../lib/fields.mjs';
import { column } from './column.mjs';

const DEFAULT_PADDING = '96px 0px 96px 0px'; // entspricht py-24 im Prototyp
const DEFAULT_MARGIN = '0px 0px 0px 0px';

/**
 * Shape-Divider (builder/settings/row.php, Gruppe shape_options): Top-Felder
 * heißen show_top_shape / shape_name / shape_color / shape_to_front, die
 * Bottom-Felder tragen das Präfix bottom_. Gültige Namen sind die SVGs in
 * components/com_sppagebuilder/assets/shapes/ (z.B. 'wavy-opacity',
 * 'rocky-mountain'). Konvention für die Wellen aus dem Prototyp
 * (wave-top/wave-bottom): color = Hintergrund der angrenzenden Section,
 * toFront = true, damit der Inhalt verschoben statt überlappt wird.
 */
const DEFAULT_SHAPE_HEIGHT = 48; // px; ohne Höhe überlappt die Welle den Inhalt

function shapeFields(position, shape) {
  if (!shape) return {};
  const { name, color, toFront = true, height = DEFAULT_SHAPE_HEIGHT } = shape;
  const show = position === 'top' ? 'show_top_shape' : 'show_bottom_shape';
  const prefix = position === 'top' ? 'shape' : 'bottom_shape';
  return {
    [show]: 1,
    [`${prefix}_name`]: name,
    [`${prefix}_color`]: color,
    [`${prefix}_height`]: responsive(height),
    [`${prefix}_to_front`]: toFront,
  };
}

/**
 * padding: CSS-Shorthand-String ("oben rechts unten links"), wird responsiv
 * verpackt. Wird ein Prototyp-Abschnitt auf mehrere SPPB-Sections verteilt,
 * über padding die doppelten Abstände herausnehmen (z.B. "96px 0px 64px 0px"
 * für die Überschrift-Section und "0px 0px 96px 0px" für die Folge-Section).
 *
 * alignCenter: vertikale Zentrierung der Columns (columns_align_center),
 * entspricht items-center im Prototyp.
 *
 * topShape / bottomShape: { name, color, toFront?, height? } — siehe shapeFields();
 * height in px (Default 48).
 */
export function section({
  id,
  backgroundColor,
  padding = DEFAULT_PADDING,
  alignCenter = false,
  topShape,
  bottomShape,
  adminLabel = '',
  columns,
}) {
  return {
    id: id ?? nextId(),
    visibility: true,
    collapse: false,
    settings: {
      admin_label: adminLabel,
      background_type: backgroundColor ? 'color' : 'none',
      background_color: backgroundColor ?? '',
      padding: typeof padding === 'string' ? responsive(padding) : padding,
      margin: responsive(DEFAULT_MARGIN),
      ...(alignCenter ? { columns_align_center: 1 } : {}),
      ...shapeFields('top', topShape),
      ...shapeFields('bottom', bottomShape),
    },
    layout: columns.map((c) => c.span).join(','),
    columns: columns.map((c) => column({ span: c.span, addons: c.addons })),
  };
}
