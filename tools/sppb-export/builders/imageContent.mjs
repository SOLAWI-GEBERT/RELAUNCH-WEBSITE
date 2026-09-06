import { nextId } from '../lib/ids.mjs';
import { responsive, linkField, globalStyleFields } from '../lib/fields.mjs';

export function imageContent({
  id,
  text,
  imageSrc,
  imageAlign = 'left',
  title,
  headingSelector = 'h3',
  buttonText,
  buttonUrl,
  contentPadding,
  backgroundColor,
  padding,
  animation,
  animationDelay,
}) {
  const settings = {
    text,
    image: { src: imageSrc },
    image_alignment: imageAlign,
    // SPPB-Default ist "120px 0 120px 50px" — im Prototyp sitzt der Text ohne
    // großen Innenabstand neben dem Bild, daher explizit setzbar.
    ...(contentPadding ? { content_padding: responsive(contentPadding) } : {}),
  };

  if (title) {
    settings.title = title;
    settings.heading_selector = headingSelector;
  }

  if (buttonText) {
    settings.button_text = buttonText;
    settings.button_url = linkField(buttonUrl);
    // 'primary' erbt link_color/link_hover_color des Helix-Presets (siehe button.mjs)
    settings.button_type = 'primary';
  }

  Object.assign(settings, globalStyleFields({ backgroundColor, padding, animation, animationDelay }));

  return { id: id ?? nextId(), name: 'image_content', visibility: true, settings };
}
