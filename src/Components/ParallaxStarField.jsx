import { useEffect, useState } from 'react';

const ParallaxStarField = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    // Create stars with random positions
    const generateStars = () => {
      const newStars = [];
      const layers = 3;
      const starsPerLayer = 150;
      
      for (let layer = 1; layer <= layers; layer++) {
        for (let i = 0; i < starsPerLayer; i++) {
          newStars.push({
            x: Math.random() * 100, // % position
            y: Math.random() * 100, // % position
            size: Math.random() * 2 + (layer === 1 ? 1 : 0.5), // Size based on layer
            opacity: Math.random() * 0.5 + 0.3,
            layer: layer, // Layer determines parallax intensity
            color: [
              '#9c27b0', // Purple
              '#e91e63', // Pink
              '#d500f9', // Purple accent
              '#ff9800', // Orange
              '#ffffff'  // White
            ][Math.floor(Math.random() * 5)]
          });
        }
      }
      
      setStars(newStars);
    };
    
    generateStars();
    
    // Track mouse movement for parallax effect
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900" />
      
      {/* Stars */}
      {stars.map((star, index) => {
        // Calculate parallax movement based on mouse position and star's layer
        const parallaxFactor = star.layer * 15;
        const xShift = mousePosition.x * parallaxFactor;
        const yShift = mousePosition.y * parallaxFactor;
        
        return (
          <div
            key={index}
            className="absolute rounded-full animate-twinkle"
            style={{
              left: `calc(${star.x}% + ${xShift}px)`,
              top: `calc(${star.y}% + ${yShift}px)`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              opacity: star.opacity,
              boxShadow: `0 0 ${star.size * 3}px ${star.color}`,
              transition: 'transform 0.1s ease-out',
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        );
      })}
      
      {/* Add some nebula-like elements */}
      <div 
        className="absolute w-2/3 h-2/3 rounded-full filter blur-3xl opacity-10 animate-pulse-slow" 
        style={{
          background: 'radial-gradient(circle, rgba(147,51,234,0.4) 0%, rgba(147,51,234,0) 70%)',
          top: '20%',
          left: '30%',
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      <div 
        className="absolute w-1/2 h-1/2 rounded-full filter blur-3xl opacity-10 animate-pulse-slow animation-delay-2000" 
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.4) 0%, rgba(236,72,153,0) 70%)',
          top: '40%',
          left: '60%',
          transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
    </div>
  );
};

export default ParallaxStarField;