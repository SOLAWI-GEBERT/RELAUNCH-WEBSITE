import { Link } from "react-router";
import { ArrowRight, Users, MapPin, Package, Heart, Calendar, Mail } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Mitmachen() {
  return (
    <div className="bg-white">
      {/* Hero — Pastell + freie Illustration */}
      <section className="bg-solawi-green py-16 wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="badge-frech mb-4 inline-block">Dabei sein</span>
              <h1 className="text-5xl mb-4 text-foreground">
                Wie kann ich mitmachen?
              </h1>
              <p className="text-xl text-foreground/80">
                Werde Teil unserer Gemeinschaft und genieße frische, regionale Lebensmittel
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/ablauf-mitmachen.jpg" alt="Mitmachen" className="h-[280px] object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* SoLaWi in Aktion */}
      <section className="py-20 bg-solawi-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-frech mb-4 inline-block">Gemeinschaft erleben</span>
            <h2 className="text-4xl mb-4 text-foreground">SoLaWi in Aktion</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Mitmachen heißt mehr als Ernte abholen — hier bekommst du einen Eindruck vom Leben in unserer Gemeinschaft.
            </p>
          </div>

          {/* Zukünftige Events */}
          <div id="events" className="mb-16">
            <h3 className="text-2xl mb-6 text-foreground flex items-center gap-2">
              <Calendar className="w-6 h-6 text-primary" />
              Zukünftige Events
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-2 text-foreground">Jahreshauptversammlung</h4>
                <p className="text-gray-700 text-sm">
                  Findet im Herbst statt — als Ernteteiler bist du eingeladen. Dort lernst du unsere
                  Landwirte kennen und planst gemeinsam das neue Jahr. Die Entscheidungen werden im
                  Konsensverfahren getroffen und sind verbindlich.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-2 text-foreground">Hofaktionen</h4>
                <p className="text-gray-700 text-sm">
                  In unregelmäßigen Abständen gibt es Arbeitseinsätze und gemeinsame Treffen auf dem
                  Hof — freiwillig, und eine gute Gelegenheit, Hof und Mitglieder kennenzulernen.
                </p>
              </div>
            </div>
            <div className="mt-6 bg-white/70 p-4 rounded-lg text-center">
              <p className="text-gray-700 text-sm">
                Alle Termine erfährst du über die Hof-Post per E-Mail und unseren Newsletter.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div id="highlights" className="mb-16">
            <h3 className="text-2xl mb-6 text-foreground flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary" />
              Highlights
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img src="/features-gemeinschaft.jpg" alt="Gemeinsam auf dem Acker" className="w-full h-56 object-contain" />
              <div className="space-y-4 text-gray-700">
                <p>
                  Ob Pflanzaktion im Frühjahr, gemeinsames Ernten im Sommer oder das Erntedankfest im
                  Herbst — unsere schönsten Momente entstehen dort, wo Stadt und Land aufeinandertreffen.
                </p>
                <p>
                  Als Mitglied bist du herzlich eingeladen, dabei zu sein — ganz ohne Verpflichtung.
                </p>
              </div>
            </div>
          </div>

          {/* Engagement im Verein */}
          <div id="engagement">
            <h3 className="text-2xl mb-6 text-foreground flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              Engagement im Verein
            </h3>
            <p className="text-gray-700 mb-6">
              Stadt, Land, Beides lebt von der aktiven Beteiligung seiner Mitglieder. Neben dem
              Depot-Dienst (1–2x/Jahr Aufräumen, ca. 20 Minuten) gibt es diese ehrenamtlichen Rollen:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2 text-foreground">Hofbetreuer</h4>
                <p className="text-gray-700 text-sm">
                  Ehrenamtlicher Ansprechpartner zwischen Hof und Ernteteilern — die Brücke, die
                  beide Seiten auf dem Laufenden hält.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <MapPin className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2 text-foreground">Depotbetreuer</h4>
                <p className="text-gray-700 text-sm">
                  Kümmert sich um das Depot vor Ort — sorgt dafür, dass alles ordentlich läuft und
                  die Abholung reibungslos klappt.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <Package className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2 text-foreground">Fahrer</h4>
                <p className="text-gray-700 text-sm">
                  Teil des Logistik-Teams: holt die Ernteanteile ab Hof ab und liefert sie in die
                  Depots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SoLaWi in der Stadt */}
      <section className="py-20 bg-solawi-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-frech mb-4 inline-block">Vom Hof in die Stadt</span>
            <h2 className="text-4xl mb-4 text-foreground">SoLaWi in der Stadt</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              So kommt deine Ernte vom Feld direkt zu dir in die Nachbarschaft.
            </p>
          </div>

          {/* Die Depots */}
          <div id="depots" className="mb-16">
            <h3 className="text-2xl mb-6 text-foreground flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              Die Depots
            </h3>
            <p className="text-gray-700 mb-6 max-w-3xl">
              Bei der Anmeldung gibst du an, in welchem Depot du deine Ernte abholen möchtest.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="font-semibold text-foreground mb-2">Nürnberg</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary flex-shrink-0" /> Depot Stadtpark</li>
                  <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary flex-shrink-0" /> Depot St. Peter</li>
                  <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary flex-shrink-0" /> Depot Die Wiese</li>
                  <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary flex-shrink-0" /> Depot Johannis</li>
                  <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary flex-shrink-0" /> Depot Gostenhof <span className="text-amber-600 text-xs">(Warteliste)</span></li>
                  <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary flex-shrink-0" /> Depot AKi</li>
                  <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary flex-shrink-0" /> Depot Altenfurt</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="font-semibold text-foreground mb-2">Fürth</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary flex-shrink-0" /> Depot Tataa</li>
                  <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary flex-shrink-0" /> Depot Spiegelfabrik <span className="text-amber-600 text-xs">(Warteliste)</span></li>
                </ul>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-foreground mb-2">Eigenes Depot?</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Melde dich bei uns — wir helfen dir bei den ersten Schritten.
                  </p>
                  <a
                    href="mailto:Team.Koordination@stadt-land-beides.de"
                    className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-semibold"
                  >
                    <Mail className="w-4 h-4" />
                    Kontakt aufnehmen
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/depots#karte"
                className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white px-8 py-4 transition-colors font-accent"
              >
                Adressen, Zeiten & Karte
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Unsere Logistik */}
          <div id="logistik">
            <h3 className="text-2xl mb-6 text-foreground flex items-center gap-2">
              <Package className="w-6 h-6 text-primary" />
              Unsere Logistik
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <p className="text-3xl font-bold text-primary mb-1">4</p>
                <p className="text-gray-700 text-sm">Partnerhöfe im Umland</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <p className="text-3xl font-bold text-primary mb-1">9</p>
                <p className="text-gray-700 text-sm">Depots in Nürnberg & Fürth</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <p className="text-3xl font-bold text-primary mb-1">1</p>
                <p className="text-gray-700 text-sm">ehrenamtliches Logistik-Team</p>
              </div>
            </div>
            <p className="text-gray-700">
              Kein Hof liefert einzeln quer durch die Stadt — das könnte niemand stemmen. Stattdessen
              bringt unser ehrenamtliches Logistik-Team die Ernte aller Höfe gebündelt in die Depots.
              Die Kosten dafür trägt der solidarische Beitrag, den du mit deinem Ernteanteil zahlst —
              ohne Gewinnaufschlag für den Verein.
            </p>
            <p className="text-gray-700 mt-4">
              Wie oft und wann dein Hof liefert, erfährst du unter{" "}
              <Link to="/depots#anlieferung" className="text-primary hover:underline font-semibold">
                Lieferrhythmus
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-solawi-blue text-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">
            Bereit mitzumachen?
          </h2>
          <p className="text-xl mb-8 text-foreground/80">
            Fülle jetzt das Anmeldeformular aus und werde Teil unserer Gemeinschaft!
          </p>
          <Link
            to="/anmeldung"
            className="inline-flex items-center justify-center gap-2 bg-cta text-white hover:bg-cta-hover px-8 py-4 transition-colors font-accent"
          >
            Zur Anmeldung
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
