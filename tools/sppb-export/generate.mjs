import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { resetIdCounter } from './lib/ids.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function generatePageFile(pageName, { pagesDir, outDir } = {}) {
  const resolvedPagesDir = pagesDir ?? path.join(__dirname, 'pages');
  const resolvedOutDir = outDir ?? path.join(__dirname, '..', '..', 'export');

  const modulePath = path.join(resolvedPagesDir, `${pageName}.mjs`);
  const { buildPage } = await import(pathToFileURL(modulePath).href);
  resetIdCounter();
  const pageJson = buildPage();

  await mkdir(resolvedOutDir, { recursive: true });
  const outPath = path.join(resolvedOutDir, `${pageName}.json`);
  await writeFile(outPath, JSON.stringify(pageJson, null, 2), 'utf8');

  return outPath;
}

async function runCli() {
  const pageName = process.argv[2];
  if (!pageName) {
    console.error('Usage: node generate.mjs <pageName>');
    process.exit(1);
  }
  const outPath = await generatePageFile(pageName);
  console.log(`Wrote ${outPath}`);
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  runCli();
}
