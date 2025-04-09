
import { MessageCircle, Send } from "lucide-react";

type EquipmentCardProps = {
  title: string;
  image: string;
  description: string;
  specs: string[];
  price: string;
  additionalPrice?: string;
};

const EquipmentCard = ({
  title,
  image,
  description,
  specs,
  price,
  additionalPrice
}: EquipmentCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg card-hover">
      {/* Image */}
      <div className="h-52 overflow-hidden">
        <img 
          src={image} 
          alt={`Аренда ${title} в Москве`} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {/* Specifications */}
        <div className="mb-4">
          <h4 className="font-bold text-gray-700 mb-2">Технические характеристики:</h4>
          <ul className="list-disc pl-5 text-gray-600">
            {specs.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </div>
        
        {/* Price */}
        <div className="mb-5 bg-primary/5 p-3 rounded-lg">
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-secondary">{price}</span>
            <span className="text-gray-500 ml-1">/час</span>
          </div>
          {additionalPrice && (
            <div className="text-sm text-gray-500 mt-1">{additionalPrice}</div>
          )}
          <div className="text-sm text-primary font-medium mt-2">
            Срочный выезд за 2 часа
          </div>
        </div>
        
        {/* Order buttons */}
        <h4 className="font-bold text-center mb-3">Заказать:</h4>
        <div className="grid grid-cols-3 gap-2">
          <a 
            href="https://t.me/your_username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 bg-[#0088cc] hover:bg-[#0088cc]/90 text-white py-2 px-3 rounded transition-colors"
          >
            <Send size={18} />
            <span className="text-sm">Telegram</span>
          </a>
          
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white py-2 px-3 rounded transition-colors"
          >
            <MessageCircle size={18} />
            <span className="text-sm">WhatsApp</span>
          </a>
          
          <a 
            href="https://vk.com/your_profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 bg-[#4C75A3] hover:bg-[#4C75A3]/90 text-white py-2 px-3 rounded transition-colors"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M21 2H3v20h18V2z"></path>
              <path d="M18 8.5l-3.777 5.217a2 2 0 0 1-3.288.3l-2.935-2.935"></path>
            </svg>
            <span className="text-sm">ВК</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EquipmentCard;
