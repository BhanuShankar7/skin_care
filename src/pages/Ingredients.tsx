import { useScrollReveal } from "@/hooks/useScrollReveal";
import ayurvedaTurmeric from "@/assets/ayurveda-turmeric.jpg";
import ayurvedaHerbs from "@/assets/ayurveda-herbs.jpg";
import ayurvedaOils from "@/assets/ayurveda-oils.jpg";
import { Leaf, Droplets, Sun, Shield, Heart, Sparkles } from "lucide-react";

const ayurvedaIngredients = [
  {
    name: "Kumkumadi Tailam",
    description: "A legendary Ayurvedic oil blend of saffron, sandalwood, and lotus — revered for centuries for its ability to brighten, rejuvenate, and bestow a luminous golden glow.",
    icon: Sun,
    image: ayurvedaTurmeric,
  },
  {
    name: "Ashwagandha",
    description: "The 'Strength of a Stallion' — this powerful adaptogen reduces cortisol-driven skin damage, boosts collagen production, and restores youthful vitality from within.",
    icon: Shield,
    image: ayurvedaHerbs,
  },
  {
    name: "Neem & Tulsi",
    description: "Sacred purifiers in Ayurveda. Neem detoxifies and fights acne-causing bacteria while Tulsi (Holy Basil) soothes inflammation and protects against environmental stress.",
    icon: Leaf,
    image: ayurvedaOils,
  },
  {
    name: "Sandalwood (Chandan)",
    description: "Used in Ayurveda for over 4,000 years. Sandalwood cools pitta imbalances, fades hyperpigmentation, and imparts an ethereal, even-toned complexion.",
    icon: Droplets,
    image: ayurvedaTurmeric,
  },
  {
    name: "Bakuchiol",
    description: "Nature's retinol alternative, derived from the Babchi plant. Stimulates cell turnover and collagen synthesis without irritation — proven effective in clinical studies.",
    icon: Sparkles,
    image: ayurvedaHerbs,
  },
  {
    name: "Shatavari",
    description: "The 'Queen of Herbs' — rich in antioxidants and saponins that deeply hydrate, promote elasticity, and support the skin's natural moisture barrier.",
    icon: Heart,
    image: ayurvedaOils,
  },
];

const ScrollRevealDiv = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? "animate-back-in-up" : "opacity-0"}`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const Ingredients = () => {
  return (
    <main className="pt-28 pb-20 min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-primary text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-xs tracking-[0.25em] uppercase gold-text mb-4 animate-back-in-up">Ancient Wisdom, Modern Science</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-6 animate-back-in-up">
            The Power of <span className="italic gold-text">Ayurveda</span>
          </h1>
          <div className="gold-divider animate-back-in-up-delay" />
          <p className="font-body text-sm md:text-base text-cream/70 leading-relaxed mt-8 max-w-2xl mx-auto animate-back-in-up-delay-2">
            For over 5,000 years, Ayurveda has unlocked nature's most potent healing secrets.
            At VERDÉLUXE, we honor this ancient tradition by incorporating time-tested botanicals
            into formulations validated by modern dermatological science.
          </p>
        </div>
      </section>

      {/* Ingredients Grid */}
      <section className="section-padding bg-sage">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ayurvedaIngredients.map((ingredient, i) => (
              <ScrollRevealDiv key={ingredient.name} delay={i * 100}>
                <div className="luxury-card !bg-primary group overflow-hidden">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={ingredient.image}
                      alt={ingredient.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/10 transition-colors duration-500" />
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center bg-primary/60 backdrop-blur-sm">
                      <ingredient.icon size={18} className="gold-text" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl text-cream mb-3">{ingredient.name}</h3>
                    <p className="font-body text-sm text-cream/60 leading-relaxed">{ingredient.description}</p>
                  </div>
                </div>
              </ScrollRevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollRevealDiv>
            <p className="font-body text-xs tracking-[0.25em] uppercase gold-text mb-4">Our Philosophy</p>
            <h2 className="font-heading text-3xl md:text-4xl text-secondary-foreground mb-6">
              Dosha-Balanced Formulations
            </h2>
            <div className="gold-divider mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                { dosha: "Vata", desc: "Nourishing oils and rich butters to combat dryness and restore moisture balance." },
                { dosha: "Pitta", desc: "Cooling botanicals like sandalwood and rose to soothe sensitivity and redness." },
                { dosha: "Kapha", desc: "Purifying herbs like neem and tulsi to detoxify and balance oily, congested skin." },
              ].map((d) => (
                <div key={d.dosha} className="border border-gold/20 rounded-sm p-6">
                  <h3 className="font-heading text-2xl gold-text mb-3">{d.dosha}</h3>
                  <p className="font-body text-sm text-secondary-foreground/70 leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </ScrollRevealDiv>
        </div>
      </section>
    </main>
  );
};

export default Ingredients;
