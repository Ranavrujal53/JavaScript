import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4 font-sans antialiased">
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-blue-900/50 bg-black p-8 text-center shadow-[0_0_50px_-10px_rgba(37,99,235,0.3)] sm:p-12">
        {/* Subtle ambient glowing background aura */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl"></div>

        {/* Music icon badge */}
        <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-800/40 bg-blue-950/40 shadow-inner backdrop-blur-md">
          <span className="text-3xl" role="img" aria-label="music note">
            🎵
          </span>
        </div>

        {/* Title */}
        <h1 className="relative z-10 text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-400 sm:text-5xl">
          Playlist Manager
        </h1>

        {/* Description */}
        <p className="relative z-10 mx-auto mt-4 max-w-md text-base leading-relaxed text-blue-200/60">
          Create, organize, and manage your favorite track collections seamlessly with React & Redux Toolkit.
        </p>

        {/* Action Buttons */}
        <div className="relative z-10 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/login"
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] focus:outline-none active:scale-[0.98] sm:w-auto sm:min-w-[140px]"
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <span>Login</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          <Link
            to="/playlist"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-blue-800/50 bg-blue-950/30 px-6 py-3.5 text-sm font-bold text-blue-200 transition-all duration-300 hover:border-blue-600/60 hover:bg-blue-900/40 hover:text-white focus:outline-none active:scale-[0.98] sm:w-auto sm:min-w-[140px]"
          >
            <span>View Playlist</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;