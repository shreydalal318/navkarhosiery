import { Heart, Users, Clock, ShieldCheck, Store, Package } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Retail Partners" },
  { icon: Clock, value: "15+", label: "Years of Trust" },
  { icon: Package, value: "Lakhs+", label: "Products Supplied" },
  { icon: ShieldCheck, value: "100%", label: "Quality Assured" },
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
              Your Trusted <span className="text-gradient">Wholesale Partner</span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Welcome to <strong className="text-foreground">Navkar Hosiery</strong> – Godhra's leading wholesale supplier of ladies undergarments and readymade clothing. For over 15 years, we have been the trusted partner for retailers, boutiques, and resellers across Gujarat.
              </p>
              <p>
                Our commitment to <strong className="text-foreground">consistent quality, competitive pricing, and reliable availability</strong> has made us the preferred choice for businesses seeking premium women's innerwear and clothing stock.
              </p>
              <p>
                Whether you're a retail shop owner looking for bulk supply or an individual customer seeking quality products, we welcome you to experience the Navkar difference. Visit our store at Municipal Shopping Centre, Godhra.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-card rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-rose-light flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Wholesale Excellence</h4>
                  <p className="text-xs text-muted-foreground">Bulk orders with competitive pricing and timely delivery</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-lavender flex items-center justify-center flex-shrink-0">
                  <Store className="w-5 h-5 text-lavender-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Retail Friendly</h4>
                  <p className="text-xs text-muted-foreground">Walk-in customers welcome for single purchases</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-peach flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-rose-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Quality First</h4>
                  <p className="text-xs text-muted-foreground">Premium fabrics with consistent batch quality</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-cream-dark flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Trusted Supply</h4>
                  <p className="text-xs text-muted-foreground">Reliable partner for your business needs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-card p-6 rounded-2xl shadow-soft text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-rose-light mx-auto flex items-center justify-center mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl md:text-3xl font-heading font-bold text-gradient">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
