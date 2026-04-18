import { Link } from "react-router";
import { ArrowRight, Leaf, Users, Heart, Calendar, Sprout, MapPin } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/start.png"
            alt="Stadt, Land, Beides - Stiefel Illustration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-6">
            Stadt, Land, Beides
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/95">
            Solidarische Landwirtschaft für eine nachhaltige Zukunft
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/mitmachen"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary text-white px-8 py-4 rounded-lg transition-colors"
            >
              Jetzt mitmachen
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/solidarische-landwirtschaft"
              className="inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-foreground px-8 py-4 rounded-lg transition-colors"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>
      </section>

      {/* Was ist Solidarische Landwirtschaft */}
      <section className="py-20 bg-solawi-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6 text-foreground">
                Was ist Solidarische Landwirtschaft?
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
                className="inline-flex items-center gap-2 text-primary hover:text-foreground"
              >
                Mehr über SoLaWi erfahren
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="/decision-funktion.jpg"
                alt="So funktioniert Solidarische Landwirtschaft"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-foreground">
              Warum mitmachen?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Gemeinsam gestalten wir eine nachhaltige Zukunft und genießen frische, 
              regionale Lebensmittel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl mb-4 text-foreground">Nachhaltig & Regional</h3>
              <p className="text-gray-600">
                Frische Lebensmittel direkt vom Hof in deiner Region. 
                Kurze Transportwege und ökologischer Anbau schonen die Umwelt.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl mb-4 text-foreground">Gemeinschaft</h3>
              <p className="text-gray-600">
                Werde Teil einer lebendigen Gemeinschaft. Lerne die Landwirt*innen 
                kennen und gestalte aktiv mit.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl mb-4 text-foreground">Transparenz</h3>
              <p className="text-gray-600">
                Volle Transparenz: Du weißt genau, wo dein Essen herkommt und 
                wie es angebaut wird.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unsere Höfe */}
      <section className="py-20 bg-solawi-mauve">
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
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src="/features-landwirtschaft.jpg"
                  alt="Reimehof Landwirtschaft"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 text-foreground">Reimehof</h3>
                <p className="text-gray-600 mb-4">
                  Sommergemüse in Bio-Qualität aus regionalem Anbau
                </p>
                <Link
                  to="/hoefe-und-ernteanteile#reimehof"
                  className="text-primary hover:text-foreground inline-flex items-center gap-1"
                >
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src="/features-lebensmittel.jpg"
                  alt="Biohof Walz Lebensmittel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 text-foreground">Biohof Walz</h3>
                <p className="text-gray-600 mb-4">
                  Wintergemüse und Lagergemüse für die kalte Jahreszeit
                </p>
                <Link
                  to="/hoefe-und-ernteanteile#walz"
                  className="text-primary hover:text-foreground inline-flex items-center gap-1"
                >
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src="/decision-auszeichnung.jpg"
                  alt="Obst vom Hederer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 text-foreground">Obst vom Hederer</h3>
                <p className="text-gray-600 mb-4">
                  Frisches Obst aus biologischem Anbau direkt vom Erzeuger
                </p>
                <Link
                  to="/hoefe-und-ernteanteile#hederer"
                  className="text-primary hover:text-foreground inline-flex items-center gap-1"
                >
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wie funktioniert's */}
      <section className="py-20">
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
            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                1
              </div>
              <h3 className="text-xl mb-4 text-foreground">Ernteanteil wählen</h3>
              <p className="text-gray-600">
                Wähle deinen Ernteanteil und entscheide, welche Höfe du unterstützen möchtest.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                2
              </div>
              <h3 className="text-xl mb-4 text-foreground">Depot auswählen</h3>
              <p className="text-gray-600">
                Finde ein Depot in deiner Nähe, wo du wöchentlich deine frischen Lebensmittel abholen kannst.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                3
              </div>
              <h3 className="text-xl mb-4 text-foreground">Genießen & mitmachen</h3>
              <p className="text-gray-600">
                Hole deine Ernte ab und werde Teil der Gemeinschaft bei Hofaktionen und Veranstaltungen.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/mitmachen"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary text-white px-8 py-4 rounded-lg transition-colors"
            >
              Jetzt Mitglied werden
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Aktuelle Veranstaltungen */}
      <section className="py-20 bg-solawi-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl mb-4 text-foreground">
                Aktuelle Veranstaltungen
              </h2>
              <p className="text-xl text-gray-600">
                Komm vorbei und lerne uns kennen!
              </p>
            </div>
            <Link
              to="/kalender"
              className="hidden md:inline-flex items-center gap-2 text-primary hover:text-foreground"
            >
              Alle Termine
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1">15. März 2026</div>
                  <h3 className="text-lg mb-2 text-foreground">Hofaktion Reimehof</h3>
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

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                  <Sprout className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1">22. März 2026</div>
                  <h3 className="text-lg mb-2 text-foreground">Info-Veranstaltung</h3>
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

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1">5. April 2026</div>
                  <h3 className="text-lg mb-2 text-foreground">Ernte-Fest</h3>
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
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link
              to="/kalender"
              className="inline-flex items-center gap-2 text-primary hover:text-foreground"
            >
              Alle Termine
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-solawi-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6 text-foreground">
            Bereit für frische, regionale Lebensmittel?
          </h2>
          <p className="text-xl mb-8 text-foreground">
            Werde Teil unserer Gemeinschaft und unterstütze nachhaltige Landwirtschaft in deiner Region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/anmeldung"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 px-8 py-4 rounded-lg transition-colors"
            >
              Jetzt anmelden
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/mitmachen"
              className="inline-flex items-center justify-center gap-2 border-2 border-foreground text-foreground hover:bg-white/30 px-8 py-4 rounded-lg transition-colors"
            >
              Mehr Informationen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
