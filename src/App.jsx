import React, { useEffect, useState } from "react";
import {
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
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

            {/* Desktop Navigation */}
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

            {/* Mobile Menu Button */}
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

          {/* Mobile Navigation */}
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
      </header>

      {/* Main Content */}
      <main className="pt-16">
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
              <h1 className="text-6xl sm:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-amber-500 to-purple-400 text-transparent bg-clip-text animate-gradient relative z-10">
                Sourabh Saini
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 filter blur-3xl opacity-30 animate-pulse" />
            </div>
            <h2 className="text-2xl sm:text-4xl text-orange-500 font-semibold mb-8">
              Frontend Developer
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300 mb-12">
              <a
                href="mailto:sourabh61saini@gmail.com"
                className="flex items-center gap-2 hover:text-purple-400 transition-colors"
              >
                <Mail className="w-5 h-5" /> sourabh61saini@gmail.com
              </a>
              <span className="hidden sm:block">•</span>
              <a
                href="tel:+918810591149"
                className="flex items-center gap-2 hover:text-purple-400 transition-colors"
              >
                +91-8810591149
              </a>
            </div>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/sourabhsaini6161"
                className="transform hover:scale-110 transition-transform hover:text-purple-400"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="#"
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
        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent" />
          <div className="max-w-6xl mx-auto relative">
            <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-white text-transparent bg-clip-text text-center">
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
                      <h3 className="text-3xl font-bold mb-4 text-purple-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
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
        <section
          id="skills"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30 backdrop-blur-sm relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-pink-900/50 to-purple-900/50 animate-gradient" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)] animate-pulse" />
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-white to-white text-transparent bg-clip-text text-center">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 transform hover:scale-105 hover:border-purple-500/50 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-center text-gray-200">
                    {skill}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Education & Certificates Combined Section */}
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                Education
              </h2>
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Bachelor of Science</h3>
                <p className="text-xl text-purple-300 mb-2">Biotechnology</p>
                <p className="text-gray-300 mb-2">
                  Mangalmay Institute of Engineering and Technology
                </p>
                <p className="text-gray-300">Greater Noida</p>
                <p className="text-gray-400 mt-4">Aug 2018 – Sep 2021</p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                Certificates
              </h2>
              <div className="space-y-6">
                {certificates.map((cert, index) => (
                  <div
                    key={index}
                    className="p-8 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold mb-4 text-purple-300">
                      {cert.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{cert.description}</p>
                    <a
                      href={cert.link}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      View Certificate <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30 backdrop-blur-sm"
        >
          <div className="max-w-4xl mx-auto text-center">
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
                href="https://github.com/sourabhsaini6161"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-md border-t border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-4">
                Sourabh.dev
              </h3>
              <p className="text-gray-400">
                Frontend Developer specializing in building exceptional digital
                experiences.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#education"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Education
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Delhi, India</li>
                <li>
                  <a
                    href="mailto:sourabh61saini@gmail.com"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    sourabh61saini@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+918810591149"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    +91-8810591149
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Sourabh Saini. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const projects = [
  {
    title: "CineOut",
    description:
      "A responsive movie browsing website with clean layouts for desktop and mobile. Features optimized search functionality with quick and accurate movie results, including posters and brief information. Built with React Router for seamless navigation.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    liveLink: "#",
    githubLink: "#",
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
    liveLink: "#",
    githubLink: "#",
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
    liveLink: "#",
    githubLink: "#",
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
    liveLink: "#",
    githubLink: "#",
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
