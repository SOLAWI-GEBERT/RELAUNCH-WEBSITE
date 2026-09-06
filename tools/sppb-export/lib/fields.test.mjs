import { test } from 'node:test';
import assert from 'node:assert/strict';
import { responsive, linkField, globalBackgroundFields, globalStyleFields } from './fields.mjs';

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

test('globalStyleFields liefert leeres Objekt ohne Optionen', () => {
  assert.deepEqual(globalStyleFields(), {});
  assert.deepEqual(globalStyleFields({}), {});
});

test('globalStyleFields mit backgroundColor entspricht globalBackgroundFields', () => {
  assert.deepEqual(globalStyleFields({ backgroundColor: '#f3aba2' }), globalBackgroundFields('#f3aba2'));
});

test('globalStyleFields setzt global_padding als responsives Objekt', () => {
  assert.deepEqual(globalStyleFields({ padding: '32px 32px 32px 32px' }), {
    global_padding: { xl: '32px 32px 32px 32px', lg: '', md: '', sm: '', xs: '' },
  });
});

test('globalStyleFields setzt global_boxshadow', () => {
  assert.deepEqual(globalStyleFields({ boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.1)' }), {
    global_boxshadow: '0 4px 6px 0 rgba(0, 0, 0, 0.1)',
  });
});

test('globalStyleFields setzt Entrance-Animation mit 600ms Default-Dauer und Delay in ms', () => {
  assert.deepEqual(globalStyleFields({ animation: 'fadeInUp', animationDelay: 100 }), {
    global_use_animation: 1,
    global_animation: 'fadeInUp',
    global_animationduration: '600',
    global_animationdelay: '100',
  });
});

test('globalStyleFields ohne animation setzt keine Animationsfelder', () => {
  const fields = globalStyleFields({ animationDelay: 100 });
  assert.equal(fields.global_use_animation, undefined);
  assert.equal(fields.global_animation, undefined);
});
