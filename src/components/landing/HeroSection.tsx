import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = ({ triggerAnimation = true }: { triggerAnimation?: boolean }) => {
  const animationClass = (baseClass: string) =>
    triggerAnimation ? baseClass : "opacity-0";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary/70" />
      {/* Vignette */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at center, transparent 40%, hsl(153 100% 13% / 0.6) 100%)"
      }} />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className={animationClass("gold-divider mb-8 animate-back-in-up")} />
        <h1 className={animationClass("font-heading text-4xl md:text-6xl lg:text-7xl text-cream leading-tight animate-back-in-up")}>
          Nature Refined.
          <br />
          <span className="italic gold-text">Skin Perfected.</span>
        </h1>
        <p className={animationClass("font-body text-sm md:text-base text-cream/80 mt-6 tracking-wider leading-relaxed max-w-xl mx-auto animate-back-in-up-delay")}>
          Experience botanical luxury crafted with tradition & strength.
        </p>
        <div className={animationClass("flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-back-in-up-delay-2")}>
          <a href="/shop" className="btn-luxury-primary">
            Explore Collection
          </a>
          <a href="/story" className="btn-luxury-outline">
            Discover Our Story
          </a>
        </div>
        <div className={animationClass("gold-divider mt-12 animate-back-in-up-delay-2")} />
      </div>
    </section>
  );
};

export default HeroSection;
