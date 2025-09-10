import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import idliImage from "@/assets/idli.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Use 2 columns on desktop, 1 column on mobile */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT: Text Section */}
          <div className="text-center md:text-left">
            <svg
              className="h-8 mx-auto md:mx-0 mb-4"
              preserveAspectRatio="xMidYMid meet"
              viewBox="21 20 159.3 160"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fill="#0A2006"
                d="M180.3 99.4c0 1.3-43 2.7-43 2.7-18.7 0-34.1 15.3-34.1 34.1 0 0-1.3 43.8-2.7 43.8s-2.7-43.8-2.7-43.8c0-18.7-15.3-34.1-34.1-34.1 0 0-42.7-1.3-42.7-2.7s42.7-2.7 42.7-2.7c18.7 0 34.1-15.3 34.1-34.1 0 0 1.4-42.7 2.8-42.6 1.3 0 2.6 42.6 2.6 42.6 0 18.7 15.3 34.1 34.1 34.1 0 0 42.9 1.3 43 2.7Z"
              />
            </svg>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-[80px] mb-6 text-[#0A2006] font-bold">
              ABOUT US
            </h2>

            <p className="text-base sm:text-lg mb-6 leading-relaxed text-muted-foreground max-w-xl mx-auto md:mx-0">
              Welcome to Dosa World, Hamburg's premier destination for authentic South Indian cuisine. 
              We specialize in crafting delicious dosas, idlis, and other traditional dishes, all made 
              with fresh ingredients and aromatic spices. Experience the vibrant flavors of South India 
              in every bite at Dosa World.
            </p>

            <Link to="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-[#0A2006] text-[#0A2006] hover:bg-[#0A2006] hover:text-white rounded-full font-bold transition-all duration-300"
              >
                READ MORE
              </Button>
            </Link>
          </div>

          {/* RIGHT: Image Section */}
          <div className="flex justify-center">
            <Card className="overflow-hidden shadow-xl w-full max-w-md md:max-w-lg">
              <img
                src={idliImage}
                alt="Traditional South Indian Food"
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
