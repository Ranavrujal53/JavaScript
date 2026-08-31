import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-500 ease-in-out backdrop-blur-md ${
        theme === "light"
          ? "bg-white/70 border-b border-slate-200 shadow-sm text-slate-800"
          : "bg-slate-950/70 border-b border-blue-900/30 shadow-lg text-blue-50"
      }`}
    >
      {/* Gradient Brand Logo */}
      <h1
        className={`text-2xl font-extrabold tracking-tight ${
          theme === "light"
            ? "bg-gradient-to-r from-blue-700 to-slate-700 bg-clip-text text-transparent"
            : "bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent"
        }`}
      >
        InstaThemeDemo
      </h1>

      {/* Navigation Links */}
      <div className="flex gap-6 font-medium">
        {["Home", "Profile", "Settings"].map((item) => (
          <span
            key={item}
            className={`cursor-pointer transition-colors duration-200 ${
              theme === "light"
                ? "text-slate-600 hover:text-blue-600"
                : "text-slate-300 hover:text-blue-400"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;