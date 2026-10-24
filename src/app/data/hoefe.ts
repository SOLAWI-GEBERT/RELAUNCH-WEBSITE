import { Sprout, Cherry, type LucideIcon } from "lucide-react";

export interface Hof {
  name: string;
  badgeLabel: string;
  badgeColor: "green" | "purple" | "orange";
  description: string;
  certLine: string;
  CertIcon: LucideIcon;
  /**
   * Eigenes Bildmaterial des Hofes. Fehlt es (noch), bleibt das Feld unbesetzt —
   * niemals ein Foto eines anderen Betriebs als Platzhalter verwenden
   * (siehe openspec specs/hoefe: "Bildmaterial ist dem Hof zuzuordnen").
   * HofSteckbrief zeigt dann einen neutralen Platzhalter mit CertIcon.
   */
  image?: string;
  imageAlt?: string;
  /**
   * Hoflogo als Bilddatei mit Alpha-Kanal (SVG oder PNG, transparent): HofLogo färbt es per
   * Maske in der Textfarbe ein. Dateien mit Hintergrund nicht eintragen — sie ergäben einen
   * Block statt eines Stempels. Fehlt das Feld, entfällt der Stempel ohne Platzhalter.
   */
  logo?: { src: string; alt: string };
  /**
   * Hofstimme als Brief (openspec specs/harvest-shares, "Hofstimme als Brief"). Nur eintragen,
   * was vom Hof stammt oder von ihm bestätigt ist; Quelle als Kommentar am Eintrag. Anrede
   * und Signatur im Du der Solawi. Fehlt das Feld, entfällt der Abschnitt.
   */
  zitat?: { anrede: string; text: string; signatur: string };
}

export const hoefe = {
  tristan: {
    name: "Biohof Tristan",
    badgeLabel: "Bioland",
    badgeColor: "green",
    description:
      "Die Hofstelle in Emskirchen/Gunzendorf wurde 2017 übernommen — seitdem wachsen auf 35 Hektar eine bunte Anbaupalette, Hühner picken und Schafe grasen. Vermarktet wird über SoLawi, Märkte und einen eigenen Hofladen, unterstützt von Angestellten, Azubis, Praktikant:innen und Freiwilligen. Zur Jahresversorgung gehören auch Kartoffeln und Gemüse aus dem eigenen Lager.",
    certLine: "Bioland-zertifiziert, Emskirchen/Gunzendorf",
    CertIcon: Sprout,
    // Quelle: tristans-biohof.de, Startseite ("Mein Ziel ist es eine umweltverträgliche ökologische
    // Landwirtschaft zu betreiben"); Komma ergänzt. Signatur laut Auftrag; Wortlaut vom Hof noch bestätigen.
    zitat: {
      anrede: "Liebe Ernteteiler:innen,",
      text: "Mein Ziel ist es, eine umweltverträgliche ökologische Landwirtschaft zu betreiben.",
      signatur: "Dein Tristan",
    },
    image: "/fotos/vollandhof-feld.jpg",
    imageAlt: "Biohof Tristan — Feldarbeit",
  },
  schweigerts: {
    name: "Schweigerts Hof",
    badgeLabel: "Pilzzucht",
    badgeColor: "orange",
    description:
      "Annabelle und Thomas Schweigert haben den Familienbetrieb in Rockenbach übernommen und in einem Gebäudeteil eine moderne Pilzzuchtanlage eingebaut. Dort wachsen Bio-Edelpilze mit geringem Wasser- und Strombedarf — aktuell Limonen- und Kräuterseitlinge, Austernpilze und Shiitake, in der Regel 1–3 Sorten pro Woche.",
    certLine: "Bio-Edelpilze seit Oktober 2026, Rockenbach",
    CertIcon: Sprout,
    // Noch kein eigenes Bildmaterial vorhanden — siehe docs/anforderung-tnv-v26-4.md, Offene Punkte.
  },
  walz: {
    name: "Demeterhof Walz",
    badgeLabel: "demeter",
    badgeColor: "purple",
    description:
      "Ein Familienbetrieb in Schäflohe bei Amberg, der den Kreislaufgedanken lebt. Bei Familie Walz gehören Tier, Pflanze und Boden untrennbar zusammen. „Wir möchten die Tiere in ihrer Ganzheit betrachten\" — das bedeutet: Wer Eier bezieht, übernimmt auch Verantwortung für die Henne und ihren Bruder.",
    certLine: "Demeter-zertifiziert, Schäflohe bei Amberg",
    CertIcon: Sprout,
    // Quelle: Zitat der Familie Walz, bereits in der Hofbeschreibung oben. Signatur laut Auftrag;
    // Wortlaut vom Hof noch bestätigen.
    zitat: {
      anrede: "Liebe Ernteteiler:innen,",
      text: "Wir möchten die Tiere in ihrer Ganzheit betrachten.",
      signatur: "Familie Walz",
    },
    image: "/fotos/walz-kaelber.jpg",
    imageAlt: "Kälber am Demeterhof Walz",
  },
  kirschgarten: {
    name: "Kirschgarten",
    badgeLabel: "EU-Bio",
    badgeColor: "green",
    description:
      "Seit Ende 2023 pachtet der Solawi-Verein ein Grundstück in der Nähe von Igensdorf. Bio-zertifiziert seit 2019, wird hier in Mischkultur extensiv bewirtschaftet — mit naturnahen Hecken, Totholzriegeln und insektenschonendem Mähen. Den Großteil der Arbeit übernimmt ein:e vom Verein als Teilzeitkraft tätige:r Gärtner:in. Keine Bewässerung — die Beeren sind geschmacklich besonders vollmundig.",
    certLine: "Vereinseigenes Projekt, bei Igensdorf",
    CertIcon: Cherry,
    image: "/fotos/lillinghof-bluete.jpg",
    imageAlt: "Blühende Obstbäume im Kirschgarten",
  },
} as const satisfies Record<string, Hof>;

export type HofKey = keyof typeof hoefe;
