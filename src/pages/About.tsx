import Header from "@/components/Header";
import Footer from "@/components/Footer";
import hotelImage from "@/assets/hotel.avif";
import { useEffect, useRef, useState } from "react";


const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* SCROLL CONTAINER */}
      <div className="relative w-full">
        {/* FIRST SECTION - ADJUSTED FOR MOBILE & TABLET */}
        <div className="sticky top-20 left-0 w-full h-auto lg:h-screen z-10 flex flex-col lg:flex-row">
          {/* Left Content - Stacked on top for mobile/tablet */}
          <div className="w-full lg:w-1/2 text-center pt-16 md:pt-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
            <div className="max-w-2xl mx-auto pb-8 md:pb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="21 20 159.3 160"
                fill="black"
                className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mt-4 md:mt-6 lg:mt-10 mx-auto"
                aria-hidden="true"
              >
                <path d="M180.3 99.4c0 1.3-43 2.7-43 2.7-18.7 0-34.1 15.3-34.1 34.1 0 0-1.3 43.8-2.7 43.8s-2.7-43.8-2.7-43.8c0-18.7-15.3-34.1-34.1-34.1 0 0-42.7-1.3-42.7-2.7s42.7-2.7 42.7-2.7c18.7 0 34.1-15.3 34.1-34.1 0 0 1.4-42.7 2.8-42.6 1.3 0 2.6 42.6 2.6 42.6 0 18.7 15.3 34.1 34.1 34.1 0 0 42.9 1.3 43 2.7Z" />
              </svg>
              <h1 className="font-sans font-semibold uppercase text-2xl xs:text-3xl sm:text-4xl md:text-[42px] lg:text-5xl xl:text-[80px] leading-tight py-4 sm:py-6 md:py-8 lg:py-10 mt-2 md:mt-4 lg:mt-10">
                About Us
              </h1>
              <p className="px-2 sm:px-4 md:px-6 text-center text-xs xs:text-sm sm:text-base md:text-lg">
                Welcome to Dosa World, where South Indian flavors come alive in Hamburg. Our menu features everything from crispy dosas and soft idlis to aromatic biryanis.
              </p>
              <p className="pt-4 sm:pt-6 md:pt-8 px-2 sm:px-4 md:px-6 text-center text-xs xs:text-sm sm:text-base md:text-lg">
                At Dosa World, we're dedicated to delivering an authentic and memorable dining experience. Each dish is a celebration of South Indian heritage.
              </p>
            </div>
          </div>

          {/* Right Image Section - Takes full width on mobile, appears below content */}
          <div
            className="w-full lg:w-1/2 h-[50vh] md:h-[60vh] lg:h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundColor: "#ff8800" }}
          >
            <img
              src={hotelImage}
              alt="hotel"
              className="w-auto h-[80%] md:h-[85%] lg:h-[90%] object-contain"
            />
          </div>
        </div>

        {/* BLANK SPACE - Adjusted for mobile/tablet */}
        <div className="h-[100vh] md:h-[110vh] lg:h-screen" />

        {/* SECOND SECTION - Optimized for mobile/tablet */}
        <div className="relative z-20 h-auto lg:h-screen flex flex-col lg:flex-row">
          {/* Left empty on desktop only */}
          <div className="hidden lg:block w-1/2"></div>

          {/* Right content - Full width on mobile/tablet */}
          <div className="w-full lg:w-1/2 min-h-[50vh] md:min-h-[60vh] lg:h-screen text-white flex items-center flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-center bg-[#33522d] px-4 sm:px-6 md:px-8 py-12 md:py-16 lg:py-0">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center px-2">
              "We make food that makes people happy"
            </h2>
            <p className="text-xs sm:text-sm md:text-base">- DOSA WORLD -</p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="relative z-30">
        <Footer />
      </div>
    </div>
  );
};

export default About;