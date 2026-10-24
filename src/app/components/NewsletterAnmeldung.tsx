import { useState, type FormEvent } from "react";
import { Link } from "react-router";

// Platzhalter für den späteren Newsletter-Dienst: versendet nichts.
export function NewsletterAnmeldung() {
  const [gesendet, setGesendet] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setGesendet(true);
  };

  return (
    <div>
      <h6 className="mb-4">Newsletter</h6>
      {gesendet ? (
        <div role="status" className="space-y-2">
          <p>Fast geschafft: Wir schicken dir eine Bestätigungs-E-Mail.</p>
          <p className="text-sm opacity-80">Platzhalter im Prototyp: Es wurde nichts versendet.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <p>Etwa einmal im Monat, jederzeit abbestellbar.</p>
          <label htmlFor="nl-email" className="sr-only">
            E-Mail-Adresse
          </label>
          <input
            id="nl-email"
            type="email"
            required
            placeholder="deine@email.de"
            className="w-full px-3 py-2 bg-white border border-foreground/20 rounded-lg"
          />
          <label className="flex items-start gap-2 text-sm">
            <input type="checkbox" required className="w-4 h-4 mt-0.5" />
            <span>
              Ich habe die{" "}
              <Link to="/datenschutz" className="underline">
                Datenschutzerklärung
              </Link>{" "}
              gelesen.
            </span>
          </label>
          <button
            type="submit"
            className="bg-cta text-white px-5 py-2 font-semibold hover:bg-cta-hover transition-colors font-accent"
          >
            Abonnieren
          </button>
          <p className="text-sm opacity-80">Platzhalter im Prototyp: Das Formular versendet nichts.</p>
        </form>
      )}
      <p className="mt-3 text-sm">
        <Link to="/newsletter" className="underline hover:text-accent">
          Newsletter verwalten
        </Link>
      </p>
    </div>
  );
}
