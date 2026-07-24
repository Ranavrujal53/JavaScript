import React from 'react';

function Projects() {
  const projects = [
    {
      title: "SR Grain Store",
      description: "A comprehensive trading and inventory management platform. Features include real-time stock tracking, seamless order processing, and a secure backend architecture.",
      tech: ["React.js", "Django", "MySQL"],
      link: "#",
      github: "#",
      // Placeholder gradient for project image
      gradient: "from-blue-600 to-indigo-900" 
    },
    {
      title: "Tea Delight",
      description: "An elegant, interactive e-commerce interface for a premium tea brand. Includes a dynamic product catalog, shopping cart functionality, and responsive design.",
      tech: ["React.js", "Tailwind CSS", "JavaScript"],
      link: "#",
      github: "#",
      gradient: "from-emerald-600 to-teal-900"
    },
    {
      title: "Gym Management",
      description: "A robust dashboard system designed for fitness centers to manage member subscriptions, track attendance records, and process billing efficiently.",
      tech: ["Python", "Django", "MySQL"],
      link: "#",
      github: "#",
      gradient: "from-slate-700 to-gray-900"
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl text-lg font-light">
            A selection of my recent work, showcasing full-stack capabilities, database design, and responsive user interfaces.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group flex flex-col bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-blue-500/20"
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
                {/* Subtle overlay effect on hover */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                <svg className="w-12 h-12 text-white/50 group-hover:text-white/80 transition-colors duration-300 transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-100 mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2.5 py-1 bg-gray-900 border border-gray-700 text-gray-300 text-xs font-medium rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-800">
                  <a 
                    href={project.github} 
                    className="flex-1 text-center py-2 text-sm font-medium text-gray-300 hover:text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors duration-300 border border-gray-800"
                  >
                    Code
                  </a>
                  <a 
                    href={project.link} 
                    className="flex-1 text-center py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors duration-300 shadow-md hover:shadow-blue-500/25"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;