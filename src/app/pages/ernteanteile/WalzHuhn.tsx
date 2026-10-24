import { Link } from "react-router";
import { ArrowRight, Egg } from "lucide-react";
import { HofSteckbrief } from "../../components/HofSteckbrief";
import { PreisTabelle } from "../../components/PreisTabelle";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { hoefe } from "../../data/hoefe";
import { ernteanteilNach } from "../../data/ernteanteile";

const anteil = ernteanteilNach("walz-huhn")!;

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
            <div className="flex items-center gap-3 mb-6">
              <Egg className="w-6 h-6 text-primary" />
              <h3 className="text-2xl text-foreground">More..Huhn</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <p className="text-gray-700">
                Alle Eier deiner Henne plus anteilmäßig Bruderhahn, Suppenhenne und
                Bolognese. Wer Eier bezieht, übernimmt ganzheitliche Verantwortung für
                Henne, Bruder und Ei.
              </p>
              <div className="h-[160px] rounded-lg overflow-hidden shadow-md">
                <ImageWithFallback
                  src="/fotos/walz-hennen.jpg"
                  alt="Freilandhühner am Demeterhof Walz"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <PreisTabelle anteil={anteil} />
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
