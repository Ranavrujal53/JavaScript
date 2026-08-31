import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import PostList from "./PostList";

function Feed() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-[500px] px-4 py-12 transition-all duration-500 ease-in-out ${
        theme === "light"
          ? "bg-gradient-to-br from-slate-50 to-blue-50/70 text-slate-800"
          : "bg-gradient-to-br from-slate-800 to-slate-900 text-blue-50"
      }`}
    >
      <div className="mx-auto max-w-3xl">
        {/* Gradient Text Heading */}
        <h2
          className={`mb-10 text-center text-4xl font-extrabold tracking-tight ${
            theme === "light"
              ? "bg-gradient-to-r from-blue-700 to-slate-700 bg-clip-text text-transparent"
              : "bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent"
          }`}
        >
          Instagram Feed
        </h2>

        {/* Glassmorphism Wrapper for the Feed */}
        <div
          className={`rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md ${
            theme === "light"
              ? "bg-white/60 shadow-blue-900/5 ring-1 ring-white"
              : "bg-slate-900/40 shadow-black/40 ring-1 ring-white/10"
          }`}
        >
          <PostList />
        </div>
      </div>
    </div>
  );
}

export default Feed;