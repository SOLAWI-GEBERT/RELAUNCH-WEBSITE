import { nextId } from '../lib/ids.mjs';
import { linkField, globalBackgroundFields } from '../lib/fields.mjs';

export function imageContent({
  id,
  text,
  imageSrc,
  imageAlign = 'left',
  title,
  headingSelector = 'h3',
  buttonText,
  buttonUrl,
  backgroundColor,
}) {
  const settings = {
    text,
    image: { src: imageSrc },
    image_alignment: imageAlign,
  };

  if (title) {
    settings.title = title;
    settings.heading_selector = headingSelector;
  }

  if (buttonText) {
    settings.button_text = buttonText;
    settings.button_url = linkField(buttonUrl);
  }

  Object.assign(settings, globalBackgroundFields(backgroundColor));

  return { id: id ?? nextId(), name: 'image_content', visibility: true, settings };
}
