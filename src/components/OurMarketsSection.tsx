import AnimatedSection from "@/components/AnimatedSection";
import { Globe, TrendingUp } from "lucide-react";

const markets = [
  { country: "USA", flag: "🇺🇸", region: "North America", x: 18, y: 40 },
  { country: "Canada", flag: "🇨🇦", region: "North America", x: 17, y: 28 },
  { country: "Taiwan", flag: "🇹🇼", region: "Asia Pacific", x: 75, y: 42 },
  { country: "Australia", flag: "🇦🇺", region: "Asia Pacific", x: 82, y: 78 },
];

const OurMarketsSection = () => (
  <section className="section-padding bg-background" id="markets">
    <div className="container mx-auto">
      <AnimatedSection className="text-center mb-12">
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">
          Global Reach
        </span>
        <h2 className="section-title mt-2">Our Markets</h2>
        <p className="section-subtitle">
          Produk kami telah dipercaya dan diekspor ke berbagai negara di seluruh dunia
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <div className="max-w-6xl mx-auto">
          {/* World Map */}
          <div className="relative rounded-2xl overflow-hidden border border-border bg-card" style={{ boxShadow: "var(--shadow-lg)" }}>
            <div className="relative w-full" style={{ paddingBottom: "45%" }}>
              <svg
                viewBox="0 0 1000 450"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Ocean */}
                <rect width="1000" height="450" fill="hsl(200, 30%, 95%)" />
                
                {/* Grid */}
                {[...Array(10)].map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 50} x2="1000" y2={i * 50} stroke="hsl(200, 20%, 90%)" strokeWidth="0.5" />
                ))}
                {[...Array(20)].map((_, i) => (
                  <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="450" stroke="hsl(200, 20%, 90%)" strokeWidth="0.5" />
                ))}

                {/* Simplified World Continents */}
                {/* North America */}
                <path d="M80,50 L200,40 L250,80 L240,130 L270,160 L260,200 L220,230 L180,220 L150,250 L120,220 L100,180 L80,140 L60,100 Z"
                  fill="hsl(145, 25%, 88%)" stroke="hsl(145, 30%, 70%)" strokeWidth="1" />
                
                {/* South America */}
                <path d="M200,260 L240,250 L270,280 L280,330 L260,380 L230,410 L200,400 L180,360 L175,310 L185,280 Z"
                  fill="hsl(145, 25%, 88%)" stroke="hsl(145, 30%, 70%)" strokeWidth="1" />
                
                {/* Europe */}
                <path d="M420,50 L480,40 L520,60 L510,100 L490,120 L450,130 L430,110 L420,80 Z"
                  fill="hsl(145, 25%, 88%)" stroke="hsl(145, 30%, 70%)" strokeWidth="1" />
                
                {/* Africa */}
                <path d="M430,150 L490,140 L520,170 L530,230 L520,300 L490,350 L460,340 L440,290 L430,230 L420,180 Z"
                  fill="hsl(145, 25%, 88%)" stroke="hsl(145, 30%, 70%)" strokeWidth="1" />
                
                {/* Asia */}
                <path d="M530,40 L620,30 L700,50 L780,60 L800,100 L790,150 L750,180 L700,170 L650,180 L600,160 L560,130 L540,90 Z"
                  fill="hsl(145, 25%, 88%)" stroke="hsl(145, 30%, 70%)" strokeWidth="1" />
                
                {/* Southeast Asia / Indonesia */}
                <path d="M680,200 L730,190 L770,200 L790,220 L780,240 L740,250 L700,240 L680,220 Z"
                  fill="hsl(145, 35%, 75%)" stroke="hsl(145, 35%, 55%)" strokeWidth="1.5" />
                {/* Indonesia label */}
                <text x="730" y="215" textAnchor="middle" fontSize="11" fontWeight="700" fill="hsl(145, 35%, 30%)">
                  Indonesia
                </text>
                
                {/* Australia */}
                <path d="M760,300 L830,280 L880,300 L900,340 L880,380 L830,400 L780,380 L760,340 Z"
                  fill="hsl(145, 25%, 88%)" stroke="hsl(145, 30%, 70%)" strokeWidth="1" />

                {/* Export route lines from Indonesia */}
                {markets.map((m, i) => {
                  const cx = m.x * 10;
                  const cy = m.y * 4.5;
                  return (
                    <line
                      key={`line-${m.country}`}
                      x1="730" y1="220"
                      x2={cx} y2={cy}
                      stroke="hsl(145, 45%, 38%)"
                      strokeWidth="1.5"
                      strokeDasharray="6 4"
                      opacity="0.4"
                    >
                      <animate attributeName="stroke-dashoffset" values="0;-20" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                    </line>
                  );
                })}

                {/* Market pins */}
                {markets.map((m, i) => {
                  const cx = m.x * 10;
                  const cy = m.y * 4.5;
                  return (
                    <g key={m.country}>
                      <circle cx={cx} cy={cy} r="10" fill="hsl(30, 55%, 38%)" opacity="0.15">
                        <animate attributeName="r" values="8;16;8" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.2;0;0.2" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                      </circle>
                      <circle cx={cx} cy={cy} r="6" fill="hsl(30, 55%, 38%)" stroke="white" strokeWidth="2" />
                      <text x={cx} y={cy - 14} textAnchor="middle" fontSize="11" fontWeight="600" fill="hsl(30, 30%, 12%)">
                        {m.flag} {m.country}
                      </text>
                    </g>
                  );
                })}

                {/* Indonesia origin pin */}
                <circle cx="730" cy="220" r="8" fill="hsl(145, 45%, 38%)" stroke="white" strokeWidth="2.5" />
                <circle cx="730" cy="220" r="14" fill="none" stroke="hsl(145, 45%, 38%)" strokeWidth="1.5" opacity="0.3">
                  <animate attributeName="r" values="10;22;10" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>

            {/* Stats bar */}
            <div className="px-6 py-4 border-t border-border bg-muted/30">
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold text-primary">4+ Countries</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-accent" />
                  <span className="text-sm font-semibold text-muted-foreground">Growing Global Presence</span>
                </div>
              </div>
            </div>
          </div>

          {/* Market Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {markets.map((market, i) => (
              <AnimatedSection key={market.country} delay={i * 0.1}>
                <div className="card-corporate h-full text-center group">
                  <span className="text-4xl block mb-3">{market.flag}</span>
                  <h3 className="text-lg font-bold text-primary">{market.country}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{market.region}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default OurMarketsSection;
