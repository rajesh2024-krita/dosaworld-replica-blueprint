"use client";
import { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { api } from "@/hooks/axios";

const MenuManagement = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [menuCategories, setMenuCategories] = useState<any[]>([]);
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await api.get("/menu");
        const menuData = res.data; // Already grouped by category

        setMenuCategories(menuData);
        if (menuData.length > 0) {
          setActiveCategory(String(menuData[0].id));
        }
      } catch (err) {
        console.error("Error fetching menu:", err);
      }
    };

    fetchMenu();
  }, []);

  // Intersection Observer
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
  }, [menuCategories]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="flex flex-col lg:flex-row relative w-full">
        {/* LEFT IMAGE SECTION */}
        <div className="hidden lg:block w-1/2 sticky top-20 h-screen">
          {menuCategories
            .filter((cat) => String(cat.id) === activeCategory)
            .map((cat: any) => (
              <div
                key={cat.id}
                className="bg-white shadow-lg rounded-xl space-y-4 h-full"
              >
                {cat.image && (
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
        </div>

        {/* RIGHT MENU LIST */}
        {/* RIGHT MENU LIST */}
        <div className="flex-1 bg-[#33522D] mt-20 p-4">
          {menuCategories.map((cat: any) => (
            <div
              key={cat.id}
              id={String(cat.id)}
              ref={(el) => (categoryRefs.current[cat.id] = el)}
              className="min-h-screen py-12"
            >
              <h1 className="text-4xl font-bold text-[#FE8500]">{cat.name}</h1>
              <ul className="space-y-10 mt-4">
                {cat.items.map((item: any) => (
                  <li
                    key={item.id}
                    className="flex justify-between border-b pb-1 text-white text-xl"
                  >
                    <span>{item.name}</span>
                    <span className="font-semibold">€{item.price}</span>
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

export default MenuManagement;
