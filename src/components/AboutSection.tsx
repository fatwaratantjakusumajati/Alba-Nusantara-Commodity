import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import aboutImg from "@/assets/about.jpg";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection>
            <div className="relative">
              <img
                src={aboutImg}
                alt="Tim NusaNature"
                className="w-full rounded-2xl object-cover aspect-[4/3]"
                style={{ boxShadow: "var(--shadow-lg)" }}
              />
              <div className="absolute -bottom-6 -right-6 gradient-forest text-primary-foreground rounded-xl p-6 hidden md:block" style={{ boxShadow: "var(--shadow-xl)" }}>
                <div className="text-lg font-bold">{t("about.established")}</div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">
              {t("about.label")}
            </span>
            <h2 className="section-title mt-2 mb-6">
              {t("about.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t("about.p1")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("about.p2")}
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
