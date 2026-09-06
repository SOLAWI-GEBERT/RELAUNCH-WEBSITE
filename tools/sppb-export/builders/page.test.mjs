import { test } from 'node:test';
import assert from 'node:assert/strict';
import { page } from './page.mjs';

test('page verpackt Sections als JSON-String im template-Feld', () => {
  const sections = [{ id: 1, visibility: true, collapse: false, settings: {}, layout: '12', columns: [] }];
  const result = page({ title: 'Home', sections });
  assert.equal(result.title, 'Home');
  assert.equal(result.language, '*');
  assert.deepEqual(JSON.parse(result.template), sections);
});

test('page akzeptiert eine explizite language', () => {
  const result = page({ title: 'Home', sections: [], language: 'de-DE' });
  assert.equal(result.language, 'de-DE');
});
