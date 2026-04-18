import { Link } from "react-router";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#333] text-[#aaa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Über uns */}
          <div>
            <img src="/SLB.gif" alt="Stadt, Land, Beides." className="h-8 mb-4 brightness-0 invert" />
            <p className="text-[#aaa] text-sm mb-4">
              Solidarische Landwirtschaft für eine nachhaltige und regionale Ernährung.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Schnellzugriff</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/solidarische-landwirtschaft" className="text-[#aaa] hover:text-white transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/hoefe-und-ernteanteile" className="text-[#aaa] hover:text-white transition-colors">
                  Höfe & Ernteanteile
                </Link>
              </li>
              <li>
                <Link to="/mitmachen" className="text-[#aaa] hover:text-white transition-colors">
                  Mitmachen
                </Link>
              </li>
              <li>
                <Link to="/kalender" className="text-[#aaa] hover:text-white transition-colors">
                  Kalender
                </Link>
              </li>
            </ul>
          </div>

          {/* Weitere Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Weitere Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-[#aaa] hover:text-white transition-colors">
                  Bildergalerie
                </a>
              </li>
              <li>
                <a href="#" className="text-[#aaa] hover:text-white transition-colors">
                  Presse und Partner
                </a>
              </li>
              <li>
                <a href="#" className="text-[#aaa] hover:text-white transition-colors">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="text-[#aaa] hover:text-white transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="text-[#aaa] hover:text-white transition-colors">
                  Datenschutzerklärung
                </a>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-[#aaa] flex-shrink-0 mt-0.5" />
                <a href="mailto:info@stadt-land-beides.de" className="text-[#aaa] hover:text-white transition-colors">
                  info@stadt-land-beides.de
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-[#aaa] flex-shrink-0 mt-0.5" />
                <span className="text-[#aaa]">+49 (0) 123 456789</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#aaa] flex-shrink-0 mt-0.5" />
                <span className="text-[#aaa]">
                  Musterstraße 123<br />
                  12345 Musterstadt
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-[#aaa]">
          <p>&copy; 2026 Stadt, Land, Beides. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
