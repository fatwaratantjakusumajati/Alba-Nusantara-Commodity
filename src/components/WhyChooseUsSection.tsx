import { Leaf, BadgeCheck, Clock, Headphones, TrendingUp, Truck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyChooseUsSection = () => {
  const { t } = useLanguage();

  const reasons = [
    { icon: Leaf, title: t("wcu.natural"), desc: t("wcu.natural.desc") },
    { icon: BadgeCheck, title: t("wcu.certified"), desc: t("wcu.certified.desc") },
    { icon: Clock, title: t("wcu.ontime"), desc: t("wcu.ontime.desc") },
    { icon: Headphones, title: t("wcu.service"), desc: t("wcu.service.desc") },
    { icon: TrendingUp, title: t("wcu.capacity"), desc: t("wcu.capacity.desc") },
    { icon: Truck, title: t("wcu.distribution"), desc: t("wcu.distribution.desc") },
  ];

  return (
    <section id="why-choose-us" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            {t("wcu.label")}
          </span>
          <h2 className="section-title mt-2">{t("wcu.title")}</h2>
          <p className="section-subtitle">{t("wcu.subtitle")}</p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <AnimatedSection key={r.title} delay={i * 0.08}>
              <div className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-green-accent/30 transition-all duration-300 h-full" style={{ boxShadow: "var(--shadow-sm)" }}>
                <div className="w-12 h-12 rounded-lg bg-green-accent/10 flex items-center justify-center shrink-0">
                  <r.icon className="w-6 h-6 text-green-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
