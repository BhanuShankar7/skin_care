import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Minus, Plus, ArrowLeft } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const tabs = ["Description", "Ingredients", "How to Use"];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [activeTab, setActiveTab] = useState("Description");
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { ref: relatedRef, isVisible: relatedVisible } = useScrollReveal();

  if (!product) {
    return (
      <main className="pt-28 pb-20 bg-sage min-h-screen text-center">
        <p className="font-body text-muted-foreground">Product not found.</p>
        <Link to="/shop" className="btn-luxury-primary inline-block mt-6">Back to Shop</Link>
      </main>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
  if (relatedProducts.length < 4) {
    const more = products.filter((p) => p.id !== product.id && !relatedProducts.includes(p)).slice(0, 4 - relatedProducts.length);
    relatedProducts.push(...more);
  }

  const tabContent: Record<string, string> = {
    Description: product.description,
    Ingredients: product.ingredients,
    "How to Use": product.howToUse,
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({ id: product.id, name: product.name, price: product.price, image: product.image });
    }
  };

  return (
    <main className="pt-28 pb-20 bg-sage min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-10">
          <Link to="/shop" className="flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={14} /> Back to Shop
          </Link>
          <span className="gold-text font-body text-xs">/</span>
          <span className="font-body text-xs tracking-[0.15em] uppercase gold-text">{product.name}</span>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image */}
          <div className="relative overflow-hidden rounded-sm aspect-[3/4] group animate-back-in-up">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center animate-back-in-up-delay">
            <p className="font-body text-xs tracking-[0.25em] uppercase gold-text mb-3">{product.category}</p>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-2">{product.name}</h1>
            <p className="font-body text-sm text-muted-foreground italic mb-6">{product.tagline}</p>
            <div className="gold-divider !mx-0 mb-8" />
            <span className="font-heading text-2xl gold-text mb-8">{product.price}</span>

            {/* Tabs */}
            <div className="flex gap-6 mb-6 border-b border-foreground/10">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`font-body text-xs tracking-[0.15em] uppercase pb-3 border-b-2 transition-all duration-300 ${activeTab === tab ? "border-accent gold-text" : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8 min-h-[80px]">
              {tabContent[activeTab]}
            </p>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-6">
              <div className="flex items-center border border-foreground/20 rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-3 text-foreground/60 hover:text-foreground transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 font-body text-sm text-foreground">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-3 text-foreground/60 hover:text-foreground transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
              <button onClick={handleAddToCart} className="btn-luxury-primary flex-1 text-center !bg-foreground !text-background">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div ref={relatedRef} className={`mt-24 ${relatedVisible ? "animate-back-in-up" : "opacity-0"}`}>
          <div className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.25em] uppercase gold-text mb-3">Discover More</p>
            <h2 className="font-heading text-3xl text-foreground">You May Also Like</h2>
            <div className="gold-divider mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="luxury-card !bg-primary group cursor-pointer animate-product-popup"
              >
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-5">
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-cream/50 mb-2">{p.category}</p>
                  <h3 className="font-heading text-lg text-cream mb-2">{p.name}</h3>
                  <span className="font-body text-sm gold-text">{p.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
