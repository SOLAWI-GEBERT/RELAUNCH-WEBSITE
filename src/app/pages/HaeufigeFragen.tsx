import { HelpCircle } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

export function HaeufigeFragen() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-solawi-salmon-light py-16 wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge-frech mb-4 inline-block">Für Einsteiger*innen</span>
          <h1 className="text-5xl mb-4 text-foreground">Häufige Fragen</h1>
          <p className="text-xl text-foreground/80">
            Die wichtigsten Antworten für alle, die SoLaWi noch nicht kennen
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm px-6">
              <AccordionItem value="was-ist-solawi">
                <AccordionTrigger className="text-base font-semibold">
                  Was ist Solawi?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  „Möchte ich daraus bestehen?", hat schon ein bekannter Comedian gefragt und
                  trifft damit den Nagel auf den Kopf. Bei der Solidarischen Landwirtschaft
                  (Solawi) geht es darum, regionale, saisonale und authentische
                  Bio-Lebensmittel anzubauen und zu beziehen. Du bezahlst nicht das einzelne
                  Produkt, sondern den Preis, den es kostet, das Lebensmittel herzustellen.
                  So kannst du dich als „Städter" direkt mit dem Bauernhof verbinden und
                  gemeinsam den Anbau planen — und das Risiko für die Ernte wird gemeinsam
                  getragen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="unterschied-biomarkt">
                <AccordionTrigger className="text-base font-semibold">
                  Was unterscheidet eine Solawi vom Bio-Markt/Hofladen?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Bei der Solawi baust du eine direkte Verbindung mit dem erzeugenden Hof auf.
                  Du weißt genau, wo dein Essen herkommt, wie es angebaut und mit welchen
                  Stoffen es behandelt wurde. Im Bio-Markt bleibt das oft unklar — die
                  gesetzliche Landesangabe ist zu ungenau. Wer sich fragt, warum die Birne
                  aus Frankreich kommt, ist bei uns genau richtig.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="unterschied-abokiste">
                <AccordionTrigger className="text-base font-semibold">
                  Was unterscheidet die Solawi von der „Abo-Kiste/Öko-Kiste"?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Bei einer Solawi steht die Verbindung der Ernteteiler mit dem Landwirt im
                  Vordergrund. Du bestellst nicht nach Belieben, sondern trägst mit einem
                  festen Beitrag dazu bei, dass der Hof wirtschaften kann. So nehmen wir die
                  gesamte Ernte ab und bezahlen dem Landwirt seine vollständigen Ausgaben —
                  für nachhaltige Biodiversität und Fruchtbarkeit der Erde.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="besondere-slb">
                <AccordionTrigger className="text-base font-semibold">
                  Was ist das Besondere an Stadt, Land, Beides.?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Bei „Stadt, Land, Beides." machen mehrere Höfe mit — du kannst dich auf
                  einem oder mehreren Höfen engagieren. Dadurch steht dir eine breite Palette
                  an Lebensmitteln zur Auswahl: von Gemüse und Obst über Fleisch und Eier bis
                  hin zu Ur-Getreide und Bio-Beeren.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mehrere-landwirte">
                <AccordionTrigger className="text-base font-semibold">
                  Wieso sind mehrere Landwirte dabei?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Als die Solawi in Nürnberg gegründet wurde, haben sich mehrere Landwirte
                  gemeldet. Ziel ist es, diesen Höfen durch Solawi ein festes Standbein zu
                  geben — im Idealfall komplett Solawi zu sein. Die unterschiedlichen
                  Produkte ermöglichen es dir, bei mehreren Höfen mitzumachen.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
