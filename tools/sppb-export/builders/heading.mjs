import { nextId } from '../lib/ids.mjs';
import { responsive, globalStyleFields } from '../lib/fields.mjs';

export function heading({
  id,
  title,
  headingSelector = 'h2',
  alignment = 'center',
  backgroundColor,
  animation,
  animationDelay,
}) {
  return {
    id: id ?? nextId(),
    name: 'heading',
    visibility: true,
    settings: {
      title,
      heading_selector: headingSelector,
      alignment: responsive(alignment),
      ...globalStyleFields({ backgroundColor, animation, animationDelay }),
    },
  };
}
