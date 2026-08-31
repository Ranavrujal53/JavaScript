import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { state, dispatch } = useContext(ThemeContext);
  const isLight = state.theme === "light";

  return (
    <header
      className={`relative flex min-h-[70vh] flex-col items-center justify-center px-6 py-16 text-center transition-all duration-500 ease-in-out ${
        isLight
          ? "bg-gradient-to-br from-slate-50 via-white to-blue-50/70 text-slate-900"
          : "bg-gradient-to-br from-slate-950 via-slate-900 to-black text-blue-50"
      }`}
    >
      {/* Hero Title */}
      <h1
        className={`mb-4 text-4xl font-extrabold tracking-tight sm:text-6xl ${
          isLight
            ? "bg-gradient-to-r from-blue-700 to-slate-800 bg-clip-text text-transparent"
            : "bg-gradient-to-r from-blue-400 to-slate-200 bg-clip-text text-transparent"
        }`}
      >
        Theme App
      </h1>

      {/* Glassmorphic Theme Pill Indicator */}
      <div
        className={`mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium backdrop-blur-md transition-all duration-300 ${
          isLight
            ? "border-slate-200 bg-white/70 text-slate-600 shadow-sm"
            : "border-blue-900/50 bg-slate-900/60 text-blue-200 shadow-inner"
        }`}
      >
        <span className="text-slate-400">Current Theme:</span>
        <span className="font-bold uppercase tracking-wider text-blue-500">
          {state.theme}
        </span>
      </div>

      {/* Styled Reducer Dispatch Button */}
      <button
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        className={`group flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-in-out backdrop-blur-md ${
          isLight
            ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800 hover:shadow-xl"
            : "bg-blue-600 text-white shadow-xl shadow-blue-900/40 ring-1 ring-blue-400/30 hover:bg-blue-500 hover:shadow-blue-500/25"
        }`}
      >
        <span className="text-base transition-transform duration-500 group-hover:rotate-180">
          ⚡
        </span>
        <span>Toggle Theme</span>
      </button>
    </header>
  );
}

export default Header;