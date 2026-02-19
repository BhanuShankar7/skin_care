import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <main className="pt-28 pb-20 bg-sage min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 animate-back-in-up">
          <p className="font-body text-xs tracking-[0.25em] uppercase gold-text mb-3">Get in Touch</p>
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Contact Us</h1>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-primary p-8 md:p-12 rounded-sm animate-back-in-up-delay">
            <h2 className="font-heading text-2xl text-cream mb-8">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="font-body text-xs tracking-[0.15em] uppercase text-cream/60 mb-2 block">Name</label>
                <input className="w-full bg-transparent border-b border-cream/20 pb-2 text-cream font-body text-sm focus:outline-none focus:border-gold transition-colors duration-300" />
              </div>
              <div>
                <label className="font-body text-xs tracking-[0.15em] uppercase text-cream/60 mb-2 block">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-cream/20 pb-2 text-cream font-body text-sm focus:outline-none focus:border-gold transition-colors duration-300" />
              </div>
              <div>
                <label className="font-body text-xs tracking-[0.15em] uppercase text-cream/60 mb-2 block">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-cream/20 pb-2 text-cream font-body text-sm focus:outline-none focus:border-gold transition-colors duration-300 resize-none" />
              </div>
              <button type="submit" className="btn-luxury-outline w-full mt-4">
                Send Message
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-10 animate-back-in-up-delay">
            <div className="flex items-start gap-4">
              <MapPin className="gold-text mt-1 shrink-0" size={20} strokeWidth={1.2} />
              <div>
                <h3 className="font-heading text-lg text-foreground mb-1">Visit Us</h3>
                <p className="font-body text-sm text-muted-foreground">Gallery Milinium plaza Hyderabad</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="gold-text mt-1 shrink-0" size={20} strokeWidth={1.2} />
              <div>
                <h3 className="font-heading text-lg text-foreground mb-1">Call Us</h3>
                <p className="font-body text-sm text-muted-foreground">+919618344086</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="gold-text mt-1 shrink-0" size={20} strokeWidth={1.2} />
              <div>
                <h3 className="font-heading text-lg text-foreground mb-1">Email</h3>
                <p className="font-body text-sm text-muted-foreground">sureshpeddinti221@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
