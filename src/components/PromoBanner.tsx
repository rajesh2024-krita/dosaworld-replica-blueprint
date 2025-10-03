import biryaniImage from "@/assets/briyani1.avif";
import bgImage from "@/assets/11062b_909c4c1a78e54f998e22ac4141a1505c~mv2.avif";
import { useTranslation } from "react-i18next";

const PromoBanner = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-cover bg-center w-full" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="text-white p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-[#FF8800]">
              {t("promoBanner.title")}
            </h2>
            <p className="text-lg mb-2">{t("promoBanner.subtitle")}</p>
            <p className="text-sm mb-6 text-restaurant-cream">{t("promoBanner.description")}</p>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-xl">{t("promoBanner.bucketS.name")}</h3>
                  <p className="text-restaurant-cream">{t("promoBanner.bucketS.people")}</p>
                </div>
                <span className="text-2xl font-bold">{t("promoBanner.bucketS.price")}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-xl">{t("promoBanner.bucketM.name")}</h3>
                  <p className="text-restaurant-cream">{t("promoBanner.bucketM.people")}</p>
                </div>
                <span className="text-2xl font-bold">{t("promoBanner.bucketM.price")}</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src={biryaniImage} 
              alt={t("promoBanner.title")} 
              className="w-64 h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
