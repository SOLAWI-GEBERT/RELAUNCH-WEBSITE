import { useState } from "react";
import { Mail, Phone, User, MapPin, FileText, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Anmeldung() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white min-h-[600px] flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <div className="w-20 h-20 bg-solawi-green rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl mb-6 text-foreground">
            Vielen Dank für deine Anmeldung!
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Wir haben deine Anmeldung erhalten und werden uns innerhalb der nächsten 3 Werktage bei dir melden.
          </p>
          <p className="text-gray-600">
            Du erhältst eine Bestätigungs-E-Mail mit weiteren Informationen zur Mitgliedschaft 
            und den nächsten Schritten.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero — Pastell + freie Illustration */}
      <section className="bg-solawi-salmon py-16 wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="badge-frech mb-4 inline-block">Jetzt starten</span>
              <h1 className="text-5xl mb-4 text-foreground">
                Anmeldung
              </h1>
              <p className="text-xl text-foreground/80">
                Werde Teil unserer Gemeinschaft
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/ablauf-kontakt.jpg" alt="Kontakt" className="h-[250px] object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Ansprechpartner */}
      <section className="py-12 bg-solawi-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl mb-4 text-foreground">
              Deine Ansprechpartner
            </h2>
            <p className="text-gray-600">
              Bei Fragen zur Anmeldung helfen wir dir gerne weiter
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg mb-2 text-foreground">Anna Müller</h3>
              <p className="text-sm text-gray-600 mb-3">Mitgliederbetreuung</p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center justify-center gap-2 text-gray-700">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:anna@stadt-land-beides.de" className="hover:text-primary">
                    anna@stadt-land-beides.de
                  </a>
                </p>
                <p className="flex items-center justify-center gap-2 text-gray-700">
                  <Phone className="w-4 h-4" />
                  <span>0123 - 456 789 01</span>
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg mb-2 text-foreground">Michael Schmidt</h3>
              <p className="text-sm text-gray-600 mb-3">Depotkoordination</p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center justify-center gap-2 text-gray-700">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:michael@stadt-land-beides.de" className="hover:text-primary">
                    michael@stadt-land-beides.de
                  </a>
                </p>
                <p className="flex items-center justify-center gap-2 text-gray-700">
                  <Phone className="w-4 h-4" />
                  <span>0123 - 456 789 02</span>
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg mb-2 text-foreground">Sarah Weber</h3>
              <p className="text-sm text-gray-600 mb-3">Allgemeine Fragen</p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center justify-center gap-2 text-gray-700">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:info@stadt-land-beides.de" className="hover:text-primary">
                    info@stadt-land-beides.de
                  </a>
                </p>
                <p className="flex items-center justify-center gap-2 text-gray-700">
                  <Phone className="w-4 h-4" />
                  <span>0123 - 456 789 00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anmeldeformular */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-foreground">
              Anmeldeformular
            </h2>
            <p className="text-gray-600">
              Fülle das Formular aus, um dich für eine Mitgliedschaft anzumelden
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
            {/* Persönliche Daten */}
            <div className="mb-8">
              <h3 className="text-2xl mb-6 text-foreground">Persönliche Daten</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Vorname *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Max"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Nachname *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Mustermann"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="max@example.com"
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="0123 456789"
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Straße & Hausnummer *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Musterstraße 123"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    PLZ *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="12345"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Ort *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Musterstadt"
                  />
                </div>
              </div>
            </div>

            {/* Ernteanteil wählen */}
            <div className="mb-8 pt-8 border-t border-gray-200">
              <h3 className="text-2xl mb-6 text-foreground">Ernteanteil wählen</h3>
              
              <div className="space-y-4">
                <label className="flex items-start gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-primary hover:bg-secondary/20 transition-colors">
                  <input
                    type="radio"
                    name="ernteanteil"
                    value="sommer"
                    className="mt-1"
                    required
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Sommergemüse (45€/Monat)</p>
                    <p className="text-sm text-gray-600">Mai bis Oktober - Reimehof</p>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-primary hover:bg-secondary/20 transition-colors">
                  <input
                    type="radio"
                    name="ernteanteil"
                    value="winter"
                    className="mt-1"
                    required
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Wintergemüse (40€/Monat)</p>
                    <p className="text-sm text-gray-600">November bis April - Biohof Walz</p>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-4 border-2 border-primary bg-secondary/20 rounded-lg cursor-pointer hover:bg-primary/10 transition-colors">
                  <input
                    type="radio"
                    name="ernteanteil"
                    value="ganzjahr"
                    className="mt-1"
                    required
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">
                      Ganzjahrespaket (75€/Monat)
                      <span className="ml-2 bg-primary text-white px-2 py-1 rounded-full text-xs">Empfohlen</span>
                    </p>
                    <p className="text-sm text-gray-600">Sommer- und Wintergemüse - Beide Höfe</p>
                  </div>
                </label>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Zusatzanteile (optional)</h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Obst vom Hederer (20€/Monat)</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Käse von Kerschbaum (15€/Monat)</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Eier Gallini Fellici (8€/Monat)</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Depot wählen */}
            <div className="mb-8 pt-8 border-t border-gray-200">
              <h3 className="text-2xl mb-6 text-foreground">Depot wählen</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Bevorzugtes Depot *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Bitte wählen...</option>
                  <option value="innenstadt">Depot Innenstadt - Donnerstag 16-19 Uhr</option>
                  <option value="nordstadt">Depot Nordstadt - Freitag 15-18 Uhr</option>
                  <option value="suedviertel">Depot Südviertel - Mittwoch 17-20 Uhr (ausgebucht)</option>
                  <option value="westend">Depot Westend - Donnerstag 15-18 Uhr</option>
                  <option value="altstadt">Depot Altstadt - Freitag 16-19 Uhr</option>
                </select>
              </div>
            </div>

            {/* Nachricht */}
            <div className="mb-8 pt-8 border-t border-gray-200">
              <h3 className="text-2xl mb-6 text-foreground">Nachricht (optional)</h3>
              
              <textarea
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Hast du Fragen oder Anmerkungen? Schreib uns hier..."
              ></textarea>
            </div>

            {/* Teilnahmevereinbarung */}
            <div className="mb-8 pt-8 border-t border-gray-200">
              <div className="bg-secondary/20 p-6 rounded-lg mb-6">
                <div className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Teilnahmevereinbarung</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Bitte lies die Teilnahmevereinbarung durch und akzeptiere sie, um die 
                      Anmeldung abzuschließen.
                    </p>
                    <a 
                      href="#" 
                      className="text-primary hover:text-foreground text-sm underline"
                    >
                      Teilnahmevereinbarung als PDF herunterladen
                    </a>
                  </div>
                </div>
              </div>

              <label className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  required 
                  className="w-5 h-5 text-primary mt-1"
                />
                <span className="text-gray-700">
                  Ich habe die Teilnahmevereinbarung gelesen und akzeptiere sie. *
                </span>
              </label>

              <label className="flex items-start gap-3 mt-4">
                <input 
                  type="checkbox" 
                  required 
                  className="w-5 h-5 text-primary mt-1"
                />
                <span className="text-gray-700">
                  Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu. *
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-cta hover:bg-cta-hover text-white px-8 py-4 transition-colors text-lg font-accent"
              >
                Verbindlich anmelden
              </button>
              <p className="text-sm text-gray-600 text-center mt-4">
                Nach dem Absenden erhältst du eine Bestätigungsmail mit weiteren Informationen.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Weitere Infos */}
      <section className="py-20 bg-solawi-salmon-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-8 text-foreground text-center">
            Häufig gestellte Fragen
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg mb-2 text-foreground">Wann kann ich starten?</h3>
              <p className="text-gray-700">
                Der Einstieg ist zum Beginn der jeweiligen Saison möglich. Sommergemüse startet 
                im Mai, Wintergemüse im November. Bei freien Plätzen ist auch ein Einstieg während 
                der laufenden Saison möglich.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg mb-2 text-foreground">Wie lange bin ich gebunden?</h3>
              <p className="text-gray-700">
                Die Mitgliedschaft läuft für eine Saison (6 Monate). Eine Kündigung ist mit 4 Wochen 
                Kündigungsfrist zum Saisonende möglich. Das Ganzjahrespaket verlängert sich automatisch, 
                kann aber jederzeit mit 8 Wochen Frist gekündigt werden.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg mb-2 text-foreground">Kann ich auch verschenken oder spenden?</h3>
              <p className="text-gray-700">
                Ja! Wenn du im Urlaub bist oder deine Ernte nicht abholen kannst, darfst du deinen 
                Anteil gerne an Freunde weitergeben oder für unseren Spendentopf zur Verfügung stellen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
