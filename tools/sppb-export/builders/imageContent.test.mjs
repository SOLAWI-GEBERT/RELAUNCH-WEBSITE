import { test } from 'node:test';
import assert from 'node:assert/strict';
import { imageContent } from './imageContent.mjs';

test('imageContent setzt text, image.src und image_alignment', () => {
  const addon = imageContent({ text: '<p>Was ist SoLaWi?</p>', imageSrc: 'images/decision-funktion.jpg', imageAlign: 'left' });
  assert.equal(addon.name, 'image_content');
  assert.equal(addon.settings.text, '<p>Was ist SoLaWi?</p>');
  assert.deepEqual(addon.settings.image, { src: 'images/decision-funktion.jpg' });
  assert.equal(addon.settings.image_alignment, 'left');
});

test('imageContent setzt title/heading_selector nur wenn title angegeben ist', () => {
  const withTitle = imageContent({ text: 'x', imageSrc: 'y', title: 'Was ist Solidarische Landwirtschaft?' });
  assert.equal(withTitle.settings.title, 'Was ist Solidarische Landwirtschaft?');
  assert.equal(withTitle.settings.heading_selector, 'h3');

  const withoutTitle = imageContent({ text: 'x', imageSrc: 'y' });
  assert.equal(withoutTitle.settings.title, undefined);
});

test('imageContent setzt button_text/button_url nur wenn buttonText angegeben ist', () => {
  const withButton = imageContent({
    text: 'x',
    imageSrc: 'y',
    buttonText: 'Mehr über SoLaWi erfahren',
    buttonUrl: '/solidarische-landwirtschaft',
  });
  assert.equal(withButton.settings.button_text, 'Mehr über SoLaWi erfahren');
  assert.deepEqual(withButton.settings.button_url, {
    type: 'url',
    url: '/solidarische-landwirtschaft',
    menu: '',
    page: 0,
    new_tab: false,
    nofollow: false,
    noreferrer: false,
    noopener: false,
  });

  const withoutButton = imageContent({ text: 'x', imageSrc: 'y' });
  assert.equal(withoutButton.settings.button_text, undefined);
});

test('imageContent setzt button_type=primary, damit der Button das Helix-Preset erbt', () => {
  const addon = imageContent({ text: 'x', imageSrc: 'y', buttonText: 'Mehr', buttonUrl: '/z' });
  assert.equal(addon.settings.button_type, 'primary');
});

test('imageContent reicht animation an die globalen Felder durch', () => {
  const addon = imageContent({ text: 'x', imageSrc: 'y', animation: 'fadeInLeft' });
  assert.equal(addon.settings.global_use_animation, 1);
  assert.equal(addon.settings.global_animation, 'fadeInLeft');
  assert.equal(addon.settings.global_animationduration, '600');
});

test('imageContent setzt content_padding responsiv, wenn contentPadding angegeben ist', () => {
  const plain = imageContent({ text: 'x', imageSrc: 'y' });
  assert.equal(plain.settings.content_padding, undefined);

  const padded = imageContent({ text: 'x', imageSrc: 'y', contentPadding: '0px 0px 0px 50px' });
  assert.deepEqual(padded.settings.content_padding, { xl: '0px 0px 0px 50px', lg: '', md: '', sm: '', xs: '' });
});
