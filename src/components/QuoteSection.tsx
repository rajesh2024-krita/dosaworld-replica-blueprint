const QuoteSection = () => {
  return (
    <section className="py-16 bg-restaurant-green text-white">
      <div className="container mx-auto px-4 text-center">
        <blockquote className="font-serif text-3xl md:text-4xl font-bold mb-4">
          "The perfect place for any occasion"
        </blockquote>
        <cite className="text-restaurant-cream text-lg">
          - DOSA WORLD -
        </cite>
      </div>
    </section>
  );
};

export default QuoteSection;