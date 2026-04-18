import { Link } from "react-router";
import { ArrowRight, Calendar, MapPin, Sprout, HelpCircle, Leaf, Apple, Wheat, Cherry, Egg, Carrot, HandCoins, Users, Truck, Mail } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

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

      {/* SoLaWi in 60 Sekunden */}
      <section id="solawi-60-sekunden" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-foreground">
              SoLaWi in <span className="underline-sketch">60 Sekunden</span>
            </h2>
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
                <p className="text-sm text-gray-500 mb-2">Demeterhof Hederer</p>
                <p className="text-gray-600 text-sm">Tomaten, Zucchini, Paprika und mehr — frisch vom Feld.</p>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <Link to="/hoefe-und-ernteanteile#tristans-winter" className="block bg-white p-6 shadow-md hover-tilt h-full group">
                <Leaf className="w-10 h-10 text-cta mb-4" />
                <h3 className="text-lg mb-1 text-foreground font-accent group-hover:text-cta transition-colors">Wintergemüse</h3>
                <p className="text-sm text-gray-500 mb-2">Biohof Tristan</p>
                <p className="text-gray-600 text-sm">Kohl, Wurzelgemüse und Lagerware für die kalte Jahreszeit.</p>
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

      {/* So funktioniert's — Ablauf-Illustrationen statt Nummernkreise */}
      <section id="so-funktionierts" className="py-24 mt-8">
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

      {/* Kosten & Beitragsmodell */}
      <section id="kosten-beitragsmodell" className="py-24 bg-solawi-salmon wave-top wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-foreground">
              Was <span className="underline-sketch">kostet</span> das?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kein Gewinnaufschlag, keine Handelsspanne. Dein Beitrag deckt, was der Hof zum Wirtschaften braucht.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <ScrollReveal delay={0}>
              <div className="bg-white p-6 shadow-md hover-tilt text-center h-full">
                <Wheat className="w-8 h-8 text-cta mx-auto mb-3" />
                <p className="text-3xl font-accent text-foreground mb-1">ab 6,90€</p>
                <p className="text-sm text-gray-500 mb-2">pro Monat</p>
                <p className="text-gray-700 font-accent">Ur-Getreide</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <div className="bg-white p-6 shadow-md hover-tilt text-center h-full">
                <Cherry className="w-8 h-8 text-cta mx-auto mb-3" />
                <p className="text-3xl font-accent text-foreground mb-1">ab 38€</p>
                <p className="text-sm text-gray-500 mb-2">pro Monat</p>
                <p className="text-gray-700 font-accent">Bio-Beeren</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-white p-6 shadow-md hover-tilt text-center h-full">
                <Leaf className="w-8 h-8 text-cta mx-auto mb-3" />
                <p className="text-3xl font-accent text-foreground mb-1">ab 72,10€</p>
                <p className="text-sm text-gray-500 mb-2">pro Monat</p>
                <p className="text-gray-700 font-accent">Wintergemüse <span className="text-sm text-gray-500">(halber Anteil)</span></p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="bg-white p-6 shadow-md hover-tilt text-center h-full">
                <Carrot className="w-8 h-8 text-cta mx-auto mb-3" />
                <p className="text-3xl font-accent text-foreground mb-1">bis 136,20€</p>
                <p className="text-sm text-gray-500 mb-2">pro Monat</p>
                <p className="text-gray-700 font-accent">Wintergemüse <span className="text-sm text-gray-500">(ganzer Anteil)</span></p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg text-gray-700 mb-8">
                Bei manchen Höfen bestimmst du bei der Jahreshauptversammlung mit, was du zahlen kannst.
                So entsteht ein sozialer Ausgleich.
              </p>
              <Link
                to="/mitmachen#ernteteile"
                className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white px-8 py-4 transition-colors text-lg font-accent"
              >
                Alle Ernteanteile im Überblick
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Depot finden */}
      <section id="depot-finden" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-foreground">
              Depot in <span className="underline-sketch">deiner Nähe</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hole deine Ernte wöchentlich an einem unserer Depots ab.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
            <ScrollReveal delay={0}>
              <div className="bg-solawi-green p-8 hover-tilt">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-cta" />
                  <h3 className="text-xl text-foreground font-accent">Nürnberg</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>St. Peter</li>
                  <li>Stadtpark</li>
                  <li>Die Wiese</li>
                  <li>Johannis</li>
                  <li>Gostenhof</li>
                  <li>AKi</li>
                  <li>Altenfurt</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-solawi-orange p-8 hover-tilt">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-cta" />
                  <h3 className="text-xl text-foreground font-accent">Fürth</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>Tataa</li>
                  <li>Spiegelfabrik</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="text-center">
              <Link
                to="/lieferung-kalender#karte"
                className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white px-8 py-4 transition-colors text-lg font-accent"
              >
                Alle Depots auf der Karte
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Aktuelles */}
      <section id="aktuelles" className="py-24 bg-solawi-orange wave-top relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-foreground">
              Aktuelles
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Termine für Hofaktionen, Mitmachaktionen und Veranstaltungen erfährst du über unseren Newsletter und die Hof-Post per E-Mail.
            </p>
          </div>

          <ScrollReveal>
            <div className="text-center">
              <Link
                to="/kontakt-anmeldung"
                className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white px-8 py-4 transition-colors text-lg font-accent"
              >
                <Mail className="w-5 h-5" />
                Zum Newsletter anmelden
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Häufige Fragen — Anfänger-FAQ */}
      <section id="faq" className="py-16 bg-solawi-salmon-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Häufige Fragen
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm px-6">
              <AccordionItem value="was-ist-solawi">
                <AccordionTrigger className="text-base font-semibold">
                  Was ist Solawi?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  „Möchte ich daraus bestehen?", hat schon ein bekannter Comedian gefragt und
                  trifft damit den Nagel auf den Kopf. Bei der Solidarischen Landwirtschaft
                  (Solawi) geht es darum, regionale, saisonale und authentische
                  Bio-Lebensmittel anzubauen und zu beziehen. Du bezahlst nicht das einzelne
                  Produkt, sondern den Preis, den es kostet, das Lebensmittel herzustellen.
                  So kannst du dich als „Städter" direkt mit dem Bauernhof verbinden und
                  gemeinsam den Anbau planen — und das Risiko für die Ernte wird gemeinsam
                  getragen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="unterschied-biomarkt">
                <AccordionTrigger className="text-base font-semibold">
                  Was unterscheidet eine Solawi vom Bio-Markt/Hofladen?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Bei der Solawi baust du eine direkte Verbindung mit dem erzeugenden Hof auf.
                  Du weißt genau, wo dein Essen herkommt, wie es angebaut und mit welchen
                  Stoffen es behandelt wurde. Im Bio-Markt bleibt das oft unklar — die
                  gesetzliche Landesangabe ist zu ungenau. Wer sich fragt, warum die Birne
                  aus Frankreich kommt, ist bei uns genau richtig.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="unterschied-abokiste">
                <AccordionTrigger className="text-base font-semibold">
                  Was unterscheidet die Solawi von der „Abo-Kiste/Öko-Kiste"?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Bei einer Solawi steht die Verbindung der Ernteteiler mit dem Landwirt im
                  Vordergrund. Du bestellst nicht nach Belieben, sondern trägst mit einem
                  festen Beitrag dazu bei, dass der Hof wirtschaften kann. So nehmen wir die
                  gesamte Ernte ab und bezahlen dem Landwirt seine vollständigen Ausgaben —
                  für nachhaltige Biodiversität und Fruchtbarkeit der Erde.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="besondere-slb">
                <AccordionTrigger className="text-base font-semibold">
                  Was ist das Besondere an Stadt, Land, Beides.?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Bei „Stadt, Land, Beides." machen mehrere Höfe mit — du kannst dich auf
                  einem oder mehreren Höfen engagieren. Dadurch steht dir eine breite Palette
                  an Lebensmitteln zur Auswahl: von Gemüse und Obst über Fleisch und Eier bis
                  hin zu Ur-Getreide und Bio-Beeren.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mehrere-landwirte">
                <AccordionTrigger className="text-base font-semibold">
                  Wieso sind mehrere Landwirte dabei?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Als die Solawi in Nürnberg gegründet wurde, haben sich mehrere Landwirte
                  gemeldet. Ziel ist es, diesen Höfen durch Solawi ein festes Standbein zu
                  geben — im Idealfall komplett Solawi zu sein. Die unterschiedlichen
                  Produkte ermöglichen es dir, bei mehreren Höfen mitzumachen.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollReveal>
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
