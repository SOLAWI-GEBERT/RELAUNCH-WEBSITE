import { Link } from "react-router";
import {
  ArrowRight,
  Users,
  Target,
  Sprout,
  Scale,
  ShieldCheck,
  Leaf,
  Globe,
  TrendingUp,
  Tractor,
  MapPin,
} from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

export function SolidarischeLandwirtschaft() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative min-h-[320px] flex items-center bg-solawi-orange wave-bottom z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center py-12 md:py-14">
            <div>
              <span className="badge-frech mb-6 inline-block">Über uns</span>
              <h1 className="h1-seite mb-6">
                Solidarische Landwirtschaft
              </h1>
              <p className="lead max-w-lg">
                Eine weltweite Idee — lokal gelebt in der Metropolregion
                Nürnberg
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/features-gemeinschaft.jpg"
                alt="Gemeinschaft"
                className="h-[220px] md:h-[260px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Was ist SoLaWi */}
      <section id="was-ist" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8">
            Was ist <span className="underline-sketch">Solidarische Landwirtschaft</span>?
          </h2>

          <div className="space-y-6">
            <p className="lead">
              Bei der Solidarischen Landwirtschaft (SoLaWi) bezahlst du nicht
              das einzelne Produkt, sondern einen festen Geldbetrag, mit dem der
              Hof wirtschaftet. Damit gibst du dem Hof eine verbindliche und
              langfristige Finanzierungsgrundlage. Im Gegenzug teilst du dir
              zusammen mit den anderen Ernteteilern die Ernte — und das Risiko
              wird gemeinsam getragen.
            </p>

            <p>
              Angesprochen sind Menschen, die keine industrielle Produktion von
              Lebensmitteln wollen — ohne Chemie, Zusatzstoffe, umweltbelastende
              Verpackungen, Ausbeutung der Böden oder lange Transportwege.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0}>
              <div className="bg-solawi-green p-8 h-full">
                <Sprout className="w-12 h-12 text-cta mb-4" />
                <h3 className="mb-4">Für die Landwirte</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Planbare Einnahmen statt Marktpreisdruck</li>
                  <li>• Langfristige Finanzierungsgrundlage</li>
                  <li>• Direkte Wertschätzung der Arbeit</li>
                  <li>• Freiheit, so anzubauen, wie es richtig ist</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="bg-solawi-mauve p-8 h-full">
                <Users className="w-12 h-12 text-cta mb-4" />
                <h3 className="mb-4">Für die Ernteteiler</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Frische, saisonale Bio-Lebensmittel</li>
                  <li>• Du weißt genau, wo dein Essen herkommt</li>
                  <li>• Kein Gewinnaufschlag, keine Handelsspanne</li>
                  <li>• Teil einer solidarischen Gemeinschaft</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Leitbild */}
      <section id="leitbild" className="py-20 bg-solawi-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
            <h2>Unser Leitbild</h2>
            {/* Ohne Pastellfeld: die Grafik hat denselben Blauton wie die Sektion und
                läuft randlos in die Fläche. */}
            <img
              src="/features-landwirtschaft.jpg"
              alt="Zwei Hände planen mit Stift und Tablet ein Feld mit Erdbeere, Tomate und Kartoffel"
              className="h-[170px] object-contain sm:ml-auto"
            />
          </div>

          <ScrollReveal>
            <div className="bg-white p-8 shadow-md">
              <p className="lead italic mb-6">
                „Die Solawi Initiative Nürnberg ist eine solidarische Gemeinschaft
                von Erzeugerinnen/Erzeugern und Verbraucherinnen/Verbrauchern, die
                sich wertschätzen, vertrauen, verstehen, Bedürfnisse wechselseitig
                abgleichen und Risiken gemeinsam tragen. Jede/r soll sich aktiv
                einbringen, wohlfühlen, genießen können."
              </p>
              <p className="meta">— Leitbild des Vereins, definiert 2014</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <ScrollReveal delay={0.0}>
              <div className="bg-white p-6 shadow-md h-full">
                <ShieldCheck className="w-10 h-10 text-cta mb-3" />
                <h4 className="mb-2">EU Bio als Mindeststandard</h4>
                <p>Alle unsere Höfe sind mindestens EU-Bio-zertifiziert — die meisten erfüllen die strengeren Demeter- oder Bioland-Richtlinien.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="bg-white p-6 shadow-md h-full">
                <Scale className="w-10 h-10 text-cta mb-3" />
                <h4 className="mb-2">Faire Preise & Solidarität</h4>
                <p>Durch die Bieterrunde bestimmst du mit, was du zahlen kannst. So entsteht ein sozialer Ausgleich — jeder trägt bei, was er kann.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.0}>
              <div className="bg-white p-6 shadow-md h-full">
                <Leaf className="w-10 h-10 text-cta mb-3" />
                <h4 className="mb-2">Nachhaltigkeit & Biodiversität</h4>
                <p>Das Wohl von Menschen, Tieren, Pflanzen und Boden steht im Mittelpunkt — ausgerichtet an den Grundprinzipien der Nachhaltigkeit.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="bg-white p-6 shadow-md h-full">
                <Target className="w-10 h-10 text-cta mb-3" />
                <h4 className="mb-2">Regionale Versorgung</h4>
                <p>Großstadt verbindet sich mit Um-Land — das Ziel ist eine autarke Versorgung mit Lebensmitteln durch Solawi-Betriebe.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SoLaWi weltweit — Fun Facts */}
      <section id="weltweit" className="py-20 bg-solawi-aubergine">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center mb-12">
            <div>
              <h2 className="mb-4">
                SoLaWi <span className="underline-sketch">weltweit</span>
              </h2>
              <p className="lead">
                Die Idee ist nicht neu — und sie wächst überall.
              </p>
            </div>
            {/* Die Sektion trägt den Flieder des Bildes (Token solawi-aubergine), damit die Grafik randlos einläuft. */}
            <img
              src="/Kuerbiswelt_web.png"
              alt="Menschen aus aller Welt halten gemeinsam einen Riesenkürbis, auf dem die Erdkugel zu sehen ist"
              className="w-64 md:w-80 h-auto mx-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ScrollReveal delay={0.0}>
              <div className="bg-white p-6 shadow-md h-full">
                <Globe className="w-10 h-10 text-cta mb-3" />
                <h4 className="mb-2">Ursprung in Japan</h4>
                <p>Die Idee entstand in den 1960er Jahren in Japan als „Teikei" (提携 — Partnerschaft). Japanische Hausfrauen schlossen sich zusammen, weil sie wissen wollten, was in ihrem Essen steckt. Heute gibt es in Japan über 1.000 Teikei-Gruppen.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="bg-white p-6 shadow-md h-full">
                <TrendingUp className="w-10 h-10 text-cta mb-3" />
                <h4 className="mb-2">CSA in Nordamerika</h4>
                <p>In den USA und Kanada heißt es „Community Supported Agriculture" (CSA). Die erste US-Farm startete 1986 in Massachusetts. Heute gibt es über 7.000 CSA-Farmen in Nordamerika — von Kleinstädten bis New York City.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.0}>
              <div className="bg-white p-6 shadow-md h-full">
                <Tractor className="w-10 h-10 text-cta mb-3" />
                <h4 className="mb-2">AMAP in Frankreich</h4>
                <p>Die französische Variante „AMAP" (Association pour le maintien d'une agriculture paysanne) startete 2001 in der Provence. Heute versorgen über 2.000 AMAP-Gruppen mehr als 300.000 Familien mit lokalen Lebensmitteln.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="bg-white p-6 shadow-md h-full">
                <MapPin className="w-10 h-10 text-cta mb-3" />
                <h4 className="mb-2">SoLaWi in Deutschland</h4>
                <p>Die erste deutsche SoLaWi entstand 1988 auf dem Buschberghof bei Hamburg. Seit 2011 gibt es das Netzwerk Solidarische Landwirtschaft e.V. — inzwischen sind über 400 SoLaWi-Betriebe in Deutschland aktiv und versorgen mehr als 100.000 Menschen.</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Fun Facts */}
          <h3 className="mb-6">Fun Facts</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ScrollReveal delay={0.0}>
              <div className="bg-white p-5 text-center h-full">
                <h3 className="text-cta mb-1">60+</h3>
                <p className="meta">Länder mit SoLaWi-Initiativen — von Kuba bis Südkorea</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-5 text-center h-full">
                <h3 className="text-cta mb-1">1965</h3>
                <p className="meta">Start der ersten Teikei-Gruppe in Japan</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-white p-5 text-center h-full">
                <h3 className="text-cta mb-1">400+</h3>
                <p className="meta">SoLaWi-Betriebe in Deutschland</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.0}>
              <div className="bg-white p-5 text-center h-full">
                <h3 className="text-cta mb-1">30 %</h3>
                <p className="meta">weniger Lebensmittelverschwendung bei SoLaWi vs. Supermarkt</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-5 text-center h-full">
                <h3 className="text-cta mb-1">0 km</h3>
                <p className="meta">Umweg über Großmarkt — vom Acker direkt ins Depot</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-white p-5 text-center h-full">
                <h3 className="text-cta mb-1">100 %</h3>
                <p className="meta">der Ernte wird verwertet — auch die krumme Gurke</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Netzwerk */}
      <section id="netzwerk" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8">Netzwerk Solidarische Landwirtschaft</h2>

          <div className="space-y-6">
            <p className="lead">
              Wir sind Teil des bundesweiten Netzwerks Solidarische
              Landwirtschaft e.V. Der Netzwerkbeitrag von 0,50€/Monat pro
              Ernteteiler fließt in die Verbreitung der solidarischen
              Landwirtschaft in Deutschland.
            </p>

            <ScrollReveal>
              <div className="bg-solawi-gray p-8">
                <h4 className="mb-4">Das Netzwerk bietet:</h4>
                <ul className="space-y-2 text-foreground">
                  <li>• Austausch und Vernetzung zwischen SoLawis</li>
                  <li>• Beratung für Gründer</li>
                  <li>• Öffentlichkeitsarbeit und Bildungsangebote</li>
                  <li>• Politische Interessenvertretung</li>
                </ul>
              </div>
            </ScrollReveal>

            <p>
              Mehr Informationen:{" "}
              <a
                href="https://www.solidarische-landwirtschaft.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cta hover:text-accent underline"
              >
                www.solidarische-landwirtschaft.org
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-solawi-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">
            Möchtest du Teil unserer <span className="underline-sketch">Gemeinschaft</span> werden?
          </h2>
          <p className="lead text-foreground mb-8">
            Werde Ernteteiler und unterstütze nachhaltige Landwirtschaft in
            deiner Region.
          </p>
          <Link to="/mitmachen" className="btn-cta btn-cta-lg">
            Ernteteiler werden
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
