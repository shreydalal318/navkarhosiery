import { Button } from "@/components/ui/button";
import { MapPin, Sparkles, Store, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Elegant feminine fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          {/* Business Type Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-light/80 text-rose-dark text-sm font-medium mb-4 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Trusted Wholesale Supplier • Also Available for Retail
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold leading-tight mb-4 animate-fade-in-up">
              Navkar Hosiery – Premium Ladies Undergarments in Godhra
          </h1>
          <h2 className="text-2xl md:text-3xl font-heading font-medium mb-6 animate-fade-in-up">
            Comfort, Confidence & Style for{" "}
            <span className="text-gradient">Every Woman</span>
          </h2>



          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Premium quality ladies undergarments and readymade clothing at wholesale prices. 
            Trusted by retailers, boutiques, and resellers across Gujarat.
          </p>

          {/* Business Type Highlights */}
          <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            <div className="flex items-center gap-2 text-sm text-foreground/80">
              <Users className="w-4 h-4 text-primary" />
              <span>Wholesale & Bulk Orders</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/80">
              <Store className="w-4 h-4 text-primary" />
              <span>Retail Shopping Welcome</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <a href="#contact">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Enquire for Wholesale
              </Button>
            </a>
            <a href="#collections">
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                Visit Store for Retail
              </Button>
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <MapPin className="w-5 h-5 text-primary" />
            <span>Municipal Shopping Centre, Godhra, Gujarat</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
