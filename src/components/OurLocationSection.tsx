import AnimatedSection from "@/components/AnimatedSection";
import { MapPin } from "lucide-react";

const locations = [
  {
    product: "Bird Nest",
    icon: "🪹",
    regions: ["West Kalimantan", "Central Sulawesi", "East Java", "West Nusa Tenggara"],
  },
  {
    product: "Cloves",
    icon: "🌿",
    regions: ["North Sulawesi", "East Java", "Bali", "East Nusa Tenggara"],
  },
  {
    product: "Cocoa",
    icon: "🫘",
    regions: ["East Java"],
  },
  {
    product: "Essential Oil",
    icon: "🧴",
    regions: ["East Java"],
  },
];

const OurLocationSection = () => (
  <section className="section-padding bg-muted/30" id="location">
    <div className="container mx-auto">
      <AnimatedSection className="text-center mb-16">
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">
          Sourcing Areas
        </span>
        <h2 className="section-title mt-2">Our Location</h2>
        <p className="section-subtitle">
          Kami memperoleh bahan baku berkualitas tinggi dari berbagai wilayah strategis di Indonesia
        </p>
      </AnimatedSection>

      {/* Indonesia Map Visual */}
      <AnimatedSection>
        <div className="relative max-w-5xl mx-auto mb-16">
          {/* Stylized Indonesia shape using gradient background */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 via-green-accent/5 to-accent/5 border border-border p-8 md:p-12">
            {/* Decorative dots pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
              backgroundSize: "20px 20px"
            }} />
            
            {/* Map pins scattered */}
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "West Kalimantan", top: "20%", left: "25%" },
                { name: "Central Sulawesi", top: "15%", left: "60%" },
                { name: "North Sulawesi", top: "10%", left: "65%" },
                { name: "East Java", top: "60%", left: "45%" },
                { name: "Bali", top: "65%", left: "50%" },
                { name: "West Nusa Tenggara", top: "70%", left: "52%" },
                { name: "East Nusa Tenggara", top: "75%", left: "58%" },
              ].map((pin, i) => (
                <AnimatedSection key={pin.name} delay={i * 0.08} className={i > 3 ? "hidden md:block" : ""}>
                  <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-border/50" style={{ boxShadow: "var(--shadow-sm)" }}>
                    <MapPin className="w-4 h-4 text-green-accent shrink-0" />
                    <span className="text-xs font-medium text-foreground truncate">{pin.name}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Product Location Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {locations.map((loc, i) => (
          <AnimatedSection key={loc.product} delay={i * 0.1}>
            <div className="card-corporate h-full text-center group">
              <div className="text-4xl mb-4">{loc.icon}</div>
              <h3 className="text-lg font-bold text-primary mb-4">{loc.product}</h3>
              <div className="space-y-2">
                {loc.regions.map((region) => (
                  <div key={region} className="flex items-center gap-2 justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-accent shrink-0" />
                    <span className="text-sm text-muted-foreground">{region}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default OurLocationSection;
