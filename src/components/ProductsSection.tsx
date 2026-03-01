import AnimatedSection from "./AnimatedSection";
import product1 from "@/assets/product1.jpg";
import product2 from "@/assets/product2.jpg";
import product3 from "@/assets/product3.jpg";
import product4 from "@/assets/product4.jpg";

const products = [
  { image: product1, name: "Komponen Presisi CNC", desc: "Komponen logam presisi tinggi dengan toleransi ketat untuk aplikasi industri otomotif dan elektronik." },
  { image: product2, name: "Baja Struktural", desc: "Baja profil H-Beam dan I-Beam berkualitas tinggi untuk konstruksi gedung dan infrastruktur." },
  { image: product3, name: "Pipa & Tabung Industri", desc: "Pipa stainless steel dan carbon steel dalam berbagai ukuran untuk kebutuhan industri." },
  { image: product4, name: "Lembaran & Plat Logam", desc: "Plat baja galvanis dan stainless steel dengan ketebalan bervariasi untuk berbagai aplikasi." },
];

const ProductsSection = () => (
  <section id="products" className="section-padding bg-background">
    <div className="container mx-auto">
      <AnimatedSection className="text-center mb-16">
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">
          Products
        </span>
        <h2 className="section-title mt-2">Produk Unggulan Kami</h2>
        <p className="section-subtitle">
          Produk berkualitas tinggi yang diproduksi dengan teknologi modern
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
        {products.map((p, i) => (
          <AnimatedSection key={p.name} delay={i * 0.1}>
            <div className="group card-corporate overflow-hidden !p-0">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-primary mb-2">{p.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
                <button className="text-sm font-semibold text-accent hover:text-blue-glow transition-colors">
                  Lihat Detail →
                </button>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
