import { Calendar, MapPin, Clock, Users, Sprout } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Kalender() {
  const events = [
    {
      date: "15. März 2026",
      title: "Hofaktion Reimehof - Frühjahrsanbau",
      type: "Hofaktion",
      time: "10:00 - 16:00 Uhr",
      location: "Reimehof, Reimehof 1, 12345 Musterstadt",
      description: "Gemeinsames Pflanzen von Tomaten, Paprika und Salaten. Mittagessen wird gestellt.",
      spots: "Unbegrenzt",
    },
    {
      date: "22. März 2026",
      title: "Online Info-Veranstaltung",
      type: "Info-Veranstaltung",
      time: "19:00 - 20:30 Uhr",
      location: "Online via Zoom",
      description: "Interessiert an Solidarischer Landwirtschaft? Erfahre mehr über Stadt, Land, Beides und stelle deine Fragen.",
      spots: "50 Plätze",
    },
    {
      date: "5. April 2026",
      title: "Obstbaumschnitt-Kurs",
      type: "Workshop",
      time: "14:00 - 17:00 Uhr",
      location: "Obstplantage Hederer, Obstweg 12, 12347 Obstdorf",
      description: "Lerne die Grundlagen des Obstbaumschnitts direkt auf der Plantage. Für Mitglieder kostenlos.",
      spots: "15 Plätze (5 frei)",
    },
    {
      date: "12. April 2026",
      title: "Generalversammlung",
      type: "Vereinstermin",
      time: "18:00 - 21:00 Uhr",
      location: "Gemeindehaus Musterstadt, Hauptstraße 100",
      description: "Jährliche Mitgliederversammlung mit Berichten, Abstimmungen und gemütlichem Beisammensein.",
      spots: "Für Mitglieder",
    },
    {
      date: "26. April 2026",
      title: "Spargel-Ernteaktion",
      type: "Hofaktion",
      time: "8:00 - 12:00 Uhr",
      location: "Biohof Walz, Landstraße 45, 12346 Musterdorf",
      description: "Frühmorgendliche Spargelernte - wer dabei ist, bekommt frischen Spargel mit nach Hause!",
      spots: "20 Plätze (12 frei)",
    },
    {
      date: "10. Mai 2026",
      title: "Frühlingsfest",
      type: "Veranstaltung",
      time: "14:00 - 20:00 Uhr",
      location: "Reimehof, Reimehof 1, 12345 Musterstadt",
      description: "Gemeinsames Fest mit Hofführungen, Lagerfeuer, Musik und gutem Essen. Familien willkommen!",
      spots: "Unbegrenzt",
    },
    {
      date: "24. Mai 2026",
      title: "Workshop: Fermentieren & Einkochen",
      type: "Workshop",
      time: "15:00 - 18:00 Uhr",
      location: "Depot Innenstadt, Hauptstraße 45",
      description: "Lerne, wie du deine Ernte haltbar machst. Wir fermentieren Gemüse und kochen Marmelade ein.",
      spots: "12 Plätze (3 frei)",
    },
    {
      date: "7. Juni 2026",
      title: "Beerenernte bei Hederer",
      type: "Hofaktion",
      time: "9:00 - 12:00 Uhr",
      location: "Obstplantage Hederer, Obstweg 12, 12347 Obstdorf",
      description: "Gemeinsame Erdbeerernte - mit frischen Beeren zum Mitnehmen!",
      spots: "25 Plätze (18 frei)",
    },
  ];

  const eventTypes = [
    { name: "Alle", color: "bg-gray-600" },
    { name: "Hofaktion", color: "bg-primary" },
    { name: "Workshop", color: "bg-blue-600" },
    { name: "Veranstaltung", color: "bg-purple-600" },
    { name: "Info-Veranstaltung", color: "bg-orange-600" },
    { name: "Vereinstermin", color: "bg-red-600" },
  ];

  const getEventColor = (type: string) => {
    const eventType = eventTypes.find(t => t.name === type);
    return eventType ? eventType.color : "bg-gray-600";
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/ablauf-ernteteiler.jpg"
            alt="Kalender - Ernteteiler"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl mb-4">
            Kalender
          </h1>
          <p className="text-xl">
            Veranstaltungen, Hofaktionen und Mitmach-Termine
          </p>
        </div>
      </section>

      {/* Filter & Legend */}
      <section className="py-8 bg-solawi-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {eventTypes.map((type) => (
              <button
                key={type.name}
                className={`${type.color} text-white px-4 py-2 rounded-full hover:opacity-80 transition-opacity`}
              >
                {type.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {events.map((event, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Date Badge */}
                    <div className="flex-shrink-0">
                      <div className="bg-primary/10 rounded-lg p-4 text-center min-w-[100px]">
                        <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                        <div className="text-sm text-foreground font-semibold">
                          {event.date}
                        </div>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start gap-3 mb-3">
                        <h3 className="text-2xl text-foreground flex-1">
                          {event.title}
                        </h3>
                        <span className={`${getEventColor(event.type)} text-white px-3 py-1 rounded-full text-sm`}>
                          {event.type}
                        </span>
                      </div>

                      <p className="text-gray-700 mb-4">
                        {event.description}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex items-start gap-2">
                          <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-gray-900">Zeit</p>
                            <p className="text-sm text-gray-700">{event.time}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-gray-900">Ort</p>
                            <p className="text-sm text-gray-700">{event.location}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-gray-900">Teilnehmer</p>
                            <p className="text-sm text-gray-700">{event.spots}</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <button className="bg-primary hover:bg-primary text-white px-6 py-2 rounded-lg transition-colors">
                          Anmelden
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anlieferung Info */}
      <section className="py-20 bg-solawi-blue">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-foreground text-center">
            Anlieferung von Ernteteilen
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl mb-4 text-foreground flex items-center gap-2">
                  <Sprout className="w-6 h-6" />
                  Sommergemüse (Reimehof)
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Saison</p>
                      <p className="text-gray-700">Mai bis Oktober</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Liefertag</p>
                      <p className="text-gray-700">Jeden Donnerstag</p>
                    </div>
                  </div>
                  <div className="bg-secondary/20 p-4 rounded-lg mt-4">
                    <p className="text-sm text-gray-700">
                      Die genauen Abholzeiten variieren je nach Depot. 
                      In der Regel zwischen 15:00 und 19:00 Uhr.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl mb-4 text-foreground flex items-center gap-2">
                  <Sprout className="w-6 h-6" />
                  Wintergemüse (Biohof Walz)
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Saison</p>
                      <p className="text-gray-700">November bis April</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Liefertag</p>
                      <p className="text-gray-700">Jeden Freitag</p>
                    </div>
                  </div>
                  <div className="bg-secondary/20 p-4 rounded-lg mt-4">
                    <p className="text-sm text-gray-700">
                      Die genauen Abholzeiten variieren je nach Depot. 
                      In der Regel zwischen 15:00 und 19:00 Uhr.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl mb-4 text-foreground">Wichtige Hinweise</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                  <span>Bitte hole deine Ernteanteile regelmäßig ab. Nicht abgeholte Anteile werden am Folgetag verteilt.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                  <span>Bei Urlaub oder Verhinderung kannst du deinen Anteil verschenken oder spenden.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                  <span>Die Zusammensetzung variiert je nach Saison und Ernte - das macht es spannend!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-solawi-green text-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">
            Möchtest du bei einer Aktion dabei sein?
          </h2>
          <p className="text-xl mb-8 text-foreground/80">
            Melde dich für Veranstaltungen an oder werde Mitglied, um an allen Aktionen teilzunehmen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white hover:bg-primary/80 px-8 py-4 rounded-lg transition-colors">
              Newsletter abonnieren
            </button>
            <button className="border-2 border-foreground text-foreground hover:bg-foreground/10 px-8 py-4 rounded-lg transition-colors">
              Mitglied werden
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
