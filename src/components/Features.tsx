import { Shield, Heart, Sparkles, Award } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Premium Comfort",
    description: "Soft, breathable fabrics that feel gentle against your skin all day long.",
  },
  {
    icon: Sparkles,
    title: "Perfect Fit",
    description: "Wide range of sizes with expert fitting guidance for every body type.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Only the finest brands and materials, ensuring durability and comfort.",
  },
  {
    icon: Award,
    title: "Affordable Prices",
    description: "Premium quality at prices that make you smile. Value for every rupee.",
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Why Women <span className="text-gradient">Trust Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            For years, we've been the preferred choice for women seeking quality, comfort, and style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-rose-light flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
