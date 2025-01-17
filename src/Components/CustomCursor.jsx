import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mouseenter', () => setIsHovering(true));
    window.addEventListener('mouseleave', () => setIsHovering(false));
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mouseenter', () => setIsHovering(true));
      window.removeEventListener('mouseleave', () => setIsHovering(false));
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <style>
        {`
          body { cursor: none; }
          a, button { cursor: none; }
          
          @keyframes pulse {
            0% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.2); opacity: 0.8; }
            100% { transform: scale(1); opacity: 0.5; }
          }
          
          .cursor-pulse {
            animation: pulse 2s infinite;
          }
        `}
      </style>
      
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mix-blend-difference pointer-events-none z-[9999]"
        animate={{
          x: mousePos.x - 6,
          y: mousePos.y - 6,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 400,
          mass: 0.3,
        }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full mix-blend-difference pointer-events-none z-[9998] backdrop-blur-sm"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: isClicking ? 1.2 : isHovering ? 2 : 1,
          borderWidth: isHovering ? '2px' : '1px',
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          mass: 0.5,
        }}
      />

      {/* Trailing effects */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 rounded-full mix-blend-difference pointer-events-none opacity-30 z-[9997]"
          style={{
            background: `rgba(255, 255, 255, ${0.8 - i * 0.15})`,
            width: `${4 + i * 2}px`,
            height: `${4 + i * 2}px`,
          }}
          animate={{
            x: mousePos.x - (2 + i),
            y: mousePos.y - (2 + i),
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{
            type: "spring",
            damping: 20 + i * 5,
            stiffness: 200 - i * 20,
            mass: 0.2 + i * 0.1,
            delay: i * 0.02,
          }}
        />
      ))}

      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 bg-gradient-to-r from-violet-500/70 to-fuchsia-500/70 rounded-full blur-xl pointer-events-none z-[9996]"
        animate={{
          x: mousePos.x - 32,
          y: mousePos.y - 32,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 250,
          mass: 0.4,
        }}
      />
    </>
  );
};

export default CustomCursor;