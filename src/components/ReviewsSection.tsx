import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      text: "I finally tried this rather new restaurant in Hamburg Harburg, and I can highly recommend this place 🥰 I loved their sambhar and chutneys, and vada or dosa were not oily at all (which I had in some other German restaurants)! I will definitely visit again ❤️❤️❤️",
      author: "Eva bock"
    },
    {
      text: "No Doubt ... Dosa World is the best place in Hamburg for South Indian food. On our first visit, we ordered Medu Vada, Kothu Porotta, Chicken Fried Rice, and Ghee Roast. Everything was delicious, including the sambar and chutney, which were top-notch",
      author: "Dhaniya.R"
    },
    {
      text: "Really yummy and authentic south indian food. Seasoned and spiced to perfection. Especially the chicken biryani was simply superb! Will definitely visit regularly!",
      author: "Karan Vijay"
    }
  ];

  return (
    <section className="py-16 bg-restaurant-cream/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary">
          REVIEWS
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-restaurant-orange text-restaurant-orange" />
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-4 italic">
                "{review.text}"
              </blockquote>
              <cite className="font-semibold text-primary">
                - {review.author}
              </cite>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;