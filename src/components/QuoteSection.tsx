import { useTranslation } from "react-i18next";

const QuoteSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-restaurant-green text-white">
      <div className="container mx-auto px-4 text-center">
        <blockquote className="font-serif text-3xl md:text-4xl font-bold mb-4">
          {t("quoteSection.quote")}
        </blockquote>
        <cite className="text-restaurant-cream text-lg">
          {t("quoteSection.author")}
        </cite>
      </div>
    </section>
  );
};

export default QuoteSection;
