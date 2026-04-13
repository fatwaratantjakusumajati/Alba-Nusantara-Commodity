import { MapPin, Phone, Mail, Globe, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

const FooterSection = () => {
  const { t } = useLanguage();

  return (
    <footer className="gradient-forest text-primary-foreground">
      {/* Company Info Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="border-t border-primary-foreground/15 pt-10 grid md:grid-cols-2 gap-10">
          {/* Left - Logo & Company */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="Alba Nusantara Commodity" className="h-12 w-auto brightness-0 invert" />
            </div>
            <h4 className="font-bold text-sm text-primary-foreground/90 mb-4">
              {t("footer.company_info")}
            </h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Jl. Rajawali No.64 L, Surabaya, Indonesia, 60175</span>
              </div>
              <div className="flex gap-3">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <span>info@alnusacommodity.com</span>
              </div>
            </div>
          </div>

          {/* Right - Contact */}
          <div>
            <h4 className="font-bold text-sm text-primary-foreground/90 mb-4">
              {t("footer.phone")}
            </h4>
            <div className="space-y-2 text-sm text-primary-foreground/70 mb-6">
              <div className="flex gap-3">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <span>+62 889 9698 8508</span>
              </div>
              <div className="flex gap-3">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <span>+62 812 3456 9804</span>
              </div>
              <div className="flex gap-3">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <span>+62 857 8024 6440</span>
              </div>
            </div>

            <div className="space-y-2 text-sm text-primary-foreground/70">
              <div className="flex gap-3">
                <Globe className="w-4 h-4 mt-0.5 shrink-0" />
                <a href="https://www.alnusacommodity.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  www.alnusacommodity.com
                </a>
              </div>
              <div className="flex gap-3">
                <Linkedin className="w-4 h-4 mt-0.5 shrink-0" />
                <a href="https://www.linkedin.com/company/alnusacommodity" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  alnusacommodity
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4">
        <div className="border-t border-primary-foreground/15 py-8 text-center">
          <p className="text-sm text-primary-foreground/50 italic">
            Connecting Indonesia's Natural Wealth to Global Markets
          </p>
          <p className="text-xs text-primary-foreground/40 mt-2">
            © {new Date().getFullYear()} Alba Nusantara Commodity (ALNC). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
