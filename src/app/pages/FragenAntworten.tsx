import { Link } from "react-router";
import {
  HelpCircle,
  MessageCircleQuestion,
  Landmark,
  MessageSquare,
  User,
  Mail,
  FileText,
} from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import { InteresseFormular } from "../components/InteresseFormular";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

export function FragenAntworten() {
  return (
    <div className="bg-white">
      {/* Hero — Blaugrau (#97b0c7), weil `kontakt.jpg` exakt diesen Hintergrund hat:
          das Huhn am Laptop läuft randlos in die Banderole, statt als Kachel darauf zu sitzen.
          Es ist das Absendermotiv der Seite: hier wird gefragt und geantwortet. */}
      <section className="relative min-h-[320px] flex items-center bg-solawi-blue wave-bottom z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center py-12 md:py-14">
            <div>
              <span className="badge-frech mb-6 inline-block">Für Einsteiger*innen & Ernteteiler</span>
              <h1 className="h1-seite mb-6">Fragen & Antworten</h1>
              <p className="lead max-w-lg">
                Die wichtigsten Antworten rund um SoLaWi, deinen Ernteanteil und unseren Verein
              </p>
            </div>
            {/* max-w-full: kontakt.jpg ist 1200×1002 und bei 300 px Höhe 359 px breit —
                einen Hauch breiter als die Inhaltsbreite auf 390-px-Geräten, was die ganze
                Seite horizontal scrollen ließe. */}
            <div className="flex justify-center">
              <img
                src="/kontakt.jpg"
                alt="Ein weißes Huhn sitzt am Laptop und wartet auf deine Frage"
                className="h-[300px] md:h-[360px] max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grundlagen — Weiß als ruhige Fläche zwischen den Pastellsektionen, bewusst ohne
          Illustration: der Titel steht linksbündig und bricht die Reihe zentrierter Köpfe. */}
      <section id="grundlagen" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-12">
              <HelpCircle className="w-12 h-12 text-cta" />
              <h2 className="text-3xl font-bold text-gray-900">Grundlagen</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm px-6">
              <AccordionItem value="was-ist-solawi">
                <AccordionTrigger className="text-xl lg:text-2xl font-semibold [&>svg]:size-6">
                  Was ist Solawi?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed">
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
                <AccordionTrigger className="text-xl lg:text-2xl font-semibold [&>svg]:size-6">
                  Was unterscheidet eine Solawi vom Bio-Markt/Hofladen?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed">
                  Bei der Solawi baust du eine direkte Verbindung mit dem erzeugenden Hof auf.
                  Du weißt genau, wo dein Essen herkommt, wie es angebaut und mit welchen
                  Stoffen es behandelt wurde. Im Bio-Markt bleibt das oft unklar — die
                  gesetzliche Landesangabe ist zu ungenau. Wer sich fragt, warum die Birne
                  aus Frankreich kommt, ist bei uns genau richtig.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="unterschied-abokiste">
                <AccordionTrigger className="text-xl lg:text-2xl font-semibold [&>svg]:size-6">
                  Was unterscheidet die Solawi von der „Abo-Kiste/Öko-Kiste"?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed">
                  Bei einer Solawi steht die Verbindung der Ernteteiler mit dem Landwirt im
                  Vordergrund. Du bestellst nicht nach Belieben, sondern trägst mit einem
                  festen Beitrag dazu bei, dass der Hof wirtschaften kann. So nehmen wir die
                  gesamte Ernte ab und bezahlen dem Landwirt seine vollständigen Ausgaben —
                  für nachhaltige Biodiversität und Fruchtbarkeit der Erde.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="besondere-slb">
                <AccordionTrigger className="text-xl lg:text-2xl font-semibold [&>svg]:size-6">
                  Was ist das Besondere an Stadt, Land, Beides.?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed">
                  Bei „Stadt, Land, Beides." machen mehrere Höfe mit — du kannst dich auf
                  einem oder mehreren Höfen engagieren. Dadurch steht dir eine breite Palette
                  an Lebensmitteln zur Auswahl: von Gemüse und Obst über Fleisch und Eier bis
                  hin zu Ur-Getreide und Bio-Beeren.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mehrere-landwirte">
                <AccordionTrigger className="text-xl lg:text-2xl font-semibold [&>svg]:size-6">
                  Wieso sind mehrere Landwirte dabei?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed">
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
          {/* Illustration links vor dem Titel — zweite Position im Bildrhythmus der Seite.
              `features-nachhaltigkeit.jpg` hat exakt den Lachston dieser Sektion (#ffa8a1). */}
          <ScrollReveal direction="left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-12">
              <img
                src="/features-nachhaltigkeit.jpg"
                alt="Eine Frau schiebt einen Wagen voller Gemüse über den Acker"
                className="h-[160px] md:h-[200px] object-contain"
              />
              <div>
                <div className="flex items-center gap-3">
                  <MessageCircleQuestion className="w-12 h-12 text-cta" />
                  <h2 className="text-3xl font-bold text-foreground">Schnelle Fragen</h2>
                </div>
                <p className="text-foreground mt-2">Für alle, die schon Ernteteiler sind</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm px-6">
              <AccordionItem value="verein-aufgaben">
                <AccordionTrigger className="text-xl lg:text-2xl font-semibold [&>svg]:size-6">
                  Was macht der Solawi-Verein?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed">
                  Der Förderverein wurde 2016 gegründet und kümmert sich um die Infrastruktur
                  zwischen Landwirten und Ernteteilern. Hierzu gehört hauptsächlich der
                  Transport, die Öffentlichkeitsarbeit und das Betreiben der Vergabestellen im
                  Stadtgebiet. So können sich die Landwirte um das kümmern, was sie am liebsten
                  machen — ganz ohne Excel und Transportfahrten.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="verein-wer">
                <AccordionTrigger className="text-xl lg:text-2xl font-semibold [&>svg]:size-6">
                  Wer oder was ist der Solawi-Verein?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed">
                  Der Verein besteht aus allen ehrenamtlich Aktiven. Satzungsbedingt gibt es
                  zwei gewählte Vorstände, einen Kassenwart und einen Kassenprüfer, welche alle
                  ehrenamtlich und ohne Aufwandsentschädigung agieren. Als Ernteteiler wird man
                  nicht automatisch Vereinsmitglied. Nachlesen kannst du das in unserer{" "}
                  <a
                    href="/SatzungV4-01_2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cta hover:text-accent underline"
                  >
                    Vereinssatzung (PDF)
                  </a>
                  .
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="einbringen">
                <AccordionTrigger className="text-xl lg:text-2xl font-semibold [&>svg]:size-6">
                  Muss ich mich einbringen an einem Hof oder im Verein?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed">
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
                <AccordionTrigger className="text-xl lg:text-2xl font-semibold [&>svg]:size-6">
                  Kann ich direkt zu den Landwirten Kontakt aufnehmen?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed">
                  Selbstverständlich. Alle Höfe sind offen für deinen Besuch und dein
                  Engagement. Sprich einfach die jeweiligen Hofbetreuer an, die ehrenamtlich bei
                  Stadt, Land, Beides. aktiv sind. Eine gute Gelegenheit, einen unserer
                  Landwirte kennenzulernen, ist eine Hof-Aktion, über welche du als Ernteteiler
                  in der Hof-Post informiert wirst.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ernteteiler-werden">
                <AccordionTrigger className="text-xl lg:text-2xl font-semibold [&>svg]:size-6">
                  Wie kann ich Ernteteiler werden?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed">
                  Lade auf{" "}
                  <Link to="/so-funktionierts" className="underline">
                    „So funktioniert's"
                  </Link>{" "}
                  die aktuelle Teilnahmevereinbarung herunter, kreuze an, was dir zusagt, und
                  schick sie per Mail an die Koordination. Bei manchen Landwirten stehen noch
                  freie Ernteanteile zur Verfügung — du erhältst von uns eine Bestätigung,
                  was verfügbar ist. Möchtest du vorher etwas klären oder dich beraten lassen?
                  Dann nutze das{" "}
                  <a href="#antwort-nicht-dabei" className="underline">
                    Formular weiter unten
                  </a>
                  : Das Team meldet sich mit einer kurzen Beratung, die ausgefüllte
                  Vereinbarung schickst du uns danach per Mail. So arbeiten wir: Bei Stadt,
                  Land, Beides. sind alle ehrenamtlich aktiv. Deine Nachricht landet in
                  unserem internen Ticketsystem und wird von dort an die passende Person
                  verteilt. Wir bearbeiten das System mindestens einmal pro Woche — eine
                  Antwort kann deshalb etwas dauern.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="aussteigen">
                <AccordionTrigger className="text-xl lg:text-2xl font-semibold [&>svg]:size-6">
                  Wie kann ich wieder aussteigen?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed">
                  Bei manchen Höfen ist ein Probemonat möglich, bei dem du ausprobieren kannst,
                  ob die Solawi in deinen Alltag passt. Die genauen Umstände sind in der
                  Teilnahmevereinbarung festgelegt. Eine Kündigung ist dann zum Ende des
                  Wirtschaftsjahres und bei besonderen Fällen (z.B. Umzug o.ä.) möglich.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="newsletter">
                <AccordionTrigger className="text-xl lg:text-2xl font-semibold [&>svg]:size-6">
                  Gibt es einen Newsletter?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed">
                  Es gibt zwei: einen externen, öffentlichen Newsletter mit Kochevents und
                  Infoveranstaltungen — den kannst du schon{" "}
                  <a href="#newsletter" className="underline">
                    im Footer dieser Seite abonnieren
                  </a>
                  , auch wenn du noch nicht Ernteteiler*in bist. Und einen internen Newsletter für Mitglieder mit
                  Protokollen und internen Treffen wie der Jahreshauptversammlung. Wir
                  arbeiten daran, dich dafür automatisch einzutragen, sobald du
                  Ernteteiler*in wirst — bis das steht, schreib uns am besten kurz an{" "}
                  <a
                    href="mailto:Team.Koordination@stadt-land-beides.de"
                    className="underline"
                  >
                    Team.Koordination@stadt-land-beides.de
                  </a>
                  , damit du ihn nicht verpasst.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="termine">
                <AccordionTrigger className="text-xl lg:text-2xl font-semibold [&>svg]:size-6">
                  Wie erfahre ich von Terminen und Mitmachangeboten?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed">
                  Aktionen auf deinem Hof (Pflanzaktion, Ernten, Erntedankfest) bekommst du
                  automatisch per Hof-Post, sobald du dort Ernteteiler*in bist. Vereinsweite
                  Termine wie die Jahreshauptversammlung stehen im internen Newsletter (siehe
                  oben). Öffentliche Angebote wie Kochevents oder Infoveranstaltungen findest
                  du im externen Newsletter.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* Vereinsgeschichte — die Fläche trägt den Flieder von `Geschichte_aubergine.png`
          (#bfa9c4, eigenes Token `solawi-aubergine`), nicht das Palette-Mauve #c7afc7:
          die beiden Töne liegen nah beieinander, aber die Kante wäre sichtbar.
          Illustration mittig — dritte Position im Bildrhythmus. */}
      <section id="vereinsgeschichte" className="py-16 bg-solawi-aubergine">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <img
                src="/Geschichte_aubergine_web.png"
                alt="Ein Gärtner mit Schürze hält eine Karotte hoch und zeigt auf eine Kiste voller Gemüse"
                className="h-[220px] md:h-[300px] max-w-full object-contain mx-auto mb-4"
              />
              <div className="flex items-center justify-center gap-3">
                <Landmark className="w-12 h-12 text-cta" />
                <h2 className="text-3xl font-bold text-foreground">Vereinsgeschichte</h2>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-white rounded-lg p-8 space-y-4 text-gray-700 leading-relaxed shadow-sm">
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

          <ScrollReveal>
            <a
              href="/SatzungV4-01_2025.pdf"
              download
              className="mt-6 flex items-center gap-4 bg-white p-6 shadow-md hover-tilt group"
            >
              <FileText className="w-10 h-10 text-cta flex-shrink-0" />
              <div>
                <h4 className="mb-1 group-hover:text-cta transition-colors">Vereinssatzung</h4>
                <p>Zweck, Mitgliedschaft und Organe des Vereins (PDF)</p>
              </div>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Antwort nicht dabei? — Grün, die Signaturfarbe für Mitmachen/Anmeldung, und exakt
          der Hintergrund von `ablauf-kontakt.jpg` (#c2ddb2). Illustration rechts neben dem
          Titel — vierte Position im Bildrhythmus. */}
      {/* overflow-hidden, weil der Kopf mit `direction="right"` 40 px nach rechts versetzt
          startet — ohne das wächst die Seite auf Handybreite um 24 px und scrollt horizontal.
          Gleiche Lösung wie in der Hero-Sektion auf der Startseite. */}
      <section id="antwort-nicht-dabei" className="py-16 bg-solawi-green overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="right">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-12">
              <div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-12 h-12 text-cta" />
                  <h2 className="text-3xl font-bold text-foreground">Antwort nicht dabei?</h2>
                </div>
              </div>
              <img
                src="/ablauf-kontakt.jpg"
                alt="Hallo? — ein Mann hält eine Gurke wie ein Telefon und winkt"
                className="h-[160px] md:h-[200px] object-contain sm:ml-auto hover-wiggle"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mb-12">
              <p className="text-foreground max-w-2xl">
                So geht's: Teilnahmevereinbarung herunterladen, ausfüllen und per Mail an die
                Koordination schicken (
                <Link to="/so-funktionierts" className="underline">
                  mehr dazu
                </Link>
                ). Wenn du vorher etwas wissen möchtest, schreib uns hier — wir melden uns
                mit einer kurzen Beratung.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <InteresseFormular />
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-white rounded-lg shadow-sm p-8 text-center mt-8">
              <User className="w-8 h-8 text-cta mx-auto mb-3" />
              <h3 className="mb-2">Direkter Ansprechpartner</h3>
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Sebastian Lades (Vorstand), Andreas Gebert (Kassenwart)
              </p>
              <p className="text-gray-700 mb-4">
                Vorstand und Kassenwart des Vereins „Solidarische Landwirtschaft Stadt, Land,
                Beides e.V."
              </p>
              <div className="flex items-center justify-center gap-3 text-gray-700">
                <Mail className="w-5 h-5 text-cta" />
                <a
                  href="mailto:Team.Koordination@stadt-land-beides.de"
                  className="hover:text-cta transition-colors"
                >
                  Team.Koordination@stadt-land-beides.de
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
