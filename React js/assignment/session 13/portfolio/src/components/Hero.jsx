import React, { useState, useEffect } from 'react';
import { Download, ArrowRight, Mail, Sparkles, CheckCircle, Code, Server, Database } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import resumeFile from '../assets/Vrujal_CV.pdf';

function Hero() {
  const roles = [
    "Full Stack Web Developer",
    "React 19 & Frontend Specialist",
    "Python & Django API Architect",
    "Database & UI/UX Craftsman"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(50);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(100);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden z-10">
      
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-950/60 border border-blue-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-8 backdrop-blur-md shadow-lg shadow-blue-950/50 hover:border-cyan-400/50 transition-colors animate-float">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
          </span>
          <span>Available for New Projects & Developer Roles</span>
        </div>

        {/* Profile Avatar Container with Glowing Orb */}
        <div className="relative mb-8 group cursor-pointer">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 rounded-full blur-md opacity-75 group-hover:opacity-100 group-hover:scale-105 transition duration-500 animate-pulse-glow"></div>
          
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80" 
            alt="Rana Vrujal Profile Avatar"
            className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-gray-950 shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />

          {/* Floating Dev Badges */}
          <div className="absolute -bottom-2 -right-2 bg-gray-900 border border-gray-800 p-2.5 rounded-2xl shadow-xl text-cyan-400 flex items-center gap-1 group-hover:rotate-6 transition-transform">
            <Code className="w-4 h-4" />
            <span className="text-[11px] font-mono font-bold text-gray-200">React</span>
          </div>
          <div className="absolute -top-1 -left-2 bg-gray-900 border border-gray-800 p-2 rounded-2xl shadow-xl text-blue-400 flex items-center gap-1 group-hover:-rotate-6 transition-transform">
            <Server className="w-4 h-4" />
            <span className="text-[11px] font-mono font-bold text-gray-200">Django</span>
          </div>
        </div>

        {/* Name Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none mb-4 text-white">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 hover:brightness-125 transition-all">
            Rana Vrujal
          </span>
        </h1>

        {/* Dynamic Typewriter Role */}
        <div className="h-12 flex items-center justify-center mb-6">
          <span className="text-xl sm:text-2xl md:text-3xl font-mono text-cyan-300 font-medium">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        {/* Bio Subtitle */}
        <p className="text-gray-300 max-w-2xl text-base sm:text-lg md:text-xl font-light leading-relaxed mb-10">
          Crafting high-performance, modern full-stack web applications with <span className="text-cyan-400 font-medium">React 19</span>, <span className="text-blue-400 font-medium">Tailwind CSS</span>, <span className="text-indigo-400 font-medium">Python Django</span>, and <span className="text-purple-400 font-medium">MySQL</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-16">
          
          <a
            href={resumeFile}
            download="Rana_Vrujal_Resume.pdf"
            className="group w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white font-semibold hover:opacity-95 transition-all duration-300 shadow-xl shadow-blue-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center gap-2.5"
          >
            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            <span>Download CV</span>
          </a>

          <a
            href="#projects"
            className="group w-full sm:w-auto px-8 py-4 rounded-xl glass-card border border-gray-800 text-gray-200 font-semibold hover:bg-gray-800/80 hover:text-white hover:border-gray-700 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center gap-2.5"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-cyan-400" />
          </a>

        </div>

        {/* Quick Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl pt-8 border-t border-gray-800/80">
          <div className="glass-card p-4 rounded-2xl border border-gray-800/60 flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-mono">
              3+
            </span>
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">Full Stack Apps</span>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-gray-800/60 flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-mono">
              100%
            </span>
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">Clean Architecture</span>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-gray-800/60 flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-mono">
              7+
            </span>
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">Core Tech Stack</span>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-gray-800/60 flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-mono">
              Surat
            </span>
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">Base Location</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Hero;