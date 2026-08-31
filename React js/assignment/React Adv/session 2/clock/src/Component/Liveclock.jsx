import React from "react";
import useCurrentTime from "../Custom_hook/useCurrentTime";

function Liveclock() {
  const currentTime = useCurrentTime();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      {/* Outer ambient glow wrapper */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse" />
        
        {/* Main Glassmorphism Card */}
        <div className="relative px-8 py-10 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl flex flex-col items-center justify-center min-w-[320px] sm:min-w-[400px]">
          
          {/* Header Badge */}
          <div className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/50">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
              Live Clock
            </span>
          </div>

          {/* Time Display */}
          <h1 className="text-5xl sm:text-6xl font-mono font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 drop-shadow-[0_0_25px_rgba(56,189,248,0.3)]">
            {currentTime.toLocaleTimeString()}
          </h1>

          {/* Date Subtitle */}
          <p className="mt-4 text-sm sm:text-base font-medium text-slate-400 tracking-wide">
            {currentTime.toLocaleDateString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>

        </div>
      </div>
    </div>
  );
}

export default Liveclock;