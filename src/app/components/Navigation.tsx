import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

interface SubItem {
  title: string;
  path: string;
  subItems?: SubItem[];
  isCategory?: boolean;
}

interface NavItem {
  title: string;
  path: string;
  subItems?: SubItem[];
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [mobileOpenSubDropdown, setMobileOpenSubDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navItems: NavItem[] = [
    {
      title: "Start",
      path: "/",
      subItems: [
        { title: "SoLaWi in 60 Sekunden", path: "/#solawi-60-sekunden" },
        { title: "So funktioniert's", path: "/#so-funktionierts" },
        { title: "Was bekomme ich?", path: "/#was-bekomme-ich" },
        { title: "Was kostet das?", path: "/#kosten-beitragsmodell" },
        { title: "Depot in deiner Nähe", path: "/#depot-finden" },
        { title: "Häufige Fragen", path: "/#faq" },
        { title: "Aktuelles", path: "/#aktuelles" },
      ],
    },
    {
      title: "Höfe & Ernteanteil",
      path: "/hoefe-und-ernteanteile",
      subItems: [
        {
          title: "Deine Höfe",
          path: "#",
          isCategory: true,
          subItems: [
            { title: "Demeterhof Hederer (Sommergemüse & Obst)", path: "/hoefe-und-ernteanteile#hederer" },
            { title: "Biohof Tristan (Wintergemüse)", path: "/hoefe-und-ernteanteile#tristans" },
            { title: "Demeterhof Walz (Fleisch, Eier & Ur-Getreide)", path: "/hoefe-und-ernteanteile#walz" },
            { title: "Kirschgarten (Bio-Beeren)", path: "/hoefe-und-ernteanteile#kirschgarten" },
          ]
        },
        {
          title: "Deine Kooperationen",
          path: "#",
          isCategory: true,
          subItems: [
            { title: "Gallini Fellici", path: "/hoefe-und-ernteanteile#gallini-fellici" },
          ]
        },
      ],
    },
    {
      title: "Mitmachen",
      path: "/mitmachen",
      subItems: [
        { title: "So wirst du Mitglied", path: "/mitmachen#ueberblick" },
        { title: "Was erwartet dich?", path: "/mitmachen#erwartungen" },
        {
          title: "Dein Beitrag",
          path: "#",
          isCategory: true,
          subItems: [
            { title: "Ernteanteile & Kosten", path: "/mitmachen#ernteteile" },
            { title: "Teilnahmebedingungen", path: "/mitmachen#teilnahme" },
          ]
        },
        {
          title: "Dein Depot",
          path: "#",
          isCategory: true,
          subItems: [
            { title: "Wähle dein Depot", path: "/mitmachen#depots" },
            { title: "Adressen, Zeiten & Karte", path: "/lieferung-kalender#karte" },
          ]
        },
        {
          title: "Dein Engagement",
          path: "#",
          isCategory: true,
          subItems: [
            { title: "Mitarbeit & Engagement", path: "/mitmachen#mitarbeit-engagement" },
            { title: "Ehrenamtliche Rollen", path: "/mitmachen#rollen" },
            { title: "Unser Verein", path: "/mitmachen#vereinsarbeit" },
          ]
        },
        {
          title: "Deine Gemeinschaft",
          path: "#",
          isCategory: true,
          subItems: [
            { title: "Termine & Aktionen", path: "/mitmachen#termine" },
            { title: "Ansprechpartner & Kontakt", path: "/mitmachen#kontakt" },
          ]
        },
      ],
    },
    {
      title: "Lieferung",
      path: "/lieferung-kalender",
      subItems: [
        { title: "Höfe & Depots (Karte)", path: "/lieferung-kalender#karte" },
        { title: "Depot-Öffnungszeiten", path: "/lieferung-kalender#depots" },
        { title: "Abholung & Depot-Regeln", path: "/lieferung-kalender#depot-hinweise" },
        { title: "Lieferrhythmus", path: "/lieferung-kalender#anlieferung" },
        { title: "Fragen für Ernteteiler", path: "/lieferung-kalender#faq" },
        { title: "Kontaktformular", path: "/kontakt-anmeldung#kontakt" },
      ],
    },
  ];

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileOpenDropdown(null);
    setMobileOpenSubDropdown(null);
  };

  const toggleMobileDropdown = (path: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === path ? null : path);
  };

  const toggleMobileSubDropdown = (path: string) => {
    setMobileOpenSubDropdown(mobileOpenSubDropdown === path ? null : path);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center z-50">
            <img src="/SLB.gif" alt="Stadt, Land, Beides." className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1 items-center">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => item.subItems && setOpenDropdown(item.path)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`px-4 py-6 flex items-center gap-1 transition-all font-semibold ${
                    location.pathname === item.path
                      ? "text-black"
                      : "text-[#767676] hover:text-accent"
                  }`}
                >
                  {item.title}
                  {item.subItems && <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.path ? 'rotate-180' : ''}`} />}
                </Link>

                {/* Dropdown — pt-0 damit kein Hover-Gap entsteht */}
                {item.subItems && openDropdown === item.path && (
                  <div className="absolute left-0 top-full w-80 bg-white shadow-2xl py-3 z-50 max-h-[80vh] overflow-y-auto border border-gray-200">
                    {item.subItems.map((subItem) => (
                      <div key={subItem.path}>
                        {subItem.isCategory ? (
                          // Category header (not clickable)
                          <div>
                            <div className="px-4 py-2 text-sm font-bold text-[#1d1f24] bg-gray-100 mx-2 my-1">
                              {subItem.title}
                            </div>
                            {/* Category items */}
                            {subItem.subItems && (
                              <div className="pl-2">
                                {subItem.subItems.map((categoryItem) => (
                                  <div key={categoryItem.path}>
                                    <Link
                                      to={categoryItem.path}
                                      className="block px-4 py-2 text-sm text-[#1d1f24] hover:text-accent mx-2 transition-all hover:translate-x-1"
                                    >
                                      {categoryItem.title}
                                    </Link>
                                    {/* Sub-items of category item */}
                                    {categoryItem.subItems && (
                                      <div className="pl-4">
                                        {categoryItem.subItems.map((subSubItem) => (
                                          <Link
                                            key={subSubItem.path}
                                            to={subSubItem.path}
                                            className="block px-4 py-1.5 text-sm text-gray-600 hover:text-accent mx-2 transition-all hover:translate-x-1"
                                          >
                                            • {subSubItem.title}
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          // Regular menu item
                          <Link
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-[#1d1f24] hover:text-accent mx-2 transition-all hover:translate-x-1"
                          >
                            {subItem.title}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Desktop CTA Button */}
            <Link
              to="/kontakt-anmeldung#anmeldung"
              className="ml-4 bg-cta hover:bg-cta-hover text-white px-5 py-2 font-accent transition-colors text-sm"
            >
              Ernteteiler werden
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#767676] hover:text-accent z-50 transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Navigation Sidebar (from left) */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 pt-24">
          {/* Mobile Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="block mb-8"
          >
            <img src="/SLB.gif" alt="Stadt, Land, Beides." className="h-8" />
          </Link>

          {/* Mobile Menu Items */}
          <nav className="space-y-2">
            {navItems.map((item) => (
              <div key={item.path} className="border-b border-gray-100 pb-2">
                <div className="flex items-center justify-between">
                  <Link
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={`flex-1 px-4 py-3 rounded-md transition-colors ${
                      location.pathname === item.path
                        ? "bg-primary/10 text-foreground font-semibold"
                        : "text-gray-700 hover:bg-secondary/20"
                    }`}
                  >
                    {item.title}
                  </Link>
                  {item.subItems && (
                    <button
                      onClick={() => toggleMobileDropdown(item.path)}
                      className="p-3 text-gray-600 hover:text-accent"
                      aria-label="Toggle submenu"
                    >
                      <ChevronRight 
                        className={`w-5 h-5 transition-transform ${
                          mobileOpenDropdown === item.path ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>
                
                {/* Mobile Submenu */}
                {item.subItems && mobileOpenDropdown === item.path && (
                  <div className="mt-2 ml-2 space-y-1">
                    {item.subItems.map((subItem) => (
                      <div key={subItem.path}>
                        {subItem.isCategory ? (
                          // Category header in mobile (not clickable)
                          <div>
                            <div className="px-3 py-2 text-sm font-semibold text-[#1d1f24] bg-gray-100 rounded-md">
                              {subItem.title}
                            </div>
                            {/* Category items in mobile */}
                            {subItem.subItems && (
                              <div className="ml-2 mt-1 space-y-1">
                                {subItem.subItems.map((categoryItem) => (
                                  <div key={categoryItem.path}>
                                    <div className="flex items-center justify-between">
                                      <Link
                                        to={categoryItem.path}
                                        onClick={closeMobileMenu}
                                        className="flex-1 px-3 py-2 text-sm text-gray-700 hover:bg-secondary/20 hover:text-foreground rounded-md transition-colors"
                                      >
                                        {categoryItem.title}
                                      </Link>
                                      {categoryItem.subItems && (
                                        <button
                                          onClick={() => toggleMobileSubDropdown(categoryItem.path)}
                                          className="p-2 text-gray-500 hover:text-accent"
                                          aria-label="Toggle sub-submenu"
                                        >
                                          <ChevronRight 
                                            className={`w-4 h-4 transition-transform ${
                                              mobileOpenSubDropdown === categoryItem.path ? 'rotate-90' : ''
                                            }`}
                                          />
                                        </button>
                                      )}
                                    </div>
                                    {/* Sub-items of category item in mobile */}
                                    {categoryItem.subItems && mobileOpenSubDropdown === categoryItem.path && (
                                      <div className="ml-4 space-y-1">
                                        {categoryItem.subItems.map((subSubItem) => (
                                          <Link
                                            key={subSubItem.path}
                                            to={subSubItem.path}
                                            onClick={closeMobileMenu}
                                            className="block px-3 py-1.5 text-sm text-gray-600 hover:bg-secondary/20 hover:text-foreground rounded-md transition-colors"
                                          >
                                            • {subSubItem.title}
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          // Regular menu item in mobile
                          <Link
                            to={subItem.path}
                            onClick={closeMobileMenu}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-secondary/20 hover:text-foreground rounded-md transition-colors"
                          >
                            {subItem.title}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="mt-8 space-y-3">
            <Link
              to="/kontakt-anmeldung#anmeldung"
              onClick={closeMobileMenu}
              className="block w-full bg-cta hover:bg-cta-hover text-white text-center px-6 py-3 transition-colors font-accent"
            >
              Ernteteiler werden
            </Link>
            <Link
              to="/lieferung-kalender#kalender"
              onClick={closeMobileMenu}
              className="block w-full border-2 border-primary text-primary hover:bg-secondary/20 text-center px-6 py-3 rounded-lg transition-colors"
            >
              Veranstaltungen
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}