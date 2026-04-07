import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { productsData } from "@/data/products";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ScrollToTop from "@/components/ScrollToTop";

const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-primary mb-4">{t("detail.not_found")}</h1>
            <button onClick={() => navigate("/")} className="text-green-accent font-semibold hover:text-green-glow transition-colors">
              ← {t("detail.back")}
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />

      <section className="relative pt-20">
        <div className="relative h-[65vh] md:h-[75vh] overflow-hidden">
          <img src={product.detailImage || product.image} alt={product.name} className="w-full h-full object-cover" style={{ objectPosition: "center 40%" }} loading="eager" />
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 flex items-start pt-24 z-10">
            <div className="container mx-auto px-4">
              <AnimatedSection>
                <button
                  onClick={() => navigate("/")}
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6 text-sm font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {t("detail.back")}
                </button>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground tracking-tight mb-4">
                  {product.name}
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
                  {t(product.tagline) !== product.tagline ? t(product.tagline) : product.tagline}
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <AnimatedSection>
                <span className="text-sm font-semibold text-accent uppercase tracking-widest">
                  {t("detail.about_product")}
                </span>
                <h2 className="section-title mt-2 mb-6">{t("detail.description")}</h2>
                {product.description.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
                ))}
              </AnimatedSection>
            </div>
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.2}>
                <div className="card-corporate h-full">
                  <h3 className="text-xl font-bold text-primary mb-5">{t("detail.benefits")}</h3>
                  <div className="space-y-3">
                    {product.benefits.map((b, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <div className="w-6 h-6 rounded-full gradient-accent flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-accent-foreground">{i + 1}</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{b}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">
              {t("detail.process_label")}
            </span>
            <h2 className="section-title mt-2">{t("detail.process_title")} {product.name}</h2>
            <p className="section-subtitle">{t("detail.process_subtitle")}</p>
          </AnimatedSection>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            <div className="space-y-8 md:space-y-12">
              {product.steps.map((step, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <AnimatedSection key={step.title} delay={i * 0.1}>
                    <div className={`relative flex items-start gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                      <div className={`flex-1 md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                        <div className="bg-card border border-border rounded-xl p-5" style={{ boxShadow: "var(--shadow-sm)" }}>
                          <span className="text-xs font-bold text-green-accent uppercase tracking-wider">
                            {t("detail.stage")} {i + 1}
                          </span>
                          <h3 className="text-lg font-bold text-primary mt-1 mb-2">{step.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full gradient-accent flex items-center justify-center z-10 shrink-0" style={{ boxShadow: "var(--shadow-md)" }}>
                        <step.icon className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div className="hidden md:block flex-1 md:w-1/2" />
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 className="section-title mb-4">{t("detail.interested")} {product.name}?</h2>
            <p className="section-subtitle mb-8">{t("detail.cta_desc")}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    const el = document.getElementById("contact");
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 80;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }, 100);
                }}
                className="gradient-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                style={{ boxShadow: "var(--shadow-md)" }}
              >
                {t("detail.contact_us")}
              </button>
              <button
                onClick={() => navigate("/")}
                className="px-8 py-4 rounded-lg font-semibold border border-border text-primary hover:bg-muted transition-colors"
              >
                {t("detail.other_products")}
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <FooterSection />
      <ScrollToTop />
    </>
  );
};

export default ProductDetailPage;
