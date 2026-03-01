import { useState, useEffect } from "react";
import { Menu, X, Factory } from "lucide-react";

const navItems = [
  { label: "Home", href: "home" },
  { label: "About Us", href: "about" },
  { label: "Vision & Mission", href: "vision-mission" },
  { label: "Core Values", href: "core-values" },
  { label: "Why Choose Us", href: "why-choose-us" },
  { label: "Products", href: "products" },
  { label: "Production Process", href: "production-process" },
  { label: "Contact", href: "contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        {/* Logo */}
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2.5">
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${isScrolled ? "gradient-navy" : "bg-primary-foreground/20 backdrop-blur"}`}>
            <Factory className={`w-5 h-5 ${isScrolled ? "text-primary-foreground" : "text-primary-foreground"}`} />
          </div>
          <span className={`text-lg font-bold tracking-tight transition-colors ${isScrolled ? "text-primary" : "text-primary-foreground"}`}>
            PT. MetalPro
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeSection === item.href
                  ? isScrolled
                    ? "text-accent bg-accent/10"
                    : "text-primary-foreground bg-primary-foreground/15"
                  : isScrolled
                  ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                  : "text-primary-foreground/75 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-md"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-card/98 backdrop-blur-lg border-b border-border">
          <nav className="container mx-auto py-4 px-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`px-4 py-3 text-sm font-medium rounded-lg text-left transition-colors ${
                  activeSection === item.href
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
