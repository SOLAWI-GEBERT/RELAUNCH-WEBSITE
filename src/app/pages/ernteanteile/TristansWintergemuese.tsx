import { Sprout, Euro, Mail } from "lucide-react";
import { HofSteckbrief } from "../../components/HofSteckbrief";
import { hoefe } from "../../data/hoefe";

export function TristansWintergemuese() {
  return (
    <div className="bg-white">
      <section className="bg-solawi-green py-16 wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge-frech mb-4 inline-block">Ernteanteil</span>
          <h1 className="text-5xl mb-4 text-foreground">Wintergemüse</h1>
          <p className="text-xl text-foreground/80">Biohof Tristan</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HofSteckbrief {...hoefe.tristan} />

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Sprout className="w-6 h-6 text-primary" />
              <h3 className="text-2xl text-foreground">Wintergemüse</h3>
              <span className="text-sm text-gray-500">Oktober – März</span>
            </div>

            {/* Varianten-Tabelle */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-3 pr-4 text-foreground">Variante</th>
                    <th className="py-3 pr-4 text-foreground">Für</th>
                    <th className="py-3 text-foreground">Zyklus</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-semibold">Ganzer Anteil</td>
                    <td className="py-3 pr-4">2–4 Pers.</td>
                    <td className="py-3">wöchentlich</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-semibold">Halber Anteil</td>
                    <td className="py-3 pr-4">1–2 Pers.</td>
                    <td className="py-3">14-tägig</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold">Kleiner Anteil</td>
                    <td className="py-3 pr-4">1–2 Pers.</td>
                    <td className="py-3">wöchentlich</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-center gap-2 text-gray-700 mb-2">
              <Euro className="w-5 h-5 text-primary" />
              <span>Richtpreis & Logistikkosten: siehe Teilnahmevereinbarung</span>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Probemonat: jeden Monat zum 1. möglich.
            </p>

            {/* Kisteninhalte */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-solawi-green/20 p-4 rounded-lg">
                <p className="font-semibold text-foreground mb-2">Frisch aus den Folienhäusern</p>
                <p className="text-gray-700 text-sm">Spinat, Salate, Kräuter</p>
              </div>
              <div className="bg-solawi-green/20 p-4 rounded-lg">
                <p className="font-semibold text-foreground mb-2">Vom Feld</p>
                <p className="text-gray-700 text-sm">Lauch, Rosenkohl, Palmkohl</p>
              </div>
              <div className="bg-solawi-green/20 p-4 rounded-lg">
                <p className="font-semibold text-foreground mb-2">Aus dem Lager</p>
                <p className="text-gray-700 text-sm">
                  Karotten, Pastinaken, diverse Bete, Kraut, Zwiebeln, Kürbis, Kartoffeln
                </p>
              </div>
            </div>

            {/* Kommunikation */}
            <div className="flex gap-3 text-sm text-gray-600 bg-solawi-blue/10 p-4 rounded-lg">
              <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p>
                <strong>So bleibst du informiert:</strong> 2 Tage vor Abholung erhältst du eine
                Mail mit dem Kisteninhalt und Neuigkeiten vom Hof. Am Abholtag kommt per
                WhatsApp oder Signal eine Nachricht mit den genauen Mengen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
