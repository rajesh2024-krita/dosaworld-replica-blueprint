import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Clock, Star } from "lucide-react";
import heroDosa from "@/assets/hero-dosa.jpg";
import idliImage from "@/assets/idli.jpg";
import biryaniImage from "@/assets/biryani-bucket.jpg";

const OnlineOrdering = () => {
  const menuItems = [
    {
      id: 1,
      name: "Masala Dosa",
      description: "Crispy rice and lentil crepe filled with spiced potatoes, served with coconut chutney and sambar",
      price: "€12.90",
      image: heroDosa,
      category: "Dosas",
      rating: 4.8,
      prepTime: "15-20 min"
    },
    {
      id: 2,
      name: "Idli Sambar",
      description: "Steamed rice cakes served with lentil soup and coconut chutney",
      price: "€9.90",
      image: idliImage,
      category: "Traditional",
      rating: 4.7,
      prepTime: "10-15 min"
    },
    {
      id: 3,
      name: "Chicken Biryani",
      description: "Fragrant basmati rice with spiced chicken, served with raita and boiled egg",
      price: "€16.90",
      image: biryaniImage,
      category: "Biryani",
      rating: 4.9,
      prepTime: "25-30 min"
    },
    {
      id: 4,
      name: "Plain Dosa",
      description: "Traditional crispy rice and lentil crepe served with coconut chutney and sambar",
      price: "€10.90",
      image: heroDosa,
      category: "Dosas",
      rating: 4.6,
      prepTime: "12-18 min"
    },
    {
      id: 5,
      name: "Vegetable Biryani",
      description: "Aromatic basmati rice with mixed vegetables and traditional spices",
      price: "€14.90",
      image: biryaniImage,
      category: "Biryani",
      rating: 4.5,
      prepTime: "20-25 min"
    },
    {
      id: 6,
      name: "Medu Vada",
      description: "Crispy lentil donuts served with coconut chutney and sambar",
      price: "€8.90",
      image: idliImage,
      category: "Traditional",
      rating: 4.7,
      prepTime: "10-15 min"
    }
  ];

  const categories = ["All", "Dosas", "Traditional", "Biryani"];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-restaurant-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-serif text-5xl font-bold mb-6 text-primary">
              ONLINE ORDERING
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Order your favorite South Indian dishes for pickup or delivery
            </p>
            <div className="flex justify-center items-center space-x-4 mt-6">
              <Badge variant="secondary" className="bg-restaurant-green text-white">
                <Clock className="w-4 h-4 mr-1" />
                30-45 min delivery
              </Badge>
              <Badge variant="secondary" className="bg-restaurant-orange text-white">
                Free delivery over €25
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-primary" : "border-primary text-primary hover:bg-primary hover:text-white"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <Card key={item.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 left-2 bg-restaurant-orange text-white">
                    {item.category}
                  </Badge>
                  <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-restaurant-orange text-restaurant-orange" />
                    <span className="text-sm font-semibold">{item.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2 text-primary">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {item.price}
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.prepTime}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-restaurant-orange hover:bg-restaurant-orange/90 text-white"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order Summary CTA */}
      <section className="py-16 bg-restaurant-cream/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6 text-primary">
            Ready to Order?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the authentic taste of South India from the comfort of your home. 
            Fast delivery and pickup options available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View Cart (0 items)
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Call for Pickup: +49 (0) 123 456 789
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OnlineOrdering;