import { nextId } from '../lib/ids.mjs';
import { responsive, globalBackgroundFields } from '../lib/fields.mjs';

export function textBlock({ id, text, alignment, backgroundColor }) {
  return {
    id: id ?? nextId(),
    name: 'text_block',
    visibility: true,
    settings: {
      text,
      ...(alignment ? { alignment: responsive(alignment) } : {}),
      ...globalBackgroundFields(backgroundColor),
    },
  };
}
