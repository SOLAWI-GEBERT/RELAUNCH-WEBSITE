import { nextId } from '../lib/ids.mjs';
import { responsive, globalBackgroundFields } from '../lib/fields.mjs';

export function image({ id, src, alt = 'Image', width = '', height = '', alignment, backgroundColor }) {
  return {
    id: id ?? nextId(),
    name: 'image',
    visibility: true,
    settings: {
      image: { src, height, width, alt },
      alt_text: alt,
      ...(alignment ? { position: responsive(alignment) } : {}),
      ...globalBackgroundFields(backgroundColor),
    },
  };
}
