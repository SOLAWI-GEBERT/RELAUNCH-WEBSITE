import { Calendar, Truck, AlertCircle, MapPin } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* ── Marker-Icons (Signature-Illustrationen) ──
   Die drei PNGs sind als Kartennadel gezeichnet: weiße Tropfenform mit transparentem
   Rand und Spitze unten. Deshalb sitzt `iconAnchor` auf der Spitze (x = halbe Breite,
   y = volle Höhe). Keine JPGs verwenden — die haben einen Hintergrund und erscheinen
   als Kachel statt als Nadel. */
const markerIcon = (iconUrl: string, [w, h]: [number, number] = [40, 40]) =>
  new L.Icon({
    iconUrl,
    iconSize: [w, h],
    iconAnchor: [w / 2, h],
    popupAnchor: [0, -h + 2],
  });

const depotIcon = markerIcon("/depot.png");
const hofIcon = markerIcon("/hof.png");
// 50 × 48 px im Original — Höhe angepasst, damit die Nadel nicht verzerrt
const wartelisteIcon = markerIcon("/Gemusestand_klein.png", [40, 38]);

/* ── Standort-Daten ── */
// exportiert, damit das Interesse-Formular dieselbe Depot-Liste verwendet (TNV V26.4 S. 3)
export const depots = [
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
  { name: "Biohof Tristan", lat: 49.5683, lng: 10.6283, address: "Emskirchen/Gunzendorf (Bioland) — Winter- und ab April 2027 Sommergemüse" },
  { name: "Demeterhof Andreas Walz", lat: 49.46267898029151, lng: 11.8103789802915, address: "In der Schäflohe 4, 92224 Amberg (demeter) — Huhn, Hack, Wurst, Ur-Getreide" },
  { name: "Bio..Beeren Kirschgarten", lat: 49.6267, lng: 11.2283, address: "Bei Igensdorf (EU-Bio) — Beeren, ab Sommer 2027 Stein- & Kernobst" },
  // Rockenbach (Scheinfeld, Lkr. NEA), ca. 15 km von Gunzendorf — Koordinate genähert, TNV V26.4 S. 10
  { name: "Schweigerts Hof", lat: 49.6894, lng: 10.4954, address: "Rockenbach — Bio-Edelpilze" },
];

export function Depots() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero — Pastell + freie Illustration */}
      {/* Grün (#c2ddb2), weil `ablauf-depot.jpg` genau diesen Hintergrund hat (#c4ddb3):
          die Illustration sitzt randlos in der Fläche statt als Kachel darauf. */}
      <section className="relative min-h-[320px] flex items-center bg-solawi-green wave-bottom z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center py-12 md:py-14">
            <div>
              <span className="badge-frech mb-6 inline-block">Abholung & Termine</span>
              <h1 className="h1-seite mb-6">
                Depots
              </h1>
              <p className="lead max-w-lg">
                Hier findest du die Höfe auf dem Land und die Depots zur
                Abholung in deiner Umgebung
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/ablauf-depot.jpg" alt="Depot in der Stadt" className="h-[220px] md:h-[260px] object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Karte — Weiß als neutraler Trenner im Farbrhythmus: die OSM-Kacheln und die
          Marker-Illustrationen bringen eigene Farbe mit und brauchen eine ruhige Fläche. */}
      <section id="karte" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-cta" />
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
                <Marker
                  key={d.name}
                  position={[d.lat, d.lng]}
                  icon={d.name.includes("Warteliste") ? wartelisteIcon : depotIcon}
                >
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

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <img src="/depot.png" alt="" className="w-7 h-7" /> Depots
            </span>
            <span className="flex items-center gap-2">
              <img src="/Gemusestand_klein.png" alt="" className="w-7 h-7" /> Depot mit Warteliste
            </span>
            <span className="flex items-center gap-2">
              <img src="/hof.png" alt="" className="w-7 h-7" /> Höfe
            </span>
          </div>
        </div>
      </section>

      {/* Depot-Öffnungszeiten — Grün, weil `ablauf-ernteteiler.jpg` exakt diesen Hintergrund
          hat (#c2ddb2): die Uhr läuft randlos in die Fläche, statt als grünes Feld auf einer
          Gegenfarbe zu sitzen. Grün kommt dadurch zweimal auf der Seite vor, getrennt durch
          die weiße Kartensektion. */}
      <section id="depots" className="py-16 bg-solawi-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Die Uhr-Illustration tritt hier an die Stelle des lucide-Icons: gleiche Funktion
              als Sektionsmarke, aber sie zeigt das Abholzeitfenster, um das es darunter geht.
              Sie steht links vor dem Titel — der Bildrhythmus der Seite wechselt die Seite
              von Sektion zu Sektion (Hero rechts, hier links, Lieferung mittig). */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
            <img
              src="/ablauf-ernteteiler.jpg"
              alt="Uhr mit einer Karotte als Stundenzeiger und einer Heugabel als Minutenzeiger"
              className="h-[160px] md:h-[200px] object-contain hover-wiggle"
            />
            <h2 className="text-3xl font-bold text-foreground">Depot-Öffnungszeiten</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {depots.map((d) => (
              <div key={d.name} className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold text-foreground mb-1">{d.name}</h3>
                <p className="text-sm text-gray-700">{d.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lieferung & Abholung — Blaugrau ist die Signatur-Farbe für Landwirtschaft/Logistik
          und zugleich der Hintergrund von `features-landwirtschaft.jpg` (#96b0c7),
          die Grafik läuft also randlos in die Fläche. */}
      <section id="lieferung" className="py-16 bg-solawi-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mittig gesetzt: die dritte Position im Bildrhythmus der Seite. */}
          <div className="text-center mb-10">
            <img
              src="/features-landwirtschaft.jpg"
              alt="Hände planen auf einer Feldkarte, wo Erdbeere, Tomate und Kartoffel wachsen"
              className="h-[180px] md:h-[220px] object-contain mx-auto mb-4"
            />
            <div className="flex items-center justify-center gap-3">
              <Truck className="w-8 h-8 text-cta" />
              <h2 className="text-3xl font-bold text-foreground">Lieferung & Abholung</h2>
            </div>
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

      {/* Lieferrhythmus — Mauve ist die Signatur-Farbe für Lebensmittel/Produkte und der
          Hintergrund von `features-lebensmittel.jpg` (#c7afc7); die Tabelle liegt weiß darauf. */}
      <section id="anlieferung" className="py-16 bg-solawi-mauve">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-8 h-8 text-cta" />
            <h2 className="text-3xl font-bold text-foreground">Lieferrhythmus</h2>
          </div>

          {/* Das Füllhorn steht hier nicht in der Titelzeile, sondern neben der Tabelle —
              größer und als Teil des Inhalts statt als Sektionsmarke. */}
          <div className="grid lg:grid-cols-4 gap-8 items-center">
            {/* overflow-x-auto: die vier Spalten brauchen rund 390 px — ohne den eigenen
                Scrollrahmen schiebt die Tabelle die ganze Seite auf Handybreite nach rechts. */}
            <div className="bg-white rounded-lg p-4 sm:p-8 shadow-sm lg:col-span-3 overflow-x-auto">
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
                    <td className="py-2 pr-4">Tristan</td>
                    <td className="py-2 pr-4">Wintergemüse</td>
                    <td className="py-2 pr-4">wöchentl./14-tägig</td>
                    <td className="py-2">Okt–Mrz</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4">Tristan</td>
                    <td className="py-2 pr-4">Sommergemüse</td>
                    <td className="py-2 pr-4">wöchentl./14-tägig</td>
                    <td className="py-2">Apr–Sept (ab 2027)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4">Schweigerts</td>
                    <td className="py-2 pr-4">Bio..Edelpilze</td>
                    <td className="py-2 pr-4">wöchentl./14-tägig</td>
                    <td className="py-2">ganzjährig</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4">Walz</td>
                    <td className="py-2 pr-4">Fleisch, Eier, Getreide</td>
                    <td className="py-2 pr-4">1–2x/Monat</td>
                    <td className="py-2">ganzjährig</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4">Kirschgarten</td>
                    <td className="py-2 pr-4">Bio..Beeren</td>
                    <td className="py-2 pr-4">wöchentlich</td>
                    <td className="py-2">Jul–Sept</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Kirschgarten</td>
                    <td className="py-2 pr-4">Stein- & Kernobst</td>
                    <td className="py-2 pr-4">unregelmäßig</td>
                    <td className="py-2">Jul–Dez (Warteliste)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <img
              src="/features-lebensmittel.jpg"
              alt="Füllhorn aus Kürbis, Lauch, Getreide, Trauben, Käse, Pilzen und Tomaten"
              className="h-[200px] lg:h-[280px] object-contain mx-auto"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
