
import { MessageCircle, Send } from "lucide-react";
import { cn } from "@/lib/utils";

type SocialIconsProps = {
  className?: string;
};

const SocialIcons = ({ className }: SocialIconsProps) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="tooltip-container relative">
        <a 
          href="https://t.me/your_username" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-[#0088cc] text-white p-2 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          <Send size={18} />
          <span className="tooltip">Написать в Telegram</span>
        </a>
      </div>
      
      <div className="tooltip-container relative">
        <a 
          href="https://wa.me/1234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-2 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          <MessageCircle size={18} />
          <span className="tooltip">Написать в WhatsApp</span>
        </a>
      </div>
      
      <div className="tooltip-container relative">
        <a 
          href="https://vk.com/your_profile" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#4C75A3] text-white p-2 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
