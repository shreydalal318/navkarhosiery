import { Heart, Users, Clock, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Customers" },
  { icon: Clock, value: "15+", label: "Years of Trust" },
  { icon: Heart, value: "100%", label: "Satisfaction" },
  { icon: ShieldCheck, value: "Premium", label: "Quality" },
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
              Your Trusted Partner in <span className="text-gradient">Women's Comfort</span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Welcome to <strong className="text-foreground">Navkar Hosiery</strong> – Godhra's most trusted destination for ladies undergarments and readymade clothing. For over 15 years, we have been dedicated to providing women with comfortable, stylish, and high-quality innerwear and clothing.
              </p>
              <p>
                We believe every woman deserves to feel confident and comfortable. That's why we carefully select each product, ensuring premium quality fabrics, perfect fits, and styles that make you feel beautiful.
              </p>
              <p>
                Our knowledgeable and friendly staff is always ready to help you find exactly what you need, in a comfortable and respectful shopping environment. Visit our store at Municipal Shopping Centre, Godhra and experience the Navkar difference.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-rose-light flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Comfort First</h4>
                  <p className="text-xs text-muted-foreground">Quality fabrics for all-day comfort</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-lavender flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-lavender-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Hygiene & Privacy</h4>
                  <p className="text-xs text-muted-foreground">Clean, respectful shopping experience</p>
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
