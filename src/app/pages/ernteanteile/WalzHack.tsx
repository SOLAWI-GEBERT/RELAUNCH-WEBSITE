import { Beef, Euro } from "lucide-react";
import { HofSteckbrief } from "../../components/HofSteckbrief";
import { hoefe } from "../../data/hoefe";

export function WalzHack() {
  return (
    <div className="bg-white">
      <section className="bg-solawi-salmon py-16 wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge-frech mb-4 inline-block">Ernteanteil</span>
          <h1 className="text-5xl mb-4 text-foreground">More..Hack</h1>
          <p className="text-xl text-foreground/80">Demeterhof Walz</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HofSteckbrief {...hoefe.walz} />

          <div className="bg-solawi-salmon/10 p-8 rounded-lg max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <Beef className="w-5 h-5 text-primary" />
              <h3 className="text-2xl text-foreground">More..Hack</h3>
            </div>
            <div className="space-y-2 text-gray-700">
              <p>500g/Monat, Aberdeen Angus. Weidehaltung, Muttertierhaltung, nur Raufutter.</p>
              <div className="flex items-center gap-2 mt-3">
                <Euro className="w-4 h-4 text-primary" />
                <span>Richtpreis & Logistikkosten: siehe Teilnahmevereinbarung</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
