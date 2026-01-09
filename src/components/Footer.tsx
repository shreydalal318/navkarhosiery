import { Heart, Instagram, Facebook, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-4">
              Navkar <span className="text-rose-light">Hosiery</span>
            </h3>
            <p className="text-background/70 text-sm mb-4">
              Your trusted destination for premium ladies undergarments and readymade clothing in Godhra.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#home" className="block text-background/70 hover:text-background transition-colors text-sm">Home</a>
              <a href="#collections" className="block text-background/70 hover:text-background transition-colors text-sm">Collections</a>
              <a href="#about" className="block text-background/70 hover:text-background transition-colors text-sm">About Us</a>
              <a href="#contact" className="block text-background/70 hover:text-background transition-colors text-sm">Contact</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
              <div className="flex items-start gap-2 text-background/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Ground Floor, Municipal Shopping Centre, Godhra, Gujarat 389001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Navkar Hosiery. All rights reserved.
          </p>
          <p className="text-background/50 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in Godhra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
