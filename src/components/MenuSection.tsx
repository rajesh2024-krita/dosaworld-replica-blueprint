import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroDosa from "@/assets/hero-dosa.jpg";

const MenuSection = () => {
  return (
    <section id="menu" className="py-16 bg-restaurant-cream/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Card className="overflow-hidden shadow-xl">
              <img 
                src={heroDosa} 
                alt="South Indian Menu" 
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </Card>
          </div>
          
          <div>
            <h2 className="font-serif text-4xl font-bold mb-6 text-primary">
              OUR MENU
            </h2>
            <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
              Dosa World offers a variety of South Indian dishes, including crispy dosas, 
              flavorful biryanis, and refreshing drinks like mango lassi. Don't miss our 
              specialty Masala Dosa and tangy Sambar. Explore our full menu by visiting 
              the menu page.
            </p>
            <Link to="/online-ordering">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                VIEW MENU
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;