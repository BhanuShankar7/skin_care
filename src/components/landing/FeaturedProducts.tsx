import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

const featured = products.slice(0, 4);

const FeaturedProducts = () => {
  const { ref, isVisible } = useScrollReveal();
  const { addItem } = useCart();

  return (
    <section className="section-padding bg-primary">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-16 ${isVisible ? "animate-back-in-up" : "opacity-0"}`}>
          <p className="font-body text-xs tracking-[0.25em] uppercase gold-text mb-4">Curated Selection</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-cream mb-6">Featured Collection</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featured.map((product, i) => {
            const { ref: cardRef, isVisible: cardVisible } = useScrollReveal(0.1);
            return (
              <div
                key={product.id}
                ref={cardRef}
                className={cardVisible ? 'animate-back-in-up' : 'opacity-0'}
                style={{
                  animationDelay: `${i * 120}ms`,
                }}
              >
                <Link to={`/product/${product.id}`} className="luxury-card group cursor-pointer block">
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg text-cream mb-1">{product.name}</h3>
                    <p className="font-body text-xs text-cream/60 tracking-wider mb-3">{product.tagline}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-body text-sm gold-text tracking-wider">{product.price}</span>
                      <span className="font-body text-[10px] tracking-[0.2em] uppercase text-cream/50 group-hover:text-gold transition-colors duration-300">
                        View Details →
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
