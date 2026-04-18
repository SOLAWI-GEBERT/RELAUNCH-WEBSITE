import { Calendar, Truck, AlertCircle, MapPin, Clock, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* ── Marker-Icons (Signature-Illustrationen) ── */
const depotIcon = new L.Icon({
  iconUrl: "/inline-kuerbis.jpg",
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -34],
});

const hofIcon = new L.Icon({
  iconUrl: "/inline-hof.jpg",
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -34],
});

/* ── Standort-Daten ── */
const depots = [
  { name: "Depot St. Peter", lat: 49.443805, lng: 11.0911991, address: "Findelwiesenstr. 25, Nürnberg", hours: "Mittwoch 14 Uhr bis Donnerstag 18 Uhr" },
  { name: "Depot Stadtpark", lat: 49.46355594773305, lng: 11.096376207324228, address: "Gemeindehaus der Reformations-Gedächtniskirche, Berliner Platz 20, 90489 Nürnberg", hours: "Mittwoch bis Samstag" },
  { name: "Depot Die Wiese", lat: 49.440983418981595, lng: 11.070236436909584, address: "Wiesenstraße 19, 90443 Nürnberg", hours: "Mittwoch 14 bis 20 Uhr" },
  { name: "Depot Gostenhof (Warteliste)", lat: 49.44709965070575, lng: 11.054054700589662, address: "Reitackerstr. 18, Nürnberg", hours: "Mittwoch bis Freitag" },
  { name: "Depot Johannis", lat: 49.45964237502998, lng: 11.0549138829412, address: "Julienstr. 8, 90419 Nürnberg", hours: "Mittwoch bis Freitag" },
  { name: "Depot AKi", lat: 49.468330266824864, lng: 11.075108367888399, address: "Grünewaldstr. 24, Nürnberg (Zugang via Uhlandstr.)", hours: "Mittwoch bis Freitag" },
  { name: "Depot Tataa", lat: 49.47958404841266, lng: 10.986702958418762, address: "Marktplatz 4, Fürth", hours: "Mittwoch 19:30–20:30 Uhr & auf Nachfrage" },
  { name: "Depot Spiegelfabrik (Warteliste)", lat: 49.470097691079886, lng: 11.00517106904846, address: "Dr.-Mack-Str. 42, Fürth", hours: "Mittwoch 17:30–19:30 Uhr & auf Nachfrage" },
  { name: "Depot Altenfurt", lat: 49.4068315, lng: 11.1667917, address: "Schornbaumstraße 12, Grundstück der evang. Gemeinde, Altenfurt", hours: "Mittwoch 14 bis 20 Uhr" },
];

const hoefe = [
  { name: "Biohof Tristan", lat: 49.5683, lng: 10.6283, address: "Emskirchen/Gunzendorf (Bioland) — Wintergemüse" },
  { name: "Demeterhof Heribert Hederer", lat: 49.54871497973974, lng: 10.238286376189608, address: "Uffenheim (demeter) — Sommergemüse & Obst" },
  { name: "Demeterhof Andreas Walz", lat: 49.46267898029151, lng: 11.8103789802915, address: "In der Schäflohe 4, 92224 Amberg (demeter) — Huhn, Hack, Wurst, Ur-Getreide" },
  { name: "Bio...Beeren Kirschgarten", lat: 49.6267, lng: 11.2283, address: "Bei Igensdorf (EU-Bio) — Beeren-Vielfalt" },
];

export function LieferungKalender() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero — Pastell + freie Illustration */}
      <section className="bg-solawi-salmon py-16 wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="badge-frech mb-4 inline-block">Abholung & Termine</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Lieferung & Kalender
              </h1>
              <p className="text-xl text-foreground/90 max-w-3xl">
                Hier findest du die Höfe auf dem Land und die Depots zur
                Abholung in deiner Umgebung
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/ablauf-depot.jpg" alt="Depot in der Stadt" className="h-[220px] object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Karte */}
      <section id="karte" className="py-16 bg-solawi-salmon-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-gray-900">Höfe & Depots</h2>
          </div>
          <p className="text-gray-700 mb-8 max-w-3xl">
            Die Depots werden regelmäßig von unserem Logistik-Team beliefert.
            Hier kannst du dir die Ernte von einem oder mehreren Höfen deiner
            Wahl abholen. Klick auf ein Symbol für die Adresse.
          </p>

          <div className="rounded-lg overflow-hidden shadow-sm mb-6">
            <MapContainer
              center={[49.455, 11.08]}
              zoom={10}
              scrollWheelZoom={false}
              className="h-[500px] w-full z-0"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {depots.map((d) => (
                <Marker key={d.name} position={[d.lat, d.lng]} icon={depotIcon}>
                  <Popup>
                    <strong>{d.name}</strong>
                    <br />
                    {d.address}
                    <br />
                    <em>{d.hours}</em>
                  </Popup>
                </Marker>
              ))}
              {hoefe.map((h) => (
                <Marker key={h.name} position={[h.lat, h.lng]} icon={hofIcon}>
                  <Popup>
                    <strong>{h.name}</strong>
                    <br />
                    {h.address}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          <div className="flex gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <img src="/inline-kuerbis.jpg" alt="Kürbis" className="w-6 h-6" /> Depots
            </span>
            <span className="flex items-center gap-2">
              <img src="/inline-hof.jpg" alt="Hof" className="w-6 h-6" /> Höfe
            </span>
          </div>
        </div>
      </section>

      {/* Depot-Öffnungszeiten */}
      <section id="depots" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-gray-900">Depot-Öffnungszeiten</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {depots.map((d) => (
              <div key={d.name} className="bg-solawi-mauve p-5 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1">{d.name}</h3>
                <p className="text-sm text-gray-700">{d.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lieferung & Abholung */}
      <section id="lieferung" className="py-16 bg-solawi-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Truck className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-gray-900">Lieferung & Abholung</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div id="wann" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Wann wird geliefert?
              </h3>
              <p className="text-gray-700">
                Die Lieferung erfolgt wöchentlich zu festen Zeiten an die verschiedenen Depots.
                Die genauen Lieferzeiten variieren je nach Depot.
              </p>
            </div>

            <div id="was" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Was wird geliefert?
              </h3>
              <p className="text-gray-700">
                Je nach Saison erhältst du frisches Gemüse, Obst und weitere landwirtschaftliche
                Produkte von unseren Höfen. Der Ernteanteil variiert saisonal.
              </p>
            </div>

            <div id="aenderungen" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Änderungen/Feiertage/Ausfälle
              </h3>
              <p className="text-gray-700">
                Bei Feiertagen oder besonderen Umständen können sich Liefertermine verschieben.
                Wir informieren dich rechtzeitig über alle Änderungen.
              </p>
            </div>

            <div id="depot-hinweise" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Abholung & Depot-Regeln
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Du bist für die Abholung deines Ernteanteils verantwortlich.</li>
                <li>• Nicht geschafft? Organisier eine Vertretung.</li>
                <li>• Bitte beachte die Öffnungszeiten und Fristen deines Depots.</li>
                <li>• Nicht abgeholtes Gemüse geht an Foodsharing.</li>
                <li>• 1–2 Mal im Jahr wirst du für das Aufräumen und Reinigen des Depots eingeteilt (ca. 20 Min).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lieferrhythmus */}
      <section id="anlieferung" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-gray-900">Lieferrhythmus</h2>
          </div>

          <div className="bg-solawi-mauve rounded-lg p-8">
            <table className="w-full text-sm text-left text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-2 pr-4 font-semibold">Hof</th>
                  <th className="py-2 pr-4 font-semibold">Produkt</th>
                  <th className="py-2 pr-4 font-semibold">Zyklus</th>
                  <th className="py-2 font-semibold">Phase</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4">Hederer</td>
                  <td className="py-2 pr-4">Sommergemüse</td>
                  <td className="py-2 pr-4">wöchentlich</td>
                  <td className="py-2">Apr–Sept</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4">Hederer</td>
                  <td className="py-2 pr-4">Obst</td>
                  <td className="py-2 pr-4">nach Bedarf</td>
                  <td className="py-2">Jul–Dez</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4">Tristan</td>
                  <td className="py-2 pr-4">Wintergemüse</td>
                  <td className="py-2 pr-4">wöchentl./14-tägig</td>
                  <td className="py-2">Okt–Mrz</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4">Walz</td>
                  <td className="py-2 pr-4">Fleisch, Eier, Getreide</td>
                  <td className="py-2 pr-4">1–2x/Monat</td>
                  <td className="py-2">ganzjährig</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Kirschgarten</td>
                  <td className="py-2 pr-4">Bio-Beeren</td>
                  <td className="py-2 pr-4">wöchentlich</td>
                  <td className="py-2">Jul–Sept</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ für Ernteteiler */}
      <section id="faq" className="py-16 bg-solawi-salmon-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fragen für Ernteteiler
            </h2>
          </div>

          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm px-6">
            <AccordionItem value="verein-aufgaben">
              <AccordionTrigger className="text-base font-semibold">
                Was macht der Solawi-Verein?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Der Förderverein wurde 2016 gegründet und kümmert sich um die Infrastruktur
                zwischen Landwirten und Ernteteilern. Hierzu gehört hauptsächlich der
                Transport, die Öffentlichkeitsarbeit und das Betreiben der Vergabestellen im
                Stadtgebiet. So können sich die Landwirte um das kümmern, was sie am liebsten
                machen — ganz ohne Excel und Transportfahrten.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="verein-wer">
              <AccordionTrigger className="text-base font-semibold">
                Wer oder was ist der Solawi-Verein?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Der Verein besteht aus allen ehrenamtlich Aktiven. Satzungsbedingt gibt es
                zwei gewählte Vorstände, einen Kassenwart und einen Kassenprüfer, welche alle
                ehrenamtlich und ohne Aufwandsentschädigung agieren. Als Ernteteiler wird man
                nicht automatisch Vereinsmitglied.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="einbringen">
              <AccordionTrigger className="text-base font-semibold">
                Muss ich mich einbringen an einem Hof oder im Verein?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Nein, das ist nicht verpflichtend. Jeder hat sein eigenes Leben und schafft
                es, sich mehr oder weniger einzubringen. Du kannst die Idee auch unterstützen,
                indem du Ernteteiler bei Stadt, Land, Beides. bist. Als Abholer in einem
                unserer Depots wirst du 1–2 Mal im Jahr für das Aufräumen und Reinigen des
                Depots eingeteilt (ca. 20 Min). Wünschenswert ist natürlich, wenn du dich für
                die Herkunft deiner Lebensmittel interessierst und den Landwirt auch
                kennenlernen möchtest.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="kontakt-landwirte">
              <AccordionTrigger className="text-base font-semibold">
                Kann ich direkt zu den Landwirten Kontakt aufnehmen?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Selbstverständlich. Alle Höfe sind offen für deinen Besuch und dein
                Engagement. Sprich einfach die jeweiligen Hofbetreuer an, die ehrenamtlich bei
                Stadt, Land, Beides. aktiv sind. Eine gute Gelegenheit, einen unserer
                Landwirte kennenzulernen, ist eine Hof-Aktion, über welche du als Ernteteiler
                in der Hof-Post informiert wirst.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ernteteiler-werden">
              <AccordionTrigger className="text-base font-semibold">
                Wie kann ich Ernteteiler werden?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Im Download-Bereich unserer Homepage findest du die aktuelle
                Teilnahmevereinbarung. Bei manchen Landwirten stehen noch freie Ernteanteile
                zur Verfügung. Kreuze das an, was dir zusagt. Du erhältst anschließend eine
                Bestätigung, was verfügbar ist.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="aussteigen">
              <AccordionTrigger className="text-base font-semibold">
                Wie kann ich wieder aussteigen?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Bei manchen Höfen ist ein Probemonat möglich, bei dem du ausprobieren kannst,
                ob die Solawi in deinen Alltag passt. Die genauen Umstände sind in der
                Teilnahmevereinbarung festgelegt. Eine Kündigung ist dann zum Ende des
                Wirtschaftsjahres und bei besonderen Fällen (z.B. Umzug o.ä.) möglich.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-solawi-green py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Bleib auf dem Laufenden
          </h2>
          <p className="text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
            Melde dich für unseren Newsletter an, um keine Termine zu verpassen
          </p>
          <button className="bg-cta text-white px-8 py-3 font-semibold hover:bg-cta-hover transition-colors font-accent">
            Zum Newsletter
          </button>
        </div>
      </section>
    </div>
  );
}
