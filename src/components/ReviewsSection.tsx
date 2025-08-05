import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import Briyani from '../assets/Briyani.avif';
import { useEffect, useState } from "react";

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

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="py-16 bg-restaurant-cream/30">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="relative w-full h-96">
          <img src={Briyani} alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className=" bg-[#33522D] p-4">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-white">
            REVIEWS
          </h2>

          <div className="flex justify-center">
            <div className="p-6 w-full max-w-md text-center">
              <blockquote className="text-muted-foreground mb-4 italic text-white">
                "{reviews[current].text}"
              </blockquote>
              <cite className="font-semibold text-white">
                - {reviews[current].author}
              </cite>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-restaurant-orange text-restaurant-orange" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;