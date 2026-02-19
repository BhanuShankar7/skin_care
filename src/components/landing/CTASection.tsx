import { useScrollReveal } from "@/hooks/useScrollReveal";

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-primary text-center">
      <div ref={ref} className={`max-w-2xl mx-auto ${isVisible ? "animate-back-in-up" : "opacity-0"}`}>
        <div className="gold-divider mb-8" />
        <h2 className="font-heading text-3xl md:text-5xl text-cream italic mb-6">
          Elevate Your Skin Ritual
        </h2>
        <p className="font-body text-sm text-cream/70 tracking-wider mb-10 leading-relaxed">
          Discover the art of botanical luxury. Every product is a journey — from garden to glow.
        </p>
        <a
          href="/shop"
          className="btn-luxury-outline inline-block hover:shadow-[0_0_30px_hsl(43_74%_49%/0.3)]"
        >
          Shop Now
        </a>
        <div className="gold-divider mt-10" />
      </div>
    </section>
  );
};

export default CTASection;
