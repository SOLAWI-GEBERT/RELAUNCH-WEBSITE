import { Link } from "react-router";
import { ArrowRight, Users, MapPin, Package, Heart, Calendar, FileText, Mail } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const ernteanteile = [
  { hof: "Hederer", produkt: "Sommergemüse", zyklus: "wöchentlich", phase: "Apr\u2013Sept", gesamt: "128\u202F\u20AC" },
  { hof: "Hederer", produkt: "Obst & Säfte", zyklus: "nach Bedarf", phase: "Jul\u2013Dez", gesamt: "39,50\u202F\u20AC" },
  { hof: "Tristan", produkt: "Wintergemüse (ganz)", zyklus: "wöchentlich", phase: "Okt\u2013Mrz", gesamt: "136,20\u202F\u20AC" },
  { hof: "Tristan", produkt: "Wintergemüse (halb)", zyklus: "14-tägig", phase: "Okt\u2013Mrz", gesamt: "72,10\u202F\u20AC" },
  { hof: "Tristan", produkt: "Wintergemüse (klein)", zyklus: "wöchentlich", phase: "Okt\u2013Mrz", gesamt: "99,54\u202F\u20AC" },
  { hof: "Walz", produkt: "Huhn", zyklus: "2x/Monat", phase: "ganzjährig", gesamt: "17,90\u202F\u20AC" },
  { hof: "Walz", produkt: "Bratgockerl", zyklus: "1x/4 Mon.", phase: "ganzjährig", gesamt: "9\u202F\u20AC" },
  { hof: "Walz", produkt: "Hack", zyklus: "1x/Monat", phase: "ganzjährig", gesamt: "11,40\u202F\u20AC" },
  { hof: "Walz", produkt: "Wurst", zyklus: "1x/Monat", phase: "ganzjährig", gesamt: "17\u202F\u20AC" },
  { hof: "Walz", produkt: "Ur-Getreide", zyklus: "1x/Monat", phase: "ganzjährig", gesamt: "6,90\u202F\u20AC" },
  { hof: "Kirschgarten", produkt: "Bio-Beeren", zyklus: "wöchentlich", phase: "Jul\u2013Sept", gesamt: "38\u202F\u20AC" },
];

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

      {/* Übersicht */}
      <section id="ueberblick" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-foreground">
              So wirst du Mitglied
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In wenigen Schritten zur Mitgliedschaft bei Stadt, Land, Beides
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                1
              </div>
              <h3 className="text-lg mb-2 text-foreground">Informieren</h3>
              <p className="text-gray-600 text-sm">
                Lerne unsere Höfe und Angebote kennen
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                2
              </div>
              <h3 className="text-lg mb-2 text-foreground">Ernteanteil wählen</h3>
              <p className="text-gray-600 text-sm">
                Entscheide dich für deine Höfe
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                3
              </div>
              <h3 className="text-lg mb-2 text-foreground">Depot finden</h3>
              <p className="text-gray-600 text-sm">
                Wähle ein Depot in deiner Nähe
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                4
              </div>
              <h3 className="text-lg mb-2 text-foreground">Anmelden</h3>
              <p className="text-gray-600 text-sm">
                Fülle das Anmeldeformular aus
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/anmeldung"
              className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white px-8 py-4 transition-colors font-accent"
            >
              Jetzt anmelden
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Ernteanteile */}
      <section id="ernteteile" className="py-20 bg-solawi-mauve">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-4 text-foreground">
            Ernteanteile & Kosten
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Stelle dir dein persönliches Paket zusammen — aus den Angeboten unserer Partnerhöfe.
          </p>

          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="w-full bg-white text-left">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 font-semibold">Hof</th>
                  <th className="px-4 py-3 font-semibold">Produkt</th>
                  <th className="px-4 py-3 font-semibold">Zyklus</th>
                  <th className="px-4 py-3 font-semibold">Zeitraum</th>
                  <th className="px-4 py-3 font-semibold text-right">Gesamt/M</th>
                </tr>
              </thead>
              <tbody>
                {ernteanteile.map((ea, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-secondary/10"}>
                    <td className="px-4 py-3 text-gray-800">{ea.hof}</td>
                    <td className="px-4 py-3 text-gray-800">{ea.produkt}</td>
                    <td className="px-4 py-3 text-gray-600">{ea.zyklus}</td>
                    <td className="px-4 py-3 text-gray-600">{ea.phase}</td>
                    <td className="px-4 py-3 text-gray-800 font-semibold text-right">{ea.gesamt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm space-y-3">
            <p className="text-gray-700">
              Die Gesamtbeträge setzen sich zusammen aus dem Paketpreis für den Hof und dem
              solidarischen Beitrag für Logistik — kein Gewinnaufschlag. Bei Hederer und Tristan
              wird der Richtpreis durch eine Bieterrunde bestimmt.
            </p>
            <p className="text-gray-700">
              Für jeden Ernteteiler kommt einmalig ein <strong>Risikobeitrag von 1,50&#8239;€/Monat</strong> dazu.
            </p>
          </div>
        </div>
      </section>

      {/* Teilnahme */}
      <section id="teilnahme" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-4 text-foreground">
            Teilnahmebedingungen
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl">
            So kann der Hof sicher planen — und du bekommst ein ganzes Jahr lang frische Lebensmittel.
          </p>

          <div className="space-y-6">
            <div className="bg-secondary/20 p-6 rounded-lg">
              <h3 className="text-xl mb-3 text-foreground">Wirtschaftsjahr</h3>
              <p className="text-gray-700">
                Das Wirtschaftsjahr läuft vom <strong>01.04. bis 31.03.</strong> (12 Monate).
                Wintergemüse (Tristan) und Sommergemüse (Hederer) umfassen jeweils 6 Monate.
              </p>
            </div>

            <div className="bg-secondary/20 p-6 rounded-lg">
              <h3 className="text-xl mb-3 text-foreground">Verlängerung & Kündigung</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                  <span>Automatische Verlängerung, wenn nicht bis <strong>31.12.</strong> gekündigt wird.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                  <span>Kündigung schriftlich per Post oder E-Mail an{" "}
                    <a href="mailto:Team.Koordination@stadt-land-beides.de" className="text-primary hover:underline">
                      Team.Koordination@stadt-land-beides.de
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                  <span>Teilkündigung einzelner Anteile ist möglich.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                  <span>Ausnahme bei schwerwiegenden Gründen (z.B. Umzug).</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/20 p-6 rounded-lg">
              <h3 className="text-xl mb-3 text-foreground">Probemonat</h3>
              <p className="text-gray-700">
                Du kannst einen Probemonat buchen — Aufpreis <strong>5&#8239;€ Verwaltungsaufwand pro Hof</strong>.
                Start immer zum 1. eines Monats, bitte 2-3 Wochen Vorlauf einplanen.
                Der Probemonat verlängert sich nicht automatisch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depot wählen */}
      <section id="depots" className="py-20 bg-solawi-orange">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl mb-4 text-foreground">
              Wähle dein Depot
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bei der Anmeldung gibst du an, in welchem Depot du deine Ernte
              abholen möchtest. Adressen, Öffnungszeiten und die Karte findest
              du unter Lieferung & Kalender.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="font-semibold text-foreground mb-2">Nürnberg</h3>
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
              <h3 className="font-semibold text-foreground mb-2">Fürth</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary flex-shrink-0" /> Depot Tataa</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary flex-shrink-0" /> Depot Spiegelfabrik <span className="text-amber-600 text-xs">(Warteliste)</span></li>
              </ul>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <h3 className="font-semibold text-foreground mb-2">Eigenes Depot?</h3>
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

          <div id="depotstandorte" className="text-center">
            <Link
              to="/lieferung-kalender#karte"
              className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white px-8 py-4 transition-colors font-accent"
            >
              Adressen, Zeiten & Karte
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Was erwartet mich */}
      <section id="erwartungen" className="py-20 bg-solawi-blue/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-foreground">
            Was erwartet mich?
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Als Mitglied erhältst du jede Woche frisches, saisonales Gemüse und kannst dich
              aktiv in die Gemeinschaft einbringen. Hier ein Überblick über deine Rechte und
              Pflichten:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary/20 p-6 rounded-lg">
                <h3 className="text-2xl mb-4 text-foreground">Das bekommst du</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Package className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Wöchentlich frisches Bio-Gemüse nach Saison</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Zugang zu einer lebendigen Gemeinschaft</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Einladungen zu Hofaktionen und Veranstaltungen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Newsletter mit Rezepten und Infos</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/20 p-6 rounded-lg">
                <h3 className="text-2xl mb-4 text-foreground">Das erwarten wir</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Pünktliche Zahlung des monatlichen Beitrags</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Regelmäßige Abholung am Depot</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Teilnahme an der Jahreshauptversammlung im Herbst</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
      <section id="mitarbeit-engagement" className="py-20 bg-solawi-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-foreground">
            Mitarbeit & Engagement
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Stadt, Land, Beides lebt von der aktiven Beteiligung seiner Mitglieder.
              Es gibt viele Möglichkeiten, sich einzubringen:
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl mb-3 text-foreground">Jahreshauptversammlung (JHV)</h3>
                <p className="text-gray-700">
                  Die JHV ist ein Pflichttermin im Herbst. Dort lernst du unsere Landwirte kennen,
                  blickst auf den vergangenen Zeitraum zurück und planst zusammen das neue Jahr.
                  Die Entscheidungen werden im Konsensverfahren getroffen und sind für alle verbindlich.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl mb-3 text-foreground">Depot-Dienst</h3>
                <p className="text-gray-700">
                  1-2x pro Jahr bist du mit dem Aufräumen und Reinigen deines Depots dran —
                  das dauert ca. 20 Minuten und hält alles sauber und einladend.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl mb-3 text-foreground">Hofaktionen</h3>
                <p className="text-gray-700">
                  Freiwillige Mitmach-Aktionen auf den Höfen: Pflanzen, Jäten, Ernten oder
                  einfach gemeinsam Zeit verbringen. Die Termine werden rechtzeitig angekündigt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Termine & Aktionen */}
      <section id="termine" className="py-20 bg-solawi-salmon-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-foreground">Termine & Aktionen</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Calendar className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Jahreshauptversammlung
              </h3>
              <p className="text-gray-700 text-sm">
                Findet im Herbst statt — als Ernteteiler bist du zur Teilnahme
                eingeladen. Dort lernst du unsere Landwirte kennen und planst
                gemeinsam das neue Jahr. Die Entscheidungen werden im
                Konsensverfahren getroffen und sind verbindlich.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Heart className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Hof- & Mitmachaktionen
              </h3>
              <p className="text-gray-700 text-sm">
                In unregelmäßigen Abständen gibt es Hofaktionen:
                Arbeitseinsätze, gemeinsame Treffen, den Hof und andere
                Ernteteiler kennenlernen. Die Teilnahme ist freiwillig und wird
                rechtzeitig angekündigt.
              </p>
            </div>
          </div>

          <div className="bg-solawi-mauve p-6 rounded-lg text-center">
            <p className="text-gray-700">
              Termine erfährst du aktuell über die Hof-Post per E-Mail und
              unseren Newsletter.
            </p>
          </div>
        </div>
      </section>

      {/* Ansprechpartner & Kontakt */}
      <section id="kontakt" className="py-20 bg-solawi-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-foreground">
            Ansprechpartner & Kontakt
          </h2>

          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <p className="text-lg font-semibold text-gray-900 mb-2">
              Sebastian Lades (Vorstand), Andreas Gebert (Kassenwart)
            </p>
            <p className="text-gray-700 mb-4">
              Vorstand und Kassenwart des Vereins „Solidarische Landwirtschaft
              Stadt, Land, Beides e.V."
            </p>
            <div className="flex items-center gap-3 text-gray-700 mb-6">
              <Mail className="w-5 h-5 text-primary" />
              <a
                href="mailto:Team.Koordination@stadt-land-beides.de"
                className="hover:text-primary transition-colors"
              >
                Team.Koordination@stadt-land-beides.de
              </a>
            </div>

            <div className="bg-solawi-green/30 p-5 rounded-lg">
              <p className="text-gray-700 text-sm leading-relaxed">
                Das Kontaktformular wird vom Team Koordination gelesen — du
                kannst uns auch direkt per E-Mail an{" "}
                <a
                  href="mailto:Team.Koordination@stadt-land-beides.de"
                  className="text-primary hover:underline"
                >
                  Team.Koordination@stadt-land-beides.de
                </a>{" "}
                schreiben. Für besondere Fälle erreichst du uns auch telefonisch
                unter <strong>+49 911 596 79 722</strong> (Anrufbeantworter).
                Bitte hab etwas Geduld: Wir arbeiten alle ehrenamtlich und
                melden uns, sobald es uns möglich ist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rollen */}
      <section id="rollen" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-4 text-foreground text-center">
            Ehrenamtliche Rollen
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Unsere Gemeinschaft wird von Ehrenamtlichen getragen. Diese drei Rollen sind besonders wichtig:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-secondary/20 p-8 rounded-lg shadow-sm text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl mb-3 text-foreground">Hofbetreuer</h3>
              <p className="text-gray-700">
                Ehrenamtlicher Ansprechpartner zwischen Hof und Ernteteilern. Du bist die
                Brücke und hältst beide Seiten auf dem Laufenden.
              </p>
            </div>

            <div className="bg-secondary/20 p-8 rounded-lg shadow-sm text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl mb-3 text-foreground">Depotbetreuer</h3>
              <p className="text-gray-700">
                Kümmert sich um das Depot vor Ort — sorgt dafür, dass alles ordentlich läuft
                und die Abholung reibungslos klappt.
              </p>
            </div>

            <div className="bg-secondary/20 p-8 rounded-lg shadow-sm text-center">
              <Package className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl mb-3 text-foreground">Fahrer</h3>
              <p className="text-gray-700">
                Teil des Logistik-Teams: holt die Ernteanteile ab Hof ab und liefert sie
                in die Depots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vereinsarbeit */}
      <section id="vereinsarbeit" className="py-20 bg-solawi-mauve">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-foreground">Unser Verein</h2>

          <div className="prose prose-lg max-w-none text-gray-700 mb-8">
            <p>
              Der Förderverein „Solidarische Landwirtschaft Stadt, Land, Beides
              e.V." wurde 2016 gegründet und kümmert sich um die Infrastruktur
              zwischen Landwirten und Ernteteilern: Transport,
              Öffentlichkeitsarbeit und das Betreiben der Depots. Der Verein
              arbeitet nicht gewinnorientiert — Überschüsse werden im Folgejahr
              kompensiert.
            </p>
          </div>

          <div className="bg-white/80 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Vereinsdaten</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-foreground">Vorstand</p>
                <p className="text-gray-700">Sebastian Lades</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Kassenwart</p>
                <p className="text-gray-700">Andreas Gebert</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Anschrift</p>
                <p className="text-gray-700">Findelwiesenstr. 25, 90478 Nürnberg</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">E-Mail</p>
                <p className="text-gray-700">
                  <a href="mailto:Team.Koordination@stadt-land-beides.de" className="text-primary hover:underline">
                    Team.Koordination@stadt-land-beides.de
                  </a>
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Registergericht</p>
                <p className="text-gray-700">Nürnberg, VR 202062</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">USt-IdNr.</p>
                <p className="text-gray-700">DE419541492</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-foreground">Ernteteiler</h3>
              <p className="text-gray-700 text-sm">
                Kein Vereinsmitglied nötig. Risikobeitrag von
                <strong> 1,50€/Monat</strong> (1€ Risikoabsicherung + 0,50€
                Netzwerkbeitrag) ist Pflicht.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-foreground">Vereinsmitglied</h3>
              <p className="text-gray-700 text-sm">
                Optional, ab <strong>1€/Monat</strong>. Personen mit Amt müssen
                Mitglied sein. Du bekommst eine Stimme in der
                Jahreshauptversammlung.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-foreground">Fördermitglied</h3>
              <p className="text-gray-700 text-sm">
                Für Unterstützer ohne Ernteanteil. Beitrag frei wählbar,
                mindestens <strong>2€/Monat</strong>.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/solidarische-landwirtschaft"
              className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
            >
              Mehr über Solidarische Landwirtschaft erfahren
              <ArrowRight className="w-4 h-4" />
            </Link>
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
