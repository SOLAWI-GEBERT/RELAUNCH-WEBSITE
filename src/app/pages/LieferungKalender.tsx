import { Calendar, Truck, AlertCircle, MapPin, Clock } from "lucide-react";

export function LieferungKalender() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero — Pastell + freie Illustration */}
      <section className="bg-solawi-salmon py-16 wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="badge-frech mb-4 inline-block">Abholung & Termine</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Lieferung & Kalender
              </h1>
              <p className="text-xl text-foreground/90 max-w-3xl">
                Alle Informationen zu Lieferungen, Abholungen und kommenden Veranstaltungen
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/ablauf-depot.jpg" alt="Depot in der Stadt" className="h-[220px] object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Lieferung & Abholung */}
      <section id="lieferung" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Truck className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-gray-900">Lieferung & Abholung</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div id="wann" className="bg-solawi-mauve p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Wann wird geliefert?
              </h3>
              <p className="text-gray-700">
                Die Lieferung erfolgt wöchentlich zu festen Zeiten an die verschiedenen Depots. 
                Die genauen Lieferzeiten variieren je nach Depot.
              </p>
            </div>

            <div id="was" className="bg-solawi-mauve p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Was wird geliefert?
              </h3>
              <p className="text-gray-700">
                Je nach Saison erhalten Sie frisches Gemüse, Obst und weitere landwirtschaftliche 
                Produkte von unseren Höfen. Der Ernteanteil variiert saisonal.
              </p>
            </div>

            <div id="aenderungen" className="bg-solawi-mauve p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Änderungen/Feiertage/Ausfälle
              </h3>
              <p className="text-gray-700">
                Bei Feiertagen oder besonderen Umständen können sich Liefertermine verschieben. 
                Wir informieren Sie rechtzeitig über alle Änderungen.
              </p>
            </div>

            <div id="depot-hinweise" className="bg-solawi-mauve p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Depot-Hinweise
              </h3>
              <p className="text-gray-700">
                Bitte beachten Sie die individuellen Regeln und Öffnungszeiten Ihres Depots. 
                Weitere Informationen erhalten Sie direkt von Ihren Depotbetreuern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kalender Section */}
      <section id="kalender" className="py-16 bg-solawi-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-gray-900">Kalender</h2>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-6">Kommende Termine</h3>
            <p className="text-gray-600 mb-4">
              Hier finden Sie alle wichtigen Termine für Veranstaltungen, Mitmachaktionen, 
              Hofaktionen und Anlieferungstermine.
            </p>
            <div className="bg-solawi-mauve p-6 rounded-lg">
              <p className="text-gray-700 italic">
                Der interaktive Kalender wird in Kürze verfügbar sein.
              </p>
            </div>
          </div>

          {/* Veranstaltungsarten */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div id="veranstaltungen" className="bg-white p-6 rounded-lg shadow-sm">
              <Calendar className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Veranstaltungen</h3>
              <p className="text-sm text-gray-600">
                Feste, Märkte und gesellige Zusammenkünfte
              </p>
            </div>

            <div id="mitmachaktionen" className="bg-white p-6 rounded-lg shadow-sm">
              <Clock className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Mitmachaktionen</h3>
              <p className="text-sm text-gray-600">
                Gemeinsame Aktionen auf den Höfen
              </p>
            </div>

            <div id="hofaktionen" className="bg-white p-6 rounded-lg shadow-sm">
              <Truck className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Hofaktionen</h3>
              <p className="text-sm text-gray-600">
                Besondere Aktivitäten auf unseren Partnerhöfen
              </p>
            </div>

            <div id="anlieferung" className="bg-white p-6 rounded-lg shadow-sm">
              <MapPin className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Anlieferungstermine</h3>
              <p className="text-sm text-gray-600">
                Übersicht aller Liefertermine
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-solawi-green py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Bleiben Sie auf dem Laufenden
          </h2>
          <p className="text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
            Melden Sie sich für unseren Newsletter an, um keine Termine zu verpassen
          </p>
          <button className="bg-cta text-white px-8 py-3 font-semibold hover:bg-cta-hover transition-colors font-accent">
            Zum Newsletter
          </button>
        </div>
      </section>
    </div>
  );
}
