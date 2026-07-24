import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll listener to change navbar styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler that accounts for the sticky navbar height
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu after clicking a link
    
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80; // Approximate height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-gray-950/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-white/10 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={(e) => scrollToSection(e, 'home')}
        >
          <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 transition-transform duration-300 group-hover:scale-105">
            Vrujal
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={`#${link.id}`} 
                onClick={(e) => scrollToSection(e, link.id)}
                className="relative group px-1 py-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                {link.name}
                {/* Animated Underline */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
            </li>
          ))}
          <li>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="relative px-6 py-2.5 rounded-full bg-blue-600 text-white overflow-hidden group inline-block transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95"
            >
              <span className="relative z-10">Contact</span>
              {/* Button Shine Effect */}
              <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shine_1s_ease-in-out] skew-x-12 z-0"></span>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative text-gray-300 hover:text-blue-400 focus:outline-none w-6 h-6 flex items-center justify-center transition-colors"
          aria-label="Toggle menu"
        >
          {/* Animated Hamburger/Close Icons */}
          <svg 
            className={`absolute w-6 h-6 transition-all duration-300 transform ${isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} 
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
          <svg 
            className={`absolute w-6 h-6 transition-all duration-300 transform ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} 
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

      </nav>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-gray-950/95 backdrop-blur-xl border-b border-gray-800 transition-all duration-300 origin-top ease-in-out ${
          isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible'
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name} className="w-full text-center">
              <a 
                href={`#${link.id}`} 
                onClick={(e) => scrollToSection(e, link.id)}
                className="hover:text-blue-400 transition-colors duration-300 block py-2"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-2 w-full flex justify-center">
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95 block w-3/4 max-w-[200px] text-center"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;