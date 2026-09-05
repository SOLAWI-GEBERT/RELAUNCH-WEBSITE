import { Wheat, Clock, Package, Euro } from "lucide-react";
import { HofSteckbrief } from "../../components/HofSteckbrief";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { hoefe } from "../../data/hoefe";

export function WalzGetreide() {
  return (
    <div className="bg-white">
      <section className="bg-solawi-orange py-16 wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge-frech mb-4 inline-block">Ernteanteil</span>
          <h1 className="text-5xl mb-4 text-foreground">More..Ur-Getreide</h1>
          <p className="text-xl text-foreground/80">Demeterhof Walz</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HofSteckbrief {...hoefe.walz} />

          <div className="bg-solawi-orange/20 p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Wheat className="w-6 h-6 text-primary" />
              <h3 className="text-2xl text-foreground">More..Ur-Getreide</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>1x pro Monat, ganzjährig</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-primary" />
                    <span>1 kg individuell zusammenstellbar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Euro className="w-4 h-4 text-primary" />
                    <span>Richtpreis & Logistikkosten: siehe Teilnahmevereinbarung</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-2">Sorten</p>
                <p className="text-gray-700 text-sm mb-4">
                  Schwarzes Einkorn, Sommeremmer Spelta, Weißer Urdinkel, Blonder
                  Nackthafer, Champagnerroggen, Bayernkönig Weizen, Bayerisches
                  Liebesgras
                </p>
                <p className="font-semibold text-foreground mb-2">Produkte</p>
                <p className="text-gray-700 text-sm">
                  Halbweißmehl, Vollkornmehl, Körner, Grieß, Getreidereis, Nudeln
                </p>
                <div className="mt-4">
                  <ImageWithFallback
                    src="/fotos/walz-getreide.jpg"
                    alt="Ur-Getreide vom Demeterhof Walz"
                    className="w-full h-32 object-cover rounded-lg"
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
