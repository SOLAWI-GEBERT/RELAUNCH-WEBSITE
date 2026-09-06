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
        { title: "Was bekomme ich?", path: "/#was-bekomme-ich" },
      ],
    },
    {
      title: "Ernteanteile",
      path: "/ernteanteile",
      subItems: [
        {
          title: "Gemüse",
          path: "#",
          isCategory: true,
          subItems: [
            { title: "Sommergemüse (Demeterhof Hederer)", path: "/ernteanteile/hederer-sommer" },
            { title: "Wintergemüse (Biohof Tristan)", path: "/ernteanteile/tristans-winter" },
          ]
        },
        {
          title: "Obst",
          path: "#",
          isCategory: true,
          subItems: [
            { title: "Obst & Säfte (Demeterhof Hederer)", path: "/ernteanteile/hederer-obst" },
          ]
        },
        {
          title: "Beeren",
          path: "#",
          isCategory: true,
          subItems: [
            { title: "Bio..Beeren (Kirschgarten)", path: "/ernteanteile/kirschgarten-beeren" },
          ]
        },
        {
          title: "Getreide",
          path: "#",
          isCategory: true,
          subItems: [
            { title: "More..Ur-Getreide (Demeterhof Walz)", path: "/ernteanteile/walz-getreide" },
          ]
        },
        {
          title: "Eier",
          path: "#",
          isCategory: true,
          subItems: [
            { title: "More..Huhn (Demeterhof Walz)", path: "/ernteanteile/walz-huhn" },
          ]
        },
        {
          title: "Fleisch",
          path: "#",
          isCategory: true,
          subItems: [
            { title: "More..Bratgockerl (Demeterhof Walz)", path: "/ernteanteile/walz-bratgockerl" },
            { title: "More..Hack (Demeterhof Walz)", path: "/ernteanteile/walz-hack" },
            { title: "More..Wurst (Demeterhof Walz)", path: "/ernteanteile/walz-wurst" },
          ]
        },
      ],
    },
    {
      title: "Mitmachen",
      path: "/mitmachen",
      subItems: [
        {
          title: "SoLaWi in Aktion",
          path: "#",
          isCategory: true,
          subItems: [
            { title: "Zukünftige Events", path: "/mitmachen#events" },
            { title: "Highlights", path: "/mitmachen#highlights" },
            { title: "Engagement im Verein", path: "/mitmachen#engagement" },
          ]
        },
        {
          title: "SoLaWi in der Stadt",
          path: "#",
          isCategory: true,
          subItems: [
            { title: "Die Depots", path: "/mitmachen#depots" },
            { title: "Unsere Logistik", path: "/mitmachen#logistik" },
            { title: "Adressen, Zeiten & Karte", path: "/depots" },
          ]
        },
      ],
    },
    {
      title: "Fragen & Antworten",
      path: "/haeufige-fragen",
      subItems: [
        { title: "Grundlagen", path: "/haeufige-fragen#grundlagen" },
        { title: "Schnelle Fragen", path: "/haeufige-fragen#schnelle-fragen" },
        { title: "Vereinsgeschichte", path: "/haeufige-fragen#vereinsgeschichte" },
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
        {/* Header 96 px, Logo 36 px, Menü Roboto Condensed 22 px — wie Helix header_height/custom_font/navigation_font */}
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center z-50">
            <img src="/SLB.gif" alt="Stadt, Land, Beides." className="h-9" />
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
                  className={`font-nav text-[22px] px-4 py-6 flex items-center gap-1 transition-colors ${
                    location.pathname === item.path
                      ? "text-black"
                      : "text-muted-foreground hover:text-accent"
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
                            <div className="px-4 py-2 font-nav text-lg font-bold text-foreground bg-secondary mx-2 my-1">
                              {subItem.title}
                            </div>
                            {/* Category items */}
                            {subItem.subItems && (
                              <div className="pl-2">
                                {subItem.subItems.map((categoryItem) => (
                                  <div key={categoryItem.path}>
                                    <Link
                                      to={categoryItem.path}
                                      className="block px-4 py-2 font-nav text-lg text-muted-foreground hover:text-accent mx-2 transition-all hover:translate-x-1"
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
                                            className="block px-4 py-1.5 font-nav text-base text-muted-foreground hover:text-accent mx-2 transition-all hover:translate-x-1"
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
                            className="block px-4 py-2 font-nav text-lg text-muted-foreground hover:text-accent mx-2 transition-all hover:translate-x-1"
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
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-accent z-50 transition-all"
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
                    className={`flex-1 px-4 py-3 font-nav text-lg transition-colors ${
                      location.pathname === item.path
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.title}
                  </Link>
                  {item.subItems && (
                    <button
                      onClick={() => toggleMobileDropdown(item.path)}
                      className="p-3 text-muted-foreground hover:text-accent"
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
                            <div className="px-3 py-2 font-nav text-base font-bold text-foreground bg-secondary">
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
                                        className="flex-1 px-3 py-2 font-nav text-base text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                                      >
                                        {categoryItem.title}
                                      </Link>
                                      {categoryItem.subItems && (
                                        <button
                                          onClick={() => toggleMobileSubDropdown(categoryItem.path)}
                                          className="p-2 text-muted-foreground hover:text-accent"
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
                                            className="block px-3 py-1.5 font-nav text-base text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
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
                            className="block px-4 py-2 font-nav text-base text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
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
              to="/mitmachen#events"
              onClick={closeMobileMenu}
              className="btn-outline w-full"
            >
              Veranstaltungen
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}