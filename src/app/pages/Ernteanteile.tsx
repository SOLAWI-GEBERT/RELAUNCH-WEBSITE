import { Link } from "react-router";
import { nachKategorie } from "../data/ernteanteile";
import { hoefe } from "../data/hoefe";
import { VerfuegbarkeitsBadge } from "../components/VerfuegbarkeitsBadge";

export function Ernteanteile() {
  const kategorien = nachKategorie();

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
          {kategorien.map(({ kategorie, Icon, items }) => (
            <div key={kategorie}>
              <div className="flex items-center gap-3 mb-6">
                <Icon className="w-7 h-7 text-primary" />
                <h2 className="text-3xl text-foreground">{kategorie}</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/ernteanteile/${item.slug}`}
                    className="block bg-white p-6 shadow-md hover-tilt h-full group border border-gray-100"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-lg text-foreground font-accent group-hover:text-cta transition-colors">
                        {item.titel}
                      </h3>
                      <VerfuegbarkeitsBadge verfuegbarkeit={item.verfuegbarkeit} />
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{hoefe[item.hof].name}</p>
                    <p className="text-gray-600 text-sm">{item.kurz}</p>
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
