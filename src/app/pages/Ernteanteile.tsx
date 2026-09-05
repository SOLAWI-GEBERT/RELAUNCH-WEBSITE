import { Link } from "react-router";
import { Carrot, Apple, Cherry, Wheat, Egg, Beef, type LucideIcon } from "lucide-react";

interface ErnteanteilCard {
  title: string;
  hof: string;
  description: string;
  path: string;
}

interface Kategorie {
  title: string;
  Icon: LucideIcon;
  items: ErnteanteilCard[];
}

const kategorien: Kategorie[] = [
  {
    title: "Gemüse",
    Icon: Carrot,
    items: [
      {
        title: "Sommergemüse",
        hof: "Demeterhof Hederer",
        description: "Gurken, Tomaten, Kartoffeln, Kürbis und mehr — wöchentlich von April bis September.",
        path: "/ernteanteile/hederer-sommer",
      },
      {
        title: "Wintergemüse",
        hof: "Biohof Tristan",
        description: "Lauch, Rosenkohl, Wurzelgemüse und Lagerware für die kalte Jahreszeit.",
        path: "/ernteanteile/tristans-winter",
      },
    ],
  },
  {
    title: "Obst",
    Icon: Apple,
    items: [
      {
        title: "Obst & Säfte",
        hof: "Demeterhof Hederer",
        description: "Äpfel, Birnen, Zwetschgen und hausgemachte Säfte, nach Bedarf.",
        path: "/ernteanteile/hederer-obst",
      },
    ],
  },
  {
    title: "Beeren",
    Icon: Cherry,
    items: [
      {
        title: "Bio..Beeren",
        hof: "Kirschgarten",
        description: "Johannisbeeren, Himbeeren, Stachelbeeren u.v.m. — wöchentlich von Juli bis September.",
        path: "/ernteanteile/kirschgarten-beeren",
      },
    ],
  },
  {
    title: "Getreide",
    Icon: Wheat,
    items: [
      {
        title: "More..Ur-Getreide",
        hof: "Demeterhof Walz",
        description: "Alte Getreidesorten als Mehl, Körner oder Nudeln, einmal im Monat.",
        path: "/ernteanteile/walz-getreide",
      },
    ],
  },
  {
    title: "Eier",
    Icon: Egg,
    items: [
      {
        title: "More..Huhn",
        hof: "Demeterhof Walz",
        description: "Alle Eier deiner Henne, 2x im Monat, ganzjährig.",
        path: "/ernteanteile/walz-huhn",
      },
    ],
  },
  {
    title: "Fleisch",
    Icon: Beef,
    items: [
      {
        title: "More..Bratgockerl",
        hof: "Demeterhof Walz",
        description: "Artgerecht aufgezogenes Freilandhuhn, alle 4 Monate.",
        path: "/ernteanteile/walz-bratgockerl",
      },
      {
        title: "More..Hack",
        hof: "Demeterhof Walz",
        description: "500 g Aberdeen-Angus-Hack im Monat, aus Weidehaltung.",
        path: "/ernteanteile/walz-hack",
      },
      {
        title: "More..Wurst",
        hof: "Demeterhof Walz",
        description: "500 g Wurstwaren im Monat: Salami, Bratwurst, Wienerle u.v.m.",
        path: "/ernteanteile/walz-wurst",
      },
    ],
  },
];

export function Ernteanteile() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-solawi-blue py-16 wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge-frech mb-4 inline-block">Unsere Höfe</span>
          <h1 className="text-5xl mb-4 text-foreground">Ernteanteile</h1>
          <p className="text-xl text-foreground/80 max-w-2xl">
            Vier Höfe, ein Kirschgarten — sortiert nach dem, was bei dir ankommt.
          </p>
        </div>
      </section>

      {/* Kategorien */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {kategorien.map((kategorie) => (
            <div key={kategorie.title}>
              <div className="flex items-center gap-3 mb-6">
                <kategorie.Icon className="w-7 h-7 text-primary" />
                <h2 className="text-3xl text-foreground">{kategorie.title}</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {kategorie.items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block bg-white p-6 shadow-md hover-tilt h-full group border border-gray-100"
                  >
                    <h3 className="text-lg mb-1 text-foreground font-accent group-hover:text-cta transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{item.hof}</p>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
