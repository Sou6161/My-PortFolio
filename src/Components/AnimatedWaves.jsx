// import { useState, useEffect } from 'react';

// const AnimatedWaves = () => {
//   const [offset, setOffset] = useState(0);
  
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setOffset(prevOffset => (prevOffset + 1) % 1000);
//     }, 50);
    
//     return () => clearInterval(interval);
//   }, []);
  
//   return (
//     <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-30">
//       {/* First wave */}
//       <svg 
//         className="absolute inset-0 w-full h-full"
//         preserveAspectRatio="none"
//         viewBox="0 0 1440 800"
//       >
//         <defs>
//           <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#9333ea" stopOpacity="0.4" />
//             <stop offset="50%" stopColor="#e11d48" stopOpacity="0.3" />
//             <stop offset="100%" stopColor="#9333ea" stopOpacity="0.4" />
//           </linearGradient>
//         </defs>
//         <path
//           fill="url(#wave-gradient-1)"
//           d={`M 0 200 C 400 150 700 350 1440 200 L 1440 800 L 0 800 Z`}
//           transform={`translate(-${offset * 0.3}, 0)`}
//         >
//           <animate
//             attributeName="d"
//             values="M 0 200 C 400 150 700 350 1440 200 L 1440 800 L 0 800 Z;
//                     M 0 250 C 300 200 700 250 1440 250 L 1440 800 L 0 800 Z;
//                     M 0 200 C 400 150 700 350 1440 200 L 1440 800 L 0 800 Z"
//             dur="15s"
//             repeatCount="indefinite"
//           />
//         </path>
//       </svg>
      
//       {/* Second wave */}
//       <svg 
//         className="absolute inset-0 w-full h-full"
//         preserveAspectRatio="none"
//         viewBox="0 0 1440 800"
//       >
//         <defs>
//           <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#7e22ce" stopOpacity="0.2" />
//             <stop offset="50%" stopColor="#f97316" stopOpacity="0.3" />
//             <stop offset="100%" stopColor="#7e22ce" stopOpacity="0.2" />
//           </linearGradient>
//         </defs>
//         <path
//           fill="url(#wave-gradient-2)"
//           d={`M 0 300 C 300 250 700 400 1440 300 L 1440 800 L 0 800 Z`}
//           transform={`translate(-${offset * 0.5}, 0)`}
//         >
//           <animate
//             attributeName="d"
//             values="M 0 300 C 300 250 700 400 1440 300 L 1440 800 L 0 800 Z;
//                     M 0 350 C 400 300 600 300 1440 350 L 1440 800 L 0 800 Z;
//                     M 0 300 C 300 250 700 400 1440 300 L 1440 800 L 0 800 Z"
//             dur="20s"
//             repeatCount="indefinite"
//           />
//         </path>
//       </svg>
      
//       {/* Third wave */}
//       <svg 
//         className="absolute inset-0 w-full h-full"
//         preserveAspectRatio="none"
//         viewBox="0 0 1440 800"
//       >
//         <defs>
//           <linearGradient id="wave-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#6d28d9" stopOpacity="0.3" />
//             <stop offset="50%" stopColor="#db2777" stopOpacity="0.2" />
//             <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.3" />
//           </linearGradient>
//         </defs>
//         <path
//           fill="url(#wave-gradient-3)"
//           d={`M 0 400 C 500 350 800 450 1440 400 L 1440 800 L 0 800 Z`}
//           transform={`translate(-${offset * 0.7}, 0)`}
//         >
//           <animate
//             attributeName="d"
//             values="M 0 400 C 500 350 800 450 1440 400 L 1440 800 L 0 800 Z;
//                     M 0 450 C 300 400 900 400 1440 450 L 1440 800 L 0 800 Z;
//                     M 0 400 C 500 350 800 450 1440 400 L 1440 800 L 0 800 Z"
//             dur="25s"
//             repeatCount="indefinite"
//           />
//         </path>
//       </svg>
//     </div>
//   );
// };

// export default AnimatedWaves;