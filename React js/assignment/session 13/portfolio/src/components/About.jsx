import React, { useState } from 'react';
import { User, Cpu, ShieldCheck, MapPin, Target, Sparkles, CheckCircle2, Award } from 'lucide-react';

function About() {
  const [activeTab, setActiveTab] = useState('philosophy');

  const technicalBadges = [
    { name: "React.js 19", level: "Advanced" },
    { name: "Tailwind CSS v4", level: "Advanced" },
    { name: "JavaScript ES6+", level: "Expert" },
    { name: "Python 3", level: "Advanced" },
    { name: "Django REST", level: "Proficient" },
    { name: "MySQL", level: "Proficient" },
    { name: "HTML5 & CSS3", level: "Expert" }
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <User className="w-3.5 h-3.5" /> Engineer Profile
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Text & Interactive Bio Tabs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tab Selection */}
            <div className="flex items-center gap-2 bg-gray-900/80 p-1.5 rounded-xl border border-gray-800 backdrop-blur-md">
              <button
                onClick={() => setActiveTab('philosophy')}
                className={`flex-1 py-2 px-4 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'philosophy'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <Target className="w-3.5 h-3.5" />
                <span>My Approach</span>
              </button>
              
              <button
                onClick={() => setActiveTab('background')}
                className={`flex-1 py-2 px-4 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'background'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Full Stack Focus</span>
              </button>
            </div>

            {/* Tab Content Display */}
            <div className="glass-card rounded-2xl p-8 border border-gray-800/80 leading-relaxed text-gray-300 font-light space-y-4">
              {activeTab === 'philosophy' ? (
                <>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                    Clean Architecture & Pixel Perfection
                  </h3>
                  <p>
                    Hello! I am <span className="text-cyan-400 font-semibold">Rana Vrujal</span>, a results-driven Full Stack Web Developer based in Surat, Gujarat. I specialize in turning complex software requirements into intuitive, elegant, and lightning-fast digital products.
                  </p>
                  <p>
                    My core engineering philosophy centers around writing **modular, maintainable code** and designing fluid user experiences. I don't just build interfaces; I architect full end-to-end systems that bridge seamless React frontends with resilient Python/Django backend APIs.
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-indigo-400" />
                    End-to-End Product Engineering
                  </h3>
                  <p>
                    Trained in modern full-stack web development at **Tops Technologies**, I bring hands-on experience in building commercial-grade management tools, e-commerce storefronts, and database-driven dynamic dashboards.
                  </p>
                  <p>
                    From designing relational database schemas in MySQL to engineering responsive, glassmorphic UI components in Tailwind CSS, I ensure every layer of the tech stack works in perfect harmony.
                  </p>
                </>
              )}

              {/* Key Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-gray-800/80 text-sm font-medium text-gray-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Responsive UI/UX Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>REST API & Backend Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Database Normalization & Querying</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Agile Version Control (Git/GitHub)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Info Box & Technical Arsenal (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-gray-800/80 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                Technical Stack Stack
              </h3>
              
              <div className="flex flex-wrap gap-2.5 mb-8">
                {technicalBadges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-gray-900/90 border border-gray-800 text-xs font-medium text-gray-200 flex items-center gap-2 hover:border-cyan-400/50 hover:text-cyan-300 transition-all cursor-default"
                  >
                    <span>{badge.name}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  </div>
                ))}
              </div>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-800/80 text-xs">
                <div>
                  <span className="block text-gray-500 uppercase tracking-wider font-semibold mb-1">Based In</span>
                  <span className="text-gray-200 font-bold text-sm flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 inline" /> Surat, Gujarat
                  </span>
                </div>
                <div>
                  <span className="block text-gray-500 uppercase tracking-wider font-semibold mb-1">Status</span>
                  <span className="text-emerald-400 font-bold text-sm">Open to Offers</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;