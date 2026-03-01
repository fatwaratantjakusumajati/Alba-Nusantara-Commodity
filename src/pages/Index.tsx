import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ProductsSection from "@/components/ProductsSection";
import ProductionProcessSection from "@/components/ProductionProcessSection";
import FooterSection from "@/components/FooterSection";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <CoreValuesSection />
      <WhyChooseUsSection />
      <ProductsSection />
      <ProductionProcessSection />
    </main>
    <FooterSection />
    <ScrollToTop />
  </>
);

export default Index;
