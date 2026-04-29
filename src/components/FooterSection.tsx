import { MapPin, Phone, Mail, Globe, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

const FooterSection = () => {
  const { t } = useLanguage();

  return (
    <footer className="gradient-forest text-primary-foreground">
      {/* Company Info Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="border-t border-primary-foreground/15 pt-12 pb-4 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Column 1 - Logo & Info */}
          <div className="flex flex-col space-y-6 w-full lg:w-80">
            <div className="h-12 flex items-center justify-center">
              <img
                src={logo}
                alt="Alba Nusantara Commodity"
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed text-center">
              {t("footer.desc")}
            </p>
            <div className="flex gap-3 text-xs text-primary-foreground/70 group w-fit mx-auto">
              <MapPin className="w-4 h-4 shrink-0 text-primary-foreground/60 group-hover:text-primary-foreground transition-colors" />
              <span className="leading-relaxed text-left">Jl. Rajawali No.64 L, Surabaya, Indonesia, 60175</span>
            </div>
          </div>

          {/* Column 2 - Contact */}
          <div className="flex flex-col space-y-6 w-full lg:w-80 lg:mx-auto">
            <div className="h-12 flex items-center justify-center">
              <h4 className="font-bold text-lg text-primary-foreground">
                {t("footer.contact")}
              </h4>
            </div>
            <div className="flex flex-col space-y-4 text-sm text-primary-foreground/70 w-fit mx-auto">
              <a href="tel:+6288996988508" className="flex gap-3 items-center hover:text-primary-foreground transition-colors group">
                <Phone className="w-4 h-4 shrink-0 text-primary-foreground/60 group-hover:text-primary-foreground transition-colors" />
                <span>+62 889 9698 8508</span>
              </a>
              <a href="tel:+6281234569804" className="flex gap-3 items-center hover:text-primary-foreground transition-colors group">
                <Phone className="w-4 h-4 shrink-0 text-primary-foreground/60 group-hover:text-primary-foreground transition-colors" />
                <span>+62 812 3456 9804</span>
              </a>
              <a href="tel:+6285780246440" className="flex gap-3 items-center hover:text-primary-foreground transition-colors group">
                <Phone className="w-4 h-4 shrink-0 text-primary-foreground/60 group-hover:text-primary-foreground transition-colors" />
                <span>+62 857 8024 6440</span>
              </a>
              <a href="mailto:info@alnusacommodity.com" className="flex gap-3 items-center hover:text-primary-foreground transition-colors group">
                <Mail className="w-4 h-4 shrink-0 text-primary-foreground/60 group-hover:text-primary-foreground transition-colors" />
                <span>info@alnusacommodity.com</span>
              </a>
            </div>
          </div>

          {/* Column 3 - Digital */}
          <div className="flex flex-col space-y-6 w-full lg:w-80 lg:ml-auto">
            <div className="h-12 flex items-center justify-center">
              <h4 className="font-bold text-lg text-primary-foreground">
                {t("footer.follow")}
              </h4>
            </div>
            <div className="flex flex-col space-y-4 text-sm text-primary-foreground/70 w-fit mx-auto">
              <a
                href="https://www.alnusacommodity.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-center hover:text-primary-foreground transition-colors group"
              >
                <Globe className="w-4 h-4 shrink-0 text-primary-foreground/60 group-hover:text-primary-foreground transition-colors" />
                <span>www.alnusacommodity.com</span>
              </a>
              <a
                href="https://www.linkedin.com/company/alnusacommodity"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-center hover:text-primary-foreground transition-colors group"
              >
                <Linkedin className="w-4 h-4 shrink-0 text-primary-foreground/60 group-hover:text-primary-foreground transition-colors" />
                <span>alnusacommodity</span>
              </a>
              <a
                href="https://www.linkedin.com/company/alnusacommodity"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-center hover:text-primary-foreground transition-colors group"
              >
                <Linkedin className="w-4 h-4 shrink-0 text-primary-foreground/60 group-hover:text-primary-foreground transition-colors" />
                <span>alnusacommodity</span>
              </a>
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
            © {new Date().getFullYear()} Alba Nusantara Commodity (ALNC). All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
