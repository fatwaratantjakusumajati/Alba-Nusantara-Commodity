import { Shield, Lightbulb, Users, Award, Leaf, Heart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const values = [
  { icon: Shield, title: "Integritas", desc: "Menjunjung tinggi kejujuran dan transparansi dalam setiap aspek bisnis" },
  { icon: Lightbulb, title: "Inovasi", desc: "Terus berinovasi dan mengadopsi teknologi terbaru untuk peningkatan kualitas" },
  { icon: Award, title: "Kualitas", desc: "Mengutamakan standar kualitas tertinggi di setiap tahap produksi" },
  { icon: Users, title: "Kolaborasi", desc: "Membangun kerja sama tim yang solid dan kemitraan yang saling menguntungkan" },
  { icon: Leaf, title: "Keberlanjutan", desc: "Berkomitmen pada praktik bisnis yang ramah lingkungan dan berkelanjutan" },
  { icon: Heart, title: "Dedikasi", desc: "Memberikan pelayanan terbaik dengan penuh dedikasi dan tanggung jawab" },
];

const CoreValuesSection = () => (
  <section id="core-values" className="section-padding bg-background">
    <div className="container mx-auto">
      <AnimatedSection className="text-center mb-16">
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">
          Core Values
        </span>
        <h2 className="section-title mt-2">Nilai Inti Kami</h2>
        <p className="section-subtitle">
          Prinsip fundamental yang menjadi landasan budaya perusahaan
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((v, i) => (
          <AnimatedSection key={v.title} delay={i * 0.1}>
            <div className="card-corporate group text-center h-full">
              <div className="w-14 h-14 rounded-xl gradient-accent mx-auto mb-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <v.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CoreValuesSection;
