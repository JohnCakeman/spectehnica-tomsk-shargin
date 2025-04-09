
import SocialIcons from "./SocialIcons";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="font-bold text-xl md:text-2xl text-primary">
            <span>Спец</span>
            <span className="text-secondary">Техника</span>
          </h1>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#equipment" className="text-gray-700 hover:text-primary transition-colors">Техника</a>
          <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">Отзывы</a>
          <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
        </div>
        
        <div className="flex items-center gap-4">
          <SocialIcons />
          <div className="hidden md:flex items-center gap-2 bg-primary/10 p-2 rounded-lg">
            <Phone size={18} className="text-primary" />
            <a href="tel:+71234567890" className="text-primary font-medium">+7 (123) 456-78-90</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
