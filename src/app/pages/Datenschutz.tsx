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
            Zusätzlich Befugte: Kassenwart, Hofkoordinatoren, Autoren der
            AK-Öffentlichkeitsarbeit
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

          <p className="font-semibold mt-4">Als Nutzer der Webseite:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Technisch notwendige Daten (IP-Adresse, Browsertyp,
              Zugriffszeiten) — werden nicht weiterverarbeitet
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
            <li>Mitglieder des Vereins</li>
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
              Mitgliedern.
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
              Darstellung und Verbesserung der Webseite, Beweiszwecke.
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
            Ein gleichzeitiger Widerspruch zur Verwendung der zur
            Vertragserfüllung notwendigen Daten und eine Teilnahme als
            Ernteteiler bzw. Mitglied ist ausgeschlossen.
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
              Nutzungsberechtigt: Hofkoordinatoren, Landwirte, Autoren der
              Öffentlichkeitsarbeit und der Wirtschaftskreis des Fördervereins.
              Eine Weitergabe an Dritte ist untersagt.
            </li>
            <li>
              Zur Lieferung werden Daten an das zuständige Depot weitergegeben.
            </li>
            <li>
              Zur Zahlungsabwicklung werden erforderliche Daten (Name,
              Kontodaten, Beitragshöhe) an das beauftragte Kreditinstitut
              weitergeleitet.
            </li>
          </ul>
          <p className="mt-4">
            Verarbeitungen in einem Drittland (außerhalb EU/EWR) erfolgen
            ausschließlich auf Grundlage der Art. 44–50 DSGVO, insbesondere
            auf Basis von Angemessenheitsbeschlüssen (z.B. EU-US Data Privacy
            Framework) oder Standardvertragsklauseln.
          </p>

          {/* 6. Datenlöschung */}
          <h2 className="text-xl font-semibold mt-10 mb-4">
            6. Datenlöschung
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Newsletter: Du kannst dich jederzeit selbst austragen — über den
              Link im Newsletter oder per E-Mail.
            </li>
            <li>
              Vertragsdaten werden gemäß Art. 17 und 18 DSGVO gelöscht, wenn sie
              nicht mehr erforderlich sind, es sei denn, gesetzliche
              Aufbewahrungspflichten bestehen (§ 257 HGB, § 147 AO: bis zu 10
              Jahre).
            </li>
            <li>
              Technische Daten beim Besuch der Webseite werden spätestens nach 7
              Tagen automatisch gelöscht.
            </li>
            <li>
              Explizite Löschung kann unter{" "}
              <a
                href="mailto:webmaster@stadt-land-beides.de"
                className="text-primary hover:underline"
              >
                webmaster@stadt-land-beides.de
              </a>{" "}
              beauftragt werden.
            </li>
          </ul>

          {/* 7. Cookies */}
          <h2 className="text-xl font-semibold mt-10 mb-4">
            7. Cookies und Tracking
          </h2>
          <p>
            Diese Webseite verwendet ausschließlich technisch notwendige
            Cookies. Tracking-Cookies, Google Analytics oder vergleichbare
            Analysedienste werden nicht eingesetzt. Cookies von Drittanbietern
            werden nicht geladen.
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
              Verarbeitung jederzeit widersprechen.
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

          {/* 9. Drittanbieter */}
          <h2 className="text-xl font-semibold mt-10 mb-4">
            9. Eingesetzte Dienste und Drittanbieter
          </h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">9.1 Hosting</h3>
          <p>
            Unsere Webseite wird gehostet bei ALL-INKL.COM — Neue Medien
            Münnich, Hauptstraße 68, D-02742 Friedersdorf. Hierbei können
            Serverlogfiles (IP-Adresse, Zugriffszeiten, Browsertyp) erhoben
            werden. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1
            lit. f DSGVO i.V.m. Art. 28 DSGVO. Logfiles werden spätestens nach
            7 Tagen gelöscht.
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
            9.3 Buchhaltung (Lexoffice)
          </h3>
          <p>
            Zur Verarbeitung und Archivierung von Zahlungsvorgängen verwenden
            wir den Service „Lexoffice" der Haufe-Lexware GmbH & Co. KG,
            Munzinger Straße 9, 79111 Freiburg. Die Verarbeitung erfolgt auf
            Grundlage von Art. 6 Abs. 1 lit. b und f DSGVO.
          </p>
          <p>
            Datenschutzinformationen:{" "}
            <a
              href="https://www.lexoffice.de/datenschutz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              lexoffice.de/datenschutz
            </a>
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            9.4 Google Analytics
          </h3>
          <p>
            Google Analytics ist auf unseren Webseiten{" "}
            <strong>deaktiviert</strong>. Es werden keine Daten an Google
            übertragen.
          </p>

          {/* 10. Aktualität */}
          <h2 className="text-xl font-semibold mt-10 mb-4">
            10. Aktualität dieser Datenschutzerklärung
          </h2>
          <p>
            Diese Datenschutzerklärung ist aktuell gültig (Stand: April 2026).
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
