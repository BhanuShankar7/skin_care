import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const Checkout = () => {
    const { items, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        city: "",
        postalCode: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
    });

    if (items.length === 0 && step === 1) {
        return (
            <main className="pt-32 pb-20 bg-sage min-h-screen text-center px-6">
                <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Your Cart is Empty</h1>
                <p className="font-body text-muted-foreground mb-8">Add some products to your cart to proceed with checkout.</p>
                <Link to="/shop" className="btn-luxury-primary inline-block">Return to Shop</Link>
            </main>
        );
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePlaceOrder = (e: React.FormEvent) => {
        e.preventDefault();
        if (step === 1) {
            setStep(2);
            window.scrollTo(0, 0);
        } else {
            // Simulate order processing
            setTimeout(() => {
                clearCart();
                setStep(3);
                window.scrollTo(0, 0);
                toast.success("Order placed successfully!");
            }, 1500);
        }
    };

    return (
        <main className="pt-32 pb-20 bg-sage min-h-screen">
            <div className="max-w-6xl mx-auto px-6 md:px-12">

                {step < 3 && (
                    <div className="mb-10">
                        <Link to="/shop" className="flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-6">
                            <ArrowLeft size={14} /> Back to Shop
                        </Link>
                        <h1 className="font-heading text-3xl md:text-5xl text-foreground mb-4 animate-back-in-up">Checkout</h1>
                        <div className="flex items-center gap-4 text-sm font-body tracking-wider animate-back-in-up-delay">
                            <span className={`pb-1 border-b-2 ${step === 1 ? "border-gold text-foreground" : "border-transparent text-muted-foreground"}`}>1. Shipping</span>
                            <span className="text-muted-foreground">/</span>
                            <span className={`pb-1 border-b-2 ${step === 2 ? "border-gold text-foreground" : "border-transparent text-muted-foreground"}`}>2. Payment</span>
                        </div>
                    </div>
                )}

                {step === 3 ? (
                    <div className="max-w-xl mx-auto text-center py-12 animate-back-in-up">
                        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle size={40} className="text-gold" />
                        </div>
                        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Thank You!</h2>
                        <p className="font-body text-muted-foreground mb-8">
                            Your order has been placed successfully. You will receive an email confirmation shortly.
                        </p>
                        <button onClick={() => navigate("/")} className="btn-luxury-primary">
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                        {/* Form Section */}
                        <div className="animate-back-in-up-delay">
                            <form onSubmit={handlePlaceOrder} className="space-y-6">
                                {step === 1 ? (
                                    <>
                                        <h2 className="font-heading text-2xl text-foreground mb-6">Shipping Details</h2>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block font-body text-xs uppercase tracking-wider text-muted-foreground mb-2">First Name</label>
                                                <input
                                                    required
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:outline-none focus:border-gold transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="block font-body text-xs uppercase tracking-wider text-muted-foreground mb-2">Last Name</label>
                                                <input
                                                    required
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:outline-none focus:border-gold transition-colors"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block font-body text-xs uppercase tracking-wider text-muted-foreground mb-2">Email</label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:outline-none focus:border-gold transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-body text-xs uppercase tracking-wider text-muted-foreground mb-2">Address</label>
                                            <input
                                                required
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:outline-none focus:border-gold transition-colors"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block font-body text-xs uppercase tracking-wider text-muted-foreground mb-2">City</label>
                                                <input
                                                    required
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:outline-none focus:border-gold transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="block font-body text-xs uppercase tracking-wider text-muted-foreground mb-2">Postal Code</label>
                                                <input
                                                    required
                                                    name="postalCode"
                                                    value={formData.postalCode}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:outline-none focus:border-gold transition-colors"
                                                />
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <h2 className="font-heading text-2xl text-foreground mb-6">Payment Information</h2>
                                        <div>
                                            <label className="block font-body text-xs uppercase tracking-wider text-muted-foreground mb-2">Card Number</label>
                                            <input
                                                required
                                                name="cardNumber"
                                                value={formData.cardNumber}
                                                onChange={handleInputChange}
                                                className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:outline-none focus:border-gold transition-colors"
                                                placeholder="0000 0000 0000 0000"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block font-body text-xs uppercase tracking-wider text-muted-foreground mb-2">Expiry Date</label>
                                                <input
                                                    required
                                                    name="expiry"
                                                    value={formData.expiry}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:outline-none focus:border-gold transition-colors"
                                                    placeholder="MM/YY"
                                                />
                                            </div>
                                            <div>
                                                <label className="block font-body text-xs uppercase tracking-wider text-muted-foreground mb-2">CVV</label>
                                                <input
                                                    required
                                                    name="cvv"
                                                    value={formData.cvv}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:outline-none focus:border-gold transition-colors"
                                                    placeholder="123"
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}

                                <div className="pt-6">
                                    <button type="submit" className="w-full btn-luxury-primary">
                                        {step === 1 ? "Continue to Payment" : `Pay $${totalPrice.toFixed(2)}`}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Order Summary */}
                        <div className="bg-white/50 p-8 rounded-sm h-fit animate-back-in-up-delay-2">
                            <h3 className="font-heading text-xl text-foreground mb-6">Order Summary</h3>
                            <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <img src={item.image} alt={item.name} className="w-16 h-20 object-cover rounded-sm" />
                                        <div className="flex-1">
                                            <h4 className="font-heading text-sm text-foreground">{item.name}</h4>
                                            <p className="font-body text-xs text-muted-foreground mt-1">Qty: {item.quantity}</p>
                                            <p className="font-body text-sm gold-text mt-1">{item.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-foreground/10 pt-4 space-y-2">
                                <div className="flex justify-between text-sm font-body text-muted-foreground">
                                    <span>Subtotal</span>
                                    <span>${totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm font-body text-muted-foreground">
                                    <span>Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className="flex justify-between text-lg font-heading text-foreground pt-2 border-t border-foreground/10">
                                    <span>Total</span>
                                    <span>${totalPrice.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Checkout;
