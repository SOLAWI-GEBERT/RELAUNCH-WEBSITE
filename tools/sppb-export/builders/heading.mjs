import { nextId } from '../lib/ids.mjs';
import { responsive, globalStyleFields } from '../lib/fields.mjs';

export function heading({
  id,
  title,
  headingSelector = 'h2',
  alignment = 'center',
  color,
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
      // title_color (advancedcolor) akzeptiert laut CSSHelper::parseColor auch
      // einen reinen Hex-String. Ohne Angabe gilt die Template-Typografie.
      ...(color ? { title_color: color } : {}),
      ...globalStyleFields({ backgroundColor, animation, animationDelay }),
    },
  };
}
