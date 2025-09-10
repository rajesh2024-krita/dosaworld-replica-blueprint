import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroDosa from "@/assets/hero.avif";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroDosa})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4">
            DOSA WORLD
          </h1>
          <h2 className="font-serif text-2xl md:text-4xl mb-6 font-bold">
            INDISCHES RESTAURANT
          </h2>
          <p className="text-lg md:text-xl mb-2 flex items-center justify-center space-x-2">
            <span className="quote-accent">✨</span>
            <span className="italic">South Indian Restaurant</span>
            <span className="quote-accent">✨</span>
          </p>
          <p className="text-lg md:text-xl mb-8 italic">Hamburg</p>
          
          <Link to="/reservations">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg rounded-full"
            >
              RESERVE YOUR TABLE!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;