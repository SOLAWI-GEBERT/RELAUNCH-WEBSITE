import { Euro } from "lucide-react";
import { HofSteckbrief } from "../../components/HofSteckbrief";
import { hoefe } from "../../data/hoefe";

export function WalzWurst() {
  return (
    <div className="bg-white">
      <section className="bg-solawi-salmon py-16 wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge-frech mb-4 inline-block">Ernteanteil</span>
          <h1 className="text-5xl mb-4 text-foreground">More..Wurst</h1>
          <p className="text-xl text-foreground/80">Demeterhof Walz</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HofSteckbrief {...hoefe.walz} />

          <div className="bg-solawi-salmon/10 p-8 rounded-lg max-w-xl">
            <h3 className="text-2xl mb-3 text-foreground">More..Wurst</h3>
            <div className="space-y-2 text-gray-700">
              <p>500g/Monat: Salami, Rinderschinken, Wienerle, Bratwürste, Pfefferbeißer u.v.m.</p>
              <div className="flex items-center gap-2 mt-3">
                <Euro className="w-4 h-4 text-primary" />
                <span>Richtpreis & Logistikkosten: siehe Teilnahmevereinbarung</span>
              </div>
              <p className="text-gray-500">monatlich</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
