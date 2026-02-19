import aboutImg from "@/assets/about-brand.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-sage">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isVisible ? "animate-back-in-up" : "opacity-0"
          }`}
      >
        <div className="relative overflow-hidden rounded-sm">
          <img
            src={aboutImg}
            alt="Botanical ingredients curated with care"
            className="w-full h-[400px] lg:h-[550px] object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-primary/10" />
        </div>

        <div>
          <p className="font-body text-xs tracking-[0.25em] uppercase gold-text mb-4">Our Heritage</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
            Tradition Meets Science
          </h2>
          <div className="gold-divider !mx-0 mb-8" />
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
            At VERDÉLUXE, we believe in the ancient wisdom of botanical ingredients, refined through modern science.
            Every formula is a testament to heritage — sourced from the world's most pristine gardens and
            perfected in our laboratories.
          </p>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
            Our commitment to purity means every ingredient is chosen for its potency, sustainability,
            and ability to transform your skin ritual into a moment of luxury.
          </p>
          <a href="/about" className="btn-luxury-primary !bg-foreground !text-background">
            Discover Our Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
