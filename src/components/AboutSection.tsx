import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import idliImage from "@/assets/idli.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-1 gap-12 items-center">
          <div>
            <svg className="h-8" preserveAspectRatio="xMidYMid meet" data-bbox="21 20 159.3 160" viewBox="21 20 159.3 160" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs></defs>
              <g>
                <path fill="#0A2006" d="M180.3 99.4c0 1.3-43 2.7-43 2.7-18.7 0-34.1 15.3-34.1 34.1 0 0-1.3 43.8-2.7 43.8s-2.7-43.8-2.7-43.8c0-18.7-15.3-34.1-34.1-34.1 0 0-42.7-1.3-42.7-2.7s42.7-2.7 42.7-2.7c18.7 0 34.1-15.3 34.1-34.1 0 0 1.4-42.7 2.8-42.6 1.3 0 2.6 42.6 2.6 42.6 0 18.7 15.3 34.1 34.1 34.1 0 0 42.9 1.3 43 2.7Z" data-color="1"></path>
              </g>
            </svg>
            <h2 className="font-serif text-[80px] mb-6 text-[#0A2006] font-bold">
              ABOUT US
            </h2>
            <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
              Welcome to Dosa World, Hamburg's premier destination for authentic South Indian cuisine. 
              We specialize in crafting delicious dosas, idlis, and other traditional dishes, all made 
              with fresh ingredients and aromatic spices. Experience the vibrant flavors of South India 
              in every bite at Dosa World.
            </p>
            <Link to="/about">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-[#0A2006] hover:bg-[#0A2006] rounded-full font-bold hover:text-white"
              >
                READ MORE
              </Button>
            </Link>
          </div>
          
          {/* <div className="flex justify-center">
            <Card className="overflow-hidden shadow-xl">
              <img 
                src={idliImage} 
                alt="Traditional South Indian Food" 
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </Card>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;