import { Shield, Lightbulb, Users, Award, Leaf, Heart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const CoreValuesSection = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Leaf, title: t("cv.sustainability"), desc: t("cv.sustainability.desc") },
    { icon: Award, title: t("cv.quality"), desc: t("cv.quality.desc") },
    { icon: Shield, title: t("cv.integrity"), desc: t("cv.integrity.desc") },
    { icon: Lightbulb, title: t("cv.innovation"), desc: t("cv.innovation.desc") },
    { icon: Users, title: t("cv.empowerment"), desc: t("cv.empowerment.desc") },
    { icon: Heart, title: t("cv.dedication"), desc: t("cv.dedication.desc") },
  ];

  return (
    <section id="core-values" className="section-padding bg-background">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            {t("cv.label")}
          </span>
          <h2 className="section-title mt-2">{t("cv.title")}</h2>
          <p className="section-subtitle">{t("cv.subtitle")}</p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="card-corporate group text-center h-full">
                <div className="w-14 h-14 rounded-xl gradient-accent mx-auto mb-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <v.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
