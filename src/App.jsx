import React, { useEffect, useState } from "react";
import {
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  ChevronDown,
  Menu,
  X,
  Code,
  Palette,
  Zap,
  Monitor,
} from "lucide-react";
import SkillsSection from "./Components/SkillsSection";
import EducationSection from "./Components/EducationSection";
import { Globe, Laptop, Sparkles } from "lucide-react";
import CustomCursor from "./Components/CustomCursor";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Add intersection observer for about section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAboutVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    // Enhanced smooth scrolling logic
    const handleLinkClick = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");

      if (href.startsWith("#")) {
        const targetSection = document.querySelector(href);

        if (targetSection) {
          // Calculate header height
          const header = document.querySelector("header");
          const headerHeight = header ? header.offsetHeight : 0;

          // Get the target's position relative to the viewport
          const targetPosition = targetSection.getBoundingClientRect().top;

          // Calculate the final scroll position
          const offsetPosition =
            targetPosition + window.pageYOffset - headerHeight;

          // Smooth scroll to target
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          // Close mobile menu if open
          setIsMenuOpen(false);
        }
      }
    };

    // Add click event listeners to all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    // Cleanup function
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Background Blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        {/* Gradient Overlay */}
        <div className="fixed inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80 pointer-events-none" />
        {/* Header */}
        {/* <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
            >
              Sourabh.dev
            </a>
          </div>

          Desktop Navigation
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#education"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Education
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-purple-500 hover:bg-purple-600 transition-colors"
            >
              Contact
            </a>
          </div>

          Mobile Menu Button
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        Mobile Navigation
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#about"
                className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors"
              >
                Skills
              </a>
              <a
                href="#education"
                className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors"
              >
                Education
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header> */}

        {/* Main Content */}
        <main className="">
          {" "}
          {/* Added padding-top to account for fixed header */}
          {/* Hero Section */}
          <section
            id="about"
            className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)] animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent animate-gradient" />
            </div>
            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full filter blur-3xl animate-blob-spin" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/30 rounded-full filter blur-3xl animate-blob" />
            </div>
            {/* Hero Content */}
            <div
              className={`max-w-4xl mx-auto text-center relative transition-all duration-1000 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative inline-block">
                <h1 className="text-6xl ubuntu-medium sm:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-amber-500 to-purple-400 text-transparent bg-clip-text animate-gradient relative z-10">
                  Sourabh Saini
                </h1>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 filter blur-3xl opacity-30 animate-pulse" />
              </div>
              <h2 className="text-2xl ubuntu-medium sm:text-4xl text-orange-500 font-semibold mb-8">
                Frontend Developer
              </h2>
              <div className="flex justify-center space-x-6">
                <a
                  href="mailto:sourabh61saini@gmail.com"
                  className="transform hover:scale-110 transition-transform hover:text-purple-400"
                >
                  <Mail className="w-8 h-8" />
                </a>
                <a
                  href="https://github.com/Sou6161"
                  className="transform hover:scale-110 transition-transform hover:text-purple-400"
                >
                  <Github className="w-8 h-8" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sourabhsaini6161/"
                  className="transform hover:scale-110 transition-transform hover:text-purple-400"
                >
                  <Linkedin className="w-8 h-8" />
                </a>
              </div>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-8 h-8" />
            </div>
          </section>
          {/* Enhanced About Section */}
          <section
            id="about"
            className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
          >
            {/* Animated background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/30 rounded-full filter blur-3xl animate-blob" />
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/30 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
            </div>

            <div className="max-w-6xl mx-auto relative">
              <div
                className={`transform transition-all duration-1000 ${
                  isAboutVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <h2 className="text-7xl titillium-web-bold font-bold mb-16 text-center">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 text-transparent bg-clip-text">
                    About Me
                  </span>
                </h2>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Left Column - Main Content */}
                  <div className="space-y-8">
                    <div
                      className={`transform transition-all duration-1000 delay-300 ${
                        isAboutVisible
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-10 opacity-0"
                      }`}
                    >
                      <p className="text-2xl outfit-about font-light leading-relaxed text-gray-300 mb-6">
                        <span className="text-3xl font-semibold text-purple-400">
                          Hello!
                        </span>{" "}
                        I'm{" "}
                        <span className="font-semibold text-orange-400">
                          Sourabh Saini
                        </span>
                        , a passionate Frontend Developer crafting digital
                        experiences in Delhi, India.
                      </p>
                      <p className="text-xl leading-relaxed text-gray-300 mb-6 animate-fade-in">
                        I transform ideas into responsive, interactive web
                        applications that combine
                        <span className="text-purple-400 font-semibold">
                          {" "}
                          elegant design
                        </span>{" "}
                        with
                        <span className="text-pink-400 font-semibold">
                          {" "}
                          technical excellence
                        </span>
                        .
                      </p>
                      <p className="text-xl leading-relaxed text-gray-300 animate-fade-in">
                        My journey in web development is driven by a constant
                        desire to learn and create
                        <span className="text-orange-400 font-semibold">
                          {" "}
                          innovative solutions
                        </span>{" "}
                        that make a difference.
                      </p>
                    </div>

                    {/* Tech Stack Preview */}
                    <div
                      className={`mt-12 transform transition-all duration-1000 delay-500 ${
                        isAboutVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                    >
                      <h3 className="text-2xl outfit-about font-semibold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                        Tech Stack
                      </h3>
                      <div className="flex outfit-about flex-wrap gap-4">
                        {[
                          "React",
                          "JavaScript",
                          "Tailwind CSS",
                          "GSAP",
                          "Framer-Motion",
                          "Redux",
                        ].map((tech, index) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-gray-300 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Focus Areas */}
                  <div
                    className={`space-y-6 transform transition-all duration-1000 delay-700 ${
                      isAboutVisible
                        ? "translate-x-0 opacity-100"
                        : "translate-x-10 opacity-0"
                    }`}
                  >
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        {
                          icon: <Code className="w-8 h-8" />,
                          title: "Clean Code",
                          desc: "Writing maintainable, efficient code",
                        },
                        {
                          icon: <Palette className="w-8 h-8" />,
                          title: "Creative Design",
                          desc: "Crafting beautiful user interfaces",
                        },
                        {
                          icon: <Zap className="w-8 h-8" />,
                          title: "Performance",
                          desc: "Optimizing for speed and efficiency",
                        },
                        {
                          icon: <Monitor className="w-8 h-8" />,
                          title: "Responsive",
                          desc: "Seamless on all devices",
                        },
                      ].map((item, index) => (
                        <div
                          key={item.title}
                          className="group bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105"
                          style={{ animationDelay: `${index * 200}ms` }}
                        >
                          <div className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                            {item.icon}
                          </div>
                          <h3 className="text-xl font-semibold mt-4 mb-2 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center mt-8">
                      <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1s9Bm12xzz5WcNmOj5d6a6lTeAbXi8lIQ/view?usp=drive_link"
                        className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <span className="relative flex items-center space-x-2 text-white font-semibold">
                          <span>Download Resume</span>
                          <ExternalLink className="w-5 h-5 animate-bounce" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Projects Section */}
          <section
            id="projects"
            className="py-20 px-4 sm:px-6 lg:px-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent" />
            <div className="max-w-6xl mx-auto relative">
              <h2 className="text-4xl titillium-web-bold font-bold mb-16 bg-gradient-to-r from-purple-400 to-white text-transparent bg-clip-text text-center">
                Featured Projects
              </h2>
              <div className="grid grid-cols-1 gap-16">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 shadow-lg shadow-violet-700/30 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500"
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <h3 className="text-3xl exo-2-FeaturedProjects font-bold mb-4 text-purple-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 outfit-about mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 bg-purple-500/20 rounded-full text-sm text-purple-300 hover:bg-purple-500/30 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-6">
                          <a
                            href={project.liveLink}
                            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                          >
                            Live Demo <ExternalLink className="ml-2 w-4 h-4" />
                          </a>
                          <a
                            href={project.githubLink}
                            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                          >
                            <Github className="mr-2 w-4 h-4" /> View Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Skills Section */}
          <SkillsSection />
          {/* Education & Certificates Combined Section */}
          <EducationSection />
          {/* Contact Section */}
          <section
            id="contact"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30 backdrop-blur-sm"
          >
            <div className="max-w-4xl titillium-web-bold mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                Let's Connect
              </h2>
              <p className="text-gray-300 mb-12 text-lg">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <a
                  href="mailto:sourabh61saini@gmail.com"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-purple-500 hover:bg-purple-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
                <a
                  href="https://github.com/Sou6161"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/sourabhsaini6161/"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900/80 backdrop-blur-md border-t border-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          {/* Floating Animation Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="animate-float absolute top-1/4 left-1/4">
              <Code size={32} className="text-purple-400" />
            </div>
            <div className="animate-float-delayed absolute top-1/3 right-1/4">
              <Globe size={32} className="text-pink-400" />
            </div>
            <div className="animate-float-slow absolute bottom-1/4 left-1/3">
              <Laptop size={32} className="text-blue-400" />
            </div>
            <div className="animate-float-slower absolute bottom-1/3 right-1/3">
              <Sparkles size={32} className="text-green-400" />
            </div>
          </div>

          <div className="max-w-7xl outfit-about mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
            <div className="flex items-center justify-center min-h-[200px] relative px-4">
              {/* Main content */}
              <div className="max-w-2xl w-full relative text-center">
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                  "Code that speaks to the heart, Design that touches the soul
                  from the start, Pixels that bring it all to life's art."
                </p>

                {/* Animated decorative elements */}
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 animate-spin-slow">
                  <div className="w-8 h-8 rounded-full border-t-2 border-r-2 border-purple-500" />
                </div>
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 animate-spin-slow">
                  <div className="w-8 h-8 rounded-full border-t-2 border-l-2 border-purple-500" />
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
              {/* <p className="relative inline-block">
      © {new Date().getFullYear()} Sourabh Saini. All rights reserved.
      <span className="absolute -right-6 -top-6 animate-bounce">
        <Sparkles size={16} className="text-purple-400" />
      </span>
    </p> */}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

const projects = [
  {
    title: "CineOut",
    description:
      "A responsive movie browsing website with clean layouts for desktop and mobile. Features optimized search functionality with quick and accurate movie results, including posters and brief information. Built with React Router for seamless navigation.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    liveLink: "https://cineout.vercel.app/",
    githubLink: "https://github.com/Sou6161/cineout",
    technologies: [
      "ReactJS",
      "JavaScript (ES6)",
      "Tailwind CSS",
      "React-Redux",
      "External API",
    ],
  },
  {
    title: "CoinFam",
    description:
      "A real-time cryptocurrency tracking platform utilizing the CoinGecko API. Features live price updates, market trends, and comprehensive crypto information. Built with a sleek, intuitive user interface that ensures seamless performance across all devices.",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    liveLink: "https://coin-fam.vercel.app/",
    githubLink: "https://github.com/Sou6161/CoinFam",
    technologies: [
      "ReactJS",
      "JavaScript (ES6)",
      "Tailwind CSS",
      "React-Redux",
      "CoinGecko API",
    ],
  },
  {
    title: "FoldXperience",
    description:
      "A reimagined Samsung Galaxy Z Fold6 website showcasing the device through immersive animations. Implemented GSAP for fluid transitions and Lenis for smooth scrolling effects, creating an engaging user experience that highlights the product's features.",
    image:
      "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    liveLink: "https://z-fold6-showcase.vercel.app/",
    githubLink: "https://github.com/Sou6161/Z-Fold6-ShowCase",
    technologies: [
      "ReactJS",
      "JavaScript (ES6)",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
      "Lenis",
    ],
  },
  {
    title: "TactiShift",
    description:
      "An innovative Tic-Tac-Toe game developed for the Appwrite Hackathon, featuring a unique shifting mechanic. Implemented multiplayer functionality and dynamic win-detection algorithms for shifting board positions, showcasing advanced problem-solving skills.",
    image:
      "https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    liveLink: "https://shift-tic-tac-toe.vercel.app/",
    githubLink: "https://github.com/Sou6161/shift-tic-tac-toe",
    technologies: [
      "ReactJS",
      "JavaScript (ES6)",
      "Socket IO",
      "Tailwind CSS",
      "Framer Motion",
      "Lenis",
    ],
  },
];

const skills = [
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "JavaScript",
  "ReactJS",
  "React-Redux",
  "GSAP",
  "Framer Motion",
  "Lenis",
];

const certificates = [
  {
    title: "Meta JavaScript Certificate",
    description:
      "Demonstrated proficiency in core JavaScript concepts, DOM manipulation, and modern ES6+ features",
    link: "#",
  },
  {
    title: "Meta Advanced React Certificate",
    description:
      "Mastered component development, hooks, state management, and building interactive websites",
    link: "#",
  },
];

export default App;
