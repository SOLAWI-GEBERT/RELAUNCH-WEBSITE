import { HelpCircle, MessageCircleQuestion, Landmark } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

export function FragenAntworten() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-solawi-salmon-light py-16 wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge-frech mb-4 inline-block">Für Einsteiger*innen & Ernteteiler</span>
          <h1 className="text-5xl mb-4 text-foreground">Fragen & Antworten</h1>
          <p className="text-xl text-foreground/80">
            Die wichtigsten Antworten rund um SoLaWi, deinen Ernteanteil und unseren Verein
          </p>
        </div>
      </section>

      {/* Grundlagen */}
      <section id="grundlagen" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900">Grundlagen</h2>
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

      {/* Schnelle Fragen für Ernteteiler */}
      <section id="schnelle-fragen" className="py-16 bg-solawi-salmon-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <MessageCircleQuestion className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900">Schnelle Fragen</h2>
              <p className="text-gray-700 mt-2">Für alle, die schon Ernteteiler sind</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm px-6">
              <AccordionItem value="verein-aufgaben">
                <AccordionTrigger className="text-base font-semibold">
                  Was macht der Solawi-Verein?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Der Förderverein wurde 2016 gegründet und kümmert sich um die Infrastruktur
                  zwischen Landwirten und Ernteteilern. Hierzu gehört hauptsächlich der
                  Transport, die Öffentlichkeitsarbeit und das Betreiben der Vergabestellen im
                  Stadtgebiet. So können sich die Landwirte um das kümmern, was sie am liebsten
                  machen — ganz ohne Excel und Transportfahrten.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="verein-wer">
                <AccordionTrigger className="text-base font-semibold">
                  Wer oder was ist der Solawi-Verein?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Der Verein besteht aus allen ehrenamtlich Aktiven. Satzungsbedingt gibt es
                  zwei gewählte Vorstände, einen Kassenwart und einen Kassenprüfer, welche alle
                  ehrenamtlich und ohne Aufwandsentschädigung agieren. Als Ernteteiler wird man
                  nicht automatisch Vereinsmitglied.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="einbringen">
                <AccordionTrigger className="text-base font-semibold">
                  Muss ich mich einbringen an einem Hof oder im Verein?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Nein, das ist nicht verpflichtend. Jeder hat sein eigenes Leben und schafft
                  es, sich mehr oder weniger einzubringen. Du kannst die Idee auch unterstützen,
                  indem du Ernteteiler bei Stadt, Land, Beides. bist. Als Abholer in einem
                  unserer Depots wirst du 1–2 Mal im Jahr für das Aufräumen und Reinigen des
                  Depots eingeteilt (ca. 20 Min). Wünschenswert ist natürlich, wenn du dich für
                  die Herkunft deiner Lebensmittel interessierst und den Landwirt auch
                  kennenlernen möchtest.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="kontakt-landwirte">
                <AccordionTrigger className="text-base font-semibold">
                  Kann ich direkt zu den Landwirten Kontakt aufnehmen?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Selbstverständlich. Alle Höfe sind offen für deinen Besuch und dein
                  Engagement. Sprich einfach die jeweiligen Hofbetreuer an, die ehrenamtlich bei
                  Stadt, Land, Beides. aktiv sind. Eine gute Gelegenheit, einen unserer
                  Landwirte kennenzulernen, ist eine Hof-Aktion, über welche du als Ernteteiler
                  in der Hof-Post informiert wirst.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ernteteiler-werden">
                <AccordionTrigger className="text-base font-semibold">
                  Wie kann ich Ernteteiler werden?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Im Download-Bereich unserer Homepage findest du die aktuelle
                  Teilnahmevereinbarung. Bei manchen Landwirten stehen noch freie Ernteanteile
                  zur Verfügung. Kreuze das an, was dir zusagt. Du erhältst anschließend eine
                  Bestätigung, was verfügbar ist.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="aussteigen">
                <AccordionTrigger className="text-base font-semibold">
                  Wie kann ich wieder aussteigen?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Bei manchen Höfen ist ein Probemonat möglich, bei dem du ausprobieren kannst,
                  ob die Solawi in deinen Alltag passt. Die genauen Umstände sind in der
                  Teilnahmevereinbarung festgelegt. Eine Kündigung ist dann zum Ende des
                  Wirtschaftsjahres und bei besonderen Fällen (z.B. Umzug o.ä.) möglich.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* Vereinsgeschichte */}
      <section id="vereinsgeschichte" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Landmark className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900">Vereinsgeschichte</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-solawi-mauve rounded-lg p-8 space-y-4 text-gray-700 leading-relaxed">
              <p>
                Stadt, Land, Beides. e.V. wurde 2016 in Nürnberg gegründet — aus der Idee
                heraus, Landwirte und Menschen in der Stadt wieder direkt miteinander zu
                verbinden. Von Anfang an war klar: Statt sich auf einen einzelnen Hof zu
                beschränken, sollten möglichst viele Betriebe aus der Region die Chance
                bekommen, ein festes Standbein in der solidarischen Landwirtschaft zu finden.
              </p>
              <p>
                Aus dieser Idee ist ein Verein gewachsen, der komplett ehrenamtlich arbeitet:
                zwei gewählte Vorstände, ein Kassenwart und ein Kassenprüfer organisieren
                gemeinsam mit vielen engagierten Ernteteilern den Transport, die
                Öffentlichkeitsarbeit und den Betrieb der Depots — ohne Aufwandsentschädigung
                und ohne Gewinnaufschlag. So kann sich jeder Hof auf das konzentrieren, was er
                am besten kann, während der Verein die Infrastruktur dazwischen trägt.
              </p>
              <p>
                Aus einem einzelnen Hof und einer Handvoll Ernteteilern ist seitdem ein Netz
                aus mehreren Partnerhöfen und Depots in Nürnberg und Fürth entstanden. Das
                Prinzip ist dabei immer gleich geblieben: Wer Ernteteiler wird, trägt das
                Ernterisiko gemeinsam mit dem Landwirt — und bekommt dafür Lebensmittel, deren
                Herkunft er kennt.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
