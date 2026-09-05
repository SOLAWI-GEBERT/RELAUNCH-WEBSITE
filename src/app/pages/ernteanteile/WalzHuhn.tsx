import { Egg, Clock, Euro } from "lucide-react";
import { HofSteckbrief } from "../../components/HofSteckbrief";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { hoefe } from "../../data/hoefe";

export function WalzHuhn() {
  return (
    <div className="bg-white">
      <section className="bg-solawi-salmon py-16 wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge-frech mb-4 inline-block">Ernteanteil</span>
          <h1 className="text-5xl mb-4 text-foreground">More..Huhn</h1>
          <p className="text-xl text-foreground/80">Demeterhof Walz</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HofSteckbrief {...hoefe.walz} />

          <div className="bg-solawi-salmon/20 p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Egg className="w-6 h-6 text-primary" />
              <h3 className="text-2xl text-foreground">More..Huhn</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  Alle Eier deiner Henne plus anteilmäßig Bruderhahn, Suppenhenne und
                  Bolognese. Wer Eier bezieht, übernimmt ganzheitliche Verantwortung
                  für Henne, Bruder und Ei.
                </p>
              </div>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>2x pro Monat, ganzjährig</span>
                </div>
                <div className="flex items-center gap-2">
                  <Euro className="w-5 h-5 text-primary" />
                  <span>Richtpreis & Logistikkosten: siehe Teilnahmevereinbarung</span>
                </div>
                <div className="h-[200px] rounded-lg overflow-hidden shadow-md">
                  <ImageWithFallback
                    src="/fotos/walz-hennen.jpg"
                    alt="Freilandhühner am Demeterhof Walz"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
