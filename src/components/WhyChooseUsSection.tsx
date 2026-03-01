import { Leaf, BadgeCheck, Clock, Headphones, TrendingUp, Truck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reasons = [
  { icon: Leaf, title: "100% Alami", desc: "Produk kami berasal dari sumber alam Indonesia tanpa bahan kimia berbahaya" },
  { icon: BadgeCheck, title: "Bersertifikasi", desc: "Tersertifikasi ISO 22000, HACCP, dan Organic untuk jaminan kualitas internasional" },
  { icon: Clock, title: "Tepat Waktu", desc: "Komitmen pengiriman tepat waktu dengan sistem manajemen rantai pasok yang efisien" },
  { icon: Headphones, title: "Layanan Prima", desc: "Tim support profesional siap membantu untuk konsultasi dan kebutuhan Anda" },
  { icon: TrendingUp, title: "Kapasitas Besar", desc: "Fasilitas pengolahan modern dengan kapasitas tinggi untuk memenuhi permintaan ekspor" },
  { icon: Truck, title: "Distribusi Global", desc: "Jaringan distribusi menjangkau 30+ negara di Asia, Eropa, dan Amerika" },
];

const WhyChooseUsSection = () => (
  <section id="why-choose-us" className="section-padding bg-muted/50">
    <div className="container mx-auto">
      <AnimatedSection className="text-center mb-16">
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">
          Why Choose Us
        </span>
        <h2 className="section-title mt-2">Mengapa Memilih Kami?</h2>
        <p className="section-subtitle">
          Keunggulan yang menjadikan kami mitra terpercaya untuk produk alam Indonesia
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <AnimatedSection key={r.title} delay={i * 0.08}>
            <div className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-green-accent/30 transition-all duration-300 h-full" style={{ boxShadow: "var(--shadow-sm)" }}>
              <div className="w-12 h-12 rounded-lg bg-green-accent/10 flex items-center justify-center shrink-0">
                <r.icon className="w-6 h-6 text-green-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
