import { test } from 'node:test';
import assert from 'node:assert/strict';
import { column } from './column.mjs';

test('column mit span=6 erzeugt 50% Breite auf allen Breakpoints außer xs/sm', () => {
  const col = column({ id: 1, span: 6, addons: [] });
  assert.equal(col.class_name, 'col-md-6');
  assert.deepEqual(col.width, { xl: '50%', lg: '50%', md: '100%', sm: '100%', xs: '100%' });
  assert.deepEqual(col.settings.width, col.width);
});

test('column mit span=1 rundet auf die von SPPB verwendete 11-Nachkommastellen-Notation', () => {
  const col = column({ id: 1, span: 1, addons: [] });
  assert.equal(col.width.xl, '8.33333333333%');
});

test('column gibt die übergebenen addons unverändert weiter', () => {
  const addons = [{ id: 1, name: 'heading', visibility: true, settings: {} }];
  const col = column({ id: 1, span: 12, addons });
  assert.equal(col.addons, addons);
});
