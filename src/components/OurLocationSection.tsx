import AnimatedSection from "@/components/AnimatedSection";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const locationPins = [
  { name: "West Kalimantan", x: 315, y: 175, products: ["Bird Nest"] },
  { name: "East Java", x: 420, y: 310, products: ["Bird Nest", "Cloves", "Cocoa", "Essential Oil"] },
  { name: "Bali", x: 460, y: 320, products: ["Cloves"] },
  { name: "Central Sulawesi", x: 540, y: 180, products: ["Bird Nest"] },
  { name: "North Sulawesi", x: 560, y: 120, products: ["Cloves"] },
  { name: "West Nusa Tenggara", x: 490, y: 340, products: ["Bird Nest"] },
  { name: "East Nusa Tenggara", x: 560, y: 350, products: ["Cloves"] },
];

const productLegend = [
  { name: "Bird Nest", icon: "🪹", color: "bg-amber-500" },
  { name: "Cloves", icon: "🌿", color: "bg-green-600" },
  { name: "Cocoa", icon: "🫘", color: "bg-amber-800" },
  { name: "Essential Oil", icon: "🧴", color: "bg-emerald-500" },
];

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

        <AnimatedSection>
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card" style={{ boxShadow: "var(--shadow-lg)" }}>
              <div className="relative w-full" style={{ paddingBottom: "50%" }}>
                <svg viewBox="0 0 900 450" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="ocean" cx="50%" cy="50%" r="70%">
                      <stop offset="0%" stopColor="hsl(200, 40%, 96%)" />
                      <stop offset="100%" stopColor="hsl(200, 35%, 90%)" />
                    </radialGradient>
                    <filter id="land-shadow" x="-2%" y="-2%" width="104%" height="104%">
                      <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="hsl(145,20%,40%)" floodOpacity="0.15"/>
                    </filter>
                  </defs>
                  <rect width="900" height="450" fill="url(#ocean)" />
                  {[...Array(9)].map((_, i) => (<line key={`h${i}`} x1="0" y1={i * 50} x2="900" y2={i * 50} stroke="hsl(200, 20%, 88%)" strokeWidth="0.4" />))}
                  {[...Array(18)].map((_, i) => (<line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="450" stroke="hsl(200, 20%, 88%)" strokeWidth="0.4" />))}
                  <path filter="url(#land-shadow)" d="M60,100 L100,75 L140,80 L165,110 L180,145 L195,190 L205,240 L200,285 L185,320 L160,345 L130,340 L105,310 L85,270 L70,225 L60,175 L55,135 Z" fill="hsl(145, 30%, 82%)" stroke="hsl(145, 35%, 60%)" strokeWidth="1.2" strokeLinejoin="round" />
                  <text x="130" y="210" textAnchor="middle" fontSize="11" fill="hsl(145, 30%, 45%)" fontWeight="500" opacity="0.7">Sumatra</text>
                  <path filter="url(#land-shadow)" d="M250,60 L290,45 L340,50 L380,70 L400,105 L405,145 L395,195 L375,235 L345,260 L310,270 L275,255 L255,220 L240,175 L235,130 L240,90 Z" fill="hsl(145, 30%, 82%)" stroke="hsl(145, 35%, 60%)" strokeWidth="1.2" strokeLinejoin="round" />
                  <text x="320" y="155" textAnchor="middle" fontSize="12" fill="hsl(145, 30%, 45%)" fontWeight="500" opacity="0.7">Kalimantan</text>
                  <path filter="url(#land-shadow)" d="M215,295 L255,285 L300,280 L345,278 L385,282 L420,290 L450,300 L470,308 L455,325 L420,330 L380,328 L340,325 L300,322 L260,318 L230,310 Z" fill="hsl(145, 30%, 82%)" stroke="hsl(145, 35%, 60%)" strokeWidth="1.2" strokeLinejoin="round" />
                  <text x="345" y="305" textAnchor="middle" fontSize="10" fill="hsl(145, 30%, 45%)" fontWeight="500" opacity="0.7">Java</text>
                  <path filter="url(#land-shadow)" d="M490,75 L520,60 L550,70 L560,100 L565,135 L575,120 L600,110 L625,125 L618,160 L595,185 L575,215 L560,255 L545,280 L530,265 L535,230 L520,205 L510,175 L500,140 L495,105 Z" fill="hsl(145, 30%, 82%)" stroke="hsl(145, 35%, 60%)" strokeWidth="1.2" strokeLinejoin="round" />
                  <text x="555" y="200" textAnchor="middle" fontSize="10" fill="hsl(145, 30%, 45%)" fontWeight="500" opacity="0.7">Sulawesi</text>
                  <ellipse cx="478" cy="318" rx="12" ry="8" fill="hsl(145, 30%, 82%)" stroke="hsl(145, 35%, 60%)" strokeWidth="1" />
                  <ellipse cx="500" cy="335" rx="16" ry="8" fill="hsl(145, 30%, 82%)" stroke="hsl(145, 35%, 60%)" strokeWidth="1" />
                  <ellipse cx="530" cy="340" rx="20" ry="8" fill="hsl(145, 30%, 82%)" stroke="hsl(145, 35%, 60%)" strokeWidth="1" />
                  <ellipse cx="575" cy="345" rx="25" ry="7" fill="hsl(145, 30%, 82%)" stroke="hsl(145, 35%, 60%)" strokeWidth="1" />
                  <ellipse cx="615" cy="355" rx="18" ry="7" fill="hsl(145, 30%, 82%)" stroke="hsl(145, 35%, 60%)" strokeWidth="1" />
                  <ellipse cx="660" cy="190" rx="14" ry="20" fill="hsl(145, 30%, 82%)" stroke="hsl(145, 35%, 60%)" strokeWidth="1" />
                  <ellipse cx="680" cy="250" rx="12" ry="18" fill="hsl(145, 30%, 82%)" stroke="hsl(145, 35%, 60%)" strokeWidth="1" />
                  <path filter="url(#land-shadow)" d="M720,100 L760,85 L810,90 L850,110 L865,145 L855,190 L835,230 L805,250 L775,240 L750,210 L735,170 L725,135 Z" fill="hsl(145, 30%, 82%)" stroke="hsl(145, 35%, 60%)" strokeWidth="1.2" strokeLinejoin="round" />
                  <text x="790" y="165" textAnchor="middle" fontSize="11" fill="hsl(145, 30%, 45%)" fontWeight="500" opacity="0.7">Papua</text>
                  {locationPins.map((pin, i) => (
                    <g key={pin.name}>
                      <circle cx={pin.x} cy={pin.y} r="12" fill="hsl(30, 55%, 38%)" opacity="0.12">
                        <animate attributeName="r" values="8;18;8" dur="2.5s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.18;0;0.18" dur="2.5s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                      </circle>
                      <circle cx={pin.x} cy={pin.y} r="5" fill="hsl(30, 55%, 38%)" stroke="white" strokeWidth="2" />
                      <text x={pin.x} y={pin.y - 12} textAnchor="middle" fontSize="9" fontWeight="700" fill="hsl(30, 30%, 15%)">{pin.name}</text>
                    </g>
                  ))}
                </svg>
              </div>
              <div className="px-6 py-4 border-t border-border bg-muted/30">
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                  {productLegend.map((p) => (
                    <div key={p.name} className="flex items-center gap-2">
                      <span className="text-lg">{p.icon}</span>
                      <span className="text-sm font-medium text-foreground">{p.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {productLegend.map((loc, i) => (
                <AnimatedSection key={loc.name} delay={i * 0.1}>
                  <div className="card-corporate h-full text-center">
                    <div className="text-3xl mb-3">{loc.icon}</div>
                    <h3 className="text-base font-bold text-primary mb-3">{loc.name}</h3>
                    <div className="space-y-1.5">
                      {locationPins
                        .filter((pin) => pin.products.includes(loc.name))
                        .map((pin) => (
                          <div key={pin.name} className="flex items-center gap-2 justify-center">
                            <MapPin className="w-3 h-3 text-green-accent shrink-0" />
                            <span className="text-xs text-muted-foreground">{pin.name}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default OurLocationSection;
