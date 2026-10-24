import type { Ernteanteil } from "../data/ernteanteile";

/**
 * Abschnitt "Aus der Küche" (openspec specs/harvest-shares, Requirement "Abschnitt \"Aus der
 * Küche\""): höchstens drei Karten zu Lagerung, Verwertung und Rezeptideen. Eine Rezeptidee mit
 * `link` ist als Link erkennbar. Ohne Daten rendert nichts, auch keine Überschrift.
 */
export function AusDerKueche({
  kueche,
  flaeche,
  Heading,
  ueberschrift,
}: {
  kueche?: Ernteanteil["kueche"];
  flaeche: string;
  Heading: "h2" | "h3";
  ueberschrift: string;
}) {
  const tipps = (kueche ?? []).slice(0, 3);
  if (tipps.length === 0) return null;

  return (
    <div>
      <Heading className={ueberschrift}>Aus der Küche</Heading>
      <div className="grid md:grid-cols-3 gap-6">
        {tipps.map((t) => (
          <div key={t.titel} className={`${flaeche} p-4 rounded-lg`}>
            <p className="font-semibold text-foreground mb-2">{t.titel}</p>
            {t.link ? (
              <a
                href={t.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary underline underline-offset-2"
              >
                {t.text}
              </a>
            ) : (
              <p className="text-gray-700 text-sm">{t.text}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
