import { useNavigate } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import product1 from "@/assets/product1.jpg";
import product2 from "@/assets/product2.jpg";
import product3 from "@/assets/product3.jpg";
import product4 from "@/assets/product4.jpg";

const products = [
  { image: product1, name: "Essential Oil", desc: "Minyak atsiri murni berkualitas tinggi dari tanaman aromatik pilihan Indonesia untuk aromaterapi dan industri.", slug: "essential-oil" },
  { image: product2, name: "Bird Nest", desc: "Sarang burung walet premium yang dipanen dan diproses dengan standar higienis tertinggi untuk pasar ekspor.", slug: "bird-nest" },
  { image: product3, name: "Cocoa Beans", desc: "Biji kakao fermentasi berkualitas dari perkebunan Sulawesi dan Sumatera untuk industri cokelat dunia.", slug: "cocoa-beans" },
  { image: product4, name: "Clove", desc: "Cengkeh kering premium dari Maluku dan Sulawesi dengan kadar eugenol tinggi untuk berbagai kebutuhan industri.", slug: "clove" },
];

const ProductsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="products" className="section-padding bg-background">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            Products
          </span>
          <h2 className="section-title mt-2">Produk Unggulan Kami</h2>
          <p className="section-subtitle">
            Produk alam premium Indonesia yang diproses dengan teknologi modern
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
                  <button
                    onClick={() => navigate(`/product/${p.slug}`)}
                    className="text-sm font-semibold text-green-accent hover:text-green-glow transition-colors"
                  >
                    Lihat Detail & Proses Produksi →
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
