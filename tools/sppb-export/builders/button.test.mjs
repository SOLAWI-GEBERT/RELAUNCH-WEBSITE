import { test } from 'node:test';
import assert from 'node:assert/strict';
import { button } from './button.mjs';

test('button setzt text und url als Link-Feld', () => {
  const addon = button({ text: 'Jetzt dabei sein', url: '/so-funktionierts' });
  assert.equal(addon.name, 'button');
  assert.equal(addon.settings.text, 'Jetzt dabei sein');
  assert.equal(addon.settings.url.url, '/so-funktionierts');
  assert.equal(addon.settings.url.new_tab, false);
  assert.equal(addon.settings.type, 'custom');
});

test('button respektiert newTab und einen abweichenden type', () => {
  const addon = button({ text: 'x', url: 'https://example.org', newTab: true, type: 'primary' });
  assert.equal(addon.settings.url.new_tab, true);
  assert.equal(addon.settings.type, 'primary');
});
