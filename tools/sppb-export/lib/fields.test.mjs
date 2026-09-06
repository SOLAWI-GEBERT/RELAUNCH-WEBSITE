import { test } from 'node:test';
import assert from 'node:assert/strict';
import { responsive, linkField, globalBackgroundFields } from './fields.mjs';

test('responsive setzt den Wert nur für xl, andere Breakpoints bleiben leer', () => {
  assert.deepEqual(responsive('center'), { xl: 'center', lg: '', md: '', sm: '', xs: '' });
});

test('linkField erzeugt die SPPB-Link-Feld-Struktur mit new_tab=false als Default', () => {
  assert.deepEqual(linkField('/so-funktionierts'), {
    type: 'url',
    url: '/so-funktionierts',
    menu: '',
    page: 0,
    new_tab: false,
    nofollow: false,
    noreferrer: false,
    noopener: false,
  });
});

test('linkField respektiert newTab: true', () => {
  const field = linkField('https://example.org', { newTab: true });
  assert.equal(field.new_tab, true);
});

test('globalBackgroundFields liefert leeres Objekt ohne Farbe', () => {
  assert.deepEqual(globalBackgroundFields(), {});
});

test('globalBackgroundFields liefert global_background_type=color mit Farbe', () => {
  assert.deepEqual(globalBackgroundFields('#c2ddb2'), {
    global_background_type: 'color',
    global_background_color: '#c2ddb2',
  });
});
