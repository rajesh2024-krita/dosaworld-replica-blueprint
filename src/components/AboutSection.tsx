import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import idliImage from "@/assets/idli.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-6 text-primary">
              ABOUT US
            </h2>
            <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
              Welcome to Dosa World, Hamburg's premier destination for authentic South Indian cuisine. 
              We specialize in crafting delicious dosas, idlis, and other traditional dishes, all made 
              with fresh ingredients and aromatic spices. Experience the vibrant flavors of South India 
              in every bite at Dosa World.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              READ MORE
            </Button>
          </div>
          
          <div className="flex justify-center">
            <Card className="overflow-hidden shadow-xl">
              <img 
                src={idliImage} 
                alt="Traditional South Indian Food" 
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;