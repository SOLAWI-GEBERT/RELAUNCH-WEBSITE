import { test } from 'node:test';
import assert from 'node:assert/strict';
import { heading } from './heading.mjs';

test('heading setzt title, heading_selector und alignment', () => {
  const addon = heading({ id: 1, title: 'Stadt, Land, Beides.', headingSelector: 'h1', alignment: 'left' });
  assert.equal(addon.name, 'heading');
  assert.equal(addon.settings.title, 'Stadt, Land, Beides.');
  assert.equal(addon.settings.heading_selector, 'h1');
  assert.deepEqual(addon.settings.alignment, { xl: 'left', lg: '', md: '', sm: '', xs: '' });
});

test('heading verwendet h2/center als Default', () => {
  const addon = heading({ id: 1, title: 'Titel' });
  assert.equal(addon.settings.heading_selector, 'h2');
  assert.equal(addon.settings.alignment.xl, 'center');
});

test('heading setzt globale Hintergrundfarbe wenn angegeben', () => {
  const addon = heading({ id: 1, title: 'Titel', backgroundColor: '#c2ddb2' });
  assert.equal(addon.settings.global_background_type, 'color');
  assert.equal(addon.settings.global_background_color, '#c2ddb2');
});
