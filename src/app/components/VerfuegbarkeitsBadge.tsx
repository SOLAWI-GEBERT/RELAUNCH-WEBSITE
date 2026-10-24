import { Clock, Hourglass } from "lucide-react";
import type { Verfuegbarkeit } from "../data/ernteanteile";

/**
 * Zeigt den Verfügbarkeitszustand eines Ernteanteils an.
 * Bei "verfuegbar" wird nichts gerendert (siehe openspec specs/ernteanteile,
 * Requirement "Verfügbarkeit ist erkennbar" — Szenario "Buchbarer Anteil").
 */
export function VerfuegbarkeitsBadge({ verfuegbarkeit }: { verfuegbarkeit: Verfuegbarkeit }) {
  if (verfuegbarkeit.status === "verfuegbar") return null;

  if (verfuegbarkeit.status === "geplant") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold bg-solawi-blue text-foreground rounded-full">
        <Clock className="w-3 h-3" />
        ab {verfuegbarkeit.ab}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold bg-solawi-orange text-foreground rounded-full">
      <Hourglass className="w-3 h-3" />
      Warteliste
    </span>
  );
}
