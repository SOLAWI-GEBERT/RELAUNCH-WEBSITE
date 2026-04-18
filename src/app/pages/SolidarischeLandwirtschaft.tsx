import { Link } from "react-router";
import { ArrowRight, Users, Target, Heart, Sprout } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function SolidarischeLandwirtschaft() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1709634500517-9ed519597134?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhcm1pbmclMjBjb21tdW5pdHklMjBwZW9wbGV8ZW58MXx8fHwxNzcyNDczODEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Gemeinschaft"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl mb-4">
            Solidarische Landwirtschaft
          </h1>
          <p className="text-xl">
            Gemeinsam für eine nachhaltige Zukunft
          </p>
        </div>
      </section>

      {/* Was ist Solidarische Landwirtschaft */}
      <section id="was-ist" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-foreground">
            Was ist Solidarische Landwirtschaft?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Solidarische Landwirtschaft (SoLaWi) bedeutet: Eine Gruppe von Menschen trägt die 
              Kosten eines landwirtschaftlichen Betriebs, wofür sie im Gegenzug dessen Ernteertrag 
              erhält. Durch den persönlichen Bezug zueinander erfahren sowohl die Erzeuger*innen 
              als auch die Verbraucher*innen die vielfältigen Vorteile einer nicht-industriellen, 
              marktunabhängigen Landwirtschaft.
            </p>
            
            <p>
              Die Mitglieder der Solidarischen Landwirtschaft schaffen und erhalten Arbeitsplätze in 
              der Landwirtschaft und ermöglichen den Erzeuger*innen ein planbares Einkommen sowie 
              langfristige Perspektiven für ihre Höfe. Dies fördert Vielfalt in der Produktion und 
              artgerechte Tierhaltung.
            </p>
            
            <p>
              Durch die Bildung einer neuen, verantwortungsvollen Gemeinschaft wird die Verbindung 
              von Menschen zur Landwirtschaft und zur Lebensmittelerzeugung wieder gestärkt.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-secondary/20 p-6 rounded-lg">
              <Sprout className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl mb-3 text-foreground">Für die Landwirt*innen</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Planbare Einkommen und langfristige Sicherheit</li>
                <li>• Unabhängigkeit von Marktpreisen</li>
                <li>• Direkte Wertschätzung ihrer Arbeit</li>
                <li>• Möglichkeit für vielfältige Produktion</li>
              </ul>
            </div>

            <div className="bg-secondary/20 p-6 rounded-lg">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl mb-3 text-foreground">Für die Mitglieder</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Frische, saisonale Bio-Lebensmittel</li>
                <li>• Transparenz über Anbau und Herkunft</li>
                <li>• Aktive Mitgestaltung möglich</li>
                <li>• Teil einer lebendigen Gemeinschaft</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wie machen wir das */}
      <section id="wie-machen-wir" className="py-20 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-foreground">
            Wie machen wir das bei Stadt, Land, Beides?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Bei Stadt, Land, Beides kooperieren wir mit mehreren regionalen Bio-Höfen. 
              Unsere Mitglieder können sich für Ernteanteile von verschiedenen Höfen entscheiden 
              und so ihr individuelles Paket zusammenstellen.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl mb-4 text-foreground">Unsere Partnerhöfe</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-2">Reimehof - Sommergemüse</h4>
                  <p>Vielfältiges Gemüse während der Sommermonate von Mai bis Oktober</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-2">Biohof Walz - Wintergemüse</h4>
                  <p>Lagergemüse und winterhartes Gemüse von November bis April</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-2">Obst vom Hederer</h4>
                  <p>Saisonales Obst und Beeren aus biologischem Anbau</p>
                </div>
              </div>
            </div>

            <p>
              Die Ernte wird wöchentlich an verschiedene Depots in der Region geliefert. 
              Unsere Mitglieder holen dort ihre Anteile ab und können sich bei Hofaktionen 
              aktiv einbringen.
            </p>
          </div>
        </div>
      </section>

      {/* Selbstverständnis */}
      <section id="selbstverstaendnis" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-foreground">
            Unser Selbstverständnis
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Wir verstehen uns als demokratische Gemeinschaft, in der alle Mitglieder gleichberechtigt 
              sind. Entscheidungen werden gemeinsam getroffen, und jede*r kann sich einbringen.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg mb-2 text-foreground">Gemeinschaft</h3>
                <p className="text-sm">Gemeinsam statt einsam</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg mb-2 text-foreground">Wertschätzung</h3>
                <p className="text-sm">Für Mensch und Natur</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg mb-2 text-foreground">Transparenz</h3>
                <p className="text-sm">Offene Kommunikation</p>
              </div>
            </div>
            
            <p>
              Wir setzen uns ein für ökologische Landwirtschaft, faire Preise für Erzeuger*innen 
              und Zugang zu gesunden Lebensmitteln für alle Menschen – unabhängig vom Einkommen.
            </p>
          </div>
        </div>
      </section>

      {/* Unsere Ziele */}
      <section id="ziele" className="py-20 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-foreground">
            Unsere Ziele
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl mb-3 text-foreground">Nachhaltige Landwirtschaft fördern</h3>
              <p className="text-gray-700">
                Wir unterstützen ökologische Anbaumethoden, die Böden regenerieren, Artenvielfalt 
                fördern und das Klima schützen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl mb-3 text-foreground">Regionale Kreisläufe stärken</h3>
              <p className="text-gray-700">
                Durch kurze Transportwege und lokale Produktion schaffen wir resiliente 
                Versorgungsstrukturen in unserer Region.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl mb-3 text-foreground">Gemeinschaft aufbauen</h3>
              <p className="text-gray-700">
                Wir bringen Menschen zusammen, die Werte wie Nachhaltigkeit, Fairness und 
                Solidarität teilen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl mb-3 text-foreground">Bewusstsein schaffen</h3>
              <p className="text-gray-700">
                Durch Bildungsarbeit und praktisches Erleben vermitteln wir Wissen über 
                Landwirtschaft und Ernährung.
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
              Wir sind Teil des bundesweiten Netzwerks Solidarische Landwirtschaft e.V., 
              das die Verbreitung der Solidarischen Landwirtschaft in Deutschland fördert.
            </p>
            
            <div className="bg-secondary/20 p-6 rounded-lg">
              <p className="mb-4">
                Das Netzwerk bietet:
              </p>
              <ul className="space-y-2">
                <li>• Austausch und Vernetzung zwischen SoLawis</li>
                <li>• Beratung für Gründer*innen</li>
                <li>• Öffentlichkeitsarbeit und Bildungsangebote</li>
                <li>• Politische Interessenvertretung</li>
              </ul>
            </div>
            
            <p>
              Mehr Informationen findest du unter: 
              <a href="https://www.solidarische-landwirtschaft.org" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-primary hover:text-foreground ml-1">
                www.solidarische-landwirtschaft.org
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Förderverein */}
      <section id="foerderverein" className="py-20 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-foreground">
            Förderverein
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Unser Förderverein unterstützt die Arbeit von Stadt, Land, Beides und ermöglicht 
              Menschen mit geringerem Einkommen den Zugang zu unseren Ernteanteilen.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl mb-4 text-foreground">Wie kannst du helfen?</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-2">Fördermitgliedschaft</h4>
                  <p>Werde Fördermitglied und unterstütze uns mit einem regelmäßigen Beitrag</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-2">Spenden</h4>
                  <p>Einmalige oder regelmäßige Spenden helfen uns, unsere Ziele zu erreichen</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-2">Ehrenamtliches Engagement</h4>
                  <p>Bringe deine Zeit und Fähigkeiten ein, um die Gemeinschaft zu stärken</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interviews */}
      <section id="interviews" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-foreground">
            Interviews & Erfahrungsberichte
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <p className="text-lg italic text-gray-700 mb-4">
                "Für mich ist die SoLaWi mehr als nur frisches Gemüse. Es ist eine Lebenseinstellung. 
                Ich weiß genau, wo mein Essen herkommt und kann die Landwirt*innen persönlich 
                unterstützen."
              </p>
              <p className="text-foreground font-semibold">- Maria, Mitglied seit 2020</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <p className="text-lg italic text-gray-700 mb-4">
                "Als Landwirt schätze ich die Planungssicherheit und die direkte Verbindung zu 
                den Menschen, die meine Produkte essen. Es motiviert mich, jeden Tag mein Bestes 
                zu geben."
              </p>
              <p className="text-foreground font-semibold">- Thomas Reime, Reimehof</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <p className="text-lg italic text-gray-700 mb-4">
                "Meine Kinder lernen durch die Hofbesuche, wo Lebensmittel herkommen und entwickeln 
                Wertschätzung für die Natur. Das ist unbezahlbar."
              </p>
              <p className="text-foreground font-semibold">- Sophie, Mitglied seit 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">
            Möchtest du Teil unserer Gemeinschaft werden?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Erfahre mehr darüber, wie du mitmachen kannst und werde Teil der Bewegung 
            für nachhaltige Landwirtschaft.
          </p>
          <Link
            to="/mitmachen"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-secondary/20 px-8 py-4 rounded-lg transition-colors"
          >
            Jetzt informieren
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
