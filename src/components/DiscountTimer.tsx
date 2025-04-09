
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const DiscountTimer = () => {
  const isMobile = useIsMobile();
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const newSeconds = prevTime.seconds - 1;
        
        if (newSeconds < 0) {
          const newMinutes = prevTime.minutes - 1;
          
          if (newMinutes < 0) {
            const newHours = prevTime.hours - 1;
            
            if (newHours < 0) {
              // Reset to 23:59:59 when timer reaches zero
              return {
                hours: 23,
                minutes: 59,
                seconds: 59
              };
            }
            
            return {
              hours: newHours,
              minutes: 59,
              seconds: 59
            };
          }
          
          return {
            hours: prevTime.hours,
            minutes: newMinutes,
            seconds: 59
          };
        }
        
        return {
          hours: prevTime.hours,
          minutes: prevTime.minutes,
          seconds: newSeconds
        };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-secondary/90 text-white p-3 rounded-lg shadow-lg animate-pulse-soft">
      <div className="text-center">
        <p className="font-bold mb-2 text-sm sm:text-base">Скидка 10% при заказе через сайт!</p>
        <div className="flex justify-center gap-2">
          <div className="bg-black/20 px-2 sm:px-3 py-1 rounded">
            <span className="font-mono text-lg sm:text-xl">{timeLeft.hours.toString().padStart(2, '0')}</span>
            <span className="text-xs">ч</span>
          </div>
          <div className="bg-black/20 px-2 sm:px-3 py-1 rounded">
            <span className="font-mono text-lg sm:text-xl">{timeLeft.minutes.toString().padStart(2, '0')}</span>
            <span className="text-xs">м</span>
          </div>
          <div className="bg-black/20 px-2 sm:px-3 py-1 rounded">
            <span className="font-mono text-lg sm:text-xl">{timeLeft.seconds.toString().padStart(2, '0')}</span>
            <span className="text-xs">с</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountTimer;
