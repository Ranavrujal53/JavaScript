import React from "react";

function ProjectCard(props) {
  return (
    <div className="group relative w-80 overflow-hidden rounded-3xl bg-neutral-950 border border-neutral-900 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_8px_30px_rgb(59,130,246,0.2)]">
      
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
        <img
          src={props.image}
          alt={props.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent z-20" />
      </div>

      <div className="relative z-30 -mt-6 p-6">
        <h2 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
          {props.title}
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-neutral-400">
          {props.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {props.technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-lg bg-neutral-900 px-3 py-1 text-xs font-medium text-blue-300 transition-colors duration-300 hover:bg-blue-900/30 hover:text-blue-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] active:scale-95"
        >
          View Project
          <svg
            className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;