import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { generatePageFile } from './generate.mjs';

test('generatePageFile lädt das Recipe-Modul, ruft buildPage() auf und schreibt das Ergebnis als JSON', async () => {
  const pagesDir = await mkdtemp(path.join(tmpdir(), 'sppb-pages-'));
  const outDir = await mkdtemp(path.join(tmpdir(), 'sppb-out-'));

  await writeFile(
    path.join(pagesDir, 'fixture.mjs'),
    "export function buildPage() { return { template: '[]', css: '', seo: '{}', title: 'Fixture', language: '*' }; }\n",
    'utf8'
  );

  const outPath = await generatePageFile('fixture', { pagesDir, outDir });
  assert.equal(outPath, path.join(outDir, 'fixture.json'));

  const written = JSON.parse(await readFile(outPath, 'utf8'));
  assert.equal(written.title, 'Fixture');
  assert.equal(written.template, '[]');
});
