import { Mail, User, MessageSquare } from "lucide-react";

export function KontaktAnmeldung() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero — Pastell + freie Illustration */}
      <section className="bg-solawi-blue py-16 wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="badge-frech mb-4 inline-block">Schreib uns</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Kontakt & Anmeldung
              </h1>
              <p className="text-xl text-foreground/90 max-w-3xl">
                Werde Teil unserer Gemeinschaft oder kontaktier uns bei Fragen
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/kontakt.jpg" alt="Hahn am Laptop" className="h-[220px] object-contain" />
            </div>
          </div>
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
              Werde Teil von Stadt, Land, Beides und genieße frisches,
              regionales Gemüse aus solidarischer Landwirtschaft
            </p>
          </div>

          <div className="bg-secondary/20 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              So funktioniert die Anmeldung
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Ernteanteil wählen</h4>
                  <p className="text-gray-700">
                    Entscheide dich für einen Sommer- oder Winteranteil
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Depot auswählen</h4>
                  <p className="text-gray-700">
                    Wähle ein Depot in deiner Nähe für die Abholung
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Formular ausfüllen</h4>
                  <p className="text-gray-700">
                    Fülle die Teilnahmevereinbarung aus
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Loslegen</h4>
                  <p className="text-gray-700">
                    Du erhältst eine Bestätigung und kannst ab der nächsten Saison loslegen
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-cta text-white px-8 py-4 font-semibold hover:bg-cta-hover transition-colors text-lg font-accent">
              Jetzt anmelden
            </button>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="py-16 bg-solawi-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kontaktformular
            </h2>
            <p className="text-lg text-gray-600">
              Du hast Fragen? Schreib uns!
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Dein Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="deine@email.de"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Betreff
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Worum geht es?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nachricht
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Deine Nachricht..."
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-cta text-white px-6 py-3 font-semibold hover:bg-cta-hover transition-colors font-accent"
                >
                  Nachricht senden
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Ansprechpartner */}
      <section id="ansprechpartner" className="py-16 bg-solawi-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <User className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Direkter Ansprechpartner
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <p className="text-lg font-semibold text-gray-900 mb-2">
              Sebastian Lades (Vorstand), Andreas Gebert (Kassenwart)
            </p>
            <p className="text-gray-700 mb-4">
              Vorstand und Kassenwart des Vereins „Solidarische Landwirtschaft
              Stadt, Land, Beides e.V."
            </p>
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <Mail className="w-5 h-5 text-primary" />
              <a
                href="mailto:Team.Koordination@stadt-land-beides.de"
                className="hover:text-primary transition-colors"
              >
                Team.Koordination@stadt-land-beides.de
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
