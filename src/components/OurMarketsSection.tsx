import AnimatedSection from "@/components/AnimatedSection";
import { Globe, TrendingUp, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const markets = [
  { country: "USA", code: "us", region: "North America" },
  { country: "Canada", code: "ca", region: "North America" },
  { country: "Taiwan", code: "tw", region: "Asia Pacific" },
  { country: "Australia", code: "au", region: "Asia Pacific" },
];

const Flag = ({ code, size = 48 }: { code: string; size?: number }) => (
  <img
    src={`https://flagcdn.com/w80/${code}.png`}
    alt={code}
    width={size}
    height={size * 0.75}
    className="object-cover rounded-sm mx-auto"
  />
);

const OurMarketsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-muted/30" id="markets">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            {t("mkt.label")}
          </span>
          <h2 className="section-title mt-2">{t("mkt.title")}</h2>
          <p className="section-subtitle">{t("mkt.subtitle")}</p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl border border-border bg-card overflow-hidden" style={{ boxShadow: "var(--shadow-lg)" }}>
              <div className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-transparent to-green-accent/5">

                {/* Export flow visual */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-10">
                  {/* Indonesia */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="rounded-lg border border-green-accent/30 bg-green-accent/10 p-1.5">
                      <Flag code="id" size={48} />
                    </div>
                    <span className="text-sm font-bold text-primary">Indonesia</span>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-2">
                    <div className="w-16 md:w-24 h-px bg-gradient-to-r from-primary/40 to-green-accent/40 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-green-accent/40 animate-pulse" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-green-accent" />
                  </div>

                  {/* Destination flags */}
                  <div className="flex items-center gap-3 flex-wrap justify-center">
                    {markets.map((m) => (
                      <div
                        key={m.country}
                        className="rounded-lg border border-green-accent/30 bg-green-accent/10 p-1.5"
                      >
                        <Flag code={m.code} size={48} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Country cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {markets.map((market, i) => (
                    <AnimatedSection key={market.country} delay={i * 0.1}>
                      <div className="group relative rounded-xl bg-card border border-border p-5 text-center transition-all duration-300 hover:border-green-accent/40 hover:shadow-md">
                        <div className="mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                          <Flag code={market.code} size={48} />
                        </div>
                        <h3 className="text-base font-bold text-primary">{market.country}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{market.region}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>

              {/* Stats bar */}
              <div className="px-6 py-4 border-t border-border bg-muted/30">
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    <span className="text-sm font-bold text-primary">{t("mkt.countries")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-accent" />
                    <span className="text-sm font-semibold text-muted-foreground">{t("mkt.growing")}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default OurMarketsSection;