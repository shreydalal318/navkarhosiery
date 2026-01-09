import { Button } from "@/components/ui/button";
import { MapPin, Sparkles } from "lucide-react";
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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-light/80 text-rose-dark text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Trusted by Women of Godhra
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold leading-tight mb-6 animate-fade-in-up">
            Comfort, Confidence & Style for{" "}
            <span className="text-gradient">Every Woman</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Discover premium quality ladies undergarments and readymade clothing 
            that fits perfectly and feels amazing. Your comfort is our priority.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <a href="#collections">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Explore Collection
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                Visit Our Store
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
