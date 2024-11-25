import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Shield, Truck } from 'lucide-react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/api/placeholder/1920/1080",
      title: "Collection Exclusive",
      subtitle: "Des produits uniques sélectionnés pour vous"
    },
    {
      image: "/api/placeholder/1920/1080",
      title: "Qualité Premium",
      subtitle: "Le luxe accessible à tous"
    },
    {
      image: "/api/placeholder/1920/1080",
      title: "Livraison Express",
      subtitle: "Recevez vos produits en 7-14 jours"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen">
      {/* Hero Slider */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-6xl font-bold mb-6 text-center">
          {slides[currentSlide].title}
        </h1>
        <p className="text-2xl mb-8 text-center max-w-2xl">
          {slides[currentSlide].subtitle}
        </p>
        <button className="bg-white text-black px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors">
          Découvrir la Collection
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Trust Badges */}
        <div className="absolute bottom-12 w-full max-w-4xl mx-auto grid grid-cols-3 gap-8 px-4">
          <div className="flex flex-col items-center text-center">
            <Shield className="w-8 h-8 mb-2" />
            <span className="font-semibold">Garantie 30 Jours</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Truck className="w-8 h-8 mb-2" />
            <span className="font-semibold">Livraison Express</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Star className="w-8 h-8 mb-2" />
            <span className="font-semibold">Service Premium</span>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
