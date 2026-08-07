import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, Sparkles, X, CheckCircle2, Server, Database, LayoutGrid, Eye } from 'lucide-react';

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 'sr-grain-store',
      title: "SR Grain Store Platform",
      category: "Full Stack",
      shortDesc: "Comprehensive wholesale grain trading & inventory management system with real-time stock ledger.",
      fullDesc: "SR Grain Store is an enterprise-grade platform built for grain traders and inventory managers. It automates order processing, stock level alerts, customer ledger balancing, and dynamic PDF invoice generation. Built with Django REST framework and React.",
      tech: ["React.js", "Django REST", "MySQL", "Tailwind CSS"],
      metrics: "Sub-100ms Query Time • 100% Billing Accuracy",
      features: [
        "Real-time Inventory Ledger & Automatic Reorder Alerts",
        "Role-based Access Control (Admin, Dealer, Staff)",
        "Customer Ledger Analytics & PDF Invoicing Engine",
        "REST API Architecture with JWT Authentication"
      ],
      backendDetails: "Django ORM with select_related optimization and MySQL Foreign Key constraints.",
      github: "https://github.com",
      live: "https://example.com",
      bgGradient: "from-blue-600/40 via-cyan-600/20 to-indigo-900/60"
    },
    {
      id: 'tea-delight',
      title: "Tea Delight E-Commerce",
      category: "E-Commerce",
      shortDesc: "Luxury online tea storefront featuring interactive cart state management and product filtering.",
      fullDesc: "Tea Delight delivers an ultra-smooth online shopping experience for artisanal tea connoisseurs. Features include category filtering by blend strength, live cart drawer calculations, guest checkout, and responsive design.",
      tech: ["React.js", "Tailwind CSS", "JavaScript ES6+", "HTML5"],
      metrics: "Mobile First • Fast 60FPS Animations",
      features: [
        "Dynamic Blend Filtering & Real-time Search",
        "Persistent LocalStorage Shopping Cart State",
        "Glassmorphism UI with Seamless Micro-interactions",
        "Fully Mobile Responsive Layout"
      ],
      backendDetails: "Stateful React Context API with custom hooks for cart management.",
      github: "https://github.com",
      live: "https://example.com",
      bgGradient: "from-emerald-600/40 via-teal-600/20 to-cyan-900/60"
    },
    {
      id: 'gym-management',
      title: "Gym Matrix Management Dashboard",
      category: "SaaS / Management",
      shortDesc: "Automated fitness center portal for membership billing, attendance tracking, and trainer scheduling.",
      fullDesc: "Gym Matrix provides gym owners with a single dashboard to manage member subscriptions, track workout logs, automate renewal reminders, and process payment records efficiently.",
      tech: ["Python", "Django", "MySQL", "Bootstrap / CSS3"],
      metrics: "Scalable Schema • Automated Member Tracking",
      features: [
        "Member Subscription Management & Expiry Alerts",
        "Trainer & Class Schedule Allocation Engine",
        "Relational MySQL Member Records & Payment History",
        "Dashboard Analytics & Monthly Financial Reports"
      ],
      backendDetails: "Relational MySQL tables with indexed fields for member lookups.",
      github: "https://github.com",
      live: "https://example.com",
      bgGradient: "from-purple-600/40 via-indigo-600/20 to-slate-900/60"
    }
  ];

  const categories = ['All', 'Full Stack', 'E-Commerce', 'SaaS / Management'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <FolderGit2 className="w-3.5 h-3.5" /> Commercial Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl text-lg font-light">
            Real-world full-stack web applications engineered with clean code, scalable database architecture, and responsive user interfaces.
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

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group glass-card glass-card-hover rounded-2xl overflow-hidden border border-gray-800/80 flex flex-col justify-between"
            >
              <div>
                {/* Visual Banner Header */}
                <div className={`h-48 w-full bg-gradient-to-br ${project.bgGradient} relative p-6 flex flex-col justify-between overflow-hidden border-b border-gray-800/60`}>
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300 bg-gray-950/80 px-3 py-1 rounded-full border border-cyan-500/30 backdrop-blur-md">
                      {project.category}
                    </span>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-2 rounded-xl bg-gray-950/80 text-gray-300 hover:text-white hover:bg-gray-900 border border-gray-800 transition-all text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md"
                    >
                      <Eye className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Details</span>
                    </button>
                  </div>

                  <div className="z-10">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Subtle Background Glow */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>

                {/* Card Content Body */}
                <div className="p-6">
                  <p className="text-gray-300 text-xs leading-relaxed mb-4 font-light">
                    {project.shortDesc}
                  </p>

                  <div className="text-[11px] font-mono text-cyan-400 mb-4 bg-blue-950/40 p-2 rounded-lg border border-blue-500/20">
                    ⚡ {project.metrics}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-gray-900 text-gray-300 text-[11px] font-medium border border-gray-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-gray-800/60 flex items-center gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-200 text-xs font-semibold border border-gray-800 transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Inspect Architecture</span>
                </button>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-all flex items-center justify-center"
                  aria-label="View Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="glass-card rounded-2xl border border-gray-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title & Category */}
            <div className="mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-500/30">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                {selectedProject.title}
              </h3>
            </div>

            {/* Full Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
              {selectedProject.fullDesc}
            </p>

            {/* Key Features Checklist */}
            <div className="mb-6 bg-gray-900/60 p-4 rounded-xl border border-gray-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                Key Platform Features
              </h4>
              <div className="space-y-2">
                {selectedProject.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Architecture Specs */}
            <div className="mb-8 bg-gray-900/40 p-4 rounded-xl border border-gray-800/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-cyan-400" />
                Backend & Database Architecture
              </h4>
              <p className="text-xs text-gray-300 font-mono">
                {selectedProject.backendDetails}
              </p>
            </div>

            {/* Modal Footer Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-gray-800">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex-1 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-semibold text-xs border border-gray-800 transition-all text-center flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white font-semibold text-xs shadow-lg shadow-blue-500/25 transition-all text-center flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live Preview</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

export default Projects;