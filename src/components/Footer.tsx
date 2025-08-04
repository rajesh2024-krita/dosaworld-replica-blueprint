import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Dosa World" className="h-10 w-10" />
              <span className="font-serif text-xl font-bold">Dosa World</span>
            </div>
            <p className="text-sm text-restaurant-cream leading-relaxed">
              Hamburg's premier destination for authentic South Indian cuisine. 
              Experience the vibrant flavors of South India in every bite.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-restaurant-cream hover:text-white transition-colors">Home</a></li>
              <li><a href="#menu" className="text-restaurant-cream hover:text-white transition-colors">Menu</a></li>
              <li><a href="#about" className="text-restaurant-cream hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-restaurant-cream hover:text-white transition-colors">Contact</a></li>
              <li><a href="#reservations" className="text-restaurant-cream hover:text-white transition-colors">Reservations</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 text-restaurant-cream">
              <p>South Indian Restaurant</p>
              <p>Hamburg, Germany</p>
              <p>Phone: +49 (0) 123 456 789</p>
              <p>Email: info@dosaworld.de</p>
            </div>
          </div>
        </div>

        <div className="border-t border-restaurant-cream/30 mt-8 pt-8 text-center">
          <p className="text-restaurant-cream text-sm">
            © 2024 Dosa World. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;