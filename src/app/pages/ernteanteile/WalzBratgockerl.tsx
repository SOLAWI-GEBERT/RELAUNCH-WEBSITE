import { Link } from "react-router";
import { ArrowRight, Beef } from "lucide-react";
import { HofSteckbrief } from "../../components/HofSteckbrief";
import { PreisTabelle } from "../../components/PreisTabelle";
import { hoefe } from "../../data/hoefe";
import { ernteanteilNach } from "../../data/ernteanteile";

const anteil = ernteanteilNach("walz-bratgockerl")!;

export function WalzBratgockerl() {
  return (
    <div className="bg-white">
      <section className="bg-solawi-salmon py-16 wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge-frech mb-4 inline-block">Ernteanteil</span>
          <h1 className="text-5xl mb-4 text-foreground">More..Bratgockerl</h1>
          <p className="text-xl text-foreground/80">Demeterhof Walz</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HofSteckbrief {...hoefe.walz} />

          <div className="bg-solawi-salmon/10 p-8 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Beef className="w-5 h-5 text-primary" />
              <h3 className="text-2xl text-foreground">More..Bratgockerl</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Freilandhaltung — nicht nach 30 Tagen geschlachtet, sondern artgerecht
              aufgezogen.
            </p>

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
