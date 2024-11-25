// HeroSection.js
function HeroSection() {
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

  let currentSlide = 0;

  function updateSlide() {
    const slideElements = document.querySelectorAll('.hero-slide');
    slideElements.forEach((el, index) => {
      el.style.opacity = index === currentSlide ? '1' : '0';
    });
    currentSlide = (currentSlide + 1) % slides.length;
  }

  function renderHero() {
    return `
      <div class="relative h-screen">
        ${slides.map((slide, index) => `
          <div class="hero-slide absolute inset-0 transition-opacity duration-1000 ${index === 0 ? 'opacity-100' : 'opacity-0'}">
            <div class="absolute inset-0 bg-black/40"></div>
            <img 
              src="${slide.image}" 
              alt="${slide.title}" 
              class="object-cover w-full h-full"
            />
          </div>
        `).join('')}
        
        <div class="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 class="text-6xl font-bold mb-6 text-center">${slides[currentSlide].title}</h1>
          <p class="text-2xl mb-8 text-center max-w-2xl">${slides[currentSlide].subtitle}</p>
          <button class="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Découvrir la Collection
          </button>
        </div>
      </div>
    `;
  }

  // Initial render
  document.getElementById('hero-section').innerHTML = renderHero();

  // Start automatic sliding
  setInterval(updateSlide, 5000);
}

// Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', HeroSection);
