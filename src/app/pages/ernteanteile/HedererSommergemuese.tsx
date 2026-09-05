import { Package, Clock, CalendarDays, Euro, Sprout } from "lucide-react";
import { HofSteckbrief } from "../../components/HofSteckbrief";
import { BieterrundeInfo } from "../../components/BieterrundeInfo";
import { hoefe } from "../../data/hoefe";

export function HedererSommergemuese() {
  return (
    <div className="bg-white">
      <section className="bg-solawi-green py-16 wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge-frech mb-4 inline-block">Ernteanteil</span>
          <h1 className="text-5xl mb-4 text-foreground">Sommergemüse</h1>
          <p className="text-xl text-foreground/80">Demeterhof Hederer</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HofSteckbrief {...hoefe.hederer} />

          <div className="bg-solawi-green/30 p-8 rounded-lg mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Sprout className="w-6 h-6 text-primary" />
              <h3 className="text-2xl text-foreground">Sommergemüse</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <Package className="w-5 h-5 text-primary" />
                  <span>Für 1–2 Personen, wöchentliche Lieferung</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>April – September</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CalendarDays className="w-5 h-5 text-primary" />
                  <span>Einstiegspunkte: 01.04., 01.06., 01.08.</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Euro className="w-5 h-5 text-primary" />
                  <span>Richtpreis & Logistikkosten: siehe Teilnahmevereinbarung (Bieterrunde)</span>
                </div>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-2">Sortiment</p>
                <p className="text-gray-700">
                  Gurken, Tomaten, Kartoffeln, Kürbis, Salat, Knoblauch, Bohnen,
                  Paprika, Auberginen
                </p>
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <p>Max. 80 Anteile verfügbar</p>
                  <p>Probemonat: nur als Doppelmonat möglich</p>
                </div>
              </div>
            </div>
          </div>

          <BieterrundeInfo />
        </div>
      </section>
    </div>
  );
}
