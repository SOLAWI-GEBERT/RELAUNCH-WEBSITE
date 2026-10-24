import { useState, type FormEvent } from "react";

const inputClass =
  "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent";

type Aktion = "abmelden" | "aendern";

// Platzhalter für den späteren Newsletter-Dienst: versendet nichts.
export function Newsletter() {
  const [erledigt, setErledigt] = useState<Aktion | null>(null);

  const handleSubmit = (aktion: Aktion) => (e: FormEvent) => {
    e.preventDefault();
    setErledigt(aktion);
  };

  return (
    <div className="bg-white">
      <section className="bg-solawi-salmon-light py-16 wave-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge-frech mb-4 inline-block">Newsletter</span>
          <h1 className="text-5xl mb-4 text-foreground">Newsletter verwalten</h1>
          <p className="text-xl text-foreground/80">
            Abmelden oder die E-Mail-Adresse ändern
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <form
            onSubmit={handleSubmit("abmelden")}
            className="bg-solawi-gray rounded-lg p-8 space-y-4"
          >
            <h2 className="text-2xl font-bold">Abmelden</h2>
            <label htmlFor="nl-abmelden" className="block text-sm font-medium text-gray-700">
              Deine E-Mail-Adresse
            </label>
            <input id="nl-abmelden" type="email" required className={inputClass} />
            <button
              type="submit"
              className="bg-cta text-white px-6 py-3 font-semibold hover:bg-cta-hover transition-colors font-accent"
            >
              Abmelden
            </button>
            {erledigt === "abmelden" && (
              <p role="status" className="text-gray-700">
                Du erhältst eine Bestätigung per E-Mail.
              </p>
            )}
          </form>

          <form
            onSubmit={handleSubmit("aendern")}
            className="bg-solawi-gray rounded-lg p-8 space-y-4"
          >
            <h2 className="text-2xl font-bold">Adresse ändern</h2>
            <label htmlFor="nl-alt" className="block text-sm font-medium text-gray-700">
              Bisherige E-Mail-Adresse
            </label>
            <input id="nl-alt" type="email" required className={inputClass} />
            <label htmlFor="nl-neu" className="block text-sm font-medium text-gray-700">
              Neue E-Mail-Adresse
            </label>
            <input id="nl-neu" type="email" required className={inputClass} />
            <button
              type="submit"
              className="bg-cta text-white px-6 py-3 font-semibold hover:bg-cta-hover transition-colors font-accent"
            >
              Adresse ändern
            </button>
            {erledigt === "aendern" && (
              <p role="status" className="text-gray-700">
                Du erhältst eine Bestätigung an die neue Adresse.
              </p>
            )}
          </form>

          <p className="md:col-span-2 text-sm text-gray-500 text-center">
            Platzhalter im Prototyp: Die Formulare versenden nichts.
          </p>
        </div>
      </section>
    </div>
  );
}
