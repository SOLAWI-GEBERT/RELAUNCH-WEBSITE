import { test } from 'node:test';
import assert from 'node:assert/strict';
import { textBlock } from './textBlock.mjs';

test('textBlock setzt den text ohne Alignment-Override standardmäßig', () => {
  const addon = textBlock({ id: 1, text: '<p>Hallo</p>' });
  assert.equal(addon.name, 'text_block');
  assert.equal(addon.settings.text, '<p>Hallo</p>');
  assert.equal(addon.settings.alignment, undefined);
});

test('textBlock setzt alignment wenn angegeben', () => {
  const addon = textBlock({ id: 1, text: 'x', alignment: 'center' });
  assert.deepEqual(addon.settings.alignment, { xl: 'center', lg: '', md: '', sm: '', xs: '' });
});
