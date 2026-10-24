import type { CSSProperties } from "react";
import type { Hof } from "../data/hoefe";

/**
 * Hoflogo als Einfarb-Stempel in der Textfarbe (openspec specs/harvest-shares,
 * Requirement "Hof-Logo als Stempel im Kopfband"). Die Logodatei dient nur als Maske; der Hof
 * liefert Form, die Farbe kommt von uns. Größe über `className` (Breite und Höhe nötig).
 * Ohne Logo rendert nichts — kein Platzhalter.
 */
export function HofLogo({ logo, className = "h-14 w-36" }: { logo?: Hof["logo"]; className?: string }) {
  if (!logo) return null;
  return (
    <span
      role="img"
      aria-label={logo.alt}
      className={`hof-stempel ${className}`}
      style={{ "--hof-logo": `url("${logo.src}")` } as CSSProperties}
    />
  );
}
