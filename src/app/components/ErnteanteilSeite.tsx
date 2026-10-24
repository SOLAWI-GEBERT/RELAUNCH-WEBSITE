import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { AusDerKueche } from "./AusDerKueche";
import { HofLogo } from "./HofLogo";
import { InDerKiste } from "./InDerKiste";
import { HofSteckbrief } from "./HofSteckbrief";
import { Hofstimme } from "./Hofstimme";
import { PreisTabelle } from "./PreisTabelle";
import { VerfuegbarkeitsBadge } from "./VerfuegbarkeitsBadge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { hoefe } from "../data/hoefe";
import { kategorieFarben, type Ernteanteil } from "../data/ernteanteile";
import { anteilMitPlatzhaltern, hofMitPlatzhaltern } from "../data/platzhalter";

/**
 * Gemeinsames Gerüst aller Ernteanteil-Detailseiten (openspec specs/harvest-shares,
 * Requirement "Einheitliches Seitengerüst der Detailseiten"): Kopfband, Hof-Steckbrief,
 * Inhalt (ein oder mehrere `ErnteanteilAbschnitt`), CTA. Kopffarbe kommt aus der Kategorie.
 */
export function ErnteanteilSeite({
  anteil,
  children,
}: {
  anteil: Ernteanteil;
  children: ReactNode;
}) {
  const hof = hofMitPlatzhaltern(anteil.hof, hoefe[anteil.hof]);
  return (
    <div
      className="bg-white"
      style={{ "--hof-rahmen": kategorieFarben[anteil.kategorie].rahmen } as CSSProperties}
    >
      <section className={`${kategorieFarben[anteil.kategorie].band} py-16 wave-bottom relative z-10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          <div>
            <span className="badge-frech mb-4 inline-block">Ernteanteil</span>
            <h1 className="text-5xl mb-4 text-foreground">{anteil.titel}</h1>
            <p className="text-xl text-foreground/80 flex items-center gap-3 flex-wrap">
              {hof.name}
              <VerfuegbarkeitsBadge verfuegbarkeit={anteil.verfuegbarkeit} />
            </p>
          </div>
          <HofLogo logo={hof.logo} className="hidden sm:block h-20 w-44 shrink-0 text-foreground/80" />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HofSteckbrief {...hof} />
          <Hofstimme
            zitat={hof.zitat}
            logo={hof.logo}
            flaeche={kategorieFarben[anteil.kategorie].flaeche}
          />

          {children}

          <div className="mt-8 text-center">
            <Link to="/so-funktionierts" className="btn-cta">
              Jetzt Ernteanteil sichern
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * Inhalt eines Ernteanteils: Beschreibung (mit optionalem Foto), "Was steckt drin",
 * "Das kostet", "Lieferung & Info". Leere Abschnitte entfallen. `ebene` bestimmt, ob die
 * Zwischenüberschriften `h2` (eigene Seite) oder `h3` (unter einer Saison-Überschrift) sind.
 */
export function ErnteanteilAbschnitt({
  anteil: anteilRoh,
  ebene = "h2",
}: {
  anteil: Ernteanteil;
  ebene?: "h2" | "h3";
}) {
  const anteil = anteilMitPlatzhaltern(anteilRoh);
  const Heading = ebene;
  const flaeche = kategorieFarben[anteil.kategorie].flaeche;
  const ueberschrift = "text-2xl text-foreground mb-4";
  const hatKarten = !!anteil.karten && anteil.karten.length > 0;
  const hatKiste = (anteil.kiste?.beispiele?.length ?? 0) > 0 || !!anteil.kiste?.mengen;

  return (
    <div className="space-y-10">
      {(anteil.beschreibung || anteil.foto) && (
        <div className={anteil.foto ? "grid md:grid-cols-2 gap-8 items-center" : ""}>
          {anteil.beschreibung && <p className="text-lg text-gray-700">{anteil.beschreibung}</p>}
          {anteil.foto && (
            <div className="h-[200px] rounded-lg overflow-hidden shadow-md">
              <ImageWithFallback
                src={anteil.foto.src}
                alt={anteil.foto.alt}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      )}

      {/* Farbband in der Kategoriefarbe: "Was steckt drin" und "In der Kiste" in einem Block, die
          Holzkiste steht links auf der oberen Kante. Karten im Band sind weiß, damit sie sich
          abheben (und der Versatzrahmen der Kistenfotos sichtbar bleibt). */}
      {(hatKarten || hatKiste) && (
        <div className={`${kategorieFarben[anteil.kategorie].band} relative mt-8 rounded-lg px-6 pb-8 pt-10 sm:px-8 sm:pt-8 space-y-10`}>
          <img
            src="/kiste-illustration.png"
            alt=""
            aria-hidden="true"
            className="absolute -top-14 left-6 sm:left-8 w-28 sm:w-36 -rotate-3 select-none pointer-events-none"
          />
          {hatKarten && (
            <div>
              <Heading className={`${ueberschrift} sm:ml-40`}>Was steckt drin</Heading>
              <div className="grid md:grid-cols-3 gap-6">
                {anteil.karten!.map((k) => (
                  <div key={k.titel} className="bg-white p-4 rounded-lg">
                    <p className="font-semibold text-foreground mb-2">{k.titel}</p>
                    <p className="text-gray-700 text-sm">{k.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <InDerKiste
            kiste={anteil.kiste}
            flaeche="bg-white"
            Heading={Heading}
            ueberschrift={ueberschrift}
            einzug={!hatKarten}
          />
        </div>
      )}

      <AusDerKueche kueche={anteil.kueche} flaeche={flaeche} Heading={Heading} ueberschrift={ueberschrift} />

      <div>
        <Heading className={ueberschrift}>Das kostet</Heading>
        <PreisTabelle anteil={anteil} />
      </div>

      {anteil.info && anteil.info.length > 0 && (
        <div>
          <Heading className={ueberschrift}>Lieferung &amp; Info</Heading>
          <div className="space-y-2 text-sm text-gray-700">
            {anteil.info.map((i, idx) => (
              <p key={idx}>
                {i.titel && <strong className="text-foreground">{i.titel}: </strong>}
                {i.text}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
