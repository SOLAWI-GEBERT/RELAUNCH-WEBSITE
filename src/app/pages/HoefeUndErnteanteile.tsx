import {
  Clock,
  Package,
  Sprout,
  Wheat,
  Apple,
  Egg,
  Beef,
  CalendarDays,
  Info,
  Cherry,
  Mail,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

function Badge({ children, color = "green" }: { children: React.ReactNode; color?: "green" | "purple" | "orange" }) {
  const colors = {
    green: "bg-solawi-green text-foreground",
    purple: "bg-solawi-mauve text-foreground",
    orange: "bg-solawi-orange text-foreground",
  };
  return (
    <span className={`inline-block px-2 py-0.5 text-xs font-semibold ${colors[color]}`}>
      {children}
    </span>
  );
}

function PriceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-1">
      <span className="text-gray-700">{label}</span>
      <span className="font-semibold text-foreground">{value}</span>
    </div>
  );
}

export function HoefeUndErnteanteile() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-solawi-blue py-16 wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="badge-frech mb-4 inline-block">Unsere Höfe</span>
              <h1 className="text-5xl mb-4 text-foreground">
                Höfe & Ernteanteile
              </h1>
              <p className="text-xl text-foreground/80">
                Vier Höfe, ein Kirschgarten und eine Orangenfarm — lerne kennen,
                woher dein Essen kommt und was dein Beitrag bewirkt.
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/ablauf-hof.jpg" alt="Illustration Hof" className="h-[280px] object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DEMETERHOF HEDERER ==================== */}
      <section id="hederer" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro — Ton A */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="/fotos/lillinghof-obstbau.jpg"
                alt="Demeterhof Hederer — Gewächshäuser und Obstbäume"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-4xl text-foreground">Demeterhof Hederer</h2>
                <Badge color="purple">demeter</Badge>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Heribert Hederer bewirtschaftet seinen Hof in Uffenheim seit 2001 nach
                Demeter-Richtlinien. Vier Gewächshäuser und über 20 Jahre Erfahrung
                stecken in seinen natürlichen Anbaumethoden. Was bei Heribert wächst,
                wächst mit Überzeugung — und das schmeckst du.
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                <Sprout className="w-5 h-5 text-primary" />
                Seit 2001 demeter-zertifiziert, Uffenheim
              </p>
            </div>
          </div>

          {/* Sommergemüse — Ton B */}
          <div id="hederer-sommer" className="bg-solawi-green/30 p-8 rounded-lg mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Sprout className="w-6 h-6 text-primary" />
              <h3 className="text-2xl text-foreground">Sommergemüse</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <Package className="w-5 h-5 text-primary" />
                  <span>Für 1–2 Personen, wöchentliche Lieferung</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>April – September</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CalendarDays className="w-5 h-5 text-primary" />
                  <span>Einstiegspunkte: 01.04., 01.06., 01.08.</span>
                </div>

                <div className="bg-white p-4 rounded-lg mt-4">
                  <PriceRow label="Richtpreis" value="105,00 €/M" />
                  <PriceRow label="Logistikbeitrag" value="23,00 €/M" />
                  <div className="border-t border-gray-200 mt-2 pt-2">
                    <PriceRow label="Gesamt" value="128,00 €/M" />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Bieterrunde</p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-2">Sortiment</p>
                <p className="text-gray-700">
                  Gurken, Tomaten, Kartoffeln, Kürbis, Salat, Knoblauch, Bohnen,
                  Paprika, Auberginen
                </p>
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <p>Max. 80 Anteile verfügbar</p>
                  <p>Probemonat: nur als Doppelmonat möglich</p>
                </div>
              </div>
            </div>
          </div>

          {/* Obst & Säfte — Ton B */}
          <div id="hederer-obst" className="bg-solawi-mauve/30 p-8 rounded-lg mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Apple className="w-6 h-6 text-primary" />
              <h3 className="text-2xl text-foreground">Obst & Säfte</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <Package className="w-5 h-5 text-primary" />
                  <span>Nach Bedarf</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Juli – Dezember</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CalendarDays className="w-5 h-5 text-primary" />
                  <span>Einstieg: 01.07., 01.10.</span>
                </div>

                <div className="bg-white p-4 rounded-lg mt-4">
                  <PriceRow label="Richtpreis" value="37,00 €/M" />
                  <PriceRow label="Logistikbeitrag" value="2,50 €/M" />
                  <div className="border-t border-gray-200 mt-2 pt-2">
                    <PriceRow label="Gesamt" value="39,50 €/M" />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Bieterrunde</p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-2">Sortiment</p>
                <p className="text-gray-700">
                  Äpfel, Kirschen, Ringlotten, Zwetschgen, Trauben, Birnen, Walnüsse,
                  Physalis
                </p>
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <p>Max. 35 Anteile verfügbar</p>
                  <p>Kein Probemonat</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bieterrunde erklären */}
          <div className="bg-solawi-blue/20 p-6 rounded-lg flex gap-4">
            <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-foreground mb-1">Was ist die Bieterrunde?</p>
              <p className="text-gray-700">
                Bei der Jahreshauptversammlung wird ein Richtpreis festgelegt. In der
                Bieterrunde gibst du an, welchen Beitrag du stemmen kannst — über oder
                unter dem Richtpreis. So entsteht ein sozialer Ausgleich: Wer mehr geben
                kann, ermöglicht anderen die Teilnahme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BIOHOF TRISTAN ==================== */}
      <section id="tristans" className="py-20 bg-solawi-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro — Ton A */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-4xl text-foreground">Biohof Tristan</h2>
                <Badge color="green">Bioland</Badge>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Die Hofstelle in Emskirchen/Gunzendorf wurde 2017 übernommen — seitdem
                wachsen auf 35 Hektar eine bunte Anbaupalette, Hühner picken und Schafe
                grasen. Aktuell versorgt der Hof 40 Ernteteiler direkt und 10 weitere
                über das UKAMA-Depot. SoLawi am Hof seit 2021.
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                <Sprout className="w-5 h-5 text-primary" />
                Bioland-zertifiziert, Emskirchen/Gunzendorf
              </p>
            </div>
            <div className="h-[400px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
              <ImageWithFallback
                src="/fotos/vollandhof-feld.jpg"
                alt="Biohof Tristan — Feldarbeit"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Wintergemüse — Ton B */}
          <div id="tristans-winter" className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Sprout className="w-6 h-6 text-primary" />
              <h3 className="text-2xl text-foreground">Wintergemüse</h3>
              <span className="text-sm text-gray-500">Oktober – März</span>
            </div>

            {/* Varianten-Tabelle */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-3 pr-4 text-foreground">Variante</th>
                    <th className="py-3 pr-4 text-foreground">Für</th>
                    <th className="py-3 pr-4 text-foreground">Zyklus</th>
                    <th className="py-3 pr-4 text-foreground text-right">Richtpreis</th>
                    <th className="py-3 pr-4 text-foreground text-right">Logistik</th>
                    <th className="py-3 text-foreground text-right">Gesamt</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-semibold">Ganzer Anteil</td>
                    <td className="py-3 pr-4">2–4 Pers.</td>
                    <td className="py-3 pr-4">wöchentlich</td>
                    <td className="py-3 pr-4 text-right">122,20 €</td>
                    <td className="py-3 pr-4 text-right">14,00 €</td>
                    <td className="py-3 text-right font-semibold">136,20 €/M</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-semibold">Halber Anteil</td>
                    <td className="py-3 pr-4">1–2 Pers.</td>
                    <td className="py-3 pr-4">14-tägig</td>
                    <td className="py-3 pr-4 text-right">61,10 €</td>
                    <td className="py-3 pr-4 text-right">11,00 €</td>
                    <td className="py-3 text-right font-semibold">72,10 €/M</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold">Kleiner Anteil</td>
                    <td className="py-3 pr-4">1–2 Pers.</td>
                    <td className="py-3 pr-4">wöchentlich</td>
                    <td className="py-3 pr-4 text-right">85,54 €</td>
                    <td className="py-3 pr-4 text-right">14,00 €</td>
                    <td className="py-3 text-right font-semibold">99,54 €/M</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mb-6">
              Probemonat: jeden Monat zum 1. möglich.
            </p>

            {/* Kisteninhalte */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-solawi-green/20 p-4 rounded-lg">
                <p className="font-semibold text-foreground mb-2">Frisch aus den Folienhäusern</p>
                <p className="text-gray-700 text-sm">Spinat, Salate, Kräuter</p>
              </div>
              <div className="bg-solawi-green/20 p-4 rounded-lg">
                <p className="font-semibold text-foreground mb-2">Vom Feld</p>
                <p className="text-gray-700 text-sm">Lauch, Rosenkohl, Palmkohl</p>
              </div>
              <div className="bg-solawi-green/20 p-4 rounded-lg">
                <p className="font-semibold text-foreground mb-2">Aus dem Lager</p>
                <p className="text-gray-700 text-sm">
                  Karotten, Pastinaken, diverse Bete, Kraut, Zwiebeln, Kürbis, Kartoffeln
                </p>
              </div>
            </div>

            {/* Kommunikation */}
            <div className="flex gap-3 text-sm text-gray-600 bg-solawi-blue/10 p-4 rounded-lg">
              <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p>
                <strong>So bleibst du informiert:</strong> 2 Tage vor Abholung erhältst du eine
                Mail mit dem Kisteninhalt und Neuigkeiten vom Hof. Am Abholtag kommt per
                WhatsApp oder Signal eine Nachricht mit den genauen Mengen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DEMETERHOF WALZ ==================== */}
      <section id="walz" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro — Ton A */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="/fotos/walz-kaelber.jpg"
                alt="Kälber am Demeterhof Walz"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-4xl text-foreground">Demeterhof Walz</h2>
                <Badge color="purple">demeter</Badge>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Ein Familienbetrieb in Schäflohe bei Amberg, der den Kreislaufgedanken
                lebt. Bei Familie Walz gehören Tier, Pflanze und Boden untrennbar
                zusammen. „Wir möchten die Tiere in ihrer Ganzheit betrachten" — das
                bedeutet: Wer Eier bezieht, übernimmt auch Verantwortung für die Henne
                und ihren Bruder.
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                <Sprout className="w-5 h-5 text-primary" />
                Demeter-zertifiziert, Schäflohe bei Amberg
              </p>
            </div>
          </div>

          {/* More..Huhn */}
          <div id="walz-huhn" className="bg-solawi-salmon/20 p-8 rounded-lg mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Egg className="w-6 h-6 text-primary" />
              <h3 className="text-2xl text-foreground">More..Huhn</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  Alle Eier deiner Henne plus anteilmäßig Bruderhahn, Suppenhenne und
                  Bolognese. Wer Eier bezieht, übernimmt ganzheitliche Verantwortung
                  für Henne, Bruder und Ei.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <PriceRow label="Richtpreis" value="15,00 €/M" />
                  <PriceRow label="Logistikbeitrag" value="2,90 €/M" />
                  <div className="border-t border-gray-200 mt-2 pt-2">
                    <PriceRow label="Gesamt" value="17,90 €/M" />
                  </div>
                </div>
              </div>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>2x pro Monat, ganzjährig</span>
                </div>
                <div className="h-[200px] rounded-lg overflow-hidden shadow-md">
                  <ImageWithFallback
                    src="/fotos/walz-hennen.jpg"
                    alt="Freilandhühner am Demeterhof Walz"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Weitere Walz-Ernteanteile */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* More..Bratgockerl */}
            <div className="bg-solawi-salmon/10 p-6 rounded-lg">
              <h4 className="text-xl mb-3 text-foreground">More..Bratgockerl</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p>Freilandhaltung — nicht nach 30 Tagen geschlachtet, sondern artgerecht aufgezogen.</p>
                <div className="bg-white p-3 rounded-lg mt-3">
                  <PriceRow label="Richtpreis" value="8,00 €/M" />
                  <PriceRow label="Logistik" value="1,00 €/M" />
                  <div className="border-t border-gray-200 mt-1 pt-1">
                    <PriceRow label="Gesamt" value="9,00 €/M" />
                  </div>
                </div>
                <p className="text-gray-500">1x alle 4 Monate</p>
              </div>
            </div>

            {/* More..Hack */}
            <div className="bg-solawi-salmon/10 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Beef className="w-5 h-5 text-primary" />
                <h4 className="text-xl text-foreground">More..Hack</h4>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <p>500g/Monat, Aberdeen Angus. Weidehaltung, Muttertierhaltung, nur Raufutter.</p>
                <div className="bg-white p-3 rounded-lg mt-3">
                  <PriceRow label="Richtpreis" value="10,00 €/M" />
                  <PriceRow label="Logistik" value="1,40 €/M" />
                  <div className="border-t border-gray-200 mt-1 pt-1">
                    <PriceRow label="Gesamt" value="11,40 €/M" />
                  </div>
                </div>
              </div>
            </div>

            {/* More..Wurst */}
            <div className="bg-solawi-salmon/10 p-6 rounded-lg">
              <h4 className="text-xl mb-3 text-foreground">More..Wurst</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p>500g/Monat: Salami, Rinderschinken, Wienerle, Bratwürste, Pfefferbeißer u.v.m.</p>
                <div className="bg-white p-3 rounded-lg mt-3">
                  <PriceRow label="Richtpreis" value="15,00 €/M" />
                  <PriceRow label="Logistik" value="2,00 €/M" />
                  <div className="border-t border-gray-200 mt-1 pt-1">
                    <PriceRow label="Gesamt" value="17,00 €/M" />
                  </div>
                </div>
                <p className="text-gray-500">monatlich</p>
              </div>
            </div>
          </div>

          {/* More..Ur-Getreide */}
          <div id="walz-getreide" className="bg-solawi-orange/20 p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Wheat className="w-6 h-6 text-primary" />
              <h3 className="text-2xl text-foreground">More..Ur-Getreide</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="bg-white p-4 rounded-lg mb-4">
                  <PriceRow label="Richtpreis" value="6,00 €/M" />
                  <PriceRow label="Logistikbeitrag" value="0,90 €/M" />
                  <div className="border-t border-gray-200 mt-2 pt-2">
                    <PriceRow label="Gesamt" value="6,90 €/M" />
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>1x pro Monat, ganzjährig</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-primary" />
                    <span>1 kg individuell zusammenstellbar</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-2">Sorten</p>
                <p className="text-gray-700 text-sm mb-4">
                  Schwarzes Einkorn, Sommeremmer Spelta, Weißer Urdinkel, Blonder
                  Nackthafer, Champagnerroggen, Bayernkönig Weizen, Bayerisches
                  Liebesgras
                </p>
                <p className="font-semibold text-foreground mb-2">Produkte</p>
                <p className="text-gray-700 text-sm">
                  Halbweißmehl, Vollkornmehl, Körner, Grieß, Getreidereis, Nudeln
                </p>
                <div className="mt-4">
                  <ImageWithFallback
                    src="/fotos/walz-getreide.jpg"
                    alt="Ur-Getreide vom Demeterhof Walz"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== KIRSCHGARTEN ==================== */}
      <section id="kirschgarten" className="py-20 bg-solawi-mauve/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro — Ton A */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-4xl text-foreground">Kirschgarten</h2>
                <Badge color="green">EU-Bio</Badge>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Ganz neu bei Stadt, Land, Beides: Seit Ende 2023 pachtet der
                Solawi-Verein ein Grundstück in der Nähe von Igensdorf. Bio-zertifiziert
                seit 2019, wird hier in Mischkultur extensiv bewirtschaftet. Naturnahe
                Hecken, Totholzriegel und insektenschonendes Mähen — ein aktiver
                Beitrag zur Biodiversität.
              </p>
              <p className="text-gray-700 mb-4">
                Den Großteil der Arbeit übernimmt ein:e vom Verein als Teilzeitkraft
                tätige:r Gärtner:in. Keine Bewässerung — die Beeren sind
                geschmacklich besonders vollmundig.
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                <Cherry className="w-5 h-5 text-primary" />
                Vereinseigenes Projekt, bei Igensdorf
              </p>
            </div>
            <div className="h-[400px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
              <ImageWithFallback
                src="/fotos/lillinghof-bluete.jpg"
                alt="Blühende Obstbäume im Kirschgarten"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio..Beeren — Ton B */}
          <div id="kirschgarten-beeren" className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Cherry className="w-6 h-6 text-primary" />
              <h3 className="text-2xl text-foreground">Bio..Beeren</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <Package className="w-5 h-5 text-primary" />
                  <span>200–400 g pro Lieferung, wöchentlich</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Juli – September (3 Monate Zahlung)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CalendarDays className="w-5 h-5 text-primary" />
                  <span>Einstieg: 01.07., 01.08., 01.09.</span>
                </div>

                <div className="bg-solawi-mauve/20 p-4 rounded-lg mt-4">
                  <PriceRow label="Richtpreis" value="35,00 €/M" />
                  <PriceRow label="Logistikbeitrag" value="3,00 €/M" />
                  <div className="border-t border-gray-200 mt-2 pt-2">
                    <PriceRow label="Gesamt" value="38,00 €/M" />
                  </div>
                </div>

                <div className="mt-4 space-y-1 text-sm text-gray-600">
                  <p>Max. 30 Anteile verfügbar</p>
                  <p>Anmeldeschluss: 15. des Vormonats</p>
                  <p className="font-semibold text-foreground">
                    Am besten schon zum 1. Juni anmelden!
                  </p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-2">Sortiment</p>
                <p className="text-gray-700">
                  Johannisbeeren (rot, weiß, schwarz), Himbeeren (rot, schwarz, gelb),
                  Stachelbeeren, Brombeeren, Himbeer-Brombeeren, Jostabeeren, Schwarze
                  Honigbeeren, Japanische Weinbeeren, Aronia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOFKOOPERATIONEN ==================== */}
      <section id="gallini-fellici" className="py-20 bg-solawi-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-foreground">
            Hofkooperationen
          </h2>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl mb-4 text-foreground">Gallini Fellici</h3>
            <p className="text-lg text-gray-700">
              Hin und wieder organisieren wir Sammelbestellungen bei befreundeten
              Höfen — zum Beispiel Orangen von Gallini Fellici in Italien. Kein
              fester Ernteanteil, aber eine schöne Ergänzung, wenn die Saison es
              hergibt. Halte die Augen offen in unseren Rundmails!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
