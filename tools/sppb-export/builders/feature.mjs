import { nextId } from '../lib/ids.mjs';
import { responsive, linkField, globalStyleFields } from '../lib/fields.mjs';

export function feature({
  id,
  title,
  headingSelector = 'h3',
  text,
  featureType = 'icon',
  iconName,
  imageSrc,
  imageAlt,
  titleUrl,
  alignment = 'center',
  backgroundColor,
  padding,
  boxShadow,
  animation,
  animationDelay,
}) {
  const settings = {
    title,
    heading_selector: headingSelector,
    text,
    feature_type: featureType,
    alignment: responsive(alignment),
  };

  if (featureType !== 'image' && iconName) {
    settings.icon_name = iconName;
  }

  if (featureType !== 'icon' && imageSrc) {
    settings.feature_image = { src: imageSrc, height: '', width: '' };
    if (imageAlt) settings.feature_image_alt = imageAlt;
  }

  if (titleUrl) {
    settings.title_url = linkField(titleUrl);
  }

  Object.assign(settings, globalStyleFields({ backgroundColor, padding, boxShadow, animation, animationDelay }));

  return { id: id ?? nextId(), name: 'feature', visibility: true, settings };
}
