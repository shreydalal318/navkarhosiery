import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Boutique Owner, Ahmedabad",
    content: "We've been sourcing from Navkar Hosiery for 8 years. Their consistent quality and timely bulk deliveries have helped us build our customer trust. Best wholesale partner!",
    rating: 5,
  },
  {
    name: "Meena Shah",
    role: "Retail Shop Owner, Vadodara",
    content: "Excellent wholesale rates and the stock is always available. Their MOQ is reasonable and the product quality never disappoints. Highly recommended for retailers!",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Retail Customer, Godhra",
    content: "Even as a retail customer, I love shopping here. Great variety, helpful staff, and premium quality at affordable prices. The staff is very respectful and helpful.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-lavender/30 to-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            What Our <span className="text-gradient">Partners Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by retailers, boutique owners, and individual customers across Gujarat. Hear from our valued partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-rose-light mb-4" />

              {/* Content */}
              <p className="text-foreground/80 mb-6 leading-relaxed">"{testimonial.content}"</p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Author */}
              <div>
                <p className="font-heading font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
