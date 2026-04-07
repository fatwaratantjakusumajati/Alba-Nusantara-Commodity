import AnimatedSection from "@/components/AnimatedSection";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const productLocations = [
  {
    name: "Bird Nest",
    emoji: "🪹",
    gradient: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/30",
    accentColor: "text-amber-600",
    dotColor: "bg-amber-500",
    locations: ["Kalimantan Barat", "Sulawesi Utara", "Jawa Timur", "Nusa Tenggara Barat"],
  },
  {
    name: "Cloves",
    emoji: "🌿",
    gradient: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    accentColor: "text-green-600",
    dotColor: "bg-green-500",
    locations: ["Manado", "Nusa Tenggara Timur", "Bali", "Ponorogo", "Malang", "Tulungagung", "Trenggalek"],
  },
  {
    name: "Cocoa",
    emoji: "🫘",
    gradient: "from-amber-700/20 to-yellow-700/20",
    borderColor: "border-amber-700/30",
    accentColor: "text-amber-800",
    dotColor: "bg-amber-700",
    locations: ["Jawa Timur"],
  },
  {
    name: "Essential Oil",
    emoji: "🧴",
    gradient: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
    accentColor: "text-emerald-600",
    dotColor: "bg-emerald-500",
    locations: ["Jawa Timur"],
  },
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

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
          {productLocations.map((product, i) => (
            <AnimatedSection key={product.name} delay={i * 0.1}>
              <div
                className={`relative rounded-2xl border ${product.borderColor} bg-gradient-to-br ${product.gradient} p-6 h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center text-2xl shadow-sm">
                    {product.emoji}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">{product.name}</h3>
                    <span className={`text-xs font-medium ${product.accentColor}`}>
                      {product.locations.length} {product.locations.length === 1 ? "area" : "areas"}
                    </span>
                  </div>
                </div>

                {/* Location tags */}
                <div className="flex flex-wrap gap-2">
                  {product.locations.map((loc) => (
                    <div
                      key={loc}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/80 border border-border/50 text-sm text-foreground"
                    >
                      <MapPin className="w-3 h-3 text-green-accent shrink-0" />
                      <span className="text-xs font-medium">{loc}</span>
                    </div>
                  ))}
                </div>

                {/* Decorative dot */}
                <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${product.dotColor} opacity-60`} />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurLocationSection;
