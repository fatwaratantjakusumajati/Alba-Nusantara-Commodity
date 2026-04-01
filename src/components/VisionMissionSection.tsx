import { Target, CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const VisionMissionSection = () => {
  const { t } = useLanguage();

  const missions = [
    t("vm.mission.1"),
    t("vm.mission.2"),
    t("vm.mission.3"),
    t("vm.mission.4"),
    t("vm.mission.5"),
  ];

  return (
    <section id="vision-mission" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            {t("vm.label")}
          </span>
          <h2 className="section-title mt-2">{t("vm.title")}</h2>
          <p className="section-subtitle">{t("vm.subtitle")}</p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="gradient-forest text-primary-foreground rounded-2xl p-8 md:p-10 h-full" style={{ boxShadow: "var(--shadow-xl)" }}>
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/15 flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{t("vm.vision.title")}</h3>
              <p className="text-primary-foreground/85 text-lg leading-relaxed">
                {t("vm.vision.desc")}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="card-corporate h-full">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">{t("vm.mission.title")}</h3>
              <div className="space-y-4">
                {missions.map((m, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-accent mt-0.5 shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{m}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
