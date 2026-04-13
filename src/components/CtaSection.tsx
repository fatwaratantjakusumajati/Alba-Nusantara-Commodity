import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";

const CtaSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="gradient-forest text-primary-foreground section-padding">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary-foreground/60 uppercase tracking-widest mb-3">
              {t("footer.cta_label")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("footer.cta_title")}
            </h2>
            <p className="text-primary-foreground/70 text-sm md:text-base leading-relaxed mb-6">
              {t("footer.cta_desc")}
            </p>
            <a
              href="mailto:info@alnusacommodity.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-foreground text-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              {t("footer.cta_button")}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CtaSection;
