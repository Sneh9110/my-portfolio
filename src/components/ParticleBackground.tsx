
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      originalX: number;
      originalY: number;
    }> = [];

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    const updateMousePosition = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    // For touch devices
    const updateTouchPosition = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mousePosition.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
      }
    };

    const initParticles = () => {
      particles = [];
      // Adjust particle count based on screen size and device type
      const deviceMultiplier = isMobile ? 0.5 : 1;
      const particleCount = Math.min(Math.floor((width * height / 10000) * deviceMultiplier), 150);
      
      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 2 + 0.5;
        const x = Math.random() * width;
        const y = Math.random() * height;
        
        // Enhanced colors with glow effect
        const colors = [
          'rgba(127, 0, 255, 0.8)',  // Purple start
          'rgba(225, 0, 255, 0.8)',  // Purple end
          'rgba(0, 255, 255, 0.8)',  // Neon cyan
          'rgba(57, 255, 20, 0.8)'   // Neon green
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particles.push({
          x,
          y,
          radius,
          color,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          originalX: x,
          originalY: y
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Add a subtle gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, 'rgba(15, 15, 26, 0.4)');
      gradient.addColorStop(1, 'rgba(20, 20, 35, 0.4)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      // Draw starfield in background
      for (let i = 0; i < 50; i++) {
        const starSize = Math.random() * 1.5;
        const starX = Math.random() * width;
        const starY = Math.random() * height;
        const opacity = Math.random() * 0.8 + 0.2;
        
        ctx.beginPath();
        ctx.arc(starX, starY, starSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      }
      
      particles.forEach(particle => {
        // Move particle
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Boundary check
        if (particle.x < 0 || particle.x > width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > height) particle.speedY *= -1;
        
        // Mouse interaction - reduced effect on mobile
        const dx = mousePosition.current.x - particle.x;
        const dy = mousePosition.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = isMobile ? 80 : 150;
        
        if (distance < interactionRadius) {
          // Move away from mouse/touch point
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (interactionRadius - distance) / interactionRadius;
          
          particle.x -= forceDirectionX * force * 2;
          particle.y -= forceDirectionY * force * 2;
        } else {
          // Gradually return to original position
          particle.x += (particle.originalX - particle.x) * 0.01;
          particle.y += (particle.originalY - particle.y) * 0.01;
        }
        
        // Draw particle with subtle glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Add glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * 2, 0, Math.PI * 2);
        const glowColor = particle.color.replace('0.8', '0.3');
        ctx.fillStyle = glowColor;
        ctx.fill();
      });
      
      // Connect nearby particles with lines - enhanced for 3D effect
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Adjust connection distance based on device
          const connectionDistance = isMobile ? 80 : 120;
          
          if (distance < connectionDistance) {
            // Calculate gradient color based on particle colors
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y, 
              particles[j].x, particles[j].y
            );
            
            gradient.addColorStop(0, particles[i].color.replace('0.8', `${(connectionDistance - distance) / connectionDistance * 0.4}`));
            gradient.addColorStop(1, particles[j].color.replace('0.8', `${(connectionDistance - distance) / connectionDistance * 0.4}`));
            
            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = Math.max(0.1, (connectionDistance - distance) / connectionDistance);
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(drawParticles);
    };

    // Initialize and start animation
    resizeCanvas();
    drawParticles();
    
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('touchmove', updateTouchPosition);
    window.addEventListener('touchstart', updateTouchPosition);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('touchmove', updateTouchPosition);
      window.removeEventListener('touchstart', updateTouchPosition);
    };
  }, [isMobile]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default ParticleBackground;
