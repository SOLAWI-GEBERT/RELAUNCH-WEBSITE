export function Datenschutz() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Datenschutzerklärung
          </h1>

          <p>
            Datenschutz hat für uns einen hohen Stellenwert — für dich sicherlich
            auch. Mit dieser Datenschutzerklärung informieren wir dich, welche
            personenbezogenen Daten verarbeitet werden und welche Rechte dir
            zustehen. Diese Datenschutzerklärung dient der Umsetzung unserer
            Verpflichtungen aus der Verordnung (EU) 2016/679
            (Datenschutz-Grundverordnung, DSGVO), dem
            Bundesdatenschutzgesetz (BDSG) sowie dem
            Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz (TDDDG).
          </p>

          {/* 1. Verantwortlicher */}
          <h2 className="text-xl font-semibold mt-10 mb-4">
            1. Verantwortlicher
          </h2>
          <p>
            Solidarische Landwirtschaft Stadt, Land, Beides e.V.
            <br />
            Vorstand: Sebastian Lades
            <br />
            Kassenwart: Andreas Gebert
            <br />
            <br />
            Findelwiesenstr. 25, 90478 Nürnberg
            <br />
            Telefon: +49 911 596 79 722
            <br />
            E-Mail:{" "}
            <a
              href="mailto:Team.Koordination@stadt-land-beides.de"
              className="text-primary hover:underline"
            >
              Team.Koordination@stadt-land-beides.de
            </a>
          </p>
          <p>
            Ein Datenschutzbeauftragter ist nicht bestellt, da die
            Voraussetzungen des § 38 BDSG bei uns nicht vorliegen. Für alle
            Fragen zum Datenschutz wende dich an die oben genannte Adresse.
          </p>

          {/* 2. Allgemeines */}
          <h2 className="text-xl font-semibold mt-10 mb-4">
            2. Allgemeines zur Datenverarbeitung
          </h2>
          <p>
            Der Förderverein Stadt, Land, Beides e.V. ist ein Zusammenschluss
            aus mehreren Höfen und fördert satzungsgemäß die solidarische
            Landwirtschaft. Diese ehrenamtliche Arbeit ist ohne Einwilligung in
            die Verwendung deiner Daten in analoger und digitaler Form nicht
            möglich. Soweit es uns organisatorisch und technisch möglich ist,
            geben wir dir die Kontrolle über die Verwendung deiner Daten.
            Generell bemühen wir uns um ein Minimum der notwendigen Daten.
          </p>

          {/* 3. Art und Umfang */}
          <h2 className="text-xl font-semibold mt-10 mb-4">
            3. Art, Umfang und Zweck der Verarbeitung
          </h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            3.1 Welche Daten verarbeiten wir?
          </h3>
          <p className="font-semibold">Als Ernteteiler bzw. Mitglied:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name, Adresse, Telefonnummer, E-Mail-Adresse</li>
            <li>Vertragsdaten (Vertragstext, Zahlungen)</li>
            <li>Kontodaten (bei Teilnahme am Lastschriftverfahren)</li>
          </ul>

          <p className="font-semibold mt-4">
            Als Interessent oder auf der Warteliste:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name und E-Mail-Adresse</li>
            <li>
              Deine Angaben zum Anliegen, zum Wunsch-Depot und zu den Höfen,
              die dich interessieren
            </li>
          </ul>

          <p className="font-semibold mt-4">Als Nutzer der Webseite:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Technisch notwendige Zugriffsdaten (IP-Adresse, Browsertyp,
              Zugriffszeitpunkt, aufgerufene Seite). Sie fallen in den
              Server-Logfiles an, dienen allein dem technischen Betrieb und der
              Abwehr von Angriffen und werden nicht zu Profilen
              zusammengeführt oder ausgewertet (siehe Ziffer 9.1).
            </li>
            <li>E-Mail-Adresse bei Newsletter-Anmeldung</li>
          </ul>

          <p className="mt-4">
            Die Daten werden in elektronischer und schriftlicher Form
            gespeichert.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            3.2 Betroffene Personen
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Besucher unserer Webseite</li>
            <li>Interessenten und Personen auf der Warteliste</li>
            <li>Mitglieder und Fördermitglieder des Vereins</li>
            <li>Ernteteiler</li>
            <li>Hofbetreiber und weitere Vereinspartner</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            3.3 Rechtsgrundlagen
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO):</strong>{" "}
              Verarbeitung von Mitgliedsdaten und Vertragsdaten zur Ausführung
              vertraglicher Verpflichtungen gegenüber Ernteteilern und
              Mitgliedern. Dasselbe gilt für vorvertragliche Maßnahmen, also
              die Bearbeitung deiner Anfrage und die Warteliste.
            </li>
            <li>
              <strong>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO):</strong>{" "}
              Newsletter-Versand, Verwendung von Fotos bei
              Öffentlichkeitsarbeit.
            </li>
            <li>
              <strong>
                Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO):
              </strong>{" "}
              Sicherer Betrieb und Darstellung der Webseite, Nachvollziehbarkeit
              von Abrechnungen und Auskunft gegenüber den Kassenprüfern des
              Vereins (siehe Ziffer 6.2).
            </li>
            <li>
              <strong>
                Gesetzliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO):
              </strong>{" "}
              Aufbewahrungspflichten nach Handels- und Steuerrecht.
            </li>
          </ul>

          <p className="mt-4">
            Dein Name und deine E-Mail-Adresse werden innerhalb des
            Fördervereins und der angeschlossenen Höfe geteilt. Als Ernteteiler
            sind dein Name, deine E-Mail-Adresse und Telefonnummer für andere
            Ernteteiler in einem geschützten Bereich einsehbar — dies fördert
            den Austausch und erleichtert die Kommunikation.
          </p>

          <p>
            Die zur Vertragserfüllung notwendigen Daten können wir nicht
            löschen, solange dein Ernteanteil oder deine Mitgliedschaft läuft —
            andernfalls könnten wir die Lieferung und die Abrechnung nicht
            durchführen. Wenn du diese Verarbeitung beenden möchtest, bedeutet
            das also, die Teilnahme zu kündigen (siehe Ziffer 6.1).
          </p>

          {/* 4. Datensicherheit */}
          <h2 className="text-xl font-semibold mt-10 mb-4">
            4. Datensicherheit
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Mit deinen Daten wird verantwortungsbewusst umgegangen. Der Zugang
              Dritter wird verwehrt.
            </li>
            <li>
              Deine persönlichen Daten auf der Webseite werden verschlüsselt
              übertragen (TLS/SSL).
            </li>
            <li>
              Die ehrenamtlichen Koordinatoren und Kassenbeauftragten pflegen
              deine Daten auf eigenen Geräten mit haushaltsüblichen
              Schutzmaßnahmen.
            </li>
            <li>
              Stellst du Datenmissbrauch fest, wende dich bitte an den Vorstand:{" "}
              <a
                href="mailto:Vorstand@stadt-land-beides.de"
                className="text-primary hover:underline"
              >
                Vorstand@stadt-land-beides.de
              </a>
            </li>
          </ul>

          {/* 5. Empfänger */}
          <h2 className="text-xl font-semibold mt-10 mb-4">
            5. Empfänger von Daten
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Innerhalb des Vereins:</strong> Zugriff haben
              ausschließlich die Hofkoordinatoren, die Landwirte, der
              Kassenwart, die Autoren der AK-Öffentlichkeitsarbeit und der
              Wirtschaftskreis des Fördervereins — jeweils nur im für ihre
              Aufgabe erforderlichen Umfang. Eine Weitergabe an Dritte ist
              untersagt.
            </li>
            <li>
              <strong>Depots:</strong> Zur Lieferung werden die dafür
              erforderlichen Daten an das von dir gewählte Depot
              weitergegeben.
            </li>
            <li>
              <strong>Kreditinstitut:</strong> Zur Zahlungsabwicklung werden
              Name, Kontodaten und Beitragshöhe an das beauftragte
              Kreditinstitut weitergeleitet.
            </li>
            <li>
              <strong>Auftragsverarbeiter:</strong> Hoster und
              Buchhaltungsdienst (siehe Ziffern 9.1 und 9.3). Sie verarbeiten
              die Daten ausschließlich nach unserer Weisung auf Grundlage eines
              Vertrags nach Art. 28 DSGVO.
            </li>
          </ul>
          <p>
            Verarbeitungen in einem Drittland (außerhalb EU/EWR) erfolgen
            ausschließlich auf Grundlage der Art. 44–50 DSGVO, insbesondere auf
            Basis eines Angemessenheitsbeschlusses der EU-Kommission (für das
            Vereinigte Königreich gültig bis Dezember 2031, für die USA auf
            Basis des EU-US Data Privacy Framework) oder von
            Standardvertragsklauseln.
          </p>

          {/* 6. Speicherdauer und Löschung */}
          <h2 className="text-xl font-semibold mt-10 mb-4">
            6. Speicherdauer und Löschung
          </h2>
          <p>
            Wir speichern deine Daten nur so lange, wie es für den jeweiligen
            Zweck erforderlich ist oder wie es gesetzliche
            Aufbewahrungspflichten verlangen (Art. 5 Abs. 1 lit. e DSGVO).
            Danach werden sie gelöscht.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            6.1 Solange dein Ernteanteil läuft
          </h3>
          <p>
            Ein Ernteanteil läuft über ein Wirtschaftsjahr (1. April bis 31.
            März) und verlängert sich automatisch um ein weiteres
            Wirtschaftsjahr, wenn du nicht bis zum 31. Dezember kündigst.
            Solange das Teilnahmeverhältnis besteht, benötigen wir deine
            Vertrags- und Kontaktdaten zur Vertragserfüllung (Art. 6 Abs. 1
            lit. b DSGVO) — eine Löschung ist in dieser Zeit nicht möglich,
            ohne die Teilnahme zu beenden. Die Kündigung erfolgt schriftlich
            per Post oder per E-Mail an{" "}
            <a
              href="mailto:Team.Koordination@stadt-land-beides.de"
              className="text-primary hover:underline"
            >
              Team.Koordination@stadt-land-beides.de
            </a>
            . Die Einzelheiten stehen in der Teilnahmevereinbarung.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            6.2 Nach dem Ausstieg
          </h3>
          <p>
            Endet dein Ernteanteil — durch Kündigung zum 31. März oder in
            Ausnahmefällen früher —, bewahren wir deine Vertrags- und
            Kontaktdaten noch{" "}
            <strong>zwei Jahre nach Ende des Wirtschaftsjahres</strong> auf.
            Das brauchen wir, um Abrechnungen nachvollziehen, Rückfragen
            beantworten und gegenüber den Kassenprüfern des Vereins Auskunft
            geben zu können (Art. 6 Abs. 1 lit. f DSGVO). Anschließend werden
            sie gelöscht.
          </p>
          <p>
            Davon ausgenommen sind zwei Fälle: Daten, die handels- oder
            steuerrechtlichen Aufbewahrungspflichten unterliegen (Rechnungen,
            Buchungsbelege, Zahlungsvorgänge), bleiben nach § 257 HGB und
            § 147 AO bis zu zehn Jahre gespeichert. Und wenn du über den
            Ernteanteil hinaus Mitglied oder Fördermitglied des Vereins
            bleibst, führen wir deine Mitgliedsdaten bis zum Ende der
            Mitgliedschaft weiter — Ernteanteil und Vereinsmitgliedschaft sind
            voneinander unabhängig und müssen getrennt beendet werden.
          </p>
          <p>
            Dein Lastschriftmandat löschen wir spätestens 14 Monate nach der
            letzten darauf gestützten Abbuchung; so lange müssen wir es nach
            den Regeln des SEPA-Verfahrens für eventuelle Rückfragen
            vorhalten.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            6.3 Anfragen und Warteliste
          </h3>
          <p>
            Weil an einzelnen Höfen nicht immer Plätze frei sind, führen wir
            eine Warteliste. Anfragen über unser Kontaktformular und
            Wartelisten-Einträge werden spätestens{" "}
            <strong>24 Monate</strong> nach dem letzten Kontakt gelöscht,
            sofern daraus kein Teilnahmeverhältnis entsteht (Art. 6 Abs. 1 lit.
            b DSGVO, vorvertragliche Maßnahmen). Du kannst die Löschung
            jederzeit auch vorher verlangen.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            6.4 Newsletter, Fotos und technische Daten
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Newsletter:</strong> Du kannst dich jederzeit selbst
              austragen — über den Link in jedem Newsletter oder per E-Mail.
              Deine Adresse wird dann aus dem Verteiler gelöscht. Den Nachweis
              deiner Anmeldung bewahren wir noch drei Jahre auf, um im
              Streitfall belegen zu können, dass die Anmeldung rechtmäßig war.
            </li>
            <li>
              <strong>Fotos:</strong> Wenn du der Verwendung von Fotos im
              Rahmen der Öffentlichkeitsarbeit zugestimmt hast, kannst du diese
              Einwilligung jederzeit widerrufen (Art. 7 Abs. 3 DSGVO). Der
              Widerruf wirkt für die Zukunft: Wir nehmen die Fotos von unserer
              Webseite und aus unseren digitalen Kanälen. Bereits gedruckte
              Flyer, Plakate oder Broschüren können wir nicht zurückrufen.
            </li>
            <li>
              <strong>Server-Logfiles:</strong> werden spätestens nach 7 Tagen
              automatisch gelöscht.
            </li>
          </ul>

          <p className="mt-4">
            Eine Löschung kannst du jederzeit unter{" "}
            <a
              href="mailto:webmaster@stadt-land-beides.de"
              className="text-primary hover:underline"
            >
              webmaster@stadt-land-beides.de
            </a>{" "}
            beauftragen. Wir melden uns innerhalb eines Monats bei dir (Art. 12
            Abs. 3 DSGVO) und teilen dir mit, welche Daten gelöscht wurden und
            welche wir aufgrund gesetzlicher Pflichten noch aufbewahren müssen.
          </p>

          {/* 7. Cookies */}
          <h2 className="text-xl font-semibold mt-10 mb-4">
            7. Cookies und Tracking
          </h2>
          <p>
            Diese Webseite verwendet ausschließlich technisch notwendige
            Cookies im Sinne von § 25 Abs. 2 Nr. 2 TDDDG. Tracking-Cookies,
            Google Analytics oder vergleichbare Analyse-, Werbe- und
            Reichweitenmessdienste werden nicht eingesetzt. Es werden auch
            keine Cookies von Drittanbietern gesetzt.
          </p>
          <p>
            Auch die Schriftarten der Webseite liegen auf unserem eigenen
            Server. Es werden also keine Google Fonts oder vergleichbare
            Schriftdienste von fremden Servern nachgeladen — damit wird beim
            Aufruf der Seite keine IP-Adresse an Google übertragen. Eine
            Ausnahme ist die Depot-Karte, siehe Ziffer 9.2.
          </p>
          <p>
            Du kannst in deinen Browser-Einstellungen festlegen, ob Cookies
            zugelassen werden. Bei deaktivierten Cookies können einzelne
            Funktionen eingeschränkt sein.
          </p>

          {/* 8. Rechte */}
          <h2 className="text-xl font-semibold mt-10 mb-4">
            8. Deine Rechte
          </h2>
          <p>Nach der DSGVO stehen dir folgende Rechte zu:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Auskunft (Art. 15 DSGVO):</strong> Du kannst eine
              Bestätigung verlangen, ob und welche Daten verarbeitet werden.
            </li>
            <li>
              <strong>Berichtigung (Art. 16 DSGVO):</strong> Du hast das Recht
              auf Berichtigung unrichtiger Daten.
            </li>
            <li>
              <strong>Löschung (Art. 17 DSGVO):</strong> Du kannst die Löschung
              deiner Daten verlangen, soweit keine Aufbewahrungspflichten
              bestehen.
            </li>
            <li>
              <strong>Einschränkung (Art. 18 DSGVO):</strong> Du kannst die
              Einschränkung der Verarbeitung verlangen.
            </li>
            <li>
              <strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Du hast das
              Recht, deine Daten in einem gängigen Format zu erhalten.
            </li>
            <li>
              <strong>Widerspruch (Art. 21 DSGVO):</strong> Du kannst der
              Verarbeitung, die wir auf ein berechtigtes Interesse stützen,
              jederzeit widersprechen.
            </li>
            <li>
              <strong>Widerruf (Art. 7 Abs. 3 DSGVO):</strong> Erteilte
              Einwilligungen kannst du jederzeit mit Wirkung für die Zukunft
              widerrufen.
            </li>
            <li>
              <strong>Beschwerde (Art. 77 DSGVO):</strong> Du kannst dich bei
              der zuständigen Aufsichtsbehörde beschweren:{" "}
              <br />
              Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)
              <br />
              Promenade 18, 91522 Ansbach
            </li>
          </ul>

          <div className="border-l-4 border-primary bg-gray-50 p-5 mt-6">
            <p className="font-semibold mb-2">
              Widerspruchsrecht gegen Direktwerbung
            </p>
            <p className="mb-0">
              Du kannst der Verwendung deiner Daten für Direktwerbung
              jederzeit widersprechen — ohne Angabe von Gründen und ohne
              dass dir dadurch Kosten entstehen. Nach einem solchen
              Widerspruch verwenden wir deine Daten nicht mehr für
              Werbezwecke (Art. 21 Abs. 2 und 3 DSGVO). Eine kurze
              E-Mail an{" "}
              <a
                href="mailto:Team.Koordination@stadt-land-beides.de"
                className="text-primary hover:underline"
              >
                Team.Koordination@stadt-land-beides.de
              </a>{" "}
              genügt.
            </p>
          </div>

          <p className="mt-6">
            Eine automatisierte Entscheidungsfindung einschließlich Profiling
            nach Art. 22 DSGVO findet nicht statt. Wir bewerten dich also nicht
            automatisiert und treffen keine Entscheidungen über dich, die
            allein eine Maschine fällt.
          </p>

          {/* 9. Drittanbieter */}
          <h2 className="text-xl font-semibold mt-10 mb-4">
            9. Eingesetzte Dienste und Drittanbieter
          </h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">9.1 Hosting</h3>
          <p>
            Unsere Webseite wird gehostet bei ALL-INKL.COM — Neue Medien
            Münnich, Hauptstraße 68, D-02742 Friedersdorf. Hierbei können
            Serverlogfiles (IP-Adresse, Zugriffszeiten, Browsertyp) erhoben
            werden. Rechtsgrundlage ist unser berechtigtes Interesse am
            sicheren und störungsfreien Betrieb der Webseite (Art. 6 Abs. 1
            lit. f DSGVO). Mit dem Hoster besteht ein Vertrag über
            Auftragsverarbeitung nach Art. 28 DSGVO. Logfiles werden spätestens
            nach 7 Tagen gelöscht.
          </p>
          <p>
            Datenschutzinformationen des Hosters:{" "}
            <a
              href="https://all-inkl.com/datenschutzinformationen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              all-inkl.com/datenschutzinformationen
            </a>
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            9.2 OpenStreetMap
          </h3>
          <p>
            Wir verwenden auf dieser Website Kartenmaterial von OpenStreetMap
            (OSMF, 132 Maney Hill Road, Sutton Coldfield, West Midlands, B72
            1JU, United Kingdom). Bei der Nutzung können IP-Adressen an die
            Tile-Server von OpenStreetMap übertragen werden. Die Verarbeitung
            erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
          </p>
          <p>
            Datenschutzinformationen:{" "}
            <a
              href="https://wiki.osmfoundation.org/wiki/Privacy_Policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              wiki.osmfoundation.org/wiki/Privacy_Policy
            </a>
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            9.3 Buchhaltung (Lexware Office)
          </h3>
          <p>
            Zur Verarbeitung und Archivierung von Zahlungsvorgängen verwenden
            wir „Lexware Office" (früher „lexoffice") der Haufe-Lexware GmbH
            &amp; Co. KG, Munzinger Straße 9, 79111 Freiburg. Dort verarbeitet
            werden Name, Adresse, Kontodaten, Beitragshöhe und die
            Zahlungsvorgänge der Ernteteiler und Mitglieder.
          </p>
          <p>
            Rechtsgrundlage ist die Erfüllung des Teilnahme- bzw.
            Mitgliedsverhältnisses (Art. 6 Abs. 1 lit. b DSGVO) sowie die
            Erfüllung unserer handels- und steuerrechtlichen
            Aufbewahrungspflichten (Art. 6 Abs. 1 lit. c DSGVO i.V.m. § 257 HGB,
            § 147 AO). Mit Haufe-Lexware besteht ein Vertrag über
            Auftragsverarbeitung nach Art. 28 DSGVO. Die Daten werden in
            Rechenzentren in Deutschland (Raum Frankfurt am Main) verarbeitet;
            eine Übermittlung in Drittländer findet nicht statt.
          </p>
          <p>
            Datenschutzinformationen:{" "}
            <a
              href="https://www.lexware.de/datenschutz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              lexware.de/datenschutz
            </a>
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            9.4 Keine Analyse- und Social-Media-Dienste
          </h3>
          <p>
            Wir setzen keine Webanalyse (etwa Google Analytics oder Matomo),
            keine Werbenetzwerke und keine Social-Media-Plugins ein. Es gibt
            auf dieser Webseite keine „Gefällt mir"-Buttons und keine
            eingebetteten Inhalte von Facebook, Instagram oder YouTube.
          </p>

          {/* 10. Aktualität */}
          <h2 className="text-xl font-semibold mt-10 mb-4">
            10. Aktualität dieser Datenschutzerklärung
          </h2>
          <p>
            Diese Datenschutzerklärung ist aktuell gültig (Stand: Oktober 2026).
            Durch Weiterentwicklung unserer Webseite oder aufgrund geänderter
            gesetzlicher Bestimmungen kann eine Anpassung erforderlich werden.
            Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf dieser
            Seite abgerufen werden.
          </p>
        </div>
      </section>
    </div>
  );
}
