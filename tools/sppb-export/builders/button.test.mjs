import { test } from 'node:test';
import assert from 'node:assert/strict';
import { button } from './button.mjs';

test('button setzt text und url als Link-Feld und erbt per type=primary das Helix-Preset', () => {
  const addon = button({ text: 'Jetzt dabei sein', url: '/so-funktionierts' });
  assert.equal(addon.name, 'button');
  assert.equal(addon.settings.text, 'Jetzt dabei sein');
  assert.equal(addon.settings.url.url, '/so-funktionierts');
  assert.equal(addon.settings.url.new_tab, false);
  assert.equal(addon.settings.type, 'primary');
});

test('button respektiert newTab und einen abweichenden type', () => {
  const addon = button({ text: 'x', url: 'https://example.org', newTab: true, type: 'custom' });
  assert.equal(addon.settings.url.new_tab, true);
  assert.equal(addon.settings.type, 'custom');
});

test('button setzt size, shape und alignment nur wenn angegeben', () => {
  const plain = button({ text: 'x', url: '/y' });
  assert.equal(plain.settings.size, undefined);
  assert.equal(plain.settings.shape, undefined);
  assert.equal(plain.settings.alignment, undefined);

  const styled = button({ text: 'x', url: '/y', size: 'lg', shape: 'square', alignment: 'left' });
  assert.equal(styled.settings.size, 'lg');
  assert.equal(styled.settings.shape, 'square');
  assert.deepEqual(styled.settings.alignment, { xl: 'left', lg: '', md: '', sm: '', xs: '' });
});

test('button reicht Animation an die globalen Felder durch', () => {
  const addon = button({ text: 'x', url: '/y', animation: 'fadeInUp', animationDelay: 200 });
  assert.equal(addon.settings.global_use_animation, 1);
  assert.equal(addon.settings.global_animation, 'fadeInUp');
  assert.equal(addon.settings.global_animationdelay, '200');
});
