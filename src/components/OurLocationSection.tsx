import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import locationImg from "@/assets/our-location.png";

const OurLocationSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-background" id="location">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            {t("loc.label")}
          </span>
          <h2 className="section-title mt-2">{t("loc.title")}</h2>
          <p className="section-subtitle">{t("loc.subtitle")}</p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <img
              src={locationImg}
              alt="Our sourcing locations across Indonesia"
              className="w-full rounded-2xl"
              loading="lazy"
              width={1280}
              height={1280}
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default OurLocationSection;
