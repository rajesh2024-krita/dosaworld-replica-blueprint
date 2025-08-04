import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import idliImage from "@/assets/idli.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-restaurant-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-serif text-5xl font-bold mb-6 text-primary">
              ABOUT US
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Welcome to Dosa World, where South Indian flavors come alive in Hamburg.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6 text-primary">
                Our Story
              </h2>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                Our menu features everything from crispy dosas and soft idlis to aromatic biryanis, 
                all made with fresh ingredients and traditional spices. At Dosa World, we're dedicated 
                to delivering an authentic and memorable dining experience.
              </p>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                Each dish is a celebration of South Indian culinary heritage, crafted to delight your 
                taste buds. Join us and savor the vibrant flavors of South India in the heart of Hamburg.
              </p>
            </div>
            
            <div className="flex justify-center">
              <img 
                src={idliImage} 
                alt="Traditional South Indian Food" 
                className="w-full max-w-md h-[400px] object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Quote Section */}
          <div className="text-center py-16 bg-restaurant-green text-white rounded-lg">
            <blockquote className="font-serif text-3xl md:text-4xl font-bold mb-4">
              "We make food that makes people happy"
            </blockquote>
            <cite className="text-restaurant-cream text-lg">
              - DOSA WORLD -
            </cite>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <h3 className="font-serif text-xl font-bold mb-4 text-primary">Authentic Flavors</h3>
              <p className="text-muted-foreground">
                Traditional South Indian recipes passed down through generations, 
                prepared with authentic spices and techniques.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl font-bold mb-4 text-primary">Fresh Ingredients</h3>
              <p className="text-muted-foreground">
                We source the finest ingredients daily to ensure every dish 
                meets our high standards of quality and freshness.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl font-bold mb-4 text-primary">Warm Hospitality</h3>
              <p className="text-muted-foreground">
                Experience genuine South Indian hospitality in a welcoming 
                atmosphere that makes every meal special.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;