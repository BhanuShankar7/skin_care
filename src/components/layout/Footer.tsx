import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="gold-divider !w-full opacity-30" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-heading text-2xl tracking-[0.15em] mb-4">VERDÉLUXE</h3>
            <p className="font-body text-sm text-cream/70 leading-relaxed">
              Tradition & Strength in Every Drop
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase gold-text mb-6">Shop</h4>
            <ul className="space-y-3">
              {["Serums", "Moisturizers", "Cleansers", "Face Oils", "Gift Sets"].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="font-body text-sm text-cream/70 hover:text-gold transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase gold-text mb-6">Company</h4>
            <ul className="space-y-3">
              {["Our Story", "Ingredients", "Sustainability", "Press"].map((item) => (
                <li key={item}>
                  <Link to="/about" className="font-body text-sm text-cream/70 hover:text-gold transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase gold-text mb-6">Newsletter</h4>
            <p className="font-body text-sm text-cream/70 mb-4">Receive exclusive offers and botanical insights.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent border border-cream/20 px-4 py-2 text-sm font-body text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors duration-300"
              />
              <button className="px-4 py-2 bg-accent text-accent-foreground text-xs font-body tracking-[0.1em] uppercase hover:bg-gold-light transition-colors duration-300">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="gold-divider !w-full opacity-20 mt-16 mb-8" />
        <p className="text-center font-body text-xs text-cream/40 tracking-wider">
          © 2026 VERDÉLUXE. All rights reserved. Crafted with botanical precision.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
