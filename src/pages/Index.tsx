import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import FeaturedProducts from "@/components/landing/FeaturedProducts";
import IngredientsSection from "@/components/landing/IngredientsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CTASection from "@/components/landing/CTASection";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeaturedProducts />
      <IngredientsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
};

export default Index;
