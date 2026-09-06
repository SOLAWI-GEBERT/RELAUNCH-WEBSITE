import { test } from 'node:test';
import assert from 'node:assert/strict';
import { section } from './section.mjs';

test('section ohne backgroundColor setzt background_type=none', () => {
  const s = section({ id: 1, columns: [{ span: 12, addons: [] }] });
  assert.equal(s.settings.background_type, 'none');
  assert.equal(s.settings.background_color, '');
});

test('section mit backgroundColor setzt background_type=color', () => {
  const s = section({ id: 1, backgroundColor: '#c2ddb2', columns: [{ span: 12, addons: [] }] });
  assert.equal(s.settings.background_type, 'color');
  assert.equal(s.settings.background_color, '#c2ddb2');
});

test('section leitet layout aus den Column-Spans ab und baut die Columns', () => {
  const headingAddon = { id: 1, name: 'heading', visibility: true, settings: {} };
  const imageAddon = { id: 2, name: 'image', visibility: true, settings: {} };
  const s = section({
    id: 1,
    columns: [
      { span: 7, addons: [headingAddon] },
      { span: 5, addons: [imageAddon] },
    ],
  });
  assert.equal(s.layout, '7,5');
  assert.equal(s.columns.length, 2);
  assert.equal(s.columns[0].addons[0], headingAddon);
  assert.equal(s.columns[1].class_name, 'col-md-5');
});
