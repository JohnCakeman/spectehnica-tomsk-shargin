
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  company?: string;
  image: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Алексей",
    company: "стройфирма \"Монолит\"",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    text: "Срочно нужен был кран для демонтажа. Работали четко, без задержек. Спасены!"
  },
  {
    id: 2,
    name: "Анна",
    company: "частный заказчик",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Экскаватор за 2 часа расчистил участок. Цены ниже, чем у конкурентов!"
  },
  {
    id: 3,
    name: "ООО \"СтройГрад\"",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    text: "Регулярно заказываем манипулятор для доставки кирпича. Надежные водители!"
  },
  {
    id: 4,
    name: "Михаил",
    company: "ИП Белов",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    text: "Арендовали технику на месяц для стройки загородного дома. Всегда вовремя, отлично работает!"
  },
  {
    id: 5,
    name: "Ольга",
    company: "Ландшафтный дизайн",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "За день очистили большой участок под ландшафтный дизайн. Спасибо за оперативность!"
  },
  {
    id: 6,
    name: "Сергей",
    company: "Директор ООО \"ЛогТранс\"",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    text: "Выручили с перевозкой оборудования в ночное время. Ответственный подход и разумные цены!"
  },
  {
    id: 7,
    name: "Дмитрий",
    company: "Прораб",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "На объекте сломалась техника, в течение часа подогнали замену. Работы не остановились!"
  },
  {
    id: 8,
    name: "ТСЖ \"Солнечное\"",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    text: "Заказали уборку снега на территории ЖК. Быстро, чисто, недорого. Будем обращаться еще!"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayCount, setDisplayCount] = useState(3);
  
  // Update display count based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setDisplayCount(1);
      } else if (window.innerWidth < 1024) {
        setDisplayCount(2);
      } else {
        setDisplayCount(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + displayCount >= testimonials.length 
        ? 0 
        : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 
        ? Math.max(0, testimonials.length - displayCount) 
        : prevIndex - 1
    );
  };
  
  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + displayCount
  );

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {visibleTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="w-full px-4 flex-shrink-0"
            style={{ flex: `0 0 ${100 / displayCount}%` }}
          >
            <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  {testimonial.company && (
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  )}
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              
              <p className="text-gray-600 italic flex-grow">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100"
      >
        <ChevronLeft size={24} className="text-gray-600" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100"
      >
        <ChevronRight size={24} className="text-gray-600" />
      </button>
    </div>
  );
};

export default TestimonialCarousel;
