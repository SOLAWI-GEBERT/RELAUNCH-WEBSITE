import { test } from 'node:test';
import assert from 'node:assert/strict';
import { nextId, resetIdCounter } from './ids.mjs';

test('nextId liefert bei jedem Aufruf einen anderen, numerischen Wert', () => {
  resetIdCounter();
  const a = nextId();
  const b = nextId();
  assert.equal(typeof a, 'number');
  assert.notEqual(a, b);
});

test('resetIdCounter setzt die Zählung zurück, ohne Kollisionen mit vorherigen IDs zu riskieren', () => {
  resetIdCounter();
  const before = nextId();
  resetIdCounter();
  const after = nextId();
  assert.equal(typeof before, 'number');
  assert.equal(typeof after, 'number');
});
