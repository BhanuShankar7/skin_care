import { Star } from "lucide-react";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "Isabelle Laurent",
    text: "VERDÉLUXE transformed my entire skincare ritual. The Botanical Radiance Serum is pure liquid gold — my skin has never looked more luminous.",
    rating: 5,
  },
  {
    name: "Sophia Chen",
    text: "Finally, a luxury brand that delivers on its promises. The ingredients are clean, the results are visible, and the experience is truly premium.",
    rating: 5,
  },
  {
    name: "Amara Okafor",
    text: "The Elixir Face Oil is my holy grail product. It absorbs beautifully and leaves my skin feeling nourished without any heaviness. Absolutely divine.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-sage">
      <div ref={ref} className={`max-w-3xl mx-auto text-center ${isVisible ? "animate-back-in-up" : "opacity-0"}`}>
        <p className="font-body text-xs tracking-[0.25em] uppercase gold-text mb-4">Testimonials</p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-12">What Our Clients Say</h2>

        <div className="relative">
          <div className="font-heading text-6xl gold-text opacity-30 mb-4">"</div>
          <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed italic mb-8 min-h-[100px]">
            {testimonials[active].text}
          </p>
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: testimonials[active].rating }).map((_, i) => (
              <Star key={i} size={14} className="gold-text fill-current" />
            ))}
          </div>
          <p className="font-body text-sm tracking-[0.15em] uppercase text-foreground/60">
            {testimonials[active].name}
          </p>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === active ? "bg-accent scale-125" : "bg-foreground/20"
                }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
