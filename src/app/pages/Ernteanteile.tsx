import { Link } from "react-router";
import { GEMUESE_SLUG, ernteanteilNach, nachKategorie, type Ernteanteil } from "../data/ernteanteile";
import { hoefe } from "../data/hoefe";
import { anteilMitPlatzhaltern, hofMitPlatzhaltern } from "../data/platzhalter";
import { HofLogo } from "../components/HofLogo";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { VerfuegbarkeitsBadge } from "../components/VerfuegbarkeitsBadge";

/**
 * Bild der Kachel (openspec specs/harvest-shares, "Ernteanteile-Übersicht nach Kategorien"):
 * Foto der ersten Beispiel-Lieferung, sonst das eigene Foto des Ernteanteils, sonst das Hoffoto,
 * sonst kein Bild — nie ein Foto eines anderen Betriebs. Gemüse (Winter und Sommer teilen eine
 * Kachel) nimmt die Daten des Winters.
 * Nur solange Platzhalter aktiv sind, steht das Platzhalter-Kistenfoto als letzte Stufe, damit
 * Höfe mit echtem Hoffoto nicht von grauen Platzhaltern verdrängt werden.
 */
function kachelBild(item: Ernteanteil) {
  const quelle = item.slug === GEMUESE_SLUG ? ernteanteilNach("tristan-winter") ?? item : item;
  const kistenFoto = quelle.kiste?.beispiele?.find((b) => b.foto)?.foto;
  if (kistenFoto) return kistenFoto;
  if (quelle.foto) return quelle.foto;
  const hof = hoefe[item.hof] as { image?: string; imageAlt?: string; name: string };
  if (hof.image) return { src: hof.image, alt: hof.imageAlt ?? hof.name };
  return anteilMitPlatzhaltern(quelle).kiste?.beispiele?.find((b) => b.foto)?.foto;
}

export function Ernteanteile() {
  // Kategorie bleibt Sortierung und Icon; als Kachelwand statt je Kategorie ein Abschnitt.
  const kacheln = nachKategorie().flatMap(({ kategorie, Icon, items }) =>
    items.map((item) => ({ item, kategorie, Icon })),
  );

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative min-h-[320px] flex items-center bg-solawi-blue wave-bottom z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center py-12 md:py-14">
            <div>
              <span className="badge-frech mb-6 inline-block">Unsere Höfe</span>
              <h1 className="h1-seite mb-6">Ernteanteile</h1>
              <p className="lead max-w-lg">
                Vier Höfe, ein Kirschgarten — sortiert nach dem, was bei dir ankommt.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/decision-auszeichnung.jpg"
                alt="Zucchini, Karotte und Birne stehen Arm in Arm nebeneinander"
                className="h-[220px] md:h-[260px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kachelwand */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Alle Ernteanteile</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {kacheln.map(({ item, kategorie, Icon }) => {
              const hof = hofMitPlatzhaltern(item.hof, hoefe[item.hof]);
              const bild = kachelBild(item);
              return (
                <Link
                  key={item.slug}
                  to={`/ernteanteile/${item.slug}`}
                  className="flex flex-col bg-white shadow-md hover-tilt h-full group border border-gray-100 overflow-hidden"
                >
                  <div className="aspect-[4/3] bg-gray-100">
                    {bild && (
                      <ImageWithFallback src={bild.src} alt={bild.alt} className="w-full h-full object-cover" />
                    )}
                  </div>
                  {/* Textteil wie die Produktkarten der Startseite: Icon text-cta, h4, meta, p */}
                  <div className="flex flex-col flex-1 p-6">
                    <Icon className="w-10 h-10 text-cta mb-4" aria-hidden="true" />
                    <span className="sr-only">{kategorie}: </span>
                    <div className="flex flex-wrap items-start justify-between gap-x-2">
                      <h4 className="mb-1 group-hover:text-cta transition-colors">{item.titel}</h4>
                      <VerfuegbarkeitsBadge verfuegbarkeit={item.verfuegbarkeit} />
                    </div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <p className="meta">{hof.name}</p>
                      <HofLogo logo={hof.logo} className="h-6 w-16 shrink-0 text-foreground/70" />
                    </div>
                    <p>{item.kurz}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
