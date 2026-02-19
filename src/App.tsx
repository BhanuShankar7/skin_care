import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useCallback } from "react";
import { CartProvider } from "@/context/CartContext";
import LoadingScreen from "@/components/LoadingScreen";
import CartDrawer from "@/components/CartDrawer";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Story from "./pages/Story";
import Contact from "./pages/Contact";
import Ingredients from "./pages/Ingredients";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  const handleLoadComplete = useCallback(() => setLoading(false), []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          {loading && <LoadingScreen onComplete={handleLoadComplete} />}
          <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <CartDrawer />
            <Routes>
              <Route path="/" element={<Index isLoaded={!loading} />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/story" element={<Story />} />
              <Route path="/ingredients" element={<Ingredients />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
