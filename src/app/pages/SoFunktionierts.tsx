import { Link } from "react-router";
import { ArrowRight, FileText } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

export function SoFunktionierts() {
  return (
    <div className="bg-white">
      {/* Hero — Pastell + freie Illustration */}
      <section className="relative min-h-[420px] flex items-center bg-solawi-green wave-bottom z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center py-16 md:py-20">
            <div>
              <span className="badge-frech mb-8 inline-block">Mitmachen</span>
              <h1 className="mb-8">So funktioniert's</h1>
              <p className="lead max-w-lg">
                In vier einfachen Schritten zur Mitgliedschaft
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/ablauf-kontakt.jpg"
                alt="Hallo? — freundlicher Erstkontakt mit Gurke als Telefon"
                className="h-[300px] md:h-[360px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-6">
              Beginne mit Runterladen der <span className="underline-sketch">Teilnahmevereinbarung</span>
            </h2>
            <p className="lead max-w-2xl mx-auto">
              Alles, was du für deine Teilnahme brauchst — zum Nachlesen und Ausdrucken.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <ScrollReveal delay={0}>
              <a
                href="/TNV_StadtLandBeides_V26_4.pdf"
                download
                className="flex items-center gap-4 bg-white p-6 shadow-md hover-tilt group"
              >
                <FileText className="w-10 h-10 text-cta flex-shrink-0" />
                <div>
                  <h4 className="mb-1 group-hover:text-cta transition-colors">
                    Teilnahmevereinbarung
                  </h4>
                  <p>
                    Konditionen, Preise und Ablauf für dein Erntejahr (PDF)
                  </p>
                </div>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section id="so-funktionierts" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={0}>
              <div className="text-center relative pt-8">
                <span className="badge-frech absolute -top-2 left-4 z-10">1</span>
                <h3 className="mb-4">Ernteanteil wählen</h3>
                <p className="mb-6">
                  Wähle deinen Ernteanteil und entscheide, welche Höfe du unterstützen möchtest.
                </p>
                <div className="bg-solawi-green p-6">
                  <img src="/ablauf-hof.jpg" alt="Höfe in der Region" className="h-48 object-contain mx-auto hover-wiggle" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="text-center relative pt-8">
                <span className="badge-frech absolute -top-2 left-4 z-10">2</span>
                <h3 className="mb-4">Depot auswählen</h3>
                <p className="mb-6">
                  Finde ein Depot in deiner Nähe, wo du wöchentlich deine frischen Lebensmittel abholen kannst.
                </p>
                <div className="bg-solawi-blue p-6">
                  <img src="/ablauf-depot.jpg" alt="Depot in der Stadt" className="h-48 object-contain mx-auto hover-wiggle" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="text-center relative pt-8">
                <span className="badge-frech absolute -top-2 left-4 z-10">3</span>
                <h3 className="mb-4">Teilnahme wegschicken</h3>
                <p className="mb-6">
                  Unterschreibe die Teilnahmevereinbarung und sichere dir deinen Ernteanteil für das Erntejahr.
                </p>
                <div className="bg-solawi-blue-light p-6">
                  <img src="/kontakt.jpg" alt="Teilnahmevereinbarung ausfüllen" className="h-48 object-contain mx-auto hover-wiggle" />
                </div>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <span className="meta">An:</span>
                  <img
                    src="/email-teilnahme.png"
                    alt="Team.Koordination@stadt-land-beides.de"
                    className="w-40 h-auto"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.45}>
              <div className="text-center relative pt-8">
                <span className="badge-frech absolute -top-2 left-4 z-10">4</span>
                <h3 className="mb-4">Genießen & mitmachen</h3>
                <p className="mb-6">
                  Hole deine Ernte ab und werde Teil der Gemeinschaft bei Hofaktionen und Veranstaltungen.
                </p>
                <div className="bg-solawi-orange p-6">
                  <img src="/ablauf-mitmachen.jpg" alt="Gemeinsam ernten" className="h-48 object-contain mx-auto hover-wiggle" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Beispielseite TNV */}
      <section className="py-20 bg-solawi-salmon relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="mb-6">
              So sieht die <span className="underline-sketch">Teilnahmevereinbarung</span> aus
            </h2>
            <p className="lead text-foreground max-w-2xl mx-auto">
              Auf Seite 1 wählst du deinen Ernteanteil — einfach das passende Kästchen ankreuzen.
            </p>
          </div>

          <ScrollReveal>
            <img
              src="/tnv-vorschau.jpg"
              alt="Beispiel: Ernteanteil-Tabelle aus der Teilnahmevereinbarung, mit Ankreuzung"
              className="w-full h-auto shadow-xl"
            />
          </ScrollReveal>

          <div className="text-center mt-12 mb-6">
            <p className="lead text-foreground max-w-2xl mx-auto">
              Auf Seite 2 wählst du dein <span className="underline-sketch">Depot</span> — auch hier reicht ein Haken.
            </p>
          </div>

          <ScrollReveal>
            <img
              src="/tnv-depot-vorschau.jpg"
              alt="Beispiel: Depotauswahl aus der Teilnahmevereinbarung, mit Ankreuzung"
              className="w-full h-auto shadow-xl"
            />
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Link to="/mitmachen#teilnahme" className="link-cta hover-underline-pink">
                Teilnahmebedingungen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
