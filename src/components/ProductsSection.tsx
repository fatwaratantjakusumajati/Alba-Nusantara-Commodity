import { useNavigate } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import product1 from "@/assets/product1.jpg";
import product2 from "@/assets/product2.jpg";
import product3 from "@/assets/product3.jpg";
import product4 from "@/assets/product4.jpg";

const ProductsSection = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const products = [
    { image: product1, name: t("prod.essential_oil.name"), desc: t("prod.essential_oil.desc"), slug: "essential-oil" },
    { image: product2, name: t("prod.bird_nest.name"), desc: t("prod.bird_nest.desc"), slug: "bird-nest" },
    { image: product3, name: t("prod.cocoa.name"), desc: t("prod.cocoa_beans.desc"), slug: "cocoa-beans" },
    { image: product4, name: t("prod.clove.name"), desc: t("prod.clove.desc"), slug: "clove" },
  ];

  return (
    <section id="products" className="section-padding bg-background">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            {t("prod.label")}
          </span>
          <h2 className="section-title mt-2">{t("prod.title")}</h2>
          <p className="section-subtitle">{t("prod.subtitle")}</p>
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
                    {t("prod.view_detail")}
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
