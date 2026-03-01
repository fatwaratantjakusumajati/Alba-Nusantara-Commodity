import AnimatedSection from "./AnimatedSection";
import aboutImg from "@/assets/about.jpg";

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <AnimatedSection>
          <div className="relative">
            <img
              src={aboutImg}
              alt="Tim profesional PT. MetalPro"
              className="w-full rounded-2xl object-cover aspect-[4/3]"
              style={{ boxShadow: "var(--shadow-lg)" }}
            />
            <div className="absolute -bottom-6 -right-6 gradient-navy text-primary-foreground rounded-xl p-6 hidden md:block" style={{ boxShadow: "var(--shadow-xl)" }}>
              <div className="text-3xl font-black">28+</div>
              <div className="text-sm text-primary-foreground/80">Tahun Pengalaman</div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            Tentang Kami
          </span>
          <h2 className="section-title mt-2 mb-6">
            Mitra Manufaktur Terpercaya di Indonesia
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            PT. MetalPro Indonesia didirikan pada tahun 1995 dan telah berkembang
            menjadi salah satu perusahaan manufaktur terkemuka di Indonesia.
            Dengan fasilitas produksi seluas 25.000 m² dan lebih dari 500
            karyawan terampil, kami memproduksi berbagai komponen logam presisi
            untuk industri otomotif, konstruksi, dan infrastruktur.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Komitmen kami terhadap kualitas dibuktikan dengan sertifikasi ISO
            9001:2015, ISO 14001:2015, dan OHSAS 18001. Kami terus berinovasi
            dengan teknologi terkini untuk memenuhi standar tertinggi.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: "500+", label: "Karyawan" },
              { value: "1200+", label: "Proyek" },
              { value: "50+", label: "Klien" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
