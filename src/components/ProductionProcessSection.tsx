import { ClipboardList, Cog, FlaskConical, ShieldCheck, Package, Truck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  { icon: ClipboardList, title: "Perencanaan", desc: "Analisis kebutuhan klien dan perencanaan produksi yang detail" },
  { icon: FlaskConical, title: "Desain & Pengembangan", desc: "R&D dan prototyping menggunakan software CAD/CAM terkini" },
  { icon: Cog, title: "Produksi", desc: "Proses manufaktur dengan mesin CNC dan robot otomatis presisi tinggi" },
  { icon: ShieldCheck, title: "Quality Control", desc: "Inspeksi ketat di setiap tahap dengan standar QC internasional" },
  { icon: Package, title: "Packaging", desc: "Pengemasan profesional untuk menjamin keamanan produk saat pengiriman" },
  { icon: Truck, title: "Distribusi", desc: "Pengiriman tepat waktu ke seluruh Indonesia dan ekspor internasional" },
];

const ProductionProcessSection = () => (
  <section id="production-process" className="section-padding bg-muted/50">
    <div className="container mx-auto">
      <AnimatedSection className="text-center mb-16">
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">
          Production Process
        </span>
        <h2 className="section-title mt-2">Proses Produksi</h2>
        <p className="section-subtitle">
          Tahapan produksi terstandar untuk menghasilkan produk terbaik
        </p>
      </AnimatedSection>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        <div className="space-y-8 md:space-y-12">
          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <AnimatedSection key={step.title} delay={i * 0.1}>
                <div className={`relative flex items-start gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Content */}
                  <div className={`flex-1 md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-card border border-border rounded-xl p-5" style={{ boxShadow: "var(--shadow-sm)" }}>
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">
                        Tahap {i + 1}
                      </span>
                      <h3 className="text-lg font-bold text-primary mt-1 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Circle */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full gradient-accent flex items-center justify-center z-10 shrink-0" style={{ boxShadow: "var(--shadow-md)" }}>
                    <step.icon className="w-5 h-5 text-accent-foreground" />
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden md:block flex-1 md:w-1/2" />
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default ProductionProcessSection;
