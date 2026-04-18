import { Mail, Phone, MapPin, User, MessageSquare, HelpCircle } from "lucide-react";

export function KontaktAnmeldung() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kontakt & Anmeldung
          </h1>
          <p className="text-xl text-green-50 max-w-3xl">
            Werden Sie Teil unserer Gemeinschaft oder kontaktieren Sie uns bei Fragen
          </p>
        </div>
      </section>

      {/* Anmeldung Section */}
      <section id="anmeldung" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Anmeldung / Teilnahmevereinbarung
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Werden Sie Teil von Stadt, Land, Beides und genießen Sie frisches, 
              regionales Gemüse aus solidarischer Landwirtschaft
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-green-800">
              So funktioniert die Anmeldung
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Ernteanteil wählen</h4>
                  <p className="text-gray-700">
                    Entscheiden Sie sich für einen Sommer- oder Winteranteil
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Depot auswählen</h4>
                  <p className="text-gray-700">
                    Wählen Sie ein Depot in Ihrer Nähe für die Abholung
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Formular ausfüllen</h4>
                  <p className="text-gray-700">
                    Füllen Sie die Teilnahmevereinbarung aus
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Loslegen</h4>
                  <p className="text-gray-700">
                    Sie erhalten eine Bestätigung und können ab der nächsten Saison loslegen
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg">
              Jetzt anmelden
            </button>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <MessageSquare className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kontaktformular
            </h2>
            <p className="text-lg text-gray-600">
              Sie haben Fragen? Schreiben Sie uns!
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="ihre@email.de"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Betreff
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Worum geht es?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nachricht
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Ihre Nachricht..."
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Nachricht senden
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Ansprechpersonen */}
      <section id="ansprechpersonen" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <User className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ansprechpersonen
            </h2>
            <p className="text-lg text-gray-600">
              Unser Team steht Ihnen gerne zur Verfügung
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Allgemeine Fragen</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-green-600 mt-1" />
                  <span>info@stadt-land-beides.de</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-green-600 mt-1" />
                  <span>0123 / 456789</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Koordination</h3>
              <div className="space-y-3 text-gray-700">
                <p className="font-medium">Max Mustermann</p>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-green-600 mt-1" />
                  <span>koordination@stadt-land-beides.de</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Depots</h3>
              <div className="space-y-3 text-gray-700">
                <p className="font-medium">Anna Schmidt</p>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-green-600 mt-1" />
                  <span>depots@stadt-land-beides.de</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Häufig gestellte Fragen (FAQ)
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                Was kostet ein Ernteanteil?
              </h3>
              <p className="text-gray-700">
                Die Kosten variieren je nach Ernteanteil. Ein Sommergemüseanteil kostet 
                beispielsweise ca. 20-25 Euro pro Woche. Detaillierte Informationen finden 
                Sie auf der Seite "Mitmachen".
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                Wie lange bin ich gebunden?
              </h3>
              <p className="text-gray-700">
                Die Teilnahme ist saisonabhängig (Sommer oder Winter). Eine Kündigung ist 
                zum Saisonende mit einer Frist von 4 Wochen möglich.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                Wo kann ich mein Gemüse abholen?
              </h3>
              <p className="text-gray-700">
                Wir haben verschiedene Depots in der Region. Eine Übersicht aller Standorte 
                finden Sie auf der Seite "Mitmachen" unter "Depotstandorte".
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                Muss ich auf dem Hof mitarbeiten?
              </h3>
              <p className="text-gray-700">
                Mitarbeit ist erwünscht, aber nicht verpflichtend. Es gibt regelmäßig 
                Mitmachaktionen, bei denen Sie die Höfe kennenlernen und mithelfen können.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
