import AnimatedSection from "@/components/AnimatedSection";
import { Globe, TrendingUp } from "lucide-react";

const markets = [
  {
    country: "USA",
    flag: "🇺🇸",
    region: "North America",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    region: "North America",
  },
  {
    country: "Taiwan",
    flag: "🇹🇼",
    region: "Asia Pacific",
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    region: "Asia Pacific",
  },
];

const OurMarketsSection = () => (
  <section className="section-padding bg-background" id="markets">
    <div className="container mx-auto">
      <AnimatedSection className="text-center mb-16">
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">
          Global Reach
        </span>
        <h2 className="section-title mt-2">Our Markets</h2>
        <p className="section-subtitle">
          Produk kami telah dipercaya dan diekspor ke berbagai negara di seluruh dunia
        </p>
      </AnimatedSection>

      {/* Globe visual + stats */}
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        {/* Left: visual globe area */}
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden gradient-forest p-10 md:p-14 text-center" style={{ boxShadow: "var(--shadow-xl)" }}>
            {/* Decorative globe lines */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-primary-foreground" />
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-primary-foreground" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-primary-foreground" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-primary-foreground" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-primary-foreground" />
            </div>

            <div className="relative z-10">
              <Globe className="w-16 h-16 text-green-glow mx-auto mb-6" strokeWidth={1} />
              <h3 className="text-5xl md:text-6xl font-black text-primary-foreground mb-2">4+</h3>
              <p className="text-primary-foreground/70 text-lg font-medium">Countries Served</p>
              <div className="flex items-center justify-center gap-2 mt-4 text-green-glow">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">Growing Global Presence</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Right: market cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {markets.map((market, i) => (
            <AnimatedSection key={market.country} delay={i * 0.1}>
              <div className="card-corporate h-full group cursor-default">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{market.flag}</span>
                  <div>
                    <h3 className="text-lg font-bold text-primary">{market.country}</h3>
                    <p className="text-sm text-muted-foreground">{market.region}</p>
                  </div>
                </div>
                <div className="mt-4 h-1 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full gradient-accent transition-all duration-700 group-hover:w-full"
                    style={{ width: "70%" }}
                  />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default OurMarketsSection;
