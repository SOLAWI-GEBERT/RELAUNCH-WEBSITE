import { Info } from "lucide-react";
import { gesamtbetrag, formatEuro, hatBieterrunde, VEREINSBEITRAG, type Ernteanteil } from "../data/ernteanteile";

/**
 * Preistabelle für einen Ernteanteil: je Variante Größe, Zyklus, Lieferphase,
 * Paketpreis, solidarischer Beitrag und Gesamtbetrag. Bieterrunden-Varianten sind als
 * Richtpreis gekennzeichnet, nie als Festpreis (siehe openspec specs/ernteanteile,
 * Requirement "Bieterrunden-Preise sind keine Festpreise").
 */
export function PreisTabelle({ anteil }: { anteil: Ernteanteil }) {
  const mitBieterrunde = hatBieterrunde(anteil);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="py-3 pr-4 text-foreground">Größe</th>
              {anteil.varianten.some((v) => v.fuer) && (
                <th className="py-3 pr-4 text-foreground">Für</th>
              )}
              <th className="py-3 pr-4 text-foreground">Zyklus</th>
              <th className="py-3 pr-4 text-foreground">Lieferphase</th>
              <th className="py-3 pr-4 text-foreground text-right">Paketpreis</th>
              <th className="py-3 pr-4 text-foreground text-right">Soli-Beitrag</th>
              <th className="py-3 text-foreground text-right">Gesamt/Monat</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {anteil.varianten.map((v, i) => (
              <tr key={i} className="border-b border-gray-100 align-top">
                <td className="py-3 pr-4 font-semibold">{v.groesse}</td>
                {anteil.varianten.some((x) => x.fuer) && (
                  <td className="py-3 pr-4">{v.fuer ?? "—"}</td>
                )}
                <td className="py-3 pr-4">
                  {v.zyklus}
                  {v.hinweis && (
                    <span className="block text-xs text-gray-500 mt-0.5">{v.hinweis}</span>
                  )}
                </td>
                <td className="py-3 pr-4">{v.lieferphase}</td>
                <td className="py-3 pr-4 text-right">
                  {formatEuro(v.paketpreis)}
                  {v.bieterrunde && (
                    <span className="block text-xs text-gray-500">Richtpreis</span>
                  )}
                </td>
                <td className="py-3 pr-4 text-right">{formatEuro(v.soli)}</td>
                <td className="py-3 text-right font-semibold text-foreground">
                  {formatEuro(gesamtbetrag(v))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-start gap-2 text-sm text-gray-600 bg-solawi-blue/10 p-3 rounded-lg">
        <Info className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
        <p>
          Dazu kommt der Vereinsbeitrag von {formatEuro(VEREINSBEITRAG)}/Monat — er fällt
          pro Ernteteiler:in nur einmal an, auch bei mehreren Ernteanteilen.
        </p>
      </div>

      {mitBieterrunde && (
        <div className="mt-4 bg-solawi-blue/20 p-4 rounded-lg flex gap-3">
          <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-foreground mb-1 text-sm">
              Was ist die Bieterrunde?
            </p>
            <p className="text-gray-700 text-sm">
              Bei der Jahreshauptversammlung wird ein Richtpreis festgelegt. In der
              Bieterrunde gibst du an, welchen Beitrag du stemmen kannst — über oder unter
              dem Richtpreis. So entsteht ein sozialer Ausgleich: Wer mehr geben kann,
              ermöglicht anderen die Teilnahme.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
