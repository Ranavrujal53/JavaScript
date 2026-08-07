import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Code2, Globe } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative z-10 bg-gray-950 border-t border-gray-800/80 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xs">
                VR
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Rana Vrujal
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-light max-w-sm">
              Full Stack Web Developer crafting modern, resilient web applications with React.js, Python Django, and MySQL. Dedicated to clean code and pixel-perfect design.
            </p>
          </div>

          {/* Quick Navigation (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#about" className="hover:text-cyan-400 transition-colors py-1">About</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors py-1">Skills</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors py-1">Projects</a>
              <a href="#craftsmanship" className="hover:text-cyan-400 transition-colors py-1">Code Architecture</a>
              <a href="#experience" className="hover:text-cyan-400 transition-colors py-1">Journey</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors py-1">Contact</a>
            </div>
          </div>

          {/* Social & Connect (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Connect Online
            </h4>
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-xl glass-card border border-gray-800 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl glass-card border border-gray-800 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:vrujal.tech@gmail.com" 
                aria-label="Send Email"
                className="w-10 h-10 rounded-xl glass-card border border-gray-800 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div className="flex items-center gap-1.5">
            <span>© {currentYear} Rana Vrujal. Crafted with React & Tailwind CSS.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-cyan-500/40 transition-all text-xs font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;