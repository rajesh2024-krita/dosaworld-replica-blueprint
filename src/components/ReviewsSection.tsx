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

        {/* LEFT: IMAGE */}
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px]">
          <img
            src={Briyani}
            alt="Customer enjoying Biryani"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* RIGHT: REVIEWS */}
        <div className="bg-[#33522D] p-6 sm:p-10 flex flex-col justify-center text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-white">
            REVIEWS
          </h2>

          <div className="flex justify-center">
            <Card className="p-6 w-full max-w-md text-center bg-transparent border-none shadow-none">
              <blockquote className="text-sm sm:text-base md:text-lg mb-4 italic text-white leading-relaxed">
                "{reviews[current].text}"
              </blockquote>
              <cite className="font-semibold text-white block mb-4">
                - {reviews[current].author}
              </cite>

              {/* STAR RATING */}
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-restaurant-orange text-restaurant-orange" />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
