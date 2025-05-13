
import React, { useEffect } from 'react';

// Sample photography images (replace with your actual images)
const photos = [
  {
    id: 1,
    url: '/assets/beach.jpg',
    title: 'Ethereal'
  },
  {
    id: 2,
    url: '/assets/flora.jpg',
    title: 'Flora'
  },
  {
    id: 3,
    url: '/assets/night.jpg',
    title: 'Astro'
  },
  {
    id: 4,
    url: '/assets/purple.jpg',
    title: 'Purple Hue'
  },
  {
    id: 5,
    url: '/assets/sky.jpg',
    title: 'High'
  },
  {
    id: 6,
    url: '/assets/vintage.jpg',
    title: 'Vintage'
  }
];

const PhotographySection = () => {
  useEffect(() => {
    // Apply random floating animation to photo cards
    const photoCards = document.querySelectorAll('.photo-card');
    
    photoCards.forEach(card => {
      const htmlCard = card as HTMLElement;
      
      // Random starting position and animation duration
      const startX = Math.random() * 20 - 10; // -10px to 10px
      const startY = Math.random() * 20 - 10; // -10px to 10px
      const duration = 3 + Math.random() * 5; // 3s to 8s
      
      htmlCard.style.animation = `float ${duration}s ease-in-out infinite`;
      htmlCard.style.transform = `translate(${startX}px, ${startY}px)`;
    });
  }, []);

  return (
    <section id="photography" className="min-h-screen flex flex-col justify-center px-4 md:px-16">
      <div className="container mx-auto py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">Through My Lens 📸</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="photo-card overflow-hidden h-64 md:h-80"
            >
              <div className="relative w-full h-full group cursor-pointer">
                <img 
                  src={photo.url} 
                  alt={photo.title} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <h3 className="text-white text-lg font-semibold">
                    {photo.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotographySection;
