import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#122F0D] text-white py-12">
      <div className="md:mb-20">
        <div className="flex items-center justify-center space-x-2 mb-4">
          {/* Desktop Logo */}
          <img
            src={logo}
            alt="Dosa World"
            className="hidden md:block"
          />

          {/* Mobile Logo */}
          <img
            src={logo}
            alt="Dosa World"
            className="block md:hidden h-24"
          />
        </div>


        <div className="font-serif text-md font-medium md:flex items-center justify-center gap-2 italic hidden">
          <span>
            <svg className="h-6" preserveAspectRatio="xMidYMid meet" data-bbox="21 20 159.3 160" viewBox="21 20 159.3 160" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs></defs>
              <g>
                <path fill="#FFA304" d="M180.3 99.4c0 1.3-43 2.7-43 2.7-18.7 0-34.1 15.3-34.1 34.1 0 0-1.3 43.8-2.7 43.8s-2.7-43.8-2.7-43.8c0-18.7-15.3-34.1-34.1-34.1 0 0-42.7-1.3-42.7-2.7s42.7-2.7 42.7-2.7c18.7 0 34.1-15.3 34.1-34.1 0 0 1.4-42.7 2.8-42.6 1.3 0 2.6 42.6 2.6 42.6 0 18.7 15.3 34.1 34.1 34.1 0 0 42.9 1.3 43 2.7Z" data-color="1"></path>
              </g>
            </svg>
          </span>
          South Indian Restaurant
          <span>
            <svg className="h-6" preserveAspectRatio="xMidYMid meet" data-bbox="21 20 159.3 160" viewBox="21 20 159.3 160" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs></defs>
              <g>
                <path fill="#FFA304" d="M180.3 99.4c0 1.3-43 2.7-43 2.7-18.7 0-34.1 15.3-34.1 34.1 0 0-1.3 43.8-2.7 43.8s-2.7-43.8-2.7-43.8c0-18.7-15.3-34.1-34.1-34.1 0 0-42.7-1.3-42.7-2.7s42.7-2.7 42.7-2.7c18.7 0 34.1-15.3 34.1-34.1 0 0 1.4-42.7 2.8-42.6 1.3 0 2.6 42.6 2.6 42.6 0 18.7 15.3 34.1 34.1 34.1 0 0 42.9 1.3 43 2.7Z" data-color="1"></path>
              </g>
            </svg>
          </span>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">

          {/* Quick Links */}
          <div>
            <ul className="space-y-2 text-center uppercase">
              <li><Link to="/" className="text-restaurant-cream  transition-colors text-white text-xs md:text-lg">Home</Link></li>
              <li><Link to="/online-ordering" className="text-restaurant-cream  transition-colors text-white text-xs md:text-lg">Menu</Link></li>
              <li><Link to="/about" className="text-restaurant-cream  transition-colors text-white text-xs md:text-lg">About</Link></li>
              <li><Link to="/contact" className="text-restaurant-cream  transition-colors text-white text-xs md:text-lg">Contact Us</Link></li>
              <li><Link to="/reservations" className="text-restaurant-cream  transition-colors text-white text-xs md:text-lg">Reservations</Link></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className=" text-center">
            <h3 className="font-serif text-lg font-semibold mb-4 uppercase">Opening hours</h3>
            <div className="text-restaurant-cream text-white uppercase font-normal space-y-1">
              <p className="text-xs md:text-sm">Tuesday to Friday</p>
              <p className="text-xs md:text-sm">11:30 AM - 2:30 PM , 5 PM - 9:30 PM</p>
              <p className="text-xs md:text-sm">SATURDAY</p>
              <p className="text-xs md:text-sm">11:30 AM - 3 PM , 5 PM - 9:30 PM</p>
              <p className="text-xs md:text-sm">SUNDAY</p>
              <p className="text-xs md:text-sm">12 PM - 3 PM, 4 - 8:30 PM</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className=" text-center">
            <h3 className="font-serif text-lg font-bold mb-4 uppercase">Where we are</h3>
            <div className="text-restaurant-cream text-white">
              <div className="space-y-1">
                <p className="text-xs md:text-lg">Lämmertwiete 2</p>
                <p className="text-xs md:text-lg">21073 Hamburg,</p>
                <p className="text-xs md:text-lg">Germany</p>
              </div>
              <div className="mt-8">
                <a href="https://www.google.com/maps/place/Dosa+World+Indisches+restaurant/@53.4634873,9.9787268,17z/data=!4m6!3m5!1s0x47b19100445e7787:0x820c7593f06ff0a7!8m2!3d53.4634841!4d9.9813017!16s%2Fg%2F11vs81qv7h!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="w-full text-white border-white text-sm font-normal p-2 border-2 rounded-full bg-transparent hover:border-[#33522D] px-6 hover:bg-[#33522D] transition-all duration-300 hover:text-[#FF8601]">Locate Us</a>
              </div>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <ul className="space-y-2 text-center">
              <li><Link to="#" className="underline text-restaurant-cream  transition-colors text-white text-xs md:text-lg">Impressum</Link></li>
              <li><Link to="/privacy-policy" className="underline text-restaurant-cream  transition-colors text-white text-xs md:text-lg">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-restaurant-cream/30 mt-8 pt-8 text-center">
          <p className="text-restaurant-cream text-sm text-white">
            © 2024 Dosa World. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;