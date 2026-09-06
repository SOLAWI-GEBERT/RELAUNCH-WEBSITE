import { nextId } from '../lib/ids.mjs';
import { column } from './column.mjs';

const DEFAULT_PADDING = { xl: '96px 0px 96px 0px', lg: '', md: '', sm: '', xs: '' };
const DEFAULT_MARGIN = { xl: '0px 0px 0px 0px', lg: '', md: '', sm: '', xs: '' };

export function section({ id, backgroundColor, padding, adminLabel = '', columns }) {
  return {
    id: id ?? nextId(),
    visibility: true,
    collapse: false,
    settings: {
      admin_label: adminLabel,
      background_type: backgroundColor ? 'color' : 'none',
      background_color: backgroundColor ?? '',
      padding: padding ?? DEFAULT_PADDING,
      margin: DEFAULT_MARGIN,
    },
    layout: columns.map((c) => c.span).join(','),
    columns: columns.map((c) => column({ span: c.span, addons: c.addons })),
  };
}
