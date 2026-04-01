import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

const socialIcons = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Youtube, label: "YouTube" },
];

const FooterSection = () => {
  const { t } = useLanguage();

  const quickLinks = [t("nav.about"), t("nav.products"), t("nav.contact")];

  const scrollTo = (label: string) => {
    const map: Record<string, string> = {};
    map[t("nav.about")] = "about";
    map[t("nav.products")] = "products";
    map[t("nav.contact")] = "contact";
    const el = document.getElementById(map[label] || label);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="gradient-forest text-primary-foreground">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-5">
              <img src={logo} alt="Alba Nusantara Commodity" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t("footer.desc")}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-primary-foreground/90">{t("footer.quicklinks")}</h4>
            <div className="space-y-2.5">
              {quickLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-primary-foreground/90">{t("footer.contact")}</h4>
            <div className="space-y-3">
              <div className="flex gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Jl. Raya Kekayaan Alam No. 25, Jakarta Selatan 12560</span>
              </div>
              <div className="flex gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+62 21 7890 1234</span>
              </div>
              <div className="flex gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 shrink-0" />
                <span>info@nusanature.co.id</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-primary-foreground/90">{t("footer.follow")}</h4>
            <div className="flex gap-3">
              {socialIcons.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 mt-12 pt-8 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Alba Nusantara Commodity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
