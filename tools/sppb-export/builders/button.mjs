import { nextId } from '../lib/ids.mjs';
import { responsive, linkField, globalStyleFields } from '../lib/fields.mjs';

/**
 * type 'primary' rendert als .sppb-btn-primary, das Helix Ultimate über
 * presets.scss mit link_color / link_hover_color des aktiven Presets stylt —
 * die Button-Farben folgen damit dem Corporate Design des Templates statt
 * hier hart codiert zu werden.
 */
export function button({
  id,
  text,
  url,
  newTab = false,
  type = 'primary',
  size,
  shape,
  alignment,
  animation,
  animationDelay,
}) {
  return {
    id: id ?? nextId(),
    name: 'button',
    visibility: true,
    settings: {
      text,
      url: linkField(url, { newTab }),
      type,
      ...(size ? { size } : {}),
      ...(shape ? { shape } : {}),
      ...(alignment ? { alignment: responsive(alignment) } : {}),
      ...globalStyleFields({ animation, animationDelay }),
    },
  };
}
