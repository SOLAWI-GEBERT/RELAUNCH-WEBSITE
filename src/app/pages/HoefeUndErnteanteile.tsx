import { ArrowRight, MapPin, Clock, Package } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function HoefeUndErnteanteile() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/ablauf-hof.jpg"
            alt="Unsere Höfe - Regionalkarte"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl mb-4">
            Unsere Höfe & Ernteanteile
          </h1>
          <p className="text-xl">
            Lerne unsere Partner-Höfe und ihre Angebote kennen
          </p>
        </div>
      </section>

      {/* Übersicht */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-foreground">
              Unsere Ernteanteile
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wähle aus verschiedenen Ernteanteilen und stelle dir dein individuelles Paket zusammen. 
              Alle Höfe arbeiten nach biologischen Richtlinien.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-solawi-mauve p-8 rounded-lg">
              <h3 id="sommer" className="text-2xl mb-4 text-foreground">Sommergemüse</h3>
              <p className="text-gray-700 mb-4">
                Von Mai bis Oktober erhältst du wöchentlich eine vielfältige Auswahl an frischem 
                Saisongemüse. Das Angebot variiert je nach Jahreszeit und Ernte.
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Beispiele:</strong> Tomaten, Gurken, Zucchini, Paprika, Salate, Kräuter, 
                Mangold, Rote Bete, Möhren, Radieschen, Kohlrabi</p>
                <p className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Mai - Oktober</span>
                </p>
                <p className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  <span>Ca. 5-7 kg pro Woche</span>
                </p>
              </div>
            </div>

            <div className="bg-solawi-mauve p-8 rounded-lg">
              <h3 id="winter" className="text-2xl mb-4 text-foreground">Wintergemüse</h3>
              <p className="text-gray-700 mb-4">
                Von November bis April versorgen wir dich mit robustem Wintergemüse und Lagergemüse. 
                Auch im Winter musst du nicht auf regionale Frische verzichten.
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Beispiele:</strong> Kohl (Weiß-, Rot-, Grünkohl), Möhren, Kartoffeln, 
                Kürbis, Pastinaken, Sellerie, Lauch, Rote Bete</p>
                <p className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>November - April</span>
                </p>
                <p className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  <span>Ca. 5-7 kg pro Woche</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reimehof */}
      <section id="reimehof" className="py-20 bg-solawi-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="/fotos/vollandhof-salaternte.jpg"
                alt="Salaternte auf dem Feld"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl mb-6 text-foreground">
                Reimehof
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Der Reimehof liegt am Stadtrand und bewirtschaftet seit über 30 Jahren biologisch. 
                Auf 5 Hektar Fläche wird hier eine große Vielfalt an Sommergemüse angebaut.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Standort</p>
                    <p className="text-gray-700">Reimehof 1, 12345 Musterstadt</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Package className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Angebot</p>
                    <p className="text-gray-700">Sommergemüse, Kräuter, Blumen</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Saison</p>
                    <p className="text-gray-700">Mai bis Oktober</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl mb-3 text-foreground">Besonderheiten</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Über 40 verschiedene Gemüsesorten</li>
                  <li>• Eigene Jungpflanzenanzucht</li>
                  <li>• Hofverkauf und Führungen möglich</li>
                  <li>• Regelmäßige Mitmach-Aktionen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biohof Walz */}
      <section id="walz" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl mb-6 text-foreground">
                Biohof Walz
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Der Biohof Walz ist ein traditioneller Familienbetrieb im Umland. Hier wird seit 
                Generationen nach biologisch-dynamischen Prinzipien gewirtschaftet.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Standort</p>
                    <p className="text-gray-700">Landstraße 45, 12346 Musterdorf</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Package className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Angebot</p>
                    <p className="text-gray-700">Wintergemüse, Lagergemüse, Kartoffeln</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Saison</p>
                    <p className="text-gray-700">November bis April</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl mb-3 text-foreground">Besonderheiten</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Demeter-zertifiziert</li>
                  <li>• Große Auswahl an Kohlsorten</li>
                  <li>• Eigener Kartoffelanbau (10+ Sorten)</li>
                  <li>• Lagerkeller für optimale Frische</li>
                </ul>
              </div>
            </div>
            <div className="h-[400px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
              <ImageWithFallback
                src="/fotos/walz-kaelber.jpg"
                alt="Kälber im Stall am Biohof Walz"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Obst vom Hederer */}
      <section id="hederer" className="py-20 bg-solawi-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="/fotos/lillinghof-obstbau.jpg"
                alt="Apfelbäume am Lillinghof"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl mb-6 text-foreground">
                Obst vom Hederer
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Die Obstplantage Hederer spezialisiert sich auf den biologischen Anbau von Äpfeln, 
                Birnen und Beerenobst. Alte Sorten und moderne Züchtungen wachsen hier im Einklang.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Standort</p>
                    <p className="text-gray-700">Obstweg 12, 12347 Obstdorf</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Package className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Angebot</p>
                    <p className="text-gray-700">Äpfel, Birnen, Beeren, Steinobst</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Saison</p>
                    <p className="text-gray-700">Juni bis November</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl mb-3 text-foreground">Besonderheiten</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Über 30 alte Apfelsorten</li>
                  <li>• Eigene Mosterei</li>
                  <li>• Beerensträucher zum Selberpflücken</li>
                  <li>• Naturbelassene Streuobstwiesen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aktuelles von den Höfen */}
      <section id="aktuelles" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center text-foreground">
            Aktuelles von den Höfen
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-sm text-primary mb-2">Reimehof • 20. Feb 2026</div>
              <h3 className="text-xl mb-3 text-foreground">Anzucht hat begonnen</h3>
              <p className="text-gray-700 mb-4">
                Die ersten Tomaten und Paprika sind bereits in der Anzucht. Bald geht es wieder los 
                mit frischem Gemüse!
              </p>
              <a href="#" className="text-primary hover:text-foreground inline-flex items-center gap-1">
                Weiterlesen
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-sm text-primary mb-2">Biohof Walz • 18. Feb 2026</div>
              <h3 className="text-xl mb-3 text-foreground">Grünkohl-Saison endet</h3>
              <p className="text-gray-700 mb-4">
                Die letzten Grünkohle werden diese Woche geerntet. Dafür gibt es bald frischen 
                Spinat und Mangold!
              </p>
              <a href="#" className="text-primary hover:text-foreground inline-flex items-center gap-1">
                Weiterlesen
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-sm text-primary mb-2">Obst vom Hederer • 15. Feb 2026</div>
              <h3 className="text-xl mb-3 text-foreground">Baumschnitt-Kurs</h3>
              <p className="text-gray-700 mb-4">
                Am 5. März bieten wir einen Obstbaumschnitt-Kurs an. Lernt die Grundlagen des 
                Baumschnitts direkt auf der Plantage!
              </p>
              <a href="#" className="text-primary hover:text-foreground inline-flex items-center gap-1">
                Weiterlesen
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Weitere Kooperationen */}
      <section className="py-20 bg-solawi-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-foreground">
            Weitere Hofkooperationen
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Zusätzlich zu unseren Hauptpartnern kooperieren wir mit weiteren regionalen Erzeugern, 
              um das Angebot zu erweitern:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl mb-3 text-foreground">Hofkäserei Kerschbaum</h3>
                <p className="text-gray-700">
                  Handwerklich hergestellte Milchprodukte und Käse von Kühen aus Weidehaltung. 
                  Optional als Zusatzanteil buchbar.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl mb-3 text-foreground">Gallini Fellici</h3>
                <p className="text-gray-700">
                  Bio-Eier von glücklichen Hühnern in mobiler Haltung. Die Hühner werden regelmäßig 
                  auf frische Weiden umgesetzt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
