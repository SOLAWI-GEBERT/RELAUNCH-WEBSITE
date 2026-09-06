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
