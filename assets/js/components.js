// components/HeroSection.js
import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Configuration des slides
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
      title: "Collection Exclusive",
      subtitle: "Des produits uniques sélectionnés pour vous"
    },
    {
      image: "https://images.unsplash.com/photo-1465487862947-ded619a2a9e4",
      title: "Qualité Premium",
      subtitle: "Le luxe accessible à tous"
    },
    {
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
      title: "Livraison Express",
      subtitle: "Recevez vos produits en 7-14 jours"
    }
  ];

  // Gestion du défilement automatique
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="object-cover w-full h-full"
          />
        </div>
      ))}

      {/* Contenu */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-6xl font-bold mb-6 text-center">
          {slides[currentSlide].title}
        </h1>
        <p className="text-2xl mb-8 text-center max-w-2xl">
          {slides[currentSlide].subtitle}
        </p>
        <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
          Découvrir la Collection
        </button>

        {/* Badges de confiance */}
        <div className="absolute bottom-12 w-full max-w-4xl mx-auto grid grid-cols-3 gap-8 px-4">
          <div className="flex flex-col items-center text-center">
            <svg className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <span className="font-semibold">Garantie 30 Jours</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <svg className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-semibold">Livraison Express</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <svg className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <span className="font-semibold">Service Premium</span>
          </div>
        </div>
      </div>

      {/* Indicateurs de slide */}
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






export function createHeader() {
    return `
    <header class="bg-black text-white py-8 text-center">
        <div class="container mx-auto px-4">
            <h1 class="text-5xl font-bold tracking-wide font-serif">LUXIBRE</h1>
            <p class="text-xl mt-3 opacity-80">Liberté & Luxe - Une Sélection Exclusive</p>
        </div>
    </header>`;
}

export function createNavigation() {
    return `
    <nav class="bg-gray-100 py-4 shadow-md">
        <div class="container mx-auto px-4 flex justify-between items-center">
            <div class="flex space-x-6">
                <a href="../index.html" class="text-black hover:text-gray-700 font-semibold">Accueil</a>
                <a href="../pages/products.html" class="text-black hover:text-gray-700 font-semibold">Produits</a>
                <a href="../pages/about.html" class="text-black hover:text-gray-700 font-semibold">À Propos</a>
                <a href="../pages/contact.html" class="text-black hover:text-gray-700 font-semibold">Contact</a>
            </div>
            <div x-data="{ cartOpen: false }" class="relative">
                <button @click="cartOpen = !cartOpen" class="text-black hover:text-gray-700">
                    🛒 Panier (<span x-text="cart.items.length">0</span>)
                </button>
            </div>
        </div>
    </nav>`;
}

export function createFooter() {
    return `
    <footer class="bg-black text-white py-12">
        <div class="container mx-auto px-4 grid md:grid-cols-3 gap-8">
            <div>
                <h4 class="text-xl font-semibold mb-4">LUXIBRE</h4>
                <p class="text-gray-300">Découvrez l'élégance à portée de main. Des produits de luxe sélectionnés avec passion.</p>
            </div>
            <div>
                <h4 class="text-xl font-semibold mb-4">Liens Rapides</h4>
                <ul>
                    <li><a href="../index.html" class="text-gray-300 hover:text-white">Accueil</a></li>
                    <li><a href="../pages/products.html" class="text-gray-300 hover:text-white">Produits</a></li>
                    <li><a href="../pages/about.html" class="text-gray-300 hover:text-white">À Propos</a></li>
                    <li><a href="../pages/contact.html" class="text-gray-300 hover:text-white">Contact</a></li>
                </ul>
            </div>
            <div>
                <h4 class="text-xl font-semibold mb-4">Contactez-nous</h4>
                <p class="text-gray-300">Email: contact@luxibre.com</p>
                <p class="text-gray-300">Téléphone: +33 1 23 45 67 89</p>
                <div class="mt-4 flex space-x-4">
                    <a href="#" class="text-gray-300 hover:text-white">Instagram</a>
                    <a href="#" class="text-gray-300 hover:text-white">Facebook</a>
                    <a href="#" class="text-gray-300 hover:text-white">Twitter</a>
                </div>
            </div>
        </div>
        <div class="text-center mt-8 border-t border-gray-800 pt-4">
            <p>© 2024 LUXIBRE. Tous droits réservés.</p>
        </div>
    </footer>`;
}
