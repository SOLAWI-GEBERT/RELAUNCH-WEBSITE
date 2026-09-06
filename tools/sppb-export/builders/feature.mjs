import { nextId } from '../lib/ids.mjs';
import { responsive, linkField, globalStyleFields } from '../lib/fields.mjs';

export function feature({
  id,
  title,
  headingSelector = 'h3',
  text,
  featureType = 'icon',
  iconName,
  iconSize = 48,
  // Icon-Farbe folgt dem Helix-Preset: SPPB schreibt den Wert unverändert als
  // color:… in das Addon-CSS (CSSHelper::parseColor reicht Strings durch).
  iconColor = 'var(--link-color)',
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
    settings.icon_size = responsive(iconSize);
    settings.icon_color = iconColor;
    settings.icon_hover_color = iconColor;
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
