import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, Handshake, Globe, ShieldCheck } from "lucide-react";

const CtaSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[hsl(145,30%,18%)] to-[hsl(30,40%,22%)]" />
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 backdrop-blur-sm mb-8 border border-primary-foreground/20">
              <Handshake className="w-8 h-8 text-primary-foreground" />
            </div>

            <p className="text-sm font-semibold text-[hsl(var(--green-accent))] uppercase tracking-[0.2em] mb-4">
              {t("footer.cta_label")}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground tracking-tight mb-6 leading-tight">
              {t("footer.cta_title")}
            </h2>
            <p className="text-primary-foreground/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              {t("footer.cta_desc")}
            </p>

            {/* CTA Button */}
            <a
              href="mailto:info@alnusacommodity.com"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary-foreground text-primary font-bold text-base hover:shadow-[0_0_40px_hsl(var(--green-glow)/0.3)] transition-all duration-300 hover:scale-105"
            >
              {t("footer.cta_button")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Trust indicators */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { icon: Globe, label: "Global Reach" },
                { icon: ShieldCheck, label: "Trusted Quality" },
                { icon: Handshake, label: "Long-term Partnership" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center justify-center gap-2 text-primary-foreground/40 text-sm">
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CtaSection;
