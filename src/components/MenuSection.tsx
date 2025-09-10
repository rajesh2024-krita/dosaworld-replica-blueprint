import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroDosa from "@/assets/idly.avif";

const MenuSection = () => {
  return (
    <section id="menu" className="w-full">
      <div className="grid md:grid-cols-2 gap-0 items-stretch min-h-[500px]">

        {/* LEFT: Full Image */}
        <div className="relative w-full h-[300px] md:h-auto">
          <img
            src={heroDosa}
            alt="South Indian Menu"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* RIGHT: Text Section */}
        <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 py-12 md:py-20 bg-[#FF8800] text-center md:text-left">
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

          <h2 className="font-serif text-3xl sm:text-4xl md:text-[60px] font-bold mb-6 text-[#0A2006]">
            OUR MENU
          </h2>

          <p className="text-base sm:text-lg mb-6 leading-relaxed text-black max-w-xl mx-auto md:mx-0">
            Dosa World offers a variety of South Indian dishes, including crispy dosas,
            flavorful biryanis, and refreshing drinks like mango lassi. Don't miss our
            specialty Masala Dosa and tangy Sambar. Explore our full menu by visiting
            the menu page.
          </p>

          <Link to="/online-ordering">
            <Button
              size="lg"
              className="border-[#0A2006] border bg-transparent text-[#0A2006] rounded-full text-base sm:text-lg hover:bg-[#0A2006] hover:text-white transition-all duration-300"
            >
              VIEW MENU
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
