# SP Page Builder Export-Toolset Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ein Skill+Skript-Set bauen, das die React-Prototyp-Seite `Home.tsx` in eine importierbare SP Page Builder Pro JSON-Datei überführt, verifiziert an der laufenden SP-Page-Builder-Instanz im Joomla4-Testsystem.

**Architecture:** Eine Node-ESM-Builder-Bibliothek (`tools/sppb-export/builders/*.mjs`) kapselt pro Addon-Typ die SPPB-Feld-Boilerplate. Eine Seiten-Recipe-Datei (`tools/sppb-export/pages/home.mjs`) ruft diese Builder auf; `generate.mjs` rendert sie zu JSON, `validate.mjs` prüft das Ergebnis strukturell. Begleitend entsteht eine handgeschriebene Schema-Dokumentation (`docs/sppb/`), extrahiert aus dem tatsächlich installierten SP-Page-Builder-Pro-Quellcode.

**Tech Stack:** Node.js (ESM, `.mjs`), Node's eingebauter Test-Runner (`node --test`, `node:assert/strict`) — keine neuen npm-Abhängigkeiten.

**Spec:** `docs/superpowers/specs/2026-09-06-sppb-export-toolset-design.md`

## Global Constraints

- Top-Level-JSON-Envelope ist exakt `{ template, css, seo, title, language }` — `template` ist ein JSON-String eines Section-Arrays (verifiziert gegen `administrator/components/com_sppagebuilder/editor/traits/ImportTrait.php` im Joomla4-Testsystem).
- Keine neuen npm-Abhängigkeiten; reines Node-ESM (`.mjs`), Tests mit dem eingebauten `node:test`-Modul (`node --test <pfad>`).
- Builder-Bibliothek deckt nur die Addon-Typen ab, die `Home.tsx` tatsächlich braucht: `heading`, `text_block`, `image`, `image_content`, `feature`, `button`, plus die strukturellen Wrapper `section`, `column`, `page`. Weitere Addon-Builder werden erst bei Bedarf für die nächste Seite ergänzt (YAGNI).
- Schema-Dokumentation (`docs/sppb/addons/*.md`) deckt die in `sp_page_builder.md` gelistete Addon-Auswahl plus Row/Column ab — auch für Addons, die die Home-Pilotseite nicht nutzt, da das reine Dokumentation ist (kein ungetesteter Code) und für spätere Seiten gebraucht wird.
- Kein automatisierter Joomla-Import und kein automatisierter Bild-Upload in dieser Runde — der Import-Test von `export/home.json` erfolgt manuell durch den Nutzer im Browser.
- Bild-Pfade in generierten Addons referenzieren die Dateinamen aus `/public/` als relative Joomla-Media-Pfade (z.B. `images/start.png`) — der tatsächliche Upload in den Joomla-Media-Manager ist ein manueller Schritt vor dem Import-Test.
- Dateilayout ist fix: `docs/sppb/`, `tools/sppb-export/`, `.claude/skills/sppb-export/`, `export/` (siehe Spec).

---

## Task 1: ID- und Feld-Helfer (`lib/ids.mjs`, `lib/fields.mjs`)

**Files:**
- Create: `tools/sppb-export/lib/ids.mjs`
- Create: `tools/sppb-export/lib/ids.test.mjs`
- Create: `tools/sppb-export/lib/fields.mjs`
- Create: `tools/sppb-export/lib/fields.test.mjs`

**Interfaces:**
- Produces: `nextId(): number`, `resetIdCounter(): void` aus `ids.mjs`
- Produces: `responsive(value: string): {xl,lg,md,sm,xs}`, `linkField(url: string, opts?: {newTab?: boolean}): object`, `globalBackgroundFields(color?: string): object` aus `fields.mjs`
- Consumes: nichts (unterste Schicht)

- [ ] **Step 1: Schreibe den fehlschlagenden Test für `ids.mjs`**

```javascript
// tools/sppb-export/lib/ids.test.mjs
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
```

- [ ] **Step 2: Test ausführen, Fehlschlag bestätigen**

Run: `node --test tools/sppb-export/lib/ids.test.mjs`
Expected: FAIL — `Cannot find module './ids.mjs'`

- [ ] **Step 3: `ids.mjs` implementieren**

```javascript
// tools/sppb-export/lib/ids.mjs
let counter = 0;

/**
 * SP Page Builder akzeptiert sowohl numerische als auch String-IDs für
 * Sections/Columns/Addons (verifiziert an echten Exporten) — Hauptsache
 * eindeutig innerhalb der Seite. Ein einfacher, deterministisch testbarer
 * Zähler reicht.
 */
export function nextId() {
  counter += 1;
  return Date.now() * 1000 + counter;
}

export function resetIdCounter() {
  counter = 0;
}
```

- [ ] **Step 4: Test ausführen, Erfolg bestätigen**

Run: `node --test tools/sppb-export/lib/ids.test.mjs`
Expected: PASS (2 tests)

- [ ] **Step 5: Schreibe den fehlschlagenden Test für `fields.mjs`**

```javascript
// tools/sppb-export/lib/fields.test.mjs
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
```

- [ ] **Step 6: Test ausführen, Fehlschlag bestätigen**

Run: `node --test tools/sppb-export/lib/fields.test.mjs`
Expected: FAIL — `Cannot find module './fields.mjs'`

- [ ] **Step 7: `fields.mjs` implementieren**

```javascript
// tools/sppb-export/lib/fields.mjs

/**
 * Viele SPPB-Felder (alignment, margin, padding) sind responsive Objekte
 * mit den Breakpoints xl/lg/md/sm/xs. Für unsere Zwecke reicht es, nur
 * xl zu setzen — die anderen Breakpoints erben laut SPPB-Renderer von xl,
 * wenn sie leer sind.
 */
export function responsive(value) {
  return { xl: value, lg: '', md: '', sm: '', xs: '' };
}

/**
 * Struktur des SPPB "link"-Feldtyps, verifiziert gegen
 * export_origin/Landing_page.json (title_link-Feld der heading-Addon-Instanzen).
 */
export function linkField(url, { newTab = false } = {}) {
  return {
    type: 'url',
    url,
    menu: '',
    page: 0,
    new_tab: newTab,
    nofollow: false,
    noreferrer: false,
    noopener: false,
  };
}

/**
 * Jedes SPPB-Addon erbt die globalen Hintergrund-Felder aus
 * builder/settings/addon.php (global_background_type/global_background_color).
 * Damit lässt sich z.B. eine Feature-Karte pastellfarben hinterlegen,
 * ohne dass das Addon selbst ein eigenes Hintergrundfeld braucht.
 */
export function globalBackgroundFields(color) {
  if (!color) return {};
  return { global_background_type: 'color', global_background_color: color };
}
```

- [ ] **Step 8: Test ausführen, Erfolg bestätigen**

Run: `node --test tools/sppb-export/lib/fields.test.mjs`
Expected: PASS (5 tests)

- [ ] **Step 9: Commit**

```bash
git add tools/sppb-export/lib/ids.mjs tools/sppb-export/lib/ids.test.mjs tools/sppb-export/lib/fields.mjs tools/sppb-export/lib/fields.test.mjs
git commit -m "$(cat <<'EOF'
ENH sppb-export: ID- und Feld-Helfer für die Builder-Bibliothek

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01Ta9DTA1zSiso2YcdHb6ug7
EOF
)"
```

---

## Task 2: Strukturelle Builder (`section`, `column`, `page`)

**Files:**
- Create: `tools/sppb-export/builders/column.mjs`
- Create: `tools/sppb-export/builders/column.test.mjs`
- Create: `tools/sppb-export/builders/section.mjs`
- Create: `tools/sppb-export/builders/section.test.mjs`
- Create: `tools/sppb-export/builders/page.mjs`
- Create: `tools/sppb-export/builders/page.test.mjs`

**Interfaces:**
- Consumes: `nextId` aus `../lib/ids.mjs`
- Produces: `column({id?, span, addons?}): {id, class_name, visibility, settings, addons, width}`
- Produces: `section({id?, backgroundColor?, padding?, adminLabel?, columns}): {id, visibility, collapse, settings, layout, columns}` — `columns` ist `Array<{span: number, addons: object[]}>`
- Produces: `page({title, sections, language?}): {template, css, seo, title, language}`

- [ ] **Step 1: Fehlschlagenden Test für `column.mjs` schreiben**

```javascript
// tools/sppb-export/builders/column.test.mjs
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
```

- [ ] **Step 2: Test ausführen, Fehlschlag bestätigen**

Run: `node --test tools/sppb-export/builders/column.test.mjs`
Expected: FAIL — `Cannot find module './column.mjs'`

- [ ] **Step 3: `column.mjs` implementieren**

```javascript
// tools/sppb-export/builders/column.mjs
import { nextId } from '../lib/ids.mjs';

const GRID_COLUMNS = 12;

export function columnWidthPercent(span) {
  const percent = (span / GRID_COLUMNS) * 100;
  return `${Number(percent.toFixed(11))}%`;
}

export function column({ id, span, addons = [] }) {
  const widthXl = columnWidthPercent(span);
  const width = { xl: widthXl, lg: widthXl, md: '100%', sm: '100%', xs: '100%' };

  return {
    id: id ?? nextId(),
    class_name: `col-md-${span}`,
    visibility: true,
    settings: { width },
    addons,
    width,
  };
}
```

- [ ] **Step 4: Test ausführen, Erfolg bestätigen**

Run: `node --test tools/sppb-export/builders/column.test.mjs`
Expected: PASS (3 tests)

- [ ] **Step 5: Fehlschlagenden Test für `section.mjs` schreiben**

```javascript
// tools/sppb-export/builders/section.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { section } from './section.mjs';

test('section ohne backgroundColor setzt background_type=none', () => {
  const s = section({ id: 1, columns: [{ span: 12, addons: [] }] });
  assert.equal(s.settings.background_type, 'none');
  assert.equal(s.settings.background_color, '');
});

test('section mit backgroundColor setzt background_type=color', () => {
  const s = section({ id: 1, backgroundColor: '#c2ddb2', columns: [{ span: 12, addons: [] }] });
  assert.equal(s.settings.background_type, 'color');
  assert.equal(s.settings.background_color, '#c2ddb2');
});

test('section leitet layout aus den Column-Spans ab und baut die Columns', () => {
  const headingAddon = { id: 1, name: 'heading', visibility: true, settings: {} };
  const imageAddon = { id: 2, name: 'image', visibility: true, settings: {} };
  const s = section({
    id: 1,
    columns: [
      { span: 7, addons: [headingAddon] },
      { span: 5, addons: [imageAddon] },
    ],
  });
  assert.equal(s.layout, '7,5');
  assert.equal(s.columns.length, 2);
  assert.equal(s.columns[0].addons[0], headingAddon);
  assert.equal(s.columns[1].class_name, 'col-md-5');
});
```

- [ ] **Step 6: Test ausführen, Fehlschlag bestätigen**

Run: `node --test tools/sppb-export/builders/section.test.mjs`
Expected: FAIL — `Cannot find module './section.mjs'`

- [ ] **Step 7: `section.mjs` implementieren**

```javascript
// tools/sppb-export/builders/section.mjs
import { nextId } from '../lib/ids.mjs';
import { column } from './column.mjs';

const DEFAULT_PADDING = { xl: '96px 0px 96px 0px', lg: '', md: '', sm: '', xs: '' };
const DEFAULT_MARGIN = { xl: '0px 0px 0px 0px', lg: '', md: '', sm: '', xs: '' };

export function section({ id, backgroundColor, padding, adminLabel = '', columns }) {
  return {
    id: id ?? nextId(),
    visibility: true,
    collapse: false,
    settings: {
      admin_label: adminLabel,
      background_type: backgroundColor ? 'color' : 'none',
      background_color: backgroundColor ?? '',
      padding: padding ?? DEFAULT_PADDING,
      margin: DEFAULT_MARGIN,
    },
    layout: columns.map((c) => c.span).join(','),
    columns: columns.map((c) => column({ span: c.span, addons: c.addons })),
  };
}
```

- [ ] **Step 8: Test ausführen, Erfolg bestätigen**

Run: `node --test tools/sppb-export/builders/section.test.mjs`
Expected: PASS (3 tests)

- [ ] **Step 9: Fehlschlagenden Test für `page.mjs` schreiben**

```javascript
// tools/sppb-export/builders/page.test.mjs
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
```

- [ ] **Step 10: Test ausführen, Fehlschlag bestätigen**

Run: `node --test tools/sppb-export/builders/page.test.mjs`
Expected: FAIL — `Cannot find module './page.mjs'`

- [ ] **Step 11: `page.mjs` implementieren**

```javascript
// tools/sppb-export/builders/page.mjs
export function page({ title, sections, language = '*' }) {
  return {
    template: JSON.stringify(sections),
    css: '',
    seo: JSON.stringify({}),
    title,
    language,
  };
}
```

- [ ] **Step 12: Test ausführen, Erfolg bestätigen**

Run: `node --test tools/sppb-export/builders/page.test.mjs`
Expected: PASS (2 tests)

- [ ] **Step 13: Commit**

```bash
git add tools/sppb-export/builders/column.mjs tools/sppb-export/builders/column.test.mjs tools/sppb-export/builders/section.mjs tools/sppb-export/builders/section.test.mjs tools/sppb-export/builders/page.mjs tools/sppb-export/builders/page.test.mjs
git commit -m "$(cat <<'EOF'
ENH sppb-export: strukturelle Builder für Section/Column/Page

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01Ta9DTA1zSiso2YcdHb6ug7
EOF
)"
```

---

## Task 3: Content-Builder Teil 1 (`heading`, `textBlock`, `image`)

**Files:**
- Create: `tools/sppb-export/builders/heading.mjs`
- Create: `tools/sppb-export/builders/heading.test.mjs`
- Create: `tools/sppb-export/builders/textBlock.mjs`
- Create: `tools/sppb-export/builders/textBlock.test.mjs`
- Create: `tools/sppb-export/builders/image.mjs`
- Create: `tools/sppb-export/builders/image.test.mjs`

**Interfaces:**
- Consumes: `nextId` aus `../lib/ids.mjs`, `responsive`, `globalBackgroundFields` aus `../lib/fields.mjs`
- Produces: `heading({id?, title, headingSelector?, alignment?, backgroundColor?}): {id, name: 'heading', visibility, settings}`
- Produces: `textBlock({id?, text, alignment?, backgroundColor?}): {id, name: 'text_block', visibility, settings}`
- Produces: `image({id?, src, alt?, width?, height?, alignment?, backgroundColor?}): {id, name: 'image', visibility, settings}`

Feldnamen verifiziert gegen `components/com_sppagebuilder/addons/{heading,text_block,image}/admin.php` im Joomla4-Testsystem.

- [ ] **Step 1: Fehlschlagenden Test für `heading.mjs` schreiben**

```javascript
// tools/sppb-export/builders/heading.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { heading } from './heading.mjs';

test('heading setzt title, heading_selector und alignment', () => {
  const addon = heading({ id: 1, title: 'Stadt, Land, Beides.', headingSelector: 'h1', alignment: 'left' });
  assert.equal(addon.name, 'heading');
  assert.equal(addon.settings.title, 'Stadt, Land, Beides.');
  assert.equal(addon.settings.heading_selector, 'h1');
  assert.deepEqual(addon.settings.alignment, { xl: 'left', lg: '', md: '', sm: '', xs: '' });
});

test('heading verwendet h2/center als Default', () => {
  const addon = heading({ id: 1, title: 'Titel' });
  assert.equal(addon.settings.heading_selector, 'h2');
  assert.equal(addon.settings.alignment.xl, 'center');
});

test('heading setzt globale Hintergrundfarbe wenn angegeben', () => {
  const addon = heading({ id: 1, title: 'Titel', backgroundColor: '#c2ddb2' });
  assert.equal(addon.settings.global_background_type, 'color');
  assert.equal(addon.settings.global_background_color, '#c2ddb2');
});
```

- [ ] **Step 2: Test ausführen, Fehlschlag bestätigen**

Run: `node --test tools/sppb-export/builders/heading.test.mjs`
Expected: FAIL — `Cannot find module './heading.mjs'`

- [ ] **Step 3: `heading.mjs` implementieren**

```javascript
// tools/sppb-export/builders/heading.mjs
import { nextId } from '../lib/ids.mjs';
import { responsive, globalBackgroundFields } from '../lib/fields.mjs';

export function heading({ id, title, headingSelector = 'h2', alignment = 'center', backgroundColor }) {
  return {
    id: id ?? nextId(),
    name: 'heading',
    visibility: true,
    settings: {
      title,
      heading_selector: headingSelector,
      alignment: responsive(alignment),
      ...globalBackgroundFields(backgroundColor),
    },
  };
}
```

- [ ] **Step 4: Test ausführen, Erfolg bestätigen**

Run: `node --test tools/sppb-export/builders/heading.test.mjs`
Expected: PASS (3 tests)

- [ ] **Step 5: Fehlschlagenden Test für `textBlock.mjs` schreiben**

```javascript
// tools/sppb-export/builders/textBlock.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { textBlock } from './textBlock.mjs';

test('textBlock setzt den text ohne Alignment-Override standardmäßig', () => {
  const addon = textBlock({ id: 1, text: '<p>Hallo</p>' });
  assert.equal(addon.name, 'text_block');
  assert.equal(addon.settings.text, '<p>Hallo</p>');
  assert.equal(addon.settings.alignment, undefined);
});

test('textBlock setzt alignment wenn angegeben', () => {
  const addon = textBlock({ id: 1, text: 'x', alignment: 'center' });
  assert.deepEqual(addon.settings.alignment, { xl: 'center', lg: '', md: '', sm: '', xs: '' });
});
```

- [ ] **Step 6: Test ausführen, Fehlschlag bestätigen**

Run: `node --test tools/sppb-export/builders/textBlock.test.mjs`
Expected: FAIL — `Cannot find module './textBlock.mjs'`

- [ ] **Step 7: `textBlock.mjs` implementieren**

```javascript
// tools/sppb-export/builders/textBlock.mjs
import { nextId } from '../lib/ids.mjs';
import { responsive, globalBackgroundFields } from '../lib/fields.mjs';

export function textBlock({ id, text, alignment, backgroundColor }) {
  return {
    id: id ?? nextId(),
    name: 'text_block',
    visibility: true,
    settings: {
      text,
      ...(alignment ? { alignment: responsive(alignment) } : {}),
      ...globalBackgroundFields(backgroundColor),
    },
  };
}
```

- [ ] **Step 8: Test ausführen, Erfolg bestätigen**

Run: `node --test tools/sppb-export/builders/textBlock.test.mjs`
Expected: PASS (2 tests)

- [ ] **Step 9: Fehlschlagenden Test für `image.mjs` schreiben**

```javascript
// tools/sppb-export/builders/image.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { image } from './image.mjs';

test('image setzt src/alt in der von SPPB erwarteten media-Feldstruktur', () => {
  const addon = image({ id: 1, src: 'images/start.png', alt: 'Stiefel und Stöckelschuh' });
  assert.equal(addon.name, 'image');
  assert.deepEqual(addon.settings.image, { src: 'images/start.png', height: '', width: '', alt: 'Stiefel und Stöckelschuh' });
  assert.equal(addon.settings.alt_text, 'Stiefel und Stöckelschuh');
});

test('image verwendet "Image" als Alt-Text-Default', () => {
  const addon = image({ id: 1, src: 'images/x.png' });
  assert.equal(addon.settings.alt_text, 'Image');
});

test('image setzt position wenn alignment angegeben', () => {
  const addon = image({ id: 1, src: 'images/x.png', alignment: 'center' });
  assert.deepEqual(addon.settings.position, { xl: 'center', lg: '', md: '', sm: '', xs: '' });
});
```

- [ ] **Step 10: Test ausführen, Fehlschlag bestätigen**

Run: `node --test tools/sppb-export/builders/image.test.mjs`
Expected: FAIL — `Cannot find module './image.mjs'`

- [ ] **Step 11: `image.mjs` implementieren**

```javascript
// tools/sppb-export/builders/image.mjs
import { nextId } from '../lib/ids.mjs';
import { responsive, globalBackgroundFields } from '../lib/fields.mjs';

export function image({ id, src, alt = 'Image', width = '', height = '', alignment, backgroundColor }) {
  return {
    id: id ?? nextId(),
    name: 'image',
    visibility: true,
    settings: {
      image: { src, height, width, alt },
      alt_text: alt,
      ...(alignment ? { position: responsive(alignment) } : {}),
      ...globalBackgroundFields(backgroundColor),
    },
  };
}
```

- [ ] **Step 12: Test ausführen, Erfolg bestätigen**

Run: `node --test tools/sppb-export/builders/image.test.mjs`
Expected: PASS (3 tests)

- [ ] **Step 13: Commit**

```bash
git add tools/sppb-export/builders/heading.mjs tools/sppb-export/builders/heading.test.mjs tools/sppb-export/builders/textBlock.mjs tools/sppb-export/builders/textBlock.test.mjs tools/sppb-export/builders/image.mjs tools/sppb-export/builders/image.test.mjs
git commit -m "$(cat <<'EOF'
ENH sppb-export: Content-Builder für heading/text_block/image

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01Ta9DTA1zSiso2YcdHb6ug7
EOF
)"
```

---

## Task 4: Content-Builder Teil 2 (`imageContent`, `feature`, `button`)

**Files:**
- Create: `tools/sppb-export/builders/imageContent.mjs`
- Create: `tools/sppb-export/builders/imageContent.test.mjs`
- Create: `tools/sppb-export/builders/feature.mjs`
- Create: `tools/sppb-export/builders/feature.test.mjs`
- Create: `tools/sppb-export/builders/button.mjs`
- Create: `tools/sppb-export/builders/button.test.mjs`

**Interfaces:**
- Consumes: `nextId` aus `../lib/ids.mjs`, `responsive`, `linkField`, `globalBackgroundFields` aus `../lib/fields.mjs`
- Produces: `imageContent({id?, text, imageSrc, imageAlign?, title?, headingSelector?, buttonText?, buttonUrl?, backgroundColor?}): {id, name: 'image_content', visibility, settings}`
- Produces: `feature({id?, title, headingSelector?, text, featureType?, iconName?, imageSrc?, imageAlt?, titleUrl?, alignment?, backgroundColor?}): {id, name: 'feature', visibility, settings}`
- Produces: `button({id?, text, url, newTab?, type?}): {id, name: 'button', visibility, settings}`

Feldnamen verifiziert gegen `components/com_sppagebuilder/addons/{image_content,feature,button}/admin.php` im Joomla4-Testsystem.

- [ ] **Step 1: Fehlschlagenden Test für `imageContent.mjs` schreiben**

```javascript
// tools/sppb-export/builders/imageContent.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { imageContent } from './imageContent.mjs';

test('imageContent setzt text, image.src und image_alignment', () => {
  const addon = imageContent({ text: '<p>Was ist SoLaWi?</p>', imageSrc: 'images/decision-funktion.jpg', imageAlign: 'left' });
  assert.equal(addon.name, 'image_content');
  assert.equal(addon.settings.text, '<p>Was ist SoLaWi?</p>');
  assert.deepEqual(addon.settings.image, { src: 'images/decision-funktion.jpg' });
  assert.equal(addon.settings.image_alignment, 'left');
});

test('imageContent setzt title/heading_selector nur wenn title angegeben ist', () => {
  const withTitle = imageContent({ text: 'x', imageSrc: 'y', title: 'Was ist Solidarische Landwirtschaft?' });
  assert.equal(withTitle.settings.title, 'Was ist Solidarische Landwirtschaft?');
  assert.equal(withTitle.settings.heading_selector, 'h3');

  const withoutTitle = imageContent({ text: 'x', imageSrc: 'y' });
  assert.equal(withoutTitle.settings.title, undefined);
});

test('imageContent setzt button_text/button_url nur wenn buttonText angegeben ist', () => {
  const withButton = imageContent({
    text: 'x',
    imageSrc: 'y',
    buttonText: 'Mehr über SoLaWi erfahren',
    buttonUrl: '/solidarische-landwirtschaft',
  });
  assert.equal(withButton.settings.button_text, 'Mehr über SoLaWi erfahren');
  assert.deepEqual(withButton.settings.button_url, {
    type: 'url',
    url: '/solidarische-landwirtschaft',
    menu: '',
    page: 0,
    new_tab: false,
    nofollow: false,
    noreferrer: false,
    noopener: false,
  });

  const withoutButton = imageContent({ text: 'x', imageSrc: 'y' });
  assert.equal(withoutButton.settings.button_text, undefined);
});
```

- [ ] **Step 2: Test ausführen, Fehlschlag bestätigen**

Run: `node --test tools/sppb-export/builders/imageContent.test.mjs`
Expected: FAIL — `Cannot find module './imageContent.mjs'`

- [ ] **Step 3: `imageContent.mjs` implementieren**

```javascript
// tools/sppb-export/builders/imageContent.mjs
import { nextId } from '../lib/ids.mjs';
import { linkField, globalBackgroundFields } from '../lib/fields.mjs';

export function imageContent({
  id,
  text,
  imageSrc,
  imageAlign = 'left',
  title,
  headingSelector = 'h3',
  buttonText,
  buttonUrl,
  backgroundColor,
}) {
  const settings = {
    text,
    image: { src: imageSrc },
    image_alignment: imageAlign,
  };

  if (title) {
    settings.title = title;
    settings.heading_selector = headingSelector;
  }

  if (buttonText) {
    settings.button_text = buttonText;
    settings.button_url = linkField(buttonUrl);
  }

  Object.assign(settings, globalBackgroundFields(backgroundColor));

  return { id: id ?? nextId(), name: 'image_content', visibility: true, settings };
}
```

- [ ] **Step 4: Test ausführen, Erfolg bestätigen**

Run: `node --test tools/sppb-export/builders/imageContent.test.mjs`
Expected: PASS (3 tests)

- [ ] **Step 5: Fehlschlagenden Test für `feature.mjs` schreiben**

```javascript
// tools/sppb-export/builders/feature.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { feature } from './feature.mjs';

test('feature mit featureType=icon setzt icon_name, aber kein feature_image', () => {
  const addon = feature({ title: 'Gemeinsam tragen wir das Risiko', text: 'Gute Ernte = mehr für alle.', featureType: 'icon', iconName: 'fas fa-users' });
  assert.equal(addon.name, 'feature');
  assert.equal(addon.settings.feature_type, 'icon');
  assert.equal(addon.settings.icon_name, 'fas fa-users');
  assert.equal(addon.settings.feature_image, undefined);
});

test('feature mit featureType=image setzt feature_image, aber kein icon_name', () => {
  const addon = feature({ title: 'Nachhaltig & Regional', text: 'x', featureType: 'image', imageSrc: 'images/features-nachhaltigkeit.jpg', imageAlt: 'Frau mit Gemüsewagen' });
  assert.equal(addon.settings.feature_type, 'image');
  assert.deepEqual(addon.settings.feature_image, { src: 'images/features-nachhaltigkeit.jpg', height: '', width: '' });
  assert.equal(addon.settings.feature_image_alt, 'Frau mit Gemüsewagen');
  assert.equal(addon.settings.icon_name, undefined);
});

test('feature setzt title_url nur wenn angegeben', () => {
  const withLink = feature({ title: 'x', text: 'y', titleUrl: '/ernteanteile/hederer-sommer' });
  assert.equal(withLink.settings.title_url.url, '/ernteanteile/hederer-sommer');

  const withoutLink = feature({ title: 'x', text: 'y' });
  assert.equal(withoutLink.settings.title_url, undefined);
});

test('feature verwendet center als Alignment-Default und icon als featureType-Default', () => {
  const addon = feature({ title: 'x', text: 'y' });
  assert.equal(addon.settings.alignment.xl, 'center');
  assert.equal(addon.settings.feature_type, 'icon');
});
```

- [ ] **Step 6: Test ausführen, Fehlschlag bestätigen**

Run: `node --test tools/sppb-export/builders/feature.test.mjs`
Expected: FAIL — `Cannot find module './feature.mjs'`

- [ ] **Step 7: `feature.mjs` implementieren**

```javascript
// tools/sppb-export/builders/feature.mjs
import { nextId } from '../lib/ids.mjs';
import { responsive, linkField, globalBackgroundFields } from '../lib/fields.mjs';

export function feature({
  id,
  title,
  headingSelector = 'h3',
  text,
  featureType = 'icon',
  iconName,
  imageSrc,
  imageAlt,
  titleUrl,
  alignment = 'center',
  backgroundColor,
}) {
  const settings = {
    title,
    heading_selector: headingSelector,
    text,
    feature_type: featureType,
    alignment: responsive(alignment),
  };

  if (featureType !== 'image' && iconName) {
    settings.icon_name = iconName;
  }

  if (featureType !== 'icon' && imageSrc) {
    settings.feature_image = { src: imageSrc, height: '', width: '' };
    if (imageAlt) settings.feature_image_alt = imageAlt;
  }

  if (titleUrl) {
    settings.title_url = linkField(titleUrl);
  }

  Object.assign(settings, globalBackgroundFields(backgroundColor));

  return { id: id ?? nextId(), name: 'feature', visibility: true, settings };
}
```

- [ ] **Step 8: Test ausführen, Erfolg bestätigen**

Run: `node --test tools/sppb-export/builders/feature.test.mjs`
Expected: PASS (4 tests)

- [ ] **Step 9: Fehlschlagenden Test für `button.mjs` schreiben**

```javascript
// tools/sppb-export/builders/button.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { button } from './button.mjs';

test('button setzt text und url als Link-Feld', () => {
  const addon = button({ text: 'Jetzt dabei sein', url: '/so-funktionierts' });
  assert.equal(addon.name, 'button');
  assert.equal(addon.settings.text, 'Jetzt dabei sein');
  assert.equal(addon.settings.url.url, '/so-funktionierts');
  assert.equal(addon.settings.url.new_tab, false);
  assert.equal(addon.settings.type, 'custom');
});

test('button respektiert newTab und einen abweichenden type', () => {
  const addon = button({ text: 'x', url: 'https://example.org', newTab: true, type: 'primary' });
  assert.equal(addon.settings.url.new_tab, true);
  assert.equal(addon.settings.type, 'primary');
});
```

- [ ] **Step 10: Test ausführen, Fehlschlag bestätigen**

Run: `node --test tools/sppb-export/builders/button.test.mjs`
Expected: FAIL — `Cannot find module './button.mjs'`

- [ ] **Step 11: `button.mjs` implementieren**

```javascript
// tools/sppb-export/builders/button.mjs
import { nextId } from '../lib/ids.mjs';
import { linkField } from '../lib/fields.mjs';

export function button({ id, text, url, newTab = false, type = 'custom' }) {
  return {
    id: id ?? nextId(),
    name: 'button',
    visibility: true,
    settings: {
      text,
      url: linkField(url, { newTab }),
      type,
    },
  };
}
```

- [ ] **Step 12: Test ausführen, Erfolg bestätigen**

Run: `node --test tools/sppb-export/builders/button.test.mjs`
Expected: PASS (2 tests)

- [ ] **Step 13: Commit**

```bash
git add tools/sppb-export/builders/imageContent.mjs tools/sppb-export/builders/imageContent.test.mjs tools/sppb-export/builders/feature.mjs tools/sppb-export/builders/feature.test.mjs tools/sppb-export/builders/button.mjs tools/sppb-export/builders/button.test.mjs
git commit -m "$(cat <<'EOF'
ENH sppb-export: Content-Builder für image_content/feature/button

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01Ta9DTA1zSiso2YcdHb6ug7
EOF
)"
```

---

## Task 5: Generator (`generate.mjs`)

**Files:**
- Create: `tools/sppb-export/generate.mjs`
- Create: `tools/sppb-export/generate.test.mjs`

**Interfaces:**
- Consumes: nichts von anderen Tasks direkt (arbeitet mit beliebigen Recipe-Modulen, die `buildPage(): object` exportieren — Vertrag, den Task 6 (`pages/home.mjs`) erfüllt)
- Produces: `generatePageFile(pageName: string, opts?: {pagesDir?: string, outDir?: string}): Promise<string>` (gibt den geschriebenen Dateipfad zurück)

- [ ] **Step 1: Fehlschlagenden Test schreiben**

```javascript
// tools/sppb-export/generate.test.mjs
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
```

- [ ] **Step 2: Test ausführen, Fehlschlag bestätigen**

Run: `node --test tools/sppb-export/generate.test.mjs`
Expected: FAIL — `Cannot find module './generate.mjs'`

- [ ] **Step 3: `generate.mjs` implementieren**

```javascript
// tools/sppb-export/generate.mjs
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function generatePageFile(pageName, { pagesDir, outDir } = {}) {
  const resolvedPagesDir = pagesDir ?? path.join(__dirname, 'pages');
  const resolvedOutDir = outDir ?? path.join(__dirname, '..', '..', 'export');

  const modulePath = path.join(resolvedPagesDir, `${pageName}.mjs`);
  const { buildPage } = await import(pathToFileURL(modulePath).href);
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
```

- [ ] **Step 4: Test ausführen, Erfolg bestätigen**

Run: `node --test tools/sppb-export/generate.test.mjs`
Expected: PASS (1 test)

- [ ] **Step 5: Commit**

```bash
git add tools/sppb-export/generate.mjs tools/sppb-export/generate.test.mjs
git commit -m "$(cat <<'EOF'
ENH sppb-export: Generator, der Seiten-Recipes zu SPPB-JSON rendert

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01Ta9DTA1zSiso2YcdHb6ug7
EOF
)"
```

---

## Task 6: Validator (`validate.mjs`)

**Files:**
- Create: `tools/sppb-export/validate.mjs`
- Create: `tools/sppb-export/validate.test.mjs`

**Interfaces:**
- Consumes: nichts (arbeitet auf dem generierten Page-JSON-Objekt)
- Produces: `validatePageJson(pageJson: object): string[]` (leeres Array = valide)

- [ ] **Step 1: Fehlschlagenden Test schreiben**

```javascript
// tools/sppb-export/validate.test.mjs
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

test('kaputtes template-JSON wird gemeldet, ohne dass die Funktion wirft', () => {
  const pageJson = validHeadingSection();
  pageJson.template = '{not valid json';
  assert.doesNotThrow(() => validatePageJson(pageJson));
  const errors = validatePageJson(pageJson);
  assert.ok(errors.length > 0);
});
```

- [ ] **Step 2: Test ausführen, Fehlschlag bestätigen**

Run: `node --test tools/sppb-export/validate.test.mjs`
Expected: FAIL — `Cannot find module './validate.mjs'`

- [ ] **Step 3: `validate.mjs` implementieren**

```javascript
// tools/sppb-export/validate.mjs
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

  sections.forEach((section, sIdx) => {
    for (const key of ['id', 'visibility', 'settings', 'layout', 'columns']) {
      if (!(key in section)) errors.push(`Section[${sIdx}]: fehlendes Feld "${key}"`);
    }

    (section.columns ?? []).forEach((column, cIdx) => {
      for (const key of ['id', 'class_name', 'settings', 'addons', 'width']) {
        if (!(key in column)) errors.push(`Section[${sIdx}].Column[${cIdx}]: fehlendes Feld "${key}"`);
      }

      (column.addons ?? []).forEach((addon, aIdx) => {
        const label = `Section[${sIdx}].Column[${cIdx}].Addon[${aIdx}]`;

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
```

- [ ] **Step 4: Test ausführen, Erfolg bestätigen**

Run: `node --test tools/sppb-export/validate.test.mjs`
Expected: PASS (5 tests)

- [ ] **Step 5: Commit**

```bash
git add tools/sppb-export/validate.mjs tools/sppb-export/validate.test.mjs
git commit -m "$(cat <<'EOF'
ENH sppb-export: Struktur-Validator für generiertes SPPB-JSON

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01Ta9DTA1zSiso2YcdHb6ug7
EOF
)"
```

---

## Task 7: Schema-Dokumentation — Seiten-Envelope (`docs/sppb/page-format.md`)

**Files:**
- Create: `docs/sppb/page-format.md`

**Interfaces:**
- Consumes: nichts (reine Dokumentation)
- Produces: nichts (kein Code)

- [ ] **Step 1: Datei schreiben**

```markdown
# SP Page Builder Pro — JSON-Seitenformat

Quelle: `administrator/components/com_sppagebuilder/editor/traits/{ImportTrait,ExportTrait}.php`,
`components/com_sppagebuilder/helpers/helper.php`,
`components/com_sppagebuilder/builder/settings/{row,column,addon}.php`
im Joomla4-Testsystem (`/Users/linus/Documents/0_Development/Joomla4`).

## Envelope (Top-Level)

```json
{
  "template": "<JSON-String eines Section-Arrays>",
  "css": "",
  "seo": "<JSON-String, z.B. '{}' oder SEO-Settings-Objekt>",
  "title": "Seitentitel",
  "language": "*"
}
```

`template` ist **kein** verschachteltes JSON-Objekt, sondern ein String, der beim
Parsen (`JSON.parse`) ein Array von Sections ergibt. Import (`ImportTrait::importLayout`)
und Export (`ExportTrait::exportLayout`) verwenden exakt dieses Envelope.

## Section (Row)

```json
{
  "id": 1577551197921,
  "visibility": true,
  "collapse": false,
  "settings": { "...": "siehe unten" },
  "layout": "7,5",
  "columns": [ "...siehe Column..." ]
}
```

`layout` ist ein Komma-String der Column-Breiten im 12er-Grid (z.B. `"7,5"` für zwei
Spalten mit 7/12 und 5/12 Breite).

### Section-Settings (Auswahl, aus `builder/settings/row.php`)

| Feld | Typ | Bedeutung |
|---|---|---|
| `admin_label` | string | Interner Name im Builder |
| `background_type` | `none\|color\|image\|gradient\|video` | Hintergrundmodus |
| `background_color` | string (hex) | nur relevant wenn `background_type=color` |
| `background_image` | `{src,...}` | nur relevant wenn `background_type=image` |
| `padding` | `{xl,lg,md,sm,xs}` (CSS-Shorthand-String je Breakpoint) | z.B. `"96px 0px 96px 0px"` |
| `margin` | `{xl,lg,md,sm,xs}` | wie `padding` |
| `overlay_type` | string | Overlay über dem Hintergrund |
| `columns_align_center` | bool | Vertikale Zentrierung der Columns |
| `hidden_xs`/`hidden_sm`/`hidden_md`/`hidden_lg`/`hidden_xl` | bool | Responsive Visibility |
| `show_top_shape`/`show_bottom_shape` + `shape_*` | | Wellenform-Trenner (Shape Dividers) |

## Column

```json
{
  "id": 1577563705146,
  "class_name": "col-md-6",
  "visibility": true,
  "settings": { "width": { "xl": "50%", "lg": "50%", "md": "100%", "sm": "100%", "xs": "100%" } },
  "addons": [ "...siehe Addon..." ],
  "width": { "xl": "50%", "lg": "50%", "md": "100%", "sm": "100%", "xs": "100%" }
}
```

`width` erscheint sowohl auf Column-Ebene als auch (identisch) unter `settings.width` —
verifiziert an echten Exporten. `class_name` folgt dem Muster `col-md-<span>` mit
`<span>` aus dem 12er-Grid.

## Addon (allgemeine Hülle)

```json
{
  "id": 1577563705152,
  "name": "heading",
  "visibility": true,
  "settings": { "...": "addon-spezifisch, siehe docs/sppb/addons/<name>.md" }
}
```

## Globale Addon-Felder (jedes Addon hat sie zusätzlich)

Quelle: `SpPgaeBuilderBase::addonOptions()` → `builder/settings/addon.php`. Jedes
Addon bekommt diese Felder automatisch zu seinen eigenen `settings` gemerged
(`Helper::prepareAddonFieldStructures()`). Am relevantesten für die Export-Toolset-Builder:

| Feld | Bedeutung |
|---|---|
| `global_background_type` | `none\|color\|image\|gradient` — Hintergrund **des einzelnen Addons** (z.B. eine pastellfarbene Feature-Karte, unabhängig vom Section-Hintergrund) |
| `global_background_color` | hex/rgba-Farbe, nur bei `global_background_type=color` |
| `global_text_color` | Textfarbe |
| `global_padding`/`global_margin` | `{xl,lg,md,sm,xs}` |
| `global_user_border` + `global_border_*` | Rahmen |

`tools/sppb-export/lib/fields.mjs::globalBackgroundFields(color)` bildet genau
diesen Mechanismus ab.

## Wiederkehrende Feldtypen

- **Responsive-Objekt** (`alignment`, `padding`, `margin`, viele Slider): `{xl, lg, md, sm, xs}`.
  Nicht gesetzte Breakpoints (leerer String) erben vom nächsthöheren Breakpoint im
  Frontend. Für unsere Zwecke reicht es, nur `xl` zu befüllen
  (siehe `tools/sppb-export/lib/fields.mjs::responsive`).
- **Link-Feld** (`type: 'link'` in der Addon-Config, z.B. `title_url`, `button_url`, `url`):
  ```json
  { "type": "url", "url": "/pfad", "menu": "", "page": 0, "new_tab": false, "nofollow": false, "noreferrer": false, "noopener": false }
  ```
  Verifiziert gegen `export_origin/Landing_page.json` (Feld `title_link` der
  `heading`-Addon-Instanzen). Abgebildet in `linkField()`.
- **Media-Feld** (`type: 'media'`, z.B. `image` bei den Addons `image`/`image_content`/`feature`):
  mindestens `{ src: string }`; die Addons `image` und `feature` ergänzen zusätzlich
  `height`, `width` (und bei `image` auch `alt`) im selben Objekt.
- **Typography-Feld** (`type: 'typography'`): in dieser Toolset-Version bewusst nicht
  gesetzt — SPPB nutzt dann die Font-/Größen-Defaults des Helix-Ultimate-Templates.
  Bei Bedarf später ergänzen.

## Bekannte Lücke / offener Punkt für den Piloten

Der genaue `type`-Wert des Link-Felds (`"url"` vs. z.B. `"external"`) stammt aus der
**alten** Referenz-Export-Datei (`export_origin/Landing_page.json`), nicht aus einer
frisch mit der installierten Version erzeugten Export-Datei. Der Importer migriert
alte Formate automatisch (`SppagebuilderHelperSite::sanitizeImportJSON`), das Feld
sollte also in jedem Fall funktionieren — beim Piloten-Import (Task 10) trotzdem
gezielt prüfen, ob Links (Buttons, `title_url`, `button_url`) korrekt übernommen werden.
```

- [ ] **Step 2: Commit**

```bash
git add docs/sppb/page-format.md
git commit -m "$(cat <<'EOF'
DOCS sppb: Schema-Doku für Seiten-Envelope, Section, Column, globale Felder

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01Ta9DTA1zSiso2YcdHb6ug7
EOF
)"
```

---

## Task 8: Schema-Dokumentation — Pilot-Addons (`docs/sppb/addons/{heading,text_block,image,image_content,feature,button}.md`)

**Files:**
- Create: `docs/sppb/addons/heading.md`
- Create: `docs/sppb/addons/text_block.md`
- Create: `docs/sppb/addons/image.md`
- Create: `docs/sppb/addons/image_content.md`
- Create: `docs/sppb/addons/feature.md`
- Create: `docs/sppb/addons/button.md`

**Interfaces:**
- Consumes: nichts (reine Dokumentation)
- Produces: das Dokumentationsmuster, das Task 9 für die restlichen Addons repliziert

- [ ] **Step 1: `docs/sppb/addons/heading.md` schreiben**

Quelle: `components/com_sppagebuilder/addons/heading/admin.php` im Joomla4-Testsystem.

```markdown
# Addon: heading

Quelle: `components/com_sppagebuilder/addons/heading/admin.php`

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `title` | textarea | `"This is a heading"` | – |
| `heading_selector` | headings (h1–h6) | `"h3"` | – |
| `title_link` | link | – | – |
| `heading_typography` | typography | – | – |
| `title_color` | advancedcolor | – | – |
| `title_text_shadow` | boxshadow | `"0 0 0 transparent"` | – |
| `alignment` | alignment (responsive) | `{xl:'left', lg:'', md:'', sm:'', xs:''}` | – |
| `title_icon` | icon | – | – |
| `title_icon_color` | color | – | – |
| `title_icon_position` | select (`before`\|`after`) | `"before"` | – |
| `title_margin` | margin (responsive) | `{xl:'0px 0px 0px 0px', ...}` | – |
| `title_padding` | padding (responsive) | `{xl:'0px 0px 0px 0px', ...}` | – |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

**Von `tools/sppb-export/builders/heading.mjs` gesetzt:** `title`, `heading_selector`, `alignment`, optional `global_background_type`/`global_background_color`.
```

- [ ] **Step 2: `docs/sppb/addons/text_block.md` schreiben**

Quelle: `components/com_sppagebuilder/addons/text_block/admin.php` im Joomla4-Testsystem.

```markdown
# Addon: text_block

Quelle: `components/com_sppagebuilder/addons/text_block/admin.php`

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `text` | editor (HTML) | Lorem-Ipsum-Platzhalter | – |
| `column_count` | slider (responsive) | – | – |
| `column_gap` | slider (responsive) | – | – |
| `text_typography` | typography | – | – |
| `global_text_color` | color | – | – |
| `alignment` | alignment (responsive) | – | – |
| `content_truncation` | checkbox | `0` | – |
| `content_truncation_max_word` | number | `30` | `content_truncation = 1` |
| `content_truncation_action_text` | text | `"Show More"` | `content_truncation = 1` |
| `content_truncation_action_typography` | typography | – | `content_truncation = 1` |
| `content_truncation_action_text_color` | color | `"#3366FF"` | `content_truncation = 1` |
| `dropcap` | checkbox | `0` | – |
| `dropcap_font_size` | slider (responsive) | – | `dropcap = 1` |
| `dropcap_color` | color | – | `dropcap = 1` |
| `title` | text | – | – |
| `heading_selector` | headings | `"h3"` | – |
| `title_typography` | typography | – | – |
| `title_text_color` | color | – | – |
| `title_margin_top` | slider (responsive) | – | – |
| `title_margin_bottom` | slider (responsive) | – | – |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

**Von `tools/sppb-export/builders/textBlock.mjs` gesetzt:** `text`, optional `alignment`, optional `global_background_type`/`global_background_color`.
```

- [ ] **Step 3: `docs/sppb/addons/image.md` schreiben**

Quelle: `components/com_sppagebuilder/addons/image/admin.php` im Joomla4-Testsystem.

```markdown
# Addon: image

Quelle: `components/com_sppagebuilder/addons/image/admin.php`

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `image` | media | `{src,height,width,alt}` | – |
| `image_2x` | media | `{src:'',height:'',width:''}` | – |
| `alt_text` | text | `"Image"` | – |
| `image_title` | text | `""` | – |
| `image_fit` | select (`none\|cover\|contain\|fill\|scale-down`) | `""` | – |
| `position` | alignment (responsive) | – | – |
| `is_image_shape_enabled` | checkbox | `0` | – |
| `image_shape` | image_shape (12 Formen) | `""` | `is_image_shape_enabled = 1` |
| `image_shape_scale` | slider | `1.2` | `is_image_shape_enabled = 1` |
| `is_effects_enabled` | checkbox | `0` | – |
| `image_effects` | effects | – | `is_effects_enabled = 1` |
| `image_width`/`image_height` | slider (responsive) | – | – |
| `border_radius` | advancedslider | `0` | – |
| `fetch_priority` | select (`high`\|`low`) | `""` | – |
| `open_lightbox` | checkbox | `0` | – |
| `overlay_color` | color | `"rgba(119, 219, 31, .5)"` | `open_lightbox != 0` |
| `is_zoom_enabled` | checkbox | `0` | – |
| `zoom_scale` | slider | `1.2` | `is_zoom_enabled = 1` |
| `link` | link | `""` | `open_lightbox != 1` |
| `title` | text | – | – |
| `heading_selector` | headings | `"h3"` | – |
| `title_typography` | typography | – | – |
| `title_text_color` | color | – | – |
| `title_position` | select (`top`\|`bottom`) | `"top"` | – |
| `title_margin_top`/`title_margin_bottom` | slider (responsive) | – | – |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

**Von `tools/sppb-export/builders/image.mjs` gesetzt:** `image.{src,height,width,alt}`, `alt_text`, optional `position`, optional `global_background_type`/`global_background_color`.
```

- [ ] **Step 4: `docs/sppb/addons/image_content.md` schreiben**

Quelle: `components/com_sppagebuilder/addons/image_content/admin.php` im Joomla4-Testsystem.

```markdown
# Addon: image_content

Quelle: `components/com_sppagebuilder/addons/image_content/admin.php`

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `text` | editor (HTML) | Platzhaltertext | – |
| `text_typography` | typography | – | – |
| `content_padding` | padding (responsive) | `{xl:'120px 0 120px 50px', ...}` | – |
| `image` | media | `{src:'...'}` (nur `src`, kein height/width/alt) | – |
| `image_alignment` | select (`left`\|`right`) | `"left"` | – |
| `aria_label` | text | `""` | – |
| `title` | text | – | – |
| `heading_selector` | headings | `"h3"` | – |
| `title_typography` | typography | – | – |
| `title_text_color` | color | – | – |
| `title_margin_top`/`title_margin_bottom` | slider (responsive) | – | – |
| `button_text` | text | – | – |
| `button_url` | link | – | – |
| `button_typography` | typography | – | – |
| `button_type` | select (`default\|primary\|secondary\|success\|info\|warning\|danger\|dark\|link\|custom`) | `"custom"` | – |
| `button_appearance` | select (`""\|gradient\|outline`) | – | `type != 'link'` |
| `button_shape` | select (`rounded\|square\|round`) | `"rounded"` | `button_type != 'link'` |
| `button_size` | select | – | – |
| `button_padding` | padding (responsive) | – | `button_size = 'custom'` |
| `button_block` | select | `""` | `button_type != 'link'` |
| `button_icon` | icon | – | – |
| `button_icon_position` | radio (`left`\|`right`) | `"left"` | – |
| `button_margin_top` | slider (responsive) | `{xl:20}` | – |
| `button_color`/`button_background_color`(+`_hover`) | color | siehe Datei | `button_type = 'custom'` |
| `link_button_color`/`link_button_border_width`/`link_button_border_color`(+`_hover`) | color/slider | siehe Datei | `button_type = 'link'` |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

**Von `tools/sppb-export/builders/imageContent.mjs` gesetzt:** `text`, `image.src`, `image_alignment`, optional `title`/`heading_selector`, optional `button_text`/`button_url`, optional `global_background_type`/`global_background_color`.
```

- [ ] **Step 5: `docs/sppb/addons/feature.md` schreiben**

Quelle: `components/com_sppagebuilder/addons/feature/admin.php` im Joomla4-Testsystem.

```markdown
# Addon: feature

Quelle: `components/com_sppagebuilder/addons/feature/admin.php`

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `title` | text | `"Feature Box"` | – |
| `heading_selector` | headings | `"h3"` | – |
| `title_typography` | typography | – | – |
| `title_margin_top`/`title_margin_bottom` | slider (responsive) | – | – |
| `alignment` | alignment (responsive) | `{xl:'center', ...}` | – |
| `title_position` | select (`after`\|`before`\|`left`\|`right`) | – | – |
| `feature_type` | radio (`icon`\|`image`\|`both`) | `"icon"` | – |
| `icon_name` | icon | `"fas fa-trophy"` | `feature_type != 'image'` |
| `icon_size`/`icon_padding`/`icon_background`/`icon_hover_bg`/`icon_border_width`/`icon_border_color`/`icon_boxshadow`/`icon_border_radius`/`icon_margin_top`/`icon_margin_bottom` | diverse | siehe Datei | `feature_type != 'image'` (teilweise) |
| `feature_image` | media | `{src:'',height:'',width:''}` | `feature_type != 'icon'` |
| `feature_image_alt` | text | `""` | `feature_type != 'icon'` |
| `feature_image_width` | slider (responsive) | – | `feature_type != 'icon'` |
| `text` | editor (HTML) | Platzhaltertext | – |
| `content_typography` | typography | – | – |
| `text_background` | color | – | – |
| `text_padding` | padding (responsive) | – | – |
| `title_url` | link | – | – |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

**Von `tools/sppb-export/builders/feature.mjs` gesetzt:** `title`, `heading_selector`, `text`, `feature_type`, `alignment`, je nach `feature_type` `icon_name` oder `feature_image`/`feature_image_alt`, optional `title_url`, optional `global_background_type`/`global_background_color`.
```

- [ ] **Step 6: `docs/sppb/addons/button.md` schreiben**

Quelle: `components/com_sppagebuilder/addons/button/admin.php` im Joomla4-Testsystem.

```markdown
# Addon: button

Quelle: `components/com_sppagebuilder/addons/button/admin.php`

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `text` | text | `"Button"` | – |
| `url` | link | – | – |
| `aria_label` | text | `""` | – |
| `typography` | typography | – | – |
| `type` | select (`default\|primary\|secondary\|success\|info\|warning\|danger\|dark\|link\|custom`) | `"custom"` | – |
| `link_button_padding_bottom` | slider | – | `type = 'link'` |
| *(weitere Style-/Farb-/Icon-Felder analog zu `image_content`'s `button_options`-Gruppe — siehe Datei für die vollständige Liste, falls Custom-Farben statt `type`-Presets benötigt werden)* | | | |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

**Von `tools/sppb-export/builders/button.mjs` gesetzt:** `text`, `url` (Link-Feld), `type`. Bewusst **kein** Custom-Farb-Override — die builder-seitig unverifizierten Farbfelder (`button_color`, `button_background_color`, ...) werden erst ergänzt, wenn ein `type`-Preset im Piloten-Test nicht ausreicht.
```

- [ ] **Step 7: Commit**

```bash
git add docs/sppb/addons/heading.md docs/sppb/addons/text_block.md docs/sppb/addons/image.md docs/sppb/addons/image_content.md docs/sppb/addons/feature.md docs/sppb/addons/button.md
git commit -m "$(cat <<'EOF'
DOCS sppb: Feldschema-Doku für die 6 Pilot-Addons

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01Ta9DTA1zSiso2YcdHb6ug7
EOF
)"
```

---

## Task 9: Schema-Dokumentation — restliche Addons aus `sp_page_builder.md`

**Files:**
- Create: `docs/sppb/addons/animated_heading.md`
- Create: `docs/sppb/addons/image_overlay.md`
- Create: `docs/sppb/addons/button_group.md`
- Create: `docs/sppb/addons/flip_box.md`
- Create: `docs/sppb/addons/person.md`
- Create: `docs/sppb/addons/accordion.md`
- Create: `docs/sppb/addons/tab.md`
- Create: `docs/sppb/addons/carousel.md`
- Create: `docs/sppb/addons/carouselpro.md`
- Create: `docs/sppb/addons/timeline.md`
- Create: `docs/sppb/addons/raw_html.md`
- Create: `docs/sppb/addons/pricing.md`
- Create: `docs/sppb/addons/pricelist.md`
- Create: `docs/sppb/addons/form_builder.md`
- Create: `docs/sppb/addons/gallery.md`
- Create: `docs/sppb/addons/icons_group.md`
- Create: `docs/sppb/addons/module.md`
- Create: `docs/sppb/addons/row.md`

**Interfaces:**
- Consumes: nichts (reine Dokumentation)
- Produces: nichts (kein Code)

Dies ist eine **mechanische Wiederholung** von Task 8 für die restlichen Addons aus
der Tabelle in `sp_page_builder.md`, die die Home-Pilotseite nicht braucht, aber
spätere Seiten (Ernteanteile, Mitmachen, FAQ, ...) voraussichtlich verwenden werden.

- [ ] **Step 1: Für jeden Addon in der Dateiliste oben denselben Prozess wie in Task 8 durchführen**

Für jeden Addon-Namen `<name>` in der Files-Liste:

1. Lies `/Users/linus/Documents/0_Development/Joomla4/components/com_sppagebuilder/addons/<name>/admin.php` vollständig (bei sehr langen Dateien wie `feature` in mehreren `Read`-Aufrufen mit `offset`).
2. Extrahiere jedes Feld aus den verschachtelten `settings.<gruppe>.fields.<feldname>` Einträgen: Feldname, `type`, `std` (falls vorhanden), `depends` (falls vorhanden).
3. Schreibe `docs/sppb/addons/<name>.md` **exakt im Format der 6 Dateien aus Task 8** (Tabelle: Feld | Typ | Default | Bedingung), inklusive der Kopfzeile "Quelle: `components/com_sppagebuilder/addons/<name>/admin.php`" und dem Hinweis "Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`."
4. Lass den Abschnitt "Von `tools/sppb-export/builders/...` gesetzt" **weg**, wenn noch kein Builder für dieses Addon existiert (das ist für alle Addons in dieser Task der Fall) — stattdessen einen Hinweis "Noch kein Builder in `tools/sppb-export/builders/` — bei Bedarf für die jeweilige Seite ergänzen." anfügen.

Sonderfall `row.md`: Dieses Addon ist die **verschachtelte Row** (nutzbar innerhalb einer
Column, z.B. für komplexere Layouts innerhalb eines Accordion-Panels), zu unterscheiden
von der strukturellen Section/Row aus `docs/sppb/page-format.md`. Das im Dokument
klar so benennen ("Nested-Row-Addon, nicht zu verwechseln mit der Section-Struktur").

- [ ] **Step 2: Stichprobenartige Prüfung**

Öffne 3 der neu geschriebenen Dateien (z.B. `accordion.md`, `form_builder.md`, `pricing.md`)
und vergleiche stichprobenartig 2-3 Feldnamen gegen die jeweilige `admin.php` —
Tippfehler oder falsch übertragene `std`-Werte hier korrigieren.

- [ ] **Step 3: Commit**

```bash
git add docs/sppb/addons/
git commit -m "$(cat <<'EOF'
DOCS sppb: Feldschema-Doku für die restlichen sp_page_builder.md-Addons

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01Ta9DTA1zSiso2YcdHb6ug7
EOF
)"
```

---

## Task 10: Home-Recipe, Generierung, Validierung

**Files:**
- Create: `tools/sppb-export/pages/home.mjs`
- Modify: keine

**Interfaces:**
- Consumes: `page` aus `../builders/page.mjs`; `heading`, `textBlock`, `image`, `imageContent`, `feature`, `button` aus den jeweiligen Buildern
- Produces: `buildPage(): object` (Vertrag, den `generate.mjs` per `import()` erwartet)

**Referenz:** `src/app/pages/Home.tsx` im Repo — 5 Abschnitte (Hero, "SoLaWi in 60 Sekunden", "Warum mitmachen", "Was bekomme ich", CTA). Farben aus `src/styles/theme.css`:
`--solawi-green: #c2ddb2`, `--solawi-blue: #97b0c7`, `--solawi-salmon: #f3aba2`, `--solawi-orange: #ffa673`, `--solawi-mauve: #c7afc7`.

- [ ] **Step 1: `pages/home.mjs` schreiben**

```javascript
// tools/sppb-export/pages/home.mjs
import { page } from '../builders/page.mjs';
import { section } from '../builders/section.mjs';
import { heading } from '../builders/heading.mjs';
import { textBlock } from '../builders/textBlock.mjs';
import { image } from '../builders/image.mjs';
import { imageContent } from '../builders/imageContent.mjs';
import { feature } from '../builders/feature.mjs';
import { button } from '../builders/button.mjs';

const GREEN = '#c2ddb2';
const BLUE = '#97b0c7';
const SALMON = '#f3aba2';
const ORANGE = '#ffa673';
const MAUVE = '#c7afc7';

export function buildPage() {
  const sections = [
    // 1. Hero
    section({
      backgroundColor: GREEN,
      columns: [
        {
          span: 7,
          addons: [
            heading({ title: 'Stadt, Land, Beides.', headingSelector: 'h1', alignment: 'left' }),
            textBlock({ text: '<p>Frische Produkte direkt vom Hof. Faire Preise für alle. Gemeinschaft, die schmeckt.</p>' }),
            button({ text: 'Jetzt dabei sein', url: '/so-funktionierts' }),
          ],
        },
        {
          span: 5,
          addons: [
            image({ src: 'images/start.png', alt: 'Stadt, Land, Beides — Gummistiefel trifft Stöckelschuh' }),
          ],
        },
      ],
    }),

    // 2a. "SoLaWi in 60 Sekunden" — Überschrift
    section({
      backgroundColor: BLUE,
      columns: [{ span: 12, addons: [heading({ title: 'SoLaWi in 60 Sekunden' })] }],
    }),

    // 2b. "Was ist Solidarische Landwirtschaft" — Bild + Text + Button
    section({
      backgroundColor: BLUE,
      columns: [
        {
          span: 12,
          addons: [
            imageContent({
              imageSrc: 'images/decision-funktion.jpg',
              imageAlign: 'left',
              title: 'Was ist Solidarische Landwirtschaft?',
              text:
                '<p>Solidarische Landwirtschaft (SoLaWi) ist eine innovative Partnerschaft zwischen ' +
                'landwirtschaftlichen Betrieben und Verbraucher*innen. Gemeinsam tragen wir die ' +
                'Verantwortung, das Risiko und die Ernte.</p>' +
                '<p>Durch direkte Zusammenarbeit schaffen wir eine nachhaltige, regionale und ' +
                'transparente Lebensmittelversorgung – für Mensch und Umwelt.</p>',
              buttonText: 'Mehr über SoLaWi erfahren',
              buttonUrl: '/solidarische-landwirtschaft',
            }),
          ],
        },
      ],
    }),

    // 2c. Drei Feature-Karten ("Du bezahlst den Hof...", "Saisonal & regional...", "Gemeinsam tragen wir das Risiko")
    section({
      backgroundColor: BLUE,
      columns: [
        {
          span: 4,
          addons: [
            feature({
              title: 'Du bezahlst den Hof, nicht das Produkt',
              text: 'Du finanzierst die Landwirtschaft direkt, nicht einzelne Tomaten.',
              featureType: 'icon',
              iconName: 'fas fa-hand-holding-dollar',
              backgroundColor: SALMON,
            }),
          ],
        },
        {
          span: 4,
          addons: [
            feature({
              title: 'Saisonal & regional — direkt vom Acker',
              text: 'Bio-Lebensmittel aus der Region, ohne Umwege.',
              featureType: 'icon',
              iconName: 'fas fa-truck',
              backgroundColor: ORANGE,
            }),
          ],
        },
        {
          span: 4,
          addons: [
            feature({
              title: 'Gemeinsam tragen wir das Risiko',
              text: 'Gute Ernte = mehr für alle. Schlechte Ernte = weniger, aber fair geteilt.',
              featureType: 'icon',
              iconName: 'fas fa-users',
              backgroundColor: MAUVE,
            }),
          ],
        },
      ],
    }),

    // 3. "Warum mitmachen" — kein Section-Hintergrund, 4 Feature-Karten mit eigenem Pastell-Hintergrund
    section({
      columns: [{ span: 12, addons: [heading({ title: 'Warum mitmachen?' }), textBlock({ text: '<p>Gemeinsam gestalten wir eine nachhaltige Zukunft und genießen frische, regionale Lebensmittel.</p>', alignment: 'center' })] }],
    }),
    section({
      columns: [
        {
          span: 3,
          addons: [
            feature({
              title: 'Nachhaltig & Regional',
              text: 'Frische Lebensmittel direkt vom Hof in deiner Region. Kurze Transportwege und ökologischer Anbau schonen die Umwelt.',
              featureType: 'image',
              imageSrc: 'images/features-nachhaltigkeit.jpg',
              imageAlt: 'Frau mit Gemüsewagen auf dem Acker',
              backgroundColor: SALMON,
            }),
          ],
        },
        {
          span: 3,
          addons: [
            feature({
              title: 'Gemeinschaft',
              text: 'Werde Teil einer lebendigen Gemeinschaft. Lerne die Landwirt*innen kennen und gestalte aktiv mit.',
              featureType: 'image',
              imageSrc: 'images/features-gemeinschaft.jpg',
              imageAlt: 'Gruppe auf dem Acker',
              backgroundColor: ORANGE,
            }),
          ],
        },
        {
          span: 3,
          addons: [
            feature({
              title: 'Vielfalt & Transparenz',
              text: 'Volle Transparenz: Du weißt genau, wo dein Essen herkommt und wie es angebaut wird. Saisonal, vielfältig, ehrlich.',
              featureType: 'image',
              imageSrc: 'images/features-lebensmittel.jpg',
              imageAlt: 'Füllhorn mit Gemüse',
              backgroundColor: MAUVE,
            }),
          ],
        },
        {
          span: 3,
          addons: [
            feature({
              title: 'Depot in deiner Nähe',
              text: 'Hole deine Ernte wöchentlich an einem unserer Depots ab. Nürnberg, Fürth.',
              featureType: 'image',
              imageSrc: 'images/ablauf-depot.jpg',
              imageAlt: 'Depot in der Stadt',
              backgroundColor: GREEN,
            }),
          ],
        },
      ],
    }),

    // 4. "Was bekomme ich" — 6 Produktkarten
    section({
      backgroundColor: BLUE,
      columns: [
        {
          span: 12,
          addons: [
            heading({ title: 'Was bekomme ich?' }),
            textBlock({ text: '<p>Keine Supermarkt-Einheitskiste — sondern das, was die Natur gerade hergibt.</p>', alignment: 'center' }),
          ],
        },
      ],
    }),
    section({
      backgroundColor: BLUE,
      columns: [
        { span: 4, addons: [feature({ title: 'Sommergemüse', text: 'Biohof Tristan — Tomaten, Zucchini, Paprika und mehr — frisch vom Feld.', iconName: 'fas fa-carrot', titleUrl: '/ernteanteile/hederer-sommer' })] },
        { span: 4, addons: [feature({ title: 'Wintergemüse', text: 'Biohof Tristan — Kohl, Wurzelgemüse und Lagerware für die kalte Jahreszeit.', iconName: 'fas fa-leaf', titleUrl: '/ernteanteile/tristans-winter' })] },
        { span: 4, addons: [feature({ title: 'Obst & Säfte', text: 'Demeterhof Hederer — Äpfel, Birnen, Zwetschgen und hausgemachte Säfte.', iconName: 'fas fa-apple-whole', titleUrl: '/ernteanteile/hederer-obst' })] },
      ],
    }),
    section({
      backgroundColor: BLUE,
      columns: [
        { span: 4, addons: [feature({ title: 'Fleisch & Eier', text: 'Demeterhof Walz — Weiderind, Hähnchen und frische Eier aus artgerechter Haltung.', iconName: 'fas fa-egg', titleUrl: '/ernteanteile/walz-huhn' })] },
        { span: 4, addons: [feature({ title: 'Ur-Getreide', text: 'Demeterhof Walz — Emmer, Einkorn und Dinkel — alte Sorten, neu entdeckt.', iconName: 'fas fa-wheat-awn', titleUrl: '/ernteanteile/walz-getreide' })] },
        { span: 4, addons: [feature({ title: 'Bio-Beeren', text: 'Kirschgarten — Erdbeeren, Himbeeren und Johannisbeeren in EU-Bio-Qualität.', iconName: 'fas fa-seedling', titleUrl: '/ernteanteile/kirschgarten-beeren' })] },
      ],
    }),

    // 5. CTA
    section({
      backgroundColor: GREEN,
      columns: [
        { span: 4, addons: [image({ src: 'images/features-mitmachen.jpg', alt: 'Bauer zeigt auf dich' })] },
        {
          span: 8,
          addons: [
            heading({ title: 'Bereit für frische, regionale Lebensmittel?', alignment: 'left' }),
            textBlock({ text: '<p>Werde Teil unserer Gemeinschaft und unterstütze nachhaltige Landwirtschaft in deiner Region.</p>' }),
            button({ text: 'Jetzt mitmachen', url: '/so-funktionierts' }),
          ],
        },
      ],
    }),
  ];

  return page({ title: 'Home', sections });
}
```

*Hinweis: Die Bildpfade (`images/...`) setzen voraus, dass die entsprechenden Dateien
aus `/public/` vor dem Import-Test manuell in den Joomla-Media-Manager unter demselben
relativen Pfad hochgeladen wurden (siehe Global Constraints). Die FontAwesome-Icon-Namen
sind Näherungen zu den lucide-react-Icons aus `Home.tsx` und im Piloten-Test visuell zu prüfen.*

- [ ] **Step 2: JSON generieren**

Run: `node tools/sppb-export/generate.mjs home`
Expected: `Wrote .../export/home.json`

- [ ] **Step 3: Validieren**

Run: `node tools/sppb-export/validate.mjs export/home.json`
Expected: `OK: export/home.json ist valide.`

Falls Fehler gemeldet werden: die betroffene Recipe-Stelle in `pages/home.mjs` korrigieren
(fehlendes Pflichtfeld ergänzen oder falschen Addon-Namen korrigieren) und Schritt 2+3 wiederholen.

- [ ] **Step 4: Alle Tests der Toolset weiterhin grün**

Run: `node --test tools/sppb-export`
Expected: alle Tests aus Task 1–6 PASS

- [ ] **Step 5: Commit**

```bash
git add tools/sppb-export/pages/home.mjs export/home.json
git commit -m "$(cat <<'EOF'
ENH sppb-export: Home.tsx-Recipe, generiert und validiert als Piloten-Export

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01Ta9DTA1zSiso2YcdHb6ug7
EOF
)"
```

---

## Task 11: Claude-Skill (`​.claude/skills/sppb-export/SKILL.md`) + manuelle Import-Test-Anleitung

**Files:**
- Create: `.claude/skills/sppb-export/SKILL.md`

**Interfaces:**
- Consumes: den gesamten Workflow aus Task 1–10
- Produces: nichts (Dokumentation/Orchestrierung für zukünftige Aufrufe des Skills)

- [ ] **Step 1: `SKILL.md` schreiben**

```markdown
---
name: sppb-export
description: Wandelt eine Seite aus src/app/pages/*.tsx in eine importierbare SP Page Builder Pro JSON-Datei um. Nutzen, wenn eine Prototyp-Seite für die Joomla-Umsetzung exportiert werden soll.
---

# SPPB Export

Wandelt eine React-Prototyp-Seite in `src/app/pages/*.tsx` in eine SP Page Builder
Pro Import-Datei (`export/<page>.json`) um. Hintergrund: `docs/superpowers/specs/2026-09-06-sppb-export-toolset-design.md`.

## Ablauf

1. **Seite lesen:** Die Ziel-TSX-Datei vollständig lesen (`src/app/pages/<Name>.tsx`).
2. **Farbe & Abschnitte zuordnen:** Für jeden JSX-`<section>` die Hintergrundfarbe
   anhand der tatsächlichen Tailwind-Klasse und `src/styles/theme.css` bestimmen
   (nicht aus altem Gedächtnis übernehmen — Farben ändern sich). Bei mehreren
   inhaltlich zusammengehörigen `<section>`-Blöcken mit gleicher Farbe: als mehrere
   SPPB-Sections mit identischem `backgroundColor` abbilden (siehe `pages/home.mjs`
   als Beispiel für "SoLaWi in 60 Sekunden").
3. **Addon je Inhaltsblock wählen**, gestützt auf:
   - `docs/sppb/page-format.md` für die Grundstruktur (Envelope/Section/Column/globale Felder)
   - `docs/sppb/addons/*.md` für die verfügbaren Felder je Addon-Typ
   - vorhandene Builder in `tools/sppb-export/builders/*.mjs` — wenn ein Builder für
     den gebrauchten Addon-Typ fehlt, zuerst nach demselben Muster wie die
     bestehenden Builder (siehe Task 1–4 des Implementierungsplans) ergänzen,
     inkl. Test
   - Farbsignatur/Illustrationszuordnung, falls in den Projekt-Memories vorhanden
     (`design_signature.md`, `signature_images.md`) — vor Verwendung gegen den
     aktuellen Code verifizieren, Memories können veraltet sein
4. **Recipe schreiben** unter `tools/sppb-export/pages/<page>.mjs`, die `buildPage()`
   exportiert (siehe `pages/home.mjs`).
5. **Generieren:** `node tools/sppb-export/generate.mjs <page>`
6. **Validieren:** `node tools/sppb-export/validate.mjs export/<page>.json` — Fehler
   in der Recipe beheben, bis die Ausgabe `OK: ...` zeigt.
7. **Bilder bereitstellen:** Alle referenzierten `images/...`-Pfade müssen vor dem
   Import manuell in den Joomla-Media-Manager unter demselben relativen Pfad
   hochgeladen werden (Dateien liegen im Prototyp unter `/public/`).
8. **Manueller Import-Test** (siehe Abschnitt unten) — Ergebnis abwarten, bevor die
   nächste Seite angegangen wird.

## Fehlerkorrektur

- **Seiteninhalt/-layout falsch** → die betroffene Stelle in
  `tools/sppb-export/pages/<page>.mjs` anpassen, Schritt 5+6 wiederholen.
- **SoLaWi-weiter Default falsch** (z.B. Farbwert, Standard-Padding) → einmal im
  betroffenen Builder in `tools/sppb-export/builders/` ändern — wirkt auf alle
  Seiten, die diesen Builder verwenden.
- **Addon-Feld fehlt/falsch benannt** → den passenden Eintrag in
  `docs/sppb/addons/<name>.md` gegen die aktuelle
  `Joomla4/components/com_sppagebuilder/addons/<name>/admin.php` prüfen und sowohl
  Doku als auch Builder korrigieren.

## Manueller Import-Test (Joomla4-Testsystem)

1. Im Joomla-Backend des Testsystems (`/Users/linus/Documents/0_Development/Joomla4`)
   unter **Components → Page Builder** eine neue Seite anlegen.
2. Die Import-Funktion der SP-Page-Builder-Oberfläche nutzen und `export/<page>.json`
   hochladen.
3. Im Frontend die Seite ansehen, mit der TSX-Referenzseite vergleichen: Struktur,
   Texte, Bilder (nach manuellem Upload), Farben, Links.
4. Abweichungen zurückmelden — Korrektur läuft über den Abschnitt "Fehlerkorrektur"
   oben.
```

- [ ] **Step 2: Commit**

```bash
git add .claude/skills/sppb-export/SKILL.md
git commit -m "$(cat <<'EOF'
ENH sppb-export: Claude-Skill zur Orchestrierung des Export-Workflows

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01Ta9DTA1zSiso2YcdHb6ug7
EOF
)"
```

---

## Nach Abschluss aller Tasks

Der Nutzer führt den manuellen Import-Test von `export/home.json` im Joomla4-Testsystem
durch (siehe `.claude/skills/sppb-export/SKILL.md`, Abschnitt "Manueller Import-Test")
und meldet Abweichungen zurück. Das ist das im Design-Dokument festgelegte
Erfolgskriterium für diese Runde — die Konvertierung weiterer Seiten folgt danach
als eigener Durchgang mit dem fertigen Tool.
