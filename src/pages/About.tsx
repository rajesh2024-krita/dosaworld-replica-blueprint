import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import idliImage from "@/assets/idli.jpg";
import hotelImage from "@/assets/hotel.png";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="h-screen">
        <div className="flex flex-wrap">
          <div className="w-full h-screen lg:w-1/2 text-center mt-20 px-12">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="21 20 159.3 160" 
              fill="black" 
              className="w-6 h-6 sm:w-8 sm:h-8 mt-10 mx-auto" 
              aria-hidden="true"
            >
              <path d="M180.3 99.4c0 1.3-43 2.7-43 2.7-18.7 0-34.1 15.3-34.1 34.1 0 0-1.3 43.8-2.7 43.8s-2.7-43.8-2.7-43.8c0-18.7-15.3-34.1-34.1-34.1 0 0-42.7-1.3-42.7-2.7s42.7-2.7 42.7-2.7c18.7 0 34.1-15.3 34.1-34.1 0 0 1.4-42.7 2.8-42.6 1.3 0 2.6 42.6 2.6 42.6 0 18.7 15.3 34.1 34.1 34.1 0 0 42.9 1.3 43 2.7Z"/>
            </svg>
            <h1 className="font-sans font-semibold font-medium uppercase text-[40px] md:text-[50px] lg:text-[80px] leading-tight py-10 sm:py-5 mt-10">
                About Us
              </h1>
              <p className="px-20 text-center">
                Welcome to Dosa World, where South Indian flavors come alive in Hamburg. Our menu features everything from crispy dosas and soft idlis to aromatic biryanis, all made with fresh ingredients and traditional spices.
              </p>
              <p className="pt-10 px-20 text-center">At Dosa World, we’re dedicated to delivering an authentic and memorable dining experience. Each dish is a celebration of South Indian culinary heritage, crafted to delight your taste buds. Join us and savor the vibrant flavors of South India.
              </p>
          </div>
            <div
              className="w-full h-screen lg:w-1/2 flex items-end justify-center"
              style={{ backgroundColor: "#ff8800" }}
            >
              <img
                src={hotelImage}
                alt="hotel image"
                className="mb-4 w-auto max-h-[90%]" // optional sizing & bottom spacing
              />
            </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;