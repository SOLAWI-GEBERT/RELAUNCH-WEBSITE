import { Link } from "react-router";
import { ArrowRight, Sprout, Mail } from "lucide-react";
import { HofSteckbrief } from "../../components/HofSteckbrief";
import { PreisTabelle } from "../../components/PreisTabelle";
import { VerfuegbarkeitsBadge } from "../../components/VerfuegbarkeitsBadge";
import { hoefe } from "../../data/hoefe";
import { ernteanteilNach } from "../../data/ernteanteile";

const anteil = ernteanteilNach("tristan-sommer")!;

export function TristanSommergemuese() {
  return (
    <div className="bg-white">
      <section className="bg-solawi-green py-16 wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge-frech mb-4 inline-block">Ernteanteil</span>
          <h1 className="text-5xl mb-4 text-foreground">Sommergemüse</h1>
          <p className="text-xl text-foreground/80">Biohof Tristan</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HofSteckbrief {...hoefe.tristan} />

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <Sprout className="w-6 h-6 text-primary" />
              <h3 className="text-2xl text-foreground">Sommergemüse</h3>
              <VerfuegbarkeitsBadge verfuegbarkeit={anteil.verfuegbarkeit} />
            </div>

            <PreisTabelle anteil={anteil} />

            {/* Sortiment noch nicht hofseitig festgelegt — siehe design.md Open Questions */}
            <div className="grid md:grid-cols-3 gap-6 mt-6 mb-6">
              <div className="bg-solawi-green/20 p-4 rounded-lg">
                <p className="font-semibold text-foreground mb-2">Frisch aus den Folienhäusern</p>
                <p className="text-gray-700 text-sm">Spinat, Salate, Kräuter</p>
              </div>
              <div className="bg-solawi-green/20 p-4 rounded-lg">
                <p className="font-semibold text-foreground mb-2">Vom Feld</p>
                <p className="text-gray-700 text-sm">Gurken, Tomaten, Kürbis, Bohnen, Paprika</p>
              </div>
              <div className="bg-solawi-green/20 p-4 rounded-lg">
                <p className="font-semibold text-foreground mb-2">Aus dem Lager</p>
                <p className="text-gray-700 text-sm">Kartoffeln, Zwiebeln, Knoblauch</p>
              </div>
            </div>

            <div className="flex gap-3 text-sm text-gray-600 bg-solawi-blue/10 p-4 rounded-lg">
              <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p>
                <strong>So bleibst du informiert:</strong> 2 Tage vor Abholung erhältst du
                eine Mail mit dem Kisteninhalt und Neuigkeiten vom Hof. Am Abholtag kommt
                per WhatsApp oder Signal eine Nachricht mit den genauen Mengen.
              </p>
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
