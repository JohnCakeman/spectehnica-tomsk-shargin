
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Заявка отправлена!",
        description: "Менеджер свяжется с вами через 2 минуты",
      });
      
      // Reset form
      setName("");
      setPhone("");
      setComment("");
      
      // Redirect to Telegram or open in new tab
      window.open("https://t.me/your_bot_username", "_blank");
    }, 1500);
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
      <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">Получить расчет за 5 минут</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Имя
          </label>
          <Input
            id="name"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 mb-2">
            Телефон
          </label>
          <Input
            id="phone"
            placeholder="+7 (___) ___-__-__"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            type="tel"
            className="w-full"
          />
        </div>
        
        <div className="mb-5">
          <label htmlFor="comment" className="block text-gray-700 mb-2">
            Опишите задачу
          </label>
          <Textarea
            id="comment"
            placeholder="Какая техника нужна, адрес, сроки..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
            className="w-full"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-3 rounded-lg transition-all duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Отправка...
            </>
          ) : (
            "Получить расчет за 5 минут"
          )}
        </Button>
      </form>
      
      <div className="mt-5 text-center">
        <p className="text-gray-500 text-sm mb-3">Или напишите нам напрямую:</p>
        <div className="flex justify-center space-x-4">
          <a 
            href="https://t.me/your_username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#0088cc] hover:underline"
          >
            <Send size={16} />
            <span className="text-sm">Telegram</span>
          </a>
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#25D366] hover:underline"
          >
            <MessageCircle size={16} />
            <span className="text-sm">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
