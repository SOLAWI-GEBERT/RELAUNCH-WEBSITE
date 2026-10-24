import { Mail, Sun, Snowflake, Sprout } from "lucide-react";
import { ErnteanteilAbschnitt, ErnteanteilSeite } from "../../components/ErnteanteilSeite";
import { VerfuegbarkeitsBadge } from "../../components/VerfuegbarkeitsBadge";
import { ernteanteilNach, gemueseKachel } from "../../data/ernteanteile";

const winter = ernteanteilNach("tristan-winter")!;
const sommer = ernteanteilNach("tristan-sommer")!;

export function TristanGemuese() {
  return (
    <ErnteanteilSeite anteil={gemueseKachel}>
      <div className="flex gap-3 text-sm text-gray-600 bg-solawi-green/20 p-4 rounded-lg mb-8">
        <Sprout className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <p>
          <strong>Winter oder Sommer — oder beides:</strong> Wir haben das Gemüse in zwei
          Ernteanteile aufgeteilt. Das ist vor allem eine Erleichterung für alle mit eigenem
          Garten: Du kannst nur die Jahreszeit buchen, in der dein Garten wenig hergibt.
        </p>
      </div>

      <div className="space-y-8">
        {[
          { anteil: winter, id: "winter", Icon: Snowflake, phase: "Oktober – März" },
          { anteil: sommer, id: "sommer", Icon: Sun, phase: "April – September" },
        ].map(({ anteil, id, Icon, phase }) => (
          <div
            key={id}
            id={id}
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 scroll-mt-24"
          >
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <Icon className="w-6 h-6 text-primary" />
              <h2 className="text-3xl text-foreground">{anteil.titel}</h2>
              <span className="text-sm text-gray-500">{phase}</span>
              <VerfuegbarkeitsBadge verfuegbarkeit={anteil.verfuegbarkeit} />
            </div>
            <ErnteanteilAbschnitt anteil={anteil} ebene="h3" />
          </div>
        ))}

        <div className="flex gap-3 text-sm text-gray-600 bg-solawi-blue/10 p-4 rounded-lg">
          <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <p>
            <strong>So bleibst du informiert:</strong> 2 Tage vor Abholung erhältst du eine
            Mail mit dem Kisteninhalt und Neuigkeiten vom Hof. Am Abholtag kommt per
            WhatsApp oder Signal eine Nachricht mit den genauen Mengen.
          </p>
        </div>
      </div>
    </ErnteanteilSeite>
  );
}
