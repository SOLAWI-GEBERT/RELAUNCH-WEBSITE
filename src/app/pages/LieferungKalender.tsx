import { Calendar, Truck, AlertCircle, MapPin, Clock } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* ── Marker-Icons ── */
const depotIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const hofIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

/* ── Standort-Daten ── */
const depots = [
  { name: "Depot St. Peter", lat: 49.443805, lng: 11.0911991, address: "Findelwiesenstr. 25, Nürnberg", hours: "Mittwoch 14 Uhr bis Donnerstag 18 Uhr" },
  { name: "Depot Stadtpark", lat: 49.46355594773305, lng: 11.096376207324228, address: "Gemeindehaus der Reformations-Gedächtniskirche, Berliner Platz 20, 90489 Nürnberg", hours: "Mittwoch bis Samstag" },
  { name: "Depot Wiese", lat: 49.440983418981595, lng: 11.070236436909584, address: "Wiesenstraße 19, 90443 Nürnberg", hours: "Mittwoch 14 bis 20 Uhr" },
  { name: "Depot Gostenhof", lat: 49.44709965070575, lng: 11.054054700589662, address: "Reitackerstraße, Nürnberg", hours: "Mittwoch bis Freitag" },
  { name: "Depot Johannis", lat: 49.45964237502998, lng: 11.0549138829412, address: "Julienstr. 8, 90419 Nürnberg", hours: "Mittwoch bis Freitag" },
  { name: "Depot AKI Nordstadt", lat: 49.468330266824864, lng: 11.075108367888399, address: "Aktivspielplatz AKI, Grunewaldstr. 24a, 90408 Nürnberg", hours: "Mittwoch bis Freitag" },
  { name: "Depot Tataa", lat: 49.47958404841266, lng: 10.986702958418762, address: "Marktplatz 4, Fürth", hours: "Mittwoch 19:30–20:30 Uhr & auf Nachfrage" },
  { name: "Depot Spiegelfabrik", lat: 49.470097691079886, lng: 11.00517106904846, address: "Zugang via Dr.-Mack-Str. 42, Fürth", hours: "Mittwoch 17:30–19:30 Uhr & auf Nachfrage" },
  { name: "Depot Altenfurt", lat: 49.4068315, lng: 11.1667917, address: "Schornbaumstraße 12, Grundstück der evang. Gemeinde, Altenfurt", hours: "Mittwoch 14 bis 20 Uhr" },
];

const hoefe = [
  { name: "Schallerhof", lat: 49.57848, lng: 10.9432444, address: "Bioland-Hof Familie Schaller, St. Michael 43, 91056 Erlangen-Steudach" },
  { name: "Biohof Walz", lat: 49.46267898029151, lng: 11.8103789802915, address: "In der Schäflohe 4, 92224 Amberg" },
  { name: "Gärtnerhof Hederer", lat: 49.54871497973974, lng: 10.238286376189608, address: "Gärtnerhof Reginswind, Uffenheim" },
  { name: "Reimehof", lat: 49.60449999999999, lng: 11.44095, address: "Wallsdorf 1, 91241 Kirchensittenbach" },
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
              <span className="inline-block w-3 h-3 rounded-full bg-green-600" /> Depots
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-orange-500" /> Höfe
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
                Depot-Hinweise
              </h3>
              <p className="text-gray-700">
                Bitte beachte die individuellen Regeln und Öffnungszeiten deines Depots.
                Weitere Informationen erhältst du direkt von deinen Depotbetreuer*innen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kalender Section */}
      <section id="kalender" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-gray-900">Kalender</h2>
          </div>

          <div className="bg-solawi-mauve rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-6">Kommende Termine</h3>
            <p className="text-gray-600 mb-4">
              Hier findest du alle wichtigen Termine für Veranstaltungen, Mitmachaktionen,
              Hofaktionen und Anlieferungstermine.
            </p>
            <div className="bg-white/60 p-6 rounded-lg">
              <p className="text-gray-700 italic">
                Der interaktive Kalender wird in Kürze verfügbar sein.
              </p>
            </div>
          </div>

          {/* Veranstaltungsarten */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div id="veranstaltungen" className="bg-solawi-mauve p-6 rounded-lg">
              <Calendar className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Veranstaltungen</h3>
              <p className="text-sm text-gray-600">
                Feste, Märkte und gesellige Zusammenkünfte
              </p>
            </div>

            <div id="mitmachaktionen" className="bg-solawi-mauve p-6 rounded-lg">
              <Clock className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Mitmachaktionen</h3>
              <p className="text-sm text-gray-600">
                Gemeinsame Aktionen auf den Höfen
              </p>
            </div>

            <div id="hofaktionen" className="bg-solawi-mauve p-6 rounded-lg">
              <Truck className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Hofaktionen</h3>
              <p className="text-sm text-gray-600">
                Besondere Aktivitäten auf unseren Partnerhöfen
              </p>
            </div>

            <div id="anlieferung" className="bg-solawi-mauve p-6 rounded-lg">
              <MapPin className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Anlieferungstermine</h3>
              <p className="text-sm text-gray-600">
                Übersicht aller Liefertermine
              </p>
            </div>
          </div>
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
