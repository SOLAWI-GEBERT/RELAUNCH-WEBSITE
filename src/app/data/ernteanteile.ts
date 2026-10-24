import { Carrot, Apple, Cherry, Wheat, Egg, Beef, Soup, type LucideIcon } from "lucide-react";
import type { HofKey } from "./hoefe";

/**
 * Quelle: Teilnahmevereinbarung V26.4 (Stand 15.10.2026),
 * public/TNV_StadtLandBeides_V26_4.pdf — Seiten 1, 2, 5–11.
 * Die TNV ist die autoritative Quelle. Bei Abweichungen gilt sie, nicht der Code.
 *
 * Preise stehen hier nur als Richtwert-Spanne (Euro pro Monat, inkl. solidarischem Beitrag),
 * nicht als exakter Betrag. Regel für `richtwert`, ausgehend vom TNV-Gesamtbetrag (Paketpreis
 * + Soli): Stufe 5 € ab 30 €, darunter 1 €; `von` = abgerundet auf die Stufe minus eine Stufe,
 * `bis` = aufgerundet auf die Stufe plus eine Stufe. Kleine Preisänderungen in der TNV machen
 * die Spanne dadurch nicht falsch; bei größeren Änderungen die Spannen neu ableiten.
 *
 * `bieterrunde: true` heißt: Der Beitrag wird in der Bieterrunde bestimmt, die Spanne ist ein
 * Richtwert für den Paketpreis. Nie als Festpreis darstellen.
 */

/** Aktuelle Teilnahmevereinbarung, auf die jede Preisangabe verweist. */
export const TNV = {
  version: "26.4",
  stand: "15.10.2026",
  pdf: "/TNV_StadtLandBeides_V26_4.pdf",
} as const;

/** Risiko- und Netzwerkbeitrag, verpflichtend pro Ernteteiler:in (TNV S. 2, 13). */
export const VEREINSBEITRAG = 1.5;

export type Kategorie =
  | "Gemüse"
  | "Obst"
  | "Beeren"
  | "Pilze"
  | "Getreide"
  | "Eier"
  | "Fleisch";

export const kategorieIcons: Record<Kategorie, LucideIcon> = {
  Gemüse: Carrot,
  Obst: Apple,
  Beeren: Cherry,
  Pilze: Soup,
  Getreide: Wheat,
  Eier: Egg,
  Fleisch: Beef,
};

/**
 * Hintergrundfarbe des Kopfbands und der Hinweisflächen je Kategorie (Tailwind-Klassen);
 * `rahmen` ist dieselbe Farbe als CSS-Wert für Versatzrahmen von Hoffoto und Kistenetikett.
 */
export const kategorieFarben: Record<Kategorie, { band: string; flaeche: string; rahmen: string }> = {
  Gemüse: { band: "bg-solawi-green", flaeche: "bg-solawi-green/20", rahmen: "var(--solawi-green)" },
  Pilze: { band: "bg-solawi-orange", flaeche: "bg-solawi-orange/20", rahmen: "var(--solawi-orange)" },
  Obst: { band: "bg-solawi-mauve", flaeche: "bg-solawi-mauve/20", rahmen: "var(--solawi-mauve)" },
  Beeren: { band: "bg-solawi-mauve", flaeche: "bg-solawi-mauve/20", rahmen: "var(--solawi-mauve)" },
  Getreide: { band: "bg-solawi-orange", flaeche: "bg-solawi-orange/20", rahmen: "var(--solawi-orange)" },
  Eier: { band: "bg-solawi-salmon", flaeche: "bg-solawi-salmon/20", rahmen: "var(--solawi-salmon)" },
  Fleisch: { band: "bg-solawi-salmon", flaeche: "bg-solawi-salmon/20", rahmen: "var(--solawi-salmon)" },
};

/** Reihenfolge der Kategorien auf den Übersichtsseiten und in der Navigation. */
export const kategorieReihenfolge: Kategorie[] = [
  "Gemüse",
  "Pilze",
  "Obst",
  "Beeren",
  "Getreide",
  "Eier",
  "Fleisch",
];

export type Verfuegbarkeit =
  /** Heute buchbar. */
  | { status: "verfuegbar" }
  /** Startet erst in der Zukunft — `ab` ist der Text fürs Badge, z.B. "April 2027". */
  | { status: "geplant"; ab: string }
  /** Existiert, aber aktuell sind keine neuen Anteile möglich. */
  | { status: "warteliste" };

/** Richtwert-Spanne in Euro pro Monat, inkl. solidarischem Beitrag. */
export interface Richtwert {
  von: number;
  bis: number;
}

export interface Variante {
  /** Kurzbezeichnung, z.B. "Normal" oder "600 g". */
  groesse: string;
  /** Für wen die Größe gedacht ist. Nicht jedes Paket hat eine Angabe. */
  fuer?: string;
  zyklus: string;
  lieferphase: string;
  richtwert: Richtwert;
  /** Beitrag wird in der Bieterrunde bestimmt, die Spanne ist nur ein Richtwert. */
  bieterrunde?: boolean;
  /** Fußnote zur Variante, z.B. Laufzeit des Studierenden-Pakets. */
  hinweis?: string;
}

/** Karte "Was steckt drin": kurzer Titel plus Text. */
export interface Karte {
  titel: string;
  text: string;
}

/** Eintrag im Abschnitt "Lieferung & Info"; `titel` ist optional. */
export interface Info {
  titel?: string;
  text: string;
}

/** Beispiel-Lieferung im Abschnitt "In der Kiste". */
export interface KistenBeispiel {
  titel: string;
  /**
   * Größe laut TNV (z. B. "Normal", "Klein", "600 g"), wenn die Karte zu einer bestimmten Größe
   * gehört. Wird als Badge gezeigt; ein Foto je Größe ist möglich.
   */
  groesse?: string;
  /** Foto der Beispiel-Lieferung (4:3), nur vom Hof; ohne Foto entfällt die Bildfläche. */
  foto?: { src: string; alt: string };
  /** Produktliste mit Menge je Zeile. Hat Vorrang vor `inhalt`. */
  produkte?: { name: string; menge?: string }[];
  /** Einfache Variante ohne Mengen: Was in der Kiste liegt, kommagetrennt. */
  inhalt?: string;
  /** Zeile "Was du damit kochst". */
  kochidee?: string;
}

/** Karte im Abschnitt "Aus der Küche": Lagerung, Verwertung oder Rezeptidee. */
export interface KuechenTipp {
  titel: string;
  text: string;
  /** Rezeptidee mit Link: die Kurzzeile wird zum Link. */
  link?: string;
}

export interface Ernteanteil {
  /** Letztes Segment der Route unter /ernteanteile/. */
  slug: string;
  titel: string;
  hof: HofKey;
  kategorie: Kategorie;
  /** Ein Satz für Kacheln und Navigation. */
  kurz: string;
  /** Beschreibung auf der Detailseite; fehlt sie, entfällt der Textabsatz. */
  beschreibung?: string;
  foto?: { src: string; alt: string };
  /** Abschnitt "Was steckt drin", bis zu drei Karten. */
  karten?: Karte[];
  /**
   * Abschnitt "In der Kiste": Beispiel-Lieferungen und Mengen im Alltag. Nur Angaben, die der
   * Hof geliefert oder bestätigt hat (openspec specs/harvest-shares, "Hofinhalte nur mit
   * Quelle vom Hof") — keine erfundenen Beispiele. Fehlt das Feld, entfällt der Abschnitt.
   */
  kiste?: { beispiele?: KistenBeispiel[]; mengen?: string };
  /** Abschnitt "Aus der Küche", höchstens drei Karten; gleiche Quellenregel wie `kiste`. */
  kueche?: KuechenTipp[];
  /** Abschnitt "Lieferung & Info". */
  info?: Info[];
  verfuegbarkeit: Verfuegbarkeit;
  varianten: Variante[];
}

export const formatEuro = (betrag: number) =>
  betrag.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";

/** Spanne für die Anzeige, z.B. "130–145 €". */
export const formatSpanne = ({ von, bis }: Richtwert) => `${von}–${bis} €`;

/** Hat mindestens eine Variante einen Bieterrunden-Richtwert? */
export const hatBieterrunde = (anteil: Ernteanteil) =>
  anteil.varianten.some((v) => v.bieterrunde);

export const ernteanteile: Ernteanteil[] = [
  {
    slug: "tristan-winter",
    titel: "Wintergemüse",
    hof: "tristan",
    kategorie: "Gemüse",
    kurz: "Lauch, Rosenkohl, Wurzelgemüse und Lagerware für die kalte Jahreszeit.",
    karten: [
      { titel: "Frisch aus den Folienhäusern", text: "Spinat, Salate, Kräuter" },
      { titel: "Vom Feld", text: "Lauch, Rosenkohl, Palmkohl" },
      {
        titel: "Aus dem Lager",
        text: "Karotten, Pastinaken, diverse Bete, Kraut, Zwiebeln, Kürbis, Kartoffeln",
      },
    ],
    verfuegbarkeit: { status: "verfuegbar" },
    varianten: [
      { groesse: "Normal", fuer: "2–4 Personen", zyklus: "wöchentlich", lieferphase: "Oktober – März", richtwert: { von: 130, bis: 145 }, bieterrunde: true },
      { groesse: "Normal", fuer: "1–2 Personen", zyklus: "14-tägig", lieferphase: "Oktober – März", richtwert: { von: 65, bis: 80 }, bieterrunde: true },
      { groesse: "Klein", fuer: "1–2 Personen", zyklus: "wöchentlich", lieferphase: "Oktober – März", richtwert: { von: 90, bis: 105 }, bieterrunde: true },
      { groesse: "Klein", fuer: "1–2 Personen", zyklus: "14-tägig", lieferphase: "Oktober – März", richtwert: { von: 45, bis: 60 }, bieterrunde: true },
      { groesse: "Normal — Studierende", zyklus: "wöchentlich", lieferphase: "November, Dezember, Januar", richtwert: { von: 100, bis: 115 }, hinweis: "Läuft über 3 Monate, vom 23.12. bis 07.01. keine Lieferung. Kein Probemonat möglich." },
      { groesse: "Klein — Studierende", zyklus: "wöchentlich", lieferphase: "November, Dezember, Januar", richtwert: { von: 70, bis: 85 }, hinweis: "Läuft über 3 Monate, vom 23.12. bis 07.01. keine Lieferung. Kein Probemonat möglich." },
    ],
  },
  {
    slug: "tristan-sommer",
    titel: "Sommergemüse",
    hof: "tristan",
    kategorie: "Gemüse",
    kurz: "Frisches Feldgemüse, Salate und Kräuter — wöchentlich von April bis September.",
    // Sortiment noch nicht hofseitig festgelegt — siehe design.md Open Questions der Gemüse-Zusammenführung
    karten: [
      { titel: "Frisch aus den Folienhäusern", text: "Spinat, Salate, Kräuter" },
      { titel: "Vom Feld", text: "Gurken, Tomaten, Kürbis, Bohnen, Paprika" },
      { titel: "Aus dem Lager", text: "Kartoffeln, Zwiebeln, Knoblauch" },
    ],
    // TNV V26.4 S. 11: "Neu ab April 2027: Tristan liefert auch das Sommergemüse"
    verfuegbarkeit: { status: "geplant", ab: "April 2027" },
    varianten: [
      { groesse: "Normal", fuer: "2–4 Personen", zyklus: "wöchentlich", lieferphase: "April – September", richtwert: { von: 130, bis: 145 }, bieterrunde: true },
      { groesse: "Normal", fuer: "1–2 Personen", zyklus: "14-tägig", lieferphase: "April – September", richtwert: { von: 65, bis: 80 }, bieterrunde: true },
      { groesse: "Klein", fuer: "1–2 Personen", zyklus: "wöchentlich", lieferphase: "April – September", richtwert: { von: 90, bis: 105 }, bieterrunde: true },
      { groesse: "Klein", fuer: "1–2 Personen", zyklus: "14-tägig", lieferphase: "April – September", richtwert: { von: 45, bis: 60 }, bieterrunde: true },
      { groesse: "Normal — Studierende", zyklus: "wöchentlich", lieferphase: "April, Mai, Juni", richtwert: { von: 130, bis: 145 }, hinweis: "Läuft über 3 Monate. Kein Probemonat möglich." },
      { groesse: "Klein — Studierende", zyklus: "wöchentlich", lieferphase: "April, Mai, Juni", richtwert: { von: 90, bis: 105 }, hinweis: "Läuft über 3 Monate. Kein Probemonat möglich." },
    ],
  },
  {
    slug: "schweigerts-edelpilze",
    titel: "Bio..Edelpilze",
    hof: "schweigerts",
    kategorie: "Pilze",
    kurz: "Limonen- und Kräuterseitlinge, Austernpilze und Shiitake — ganzjährig frisch aus der Pilzzucht.",
    beschreibung:
      "Limonen- und Kräuterseitlinge, Austernpilze und Shiitake — ganzjährig frisch aus der Pilzzucht.",
    karten: [
      {
        titel: "Sortiment",
        text: "Limonen- und Kräuterseitlinge, Austernpilze und Shiitake — in der Regel 1–3 Sorten pro Woche, je nach Erntereife.",
      },
    ],
    info: [
      {
        titel: "Kommunikation",
        text: "Welche Pilze es in welcher Woche und Menge gibt, erfährst du mit der wöchentlichen Kisteninfo über Tristans Biohof.",
      },
    ],
    verfuegbarkeit: { status: "verfuegbar" },
    varianten: [
      { groesse: "600 g", zyklus: "wöchentlich", lieferphase: "ganzjährig", richtwert: { von: 50, bis: 65 } },
      { groesse: "600 g", zyklus: "14-tägig", lieferphase: "ganzjährig", richtwert: { von: 28, bis: 31 } },
      { groesse: "300 g", zyklus: "wöchentlich", lieferphase: "ganzjährig", richtwert: { von: 25, bis: 40 } },
      { groesse: "300 g", zyklus: "14-tägig", lieferphase: "ganzjährig", richtwert: { von: 14, bis: 17 } },
    ],
  },
  {
    slug: "kirschgarten-obst",
    titel: "Stein- & Kernobst",
    hof: "kirschgarten",
    kategorie: "Obst",
    kurz: "Steinobst ab Juli, Kernobst überwiegend im Herbst — die Bäume im Kirschgarten wachsen noch.",
    beschreibung:
      "Zusätzlich zu den Beeren wachsen im Kirschgarten verschiedene Obstbäume, die nun erste Erträge bringen. Steinobst gibt es ab Juli, Kernobst überwiegend im Herbst. In der ersten Zeit sind keine neuen Ernteanteile möglich — sobald der Ertrag dafür ausreicht, wird darüber informiert.",
    // TNV V26.4 S. 9 und S. 11: ab Sommer 2027, anfangs keine neuen Ernteanteile möglich.
    verfuegbarkeit: { status: "warteliste" },
    varianten: [
      { groesse: "Ein Anteil", zyklus: "unregelmäßig", lieferphase: "Juli – Dezember", richtwert: { von: 30, bis: 45 }, hinweis: "Je nach Erntezeitpunkt. Lieferungen werden per Mail angekündigt." },
    ],
  },
  {
    slug: "kirschgarten-beeren",
    titel: "Bio..Beeren",
    hof: "kirschgarten",
    kategorie: "Beeren",
    kurz: "Johannisbeeren, Himbeeren, Stachelbeeren u.v.m. — wöchentlich von Juli bis September.",
    beschreibung:
      "Johannisbeeren, Himbeeren, Stachelbeeren u.v.m. — wöchentlich von Juli bis September.",
    karten: [
      {
        titel: "Sortiment",
        text: "Johannisbeeren (rot, weiß, schwarz), Himbeeren (rot, schwarz, gelb), Stachelbeeren, Brombeeren, Himbeer-Brombeeren, Jostabeeren, Schwarze Honigbeeren, Japanische Weinbeeren, Aronia",
      },
    ],
    info: [
      { text: "Max. 30 Anteile verfügbar" },
      { text: "Anmeldeschluss: 15. des Vormonats" },
      { text: "Am besten schon zum 1. Juni anmelden!" },
    ],
    verfuegbarkeit: { status: "verfuegbar" },
    varianten: [
      { groesse: "Ein Anteil", fuer: "200–400 g pro Lieferung", zyklus: "wöchentlich", lieferphase: "Juli – September", richtwert: { von: 30, bis: 45 }, hinweis: "Lieferzeitraum ca. Mitte Juni bis Mitte Oktober, Zahlzeitraum Juli bis September." },
    ],
  },
  {
    slug: "walz-getreide",
    titel: "More..Ur-Getreide",
    hof: "walz",
    kategorie: "Getreide",
    kurz: "Alte Getreidesorten als Mehl, Körner oder Nudeln — 1 kg im Monat, selbst zusammengestellt.",
    beschreibung:
      "Alte Getreidesorten als Mehl, Körner oder Nudeln — 1 kg im Monat, selbst zusammengestellt.",
    foto: { src: "/fotos/walz-getreide.jpg", alt: "Ur-Getreide vom Demeterhof Walz" },
    karten: [
      {
        titel: "Sorten",
        text: "Schwarzes Einkorn, Sommeremmer Spelta, Weißer Urdinkel, Blonder Nackthafer, Champagnerroggen, Bayernkönig Weizen, Bayerisches Liebesgras",
      },
      {
        titel: "Produkte",
        text: "Halbweißmehl, Vollkornmehl, Körner, Grieß, Getreidereis, Nudeln",
      },
    ],
    verfuegbarkeit: { status: "verfuegbar" },
    varianten: [
      { groesse: "1000 g / Monat", zyklus: "1x pro Monat", lieferphase: "ganzjährig", richtwert: { von: 5, bis: 8 } },
    ],
  },
  {
    slug: "walz-huhn",
    titel: "More..Huhn",
    hof: "walz",
    kategorie: "Eier",
    kurz: "Alle Eier deiner Henne, dazu anteilig Bruderhahn und Suppenhenne — 2x im Monat.",
    beschreibung:
      "Alle Eier deiner Henne plus anteilmäßig Bruderhahn, Suppenhenne und Bolognese. Wer Eier bezieht, übernimmt ganzheitliche Verantwortung für Henne, Bruder und Ei.",
    foto: { src: "/fotos/walz-hennen.jpg", alt: "Freilandhühner am Demeterhof Walz" },
    verfuegbarkeit: { status: "verfuegbar" },
    varianten: [
      { groesse: "Ein Anteil", zyklus: "2x pro Monat", lieferphase: "ganzjährig", richtwert: { von: 16, bis: 19 } },
    ],
  },
  {
    slug: "walz-bratgockerl",
    titel: "More..Bratgockerl",
    hof: "walz",
    kategorie: "Fleisch",
    kurz: "Freilandhuhn, artgerecht aufgezogen statt nach 30 Tagen geschlachtet.",
    beschreibung:
      "Freilandhaltung — nicht nach 30 Tagen geschlachtet, sondern artgerecht aufgezogen.",
    foto: { src: "/fotos/walz-huehner.jpg", alt: "Freilandhühner im Sandbad am Demeterhof Walz" },
    verfuegbarkeit: { status: "verfuegbar" },
    varianten: [
      // TNV V26.4 (Preistabelle Demeterhof Walz): Gesamtbetrag 9,00 €/Monat je Anteil, geliefert wird 1 Gockerl alle 4 Monate (4 Anteile).
      { groesse: "Ein Anteil", zyklus: "1x pro 4 Monate", lieferphase: "ganzjährig", richtwert: { von: 8, bis: 10 }, hinweis: "Bei einem Probemonat sind immer 4 Anteile einzutragen." },
    ],
  },
  {
    slug: "walz-hack",
    titel: "More..Hack",
    hof: "walz",
    kategorie: "Fleisch",
    kurz: "500 g Aberdeen-Angus-Hack im Monat, aus Weide- und Muttertierhaltung.",
    beschreibung:
      "500 g im Monat, Aberdeen Angus. Weidehaltung, Muttertierhaltung, nur Raufutter.",
    foto: { src: "/fotos/walz-weide.jpg", alt: "Aberdeen-Angus-Rind auf der Weide des Demeterhofs Walz" },
    verfuegbarkeit: { status: "verfuegbar" },
    varianten: [
      { groesse: "500 g / Monat", zyklus: "1x pro Monat", lieferphase: "ganzjährig", richtwert: { von: 10, bis: 13 } },
    ],
  },
  {
    slug: "walz-wurst",
    titel: "More..Wurst",
    hof: "walz",
    kategorie: "Fleisch",
    kurz: "500 g Wurstwaren im Monat: Salami, Bratwurst, Wienerle u.v.m. — monatlich wechselnd.",
    beschreibung:
      "500 g im Monat: Salami, Rinderschinken, Wienerle, Bratwürste, Pfefferbeißer u.v.m.",
    foto: { src: "/fotos/walz-kuh.jpg", alt: "Neugierige Kuh leckt eine Hand am Demeterhof Walz" },
    verfuegbarkeit: { status: "verfuegbar" },
    varianten: [
      { groesse: "500 g / Monat", zyklus: "1x pro Monat", lieferphase: "ganzjährig", richtwert: { von: 16, bis: 18 } },
    ],
  },
];

export const ernteanteilNach = (slug: string) => ernteanteile.find((a) => a.slug === slug);

/**
 * Wintergemüse und Sommergemüse teilen sich eine Seite (Biohof Tristan). Die Aufteilung ist
 * nur eine Erleichterung für Ernteteiler:innen mit eigenem Garten, daher gibt es für beide
 * nur eine Kachel bzw. einen Navigationseintrag.
 */
export const GEMUESE_SLUG = "tristan-gemuese";
const gemueseSlugs = ["tristan-winter", "tristan-sommer"];

export const gemueseKachel: Ernteanteil = {
  slug: GEMUESE_SLUG,
  titel: "Gemüse",
  hof: "tristan",
  kategorie: "Gemüse",
  kurz: "Winter- und Sommergemüse vom Biohof Tristan — einzeln oder im Wechsel buchbar.",
  verfuegbarkeit: { status: "verfuegbar" },
  varianten: [],
};

/** Ernteanteile in der Reihenfolge der Kacheln; Winter- und Sommergemüse sind zu einem Eintrag zusammengefasst. */
export const kacheln = (kategorie: Kategorie): Ernteanteil[] => {
  const items = ernteanteile.filter((a) => a.kategorie === kategorie);
  const ersterGemuese = items.findIndex((a) => gemueseSlugs.includes(a.slug));
  return items.flatMap((a, i) =>
    !gemueseSlugs.includes(a.slug) ? [a] : i === ersterGemuese ? [gemueseKachel] : [],
  );
};

/** Kachel zu einem Slug der Detailseiten (inkl. `tristan-gemuese`). */
export const kachelNach = (slug: string): Ernteanteil | undefined =>
  slug === GEMUESE_SLUG ? gemueseKachel : ernteanteilNach(slug);

export const nachKategorie = () =>
  kategorieReihenfolge
    .map((kategorie) => ({
      kategorie,
      Icon: kategorieIcons[kategorie],
      items: kacheln(kategorie),
    }))
    .filter((gruppe) => gruppe.items.length > 0);
