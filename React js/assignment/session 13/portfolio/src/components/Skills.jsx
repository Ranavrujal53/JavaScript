import React from 'react';

function Skills() {
  const skills = [
    { 
      name: "React.js", 
      desc: "Component-based UI development and state management",
      category: "Frontend"
    },
    { 
      name: "Tailwind CSS", 
      desc: "Utility-first styling for rapid, responsive design",
      category: "Frontend"
    },
    { 
      name: "JavaScript", 
      desc: "Dynamic DOM manipulation and asynchronous logic (ES6+)",
      category: "Frontend"
    },
    { 
      name: "Python", 
      desc: "Versatile scripting and server-side logic",
      category: "Backend"
    },
    { 
      name: "Django", 
      desc: "Robust backend architecture and API development",
      category: "Backend"
    },
    { 
      name: "MySQL", 
      desc: "Relational database design and query optimization",
      category: "Database"
    },
    { 
      name: "HTML5", 
      desc: "Semantic markup and SEO-friendly structure",
      category: "Frontend"
    },
    { 
      name: "CSS3", 
      desc: "Custom layouts, flexbox, grid, and animations",
      category: "Frontend"
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-950 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Skills</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl text-lg font-light">
            A comprehensive toolkit for building full-stack web applications, from responsive user interfaces to secure backend databases.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-2xl hover:bg-gray-800/80 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/10"
            >
              {/* Subtle top-right accent glow on hover */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-bl-full rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full">
                  {skill.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {skill.name}
              </h3>
              
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;