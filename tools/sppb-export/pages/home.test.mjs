import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildPage } from './home.mjs';
import { validatePageJson } from '../validate.mjs';
import { resetIdCounter } from '../lib/ids.mjs';

test('Home-Recipe erzeugt eine Seite, die der Validator ohne Fehler akzeptiert', () => {
  resetIdCounter();
  assert.deepEqual(validatePageJson(buildPage()), []);
});
