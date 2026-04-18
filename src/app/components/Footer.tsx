import { Link } from "react-router";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-solawi-blue text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Über uns + Hahn */}
          <div>
            <img src="/SLB.gif" alt="Stadt, Land, Beides." className="h-10 mb-4" />
            <p className="text-foreground/70 text-sm mb-5">
              Solidarische Landwirtschaft für eine nachhaltige und regionale Ernährung.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-cta transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-cta transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-accent text-lg mb-4">Schnellzugriff</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/solidarische-landwirtschaft" className="text-foreground/70 hover:text-cta transition-colors hover-underline-pink inline-block">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/hoefe-und-ernteanteile" className="text-foreground/70 hover:text-cta transition-colors hover-underline-pink inline-block">
                  Höfe & Ernteanteile
                </Link>
              </li>
              <li>
                <Link to="/mitmachen" className="text-foreground/70 hover:text-cta transition-colors hover-underline-pink inline-block">
                  Mitmachen
                </Link>
              </li>
              <li>
                <Link to="/kalender" className="text-foreground/70 hover:text-cta transition-colors hover-underline-pink inline-block">
                  Kalender
                </Link>
              </li>
            </ul>
          </div>

          {/* Weitere Links */}
          <div>
            <h3 className="font-accent text-lg mb-4">Weitere Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/70 hover:text-cta transition-colors hover-underline-pink inline-block">
                  Bildergalerie
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-cta transition-colors hover-underline-pink inline-block">
                  Presse und Partner
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-cta transition-colors hover-underline-pink inline-block">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-cta transition-colors hover-underline-pink inline-block">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-cta transition-colors hover-underline-pink inline-block">
                  Datenschutzerklärung
                </a>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-accent text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                <a href="mailto:info@stadt-land-beides.de" className="text-foreground/70 hover:text-cta transition-colors">
                  info@stadt-land-beides.de
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                <span className="text-foreground/70">+49 (0) 123 456789</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                <span className="text-foreground/70">
                  Musterstraße 123<br />
                  12345 Musterstadt
                </span>
              </li>
            </ul>
            <img src="/kontakt.jpg" alt="" className="h-24 object-contain mt-4 opacity-60" />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-foreground/15 text-center text-sm text-foreground/50">
          <p>&copy; 2026 Stadt, Land, Beides. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
