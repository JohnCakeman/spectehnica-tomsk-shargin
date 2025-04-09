
import SocialIcons from "./SocialIcons";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span>Спец</span>
              <span className="text-secondary">Техника</span>
            </h3>
            <p className="mb-4 text-gray-400">
              Аренда спецтехники для строительства и логистики. Выезжаем 24/7 по Москве и области.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <Phone size={18} className="text-secondary" />
              <a href="tel:+71234567890" className="hover:text-secondary transition-colors">+7 (123) 456-78-90</a>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Mail size={18} className="text-secondary" />
              <a href="mailto:info@spectehnika.ru" className="hover:text-secondary transition-colors">info@spectehnika.ru</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-secondary" />
              <span>г. Москва, ул. Строительная, д. 10</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Наша техника</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Краны-манипуляторы</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Экскаваторы</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Самосвалы</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Автовышки</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Бульдозеры</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Мы онлайн 24/7</h3>
            <p className="mb-4 text-gray-400">
              Пишите — ответим за 1 минуту!
            </p>
            <div className="flex gap-3 mb-4">
              <SocialIcons />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Clock size={18} className="text-secondary" />
              <span className="text-white">Работаем круглосуточно</span>
            </div>
            <div className="p-3 bg-secondary/20 rounded-lg mt-4">
              <p className="font-bold text-white">
                Звоните! Простой техники стоит вам денег: +7 (123) 456-78-90
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 СпецТехника. Все права защищены.
            </p>
            <ul className="flex space-x-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">Политика конфиденциальности</a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">Условия использования</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
