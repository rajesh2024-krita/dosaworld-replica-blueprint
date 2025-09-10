import { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import hotelImage from "@/assets/hotel.avif";
import Coffee from "@/assets/Menu/coffee.jpg";
import Juice from "@/assets/Menu/fresh-fruit-juice.jpg";
import Softdrinks from "@/assets/Menu/softdrinks.jpeg";

const OnlineOrdering = () => {
  const [activeCategory, setActiveCategory] = useState("kaffee");
  const categoryRefs = useRef({});

  const menuCategories = [
    {
      id: "kaffee",
      title: "KAFFEE / CHAI BAR",
      items: [
        { name: "PLAIN TEE", price: "€4.00" },
        { name: "CHENNAI FILTER COFFEE", price: "€5.00" },
        { name: "MASALA CHAI / MILCH TEE", price: "€4.50" },
      ],
      image: Coffee
    },
    {
      id: "special-drinks",
      title: "SPEZIAL GETRÄNKE / SPECIAL DRINKS",
      items: [
        { name: "BUTTER MILK", price: "€4.00" },
        { name: "ROSE MILK", price: "€5.00" },
        { name: "LIME JUICE SWEET/SALT", price: "€5.00" },
        { name: "MANGO LASSI (MP)", price: "€5.00" },
        { name: "PLAIN LASSI (MP)", price: "€4.00" },
      ],
      image: Juice
    },
    {
      id: "soft-drinks",
      title: "ALKOHOLFREIE GETRÄNKE / SOFT DRINKS",
      items: [
        { name: "WASSER OHNE KOHLENSÄURE (Klein)", price: "€2.50" },
        { name: "WASSER OHNE KOHLENSÄURE (Groß)", price: "€5.00" },
        { name: "COLA / ZERO (Klein)", price: "€4.00" },
        { name: "COLA / ZERO (Groß)", price: "€5.50" },
        { name: "SPRITE / FANTA (Klein)", price: "€4.00" },
        { name: "SPRITE / FANTA (Groß)", price: "€5.50" },
      ],
      image: Softdrinks
    },
  ];

  // Intersection Observer for category highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(categoryRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="flex flex-col lg:flex-row relative w-full">
        {/* LEFT CONTENT SCROLL AREA */}
        <div className="hidden lg:block w-1/2 sticky top-20 h-screen">
          {menuCategories
            .filter((cat) => cat.id === activeCategory)
            .map((cat) => (
              <div
                key={cat.id}
                className="bg-white shadow-lg rounded-xl space-y-4 h-full"
              >
                {/* <h2 className="text-2xl font-bold">{cat.title}</h2> */}
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />

                {/* <ul className="space-y-2">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="flex justify-between border-b pb-1">
                      <span>{item.name}</span>
                      <span className="font-semibold">{item.price}</span>
                    </li>
                  ))}
                </ul> */}
              </div>
            ))}
        </div>

        {/* RIGHT SIDE STICKY CARD */}
        <div className="flex-1 bg-[#33522D] mt-20 p-4">
          {menuCategories.map((cat) => (
            <div
              key={cat.id}
              id={cat.id}
              ref={(el) => (categoryRefs.current[cat.id] = el)}
              className="h-[100vh] items-center justify-center"
            >
              <h1 className="text-4xl font-bold text-[#FE8500]">{cat.title}</h1>
              <ul className="space-y-10 mt-4">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between border-b pb-1 text-white text-xl">
                    <span>{item.name}</span>
                    <span className="font-semibold">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default OnlineOrdering;
