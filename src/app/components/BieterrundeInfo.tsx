import { Info } from "lucide-react";

export function BieterrundeInfo() {
  return (
    <div className="bg-solawi-blue/20 p-6 rounded-lg flex gap-4">
      <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
      <div>
        <p className="font-semibold text-foreground mb-1">Was ist die Bieterrunde?</p>
        <p className="text-gray-700">
          Bei der Jahreshauptversammlung wird ein Richtpreis festgelegt. In der
          Bieterrunde gibst du an, welchen Beitrag du stemmen kannst — über oder
          unter dem Richtpreis. So entsteht ein sozialer Ausgleich: Wer mehr geben
          kann, ermöglicht anderen die Teilnahme.
        </p>
      </div>
    </div>
  );
}
