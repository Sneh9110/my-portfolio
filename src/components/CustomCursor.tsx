
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Don't implement custom cursor on mobile devices
    if (isMobile) return;
    
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    if (!cursor || !cursorDot) return;
    
    const onMouseMove = (e: MouseEvent) => {
      // Update cursor position immediately to avoid lag
      const { clientX, clientY } = e;
      
      // Set the outer ring with slight delay for trail effect
      requestAnimationFrame(() => {
        if (cursor) {
          cursor.style.left = `${clientX}px`;
          cursor.style.top = `${clientY}px`;
        }
      });
      
      // Set the inner dot to follow cursor exactly
      if (cursorDot) {
        cursorDot.style.left = `${clientX}px`;
        cursorDot.style.top = `${clientY}px`;
      }
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.closest('button') || 
          target.closest('a')) {
        cursor.classList.add('cursor-hover');
        cursorDot.classList.add('cursor-dot-hover');
      } else {
        cursor.classList.remove('cursor-hover');
        cursorDot.classList.remove('cursor-dot-hover');
      }
    };
    
    document.addEventListener('mousemove', onMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, [isMobile]);
  
  // Don't render cursor on mobile
  if (isMobile) return null;
  
  return (
    <>
      <div 
        ref={cursorRef}
        className="custom-cursor fixed pointer-events-none z-[999]" 
      />
      <div
        ref={cursorDotRef}
        className="cursor-dot fixed pointer-events-none z-[999]"
      />
    </>
  );
};

export default CustomCursor;
