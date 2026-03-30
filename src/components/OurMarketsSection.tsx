import AnimatedSection from "@/components/AnimatedSection";
import { Globe, TrendingUp } from "lucide-react";

const markets = [
  { country: "USA", flag: "🇺🇸", region: "North America", x: 175, y: 165 },
  { country: "Canada", flag: "🇨🇦", region: "North America", x: 165, y: 115 },
  { country: "Taiwan", flag: "🇹🇼", region: "Asia Pacific", x: 720, y: 185 },
  { country: "Australia", flag: "🇦🇺", region: "Asia Pacific", x: 770, y: 340 },
];

const indonesiaPos = { x: 690, y: 250 };

const OurMarketsSection = () => (
  <section className="section-padding bg-muted/30" id="markets">
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
          <div className="relative rounded-2xl overflow-hidden border border-border bg-card" style={{ boxShadow: "var(--shadow-lg)" }}>
            <div className="relative w-full" style={{ paddingBottom: "48%" }}>
              <svg
                viewBox="0 0 960 460"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient id="worldOcean" cx="50%" cy="50%" r="70%">
                    <stop offset="0%" stopColor="hsl(210, 35%, 95%)" />
                    <stop offset="100%" stopColor="hsl(210, 30%, 88%)" />
                  </radialGradient>
                  <filter id="continent-shadow">
                    <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="hsl(0,0%,30%)" floodOpacity="0.1"/>
                  </filter>
                </defs>
                <rect width="960" height="460" fill="url(#worldOcean)" />

                {/* Grid */}
                {[...Array(10)].map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 50} x2="960" y2={i * 50} stroke="hsl(210, 20%, 85%)" strokeWidth="0.3" />
                ))}
                {[...Array(20)].map((_, i) => (
                  <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="460" stroke="hsl(210, 20%, 85%)" strokeWidth="0.3" />
                ))}

                {/* ===== WORLD CONTINENTS ===== */}
                {/* North America */}
                <path filter="url(#continent-shadow)" d="M60,45 L120,30 L180,35 L225,55 L240,90 L235,130 L250,155 L245,195 L225,220 L200,235 L170,225 L140,240 L120,225 L95,195 L80,155 L65,115 L55,80 Z"
                  fill="hsl(145, 22%, 85%)" stroke="hsl(145, 25%, 65%)" strokeWidth="1" strokeLinejoin="round" />
                
                {/* Central America */}
                <path d="M175,235 L195,240 L205,260 L195,280 L180,275 L170,255 Z"
                  fill="hsl(145, 22%, 85%)" stroke="hsl(145, 25%, 65%)" strokeWidth="0.8" strokeLinejoin="round" />

                {/* South America */}
                <path filter="url(#continent-shadow)" d="M185,285 L215,275 L240,290 L250,325 L245,365 L230,400 L210,420 L190,410 L180,375 L175,335 L178,305 Z"
                  fill="hsl(145, 22%, 85%)" stroke="hsl(145, 25%, 65%)" strokeWidth="1" strokeLinejoin="round" />

                {/* Europe */}
                <path filter="url(#continent-shadow)" d="M415,35 L445,28 L475,35 L490,55 L500,80 L495,105 L480,120 L455,125 L435,115 L420,95 L410,65 Z"
                  fill="hsl(145, 22%, 85%)" stroke="hsl(145, 25%, 65%)" strokeWidth="1" strokeLinejoin="round" />
                
                {/* UK / Scandinavia hints */}
                <ellipse cx="420" cy="55" rx="8" ry="12" fill="hsl(145, 22%, 85%)" stroke="hsl(145, 25%, 65%)" strokeWidth="0.6" />

                {/* Africa */}
                <path filter="url(#continent-shadow)" d="M430,140 L470,130 L505,145 L520,185 L525,235 L520,290 L505,335 L480,355 L455,345 L440,305 L430,250 L425,195 Z"
                  fill="hsl(145, 22%, 85%)" stroke="hsl(145, 25%, 65%)" strokeWidth="1" strokeLinejoin="round" />

                {/* Asia */}
                <path filter="url(#continent-shadow)" d="M510,30 L570,22 L640,30 L710,45 L760,65 L780,95 L775,135 L755,165 L720,175 L680,170 L640,175 L600,160 L560,135 L530,100 L515,65 Z"
                  fill="hsl(145, 22%, 85%)" stroke="hsl(145, 25%, 65%)" strokeWidth="1" strokeLinejoin="round" />
                
                {/* Middle East */}
                <path d="M520,130 L545,120 L560,140 L555,160 L535,165 L520,155 Z"
                  fill="hsl(145, 22%, 85%)" stroke="hsl(145, 25%, 65%)" strokeWidth="0.8" />

                {/* India */}
                <path d="M600,165 L625,150 L645,175 L635,215 L615,240 L600,225 L595,195 Z"
                  fill="hsl(145, 22%, 85%)" stroke="hsl(145, 25%, 65%)" strokeWidth="0.8" />

                {/* Southeast Asia / Indonesia */}
                <path d="M670,210 L700,200 L730,205 L755,215 L760,235 L745,250 L715,255 L690,248 L675,235 Z"
                  fill="hsl(145, 40%, 72%)" stroke="hsl(145, 40%, 50%)" strokeWidth="1.5" strokeLinejoin="round" />
                <text x="715" y="228" textAnchor="middle" fontSize="10" fontWeight="700" fill="hsl(145, 40%, 25%)">
                  Indonesia
                </text>

                {/* Australia */}
                <path filter="url(#continent-shadow)" d="M730,295 L780,280 L830,290 L860,315 L855,355 L835,385 L800,395 L765,380 L740,350 L730,320 Z"
                  fill="hsl(145, 22%, 85%)" stroke="hsl(145, 25%, 65%)" strokeWidth="1" strokeLinejoin="round" />

                {/* Japan */}
                <path d="M760,80 L770,70 L778,85 L775,105 L765,110 L758,95 Z"
                  fill="hsl(145, 22%, 85%)" stroke="hsl(145, 25%, 65%)" strokeWidth="0.7" />

                {/* Taiwan */}
                <ellipse cx="738" cy="155" rx="5" ry="8" fill="hsl(145, 22%, 85%)" stroke="hsl(145, 25%, 65%)" strokeWidth="0.7" />

                {/* Export route lines from Indonesia */}
                {markets.map((m, i) => (
                  <line
                    key={`route-${m.country}`}
                    x1={indonesiaPos.x} y1={indonesiaPos.y}
                    x2={m.x} y2={m.y}
                    stroke="hsl(145, 45%, 38%)"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    opacity="0.35"
                  >
                    <animate attributeName="stroke-dashoffset" values="0;-20" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                  </line>
                ))}

                {/* Market pins */}
                {markets.map((m, i) => (
                  <g key={m.country}>
                    <circle cx={m.x} cy={m.y} r="10" fill="hsl(30, 55%, 38%)" opacity="0.12">
                      <animate attributeName="r" values="8;16;8" dur="2.5s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.18;0;0.18" dur="2.5s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                    </circle>
                    <circle cx={m.x} cy={m.y} r="5.5" fill="hsl(30, 55%, 38%)" stroke="white" strokeWidth="2" />
                    <text x={m.x} y={m.y - 13} textAnchor="middle" fontSize="10" fontWeight="700" fill="hsl(30, 30%, 12%)">
                      {m.flag} {m.country}
                    </text>
                  </g>
                ))}

                {/* Indonesia origin pin */}
                <circle cx={indonesiaPos.x} cy={indonesiaPos.y} r="7" fill="hsl(145, 45%, 38%)" stroke="white" strokeWidth="2.5" />
                <circle cx={indonesiaPos.x} cy={indonesiaPos.y} r="14" fill="none" stroke="hsl(145, 45%, 38%)" strokeWidth="1.2" opacity="0.3">
                  <animate attributeName="r" values="10;22;10" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.35;0;0.35" dur="2s" repeatCount="indefinite" />
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
