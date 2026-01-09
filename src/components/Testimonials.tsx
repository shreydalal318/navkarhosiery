import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Regular Customer",
    content: "I've been shopping at Navkar Hosiery for 5 years. The quality of their undergarments is unmatched, and the staff always helps me find the perfect fit.",
    rating: 5,
  },
  {
    name: "Meena Patel",
    role: "Working Professional",
    content: "Finally found a store that understands women's comfort. Their nightwear collection is so soft and elegant. Highly recommended!",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Happy Customer",
    content: "Great variety, affordable prices, and excellent customer service. The staff is very helpful and respectful. Best hosiery store in Godhra!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-lavender/30 to-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from the women who trust us for their comfort and style.
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
