import { Link } from "react-router";
import { ArrowRight, Apple } from "lucide-react";
import { HofSteckbrief } from "../../components/HofSteckbrief";
import { PreisTabelle } from "../../components/PreisTabelle";
import { VerfuegbarkeitsBadge } from "../../components/VerfuegbarkeitsBadge";
import { hoefe } from "../../data/hoefe";
import { ernteanteilNach } from "../../data/ernteanteile";

const anteil = ernteanteilNach("kirschgarten-obst")!;

export function KirschgartenObst() {
  return (
    <div className="bg-white">
      <section className="bg-solawi-mauve py-16 wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge-frech mb-4 inline-block">Ernteanteil</span>
          <h1 className="text-5xl mb-4 text-foreground">Stein- & Kernobst</h1>
          <p className="text-xl text-foreground/80">Kirschgarten</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HofSteckbrief {...hoefe.kirschgarten} />

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <Apple className="w-6 h-6 text-primary" />
              <h3 className="text-2xl text-foreground">Stein- & Kernobst</h3>
              <VerfuegbarkeitsBadge verfuegbarkeit={anteil.verfuegbarkeit} />
            </div>

            <p className="text-gray-700 mb-6">
              Zusätzlich zu den Beeren wachsen im Kirschgarten verschiedene Obstbäume, die
              nun erste Erträge bringen. Steinobst gibt es ab Juli, Kernobst überwiegend im
              Herbst. In der ersten Zeit sind keine neuen Ernteanteile möglich — sobald der
              Ertrag dafür ausreicht, wird darüber informiert.
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
