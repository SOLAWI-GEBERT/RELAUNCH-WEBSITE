import { Link } from "react-router";
import {
  ArrowRight,
  Users,
  Target,
  Heart,
  Sprout,
  Scale,
  ShieldCheck,
  Leaf,
  Globe,
  TrendingUp,
  Tractor,
  MapPin,
} from "lucide-react";

export function SolidarischeLandwirtschaft() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-solawi-orange py-16 wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="badge-frech mb-4 inline-block">Über uns</span>
              <h1 className="text-5xl mb-4 text-foreground">
                Solidarische Landwirtschaft
              </h1>
              <p className="text-xl text-foreground/80">
                Eine weltweite Idee — lokal gelebt in der Metropolregion
                Nürnberg
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/features-gemeinschaft.jpg"
                alt="Gemeinschaft"
                className="h-[280px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Was ist SoLaWi */}
      <section id="was-ist" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-foreground">
            Was ist Solidarische Landwirtschaft?
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
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
            <div className="bg-solawi-green p-6 rounded-lg">
              <Sprout className="w-10 h-10 text-cta mb-4" />
              <h3 className="text-xl mb-3 text-foreground">
                Für die Landwirte
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Planbare Einnahmen statt Marktpreisdruck</li>
                <li>• Langfristige Finanzierungsgrundlage</li>
                <li>• Direkte Wertschätzung der Arbeit</li>
                <li>• Freiheit, so anzubauen, wie es richtig ist</li>
              </ul>
            </div>

            <div className="bg-solawi-mauve p-6 rounded-lg">
              <Users className="w-10 h-10 text-cta mb-4" />
              <h3 className="text-xl mb-3 text-foreground">
                Für die Ernteteiler
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Frische, saisonale Bio-Lebensmittel</li>
                <li>• Du weißt genau, wo dein Essen herkommt</li>
                <li>• Kein Gewinnaufschlag, keine Handelsspanne</li>
                <li>• Teil einer solidarischen Gemeinschaft</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leitbild */}
      <section id="leitbild" className="py-20 bg-solawi-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-foreground">Unser Leitbild</h2>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 leading-relaxed italic mb-6">
              „Die Solawi Initiative Nürnberg ist eine solidarische Gemeinschaft
              von Erzeugerinnen/Erzeugern und Verbraucherinnen/Verbrauchern, die
              sich wertschätzen, vertrauen, verstehen, Bedürfnisse wechselseitig
              abgleichen und Risiken gemeinsam tragen. Jede/r soll sich aktiv
              einbringen, wohlfühlen, genießen können."
            </p>
            <p className="text-gray-600 text-sm">
              — Leitbild des Vereins, definiert 2014
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white/80 p-5 rounded-lg">
              <ShieldCheck className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                EU Bio als Mindeststandard
              </h3>
              <p className="text-gray-700 text-sm">
                Alle unsere Höfe sind mindestens EU-Bio-zertifiziert — die
                meisten erfüllen die strengeren Demeter- oder
                Bioland-Richtlinien.
              </p>
            </div>
            <div className="bg-white/80 p-5 rounded-lg">
              <Scale className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Faire Preise & Solidarität
              </h3>
              <p className="text-gray-700 text-sm">
                Durch die Bieterrunde bestimmst du mit, was du zahlen kannst. So
                entsteht ein sozialer Ausgleich — jeder trägt bei, was er kann.
              </p>
            </div>
            <div className="bg-white/80 p-5 rounded-lg">
              <Leaf className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Nachhaltigkeit & Biodiversität
              </h3>
              <p className="text-gray-700 text-sm">
                Das Wohl von Menschen, Tieren, Pflanzen und Boden steht im
                Mittelpunkt — ausgerichtet an den Grundprinzipien der
                Nachhaltigkeit.
              </p>
            </div>
            <div className="bg-white/80 p-5 rounded-lg">
              <Target className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Regionale Versorgung
              </h3>
              <p className="text-gray-700 text-sm">
                Großstadt verbindet sich mit Um-Land — das Ziel ist eine autarke
                Versorgung mit Lebensmitteln durch Solawi-Betriebe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unsere Höfe */}
      <section id="hoefe" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-foreground">Unsere Partnerhöfe</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/hoefe-und-ernteanteile#hederer"
              className="bg-solawi-salmon-light p-6 rounded-lg hover:shadow-lg transition-shadow group"
            >
              <span className="text-xs font-semibold text-white bg-amber-700 px-2 py-0.5 rounded">
                demeter
              </span>
              <h3 className="text-xl mt-2 mb-2 text-foreground group-hover:text-cta transition-colors">
                Demeterhof Hederer
              </h3>
              <p className="text-gray-600 text-sm">
                Sommergemüse & Obst aus Uffenheim. Seit 2001 nach
                Demeter-Richtlinien bewirtschaftet.
              </p>
            </Link>

            <Link
              to="/hoefe-und-ernteanteile#tristans"
              className="bg-solawi-green p-6 rounded-lg hover:shadow-lg transition-shadow group"
            >
              <span className="text-xs font-semibold text-white bg-green-700 px-2 py-0.5 rounded">
                Bioland
              </span>
              <h3 className="text-xl mt-2 mb-2 text-foreground group-hover:text-cta transition-colors">
                Biohof Tristan
              </h3>
              <p className="text-gray-600 text-sm">
                Wintergemüse aus Emskirchen. 35 ha bunte Anbaupalette mit
                Hühnern und Schafen.
              </p>
            </Link>

            <Link
              to="/hoefe-und-ernteanteile#walz"
              className="bg-solawi-mauve p-6 rounded-lg hover:shadow-lg transition-shadow group"
            >
              <span className="text-xs font-semibold text-white bg-amber-700 px-2 py-0.5 rounded">
                demeter
              </span>
              <h3 className="text-xl mt-2 mb-2 text-foreground group-hover:text-cta transition-colors">
                Demeterhof Walz
              </h3>
              <p className="text-gray-600 text-sm">
                Fleisch, Eier & Ur-Getreide aus Amberg. Kreislaufgedanke und
                artgerechte Tierhaltung.
              </p>
            </Link>

            <Link
              to="/hoefe-und-ernteanteile#kirschgarten"
              className="bg-solawi-orange p-6 rounded-lg hover:shadow-lg transition-shadow group"
            >
              <span className="text-xs font-semibold text-white bg-emerald-600 px-2 py-0.5 rounded">
                EU-Bio
              </span>
              <h3 className="text-xl mt-2 mb-2 text-foreground group-hover:text-cta transition-colors">
                Kirschgarten
              </h3>
              <p className="text-gray-600 text-sm">
                Bio-Beeren bei Igensdorf. Vom Verein gepachtet, extensiv
                bewirtschaftet.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* SoLaWi weltweit — Fun Facts */}
      <section id="weltweit" className="py-20 bg-solawi-salmon-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-4 text-foreground">
            SoLaWi weltweit
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Die Idee ist nicht neu — und sie wächst überall.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Globe className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Ursprung in Japan
              </h3>
              <p className="text-gray-700 text-sm">
                Die Idee entstand in den 1960er Jahren in Japan als „Teikei"
                (提携 — Partnerschaft). Japanische Hausfrauen schlossen sich
                zusammen, weil sie wissen wollten, was in ihrem Essen steckt.
                Heute gibt es in Japan über 1.000 Teikei-Gruppen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <TrendingUp className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                CSA in Nordamerika
              </h3>
              <p className="text-gray-700 text-sm">
                In den USA und Kanada heißt es „Community Supported Agriculture"
                (CSA). Die erste US-Farm startete 1986 in Massachusetts. Heute
                gibt es über 7.000 CSA-Farmen in Nordamerika — von Kleinstädten
                bis New York City.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Tractor className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                AMAP in Frankreich
              </h3>
              <p className="text-gray-700 text-sm">
                Die französische Variante „AMAP" (Association pour le maintien
                d'une agriculture paysanne) startete 2001 in der Provence. Heute
                versorgen über 2.000 AMAP-Gruppen mehr als 300.000 Familien mit
                lokalen Lebensmitteln.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <MapPin className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                SoLaWi in Deutschland
              </h3>
              <p className="text-gray-700 text-sm">
                Die erste deutsche SoLaWi entstand 1988 auf dem Buschberghof bei
                Hamburg. Seit 2011 gibt es das Netzwerk Solidarische
                Landwirtschaft e.V. — inzwischen sind über 400 SoLaWi-Betriebe
                in Deutschland aktiv und versorgen mehr als 100.000 Menschen.
              </p>
            </div>
          </div>

          {/* Fun Facts */}
          <h3 className="text-2xl font-semibold mb-6 text-foreground">
            Fun Facts
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg text-center">
              <p className="text-3xl font-bold text-primary mb-1">60+</p>
              <p className="text-sm text-gray-600">
                Länder mit SoLaWi-Initiativen — von Kuba bis Südkorea
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg text-center">
              <p className="text-3xl font-bold text-primary mb-1">1965</p>
              <p className="text-sm text-gray-600">
                Start der ersten Teikei-Gruppe in Japan
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg text-center">
              <p className="text-3xl font-bold text-primary mb-1">400+</p>
              <p className="text-sm text-gray-600">
                SoLaWi-Betriebe in Deutschland
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg text-center">
              <p className="text-3xl font-bold text-primary mb-1">30 %</p>
              <p className="text-sm text-gray-600">
                weniger Lebensmittelverschwendung bei SoLaWi vs. Supermarkt
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg text-center">
              <p className="text-3xl font-bold text-primary mb-1">0 km</p>
              <p className="text-sm text-gray-600">
                Umweg über Großmarkt — vom Acker direkt ins Depot
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg text-center">
              <p className="text-3xl font-bold text-primary mb-1">100 %</p>
              <p className="text-sm text-gray-600">
                der Ernte wird verwertet — auch die krumme Gurke
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Netzwerk */}
      <section id="netzwerk" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-foreground">
            Netzwerk Solidarische Landwirtschaft
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Wir sind Teil des bundesweiten Netzwerks Solidarische
              Landwirtschaft e.V. Der Netzwerkbeitrag von 0,50€/Monat pro
              Ernteteiler fließt in die Verbreitung der solidarischen
              Landwirtschaft in Deutschland.
            </p>

            <div className="bg-solawi-gray p-6 rounded-lg">
              <p className="mb-4">Das Netzwerk bietet:</p>
              <ul className="space-y-2">
                <li>• Austausch und Vernetzung zwischen SoLawis</li>
                <li>• Beratung für Gründer</li>
                <li>• Öffentlichkeitsarbeit und Bildungsangebote</li>
                <li>• Politische Interessenvertretung</li>
              </ul>
            </div>

            <p>
              Mehr Informationen:{" "}
              <a
                href="https://www.solidarische-landwirtschaft.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.solidarische-landwirtschaft.org
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-solawi-green text-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">
            Möchtest du Teil unserer Gemeinschaft werden?
          </h2>
          <p className="text-xl mb-8 text-foreground/80">
            Werde Ernteteiler und unterstütze nachhaltige Landwirtschaft in
            deiner Region.
          </p>
          <Link
            to="/mitmachen"
            className="inline-flex items-center justify-center gap-2 bg-cta text-white hover:bg-cta-hover px-8 py-4 transition-colors font-accent"
          >
            Ernteteiler werden
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
