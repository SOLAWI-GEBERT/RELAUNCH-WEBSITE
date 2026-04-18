import { Mail, User, MessageSquare, HelpCircle } from "lucide-react";
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
                    placeholder="Dein Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="deine@email.de"
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
                  placeholder="Deine Nachricht..."
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

      {/* Ansprechpartner */}
      <section id="ansprechpartner" className="py-16 bg-solawi-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <User className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Direkter Ansprechpartner
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <p className="text-lg font-semibold text-gray-900 mb-2">
              Sebastian Lades (Vorstand), Andreas Gebert (Kassenwart)
            </p>
            <p className="text-gray-700 mb-4">
              Vorstand und Kassenwart des Vereins „Solidarische Landwirtschaft
              Stadt, Land, Beides e.V."
            </p>
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <Mail className="w-5 h-5 text-primary" />
              <a
                href="mailto:Team.Koordination@stadt-land-beides.de"
                className="hover:text-primary transition-colors"
              >
                Team.Koordination@stadt-land-beides.de
              </a>
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
              Fragen für Ernteteiler
            </h2>
          </div>

          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm px-6">
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
