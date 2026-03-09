import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";
import hero4 from "@/assets/hero4.jpg";

const slides = [
  { image: hero1, alt: "Essential Oil premium" },
  { image: hero2, alt: "Bird Nest premium" },
  { image: hero3, alt: "Cocoa Beans premium" },
  { image: hero4, alt: "Clove premium" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const scrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
        </div>
      ))}

      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 backdrop-blur-sm mb-6">
              <span className="text-sm font-medium text-primary-foreground/90">
                Premium Natural Products from Indonesia
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[1.1] tracking-tight mb-6">
              Kekayaan Alam{" "}
              <span className="text-gradient">Nusantara</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-8 leading-relaxed">
              Menghadirkan produk alam premium — Essential Oil, Bird Nest, Cocoa Beans, dan Clove — dengan kualitas terbaik dari bumi Indonesia.
            </p>
            <button
              onClick={scrollToProducts}
              className="gradient-accent text-primary-foreground px-8 py-4 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity shadow-lg"
            >
              Lihat Produk
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-primary-foreground" : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
