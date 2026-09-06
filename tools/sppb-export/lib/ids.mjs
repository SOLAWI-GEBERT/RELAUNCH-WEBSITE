const ID_BASE = 1700000000000; // fixer, zeitstempelartiger Basiswert → deterministisch
let counter = 0;

/**
 * SP Page Builder akzeptiert sowohl numerische als auch String-IDs für
 * Sections/Columns/Addons (verifiziert an echten Exporten) — Hauptsache
 * eindeutig innerhalb der Seite. Die IDs sind deterministisch (fixer Basiswert
 * + Zähler), damit wiederholte Generierungen identische Ausgaben liefern und
 * `git diff` auf den Export sinnvoll bleibt. Sie müssen nur innerhalb einer
 * Seite eindeutig sein, nicht global oder über die Zeit.
 */
export function nextId() {
  counter += 1;
  return ID_BASE + counter;
}

export function resetIdCounter() {
  counter = 0;
}
