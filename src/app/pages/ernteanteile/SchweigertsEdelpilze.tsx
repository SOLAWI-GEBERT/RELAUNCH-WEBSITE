import { Link } from "react-router";
import { ArrowRight, Soup } from "lucide-react";
import { HofSteckbrief } from "../../components/HofSteckbrief";
import { PreisTabelle } from "../../components/PreisTabelle";
import { hoefe } from "../../data/hoefe";
import { ernteanteilNach } from "../../data/ernteanteile";

const anteil = ernteanteilNach("schweigerts-edelpilze")!;

export function SchweigertsEdelpilze() {
  return (
    <div className="bg-white">
      <section className="bg-solawi-orange py-16 wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge-frech mb-4 inline-block">Ernteanteil</span>
          <h1 className="text-5xl mb-4 text-foreground">Bio..Edelpilze</h1>
          <p className="text-xl text-foreground/80">Schweigerts Hof</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HofSteckbrief {...hoefe.schweigerts} />

          <div className="bg-solawi-orange/20 p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-6">
              <Soup className="w-6 h-6 text-primary" />
              <h3 className="text-2xl text-foreground">Bio..Edelpilze</h3>
            </div>

            <PreisTabelle anteil={anteil} />

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-foreground mb-2">Sortiment</p>
                <p className="text-gray-700 text-sm">
                  Limonen- und Kräuterseitlinge, Austernpilze und Shiitake — in der Regel
                  1–3 Sorten pro Woche, je nach Erntereife.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Kommunikation</p>
                <p className="text-gray-700 text-sm">
                  Welche Pilze es in welcher Woche und Menge gibt, erfährst du mit der
                  wöchentlichen Kisteninfo über Tristans Biohof.
                </p>
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
