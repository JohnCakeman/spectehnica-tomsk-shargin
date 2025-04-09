
import DiscountTimer from "./DiscountTimer";

const Hero = () => {
  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-28 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Арендуйте спецтехнику за 1 клик!
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-secondary">
            Сэкономьте до 40% на грузоперевозках и работах под ключ
          </h2>
          
          <div className="mb-10 max-w-sm">
            <DiscountTimer />
          </div>
          
          <p className="text-xl mb-8">
            Не ждите свободных машин — бронируйте технику онлайн!
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="cta-button">
              Заказать технику
            </a>
            <a href="#equipment" className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
              Выбрать технику
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
