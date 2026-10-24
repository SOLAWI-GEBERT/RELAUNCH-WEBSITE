import { Link } from "react-router";
import { ArrowRight, Wheat } from "lucide-react";
import { HofSteckbrief } from "../../components/HofSteckbrief";
import { PreisTabelle } from "../../components/PreisTabelle";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { hoefe } from "../../data/hoefe";
import { ernteanteilNach } from "../../data/ernteanteile";

const anteil = ernteanteilNach("walz-getreide")!;

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
            <div className="flex items-center gap-3 mb-6">
              <Wheat className="w-6 h-6 text-primary" />
              <h3 className="text-2xl text-foreground">More..Ur-Getreide</h3>
            </div>

            <PreisTabelle anteil={anteil} />

            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <div>
                <p className="font-semibold text-foreground mb-2">Sorten</p>
                <p className="text-gray-700 text-sm">
                  Schwarzes Einkorn, Sommeremmer Spelta, Weißer Urdinkel, Blonder
                  Nackthafer, Champagnerroggen, Bayernkönig Weizen, Bayerisches
                  Liebesgras
                </p>
                <p className="font-semibold text-foreground mb-2 mt-4">Produkte</p>
                <p className="text-gray-700 text-sm">
                  Halbweißmehl, Vollkornmehl, Körner, Grieß, Getreidereis, Nudeln
                </p>
              </div>
              <div>
                <ImageWithFallback
                  src="/fotos/walz-getreide.jpg"
                  alt="Ur-Getreide vom Demeterhof Walz"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/so-funktionierts" className="btn-cta">
              Jetzt Ernteanteil sichern
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
