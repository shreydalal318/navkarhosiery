import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [{
    href: "#home",
    label: "Home"
  }, {
    href: "#collections",
    label: "Collections"
  }, {
    href: "#about",
    label: "About Us"
  }, {
    href: "#contact",
    label: "Contact"
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-heading font-semibold text-gradient">
              Navkar
            </span>
            <span className="text-sm text-muted-foreground font-serif md:text-lg">
              Hosiery
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium">
                {link.label}
              </a>)}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+919876543210">
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => <a key={link.href} href={link.href} className="text-foreground/80 hover:text-primary transition-colors py-2 font-medium" onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>)}
              <a href="tel:+919876543210" className="mt-2">
                <Button variant="outline" className="w-full gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;