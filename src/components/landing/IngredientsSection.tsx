import { Leaf, ShieldCheck, HeartHandshake } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const highlights = [
  {
    icon: Leaf,
    title: "Organic Extracts",
    description: "Sourced from certified organic farms, our botanical extracts deliver unparalleled purity and potency.",
  },
  {
    icon: ShieldCheck,
    title: "Dermatologically Tested",
    description: "Every formula undergoes rigorous clinical testing to ensure safety and efficacy for all skin types.",
  },
  {
    icon: HeartHandshake,
    title: "Cruelty Free",
    description: "We are proudly cruelty-free. No animal testing, ever. Beauty without compromise.",
  },
];

const IngredientsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-secondary">
      <div ref={ref} className={`max-w-5xl mx-auto text-center ${isVisible ? "animate-back-in-up" : "opacity-0"}`}>
        <p className="font-body text-xs tracking-[0.25em] uppercase gold-text mb-4">Our Promise</p>
        <h2 className="font-heading text-3xl md:text-4xl text-secondary-foreground mb-6">
          Pure Ingredients, Powerful Results
        </h2>
        <div className="gold-divider mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {highlights.map((item, i) => {
            const { ref: itemRef, isVisible: itemVisible } = useScrollReveal(0.1);
            return (
              <div
                key={item.title}
                ref={itemRef}
                className={`flex flex-col items-center ${itemVisible ? "animate-back-in-up" : "opacity-0"}`}
                style={{
                  animationDelay: `${i * 150}ms`,
                }}
              >
                <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mb-6">
                  <item.icon size={28} className="gold-text" strokeWidth={1.2} />
                </div>
                <h3 className="font-heading text-xl text-secondary-foreground mb-3">{item.title}</h3>
                <p className="font-body text-sm text-secondary-foreground/70 leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
