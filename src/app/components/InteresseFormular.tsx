import { useState, type FormEvent } from "react";
import { Link } from "react-router";
import { CheckCircle2 } from "lucide-react";
import { depots } from "../pages/Depots";
import { hoefe } from "../data/hoefe";

const THEMA_INTERESSE = "Ich möchte Ernteteiler zur Probe werden";
const themen = [
  THEMA_INTERESSE,
  "Ich habe nur eine Frage",
  "Ich möchte Infos zur nächsten Veranstaltung",
];

const inputClass =
  "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent";
const labelClass = "block text-sm font-medium text-gray-700 mb-2";

// Platzhalter für das spätere Joomla-Formularmodul: versendet nichts.
export function InteresseFormular() {
  const [thema, setThema] = useState("");
  const [gesendet, setGesendet] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setGesendet(true);
  };

  if (gesendet) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8 text-center" role="status">
        <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="mb-3">Danke für deine Nachricht!</h3>
        <p className="text-gray-700">
          Das Team meldet sich bei dir mit einer kurzen Beratung. Wenn du dich
          entschieden hast, schick uns die ausgefüllte Teilnahmevereinbarung per Mail.
        </p>
        <p className="text-gray-700 mt-3">
          Wir bearbeiten Anfragen mindestens einmal pro Woche.
        </p>
        <p className="text-sm text-gray-500 mt-4">
          Platzhalter im Prototyp: Es wurde nichts versendet.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="if-thema" className={labelClass}>
            Worum geht es? *
          </label>
          <select
            id="if-thema"
            required
            value={thema}
            onChange={(e) => setThema(e.target.value)}
            className={inputClass}
          >
            <option value="" disabled>
              Bitte wählen...
            </option>
            {themen.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="if-name" className={labelClass}>
              Name
            </label>
            <input id="if-name" type="text" className={inputClass} placeholder="Dein Name" />
          </div>
          <div>
            <label htmlFor="if-email" className={labelClass}>
              E-Mail *
            </label>
            <input
              id="if-email"
              type="email"
              required
              className={inputClass}
              placeholder="deine@email.de"
            />
          </div>
        </div>

        {thema === THEMA_INTERESSE && (
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="if-depot" className={labelClass}>
                Wunsch-Depot
              </label>
              <select id="if-depot" defaultValue="" className={inputClass}>
                <option value="">Noch offen</option>
                {depots.map((depot) => (
                  <option key={depot.name} value={depot.name}>
                    {depot.name}
                  </option>
                ))}
              </select>
            </div>
            <fieldset>
              <legend className={labelClass}>Hof, der dich interessiert</legend>
              <div className="space-y-2">
                {Object.values(hoefe).map((hof) => (
                  <label key={hof.name} className="flex items-center gap-3 text-gray-700">
                    <input type="checkbox" name="hof" value={hof.name} className="w-5 h-5 text-primary" />
                    {hof.name}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        )}

        <div>
          <label htmlFor="if-nachricht" className={labelClass}>
            Nachricht
          </label>
          <textarea
            id="if-nachricht"
            rows={5}
            className={inputClass}
            placeholder="Deine Nachricht..."
          />
        </div>

        <label className="flex items-start gap-3">
          <input type="checkbox" required className="w-5 h-5 text-primary mt-1" />
          <span className="text-gray-700">
            Ich habe die <Link to="/datenschutz" className="underline">Datenschutzerklärung</Link> gelesen
            und bin einverstanden, dass meine Angaben zur Beantwortung verwendet werden. *
          </span>
        </label>

        <button
          type="submit"
          className="w-full bg-cta text-white px-6 py-3 font-semibold hover:bg-cta-hover transition-colors font-accent"
        >
          Nachricht senden
        </button>
        <p className="text-sm text-gray-500 text-center">
          Platzhalter im Prototyp: Das Formular versendet noch nichts.
        </p>
      </form>
    </div>
  );
}
