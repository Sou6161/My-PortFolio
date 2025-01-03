import React, { useState, useEffect } from 'react';
import { ArrowUpCircle, Github, Linkedin, Mail } from 'lucide-react';

const Portfolio = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    { id: 1, title: 'Recipe App', description: 'A React-based recipe management application', image: '/api/placeholder/300/200' },
    { id: 2, title: 'Weather Dashboard', description: 'Real-time weather tracking application', image: '/api/placeholder/300/200' },
    { id: 3, title: 'Task Manager', description: 'Full-stack task management solution', image: '/api/placeholder/300/200' },
    { id: 4, title: 'Portfolio Site', description: 'Personal portfolio website template', image: '/api/placeholder/300/200' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className={`fixed w-full backdrop-blur-md bg-white/70 shadow-lg transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="space-x-6">
            <button onClick={() => scrollToSection('home')} className="text-indigo-600 hover:text-indigo-800 transition-colors">Home</button>
            <button onClick={() => scrollToSection('projects')} className="text-indigo-600 hover:text-indigo-800 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-indigo-600 hover:text-indigo-800 transition-colors">Contact</button>
          </div>
          <div className="space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition-colors">
              <Github className="w-6 h-6 inline" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition-colors">
              <Linkedin className="w-6 h-6 inline" />
            </a>
          </div>
        </nav>
      </header>

      {/* Landing Section */}
      <section id="home" className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-50"></div>
            <img src="/api/placeholder/150/150" alt="Avatar" className="relative rounded-full w-32 h-32 mb-6 border-4 border-white shadow-xl" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">FrontEnd Developer</h1>
          <p className="text-lg text-gray-700 max-w-2xl text-center leading-relaxed">
            Full-stack developer passionate about creating intuitive and efficient web applications.
            Specializing in React, Node.js, and modern web technologies.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map(project => (
              <div key={project.id} className="group bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-indigo-700">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Contact Me</h2>
          <form className="space-y-6 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <div>
              <label className="block text-sm font-medium text-indigo-700 mb-1">Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-indigo-700 mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-indigo-700 mb-1">Message</label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white/50"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Scroll to top button */}
      <button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-110"
      >
        <ArrowUpCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Portfolio;