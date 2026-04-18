import { Link } from "react-router";
import { ArrowRight, Calendar, MapPin, Sprout } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

export function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section — FRECH: Pastell + freie Illustration */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden bg-solawi-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center py-16">
            <div className="relative z-10">
              <span className="badge-frech mb-6 inline-block">Solidarische Landwirtschaft</span>
              <h1 className="text-5xl md:text-7xl mb-6 text-foreground leading-tight">
                Stadt, Land,<br />
                <span className="underline-sketch">Beides.</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-foreground/80 max-w-lg">
                Frisches Gemüse direkt vom Hof. Faire Preise für alle.
                Gemeinschaft, die schmeckt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/mitmachen"
                  className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white px-8 py-4 transition-colors text-lg font-accent"
                >
                  Jetzt mitmachen
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/solidarische-landwirtschaft"
                  className="inline-flex items-center justify-center gap-2 border-2 border-foreground text-foreground hover:bg-foreground/10 px-8 py-4 transition-colors"
                >
                  Mehr erfahren
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center items-end">
              <img
                src="/start.png"
                alt="Stadt, Land, Beides — Gummistiefel trifft Stöckelschuh"
                className="h-[350px] md:h-[450px] object-contain drop-shadow-xl hover-wiggle"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Was ist Solidarische Landwirtschaft — Illustration befreit */}
      <section className="py-24 bg-solawi-blue wave-top wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="flex justify-center">
                <img
                  src="/decision-funktion.jpg"
                  alt="So funktioniert SoLaWi — Mitglied, Bauer, Lebensmittel"
                  className="max-h-[400px] object-contain"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <h2 className="text-4xl mb-6 text-foreground">
                  Was ist{" "}
                  <span className="font-accent text-accent">Solidarische</span>{" "}
                  Landwirtschaft?
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Solidarische Landwirtschaft (SoLaWi) ist eine innovative Partnerschaft zwischen
                  landwirtschaftlichen Betrieben und Verbraucher*innen. Gemeinsam tragen wir die
                  Verantwortung, das Risiko und die Ernte.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Durch direkte Zusammenarbeit schaffen wir eine nachhaltige, regionale und
                  transparente Lebensmittelversorgung – für Mensch und Umwelt.
                </p>
                <Link
                  to="/solidarische-landwirtschaft"
                  className="inline-flex items-center gap-2 text-cta hover:text-cta-hover font-accent hover-underline-pink"
                >
                  Mehr über SoLaWi erfahren
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Warum mitmachen — Signature-Grafiken statt Icons */}
      <section className="py-24 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-foreground">
              Warum <span className="underline-sketch">mitmachen</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Gemeinsam gestalten wir eine nachhaltige Zukunft und genießen frische,
              regionale Lebensmittel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="bg-solawi-salmon p-8 hover-tilt h-full">
                <img src="/features-nachhaltigkeit.jpg" alt="" className="h-36 object-contain mb-6 mx-auto" />
                <h3 className="text-xl mb-4 text-foreground font-accent">Nachhaltig & Regional</h3>
                <p className="text-gray-700">
                  Frische Lebensmittel direkt vom Hof in deiner Region.
                  Kurze Transportwege und ökologischer Anbau schonen die Umwelt.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-solawi-orange p-8 hover-tilt h-full">
                <img src="/features-gemeinschaft.jpg" alt="" className="h-36 object-contain mb-6 mx-auto" />
                <h3 className="text-xl mb-4 text-foreground font-accent">Gemeinschaft</h3>
                <p className="text-gray-700">
                  Werde Teil einer lebendigen Gemeinschaft. Lerne die Landwirt*innen
                  kennen und gestalte aktiv mit.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-solawi-mauve p-8 hover-tilt h-full">
                <img src="/features-lebensmittel.jpg" alt="" className="h-36 object-contain mb-6 mx-auto" />
                <h3 className="text-xl mb-4 text-foreground font-accent">Vielfalt & Transparenz</h3>
                <p className="text-gray-700">
                  Volle Transparenz: Du weißt genau, wo dein Essen herkommt und
                  wie es angebaut wird. Saisonal, vielfältig, ehrlich.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Unsere Höfe — echte Fotos + Signature-Icon Overlay */}
      <section className="py-24 bg-solawi-mauve wave-top wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-foreground">
              Unsere Partner-Höfe
            </h2>
            <p className="text-xl text-gray-600">
              Lerne die Höfe kennen, die uns mit frischen Lebensmitteln versorgen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="bg-white overflow-hidden shadow-lg hover-tilt">
                <div className="h-48 overflow-hidden relative">
                  <img src="/fotos/reimehof-ziege.jpg" alt="Reimehof" className="w-full h-full object-cover" />
                  <img src="/inline-hof.jpg" alt="" className="absolute -bottom-3 -right-2 w-14 h-14 rotate-6 drop-shadow-md" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-foreground font-accent">Reimehof</h3>
                  <p className="text-gray-600 mb-4">
                    Sommergemüse in Bio-Qualität aus regionalem Anbau
                  </p>
                  <Link
                    to="/hoefe-und-ernteanteile#reimehof"
                    className="text-cta hover:text-cta-hover inline-flex items-center gap-1 font-semibold hover-underline-pink"
                  >
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-white overflow-hidden shadow-lg hover-tilt">
                <div className="h-48 overflow-hidden relative">
                  <img src="/fotos/walz-weide.jpg" alt="Biohof Walz" className="w-full h-full object-cover" />
                  <img src="/inline-kuerbis.jpg" alt="" className="absolute -bottom-3 -right-2 w-14 h-14 -rotate-6 drop-shadow-md" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-foreground font-accent">Biohof Walz</h3>
                  <p className="text-gray-600 mb-4">
                    Wintergemüse und Lagergemüse für die kalte Jahreszeit
                  </p>
                  <Link
                    to="/hoefe-und-ernteanteile#walz"
                    className="text-cta hover:text-cta-hover inline-flex items-center gap-1 font-semibold hover-underline-pink"
                  >
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white overflow-hidden shadow-lg hover-tilt">
                <div className="h-48 overflow-hidden relative">
                  <img src="/fotos/lillinghof-obstbau.jpg" alt="Obst vom Hederer" className="w-full h-full object-cover" />
                  <img src="/depot.png" alt="" className="absolute -bottom-2 -right-1 w-12 h-12 rotate-12 drop-shadow-md" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-foreground font-accent">Obst vom Hederer</h3>
                  <p className="text-gray-600 mb-4">
                    Frisches Obst aus biologischem Anbau direkt vom Erzeuger
                  </p>
                  <Link
                    to="/hoefe-und-ernteanteile#hederer"
                    className="text-cta hover:text-cta-hover inline-flex items-center gap-1 font-semibold hover-underline-pink"
                  >
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* So funktioniert's — Ablauf-Illustrationen statt Nummernkreise */}
      <section className="py-24 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-foreground">
              So funktioniert's
            </h2>
            <p className="text-xl text-gray-600">
              In drei einfachen Schritten zur Mitgliedschaft
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="text-center relative">
                <span className="badge-frech absolute -top-2 left-4 z-10 text-lg">1</span>
                <div className="bg-solawi-green p-6 mb-6">
                  <img src="/ablauf-hof.jpg" alt="Höfe in der Region" className="h-48 object-contain mx-auto hover-wiggle" />
                </div>
                <h3 className="text-xl mb-4 text-foreground font-accent">Ernteanteil wählen</h3>
                <p className="text-gray-600">
                  Wähle deinen Ernteanteil und entscheide, welche Höfe du unterstützen möchtest.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="text-center relative">
                <span className="badge-frech absolute -top-2 left-4 z-10 text-lg">2</span>
                <div className="bg-solawi-blue p-6 mb-6">
                  <img src="/ablauf-depot.jpg" alt="Depot in der Stadt" className="h-48 object-contain mx-auto hover-wiggle" />
                </div>
                <h3 className="text-xl mb-4 text-foreground font-accent">Depot auswählen</h3>
                <p className="text-gray-600">
                  Finde ein Depot in deiner Nähe, wo du wöchentlich deine frischen Lebensmittel abholen kannst.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="text-center relative">
                <span className="badge-frech absolute -top-2 left-4 z-10 text-lg">3</span>
                <div className="bg-solawi-orange p-6 mb-6">
                  <img src="/ablauf-mitmachen.jpg" alt="Gemeinsam ernten" className="h-48 object-contain mx-auto hover-wiggle" />
                </div>
                <h3 className="text-xl mb-4 text-foreground font-accent">Genießen & mitmachen</h3>
                <p className="text-gray-600">
                  Hole deine Ernte ab und werde Teil der Gemeinschaft bei Hofaktionen und Veranstaltungen.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link
                to="/mitmachen"
                className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white px-8 py-4 transition-colors text-lg font-accent"
              >
                Jetzt Mitglied werden
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Aktuelle Veranstaltungen */}
      <section className="py-24 bg-solawi-orange wave-top relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl mb-4 text-foreground">
                Aktuelle Veranstaltungen
              </h2>
              <p className="text-xl text-gray-700">
                Komm vorbei und lerne uns kennen!
              </p>
            </div>
            <Link
              to="/kalender"
              className="hidden md:inline-flex items-center gap-2 text-cta hover:text-cta-hover font-accent hover-underline-pink"
            >
              Alle Termine
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <div className="bg-white p-6 shadow-md hover-tilt">
                <div className="flex items-start gap-4">
                  <div className="bg-cta/10 p-3 flex-shrink-0">
                    <Calendar className="w-6 h-6 text-cta" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-1">15. März 2026</div>
                    <h3 className="text-lg mb-2 text-foreground font-accent">Hofaktion Reimehof</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Gemeinsames Pflanzen und Kennenlernen
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>Reimehof, Musterstadt</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-white p-6 shadow-md hover-tilt">
                <div className="flex items-start gap-4">
                  <div className="bg-cta/10 p-3 flex-shrink-0">
                    <Sprout className="w-6 h-6 text-cta" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-1">22. März 2026</div>
                    <h3 className="text-lg mb-2 text-foreground font-accent">Info-Veranstaltung</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Erfahre mehr über Solidarische Landwirtschaft
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>Online via Zoom</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white p-6 shadow-md hover-tilt">
                <div className="flex items-start gap-4">
                  <div className="bg-cta/10 p-3 flex-shrink-0">
                    <Calendar className="w-6 h-6 text-cta" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-1">5. April 2026</div>
                    <h3 className="text-lg mb-2 text-foreground font-accent">Ernte-Fest</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Gemeinsames Feiern und Ernten
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>Biohof Walz</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link
              to="/kalender"
              className="inline-flex items-center gap-2 text-cta hover:text-cta-hover font-accent"
            >
              Alle Termine
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section — Bauer zeigt auf DICH */}
      <section className="py-24 bg-solawi-green relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <ScrollReveal direction="left" className="hidden md:flex justify-center">
              <img
                src="/features-mitmachen.jpg"
                alt="Bauer zeigt auf dich"
                className="h-[320px] object-contain hover-wiggle"
              />
            </ScrollReveal>
            <ScrollReveal className="md:col-span-2 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl mb-6 text-foreground">
                Bereit für <span className="underline-sketch">frische</span>, regionale Lebensmittel?
              </h2>
              <p className="text-xl mb-8 text-foreground/80">
                Werde Teil unserer Gemeinschaft und unterstütze nachhaltige Landwirtschaft in deiner Region.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  to="/anmeldung"
                  className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white px-10 py-5 transition-colors text-xl font-accent"
                >
                  Jetzt anmelden
                  <ArrowRight className="w-6 h-6" />
                </Link>
                <Link
                  to="/mitmachen"
                  className="inline-flex items-center justify-center gap-2 border-2 border-foreground text-foreground hover:bg-foreground/10 px-8 py-4 transition-colors"
                >
                  Mehr Informationen
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
