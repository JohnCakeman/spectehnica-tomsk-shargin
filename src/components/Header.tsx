
import { useState } from "react";
import SocialIcons from "./SocialIcons";
import { Phone, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="font-bold text-xl md:text-2xl text-primary">
            <span>Спец</span>
            <span className="text-secondary">Техника</span>
          </h1>
        </div>
        
        {!isMobile ? (
          <>
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
          </>
        ) : (
          <>
            <a href="tel:+71234567890" className="md:hidden flex items-center gap-1 bg-primary/10 p-2 rounded-lg">
              <Phone size={18} className="text-primary" />
            </a>

            <Sheet>
              <SheetTrigger asChild>
                <button className="md:hidden text-primary p-1">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent className="w-[85%] sm:w-[300px] pt-12">
                <div className="flex flex-col gap-6 py-4">
                  <a href="#equipment" className="text-lg font-medium text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Техника
                  </a>
                  <a href="#testimonials" className="text-lg font-medium text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Отзывы
                  </a>
                  <a href="#contact" className="text-lg font-medium text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Контакты
                  </a>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-2">
                        <Phone size={18} className="text-primary" />
                        <a href="tel:+71234567890" className="text-primary font-medium">+7 (123) 456-78-90</a>
                      </div>
                      <div className="mt-2">
                        <SocialIcons />
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
