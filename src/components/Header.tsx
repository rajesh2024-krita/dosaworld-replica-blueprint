import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm p-3 transition-all duration-300
      ${isHomePage ? "bg-[#0A2006]" : "bg-[#0A2006] shadow-md"}`}
    >
      <div className="container mx-auto px-6 md:px-32 h-16 flex items-center justify-between">

        {/* ====== LEFT NAVIGATION (Desktop) ====== */}
        <nav className="hidden md:flex items-center space-x-8 uppercase text-[18px]">
          {isHomePage ? (
            <>
              <Link to="/online-ordering" className="text-white hover:text-[#FF8601] transition-colors">Menu</Link>
              <Link to="/reservations">
                <Button className="w-full text-white border-white uppercase text-[18px] font-normal p-6 border-2 rounded-full bg-transparent hover:border-[#33522D] transition-all duration-300 hover:text-[#FF8601]">
                  Reservation
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/contact" className="text-white hover:text-[#FF8601] transition-colors">Contact Us</Link>
              <Link to="/about" className="text-white hover:text-[#FF8601] transition-colors">About</Link>
            </>
          )}
        </nav>

        {/* ====== LOGO CENTER ====== */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Dosa World" className="h-16" />
        </div>

        {/* ====== RIGHT NAVIGATION (Desktop) ====== */}
        <nav className="hidden md:flex items-center space-x-8 uppercase text-[18px]">
          {isHomePage ? (
            <>
              <Link to="/contact" className="text-white hover:text-[#FF8601] transition-colors">Contact Us</Link>
              <Link to="/about" className="text-white hover:text-[#FF8601] transition-colors">About</Link>
            </>
          ) : (
            <Link to="/">
              <Button className="w-full text-white border-white uppercase text-[18px] font-normal p-6 border-2 rounded-full bg-transparent hover:border-[#33522D] transition-all duration-300 hover:text-[#FF8601]">
                Home
              </Button>
            </Link>
          )}
        </nav>

        {/* ====== MOBILE MENU BUTTON ====== */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* ====== OFFCANVAS MOBILE MENU (OUTSIDE CONTAINER) ====== */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-[#33522D] transform transition-transform duration-300 ease-in-out z-[9999]
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)}>
            <X className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Menu Links */}
        <nav className="flex flex-col p-4 space-y-6 uppercase text-white text-[24px] text-center">
          {isHomePage ? (
            <>
              <Link to="/online-ordering" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FF8601] transition-colors">Menu</Link>
              <Link to="/reservations" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FF8601] transition-colors">Reservation</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FF8601] transition-colors">Contact Us</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FF8601] transition-colors">About</Link>
            </>
          ) : (
            <>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FF8601] transition-colors">Contact Us</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FF8601] transition-colors">About</Link>
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FF8601] transition-colors">Home</Link>
            </>
          )}
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
        />
      )}
    </header>
  );
};

export default Header;
