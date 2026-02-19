import aboutImg from "@/assets/about-brand.jpg";

const About = () => {
  return (
    <main className="pt-28 bg-sage min-h-screen">
      {/* Hero */}
      <section className="section-padding text-center">
        <div className="max-w-3xl mx-auto animate-back-in-up">
          <p className="font-body text-xs tracking-[0.25em] uppercase gold-text mb-3">Our Story</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            The Art of Botanical Luxury
          </h1>
          <div className="gold-divider mb-8" />
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            VERDÉLUXE was born from a passion for the extraordinary power of nature. We believe that skincare
            should be a ritual — a moment of calm luxury in your day, crafted with the finest botanical ingredients.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="section-padding bg-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-back-in-up-delay">
            <p className="font-body text-xs tracking-[0.25em] uppercase gold-text mb-4">Founded in Tradition</p>
            <h2 className="font-heading text-3xl md:text-4xl text-cream mb-6">Heritage & Innovation</h2>
            <div className="gold-divider !mx-0 mb-8" />
            <p className="font-body text-sm text-cream/70 leading-relaxed mb-6">
              Our founder spent decades studying ancient botanical remedies, traveling to remote gardens
              and laboratories across continents. Every VERDÉLUXE formula honors that journey — blending
              centuries-old wisdom with cutting-edge dermatological science.
            </p>
            <p className="font-body text-sm text-cream/70 leading-relaxed">
              From seed to serum, we maintain an uncompromising standard of quality. Our ingredients are
              ethically sourced, sustainably harvested, and clinically proven to deliver visible results.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-sm animate-back-in-up">
            <img src={aboutImg} alt="Our botanical heritage" className="w-full h-[450px] object-cover" />
            <div className="absolute inset-0 bg-primary/10" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-sage">
        <div className="max-w-5xl mx-auto text-center animate-back-in-up-delay-2">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-12">Our Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Purity", desc: "Only the finest, cleanest ingredients make it into our formulas. No fillers, no compromises." },
              { title: "Sustainability", desc: "Every ingredient is responsibly sourced and every package is designed with the planet in mind." },
              { title: "Efficacy", desc: "Clinically tested, dermatologist approved. Real science, real results, real luxury." },
            ].map((v) => (
              <div key={v.title}>
                <h3 className="font-heading text-xl text-foreground mb-3">{v.title}</h3>
                <div className="gold-divider mb-4" />
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
