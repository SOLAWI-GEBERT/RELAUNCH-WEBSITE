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

const DEFAULT_ANIMATION_DURATION_MS = 600; // entspricht ScrollReveal (0.6s) im Prototyp

/**
 * Bündelt die globalen Addon-Felder aus builder/settings/addon.php, die
 * jedes Addon zusätzlich zu seinen eigenen Feldern kennt:
 * - Hintergrund (global_background_*), siehe globalBackgroundFields
 * - Innenabstand (global_padding, responsiv)
 * - Schatten (global_boxshadow, Format "x y blur spread color")
 * - Entrance-Animation (global_use_animation/global_animation/…duration/…delay,
 *   Dauer und Delay als Millisekunden-Strings; gültige Namen sind die
 *   animate.css-Klassen, z.B. fadeInUp, fadeInLeft, fadeInRight)
 *
 * Das Corporate Design (Fonts, Link-/Button-Farben) kommt aus dem
 * Helix-Template-Preset — hier landet nur, was Helix nicht liefern kann.
 */
export function globalStyleFields({
  backgroundColor,
  padding,
  boxShadow,
  animation,
  animationDelay = 0,
  animationDuration = DEFAULT_ANIMATION_DURATION_MS,
} = {}) {
  return {
    ...globalBackgroundFields(backgroundColor),
    ...(padding ? { global_padding: responsive(padding) } : {}),
    ...(boxShadow ? { global_boxshadow: boxShadow } : {}),
    ...(animation
      ? {
          global_use_animation: 1,
          global_animation: animation,
          global_animationduration: String(animationDuration),
          global_animationdelay: String(animationDelay),
        }
      : {}),
  };
}
