import { Sprout, Cherry, type LucideIcon } from "lucide-react";

export interface Hof {
  name: string;
  badgeLabel: string;
  badgeColor: "green" | "purple" | "orange";
  description: string;
  certLine: string;
  CertIcon: LucideIcon;
  image: string;
  imageAlt: string;
}

export const hoefe = {
  hederer: {
    name: "Demeterhof Hederer",
    badgeLabel: "demeter",
    badgeColor: "purple",
    description:
      "Heribert Hederer bewirtschaftet seinen Hof in Uffenheim seit 2001 nach Demeter-Richtlinien. Vier Gewächshäuser und über 20 Jahre Erfahrung stecken in seinen natürlichen Anbaumethoden. Was bei Heribert wächst, wächst mit Überzeugung — und das schmeckst du.",
    certLine: "Seit 2001 demeter-zertifiziert, Uffenheim",
    CertIcon: Sprout,
    image: "/fotos/lillinghof-obstbau.jpg",
    imageAlt: "Demeterhof Hederer — Gewächshäuser und Obstbäume",
  },
  tristan: {
    name: "Biohof Tristan",
    badgeLabel: "Bioland",
    badgeColor: "green",
    description:
      "Die Hofstelle in Emskirchen/Gunzendorf wurde 2017 übernommen — seitdem wachsen auf 35 Hektar eine bunte Anbaupalette, Hühner picken und Schafe grasen. Aktuell versorgt der Hof 40 Ernteteiler direkt und 10 weitere über das UKAMA-Depot. SoLawi am Hof seit 2021.",
    certLine: "Bioland-zertifiziert, Emskirchen/Gunzendorf",
    CertIcon: Sprout,
    image: "/fotos/vollandhof-feld.jpg",
    imageAlt: "Biohof Tristan — Feldarbeit",
  },
  walz: {
    name: "Demeterhof Walz",
    badgeLabel: "demeter",
    badgeColor: "purple",
    description:
      "Ein Familienbetrieb in Schäflohe bei Amberg, der den Kreislaufgedanken lebt. Bei Familie Walz gehören Tier, Pflanze und Boden untrennbar zusammen. „Wir möchten die Tiere in ihrer Ganzheit betrachten\" — das bedeutet: Wer Eier bezieht, übernimmt auch Verantwortung für die Henne und ihren Bruder.",
    certLine: "Demeter-zertifiziert, Schäflohe bei Amberg",
    CertIcon: Sprout,
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
