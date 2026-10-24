import { Link } from "react-router";
import { ArrowRight, Users, MapPin, Package, Heart, Calendar, Mail } from "lucide-react";

export function Mitmachen() {
  return (
    <div className="bg-white">
      {/* Hero — Pastell + freie Illustration */}
      <section className="relative min-h-[420px] flex items-center bg-solawi-green wave-bottom z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center py-16 md:py-20">
            <div>
              <span className="badge-frech mb-8 inline-block">Dabei sein</span>
              <h1 className="mb-8">
                Wie kann ich mitmachen?
              </h1>
              <p className="lead max-w-lg">
                Werde Teil unserer Gemeinschaft und genieße frische, regionale Lebensmittel
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/ablauf-mitmachen.jpg" alt="Mitmachen" className="h-[300px] md:h-[360px] object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* SoLaWi in Aktion */}
      <section className="py-20 bg-solawi-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-frech mb-4 inline-block">Gemeinschaft erleben</span>
            <h2 className="mb-6">SoLaWi in Aktion</h2>
            <p className="lead text-foreground max-w-3xl mx-auto">
              Mitmachen heißt mehr als Ernte abholen — hier bekommst du einen Eindruck vom Leben in unserer Gemeinschaft.
            </p>
          </div>

          {/* Zukünftige Events */}
          <div id="events" className="mb-16">
            <h3 className="mb-6 flex items-center gap-3">
              <Calendar className="w-8 h-8 text-cta" />
              Zukünftige Events
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 shadow-md">
                <h4 className="mb-2">Jahreshauptversammlung</h4>
                <p>
                  Findet im Herbst statt — als Ernteteiler bist du eingeladen. Dort lernst du unsere
                  Landwirte kennen und planst gemeinsam das neue Jahr. Die Entscheidungen werden im
                  Konsensverfahren getroffen und sind verbindlich.
                </p>
              </div>
              <div className="bg-white p-6 shadow-md">
                <h4 className="mb-2">Hofaktionen</h4>
                <p>
                  In unregelmäßigen Abständen gibt es Arbeitseinsätze und gemeinsame Treffen auf dem
                  Hof — freiwillig, und eine gute Gelegenheit, Hof und Mitglieder kennenzulernen.
                </p>
              </div>
            </div>
            <div className="mt-6 bg-white/70 p-4 text-center">
              <p className="meta">
                Hofaktionen bekommst du automatisch per Hof-Post. Vereinsweite Termine wie die
                Jahreshauptversammlung stehen im internen Newsletter — mehr dazu in den{" "}
                <Link to="/haeufige-fragen#schnelle-fragen" className="underline">
                  Häufigen Fragen
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div id="highlights" className="mb-16">
            <h3 className="mb-6 flex items-center gap-3">
              <Heart className="w-8 h-8 text-cta" />
              Highlights
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img src="/features-gemeinschaft.jpg" alt="Gemeinsam auf dem Acker" className="w-full h-56 object-contain" />
              <div className="space-y-4 text-foreground">
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
            <h3 className="mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-cta" />
              Engagement im Verein
            </h3>
            <p className="text-foreground mb-6">
              Stadt, Land, Beides lebt von der aktiven Beteiligung seiner Mitglieder. Neben dem
              Depot-Dienst (1–2x/Jahr Aufräumen, ca. 20 Minuten) gibt es diese ehrenamtlichen Rollen:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 shadow-md text-center">
                <Users className="w-10 h-10 text-cta mx-auto mb-4" />
                <h4 className="mb-2">Hofbetreuer</h4>
                <p>
                  Ehrenamtlicher Ansprechpartner zwischen Hof und Ernteteilern — die Brücke, die
                  beide Seiten auf dem Laufenden hält.
                </p>
              </div>
              <div className="bg-white p-6 shadow-md text-center">
                <MapPin className="w-10 h-10 text-cta mx-auto mb-4" />
                <h4 className="mb-2">Depotbetreuer</h4>
                <p>
                  Kümmert sich um das Depot vor Ort — sorgt dafür, dass alles ordentlich läuft und
                  die Abholung reibungslos klappt.
                </p>
              </div>
              <div className="bg-white p-6 shadow-md text-center">
                <Package className="w-10 h-10 text-cta mx-auto mb-4" />
                <h4 className="mb-2">Fahrer</h4>
                <p>
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
            <h2 className="mb-6">SoLaWi in der Stadt</h2>
            <p className="lead text-foreground max-w-3xl mx-auto">
              So kommt deine Ernte vom Feld direkt zu dir in die Nachbarschaft.
            </p>
          </div>

          {/* Die Depots */}
          <div id="depots" className="mb-16">
            <h3 className="mb-6 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-cta" />
              Die Depots
            </h3>
            <p className="text-foreground mb-6 max-w-3xl">
              Bei der Anmeldung gibst du an, in welchem Depot du deine Ernte abholen möchtest.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 shadow-md">
                <h4 className="mb-3">Nürnberg</h4>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2"><MapPin className="w-5 h-5 text-cta flex-shrink-0" /> Depot Stadtpark</li>
                  <li className="flex items-center gap-2"><MapPin className="w-5 h-5 text-cta flex-shrink-0" /> Depot St. Peter</li>
                  <li className="flex items-center gap-2"><MapPin className="w-5 h-5 text-cta flex-shrink-0" /> Depot Die Wiese</li>
                  <li className="flex items-center gap-2"><MapPin className="w-5 h-5 text-cta flex-shrink-0" /> Depot Johannis</li>
                  <li className="flex items-center gap-2"><MapPin className="w-5 h-5 text-cta flex-shrink-0" /> Depot Gostenhof <span className="meta text-cta">(Warteliste)</span></li>
                  <li className="flex items-center gap-2"><MapPin className="w-5 h-5 text-cta flex-shrink-0" /> Depot AKi</li>
                  <li className="flex items-center gap-2"><MapPin className="w-5 h-5 text-cta flex-shrink-0" /> Depot Altenfurt</li>
                </ul>
              </div>
              <div className="bg-white p-6 shadow-md">
                <h4 className="mb-3">Fürth</h4>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2"><MapPin className="w-5 h-5 text-cta flex-shrink-0" /> Depot Tataa</li>
                  <li className="flex items-center gap-2"><MapPin className="w-5 h-5 text-cta flex-shrink-0" /> Depot Spiegelfabrik <span className="meta text-cta">(Warteliste)</span></li>
                </ul>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h5 className="mb-2">Eigenes Depot?</h5>
                  <p className="mb-3">
                    Melde dich bei uns — wir helfen dir bei den ersten Schritten.
                  </p>
                  <a
                    href="mailto:Team.Koordination@stadt-land-beides.de"
                    className="link-cta"
                  >
                    <Mail className="w-5 h-5" />
                    Kontakt aufnehmen
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/depots#karte" className="btn-cta">
                Adressen, Zeiten & Karte
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Unsere Logistik */}
          <div id="logistik">
            <h3 className="mb-6 flex items-center gap-3">
              <Package className="w-8 h-8 text-cta" />
              Unsere Logistik
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 shadow-md text-center">
                <h3 className="text-cta mb-1">4</h3>
                <p>Partnerhöfe im Umland</p>
              </div>
              <div className="bg-white p-6 shadow-md text-center">
                <h3 className="text-cta mb-1">9</h3>
                <p>Depots in Nürnberg & Fürth</p>
              </div>
              <div className="bg-white p-6 shadow-md text-center">
                <h3 className="text-cta mb-1">1</h3>
                <p>ehrenamtliches Logistik-Team</p>
              </div>
            </div>
            <p className="text-foreground">
              Kein Hof liefert einzeln quer durch die Stadt — das könnte niemand stemmen. Stattdessen
              bringt unser ehrenamtliches Logistik-Team die Ernte aller Höfe gebündelt in die Depots.
              Die Kosten dafür trägt der solidarische Beitrag, den du mit deinem Ernteanteil zahlst —
              ohne Gewinnaufschlag für den Verein.
            </p>
            <p className="text-foreground mt-4">
              Wie oft und wann dein Hof liefert, erfährst du unter{" "}
              <Link to="/depots#anlieferung" className="text-cta hover:text-accent underline">
                Lieferrhythmus
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="teilnahme" className="py-20 bg-solawi-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">
            Bereit mitzumachen?
          </h2>
          <p className="lead text-foreground mb-8">
            Lade die Teilnahmevereinbarung herunter, fülle sie aus und schick sie uns per Mail — und werde Teil unserer Gemeinschaft!
          </p>
          <Link to="/so-funktionierts" className="btn-cta btn-cta-lg">
            Zur Anmeldung
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
