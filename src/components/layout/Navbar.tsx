import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { openCart, totalItems } = useCart();
  const navigate = useNavigate();

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProductClick = (id: string) => {
    setSearchOpen(false);
    setSearchQuery("");
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass-panel ${scrolled ? "py-3" : "py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <button
          className="md:hidden text-cream"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="nav-link-luxury">Home</Link>
          <Link to="/shop" className="nav-link-luxury">Shop</Link>
          <Link to="/story" className="nav-link-luxury">Our Story</Link>
          <Link to="/about" className="nav-link-luxury">About</Link>
          <Link to="/ingredients" className="nav-link-luxury">Ingredients</Link>
        </div>

        <Link to="/" className="font-heading text-cream text-xl md:text-2xl tracking-[0.15em]">
          VERDÉLUXE
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/contact" className="nav-link-luxury">Contact</Link>
          <button className="nav-link-luxury" aria-label="Search" onClick={() => setSearchOpen(!searchOpen)}>
            <Search size={18} />
          </button>
          <button className="nav-link-luxury relative" aria-label="Cart" onClick={openCart}>
            <ShoppingBag size={18} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-accent text-accent-foreground text-[10px] flex items-center justify-center font-body">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-4">
          <button className="text-cream" aria-label="Cart" onClick={openCart}>
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent text-accent-foreground text-[10px] flex items-center justify-center font-body">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="absolute top-full left-0 w-full bg-primary/95 backdrop-blur-md border-b border-gold/20 p-6 animate-fade-up shadow-xl transition-all duration-300">
          <div className="max-w-3xl mx-auto">
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent border-b-2 border-cream/20 py-3 text-xl text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors font-heading"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-cream/60 hover:text-gold transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {searchQuery && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleProductClick(product.id)}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-md border border-white/10 group-hover:border-gold/50 transition-colors"
                      />
                      <div>
                        <h4 className="font-heading text-cream text-lg group-hover:text-gold transition-colors">{product.name}</h4>
                        <p className="font-body text-cream/60 text-xs uppercase tracking-wider">{product.category}</p>
                        <span className="font-body text-gold text-sm mt-1 block">{product.price}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-8">
                    <p className="font-body text-cream/50">No products found matching "{searchQuery}"</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {menuOpen && (
        <div className="md:hidden glass-panel mt-2 py-8 px-6 animate-fade-up">
          <div className="flex flex-col gap-6">
            <Link to="/" className="nav-link-luxury text-lg" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/shop" className="nav-link-luxury text-lg" onClick={() => setMenuOpen(false)}>Shop</Link>
            <Link to="/story" className="nav-link-luxury text-lg" onClick={() => setMenuOpen(false)}>Our Story</Link>
            <Link to="/about" className="nav-link-luxury text-lg" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/ingredients" className="nav-link-luxury text-lg" onClick={() => setMenuOpen(false)}>Ingredients</Link>
            <Link to="/contact" className="nav-link-luxury text-lg" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
