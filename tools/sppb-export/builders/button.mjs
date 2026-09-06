import { nextId } from '../lib/ids.mjs';
import { linkField } from '../lib/fields.mjs';

export function button({ id, text, url, newTab = false, type = 'custom' }) {
  return {
    id: id ?? nextId(),
    name: 'button',
    visibility: true,
    settings: {
      text,
      url: linkField(url, { newTab }),
      type,
    },
  };
}
