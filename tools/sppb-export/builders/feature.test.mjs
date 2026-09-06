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

test('feature reicht padding, boxShadow und animation an die globalen Felder durch', () => {
  const addon = feature({
    title: 'x',
    text: 'y',
    padding: '32px 32px 32px 32px',
    boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.1)',
    animation: 'fadeInUp',
    animationDelay: 100,
  });
  assert.deepEqual(addon.settings.global_padding, { xl: '32px 32px 32px 32px', lg: '', md: '', sm: '', xs: '' });
  assert.equal(addon.settings.global_boxshadow, '0 4px 6px 0 rgba(0, 0, 0, 0.1)');
  assert.equal(addon.settings.global_animation, 'fadeInUp');
  assert.equal(addon.settings.global_animationdelay, '100');
});

test('feature mit Icon setzt icon_size (Default 48) und icon_color aus der Preset-Variable', () => {
  const addon = feature({ title: 'x', text: 'y', iconName: 'fas fa-users' });
  assert.deepEqual(addon.settings.icon_size, { xl: 48, lg: '', md: '', sm: '', xs: '' });
  assert.equal(addon.settings.icon_color, 'var(--link-color)');
  assert.equal(addon.settings.icon_hover_color, 'var(--link-color)');
});

test('feature übernimmt iconSize/iconColor und setzt bei featureType=image keine Icon-Felder', () => {
  const small = feature({ title: 'x', text: 'y', iconName: 'fas fa-leaf', iconSize: 40, iconColor: '#d10038' });
  assert.equal(small.settings.icon_size.xl, 40);
  assert.equal(small.settings.icon_color, '#d10038');

  const img = feature({ title: 'x', text: 'y', featureType: 'image', imageSrc: 'images/a.jpg' });
  assert.equal(img.settings.icon_size, undefined);
  assert.equal(img.settings.icon_color, undefined);
});
