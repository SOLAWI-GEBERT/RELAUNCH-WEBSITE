import { Info } from "lucide-react";
import { formatEuro, formatSpanne, hatBieterrunde, TNV, VEREINSBEITRAG, type Ernteanteil } from "../data/ernteanteile";

/**
 * Richtwerte für einen Ernteanteil: je Variante Größe, Zyklus, Lieferphase und eine Spanne
 * in Euro pro Monat (inkl. solidarischem Beitrag). Verbindlich ist die TNV (siehe openspec
 * specs/harvest-shares, Requirements "Preise als Richtwert-Spannen" und "TNV als verbindliche
 * Preisquelle"). Eine einzelne Variante wird als Zeile statt als Tabelle gezeigt.
 */
export function PreisTabelle({ anteil }: { anteil: Ernteanteil }) {
  const mitBieterrunde = hatBieterrunde(anteil);
  const einzeln = anteil.varianten.length === 1 ? anteil.varianten[0] : null;

  return (
    <div>
      {einzeln ? (
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-y border-gray-200 py-4">
          <p className="text-gray-700">
            <span className="font-semibold">{einzeln.groesse}</span>
            {einzeln.fuer && <> · {einzeln.fuer}</>}
            {" · "}
            {einzeln.zyklus}
            {" · "}
            {einzeln.lieferphase}
          </p>
          <p className="text-xl font-semibold text-foreground">
            {formatSpanne(einzeln.richtwert)}
            <span className="text-sm font-normal text-gray-500"> pro Monat</span>
          </p>
          {einzeln.hinweis && <p className="w-full text-xs text-gray-500">{einzeln.hinweis}</p>}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-foreground">Größe</th>
                <th className="py-3 pr-4 text-foreground">Zyklus</th>
                <th className="py-3 pr-4 text-foreground">Lieferphase</th>
                <th className="py-3 text-foreground text-right">Richtwert pro Monat</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {anteil.varianten.map((v, i) => (
                <tr key={i} className="border-b border-gray-100 align-top">
                  <td className="py-3 pr-4">
                    <span className="font-semibold">{v.groesse}</span>
                    {v.fuer && <span className="block text-xs text-gray-500 mt-0.5">{v.fuer}</span>}
                  </td>
                  <td className="py-3 pr-4">
                    {v.zyklus}
                    {v.hinweis && (
                      <span className="block text-xs text-gray-500 mt-0.5">{v.hinweis}</span>
                    )}
                  </td>
                  <td className="py-3 pr-4">{v.lieferphase}</td>
                  <td className="py-3 text-right font-semibold text-foreground">
                    {formatSpanne(v.richtwert)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-4 flex items-start gap-2 text-sm text-gray-600 bg-solawi-blue/10 p-3 rounded-lg">
        <Info className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
        <p>
          <strong>Richtwerte</strong>, inklusive solidarischem Beitrag. Verbindlich ist die{" "}
          <a href={TNV.pdf} target="_blank" rel="noreferrer" className="underline">
            Teilnahmevereinbarung (TNV Version {TNV.version}, Stand {TNV.stand})
          </a>
          . Dazu kommt der Vereinsbeitrag von {formatEuro(VEREINSBEITRAG)}/Monat — er fällt
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
