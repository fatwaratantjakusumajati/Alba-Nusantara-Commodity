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
              alt="Tim NusaNature"
              className="w-full rounded-2xl object-cover aspect-[4/3]"
              style={{ boxShadow: "var(--shadow-lg)" }}
            />
            <div className="absolute -bottom-6 -right-6 gradient-forest text-primary-foreground rounded-xl p-6 hidden md:block" style={{ boxShadow: "var(--shadow-xl)" }}>
              <div className="text-3xl font-black">15+</div>
              <div className="text-sm text-primary-foreground/80">Tahun Pengalaman</div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            Tentang Kami
          </span>
          <h2 className="section-title mt-2 mb-6">
            Produk Alam Premium dari Indonesia
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            NusaNature adalah perusahaan yang berfokus pada pengolahan dan distribusi produk alam premium Indonesia. Didirikan pada tahun 2009, kami berkomitmen menghadirkan kualitas terbaik dari kekayaan alam Nusantara — mulai dari Essential Oil, Bird Nest, Cocoa Beans, hingga Clove — untuk pasar domestik dan internasional.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Dengan fasilitas pengolahan modern dan tim ahli berpengalaman, kami memastikan setiap produk melewati proses quality control ketat untuk memenuhi standar ekspor tertinggi. Sertifikasi ISO 22000 dan HACCP menjadi bukti komitmen kami terhadap kualitas.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: "200+", label: "Karyawan" },
              { value: "30+", label: "Negara Ekspor" },
              { value: "500+", label: "Mitra" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-green-accent">{stat.value}</div>
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
