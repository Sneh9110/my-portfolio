import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const HeroSection = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Skip parallax effect on mobile
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!profileRef.current) return;
      
      // Calculate position for parallax effect
      const x = (window.innerWidth - e.pageX) / 100;
      const y = (window.innerHeight - e.pageY) / 100;
      
      profileRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-4 md:px-16">
      <div className="container mx-auto my-8 md:my-16 pt-20">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          <div 
            ref={profileRef} 
            className="w-full flex justify-center md:justify-start order-1 md:order-1 md:ml-14"> 
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-start to-purple-end opacity-75 blur-xl"></div>
              <div className="absolute inset-2 rounded-full bg-dark-bg flex items-center justify-center overflow-hidden">
                {/* Male cartoon character */}
                <img 
                  src="https://api.dicebear.com/7.x/adventurer/svg?seed=void&backgroundColor=transparent&hair=short01,short02,short03&hairColor=0a0a0a&eyes=variant01&face=variant03&mouth=variant03&skinColor=f2d3b1"
                  alt="Developer Avatar" 
                  className="w-full h-full object-contain scale-125 transform translate-y-2"
                />
              </div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-start to-purple-end opacity-50 blur-md animate-glow"></div>
            </div>
          </div>
          
          <div className="text-center md:text-left order-2 md:order-2 md:ml-[-8]"> 
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-space mb-8 ml-[-7]">
              <span className="inline-block overflow-hidden whitespace-nowrap border-r-4 border-neon-cyan w-0 animate-typewriter">
                Hi, I'm 
                <br>
                </br>
                <span className="text-purple-500">Sneh Brahmbhatt</span>
              </span>
              <span className="animate-blink"></span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10">
              IT Engineer • Innovator • Full Stack Dev • AI Enthusiat • Tech Geek • Data Science
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#projects" className="neon-button">
                <span>View Projects</span>
              </a>
              <a href="#contact" className="neon-button">
                <span>Hire Me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;