import { nextId } from '../lib/ids.mjs';
import { responsive } from '../lib/fields.mjs';
import { column } from './column.mjs';

const DEFAULT_PADDING = '96px 0px 96px 0px'; // entspricht py-24 im Prototyp
const DEFAULT_MARGIN = '0px 0px 0px 0px';

/**
 * padding: CSS-Shorthand-String ("oben rechts unten links"), wird responsiv
 * verpackt. Wird ein Prototyp-Abschnitt auf mehrere SPPB-Sections verteilt,
 * über padding die doppelten Abstände herausnehmen (z.B. "96px 0px 64px 0px"
 * für die Überschrift-Section und "0px 0px 96px 0px" für die Folge-Section).
 *
 * alignCenter: vertikale Zentrierung der Columns (columns_align_center),
 * entspricht items-center im Prototyp.
 */
export function section({ id, backgroundColor, padding = DEFAULT_PADDING, alignCenter = false, adminLabel = '', columns }) {
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
    },
    layout: columns.map((c) => c.span).join(','),
    columns: columns.map((c) => column({ span: c.span, addons: c.addons })),
  };
}
