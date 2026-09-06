import { nextId } from '../lib/ids.mjs';

const GRID_COLUMNS = 12;

export function columnWidthPercent(span) {
  const percent = (span / GRID_COLUMNS) * 100;
  return `${Number(percent.toFixed(11))}%`;
}

export function column({ id, span, addons = [] }) {
  const widthXl = columnWidthPercent(span);
  const width = { xl: widthXl, lg: widthXl, md: '100%', sm: '100%', xs: '100%' };

  return {
    id: id ?? nextId(),
    class_name: `col-md-${span}`,
    visibility: true,
    settings: { width },
    addons,
    width,
  };
}
