
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import EquipmentCard from "@/components/EquipmentCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  const equipmentData = [
    {
      title: "Hyundai Gold",
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Перевезем бетонные блоки, контейнеры, оборудование. Работаем в труднодоступных местах.",
      specs: [
        "Грузоподъемность 11т", 
        "Стрела 21м", 
        "Борт 10×2.5м"
      ],
      price: "4000₽",
      additionalPrice: "Негабаритная перевозка от 6000₽/час"
    },
    {
      title: "Mitsubishi Fuso",
      image: "https://images.unsplash.com/photo-1512696316933-7a5352ab807d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Идеален для малого бизнеса: доставка стройматериалов, разгрузка фур.",
      specs: [
        "Грузоподъемность 3т", 
        "Стрела 12м"
      ],
      price: "2500₽",
      additionalPrice: "Перевозка от 4000₽"
    },
    {
      title: "Экскаватор-погрузчик",
      image: "https://images.unsplash.com/photo-1603559034515-7ad3871ad228?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Выкопаем септик, расчистим снег, подготовим участок под стройку.",
      specs: [
        "Ковш 1м³", 
        "Глубина 5.5м"
      ],
      price: "3500₽"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Equipment Section */}
        <section id="equipment" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Наша спецтехника</h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Выберите необходимую технику для вашего проекта. Все машины проходят регулярное ТО и готовы к выезду на объект в короткие сроки.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {equipmentData.map((equipment, index) => (
                <EquipmentCard 
                  key={index}
                  {...equipment}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-xl font-bold text-gray-700 mb-6">
                Оставьте заявку сейчас и получите скидку 10% на первый заказ!
              </p>
              <a href="#contact" className="cta-button">
                Заказать со скидкой
              </a>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Отзывы наших клиентов</h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Более 500 компаний и частных клиентов выбирают нас для аренды спецтехники.
            </p>
            
            <div className="px-4 md:px-10">
              <TestimonialCarousel />
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="section-title">Оставить заявку</h2>
              <p className="text-center text-gray-600 mb-10">
                Заполните форму, и мы свяжемся с вами в течение 5 минут для уточнения деталей.
              </p>
              
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
