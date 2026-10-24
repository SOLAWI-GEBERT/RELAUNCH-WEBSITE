import { Link } from "react-router";
import { Facebook, Instagram, Mail, MapPin } from "lucide-react";
import { NewsletterAnmeldung } from "./NewsletterAnmeldung";

const linkClass = "hover:text-accent transition-colors hover-underline-pink inline-block";

export function Footer() {
  return (
    // Footer wie Helix-Preset: footer_bg #97b0c7, Text/Links #4a4a4a, Hover #8a2b7d
    <footer className="bg-solawi-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Über uns + Hahn */}
          <div>
            <img src="/SLB.gif" alt="Stadt, Land, Beides." className="h-9 mb-4" />
            <p className="mb-5">
              Solidarische Landwirtschaft für eine nachhaltige und regionale Ernährung.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/SoLaWi.Nbg/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cta transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-cta transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div id="newsletter" className="mt-8">
              <NewsletterAnmeldung />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="mb-4">Schnellzugriff</h6>
            <ul className="space-y-2">
              <li><Link to="/solidarische-landwirtschaft" className={linkClass}>Über uns</Link></li>
              <li><Link to="/ernteanteile" className={linkClass}>Ernteanteile</Link></li>
              <li><Link to="/mitmachen" className={linkClass}>Mitmachen</Link></li>
              <li><Link to="/depots" className={linkClass}>Depots</Link></li>
              <li><Link to="/mitmachen#events" className={linkClass}>Termine & Aktionen</Link></li>
              <li><Link to="/haeufige-fragen#antwort-nicht-dabei" className={linkClass}>Kontakt</Link></li>
            </ul>
          </div>

          {/* Rechtliches & Info */}
          <div>
            <h6 className="mb-4">Rechtliches</h6>
            <ul className="space-y-2">
              <li><Link to="/impressum" className={linkClass}>Impressum</Link></li>
              <li><Link to="/datenschutz" className={linkClass}>Datenschutzerklärung</Link></li>
            </ul>

            <h6 className="mb-4 mt-8">Verein</h6>
            <ul className="space-y-1 meta">
              <li>Registergericht Nürnberg: VR 202062</li>
              <li>USt-IdNr.: DE419541492</li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h6 className="mb-4">Kontakt</h6>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                <a href="mailto:Team.Koordination@stadt-land-beides.de" className="hover:text-accent transition-colors break-all">
                  Team.Koordination@stadt-land-beides.de
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                <span>
                  Findelwiesenstr. 25<br />
                  90478 Nürnberg
                </span>
              </li>
            </ul>
            <img src="/kontakt.jpg" alt="" className="h-24 object-contain mt-4 opacity-60" />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-foreground/15 text-center meta">
          <p>&copy; 2026 Stadt, Land, Beides. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
