import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ToggleThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`group flex items-center gap-3 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-500 ease-in-out backdrop-blur-md ${
        theme === "light"
          ? "bg-slate-900 text-slate-100 shadow-md shadow-slate-900/10 ring-1 ring-slate-800 hover:bg-slate-800"
          : "bg-black/80 text-blue-300 shadow-lg shadow-blue-900/30 ring-1 ring-blue-500/40 hover:ring-blue-400 hover:shadow-blue-500/20"
      }`}
    >
      <span className="text-base transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
        {theme === "light" ? "🌙" : "☀️"}
      </span>

      <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
    </button>
  );
}

export default ToggleThemeButton;