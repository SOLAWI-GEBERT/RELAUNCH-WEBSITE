import { nextId } from '../lib/ids.mjs';
import { responsive, globalStyleFields } from '../lib/fields.mjs';

export function textBlock({ id, text, alignment, backgroundColor, animation, animationDelay }) {
  return {
    id: id ?? nextId(),
    name: 'text_block',
    visibility: true,
    settings: {
      text,
      ...(alignment ? { alignment: responsive(alignment) } : {}),
      ...globalStyleFields({ backgroundColor, animation, animationDelay }),
    },
  };
}
