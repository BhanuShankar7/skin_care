import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";

const CartDrawer = () => {
  const { items, isOpen, closeCart, updateQuantity, removeItem, totalItems, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    closeCart();
    navigate("/checkout");
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-primary/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[101] w-full max-w-md bg-primary border-l border-accent/20 transition-transform duration-500 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-cream/10">
            <div className="flex items-center gap-3">
              <ShoppingBag size={18} className="gold-text" />
              <h2 className="font-heading text-xl text-cream">Your Cart</h2>
              <span className="font-body text-xs text-cream/50">({totalItems})</span>
            </div>
            <button onClick={closeCart} className="text-cream/60 hover:text-cream transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingBag size={48} className="mx-auto text-cream/20 mb-4" />
                <p className="font-body text-sm text-cream/50">Your cart is empty</p>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-24 object-cover rounded-sm" />
                  <div className="flex-1">
                    <h3 className="font-heading text-sm text-cream">{item.name}</h3>
                    <p className="font-body text-sm gold-text mt-1">{item.price}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 border border-cream/20 flex items-center justify-center text-cream/60 hover:border-accent transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-body text-sm text-cream w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 border border-cream/20 flex items-center justify-center text-cream/60 hover:border-accent transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-cream/30 hover:text-cream/60 transition-colors self-start">
                    <X size={14} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-cream/10 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-body text-sm text-cream/70 tracking-wider uppercase">Total</span>
                <span className="font-heading text-xl gold-text">${totalPrice.toFixed(2)}</span>
              </div>
              <button onClick={handleCheckout} className="w-full btn-luxury-primary text-center">Checkout</button>
              <button onClick={closeCart} className="w-full btn-luxury-outline text-center text-sm">Continue Shopping</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
