import AnimatedSection from "@/components/AnimatedSection";
import { MapPin } from "lucide-react";

const locationPins = [
  { name: "West Kalimantan", x: 28, y: 48, products: ["Bird Nest"] },
  { name: "East Java", x: 48, y: 72, products: ["Bird Nest", "Cloves", "Cocoa", "Essential Oil"] },
  { name: "Bali", x: 52, y: 76, products: ["Cloves"] },
  { name: "Central Sulawesi", x: 55, y: 42, products: ["Bird Nest"] },
  { name: "North Sulawesi", x: 58, y: 30, products: ["Cloves"] },
  { name: "West Nusa Tenggara", x: 53, y: 82, products: ["Bird Nest"] },
  { name: "East Nusa Tenggara", x: 58, y: 85, products: ["Cloves"] },
];

const productLegend = [
  { name: "Bird Nest", icon: "🪹", color: "bg-amber-500" },
  { name: "Cloves", icon: "🌿", color: "bg-green-600" },
  { name: "Cocoa", icon: "🫘", color: "bg-amber-800" },
  { name: "Essential Oil", icon: "🧴", color: "bg-emerald-500" },
];

const OurLocationSection = () => (
  <section className="section-padding bg-muted/30" id="location">
    <div className="container mx-auto">
      <AnimatedSection className="text-center mb-12">
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">
          Sourcing Areas
        </span>
        <h2 className="section-title mt-2">Our Location</h2>
        <p className="section-subtitle">
          Kami memperoleh bahan baku berkualitas tinggi dari berbagai wilayah strategis di Indonesia
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <div className="max-w-6xl mx-auto">
          {/* Map Container */}
          <div className="relative rounded-2xl overflow-hidden border border-border bg-card" style={{ boxShadow: "var(--shadow-lg)" }}>
            {/* Indonesia Map SVG */}
            <div className="relative w-full" style={{ paddingBottom: "45%" }}>
              <svg
                viewBox="0 0 1000 450"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Ocean background */}
                <rect width="1000" height="450" fill="hsl(200, 30%, 95%)" />
                
                {/* Grid lines */}
                {[...Array(10)].map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 50} x2="1000" y2={i * 50} stroke="hsl(200, 20%, 90%)" strokeWidth="0.5" />
                ))}
                {[...Array(20)].map((_, i) => (
                  <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="450" stroke="hsl(200, 20%, 90%)" strokeWidth="0.5" />
                ))}

                {/* Simplified Indonesia Islands */}
                {/* Sumatra */}
                <path d="M120,120 L160,100 L200,130 L220,180 L230,240 L210,300 L180,330 L140,310 L120,260 L100,200 L110,150 Z" 
                  fill="hsl(145, 35%, 85%)" stroke="hsl(145, 35%, 60%)" strokeWidth="1.5" />
                
                {/* Kalimantan */}
                <path d="M260,80 L320,60 L380,80 L400,130 L390,200 L360,250 L310,270 L270,240 L250,180 L240,120 Z"
                  fill="hsl(145, 35%, 85%)" stroke="hsl(145, 35%, 60%)" strokeWidth="1.5" />
                
                {/* Java */}
                <path d="M250,310 L310,295 L370,290 L430,295 L480,300 L520,310 L500,330 L440,335 L370,330 L300,325 L260,320 Z"
                  fill="hsl(145, 35%, 85%)" stroke="hsl(145, 35%, 60%)" strokeWidth="1.5" />
                
                {/* Sulawesi */}
                <path d="M520,100 L550,80 L580,100 L590,150 L610,130 L640,140 L630,180 L600,200 L580,250 L560,280 L540,260 L550,220 L530,200 L520,150 Z"
                  fill="hsl(145, 35%, 85%)" stroke="hsl(145, 35%, 60%)" strokeWidth="1.5" />
                
                {/* Bali & NTB & NTT */}
                <ellipse cx="530" cy="340" rx="20" ry="10" fill="hsl(145, 35%, 85%)" stroke="hsl(145, 35%, 60%)" strokeWidth="1.5" />
                <ellipse cx="570" cy="350" rx="25" ry="10" fill="hsl(145, 35%, 85%)" stroke="hsl(145, 35%, 60%)" strokeWidth="1.5" />
                <ellipse cx="620" cy="355" rx="30" ry="10" fill="hsl(145, 35%, 85%)" stroke="hsl(145, 35%, 60%)" strokeWidth="1.5" />
                
                {/* Papua */}
                <path d="M780,120 L830,100 L880,110 L920,140 L900,200 L860,250 L820,240 L790,200 L770,160 Z"
                  fill="hsl(145, 35%, 85%)" stroke="hsl(145, 35%, 60%)" strokeWidth="1.5" />

                {/* Location pins with pulse animation */}
                {locationPins.map((pin, i) => {
                  const cx = pin.x * 10;
                  const cy = pin.y * 5;
                  return (
                    <g key={pin.name}>
                      {/* Pulse ring */}
                      <circle cx={cx} cy={cy} r="12" fill="hsl(145, 45%, 38%)" opacity="0.15">
                        <animate attributeName="r" values="8;18;8" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.2;0;0.2" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                      </circle>
                      {/* Pin dot */}
                      <circle cx={cx} cy={cy} r="6" fill="hsl(145, 45%, 38%)" stroke="white" strokeWidth="2" />
                      {/* Label */}
                      <text x={cx} y={cy - 14} textAnchor="middle" fontSize="10" fontWeight="600" fill="hsl(30, 30%, 12%)">
                        {pin.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Legend */}
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

          {/* Product Location Cards below map */}
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

export default OurLocationSection;
