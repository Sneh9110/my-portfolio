import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface PageTransitionProps {
  children: React.ReactNode;
  transitionType?: 'default' | 'cyberpunk';
}

const PageTransition: React.FC<PageTransitionProps> = ({ 
  children,
  transitionType = 'cyberpunk'
}) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    // Show loading state
    setIsLoading(true);
    
    // Hide loading state after a delay
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Scroll to top when transition completes
      window.scrollTo(0, 0);
    }, 600);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {isLoading && (
        <div className="page-loading">
          <div className="page-loading-indicator"></div>
        </div>
      )}
      
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          timeout={600}
          classNames={transitionType}
          unmountOnExit
        >
          <div className="page-transition-wrapper">
            {children}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default PageTransition;