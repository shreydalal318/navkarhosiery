import { ArrowRight, Package, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import categoryLingerie from "@/assets/category-lingerie.jpg";
import categoryNightwear from "@/assets/category-nightwear.jpg";
import categoryReadymade from "@/assets/category-readymade.jpg";

const wholesaleCollections = [
  {
    title: "Ladies Undergarments",
    description: "Premium bras, panties, and innerwear sets. Bulk orders available with competitive wholesale pricing.",
    image: categoryLingerie,
    items: ["Bras", "Panties", "Innerwear Sets", "Shapewear"],
    moq: "MOQ: 50 pieces per style",
  },
  {
    title: "Nightwear Collection",
    description: "Comfortable sleepwear including pajamas, night dresses, and loungewear for bulk supply.",
    image: categoryNightwear,
    items: ["Night Dresses", "Pajama Sets", "Loungewear", "Robes"],
    moq: "MOQ: 30 pieces per style",
  },
  {
    title: "Readymade Clothing",
    description: "Beautiful ethnic and western wear. Perfect for boutiques and retail stores seeking quality stock.",
    image: categoryReadymade,
    items: ["Kurtas", "Daily Wear", "Casual Wear", "Ethnic Wear"],
    moq: "MOQ: 25 pieces per style",
  },
];

const Collections = () => {
  return (
    <section id="collections" className="py-16 md:py-24">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Our <span className="text-gradient">Collections</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Explore our premium quality undergarments and clothing. Available for wholesale bulk orders and retail purchases.
          </p>
          
          {/* Wholesale/Retail Note */}
          <div className="inline-flex flex-wrap justify-center gap-4 p-4 bg-rose-light/50 rounded-xl">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Package className="w-4 h-4 text-primary" />
              <span>Wholesale pricing for bulk orders</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <ShoppingBag className="w-4 h-4 text-primary" />
              <span>Retail customers welcome</span>
            </div>
          </div>
        </div>

        {/* Wholesale Collection */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Package className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-heading font-semibold">Wholesale Collection</h3>
            <span className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded-full">Bulk Orders Available</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {wholesaleCollections.map((collection, index) => (
              <div
                key={collection.title}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  {/* MOQ Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 bg-foreground/80 text-background text-xs rounded-full">
                    {collection.moq}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-xl font-heading font-semibold mb-2">{collection.title}</h4>
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
                      Enquire for Wholesale
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Retail Note */}
        <div className="bg-gradient-to-r from-lavender/50 to-rose-light/50 p-6 md:p-8 rounded-2xl text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <ShoppingBag className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-heading font-semibold">Retail Shopping</h3>
          </div>
          <p className="text-muted-foreground mb-4 max-w-xl mx-auto">
            Individual customers are welcome to visit our store for single and small quantity purchases. 
            Experience our full collection with personalized assistance.
          </p>
          <a href="#contact">
            <Button variant="outline">
              Visit Store for Retail Shopping
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Collections;
