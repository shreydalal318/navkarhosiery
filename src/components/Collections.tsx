import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import categoryLingerie from "@/assets/category-lingerie.jpg";
import categoryNightwear from "@/assets/category-nightwear.jpg";
import categoryReadymade from "@/assets/category-readymade.jpg";

const collections = [
  {
    title: "Ladies Undergarments",
    description: "Bras, panties, and innerwear sets in premium fabrics for everyday comfort and confidence.",
    image: categoryLingerie,
    items: ["Bras", "Panties", "Innerwear Sets", "Shapewear"],
  },
  {
    title: "Nightwear Collection",
    description: "Comfortable and elegant sleepwear including pajamas, night dresses, and loungewear.",
    image: categoryNightwear,
    items: ["Night Dresses", "Pajama Sets", "Loungewear", "Robes"],
  },
  {
    title: "Readymade Clothing",
    description: "Beautiful ethnic and western wear for every occasion - daily wear to special moments.",
    image: categoryReadymade,
    items: ["Kurtas", "Daily Wear", "Casual Wear", "Ethnic Wear"],
  },
];

const Collections = () => {
  return (
    <section id="collections" className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Our <span className="text-gradient">Collections</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated range of premium quality undergarments and clothing designed for the modern woman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((collection, index) => (
            <div
              key={collection.title}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2">{collection.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{collection.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {collection.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs bg-rose-light text-rose-dark rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a href="#contact">
                  <Button variant="soft" className="w-full group/btn">
                    Enquire Now
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
