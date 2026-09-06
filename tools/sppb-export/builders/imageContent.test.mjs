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
