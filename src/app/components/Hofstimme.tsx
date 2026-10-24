import { HofLogo } from "./HofLogo";
import type { Hof } from "../data/hoefe";

/**
 * Hofstimme als kurzer Brief (openspec specs/harvest-shares, Requirement "Hofstimme als Brief"):
 * Anrede, Zitat, Signatur auf einer Karte in der Flächenfarbe der Kategorie; das Logo des Hofs
 * sitzt als Absender-Stempel an der Ecke. Ohne Zitat rendert nichts.
 */
export function Hofstimme({ zitat, logo, flaeche }: { zitat?: Hof["zitat"]; logo?: Hof["logo"]; flaeche: string }) {
  if (!zitat) return null;
  return (
    <figure className={`${flaeche} relative max-w-3xl mx-auto mb-16 rounded-lg px-8 py-8 sm:px-12`}>
      {logo && (
        <div className="absolute -top-5 right-6 rotate-6 bg-white rounded-full border-2 border-foreground/70 w-20 h-20 flex items-center justify-center text-foreground/80">
          <HofLogo logo={logo} className="h-10 w-14" />
        </div>
      )}
      <p className="text-gray-700 mb-3">{zitat.anrede}</p>
      <blockquote className="text-2xl text-foreground font-accent italic">„{zitat.text}“</blockquote>
      <figcaption className="mt-4 text-right font-semibold text-foreground">{zitat.signatur}</figcaption>
    </figure>
  );
}
