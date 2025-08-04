import { Card } from "@/components/ui/card";
import biryaniImage from "@/assets/biryani-bucket.jpg";

const PromoBanner = () => {
  return (
    <section className="py-16 bg-restaurant-cream">
      <div className="container mx-auto px-4">
        <Card className="bg-restaurant-green text-white p-8 md:p-12 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Bucket Briyani now available
              </h2>
              <p className="text-lg mb-2">With Raita & Gravy</p>
              <p className="text-sm mb-6 text-restaurant-cream">
                Perfect for families, parties and real briyani lovers!
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-xl">Bucket S</h3>
                    <p className="text-restaurant-cream">~3 People</p>
                  </div>
                  <span className="text-2xl font-bold">€ 41</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-xl">Bucket M</h3>
                    <p className="text-restaurant-cream">~ 5 People</p>
                  </div>
                  <span className="text-2xl font-bold">€ 62</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src={biryaniImage} 
                alt="Biryani Bucket" 
                className="w-64 h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PromoBanner;