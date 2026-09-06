import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

/**
 * Pflichtfelder pro Addon-Typ (Punktnotation für verschachtelte Settings).
 * Erweitern, sobald neue Builder in tools/sppb-export/builders/ dazukommen.
 */
const REQUIRED_FIELDS = {
  heading: ['title'],
  text_block: ['text'],
  image: ['image.src'],
  image_content: ['text', 'image.src'],
  feature: ['title', 'text'],
  button: ['text', 'url.url'],
};

const KNOWN_ADDONS = new Set(Object.keys(REQUIRED_FIELDS));

function getPath(obj, dottedPath) {
  return dottedPath.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
}

export function validatePageJson(pageJson) {
  const errors = [];

  for (const key of ['template', 'css', 'seo', 'title', 'language']) {
    if (!(key in pageJson)) errors.push(`Fehlendes Top-Level-Feld: ${key}`);
  }

  if (!('template' in pageJson)) return errors;

  let sections;
  try {
    sections = JSON.parse(pageJson.template);
  } catch (e) {
    errors.push(`template ist kein gültiges JSON: ${e.message}`);
    return errors;
  }

  if (!Array.isArray(sections)) {
    errors.push('template muss ein Array von Sections sein');
    return errors;
  }

  const seenIds = new Set();
  function checkId(id) {
    if (id === undefined) return;
    if (seenIds.has(id)) errors.push(`Doppelte ID: ${id}`);
    seenIds.add(id);
  }

  sections.forEach((section, sIdx) => {
    for (const key of ['id', 'visibility', 'settings', 'layout', 'columns']) {
      if (!(key in section)) errors.push(`Section[${sIdx}]: fehlendes Feld "${key}"`);
    }
    checkId(section.id);

    (section.columns ?? []).forEach((column, cIdx) => {
      for (const key of ['id', 'class_name', 'settings', 'addons', 'width']) {
        if (!(key in column)) errors.push(`Section[${sIdx}].Column[${cIdx}]: fehlendes Feld "${key}"`);
      }
      checkId(column.id);

      (column.addons ?? []).forEach((addon, aIdx) => {
        const label = `Section[${sIdx}].Column[${cIdx}].Addon[${aIdx}]`;
        checkId(addon.id);

        if (!addon.name) {
          errors.push(`${label}: fehlender Addon-Name`);
          return;
        }

        if (!KNOWN_ADDONS.has(addon.name)) {
          errors.push(`${label}: unbekannter Addon-Typ "${addon.name}"`);
          return;
        }

        for (const field of REQUIRED_FIELDS[addon.name]) {
          const value = getPath(addon.settings, field);
          if (value === undefined || value === '') {
            errors.push(`${label} (${addon.name}): Pflichtfeld "settings.${field}" fehlt`);
          }
        }
      });
    });
  });

  return errors;
}

async function runCli() {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error('Usage: node validate.mjs <path-to-export.json>');
    process.exit(1);
  }
  const pageJson = JSON.parse(await readFile(filePath, 'utf8'));
  const errors = validatePageJson(pageJson);
  if (errors.length === 0) {
    console.log(`OK: ${filePath} ist valide.`);
  } else {
    console.error(`${errors.length} Fehler in ${filePath}:`);
    for (const error of errors) console.error(`  - ${error}`);
    process.exit(1);
  }
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  runCli();
}
