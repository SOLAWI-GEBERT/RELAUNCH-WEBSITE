import { Mail, Phone, MapPin, User, MessageSquare, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

export function KontaktAnmeldung() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero — Pastell + freie Illustration */}
      <section className="bg-solawi-blue py-16 wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="badge-frech mb-4 inline-block">Schreib uns</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Kontakt & Anmeldung
              </h1>
              <p className="text-xl text-foreground/90 max-w-3xl">
                Werde Teil unserer Gemeinschaft oder kontaktier uns bei Fragen
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/kontakt.jpg" alt="Hahn am Laptop" className="h-[220px] object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Anmeldung Section */}
      <section id="anmeldung" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Anmeldung / Teilnahmevereinbarung
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Werde Teil von Stadt, Land, Beides und genieße frisches,
              regionales Gemüse aus solidarischer Landwirtschaft
            </p>
          </div>

          <div className="bg-secondary/20 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              So funktioniert die Anmeldung
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Ernteanteil wählen</h4>
                  <p className="text-gray-700">
                    Entscheide dich für einen Sommer- oder Winteranteil
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Depot auswählen</h4>
                  <p className="text-gray-700">
                    Wähle ein Depot in deiner Nähe für die Abholung
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Formular ausfüllen</h4>
                  <p className="text-gray-700">
                    Fülle die Teilnahmevereinbarung aus
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Loslegen</h4>
                  <p className="text-gray-700">
                    Du erhältst eine Bestätigung und kannst ab der nächsten Saison loslegen
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-cta text-white px-8 py-4 font-semibold hover:bg-cta-hover transition-colors text-lg font-accent">
              Jetzt anmelden
            </button>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="py-16 bg-solawi-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kontaktformular
            </h2>
            <p className="text-lg text-gray-600">
              Du hast Fragen? Schreib uns!
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="ihre@email.de"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Betreff
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Worum geht es?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nachricht
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Ihre Nachricht..."
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-cta text-white px-6 py-3 font-semibold hover:bg-cta-hover transition-colors font-accent"
                >
                  Nachricht senden
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Ansprechpersonen */}
      <section id="ansprechpersonen" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <User className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ansprechpersonen
            </h2>
            <p className="text-lg text-gray-600">
              Unser Team steht dir gerne zur Verfügung
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Allgemeine Fragen</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <span>info@stadt-land-beides.de</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <span>0123 / 456789</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Koordination</h3>
              <div className="space-y-3 text-gray-700">
                <p className="font-medium">Max Mustermann</p>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <span>koordination@stadt-land-beides.de</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Depots</h3>
              <div className="space-y-3 text-gray-700">
                <p className="font-medium">Anna Schmidt</p>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <span>depots@stadt-land-beides.de</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-solawi-salmon-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fragen und Antworten
            </h2>
          </div>

          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm px-6">
            <AccordionItem value="was-ist-solawi">
              <AccordionTrigger className="text-base font-semibold">
                Was ist Solawi?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                „Möchte ich daraus bestehen?", hat schon ein bekannter Comedian gefragt und
                trifft damit den Nagel auf den Kopf. Möchte ich aus dem bestehen, was mir da
                im (Super)Markt angeboten wird? Bei der Solidarischen Landwirtschaft (Solawi)
                geht es darum, regionale, saisonale und authentische Bio-Lebensmittel
                anzubauen und zu beziehen. Im Vergleich zum herkömmlichen Einkauf bezahlt man
                als Verbraucher aber nicht das einzelne Produkt, sondern den Preis, den es
                kostet, das Lebensmittel herzustellen. Man kann sich als „Städter" direkt mit
                dem Bauernhof verbinden und gemeinsam den Anbau planen. Hierzu gehört auch,
                dass das Risiko für die Ernte gemeinsam getragen wird. Damit werden regionale
                Bio-Höfe erhalten und man kann darüber hinaus aktiv eine nachhaltige
                Landwirtschaft mitgestalten. Die Solawi Stadt, Land, Beides. sucht
                Verbraucherinnen und Verbraucher, die als Ernteteiler mit einem der Höfe
                zusammenkommen. Angesprochen sind Menschen, die keine industrielle Produktion
                von Lebensmitteln wollen – ohne Chemie, Zusatzstoffe, umweltbelastende
                Verpackungen, Ausbeutung der Böden oder lange Transportwege. Jede Solawi ist
                in Nuancen unterschiedlich, jedoch verfolgen alle das gleiche Ziel.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="unterschied-biomarkt">
              <AccordionTrigger className="text-base font-semibold">
                Was unterscheidet eine Solawi vom Bio-Markt/Hofladen?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Bei der Solawi baut der Verbraucher eine Verbindung mit dem erzeugenden Hof
                auf. Ich möchte als Verbraucher genau wissen, wo dieses Lebensmittel, das ich
                esse, herkommt. Wie wurde es angebaut und mit welchen Stoffen behandelt? Diese
                Fragen sind für mich essentiell und werden im Bio-Markt nicht vollständig
                beantwortet. Die gesetzliche Landesangabe ist für mich zu ungenau. Inzwischen
                kommt es auch immer häufiger vor, dass im Hofladen eines Landwirts das
                Sortiment aufgestockt wird mit der Begründung, der „Kunde" wolle das so. Wer
                die Herkunftsländer in der Gemüse- und Obstabteilung von Biomärkten beäugt,
                und sich fragt, warum die Birne vor mir nun aus Frankreich kommt, ist bei uns
                genau richtig.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="unterschied-abokiste">
              <AccordionTrigger className="text-base font-semibold">
                Was unterscheidet die Solawi von der „Abo-Kiste/Öko-Kiste"?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Bei einer Solawi steht die Verbindung der Ernteteiler mit dem Landwirt im
                Vordergrund. Es geht darum, dass man nicht nach Belieben bestellt und für
                einen festen Preis bekommt. Es geht eher um einen nachhaltigen Konsum,
                wodurch Biodiversität und Fruchtbarkeit der Erde erhalten bleiben.
                Wirtschaftlich betrachtet haben auch die Lieferanten für die Abo-Kiste keine
                Gewissheit, dass ihre Produkte abgesetzt werden können. Diesen Bann wollen wir
                in der Solawi durchbrechen und die gesamte Ernte abnehmen. Hierfür bezahlen
                wir dem Landwirt seine vollständigen Ausgaben.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="besondere-slb">
              <AccordionTrigger className="text-base font-semibold">
                Was ist das Besondere an der Solawi Stadt, Land, Beides.?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Das Besondere bei „Stadt, Land, Beides." ist, dass mehrere Höfe mitmachen und
                sich die Ernteteiler auf einem oder mehreren Höfen engagieren können. Dadurch
                steht eine breite Palette an Lebensmitteln zur Auswahl.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="mehrere-landwirte">
              <AccordionTrigger className="text-base font-semibold">
                Wieso sind bei Stadt, Land, Beides. mehrere Landwirte dabei?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Als die Solawi in Nürnberg gegründet wurde, haben sich mehrere Landwirte
                gemeldet. Ziel der ehrenamtlich Aktiven war und ist es, diese Höfe durch
                Solawi ein festes Standbein zu geben oder – im Idealfall – komplett Solawi zu
                sein. Diese besondere Situation mit den unterschiedlichen Produkten erlaubt es
                den Ernteteilern, bei dem einen oder anderen Hof mitzumachen. Das Ziel ist,
                jedem Landwirt zu 100% Solawi zu verhelfen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="verein-aufgaben">
              <AccordionTrigger className="text-base font-semibold">
                Was macht der Solawi-Verein?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Der Förderverein wurde 2016 gegründet und kümmert sich um die Infrastruktur
                zwischen Landwirten und Ernteteilern. Hierzu gehört hauptsächlich der
                Transport, die Öffentlichkeitsarbeit (Homepage, öffentlichkeitswirksame
                Veranstaltungen, etc.) und das Betreiben der Vergabestellen im Stadtgebiet.
                Somit können sich die Landwirte um das kümmern, was sie am liebsten machen –
                ganz ohne Excel und Transportfahrten.
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
                Depots eingeteilt (ca. 20 Min). Es finden immer mal wieder verschiedene
                Veranstaltungen oder Aktionen statt, die du annehmen kannst. Wünschenswert ist
                natürlich, wenn du dich für die Herkunft deiner Lebensmittel interessierst und
                den Landwirt auch kennenlernen möchtest.
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
        </div>
      </section>
    </div>
  );
}
