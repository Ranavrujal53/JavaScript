import React from 'react';

function About() {
  const skills = [
    "HTML5", "CSS3", "JavaScript", "React.js", 
    "Python", "Django", "MySQL"
  ];

  return (
    <section id="about" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 rounded-full"></div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Section */}
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
            <p>
              Hello! I am <span className="text-blue-400 font-semibold">Rana Vrujal</span>, a dedicated Full Stack Web Developer based in Surat, Gujarat. I specialize in building robust, scalable, and visually engaging web applications from the ground up.
            </p>
            <p>
              With a strong foundation in both front-end aesthetics and back-end architecture, I enjoy bridging the gap between design and engineering. Whether it's crafting responsive user interfaces or designing efficient database schemas, my goal is to write clean code and deliver seamless digital experiences.
            </p>
          </div>

          {/* Skills & Info Card */}
          <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-gray-100 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Technical Arsenal
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-gray-950 border border-blue-500/30 text-blue-300 rounded-lg text-sm font-medium hover:border-blue-400 hover:text-blue-200 hover:-translate-y-0.5 transition-all duration-300 shadow-sm cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            {/* Quick Facts */}
            <div className="mt-8 pt-6 border-t border-gray-800/80 grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="block text-gray-500 mb-1 uppercase tracking-wider text-xs font-semibold">Location</span>
                <span className="text-gray-300 font-medium">Surat, Gujarat</span>
              </div>
              <div>
                <span className="block text-gray-500 mb-1 uppercase tracking-wider text-xs font-semibold">Focus</span>
                <span className="text-gray-300 font-medium">Full Stack Development</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;