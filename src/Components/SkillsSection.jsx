import React from "react";
import { motion } from "framer-motion";

const SkillsSection = () => {
    const skills = [
        {
          name: "HTML5",
          icon: <svg viewBox="0 0 24 24" className="w-12 h-12">
            <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity }} stroke="#E34F26" strokeWidth="1.5" fill="none" d="M5.08 0h1.12v1.11h1.02V0h1.12v3.36H7.22V2.24H6.2v1.12H5.08V0zm4.71 1.12h-0.99V0h3.1v1.12h-0.99v2.24H9.79V1.12zM12.76 0h1.17l0.72 1.17L15.36 0h1.17v3.36h-1.12V1.69l-0.77 1.19h-0.02l-0.77-1.19v1.67h-1.09V0zm4.3 0h1.12v2.24h1.58v1.12h-2.7V0z"/>
            <motion.path initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} fill="#E34F26" d="M5 5l1.4 15.7L12 22l5.6-1.3L19 5H5zm2.7 3.2h6.6l-0.2 2.3H8.9l0.2 2.2h4.8l-0.3 2.8L12 16.2l-1.6-0.4-0.1-1.5H8.6l0.2 2.9 3.2 1 3.2-1 0.4-4.4H8.2L8 9.3h8l0.2-2.2H7.7V8.2z"/>
          </svg>
        },
        {
          name: "CSS3",
          icon: <svg viewBox="0 0 24 24" className="w-12 h-12">
            <motion.path initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} fill="#1572B6" d="M5 5l1.4 15.7L12 22l5.6-1.3L19 5H5zm11.3 3.4H8.9l0.2 2.2h7l-0.2 2.3h-4.8l0.2 2.2h4.3l-0.3 2.8L12 16.2l-1.6-0.4-0.1-1.5H8.6l0.2 2.9 3.2 1 3.2-1 0.4-4.4h-6.7l-0.2-2.2h7l0.2-2.3z"/>
            <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity }} stroke="#1572B6" strokeWidth="1.5" fill="none" d="M7 3h2v1h-1v1h1v1H7V3zm3 0h2v1h-1v1h1v1h-2V3zm3 0h2v1h1v2h-1v1h-2V3z"/>
          </svg>
        },
        {
          name: "JavaScript",
          icon: <svg viewBox="0 0 24 24" className="w-12 h-12">
            <motion.rect initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} fill="#F7DF1E" x="2" y="2" width="20" height="20"/>
            <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }} stroke="#000" strokeWidth="1.5" fill="none" d="M7 7v10c0 0.6 0.4 1 1 1s1-0.4 1-1v-4m4 0c0.6 0 1 0.4 1 1v3c0 0.6-0.4 1-1 1s-1-0.4-1-1v-3c0-0.6 0.4-1 1-1z"/>
          </svg>
        },
        {
          name: "ReactJS",
          icon: <svg viewBox="0 0 24 24" className="w-12 h-12">
            <motion.g animate={{ rotate: 360, scale: [1, 1.1, 1] }} transition={{ rotate: { duration: 10, repeat: Infinity }, scale: { duration: 2, repeat: Infinity }}}>
              <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
              {[0, 60, -60].map((rotation) => (
                <motion.ellipse key={rotation} cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform={`rotate(${rotation} 12 12)`}/>
              ))}
            </motion.g>
          </svg>
        },
        {
          name: "Redux",
          icon: <svg viewBox="0 0 24 24" className="w-12 h-12">
            <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity }} stroke="#764ABC" strokeWidth="1.5" fill="none" d="M12 7c4.4 0 8 1.8 8 4s-3.6 4-8 4-8-1.8-8-4 3.6-4 8-4z"/>
            <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity }} stroke="#764ABC" strokeWidth="1.5" fill="none" d="M4 11c0 2.2 3.6 4 8 4s8-1.8 8-4"/>
            <motion.circle cx="12" cy="11" r="2" fill="#764ABC" initial={{ scale: 0 }} animate={{ scale: 1 }}/>
          </svg>
        },
        {
          name: "Tailwind",
          icon: <svg viewBox="0 0 24 24" className="w-12 h-12">
            {[0, 6].map((offset) => (
              <motion.path key={offset} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity }} stroke="#38B2AC" strokeWidth="1.5" fill="none" d={`M12 ${6 + offset}c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5 0.76 0.19 1.31 0.74 1.91 1.35 0.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-0.76-0.19-1.31-0.74-1.91-1.35C15.61 ${7.15 + offset} 14.5 ${6 + offset} 12 ${6 + offset}z`}/>
            ))}
          </svg>
        },
        {
          name: "GSAP",
          icon: <svg viewBox="0 0 24 24" className="w-12 h-12">
            <motion.circle cx="12" cy="12" r="8" stroke="#88CE02" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity }}/>
            <motion.path d="M12 8v8M8 12h8" stroke="#88CE02" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, repeat: Infinity }} fill="none"/>
          </svg>
        },
        {
          name: "Framer Motion",
          icon: <svg viewBox="0 0 24 24" className="w-12 h-12">
            <motion.rect x="4" y="4" width="8" height="8" fill="#FF0055" animate={{ x: [4, 12, 4], y: [4, 12, 4] }} transition={{ duration: 2, repeat: Infinity }}/>
            <motion.rect x="12" y="4" width="8" height="8" fill="#FF0055" animate={{ opacity: [1, 0.5, 1], scale: [1, 0.8, 1] }} transition={{ duration: 2, repeat: Infinity }}/>
          </svg>
        }
      ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const skillVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/50 via-transparent to-pink-900/50 animate-gradient" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] animate-pulse" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 text-transparent bg-clip-text animate-gradient">
            Technical Skills
          </h2>
          <p className="mt-4 text-gray-300 text-lg">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={skillVariants}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-75" />
              <div className="relative p-6 rounded-xl bg-gray-800/40 border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 rounded-full bg-gray-700/50 group-hover:bg-gray-700/70 transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-200 group-hover:text-purple-400 transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>

                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/20 group-hover:via-pink-500/20 group-hover:to-purple-500/20 transition-all duration-500" />

                {/* Animated dots decoration */}
                <div className="absolute -bottom-1 -right-1 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute w-2 h-2 rounded-full bg-purple-400"
                  />
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      delay: 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute w-2 h-2 rounded-full bg-pink-400 top-4 right-4"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse" />
      </div>
    </section>
  );
};

// CSS Animations
const styles = `
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.8; }
}

.animate-gradient {
  animation: gradient 15s ease infinite;
  background-size: 400% 400%;
}

.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
`;

// Add the styles to the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default SkillsSection;
