import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

const navKeys = [
  { key: "nav.home", href: "home" },
  { key: "nav.about", href: "about" },
  { key: "nav.products", href: "products" },
  { key: "nav.contact", href: "contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();
  const { lang, toggleLang, t } = useLanguage();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (!isHome) return;
      const sections = navKeys.map((item) => item.href);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const scrollTo = (id: string) => {
    setIsMobileOpen(false);
    if (!isHome) {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const showTransparent = !isScrolled && isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showTransparent
          ? "bg-transparent"
          : "bg-card/95 backdrop-blur-md border-b border-border shadow-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <button onClick={() => scrollTo("home")} className="flex items-center">
          <img
            src={logo}
            alt="Alba Nusantara Commodity"
            className={`h-10 md:h-12 w-auto transition-all ${showTransparent ? "brightness-0 invert" : ""}`}
          />
        </button>

        <div className="hidden lg:flex items-center gap-1">
          <nav className="flex items-center gap-1">
            {navKeys.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeSection === item.href && isHome
                    ? showTransparent
                      ? "text-primary-foreground bg-primary-foreground/15"
                      : "text-green-accent bg-green-accent/10"
                    : showTransparent
                    ? "text-primary-foreground/75 hover:text-primary-foreground hover:bg-primary-foreground/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {t(item.key)}
              </button>
            ))}
          </nav>

          <button
            onClick={toggleLang}
            className={`ml-2 flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              showTransparent
                ? "text-primary-foreground/75 hover:text-primary-foreground hover:bg-primary-foreground/10 border border-primary-foreground/20"
                : "text-muted-foreground hover:text-foreground hover:bg-muted border border-border"
            }`}
          >
            <Globe className="w-4 h-4" />
            {lang === "id" ? "ID" : "EN"}
          </button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleLang}
            className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
              showTransparent
                ? "text-primary-foreground/80 border border-primary-foreground/20"
                : "text-muted-foreground border border-border"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === "id" ? "EN" : "ID"}
          </button>
          <button
            className="p-2 rounded-md"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? (
              <X className={`w-6 h-6 ${showTransparent ? "text-primary-foreground" : "text-foreground"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${showTransparent ? "text-primary-foreground" : "text-foreground"}`} />
            )}
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="lg:hidden bg-card/98 backdrop-blur-lg border-b border-border">
          <nav className="container mx-auto py-4 px-4 flex flex-col gap-1">
            {navKeys.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`px-4 py-3 text-sm font-medium rounded-lg text-left transition-colors ${
                  activeSection === item.href && isHome
                    ? "text-green-accent bg-green-accent/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {t(item.key)}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
