import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false); // language dropdown
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: "en" | "de") => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false); // close dropdown after selection
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm  border-b border-green-900 p-3 transition-all duration-300
      ${isHomePage ? "bg-[#122F0D]" : "bg-[#122F0D] shadow-md"}`}
    >
      <div className="container px-6 md:px-32 h-16 flex items-center justify-between">

        {/* ====== LEFT NAVIGATION (Desktop) ====== */}
        <nav className="hidden md:flex items-center space-x-8 uppercase text-[18px]">
          {isHomePage ? (
            <>
              <Link to="/menu-list" className="text-white hover:text-[#FF8601] transition-colors">{t("header.menu") || "Menu"}</Link>
              <Link to="/reservations">
                <Button className="w-full text-white border-white uppercase text-[18px] font-normal p-6 border-2 rounded-full bg-transparent hover:border-[#33522D] transition-all duration-300 hover:text-[#FF8601]">
                  {t("header.reservation") || "Reservation"}
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/contact" className="text-white hover:text-[#FF8601] transition-colors">{t("header.contact") || "Contact Us"}</Link>
              <Link to="/about" className="text-white hover:text-[#FF8601] transition-colors">{t("header.about") || "About"}</Link>
            </>
          )}
        </nav>

        {/* ====== LOGO CENTER ====== */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Dosa World" className="h-16" />
        </div>

        {/* ====== RIGHT NAVIGATION (Desktop) ====== */}
        <nav className="hidden md:flex items-center space-x-8 uppercase text-[18px] relative">
          {isHomePage ? (
            <>
              <Link to="/contact" className="text-white hover:text-[#FF8601] transition-colors">{t("header.contact") || "Contact Us"}</Link>
              <Link to="/about" className="text-white hover:text-[#FF8601] transition-colors">{t("header.about") || "About"}</Link>
            </>
          ) : (
            <Link to="/">
              <Button className="w-full text-white border-white uppercase text-[18px] font-normal p-6 border-2 rounded-full bg-transparent hover:border-[#33522D] transition-all duration-300 hover:text-[#FF8601]">
                {t("header.home") || "Home"}
              </Button>
            </Link>
          )}

          {/* ====== LANGUAGE DROPDOWN ====== */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center text-white hover:text-[#FF8601] transition-colors"
            >
              {i18n.language.toUpperCase()}
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-24 bg-white text-black rounded shadow-md overflow-hidden z-50">
                <button
                  onClick={() => changeLanguage("en")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage("de")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  Deutsch
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* ====== MOBILE MENU BUTTON ====== */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* ====== OFFCANVAS MOBILE MENU ====== */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-[#33522D] transform transition-transform duration-300 ease-in-out z-[9999]
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)}>
            <X className="h-6 w-6 text-white" />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-6 uppercase text-white text-[24px] text-center">
          {isHomePage ? (
            <>
              <Link to="/menu-list" onClick={() => setIsMenuOpen(false)}>{t("header.menu") || "Menu"}</Link>
              <Link to="/reservations" onClick={() => setIsMenuOpen(false)}>{t("header.reservation") || "Reservation"}</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>{t("header.contact") || "Contact Us"}</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>{t("header.about") || "About"}</Link>
            </>
          ) : (
            <>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>{t("header.contact") || "Contact Us"}</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>{t("header.about") || "About"}</Link>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>{t("header.home") || "Home"}</Link>
            </>
          )}

          {/* MOBILE LANGUAGE SWITCH */}
          <div className="mt-6 flex justify-center space-x-4">
            <button onClick={() => changeLanguage("en")} className="text-white hover:text-[#FF8601]">EN</button>
            <button onClick={() => changeLanguage("de")} className="text-white hover:text-[#FF8601]">DE</button>
          </div>
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
