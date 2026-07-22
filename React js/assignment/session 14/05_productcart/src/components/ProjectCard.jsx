import React from "react";

function ProjectCard(props) {
  return (
    <div className="group relative w-80 overflow-hidden rounded-2xl bg-slate-950 p-0.5 border border-blue-900/50 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] backdrop-blur-xl">
      <div className="relative overflow-hidden rounded-t-[14px]">
        <img
          src={props.image}
          alt={props.title}
          className="h-48 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
      </div>

      <div className="p-6">
        <h2 className="bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent transition-all duration-300 group-hover:from-cyan-300 group-hover:to-blue-500">
          {props.title}
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {props.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {props.technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-full bg-cyan-950/60 border border-cyan-800/50 px-3 py-1 text-xs font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-900/80 hover:shadow-[0_0_12px_rgba(6,182,212,0.4)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn relative mt-6 flex w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 p-[1.5px] font-semibold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] active:scale-95"
        >
          <span className="flex w-full items-center justify-center rounded-[10px] bg-slate-950 px-5 py-2.5 text-sm font-semibold transition-all duration-300 group-hover/btn:bg-transparent">
            View Project
            <svg
              className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;