import { Link } from "react-router";
import { ArrowRight, Users, MapPin, Package, Heart, Calendar, FileText } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Mitmachen() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1709634500517-9ed519597134?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhcm1pbmclMjBjb21tdW5pdHklMjBwZW9wbGV8ZW58MXx8fHwxNzcyNDczODEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Gemeinschaft"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl mb-4">
            Wie kann ich mitmachen?
          </h1>
          <p className="text-xl">
            Werde Teil unserer Gemeinschaft und genieße frische, regionale Lebensmittel
          </p>
        </div>
      </section>

      {/* Übersicht */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-green-900">
              So wirst du Mitglied
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In wenigen Schritten zur Mitgliedschaft bei Stadt, Land, Beides
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                1
              </div>
              <h3 className="text-lg mb-2 text-green-900">Informieren</h3>
              <p className="text-gray-600 text-sm">
                Lerne unsere Höfe und Angebote kennen
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                2
              </div>
              <h3 className="text-lg mb-2 text-green-900">Ernteanteil wählen</h3>
              <p className="text-gray-600 text-sm">
                Entscheide dich für deine Höfe
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                3
              </div>
              <h3 className="text-lg mb-2 text-green-900">Depot finden</h3>
              <p className="text-gray-600 text-sm">
                Wähle ein Depot in deiner Nähe
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                4
              </div>
              <h3 className="text-lg mb-2 text-green-900">Anmelden</h3>
              <p className="text-gray-600 text-sm">
                Fülle das Anmeldeformular aus
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/anmeldung"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg transition-colors"
            >
              Jetzt anmelden
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Hofbeteiligungen */}
      <section id="hofbeteiligungen" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-green-900">
            Hofbeteiligungen & Kosten
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl mb-2 text-green-900">Sommergemüse</h3>
                <div className="text-4xl text-green-700 mb-2">45€</div>
                <div className="text-gray-600">pro Monat</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Wöchentlich 5-7 kg frisches Gemüse</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Mai bis Oktober (6 Monate)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Vom Reimehof</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-green-600">
              <div className="text-center mb-6">
                <div className="bg-green-600 text-white text-sm px-3 py-1 rounded-full inline-block mb-2">
                  Beliebt
                </div>
                <h3 className="text-2xl mb-2 text-green-900">Ganzjahrespaket</h3>
                <div className="text-4xl text-green-700 mb-2">75€</div>
                <div className="text-gray-600">pro Monat</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Sommer- und Wintergemüse</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Ganzjährig frische Ernte</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Reimehof + Biohof Walz</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl mb-2 text-green-900">Wintergemüse</h3>
                <div className="text-4xl text-green-700 mb-2">40€</div>
                <div className="text-gray-600">pro Monat</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Wöchentlich 5-7 kg Wintergemüse</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">November bis April (6 Monate)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Vom Biohof Walz</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl mb-4 text-green-900">Zusatzanteile (optional)</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="font-semibold text-green-900 mb-1">Obst vom Hederer</p>
                <p className="text-gray-700">20€ / Monat (Juni - November)</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="font-semibold text-green-900 mb-1">Käse von Kerschbaum</p>
                <p className="text-gray-700">15€ / Monat</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="font-semibold text-green-900 mb-1">Eier Gallini Fellici</p>
                <p className="text-gray-700">8€ / Monat (6 Eier/Woche)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ernteteile */}
      <section id="ernteteile" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-green-900">
            Verfügbare Ernteteile
          </h2>
          
          <div className="bg-green-50 p-8 rounded-lg mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl mb-4 text-green-900">Aktuell verfügbar</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg flex justify-between items-center">
                    <span className="text-gray-700">Sommergemüse</span>
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">12 frei</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg flex justify-between items-center">
                    <span className="text-gray-700">Wintergemüse</span>
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">8 frei</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg flex justify-between items-center">
                    <span className="text-gray-700">Obstanteil</span>
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">5 frei</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl mb-4 text-green-900">Warteliste</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg flex justify-between items-center">
                    <span className="text-gray-700">Käseanteil</span>
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm">Warteliste</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg flex justify-between items-center">
                    <span className="text-gray-700">Eieranteil</span>
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm">Warteliste</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Die Zahlen werden monatlich aktualisiert. Bei Interesse trage dich in die Warteliste ein.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depots */}
      <section id="depots" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-green-900">
              Unsere Depot-Standorte
            </h2>
            <p className="text-xl text-gray-600">
              Wähle ein Depot in deiner Nähe für die wöchentliche Abholung
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg text-green-900 mb-1">Depot Innenstadt</h3>
                  <p className="text-sm text-gray-600">Hauptstraße 45, 12345 Musterstadt</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Abholzeit:</strong> Donnerstag 16-19 Uhr
              </p>
              <p className="text-sm text-gray-700">
                <strong>Kapazität:</strong> 35 Mitglieder (5 Plätze frei)
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg text-green-900 mb-1">Depot Nordstadt</h3>
                  <p className="text-sm text-gray-600">Grüner Weg 12, 12345 Musterstadt</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Abholzeit:</strong> Freitag 15-18 Uhr
              </p>
              <p className="text-sm text-gray-700">
                <strong>Kapazität:</strong> 25 Mitglieder (10 Plätze frei)
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg text-green-900 mb-1">Depot Südviertel</h3>
                  <p className="text-sm text-gray-600">Lindenallee 8, 12345 Musterstadt</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Abholzeit:</strong> Mittwoch 17-20 Uhr
              </p>
              <p className="text-sm text-gray-700">
                <strong>Kapazität:</strong> 30 Mitglieder (vollständig belegt)
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg text-green-900 mb-1">Depot Westend</h3>
                  <p className="text-sm text-gray-600">Parkstraße 23, 12345 Musterstadt</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Abholzeit:</strong> Donnerstag 15-18 Uhr
              </p>
              <p className="text-sm text-gray-700">
                <strong>Kapazität:</strong> 20 Mitglieder (8 Plätze frei)
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg text-green-900 mb-1">Depot Altstadt</h3>
                  <p className="text-sm text-gray-600">Marktplatz 5, 12345 Musterstadt</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Abholzeit:</strong> Freitag 16-19 Uhr
              </p>
              <p className="text-sm text-gray-700">
                <strong>Kapazität:</strong> 40 Mitglieder (2 Plätze frei)
              </p>
            </div>

            <div className="bg-green-100 p-6 rounded-lg shadow-md border-2 border-green-600">
              <div className="flex items-start gap-3 mb-4">
                <Heart className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg text-green-900 mb-1">Eigenes Depot gründen</h3>
                  <p className="text-sm text-gray-700">
                    Du findest kein passendes Depot? Gründe dein eigenes!
                  </p>
                </div>
              </div>
              <a href="#" className="text-green-700 hover:text-green-800 inline-flex items-center gap-1">
                Mehr erfahren
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl mb-4 text-green-900 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Wie macht man ein Depot?
            </h3>
            <p className="text-gray-700 mb-4">
              Ein Depot zu betreuen ist einfacher als du denkst! Du benötigst nur einen Raum 
              (z.B. Keller, Garage) und 3-4 Stunden Zeit pro Woche. Wir unterstützen dich beim 
              Aufbau und bei der Organisation.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-green-700 hover:text-green-800"
            >
              <FileText className="w-5 h-5" />
              Anleitung als PDF herunterladen
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Was erwartet mich */}
      <section id="erwartungen" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-green-900">
            Was erwartet mich?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Als Mitglied erhältst du jede Woche frisches, saisonales Gemüse und kannst dich 
              aktiv in die Gemeinschaft einbringen. Hier ein Überblick über deine Rechte und 
              Pflichten:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl mb-4 text-green-900">Das bekommst du</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Package className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
                    <span>Wöchentlich frisches Bio-Gemüse nach Saison</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
                    <span>Zugang zu einer lebendigen Gemeinschaft</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Calendar className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
                    <span>Einladungen zu Hofaktionen und Veranstaltungen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
                    <span>Newsletter mit Rezepten und Infos</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl mb-4 text-green-900">Das erwarten wir</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Pünktliche Zahlung des monatlichen Beitrags</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Regelmäßige Abholung am Depot</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Optional: 2-4 Hofaktionen pro Jahr (freiwillig)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Respektvoller Umgang in der Gemeinschaft</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mitarbeit und Engagement */}
      <section id="engagement" className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-green-900">
            Mitarbeit & Engagement
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Stadt, Land, Beides lebt von der aktiven Beteiligung seiner Mitglieder. 
              Es gibt viele Möglichkeiten, sich einzubringen:
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl mb-3 text-green-900">Hofaktionen</h3>
                <p className="text-gray-700">
                  3-4 Mal im Jahr finden Mitmach-Aktionen auf den Höfen statt: Pflanzen, Jäten, 
                  Ernten oder einfach gemeinsam Zeit verbringen. Die Teilnahme ist freiwillig, 
                  aber sehr bereichernd!
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl mb-3 text-green-900">Depotbetreuung</h3>
                <p className="text-gray-700">
                  Jedes Depot braucht 2-3 Betreuer*innen, die die Gemüsekisten auspacken, 
                  verteilen und den Raum pflegen. Eine tolle Möglichkeit, die Gemeinschaft 
                  am Depot mitzugestalten.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl mb-3 text-green-900">Fahrdienst</h3>
                <p className="text-gray-700">
                  Wir brauchen Menschen mit Führerschein und größerem Auto/Transporter, die 
                  gelegentlich bei der Gemüseauslieferung helfen können (wird vergütet).
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl mb-3 text-green-900">Vereinsarbeit</h3>
                <p className="text-gray-700">
                  Wir suchen immer Menschen, die sich in Arbeitsgruppen engagieren: 
                  Öffentlichkeitsarbeit, Veranstaltungsorganisation, IT, Finanzen oder Bildung.
                </p>
              </div>
            </div>

            <div className="bg-green-100 p-6 rounded-lg border-l-4 border-green-600">
              <p className="text-lg">
                <strong>Wichtig:</strong> Alle Aufgaben sind freiwillig! Niemand wird zu etwas 
                verpflichtet. Aber je mehr Menschen sich einbringen, desto lebendiger wird unsere 
                Gemeinschaft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">
            Bereit mitzumachen?
          </h2>
          <p className="text-xl mb-8 text-green-50">
            Fülle jetzt das Anmeldeformular aus und werde Teil unserer Gemeinschaft!
          </p>
          <Link
            to="/anmeldung"
            className="inline-flex items-center justify-center gap-2 bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-lg transition-colors"
          >
            Zur Anmeldung
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
