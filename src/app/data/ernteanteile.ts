import { Carrot, Apple, Cherry, Wheat, Egg, Beef, Soup, type LucideIcon } from "lucide-react";
import type { HofKey } from "./hoefe";

/**
 * Quelle: Teilnahmevereinbarung V26.4 (Stand 15.10.2026),
 * public/TNV_StadtLandBeides_V26_4.pdf — Seiten 1, 2, 5–11.
 * Die TNV ist die autoritative Quelle. Bei Abweichungen gilt sie, nicht der Code.
 *
 * Preise sind Monatsbeträge pro Anteil:
 *   paketpreis = Anteil der Bäuerin/des Bauern
 *   soli       = solidarischer Beitrag (Logistik, Depotmiete, Transport)
 *   gesamt     = paketpreis + soli, siehe gesamtbetrag()
 *
 * `bieterrunde: true` heißt: Der Paketpreis ist ein Richtpreis, der tatsächliche
 * Beitrag wird in der Bieterrunde bestimmt. Nie als Festpreis darstellen.
 */

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

export interface Variante {
  /** Kurzbezeichnung, z.B. "Normal" oder "600 g". */
  groesse: string;
  /** Für wen die Größe gedacht ist. Nicht jedes Paket hat eine Angabe. */
  fuer?: string;
  zyklus: string;
  lieferphase: string;
  paketpreis: number;
  soli: number;
  /** Paketpreis ist Richtpreis aus der Bieterrunde, kein Festpreis. */
  bieterrunde?: boolean;
  /** Fußnote zur Variante, z.B. Laufzeit des Studierenden-Pakets. */
  hinweis?: string;
}

export interface Ernteanteil {
  /** Letztes Segment der Route unter /ernteanteile/. */
  slug: string;
  titel: string;
  hof: HofKey;
  kategorie: Kategorie;
  /** Ein Satz für Kacheln und Navigation. */
  kurz: string;
  verfuegbarkeit: Verfuegbarkeit;
  varianten: Variante[];
}

export const gesamtbetrag = (v: Variante) => v.paketpreis + v.soli;

export const formatEuro = (betrag: number) =>
  betrag.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";

/** Hat mindestens eine Variante einen Bieterrunden-Richtpreis? */
export const hatBieterrunde = (anteil: Ernteanteil) =>
  anteil.varianten.some((v) => v.bieterrunde);

export const ernteanteile: Ernteanteil[] = [
  {
    slug: "tristan-sommer",
    titel: "Sommergemüse",
    hof: "tristan",
    kategorie: "Gemüse",
    kurz: "Frisches Feldgemüse, Salate und Kräuter — wöchentlich von April bis September.",
    // TNV V26.4 S. 11: "Neu ab April 2027: Tristan liefert auch das Sommergemüse"
    verfuegbarkeit: { status: "geplant", ab: "April 2027" },
    varianten: [
      { groesse: "Normal", fuer: "2–4 Personen", zyklus: "wöchentlich", lieferphase: "April – September", paketpreis: 122.2, soli: 14.0, bieterrunde: true },
      { groesse: "Normal", fuer: "1–2 Personen", zyklus: "14-tägig", lieferphase: "April – September", paketpreis: 61.1, soli: 11.0, bieterrunde: true },
      { groesse: "Klein", fuer: "1–2 Personen", zyklus: "wöchentlich", lieferphase: "April – September", paketpreis: 85.54, soli: 14.0, bieterrunde: true },
      { groesse: "Klein", fuer: "1–2 Personen", zyklus: "14-tägig", lieferphase: "April – September", paketpreis: 42.35, soli: 11.0, bieterrunde: true },
      { groesse: "Normal — Studierende", zyklus: "wöchentlich", lieferphase: "April, Mai, Juni", paketpreis: 122.2, soli: 14.0, hinweis: "Läuft über 3 Monate. Kein Probemonat möglich." },
      { groesse: "Klein — Studierende", zyklus: "wöchentlich", lieferphase: "April, Mai, Juni", paketpreis: 85.54, soli: 14.0, hinweis: "Läuft über 3 Monate. Kein Probemonat möglich." },
    ],
  },
  {
    slug: "tristan-winter",
    titel: "Wintergemüse",
    hof: "tristan",
    kategorie: "Gemüse",
    kurz: "Lauch, Rosenkohl, Wurzelgemüse und Lagerware für die kalte Jahreszeit.",
    verfuegbarkeit: { status: "verfuegbar" },
    varianten: [
      { groesse: "Normal", fuer: "2–4 Personen", zyklus: "wöchentlich", lieferphase: "Oktober – März", paketpreis: 122.2, soli: 14.0, bieterrunde: true },
      { groesse: "Normal", fuer: "1–2 Personen", zyklus: "14-tägig", lieferphase: "Oktober – März", paketpreis: 61.1, soli: 11.0, bieterrunde: true },
      { groesse: "Klein", fuer: "1–2 Personen", zyklus: "wöchentlich", lieferphase: "Oktober – März", paketpreis: 85.54, soli: 14.0, bieterrunde: true },
      { groesse: "Klein", fuer: "1–2 Personen", zyklus: "14-tägig", lieferphase: "Oktober – März", paketpreis: 42.35, soli: 11.0, bieterrunde: true },
      { groesse: "Normal — Studierende", zyklus: "wöchentlich", lieferphase: "November, Dezember, Januar", paketpreis: 94.0, soli: 14.0, hinweis: "Läuft über 3 Monate, vom 23.12. bis 07.01. keine Lieferung. Kein Probemonat möglich." },
      { groesse: "Klein — Studierende", zyklus: "wöchentlich", lieferphase: "November, Dezember, Januar", paketpreis: 65.75, soli: 14.0, hinweis: "Läuft über 3 Monate, vom 23.12. bis 07.01. keine Lieferung. Kein Probemonat möglich." },
    ],
  },
  {
    slug: "schweigerts-edelpilze",
    titel: "Bio..Edelpilze",
    hof: "schweigerts",
    kategorie: "Pilze",
    kurz: "Limonen- und Kräuterseitlinge, Austernpilze und Shiitake — ganzjährig frisch aus der Pilzzucht.",
    verfuegbarkeit: { status: "verfuegbar" },
    varianten: [
      { groesse: "600 g", zyklus: "wöchentlich", lieferphase: "ganzjährig", paketpreis: 55.56, soli: 3.0 },
      { groesse: "600 g", zyklus: "14-tägig", lieferphase: "ganzjährig", paketpreis: 27.78, soli: 2.0 },
      { groesse: "300 g", zyklus: "wöchentlich", lieferphase: "ganzjährig", paketpreis: 27.78, soli: 3.0 },
      { groesse: "300 g", zyklus: "14-tägig", lieferphase: "ganzjährig", paketpreis: 13.89, soli: 2.0 },
    ],
  },
  {
    slug: "kirschgarten-obst",
    titel: "Stein- & Kernobst",
    hof: "kirschgarten",
    kategorie: "Obst",
    kurz: "Steinobst ab Juli, Kernobst überwiegend im Herbst — die Bäume im Kirschgarten wachsen noch.",
    // TNV V26.4 S. 9 und S. 11: ab Sommer 2027, anfangs keine neuen Ernteanteile möglich.
    verfuegbarkeit: { status: "warteliste" },
    varianten: [
      { groesse: "Ein Anteil", zyklus: "unregelmäßig", lieferphase: "Juli – Dezember", paketpreis: 37.0, soli: 2.5, hinweis: "Je nach Erntezeitpunkt. Lieferungen werden per Mail angekündigt." },
    ],
  },
  {
    slug: "kirschgarten-beeren",
    titel: "Bio..Beeren",
    hof: "kirschgarten",
    kategorie: "Beeren",
    kurz: "Johannisbeeren, Himbeeren, Stachelbeeren u.v.m. — wöchentlich von Juli bis September.",
    verfuegbarkeit: { status: "verfuegbar" },
    varianten: [
      { groesse: "Ein Anteil", fuer: "200–400 g pro Lieferung", zyklus: "wöchentlich", lieferphase: "Juli – September", paketpreis: 35.0, soli: 3.0, hinweis: "Lieferzeitraum ca. Mitte Juni bis Mitte Oktober, Zahlzeitraum Juli bis September." },
    ],
  },
  {
    slug: "walz-getreide",
    titel: "More..Ur-Getreide",
    hof: "walz",
    kategorie: "Getreide",
    kurz: "Alte Getreidesorten als Mehl, Körner oder Nudeln — 1 kg im Monat, selbst zusammengestellt.",
    verfuegbarkeit: { status: "verfuegbar" },
    varianten: [
      { groesse: "1000 g / Monat", zyklus: "1x pro Monat", lieferphase: "ganzjährig", paketpreis: 6.0, soli: 0.9 },
    ],
  },
  {
    slug: "walz-huhn",
    titel: "More..Huhn",
    hof: "walz",
    kategorie: "Eier",
    kurz: "Alle Eier deiner Henne, dazu anteilig Bruderhahn und Suppenhenne — 2x im Monat.",
    verfuegbarkeit: { status: "verfuegbar" },
    varianten: [
      { groesse: "Ein Anteil", zyklus: "2x pro Monat", lieferphase: "ganzjährig", paketpreis: 15.0, soli: 2.9 },
    ],
  },
  {
    slug: "walz-bratgockerl",
    titel: "More..Bratgockerl",
    hof: "walz",
    kategorie: "Fleisch",
    kurz: "Freilandhuhn, artgerecht aufgezogen statt nach 30 Tagen geschlachtet.",
    verfuegbarkeit: { status: "verfuegbar" },
    varianten: [
      { groesse: "Ein Anteil", zyklus: "1x pro 4 Monate", lieferphase: "ganzjährig", paketpreis: 8.0, soli: 1.0, hinweis: "Bei einem Probemonat sind immer 4 Anteile einzutragen." },
    ],
  },
  {
    slug: "walz-hack",
    titel: "More..Hack",
    hof: "walz",
    kategorie: "Fleisch",
    kurz: "500 g Aberdeen-Angus-Hack im Monat, aus Weide- und Muttertierhaltung.",
    verfuegbarkeit: { status: "verfuegbar" },
    varianten: [
      { groesse: "500 g / Monat", zyklus: "1x pro Monat", lieferphase: "ganzjährig", paketpreis: 10.0, soli: 1.4 },
    ],
  },
  {
    slug: "walz-wurst",
    titel: "More..Wurst",
    hof: "walz",
    kategorie: "Fleisch",
    kurz: "500 g Wurstwaren im Monat: Salami, Bratwurst, Wienerle u.v.m. — monatlich wechselnd.",
    verfuegbarkeit: { status: "verfuegbar" },
    varianten: [
      { groesse: "500 g / Monat", zyklus: "1x pro Monat", lieferphase: "ganzjährig", paketpreis: 15.0, soli: 2.0 },
    ],
  },
];

export const ernteanteilNach = (slug: string) => ernteanteile.find((a) => a.slug === slug);

/** Ernteanteile gruppiert nach Kategorie, in `kategorieReihenfolge`. */
export const nachKategorie = () =>
  kategorieReihenfolge
    .map((kategorie) => ({
      kategorie,
      Icon: kategorieIcons[kategorie],
      items: ernteanteile.filter((a) => a.kategorie === kategorie),
    }))
    .filter((gruppe) => gruppe.items.length > 0);
