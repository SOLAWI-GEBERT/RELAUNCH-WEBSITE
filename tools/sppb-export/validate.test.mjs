import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validatePageJson } from './validate.mjs';

function validHeadingSection() {
  return {
    template: JSON.stringify([
      {
        id: 1,
        visibility: true,
        collapse: false,
        settings: {},
        layout: '12',
        columns: [
          {
            id: 2,
            class_name: 'col-md-12',
            visibility: true,
            settings: {},
            addons: [{ id: 3, name: 'heading', visibility: true, settings: { title: 'Hallo' } }],
            width: { xl: '100%', lg: '100%', md: '100%', sm: '100%', xs: '100%' },
          },
        ],
      },
    ]),
    css: '',
    seo: '{}',
    title: 'Home',
    language: '*',
  };
}

test('eine valide Seite liefert keine Fehler', () => {
  assert.deepEqual(validatePageJson(validHeadingSection()), []);
});

test('fehlendes Top-Level-Feld wird gemeldet', () => {
  const pageJson = validHeadingSection();
  delete pageJson.language;
  const errors = validatePageJson(pageJson);
  assert.ok(errors.some((e) => e.includes('language')));
});

test('unbekannter Addon-Name wird gemeldet', () => {
  const pageJson = validHeadingSection();
  const sections = JSON.parse(pageJson.template);
  sections[0].columns[0].addons[0].name = 'does_not_exist';
  pageJson.template = JSON.stringify(sections);
  const errors = validatePageJson(pageJson);
  assert.ok(errors.some((e) => e.includes('unbekannter Addon-Typ') || e.includes('does_not_exist')));
});

test('fehlendes Pflichtfeld eines bekannten Addons wird gemeldet', () => {
  const pageJson = validHeadingSection();
  const sections = JSON.parse(pageJson.template);
  delete sections[0].columns[0].addons[0].settings.title;
  pageJson.template = JSON.stringify(sections);
  const errors = validatePageJson(pageJson);
  assert.ok(errors.some((e) => e.includes('settings.title')));
});

test('doppelte ID wird gemeldet', () => {
  const pageJson = validHeadingSection();
  const sections = JSON.parse(pageJson.template);
  sections[0].columns[0].id = sections[0].id; // Column-ID kollidiert mit Section-ID
  pageJson.template = JSON.stringify(sections);
  const errors = validatePageJson(pageJson);
  assert.ok(errors.some((e) => e.includes('Doppelte ID')));
});

test('kaputtes template-JSON wird gemeldet, ohne dass die Funktion wirft', () => {
  const pageJson = validHeadingSection();
  pageJson.template = '{not valid json';
  assert.doesNotThrow(() => validatePageJson(pageJson));
  const errors = validatePageJson(pageJson);
  assert.ok(errors.length > 0);
});
