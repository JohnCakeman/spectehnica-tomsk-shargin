
import { MessageCircle, Send } from "lucide-react";
import { cn } from "@/lib/utils";

type SocialIconsProps = {
  className?: string;
  size?: "small" | "medium" | "large";
};

const SocialIcons = ({ className, size = "medium" }: SocialIconsProps) => {
  const getIconSize = () => {
    switch (size) {
      case "small":
        return 16;
      case "large":
        return 20;
      default:
        return 18;
    }
  };
  
  const getContainerSize = () => {
    switch (size) {
      case "small":
        return "p-1.5";
      case "large":
        return "p-2.5";
      default:
        return "p-2";
    }
  };

  const iconSize = getIconSize();
  const containerSize = getContainerSize();

  return (
    <div className={cn("flex items-center gap-2 sm:gap-3", className)}>
      <div className="tooltip-container relative">
        <a 
          href="https://t.me/your_username" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={cn(`bg-[#0088cc] text-white ${containerSize} rounded-full flex items-center justify-center hover:opacity-90 transition-opacity`)}
        >
          <Send size={iconSize} />
          <span className="tooltip">Написать в Telegram</span>
        </a>
      </div>
      
      <div className="tooltip-container relative">
        <a 
          href="https://wa.me/1234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          className={cn(`bg-[#25D366] text-white ${containerSize} rounded-full flex items-center justify-center hover:opacity-90 transition-opacity`)}
        >
          <MessageCircle size={iconSize} />
          <span className="tooltip">Написать в WhatsApp</span>
        </a>
      </div>
      
      <div className="tooltip-container relative">
        <a 
          href="https://vk.com/your_profile" 
          target="_blank" 
          rel="noopener noreferrer"
          className={cn(`bg-[#4C75A3] text-white ${containerSize} rounded-full flex items-center justify-center hover:opacity-90 transition-opacity`)}
        >
          <svg viewBox="0 0 24 24" width={iconSize} height={iconSize} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 2H3v20h18V2z"></path>
            <path d="M18 8.5l-3.777 5.217a2 2 0 0 1-3.288.3l-2.935-2.935"></path>
          </svg>
          <span className="tooltip">Написать в ВК</span>
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
