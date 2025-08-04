import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ReservationSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold mb-6 text-primary">
            RESERVATIONS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Reserve your table at Dosa World with ease using our online reservation feature. 
            Book in advance and enjoy a seamless dining experience at Hamburg's top South Indian restaurant.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <Card className="p-8 text-center shadow-xl">
            <h3 className="font-serif text-2xl font-bold mb-4 text-primary">
              Book Your Table
            </h3>
            <p className="text-muted-foreground mb-6">
              Choose your preferred date and time for an unforgettable dining experience.
            </p>
            <Link to="/reservations">
              <Button 
                size="lg"
                className="w-full bg-restaurant-orange hover:bg-restaurant-orange/90 text-white"
              >
                RESERVE YOUR TABLE
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;