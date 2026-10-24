import { Link } from "react-router";
import { ArrowRight, MapPin, HandCoins, Users, Truck } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import { hoefe } from "../data/hoefe";
import { kachelNach, kategorieIcons } from "../data/ernteanteile";

/** Auswahl der Ernteanteile in "Was bekomme ich?" — Texte kommen aus den Daten. */
const kachelSlugs = [
  "tristan-gemuese",
  "schweigerts-edelpilze",
  "kirschgarten-beeren",
  "walz-huhn",
  "walz-getreide",
  "walz-hack",
];

/**
 * Referenz-Seite für den Styleguide (docs/styleguide.md):
 * Überschriften ohne Größen-Utilities (h1/h2/h3/h4 aus theme.css),
 * Fließtext ohne Farbklassen, `lead`/`meta` als einzige Textstufen,
 * Buttons über `btn-cta`, Icons in `text-cta`.
 */
export function Home() {
  return (
    <div className="bg-white">
      {/* Hero — Pastell + freie Illustration */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden bg-solawi-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center py-16 md:py-20">
            <div className="relative z-10">
              <span className="badge-frech mb-8 inline-block">Solidarische Landwirtschaft</span>
              <h1 className="mb-8">
                Stadt, Land,<br />
                <span className="underline-sketch">Beides.</span>
              </h1>
              <p className="lead md:text-2xl mb-10 max-w-lg">
                Frische Produkte direkt vom Hof. Faire Preise für alle.
                Gemeinschaft, die schmeckt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/so-funktionierts" className="btn-cta btn-cta-lg">
                  Jetzt dabei sein
                  <ArrowRight className="w-5 h-5" />
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

      {/* SoLaWi in 60 Sekunden + Was ist Solidarische Landwirtschaft */}
      <section id="solawi-60-sekunden" className="py-20 bg-solawi-blue wave-top wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2>
              SoLaWi in <span className="underline-sketch">60 Sekunden</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
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
                <h3 className="mb-6">
                  Was ist <span className="text-accent">Solidarische</span> Landwirtschaft?
                </h3>
                <p className="lead text-foreground mb-6">
                  Solidarische Landwirtschaft (SoLaWi) ist eine innovative Partnerschaft zwischen
                  landwirtschaftlichen Betrieben und Verbraucher*innen. Gemeinsam tragen wir die
                  Verantwortung, das Risiko und die Ernte.
                </p>
                <p className="lead text-foreground mb-8">
                  Durch direkte Zusammenarbeit schaffen wir eine nachhaltige, regionale und
                  transparente Lebensmittelversorgung – für Mensch und Umwelt.
                </p>
                <Link to="/solidarische-landwirtschaft" className="link-cta hover-underline-pink">
                  Mehr über SoLaWi erfahren
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Drei Argumente — Pastellkarten mit Icon (Feature-Addon im Export) */}
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="bg-solawi-salmon p-8 hover-tilt h-full text-center">
                <HandCoins className="w-12 h-12 text-cta mx-auto mb-6" />
                <h3 className="mb-4">Du bezahlst den Hof, nicht das Produkt</h3>
                <p className="text-foreground">
                  Du finanzierst die Landwirtschaft direkt, nicht einzelne Tomaten.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-solawi-orange p-8 hover-tilt h-full text-center">
                <Truck className="w-12 h-12 text-cta mx-auto mb-6" />
                <h3 className="mb-4">Saisonal & regional — direkt vom Acker</h3>
                <p className="text-foreground">
                  Bio-Lebensmittel aus der Region, ohne Umwege.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-solawi-mauve p-8 hover-tilt h-full text-center">
                <Users className="w-12 h-12 text-cta mx-auto mb-6" />
                <h3 className="mb-4">Gemeinsam tragen wir das Risiko</h3>
                <p className="text-foreground">
                  Gute Ernte = mehr für alle. Schlechte Ernte = weniger, aber fair geteilt.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Warum mitmachen — Signature-Grafiken statt Icons */}
      <section className="py-20 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6">
              Warum <span className="underline-sketch">mitmachen</span>?
            </h2>
            <p className="lead max-w-2xl mx-auto">
              Gemeinsam gestalten wir eine nachhaltige Zukunft und genießen frische,
              regionale Lebensmittel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            <ScrollReveal delay={0}>
              <div className="bg-solawi-salmon p-8 hover-tilt lg:mt-0">
                <img src="/features-nachhaltigkeit.jpg" alt="" className="h-36 object-contain mb-6 mx-auto" />
                <h3 className="mb-4">Nachhaltig & Regional</h3>
                <p className="text-foreground">
                  Frische Lebensmittel direkt vom Hof in deiner Region.
                  Kurze Transportwege und ökologischer Anbau schonen die Umwelt.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-solawi-orange p-8 pb-14 hover-tilt lg:mt-12">
                <img src="/features-gemeinschaft.jpg" alt="" className="h-36 object-contain mb-6 mx-auto" />
                <h3 className="mb-4">Gemeinschaft</h3>
                <p className="text-foreground">
                  Werde Teil einer lebendigen Gemeinschaft. Lerne die Landwirt*innen
                  kennen und gestalte aktiv mit.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-solawi-mauve p-8 pb-5 hover-tilt lg:mt-4">
                <img src="/features-lebensmittel.jpg" alt="" className="h-36 object-contain mb-6 mx-auto" />
                <h3 className="mb-4">Vielfalt & Transparenz</h3>
                <p className="text-foreground">
                  Volle Transparenz: Du weißt genau, wo dein Essen herkommt und
                  wie es angebaut wird. Saisonal, vielfältig, ehrlich.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-solawi-green p-8 pb-10 hover-tilt lg:mt-20">
                <img src="/ablauf-depot.jpg" alt="" className="h-36 object-contain mb-6 mx-auto" />
                <h3 className="mb-4">Depot in deiner Nähe</h3>
                <p className="text-foreground mb-4">
                  Hole deine Ernte wöchentlich an einem unserer Depots ab.
                </p>
                <div className="space-y-1 text-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cta" />
                    <span>Nürnberg</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cta" />
                    <span>Fürth</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Was bekomme ich? — Produktkarten (Weißkarten mit h4 + meta) */}
      <section id="was-bekomme-ich" className="py-20 bg-solawi-blue wave-top wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6">
              Was <span className="underline-sketch">bekomme</span> ich?
            </h2>
            <p className="lead text-foreground max-w-2xl mx-auto">
              Keine Supermarkt-Einheitskiste — sondern das, was die Natur gerade hergibt.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kachelSlugs.map((slug, i) => {
              const kachel = kachelNach(slug)!;
              const Icon = kategorieIcons[kachel.kategorie];
              return (
                <ScrollReveal key={slug} delay={i * 0.05}>
                  <Link to={`/ernteanteile/${slug}`} className="block bg-white p-6 shadow-md hover-tilt h-full group">
                    <Icon className="w-10 h-10 text-cta mb-4" />
                    <h4 className="mb-1 group-hover:text-cta transition-colors">{kachel.titel}</h4>
                    <p className="meta mb-3">{hoefe[kachel.hof].name}</p>
                    <p>{kachel.kurz}</p>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA — Bauer zeigt auf DICH */}
      <section className="py-20 bg-solawi-green relative overflow-hidden">
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
              <h2 className="mb-6">
                Bereit für <span className="underline-sketch">frische</span>, regionale Lebensmittel?
              </h2>
              <p className="lead text-foreground mb-8">
                Werde Teil unserer Gemeinschaft und unterstütze nachhaltige Landwirtschaft in deiner Region.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/so-funktionierts" className="btn-cta btn-cta-lg">
                  Jetzt mitmachen
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
