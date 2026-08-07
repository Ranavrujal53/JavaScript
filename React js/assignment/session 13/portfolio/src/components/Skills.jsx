import React, { useState } from 'react';
import { Wrench, Code2, Server, Database, Sparkles, CheckCircle2, Layers } from 'lucide-react';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const skillsData = [
    { 
      name: "React.js", 
      desc: "Component lifecycle, Hooks, state management, Virtual DOM, and SPA routing.",
      category: "Frontend",
      proficiency: 92,
      icon: Code2,
      color: "from-cyan-500 to-blue-500"
    },
    { 
      name: "Tailwind CSS", 
      desc: "Utility-first responsive layouts, custom design systems, and glassmorphism.",
      category: "Frontend",
      proficiency: 90,
      icon: Layers,
      color: "from-blue-500 to-indigo-500"
    },
    { 
      name: "JavaScript (ES6+)", 
      desc: "Async/Await, Fetch API, Closures, Modules, Event Loop, and DOM manipulation.",
      category: "Frontend",
      proficiency: 90,
      icon: Code2,
      color: "from-amber-400 to-orange-500"
    },
    { 
      name: "Python 3", 
      desc: "Object-oriented programming, data structures, automation, and backend logic.",
      category: "Backend",
      proficiency: 85,
      icon: Server,
      color: "from-blue-600 to-cyan-500"
    },
    { 
      name: "Django & REST", 
      desc: "MTV architecture, ViewSets, JWT authentication, ORM queries, and API endpoints.",
      category: "Backend",
      proficiency: 82,
      icon: Server,
      color: "from-emerald-500 to-teal-600"
    },
    { 
      name: "MySQL", 
      desc: "Relational schema design, JOINs, indexing, foreign keys, and query optimization.",
      category: "Database",
      proficiency: 85,
      icon: Database,
      color: "from-cyan-600 to-blue-700"
    },
    { 
      name: "HTML5", 
      desc: "Semantic structure, web accessibility (a11y), forms, and SEO optimization.",
      category: "Frontend",
      proficiency: 95,
      icon: Layers,
      color: "from-orange-500 to-amber-500"
    },
    { 
      name: "CSS3 & Flex/Grid", 
      desc: "Complex grid layouts, flexbox alignment, keyframe animations, and variables.",
      category: "Frontend",
      proficiency: 92,
      icon: Layers,
      color: "from-blue-400 to-indigo-500"
    },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database'];

  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Wrench className="w-3.5 h-3.5" /> Technical Competencies
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            My Skill <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Matrix</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl text-lg font-light">
            A comprehensive breakdown of technologies I use to build robust full-stack applications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                  : 'glass-card text-gray-400 hover:text-white hover:bg-gray-800/80 border border-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={index}
                className="group glass-card glass-card-hover border border-gray-800/80 p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between"
              >
                {/* Top Corner Glow */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/10 rounded-bl-full rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-gray-400 text-xs leading-relaxed mb-6 font-light">
                    {skill.desc}
                  </p>
                </div>

                {/* Proficiency Meter */}
                <div className="pt-4 border-t border-gray-800/60">
                  <div className="flex items-center justify-between text-xs mb-1.5 font-mono">
                    <span className="text-gray-500">Proficiency</span>
                    <span className="text-cyan-400 font-bold">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Skills;