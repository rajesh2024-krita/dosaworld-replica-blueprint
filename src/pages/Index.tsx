import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromoBanner from "@/components/PromoBanner";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import ReservationSection from "@/components/ReservationSection";
import QuoteSection from "@/components/QuoteSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PromoBanner />
      <AboutSection />
      <MenuSection />
      <ReservationSection />
      <QuoteSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Index;
