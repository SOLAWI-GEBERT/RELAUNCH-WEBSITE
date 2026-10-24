import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { Ernteanteil } from "../data/ernteanteile";

/**
 * Abschnitt "In der Kiste" (openspec specs/harvest-shares, Requirement "Abschnitt \"In der
 * Kiste\""): Beispiel-Lieferungen als Kistenkarten mit optionalem 4:3-Foto, Größe nach TNV als
 * Badge, Produktliste mit Menge und Kochidee, darunter Mengen im Alltag. Ohne Daten rendert
 * nichts, auch keine Überschrift.
 */
export function InDerKiste({
  kiste,
  flaeche,
  Heading,
  ueberschrift,
  einzug = false,
}: {
  kiste?: Ernteanteil["kiste"];
  flaeche: string;
  Heading: "h2" | "h3";
  ueberschrift: string;
  /** Überschrift rückt nach rechts, damit die Kiste des Farbbands links davon stehen kann. */
  einzug?: boolean;
}) {
  const beispiele = kiste?.beispiele ?? [];
  if (beispiele.length === 0 && !kiste?.mengen) return null;

  return (
    <div>
      <Heading className={`${ueberschrift}${einzug ? " sm:ml-40" : ""}`}>In der Kiste</Heading>
      {beispiele.length > 0 && (
        <div className="grid md:grid-cols-3 gap-8">
          {beispiele.map((b) => (
            <div key={`${b.groesse ?? ""}${b.titel}`} className={`${flaeche} p-4 rounded-lg flex flex-col`}>
              {b.foto && (
                <div className="hof-foto aspect-[4/3] mb-4">
                  <ImageWithFallback src={b.foto.src} alt={b.foto.alt} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="flex items-start justify-between gap-3 mb-3">
                <p className="font-semibold text-foreground">{b.titel}</p>
                {b.groesse && (
                  <span className="shrink-0 bg-white/80 px-2 py-0.5 text-xs font-semibold text-foreground">
                    {b.groesse}
                  </span>
                )}
              </div>
              {b.produkte && b.produkte.length > 0 ? (
                <ul className="text-sm text-gray-700 divide-y divide-foreground/10">
                  {b.produkte.map((p) => (
                    <li key={p.name} className="flex justify-between gap-4 py-1">
                      <span>{p.name}</span>
                      {p.menge && <span className="text-gray-500 shrink-0">{p.menge}</span>}
                    </li>
                  ))}
                </ul>
              ) : (
                b.inhalt && <p className="text-gray-700 text-sm">{b.inhalt}</p>
              )}
              {b.kochidee && (
                <p className="text-gray-600 text-sm mt-3">
                  <span className="font-semibold">Was du damit kochst:</span> {b.kochidee}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
      {kiste?.mengen && <p className="text-gray-700 mt-6">{kiste.mengen}</p>}
    </div>
  );
}
