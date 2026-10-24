import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { HofSteckbrief } from "../../components/HofSteckbrief";
import { PreisTabelle } from "../../components/PreisTabelle";
import { hoefe } from "../../data/hoefe";
import { ernteanteilNach } from "../../data/ernteanteile";

const anteil = ernteanteilNach("walz-wurst")!;

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

          <div className="bg-solawi-salmon/10 p-8 rounded-lg">
            <h3 className="text-2xl mb-4 text-foreground">More..Wurst</h3>
            <p className="text-gray-700 mb-6">
              500g/Monat: Salami, Rinderschinken, Wienerle, Bratwürste, Pfefferbeißer u.v.m.
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
