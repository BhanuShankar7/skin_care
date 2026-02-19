import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { products, categories } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ScrollRevealCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={isVisible ? "animate-back-in-up" : "opacity-0"}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = products.filter(p => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const { addItem } = useCart();

  return (
    <main className="pt-28 pb-20 bg-sage min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.25em] uppercase gold-text mb-3 animate-back-in-up">The Collection</p>
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4 animate-back-in-up">Shop VERDÉLUXE</h1>
          <div className="gold-divider animate-back-in-up-delay" />
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12 relative animate-back-in-up-delay-2">
          <div className="relative group">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-b border-gold/30 py-3 pl-4 pr-10 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-all duration-300"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-gold transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
        </div>

        <div className="flex justify-center gap-4 md:gap-8 mb-12 flex-wrap animate-back-in-up-delay-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-xs tracking-[0.15em] uppercase pb-2 border-b-2 transition-all duration-300 ${activeCategory === cat ? "border-accent gold-text" : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filtered.map((product, i) => (
            <ScrollRevealCard key={product.id} delay={i * 80}>
              <div className="luxury-card !bg-primary group cursor-pointer">
                <Link to={`/product/${product.id}`}>
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </Link>
                <div className="p-5">
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-cream/50 mb-2">{product.category}</p>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-heading text-lg text-cream mb-2 hover:text-gold transition-colors">{product.name}</h3>
                  </Link>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm gold-text">{product.price}</span>
                    <button
                      onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image })}
                      className="font-body text-[10px] tracking-[0.15em] uppercase text-cream/60 hover:text-gold transition-colors duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </ScrollRevealCard>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Shop;
