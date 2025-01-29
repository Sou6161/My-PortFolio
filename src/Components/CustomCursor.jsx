import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Sparkles } from 'lucide-react';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.body.classList.add('cursor-none');
    const elements = document.querySelectorAll('a, button, input, select, textarea');
    elements.forEach(el => el.classList.add('cursor-none'));

    let lastTimestamp = 0;
    const handleMouseMove = (e) => {
      const currentTimestamp = Date.now();
      const timeDelta = currentTimestamp - lastTimestamp;
      
      if (timeDelta > 0) {
        const newVelocity = {
          x: (e.clientX - lastPos.x) / timeDelta,
          y: (e.clientY - lastPos.y) / timeDelta
        };
        setVelocity(newVelocity);
        setLastPos({ x: e.clientX, y: e.clientY });
        lastTimestamp = currentTimestamp;
      }
      
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.body.classList.remove('cursor-none');
      elements.forEach(el => el.classList.remove('cursor-none'));
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [lastPos]);

  const speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);
  const angle = Math.atan2(velocity.y, velocity.x);

  return (
    <>
      {/* Main cursor with icon */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full mix-blend-difference pointer-events-none z-50"
        animate={{
          x: mousePos.x - 12,
          y: mousePos.y - 12,
          rotate: angle * (180 / Math.PI),
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 400,
          mass: 0.2,
        }}
      >
        <MousePointer2 className="w-4 h-4 text-white" />
      </motion.div>

      {/* Magnetic field effect */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border-2 border-white/30 rounded-full mix-blend-difference pointer-events-none z-40"
        animate={{
          x: mousePos.x - 24,
          y: mousePos.y - 24,
          scale: isClicking ? 0.5 : isHovering ? 2 : 1 + speed * 2,
          rotate: angle * (180 / Math.PI),
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 200,
        }}
      />

      {/* Dynamic particles based on movement */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 pointer-events-none z-30"
          animate={{
            x: mousePos.x - 8,
            y: mousePos.y - 8,
            opacity: speed > 0.2 ? 0.6 - i * 0.2 : 0,
          }}
          transition={{
            delay: i * 0.05,
            duration: 0.5,
          }}
        >
          <Sparkles 
            className="text-white w-4 h-4" 
            style={{
              transform: `translate(${Math.cos(angle + i * Math.PI/4) * (20 + i * 10)}px, ${Math.sin(angle + i * Math.PI/4) * (20 + i * 10)}px)`,
            }}
          />
        </motion.div>
      ))}

      {/* Reactive glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-full blur-2xl pointer-events-none z-20"
        animate={{
          x: mousePos.x - 48,
          y: mousePos.y - 48,
          scale: isClicking ? 1.5 : isHovering ? 2 : 1 + speed * 3,
          opacity: 0.6 + speed * 0.4,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      {/* Interactive ripple effect on click */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 w-16 h-16 border-2 border-white rounded-full mix-blend-difference pointer-events-none z-10"
          initial={{ scale: 0.5, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ x: mousePos.x - 32, y: mousePos.y - 32 }}
        />
      )}
    </>
  );
};

export default CustomCursor;