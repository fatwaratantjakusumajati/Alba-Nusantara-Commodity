import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ProductsSection from "@/components/ProductsSection";
import OurLocationSection from "@/components/OurLocationSection";
import OurMarketsSection from "@/components/OurMarketsSection";
import CtaSection from "@/components/CtaSection";
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
      <OurLocationSection />
      <OurMarketsSection />
      <ProductsSection />
      <CtaSection />
    </main>
    <FooterSection />
    <ScrollToTop />
  </>
);

export default Index;
