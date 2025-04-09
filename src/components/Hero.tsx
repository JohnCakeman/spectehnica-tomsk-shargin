
import DiscountTimer from "./DiscountTimer";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1595758376050-d0679ec72ffe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12 md:py-28 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight lg:text-6xl text-center">
            Аренда спецтехники за 1 клик!
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-center text-secondary">
            Сэкономьте до 40% на грузоперевозках и работах под ключ
          </h2>
          
          <div className="mb-8 max-w-sm mx-auto">
            <DiscountTimer />
          </div>
          
          <p className="text-lg md:text-xl mb-6 text-center">
            Не ждите свободных машин — бронируйте технику онлайн!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="cta-button text-center w-full sm:w-auto">
              Заказать технику
            </a>
            <a 
              href="#equipment" 
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center w-full sm:w-auto"
            >
              Выбрать технику
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
