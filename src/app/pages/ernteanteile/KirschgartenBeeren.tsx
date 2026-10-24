import { Link } from "react-router";
import { ArrowRight, Cherry } from "lucide-react";
import { HofSteckbrief } from "../../components/HofSteckbrief";
import { PreisTabelle } from "../../components/PreisTabelle";
import { hoefe } from "../../data/hoefe";
import { ernteanteilNach } from "../../data/ernteanteile";

const anteil = ernteanteilNach("kirschgarten-beeren")!;

export function KirschgartenBeeren() {
  return (
    <div className="bg-white">
      <section className="bg-solawi-mauve py-16 wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge-frech mb-4 inline-block">Ernteanteil</span>
          <h1 className="text-5xl mb-4 text-foreground">Bio..Beeren</h1>
          <p className="text-xl text-foreground/80">Kirschgarten</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HofSteckbrief {...hoefe.kirschgarten} />

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Cherry className="w-6 h-6 text-primary" />
              <h3 className="text-2xl text-foreground">Bio..Beeren</h3>
            </div>

            <PreisTabelle anteil={anteil} />

            <div className="mt-6">
              <p className="font-semibold text-foreground mb-2">Sortiment</p>
              <p className="text-gray-700">
                Johannisbeeren (rot, weiß, schwarz), Himbeeren (rot, schwarz, gelb),
                Stachelbeeren, Brombeeren, Himbeer-Brombeeren, Jostabeeren, Schwarze
                Honigbeeren, Japanische Weinbeeren, Aronia
              </p>
              <div className="mt-4 space-y-1 text-sm text-gray-600">
                <p>Max. 30 Anteile verfügbar</p>
                <p>Anmeldeschluss: 15. des Vormonats</p>
                <p className="font-semibold text-foreground">
                  Am besten schon zum 1. Juni anmelden!
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
