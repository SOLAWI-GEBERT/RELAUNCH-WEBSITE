import { test } from 'node:test';
import assert from 'node:assert/strict';
import { image } from './image.mjs';

test('image setzt src/alt in der von SPPB erwarteten media-Feldstruktur', () => {
  const addon = image({ id: 1, src: 'images/start.png', alt: 'Stiefel und Stöckelschuh' });
  assert.equal(addon.name, 'image');
  assert.deepEqual(addon.settings.image, { src: 'images/start.png', height: '', width: '', alt: 'Stiefel und Stöckelschuh' });
  assert.equal(addon.settings.alt_text, 'Stiefel und Stöckelschuh');
});

test('image verwendet "Image" als Alt-Text-Default', () => {
  const addon = image({ id: 1, src: 'images/x.png' });
  assert.equal(addon.settings.alt_text, 'Image');
});

test('image setzt position wenn alignment angegeben', () => {
  const addon = image({ id: 1, src: 'images/x.png', alignment: 'center' });
  assert.deepEqual(addon.settings.position, { xl: 'center', lg: '', md: '', sm: '', xs: '' });
});
