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

test('section akzeptiert padding als CSS-Shorthand-String und macht ihn responsiv', () => {
  const s = section({ id: 1, padding: '96px 0px 64px 0px', columns: [{ span: 12, addons: [] }] });
  assert.deepEqual(s.settings.padding, { xl: '96px 0px 64px 0px', lg: '', md: '', sm: '', xs: '' });
});

test('section setzt columns_align_center nur mit alignCenter', () => {
  const plain = section({ id: 1, columns: [{ span: 12, addons: [] }] });
  assert.equal(plain.settings.columns_align_center, undefined);

  const centered = section({ id: 1, alignCenter: true, columns: [{ span: 12, addons: [] }] });
  assert.equal(centered.settings.columns_align_center, 1);
});

test('section setzt Top-Shape-Divider mit Farbe der vorherigen Section und to_front', () => {
  const s = section({ id: 1, topShape: { name: 'wavy-opacity', color: '#c2ddb2' }, columns: [{ span: 12, addons: [] }] });
  assert.equal(s.settings.show_top_shape, 1);
  assert.equal(s.settings.shape_name, 'wavy-opacity');
  assert.equal(s.settings.shape_color, '#c2ddb2');
  assert.equal(s.settings.shape_to_front, true);
  assert.equal(s.settings.show_bottom_shape, undefined);
});

test('section setzt Bottom-Shape-Divider mit bottom_-Präfix', () => {
  const s = section({ id: 1, bottomShape: { name: 'rocky-mountain', color: '#ffffff', toFront: false }, columns: [{ span: 12, addons: [] }] });
  assert.equal(s.settings.show_bottom_shape, 1);
  assert.equal(s.settings.bottom_shape_name, 'rocky-mountain');
  assert.equal(s.settings.bottom_shape_color, '#ffffff');
  assert.equal(s.settings.bottom_shape_to_front, false);
  assert.equal(s.settings.show_top_shape, undefined);
});
