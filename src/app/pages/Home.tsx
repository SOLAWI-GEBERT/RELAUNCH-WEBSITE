import { Link } from "react-router";
import { ArrowRight, Calendar, MapPin, Sprout, Leaf, Apple, Wheat, Cherry, Egg, Carrot, HandCoins, Users, Truck } from "lucide-react";
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
                Frische Produkte direkt vom Hof. Faire Preise für alle.
                Gemeinschaft, die schmeckt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/so-funktionierts"
                  className="btn-cta px-8 py-4 text-lg"
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

      {/* SoLaWi in 60 Sekunden + Was ist Solidarische Landwirtschaft — zusammengelegt */}
      {/* TODO: Farbgebung des Abschnitts noch klären */}
      <section id="solawi-60-sekunden" className="py-24 bg-solawi-blue wave-top wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-foreground">
              SoLaWi in <span className="underline-sketch">60 Sekunden</span>
            </h2>
          </div>

          {/* Was ist Solidarische Landwirtschaft */}
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
                <h3 className="text-2xl mb-6 text-foreground">
                  Was ist{" "}
                  <span className="font-accent text-accent">Solidarische</span>{" "}
                  Landwirtschaft?
                </h3>
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

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="bg-solawi-salmon p-8 hover-tilt h-full text-center">
                <HandCoins className="w-12 h-12 text-cta mx-auto mb-6" />
                <h3 className="text-xl mb-4 text-foreground font-accent">Du bezahlst den Hof, nicht das Produkt</h3>
                <p className="text-gray-700">
                  Du finanzierst die Landwirtschaft direkt, nicht einzelne Tomaten.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-solawi-orange p-8 hover-tilt h-full text-center">
                <Truck className="w-12 h-12 text-cta mx-auto mb-6" />
                <h3 className="text-xl mb-4 text-foreground font-accent">Saisonal & regional — direkt vom Acker</h3>
                <p className="text-gray-700">
                  Bio-Lebensmittel aus der Region, ohne Umwege.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-solawi-mauve p-8 hover-tilt h-full text-center">
                <Users className="w-12 h-12 text-cta mx-auto mb-6" />
                <h3 className="text-xl mb-4 text-foreground font-accent">Gemeinsam tragen wir das Risiko</h3>
                <p className="text-gray-700">
                  Gute Ernte = mehr für alle. Schlechte Ernte = weniger, aber fair geteilt.
                </p>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

            <ScrollReveal delay={0.3}>
              <div className="bg-solawi-green p-8 hover-tilt h-full">
                <img src="/ablauf-depot.jpg" alt="" className="h-36 object-contain mb-6 mx-auto" />
                <h3 className="text-xl mb-4 text-foreground font-accent">Depot in deiner Nähe</h3>
                <p className="text-gray-700 mb-4">
                  Hole deine Ernte wöchentlich an einem unserer Depots ab.
                </p>
                <div className="space-y-1 text-gray-700">
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

      {/* Was bekomme ich? — Produktkarten */}
      <section id="was-bekomme-ich" className="py-24 bg-solawi-blue wave-top wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-foreground">
              Was <span className="underline-sketch">bekomme</span> ich?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Keine Supermarkt-Einheitskiste — sondern das, was die Natur gerade hergibt.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <Link to="/hoefe-und-ernteanteile#hederer-sommer" className="block bg-white p-6 shadow-md hover-tilt h-full group">
                <Carrot className="w-10 h-10 text-cta mb-4" />
                <h3 className="text-lg mb-1 text-foreground font-accent group-hover:text-cta transition-colors">Sommergemüse</h3>
                <p className="text-sm text-gray-500 mb-2">Biohof Tristan</p>
                <p className="text-gray-600 text-sm">Tomaten, Zucchini, Paprika und mehr — frisch vom Feld.</p>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <Link to="/hoefe-und-ernteanteile#tristans-winter" className="block bg-white p-6 shadow-md hover-tilt h-full group">
                <Leaf className="w-10 h-10 text-cta mb-4" />
                <h3 className="text-lg mb-1 text-foreground font-accent group-hover:text-cta transition-colors">Wintergemüse</h3>
                <p className="text-sm text-gray-500 mb-2">Biohof Tristan</p>
                <p className="text-gray-600 text-sm">#TODO mehr spannende/realistische Gemüse Kohl, Wurzelgemüse und Lagerware für die kalte Jahreszeit.</p>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <Link to="/hoefe-und-ernteanteile#hederer-obst" className="block bg-white p-6 shadow-md hover-tilt h-full group">
                <Apple className="w-10 h-10 text-cta mb-4" />
                <h3 className="text-lg mb-1 text-foreground font-accent group-hover:text-cta transition-colors">Obst & Säfte</h3>
                <p className="text-sm text-gray-500 mb-2">Demeterhof Hederer</p>
                <p className="text-gray-600 text-sm">Äpfel, Birnen, Zwetschgen und hausgemachte Säfte.</p>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <Link to="/hoefe-und-ernteanteile#walz-huhn" className="block bg-white p-6 shadow-md hover-tilt h-full group">
                <Egg className="w-10 h-10 text-cta mb-4" />
                <h3 className="text-lg mb-1 text-foreground font-accent group-hover:text-cta transition-colors">Fleisch & Eier</h3>
                <p className="text-sm text-gray-500 mb-2">Demeterhof Walz</p>
                <p className="text-gray-600 text-sm">Weiderind, Hähnchen und frische Eier aus artgerechter Haltung.</p>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Link to="/hoefe-und-ernteanteile#walz-getreide" className="block bg-white p-6 shadow-md hover-tilt h-full group">
                <Wheat className="w-10 h-10 text-cta mb-4" />
                <h3 className="text-lg mb-1 text-foreground font-accent group-hover:text-cta transition-colors">Ur-Getreide</h3>
                <p className="text-sm text-gray-500 mb-2">Demeterhof Walz</p>
                <p className="text-gray-600 text-sm">Emmer, Einkorn und Dinkel — alte Sorten, neu entdeckt.</p>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <Link to="/hoefe-und-ernteanteile#kirschgarten-beeren" className="block bg-white p-6 shadow-md hover-tilt h-full group">
                <Cherry className="w-10 h-10 text-cta mb-4" />
                <h3 className="text-lg mb-1 text-foreground font-accent group-hover:text-cta transition-colors">Bio-Beeren</h3>
                <p className="text-sm text-gray-500 mb-2">Kirschgarten</p>
                <p className="text-gray-600 text-sm">Erdbeeren, Himbeeren und Johannisbeeren in EU-Bio-Qualität.</p>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Unsere Höfe — 4 aktuelle Höfe im 2x2 Grid */}
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

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={0}>
              <div className="bg-white overflow-hidden shadow-lg hover-tilt h-full">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl text-foreground font-accent">Demeterhof Hederer</h3>
                    <span className="badge-frech text-xs">demeter</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Sommergemüse & Obst
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

            <ScrollReveal delay={0.1}>
              <div className="bg-white overflow-hidden shadow-lg hover-tilt h-full">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl text-foreground font-accent">Biohof Tristan</h3>
                    <span className="badge-frech text-xs">Bioland</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Wintergemüse
                  </p>
                  <Link
                    to="/hoefe-und-ernteanteile#tristans"
                    className="text-cta hover:text-cta-hover inline-flex items-center gap-1 font-semibold hover-underline-pink"
                  >
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="bg-white overflow-hidden shadow-lg hover-tilt h-full">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl text-foreground font-accent">Demeterhof Walz</h3>
                    <span className="badge-frech text-xs">demeter</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Fleisch, Eier & Ur-Getreide
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
              <div className="bg-white overflow-hidden shadow-lg hover-tilt h-full">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl text-foreground font-accent">Kirschgarten</h3>
                    <span className="badge-frech text-xs">EU-Bio</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Bio-Beeren
                  </p>
                  <Link
                    to="/hoefe-und-ernteanteile#kirschgarten"
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

      {/* Kosten & Beitragsmodell */}
      {/* Depot finden */}
      {/* Häufige Fragen — Anfänger-FAQ */}
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
                  to="/so-funktionierts"
                  className="btn-cta px-10 py-5 text-xl"
                >
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
