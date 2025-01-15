import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiGreensock,
  SiFramer,
} from "react-icons/si";

const SkillsSection = () => {
  const skills = [
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "ReactJS", icon: SiReact, color: "#61DAFB" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
    { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
    { name: "Framer", icon: SiFramer, color: "#FF0055" },
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

  const iconVariants = {
    hover: {
      rotate: 360,
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-transparent to-pink-900/50 animate-gradient" />
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 text-transparent bg-clip-text animate-gradient">
            Technical Skills
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-gray-300 text-lg"
          >
            Technologies I work with to bring ideas to life
          </motion.p>
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
              whileHover="hover"
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-75" />
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative p-6 rounded-xl bg-gray-800/40 border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-4">
                  <motion.div
                    variants={iconVariants}
                    whileHover={{ scale: 1.05, rotate: 360 }} // Add the whileHover property here
                    className="p-4 rounded-full bg-gray-700/50 group-hover:bg-gray-700/70 transition-colors duration-300"
                  >
                    <skill.icon
                      className="w-12 h-12"
                      style={{ color: skill.color }}
                    />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-200 group-hover:text-purple-400 transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            delay: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full filter blur-3xl"
        />
      </div>
    </section>
  );
};

export default SkillsSection;
