import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

const EducationSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Define certificates data
  const certificates = [
    {
      title: "Meta JavaScript Certification",
      description:
        "I've achieved the Meta JavaScript Certification, mastering JavaScript fundamentals, advanced concepts, and ecosystem tools. I've gained expertise in building scalable, efficient, and high-performance JavaScript applications.",
      link: "https://drive.google.com/file/d/1DIKPD-ICa1hJ6iQx38Wna7LsC0Ry8WZD/view",
    },
    {
      title: "Meta Advanced React Certification",
      description:
        "Achieved advanced proficiency in React, mastering state management, hooks, and optimization techniques to design and develop high-performance, maintainable, and scalable React applications.",
      link: "https://drive.google.com/file/d/1DLr7BYZzPxbwkq8UmwviE6Gl9y3l3LZB/view",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const gradientTextClass =
    "font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text bg-size-200 animate-gradient";

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Education Column */}
        <motion.div variants={itemVariants}>
          <motion.h2
            className={`text-5xl ${gradientTextClass} mb-12`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Education
          </motion.h2>

          <motion.div
            className="relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-gray-900 backdrop-blur-xl border border-gray-700/50 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
              <motion.h3
                className="text-2xl font-bold mb-4 text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                Bachelor of Science
              </motion.h3>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <p className="text-xl text-purple-300 mb-2">Biotechnology</p>
                <p className="text-gray-300 mb-2">
                  Mangalmay Institute of Engineering and Technology
                </p>
                <p className="text-gray-300">Greater Noida</p>
                <p className="text-gray-400 mt-4">Aug 2018 – Sep 2021</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Certificates Column */}
        <motion.div variants={itemVariants}>
          <motion.h2
            className={`text-5xl ${gradientTextClass} mb-12`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Certificates
          </motion.h2>

          <motion.div className="space-y-6" variants={containerVariants}>
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-gray-900 backdrop-blur-xl border border-gray-700/50 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 text-purple-300">
                    {cert.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{cert.description}</p>
                  <motion.a
                    href={cert.link}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Certificate <ExternalLink className="ml-2 w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
