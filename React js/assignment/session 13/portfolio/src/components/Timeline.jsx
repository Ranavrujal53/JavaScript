import React from 'react';
import { GraduationCap, Award, Briefcase, Calendar, CheckCircle2, MapPin } from 'lucide-react';

function Timeline() {
  const milestones = [
    {
      year: '2024 - Present',
      title: 'Full Stack Web Development Intensive',
      institution: 'Tops Technologies, Surat',
      type: 'Education & Training',
      icon: GraduationCap,
      color: 'from-blue-500 to-indigo-500',
      description: 'Mastered Full Stack Web Engineering principles focusing on modern React.js frontend architecture, Python/Django backend APIs, relational database design (MySQL), and responsive UI designs.',
      highlights: [
        'Built full-scale commercial applications (SR Grain Store, Tea Delight)',
        'Implemented Secure JWT Authentication & RESTful API Architecture',
        'Optimized MySQL Relational Schemas & Indexing'
      ]
    },
    {
      year: '2024',
      title: 'Full Stack Project Architecture & Delivery',
      institution: 'Independent Projects Showcase',
      type: 'Commercial Projects',
      icon: Briefcase,
      color: 'from-cyan-500 to-blue-500',
      description: 'Designed and deployed end-to-end web applications with custom state management, responsive Tailwind layouts, and automated inventory / membership modules.',
      highlights: [
        'Developed SR Grain Store Inventory & Billing Platform',
        'Engineered Tea Delight E-Commerce Storefront',
        'Built Gym Management Membership Dashboard'
      ]
    },
    {
      year: '2023 - 2024',
      title: 'Advanced JavaScript & Python Fundamentals',
      institution: 'Self-Driven Mastery & Certification',
      type: 'Skill Acquisition',
      icon: Award,
      color: 'from-purple-500 to-pink-500',
      description: 'Deepened expertise in ES6+ asynchronous JavaScript, DOM manipulation, Python OOP programming, relational SQL database structures, and Git version control workflows.',
      highlights: [
        'Mastered Asynchronous JS, Promises, & Fetch API',
        'Architected Python Object-Oriented Modules',
        'Git & GitHub Collaborative Workflows'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calendar className="w-3.5 h-3.5" /> Career Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">Milestones</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl text-lg font-light">
            A chronological timeline of my technical education, commercial project milestones, and continuous learning journey.
          </p>
        </div>

        {/* Timeline Items Container */}
        <div className="relative border-l-2 border-gray-800/80 ml-4 sm:ml-32 pl-6 sm:pl-10 space-y-12">
          
          {milestones.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="relative group">
                
                {/* Timeline Dot with Icon */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-0 w-10 h-10 rounded-full bg-gradient-to-r ${item.color} p-0.5 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-gray-950 rounded-full flex items-center justify-center text-white">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                {/* Left Floating Year Label (Desktop) */}
                <div className="hidden sm:block absolute -left-36 top-1 text-right text-xs font-mono font-bold text-gray-400 w-24">
                  {item.year}
                </div>

                {/* Timeline Content Card */}
                <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border border-gray-800">
                  
                  {/* Mobile Year Badge */}
                  <div className="sm:hidden inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono font-semibold mb-3">
                    {item.year}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-xs font-medium px-3 py-1 rounded-md bg-gray-800/80 text-gray-300 border border-gray-700/50">
                      {item.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-blue-400 font-medium mb-4">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>{item.institution}</span>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4 border-t border-gray-800/60 text-xs">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
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

export default Timeline;
