import { Link } from "react-router";
import { Calendar, Users, Sprout, Mail, ArrowRight, Truck } from "lucide-react";

export function Kalender() {
  // Keine erfundenen Einzeltermine: SLB kündigt Termine über Hof-Post und Newsletter an.
  // Hier steht nur, welche Arten von Terminen es regelmäßig gibt.
  const terminarten = [
    {
      title: "Jahreshauptversammlung",
      cadence: "einmal im Jahr, im Herbst",
      color: "bg-solawi-salmon",
      description:
        "Als Ernteteiler:in bist du eingeladen. Dort lernst du unsere Landwirte kennen und planst gemeinsam das neue Jahr. Die Entscheidungen werden im Konsensverfahren getroffen und sind verbindlich.",
    },
    {
      title: "Hofaktionen",
      cadence: "in unregelmäßigen Abständen",
      color: "bg-solawi-green",
      description:
        "Arbeitseinsätze und gemeinsame Treffen auf dem Hof — freiwillig, und eine gute Gelegenheit, Hof und Mitglieder kennenzulernen. Dazu kommen Highlights wie die Pflanzaktion im Frühjahr, gemeinsames Ernten im Sommer und das Erntedankfest im Herbst.",
    },
    {
      title: "Depot-Dienst",
      cadence: "1–2x im Jahr, ca. 20 Minuten",
      color: "bg-solawi-blue",
      description:
        "Einmal oder zweimal im Jahr wirst du für das Aufräumen und Reinigen deines Depots eingeteilt. Den Termin bekommst du rechtzeitig von deiner Depotbetreuung.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero — Pastell + freie Illustration */}
      <section className="relative min-h-[420px] flex items-center bg-solawi-mauve wave-bottom z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center py-16 md:py-20">
            <div>
              <span className="badge-frech mb-8 inline-block">Termine</span>
              <h1 className="mb-8">
                Kalender
              </h1>
              <p className="lead max-w-lg">
                Veranstaltungen, Hofaktionen und Mitmach-Termine
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/ablauf-ernteteiler.jpg" alt="Ernteteiler Uhr" className="h-[300px] md:h-[360px] object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Welche Termine es gibt */}
      <section id="terminarten" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Welche Termine es gibt</h2>
            <p className="lead max-w-2xl mx-auto">
              Unsere Termine stehen nicht ein Jahr im Voraus fest — sie richten sich nach Hof,
              Wetter und Ernte. Das hier sind die Anlässe, zu denen du eingeladen wirst.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {terminarten.map((art) => (
              <div key={art.title} className="bg-white border border-gray-200 shadow-md hover:shadow-xl transition-shadow">
                <div className={`${art.color} p-6`}>
                  <Calendar className="w-8 h-8 text-foreground mb-3" />
                  <h4 className="mb-1">{art.title}</h4>
                  <p className="meta text-foreground">{art.cadence}</p>
                </div>
                <div className="p-6">
                  <p>{art.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wo die konkreten Termine stehen */}
      <section id="ankuendigung" className="py-20 bg-solawi-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 shadow-md">
            <h3 className="mb-4 flex items-center gap-3">
              <Mail className="w-8 h-8 text-cta" />
              So erfährst du die Termine
            </h3>
            <p className="mb-4">
              Alle konkreten Termine bekommst du über die <strong>Hof-Post</strong> per E-Mail und
              über unseren <strong>Newsletter</strong> — dort stehen Datum, Uhrzeit und Treffpunkt.
              Zwei Tage vor der Abholung informiert dich der Hof zusätzlich über den Kisteninhalt
              und das Hofgeschehen.
            </p>
            <p className="mb-6">
              Du bist noch nicht auf dem Verteiler oder hast eine Frage zu einem Termin? Schreib uns.
            </p>
            <a href="mailto:Team.Koordination@stadt-land-beides.de" className="link-cta hover-underline-pink">
              <Mail className="w-5 h-5" />
              Team.Koordination@stadt-land-beides.de
            </a>
          </div>
        </div>
      </section>

      {/* Lieferrhythmus — Verweis statt Dublette */}
      <section className="py-20 bg-solawi-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center">
            Wann dein Ernteanteil kommt
          </h2>

          <div className="bg-white p-8 shadow-md">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="mb-4 flex items-center gap-2">
                  <Sprout className="w-6 h-6 text-cta" />
                  Lieferphasen
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-cta flex-shrink-0 mt-1" />
                    <div>
                      <p className="meta font-medium text-foreground">Sommergemüse — Demeterhof Hederer</p>
                      <p>wöchentlich, April bis September</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-cta flex-shrink-0 mt-1" />
                    <div>
                      <p className="meta font-medium text-foreground">Wintergemüse — Biohof Tristan</p>
                      <p>wöchentlich oder 14-tägig, Oktober bis März</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-cta flex-shrink-0 mt-1" />
                    <div>
                      <p className="meta font-medium text-foreground">More..-Anteile — Demeterhof Walz</p>
                      <p>1–2x im Monat, ganzjährig</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-4 flex items-center gap-2">
                  <Truck className="w-6 h-6 text-cta" />
                  Abholung im Depot
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-cta flex-shrink-0 mt-1" />
                    <div>
                      <p className="meta font-medium text-foreground">Abholzeiten</p>
                      <p>Je nach Depot unterschiedlich — die genauen Zeiten stehen bei den Depots.</p>
                    </div>
                  </div>
                  <div className="bg-secondary/20 p-4 mt-4">
                    <p className="meta">
                      Obst &amp; Säfte und Bio..Beeren haben eigene Lieferphasen. Die vollständige
                      Tabelle mit allen Höfen und Zyklen findest du beim Lieferrhythmus.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h5 className="mb-4">Wichtige Hinweise</h5>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cta rounded-full flex-shrink-0 mt-2"></div>
                  <span>Du bist für die Abholung deines Ernteanteils verantwortlich. Nicht geschafft? Organisier eine Vertretung.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cta rounded-full flex-shrink-0 mt-2"></div>
                  <span>Nicht abgeholtes Gemüse geht an Foodsharing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cta rounded-full flex-shrink-0 mt-2"></div>
                  <span>Die Zusammensetzung variiert je nach Saison und Ernte — das macht es spannend!</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 text-center">
              <Link to="/depots#anlieferung" className="btn-cta">
                Lieferrhythmus &amp; Depots
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-solawi-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">
            Möchtest du bei einer Aktion dabei sein?
          </h2>
          <p className="lead text-foreground mb-8">
            Zu Hofaktionen und Festen laden wir alle Ernteteiler:innen ein — ganz ohne Verpflichtung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/so-funktionierts" className="btn-cta btn-cta-lg">
              Ernteteiler:in werden
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/mitmachen#engagement" className="btn-outline">
              Im Verein mitarbeiten
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
