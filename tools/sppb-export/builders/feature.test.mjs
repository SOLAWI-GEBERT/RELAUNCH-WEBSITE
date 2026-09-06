import { test } from 'node:test';
import assert from 'node:assert/strict';
import { feature } from './feature.mjs';

test('feature mit featureType=icon setzt icon_name, aber kein feature_image', () => {
  const addon = feature({ title: 'Gemeinsam tragen wir das Risiko', text: 'Gute Ernte = mehr für alle.', featureType: 'icon', iconName: 'fas fa-users' });
  assert.equal(addon.name, 'feature');
  assert.equal(addon.settings.feature_type, 'icon');
  assert.equal(addon.settings.icon_name, 'fas fa-users');
  assert.equal(addon.settings.feature_image, undefined);
});

test('feature mit featureType=image setzt feature_image, aber kein icon_name', () => {
  const addon = feature({ title: 'Nachhaltig & Regional', text: 'x', featureType: 'image', imageSrc: 'images/features-nachhaltigkeit.jpg', imageAlt: 'Frau mit Gemüsewagen' });
  assert.equal(addon.settings.feature_type, 'image');
  assert.deepEqual(addon.settings.feature_image, { src: 'images/features-nachhaltigkeit.jpg', height: '', width: '' });
  assert.equal(addon.settings.feature_image_alt, 'Frau mit Gemüsewagen');
  assert.equal(addon.settings.icon_name, undefined);
});

test('feature setzt title_url nur wenn angegeben', () => {
  const withLink = feature({ title: 'x', text: 'y', titleUrl: '/ernteanteile/hederer-sommer' });
  assert.equal(withLink.settings.title_url.url, '/ernteanteile/hederer-sommer');

  const withoutLink = feature({ title: 'x', text: 'y' });
  assert.equal(withoutLink.settings.title_url, undefined);
});

test('feature verwendet center als Alignment-Default und icon als featureType-Default', () => {
  const addon = feature({ title: 'x', text: 'y' });
  assert.equal(addon.settings.alignment.xl, 'center');
  assert.equal(addon.settings.feature_type, 'icon');
});
