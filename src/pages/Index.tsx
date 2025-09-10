import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromoBanner from "@/components/PromoBanner";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import ReservationSection from "@/components/ReservationSection";
import QuoteSection from "@/components/QuoteSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import './marquee.css';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div className="overflow-hidden w-full bg-[#0A2006] py-4">
        <div className="flex animate-marquee space-x-10">
          {Array(50).fill(0).map((_, i) => (
            <span key={i}>
              <svg className="h-6" preserveAspectRatio="xMidYMid meet" viewBox="21 20 159.3 160" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fill="#FFA304" d="M180.3 99.4c0 1.3-43 2.7-43 2.7-18.7 0-34.1 15.3-34.1 34.1 0 0-1.3 43.8-2.7 43.8s-2.7-43.8-2.7-43.8c0-18.7-15.3-34.1-34.1-34.1 0 0-42.7-1.3-42.7-2.7s42.7-2.7 42.7-2.7c18.7 0 34.1-15.3 34.1-34.1 0 0 1.4-42.7 2.8-42.6 1.3 0 2.6 42.6 2.6 42.6 0 18.7 15.3 34.1 34.1 34.1 0 0 42.9 1.3 43 2.7Z"></path>
                </g>
              </svg>
            </span>
          ))}
        </div>
      </div>
      <PromoBanner />
      <AboutSection />
      <MenuSection />
      <div className="overflow-hidden w-full bg-white py-4">
        <div className="flex animate-marquee space-x-16 text-xl font-semibold">
          {Array(20).fill(0).map((_, i) => (
            <div key={i} className="flex items-center space-x-4">
              {/* SVG */}
              <svg className="h-6 w-6" viewBox="21 20 159.3 160" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#0A2006"
                  d="M180.3 99.4c0 1.3-43 2.7-43 2.7-18.7 0-34.1 15.3-34.1 34.1 0 0-1.3 43.8-2.7 43.8s-2.7-43.8-2.7-43.8c0-18.7-15.3-34.1-34.1-34.1 0 0-42.7-1.3-42.7-2.7s42.7-2.7 42.7-2.7c18.7 0 34.1-15.3 34.1-34.1 0 0 1.4-42.7 2.8-42.6 1.3 0 2.6 42.6 2.6 42.6 0 18.7 15.3 34.1 34.1 34.1 0 0 42.9 1.3 43 2.7Z"
                />
              </svg>

              {/* Text */}
              <span className="text-[#0A2006]">South Indian Restaurant</span>
            </div>
          ))}
        </div>
      </div>

      <ReservationSection />
      <QuoteSection />
      <ReviewsSection />
      <div className="overflow-hidden w-full bg-[#33522D] py-3">
        <div className="flex animate-marquee space-x-16 text-md font-semibold">
          {Array(20).fill(0).map((_, i) => (
            <div key={i} className="flex items-center space-x-4">
              {/* SVG */}
              <svg className="h-6 w-6" viewBox="21 20 159.3 160" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#FE8500"
                  d="M180.3 99.4c0 1.3-43 2.7-43 2.7-18.7 0-34.1 15.3-34.1 34.1 0 0-1.3 43.8-2.7 43.8s-2.7-43.8-2.7-43.8c0-18.7-15.3-34.1-34.1-34.1 0 0-42.7-1.3-42.7-2.7s42.7-2.7 42.7-2.7c18.7 0 34.1-15.3 34.1-34.1 0 0 1.4-42.7 2.8-42.6 1.3 0 2.6 42.6 2.6 42.6 0 18.7 15.3 34.1 34.1 34.1 0 0 42.9 1.3 43 2.7Z"
                />
              </svg>

              {/* Text */}
              <span className="text-white uppercase">All day menu</span>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
