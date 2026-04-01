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
                <div className="text-3xl font-black">15+</div>
                <div className="text-sm text-primary-foreground/80">{t("about.experience")}</div>
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
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "200+", label: t("about.stat.employees") },
                { value: "30+", label: t("about.stat.countries") },
                { value: "500+", label: t("about.stat.partners") },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-green-accent">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
