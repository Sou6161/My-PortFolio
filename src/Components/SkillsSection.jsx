import React from "react";
import { motion, useReducedMotion } from "framer-motion";
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
        when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: {
      opacity: 0,
      y: 24,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const reduceMotion = useReducedMotion();

  const iconVariants = {
    hover: {
      rotate: reduceMotion ? 0 : 180,
      scale: 1.1,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/50 via-transparent to-orange-900/50 animate-gradient" />
        {!reduceMotion && (
          <>
            {/* Aurora blob 1 */}
            <motion.div
              className="absolute -top-24 -left-24 w-[60vw] h-[60vw] rounded-full opacity-35 blur-3xl will-change-transform"
              style={{
                background:
                  "conic-gradient(from 180deg at 50% 50%, rgba(20,184,166,0.55), rgba(249,115,22,0.35), rgba(20,184,166,0.55))",
              }}
              animate={{ x: [0, 40, 0], y: [0, -30, 0], rotate: [0, 25, 0] }}
              transition={{ duration: 28, ease: "easeInOut", repeat: Infinity }}
            />
            {/* Aurora blob 2 */}
            <motion.div
              className="absolute -bottom-24 -right-24 w-[55vw] h-[55vw] rounded-full opacity-30 blur-3xl will-change-transform"
              style={{
                background:
                  "conic-gradient(from 0deg at 50% 50%, rgba(249,115,22,0.45), rgba(20,184,166,0.35), rgba(249,115,22,0.45))",
              }}
              animate={{ x: [0, -35, 0], y: [0, 25, 0], rotate: [0, -20, 0] }}
              transition={{ duration: 32, ease: "easeInOut", repeat: Infinity }}
            />
            {/* Soft vignette */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_60%,rgba(0,0,0,0.5)_100%)]" />
          </>
        )}
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl titillium-web-bold font-bold bg-gradient-to-r from-teal-400 via-orange-500 to-teal-400 text-transparent bg-clip-text animate-gradient">
            Technical Skills
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 titillium-web-bold text-gray-300 text-lg"
          >
            Technologies I work with to bring ideas to life
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid titillium-web-bold grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={skillVariants}
              transition={{ delay: index * 0.12 }}
              whileHover="hover"
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-orange-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-75" />
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative p-6 rounded-xl bg-gray-800/40 border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 will-change-transform"
              >
                <div className="flex flex-col items-center gap-4">
                  <motion.div
                    variants={iconVariants}
                    className="p-4 rounded-full bg-gray-700/50 group-hover:bg-gray-700/70 transition-colors duration-300 will-change-transform"
                  >
                    <skill.icon
                      className="w-12 h-12"
                      style={{ color: skill.color }}
                    />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-200 group-hover:text-teal-400 transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-2xl" />
      </div>
    </section>
  );
};

export default SkillsSection;
