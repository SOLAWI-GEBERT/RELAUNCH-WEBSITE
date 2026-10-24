import type { Hof, HofKey } from "./hoefe";
import type { Ernteanteil } from "./ernteanteile";

/**
 * TEMPORÄRE PLATZHALTER, damit der fertige Seitenaufbau sichtbar und exportierbar ist, bevor die
 * Höfe Logos, Zitate, Kistenbeispiele und Küchentipps geliefert haben. Alles hier ist
 * ausdrücklich als "Platzhalter" beschriftet und erfunden — nie als echte Hofaussage verwenden.
 *
 * Echte Daten gewinnen: Setzt ein `Hof` oder `Ernteanteil` ein Feld selbst, wird der Platzhalter
 * dafür nicht benutzt. Vor dem Livegang `PLATZHALTER_AKTIV` auf `false` setzen (oder diese Datei
 * samt `public/platzhalter/` löschen). Spec-Bezug: openspec specs/harvest-shares,
 * "Hofinhalte nur mit Quelle vom Hof" gilt für den Livegang, nicht für diese Review-Phase.
 */
export const PLATZHALTER_AKTIV = true;

const hofPlatzhalter: Record<HofKey, Pick<Hof, "logo" | "zitat">> = {
  tristan: {
    logo: { src: "/platzhalter/logo-tristan.svg", alt: "Platzhalter-Logo Biohof Tristan" },
  },
  walz: {
    logo: { src: "/platzhalter/logo-walz.svg", alt: "Platzhalter-Logo Demeterhof Walz" },
  },
  schweigerts: {
    logo: { src: "/platzhalter/logo-schweigerts.svg", alt: "Platzhalter-Logo Schweigerts Hof" },
    zitat: {
      anrede: "Liebe Ernteteiler:innen,",
      text: "Platzhalter: Hier steht später ein Satz von Annabelle und Thomas Schweigert.",
      signatur: "Platzhalter-Signatur",
    },
  },
  kirschgarten: {
    logo: { src: "/platzhalter/logo-kirschgarten.svg", alt: "Platzhalter-Logo Kirschgarten" },
    zitat: {
      anrede: "Liebe Ernteteiler:innen,",
      text: "Platzhalter: Hier steht später ein Satz aus dem Kirschgarten.",
      signatur: "Platzhalter-Signatur",
    },
  },
};

const kistenFoto = { src: "/platzhalter/kistenfoto.svg", alt: "Platzhalter für ein Kistenfoto" };

const produktePlatzhalter = [
  { name: "Produkt A", menge: "Menge" },
  { name: "Produkt B", menge: "Menge" },
  { name: "Produkt C", menge: "Menge" },
  { name: "Produkt D", menge: "Menge" },
  { name: "Produkt E", menge: "Menge" },
];

/** Größen laut TNV, ohne Zusatz wie "— Studierende" (gleiche Kiste, anderer Tarif). */
const groessenNachTnv = (anteil: Ernteanteil) => [
  ...new Set(anteil.varianten.map((v) => v.groesse.split(" — ")[0])),
];

/**
 * Bei mehreren Größen eine Karte je Größe (je ein Foto), sonst drei allgemeine Karten ohne
 * Größen-Badge.
 */
function kistePlatzhalter(anteil: Ernteanteil): NonNullable<Ernteanteil["kiste"]> {
  const groessen = groessenNachTnv(anteil);
  const beispiele =
    groessen.length > 1
      ? groessen.map((groesse) => ({
          titel: "Beispiel-Lieferung (Platzhalter)",
          groesse,
          foto: kistenFoto,
          produkte: produktePlatzhalter,
          kochidee: "Platzhalter-Idee für ein Gericht",
        }))
      : [1, 2, 3].map((n) => ({
          titel: `Beispiel-Lieferung ${n} (Platzhalter)`,
          foto: kistenFoto,
          produkte: produktePlatzhalter,
          kochidee: n < 3 ? "Platzhalter-Idee für ein Gericht" : undefined,
        }));
  return {
    beispiele,
    mengen: "Platzhalter: Hier steht später, wie viel das im Alltag ist, z. B. wie viele Mahlzeiten oder Personen.",
  };
}

const kuechePlatzhalter: NonNullable<Ernteanteil["kueche"]> = [
  { titel: "Lagerung", text: "Platzhalter: So bleibt es frisch." },
  { titel: "Verwertung", text: "Platzhalter: Einfrieren, einkochen, haltbar machen." },
  { titel: "Rezeptidee", text: "Platzhalter: Rezept ansehen", link: "https://example.org" },
];

/** Hof mit Platzhaltern für fehlende Felder (echte Werte haben Vorrang). */
export function hofMitPlatzhaltern(key: HofKey, hof: Hof): Hof {
  if (!PLATZHALTER_AKTIV) return hof;
  const p = hofPlatzhalter[key];
  return { ...hof, logo: hof.logo ?? p.logo, zitat: hof.zitat ?? p.zitat };
}

/** Ernteanteil mit Platzhaltern für fehlende Kisten- und Küchenangaben. */
export function anteilMitPlatzhaltern(anteil: Ernteanteil): Ernteanteil {
  if (!PLATZHALTER_AKTIV) return anteil;
  return {
    ...anteil,
    kiste: anteil.kiste ?? kistePlatzhalter(anteil),
    kueche: anteil.kueche ?? kuechePlatzhalter,
  };
}
