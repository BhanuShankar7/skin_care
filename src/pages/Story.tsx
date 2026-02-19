import { useEffect } from "react";
import storyBg from "@/assets/ayurveda-herbs.jpg";
import storyDetail from "@/assets/ayurveda-oils.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Story = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-soft-cream min-h-screen">
            {/* Hero */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroBg})` }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-primary/70" />

                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <p className="font-body text-xs tracking-[0.25em] uppercase gold-text mb-4 animate-back-in-up">A Journey Through Time</p>
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl text-cream mb-8 animate-back-in-up-delay">
                        The Legend of <span className="italic gold-text">Verdéluxe</span>
                    </h1>
                    <div className="gold-divider mx-auto mb-10 animate-back-in-up-delay-2" />
                    <p className="font-body text-base md:text-lg text-cream/80 leading-relaxed max-w-2xl mx-auto animate-back-in-up-delay-2">
                        Where ancient botanical wisdom meets the precision of modern science.
                        This is not just skincare—it is a legacy of purity, potency, and perfection.
                    </p>
                </div>
            </section>

            {/* The Origin */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6">
                    <div className="order-2 lg:order-1 relative">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
                        <img
                            src={storyBg}
                            alt="Ancient herbal roots"
                            className="relative z-10 w-full h-[500px] object-cover rounded-sm shadow-xl hover:scale-[1.01] transition-transform duration-700 animate-back-in-up"
                        />
                        <div className="absolute -bottom-5 -right-5 w-full h-full border border-primary/20 z-0" />
                    </div>
                    <div className="order-1 lg:order-2 animate-back-in-up">
                        <h2 className="font-heading text-3xl md:text-4xl text-primary mb-6">The Origin</h2>
                        <div className="gold-divider !mx-0 mb-6" />
                        <p className="font-body text-muted-foreground mb-6 leading-loose">
                            It began in the misty gardens of the East, where our founder, seeking a cure for sensitive skin that conventional products ignored, discovered the transformative power of adaptogenic herbs.
                        </p>
                        <p className="font-body text-muted-foreground mb-6 leading-loose">
                            Unlike the harsh synthetics of the West, these botanicals didn't just mask imperfections—they healed them. They spoke the language of the skin itself.
                        </p>
                        <blockquote className="border-l-2 border-gold pl-6 py-2 italic text-lg text-foreground/80 my-8">
                            "We don't invent beauty. We simply reveal the masterpiece that nature has already painted."
                        </blockquote>
                    </div>
                </div>
            </section>

            {/* The Philosophy */}
            <section className="section-padding bg-sage/30">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6">
                    <div className="animate-back-in-up">
                        <h2 className="font-heading text-3xl md:text-4xl text-primary mb-6">Our Philosophy</h2>
                        <div className="gold-divider !mx-0 mb-6" />
                        <p className="font-body text-muted-foreground mb-6 leading-loose">
                            We believe in "Slow Beauty." In a world that rushes, we pause. We extract our actives using a slow-drip cold-press method that preserves 99% of the plant's nutrient profile.
                        </p>
                        <p className="font-body text-muted-foreground mb-6 leading-loose">
                            Every bottle of Verdéluxe is a testament to patience. We wait for the seasons. We harvest by hand. We formulate with intention. Because your skin deserves nothing less than time itself.
                        </p>
                        <ul className="space-y-4 mt-8">
                            {['Sustainably Sourced', 'Cruelty-Free', 'Dermatologist Tested', 'Small Batch Production'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-sm tracking-wide uppercase font-medium text-primary">
                                    <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <img
                            src={storyDetail}
                            alt="Crafting the oils"
                            className="w-full h-[500px] object-cover rounded-sm shadow-xl animate-back-in-up-delay"
                        />
                        <div className="absolute inset-0 bg-primary/10 hover:bg-transparent transition-colors duration-500" />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-primary text-center">
                <div className="max-w-2xl mx-auto px-6 animate-back-in-up">
                    <h2 className="font-heading text-3xl md:text-4xl text-cream mb-6">Be Part of Our Story</h2>
                    <p className="font-body text-cream/80 mb-10 text-lg">
                        Your skin has its own story to tell. Let us help you write the next beautiful chapter.
                    </p>
                    <a href="/shop" className="btn-luxury-outline text-cream border-cream hover:bg-cream hover:text-primary">
                        Begin Your Journey
                    </a>
                </div>
            </section>
        </main>
    );
};

export default Story;
