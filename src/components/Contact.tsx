import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Store",
    details: ["Ground Floor, Municipal Shopping Centre", "7, Rang Avadhut Marg, Soniwada", "Shera, Godhra, Gujarat 389001"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98765 43210", "+91 98765 43211"],
    action: { href: "tel:+919876543210", label: "Call Now" },
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Sat: 10:00 AM - 9:00 PM", "Sunday: 11:00 AM - 7:00 PM"],
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Visit <span className="text-gradient">Our Store</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We'd love to welcome you to our store. Come experience our collection in person and get personalized assistance from our friendly team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-card h-80 lg:h-auto animate-fade-in-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.5!2d73.6145!3d22.7786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ2JzQzLjAiTiA3M8KwMzYnNTIuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Navkar Hosiery Location"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div
                key={item.title}
                className="bg-card p-6 rounded-2xl shadow-soft flex gap-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-rose-light flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                  ))}
                  {item.action && (
                    <a href={item.action.href} className="mt-3 inline-block">
                      <Button variant="soft" size="sm">
                        {item.action.label}
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="bg-gradient-to-r from-rose-light to-lavender p-6 rounded-2xl animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <h3 className="font-heading font-semibold text-lg mb-2">Have Questions?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Send us a message on WhatsApp and we'll be happy to help you with any queries about our products.
              </p>
              <a
                href="https://wa.me/919876543210?text=Hi%20Navkar%20Hosiery%2C%20I%20have%20a%20query%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="whatsapp" className="w-full sm:w-auto">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
