import React, { useState, useEffect } from 'react';

const ScrollToTopButton = ({ scrollThreshold = 300, buttonSize = '45px', arrowFontSize = '24px' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      
      window.scrollY > scrollThreshold ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);
    
    toggleVisibility(); 

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [scrollThreshold]); 

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: '1000',
        display: isVisible ? 'flex' : 'none', 
        backgroundColor: '#007bff', 
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: buttonSize,
        height: buttonSize,
        fontSize: arrowFontSize,
        cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)', // Slightly stronger shadow
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.3s ease-in-out', // Smooth fade in/out
        opacity: isVisible ? 1 : 0, // Control opacity for fade effect
        pointerEvents: isVisible ? 'auto' : 'none', // Disable clicks when hidden
      }}
      aria-label="Scroll to top"
      title="Scroll to top" // Add a tooltip
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;