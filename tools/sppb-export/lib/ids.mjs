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
