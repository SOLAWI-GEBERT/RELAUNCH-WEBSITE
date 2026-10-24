export function Impressum() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            Anbieter (nach § 5 DDG)
          </h2>
          <p>
            Solidarische Landwirtschaft Stadt, Land, Beides e.V.
            <br />
            Findelwiesenstr. 25
            <br />
            90478 Nürnberg
          </p>
          <p>Telefon: +49 911 596 79 722 (AB)</p>
          <p>
            E-Mail:{" "}
            <a
              href="mailto:Team.Koordination@stadt-land-beides.de"
              className="text-primary hover:underline"
            >
              Team.Koordination@stadt-land-beides.de
            </a>
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            Vertretungsberechtigt (nach § 5 Abs. 1 Nr. 1 DDG)
          </h2>
          <p>
            Sebastian Lades, Vorstand des Vereins Solidarische Landwirtschaft
            Stadt, Land, Beides e.V.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            Inhaltlich verantwortlich (nach § 18 Abs. 2 MStV)
          </h2>
          <p>
            Andreas Gebert
            <br />
            c/o Solidarische Landwirtschaft Stadt, Land, Beides e.V.
            <br />
            Findelwiesenstr. 25
            <br />
            90478 Nürnberg
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Registerdaten</h2>
          <p>
            Vereinsregister des Amtsgerichts Nürnberg: VR 202062
            <br />
            USt-IdNr. nach § 27a UStG: DE419541492
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Bankverbindung</h2>
          <p>
            Triodos Bank
            <br />
            IBAN: DE65 5003 1000 1040 8710 00
            <br />
            BIC: TRODDEF1
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            Konzeption der Gemeinschaftsseite
          </h2>
          <p>Stefan Schindhelm</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Bildnachweis</h2>
          <p>
            Hof-, Depot- und Ernteaufnahmen: Andreas Gebert
            <br />
            {/* TODO vor dem Livegang: Urheber der Signature-Illustrationen
                (ablauf-*, decision-*, features-*) klären und hier eintragen.
                Bei Auftragsarbeit ist die Namensnennung nach § 13 UrhG
                verpflichtend. Siehe docs/todo.md. */}
            Illustrationen: [Urheber noch zu klären — vor dem Livegang
            eintragen]
            <br />
            Weiteres Bildmaterial: Depositphotos
            <br />
            Wort-/Bildmarke „Stadt, Land, Beides.": Solidarische Landwirtschaft
            Stadt, Land, Beides e.V.
            <br />
            Kartendarstellung: © OpenStreetMap-Mitwirkende, ODbL
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            Werbe- und Spamwiderspruch
          </h2>
          <p>
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
            Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
            angeforderter Werbung und Informationsmaterialien wird hiermit
            ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich
            ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung
            von Werbeinformationen, etwa durch Spam-Mails, vor.
          </p>
        </div>
      </section>
    </div>
  );
}
