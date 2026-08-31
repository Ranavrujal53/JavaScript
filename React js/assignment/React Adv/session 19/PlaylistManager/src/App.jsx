import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AddSong from "./pages/AddSong";
import Playlist from "./pages/Playlist";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-black font-sans text-white antialiased selection:bg-blue-500 selection:text-white">
        {/* Sticky Frosted Glass Header */}
        <header className="sticky top-0 z-50 border-b border-blue-900/40 bg-black/80 backdrop-blur-md">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <NavLink
              to="/"
              className="flex items-center gap-2 text-xl font-extrabold tracking-tight sm:text-2xl"
            >
              <span className="text-2xl" role="img" aria-label="music note">
                🎵
              </span>
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
                Playlist Manager
              </span>
            </NavLink>

            {/* Navigation Links */}
            <div className="flex items-center gap-1 sm:gap-2">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                    isActive
                      ? "border border-blue-500/40 bg-blue-600/20 text-white shadow-[0_0_12px_rgba(37,99,235,0.3)]"
                      : "text-blue-200/70 hover:bg-blue-950/40 hover:text-white"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                    isActive
                      ? "border border-blue-500/40 bg-blue-600/20 text-white shadow-[0_0_12px_rgba(37,99,235,0.3)]"
                      : "text-blue-200/70 hover:bg-blue-950/40 hover:text-white"
                  }`
                }
              >
                Login
              </NavLink>

              <NavLink
                to="/add-song"
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                    isActive
                      ? "border border-blue-500/40 bg-blue-600/20 text-white shadow-[0_0_12px_rgba(37,99,235,0.3)]"
                      : "text-blue-200/70 hover:bg-blue-950/40 hover:text-white"
                  }`
                }
              >
                Add Song
              </NavLink>

              <NavLink
                to="/playlist"
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                    isActive
                      ? "border border-blue-500/40 bg-blue-600/20 text-white shadow-[0_0_12px_rgba(37,99,235,0.3)]"
                      : "text-blue-200/70 hover:bg-blue-950/40 hover:text-white"
                  }`
                }
              >
                Playlist
              </NavLink>
            </div>
          </nav>
        </header>

        {/* Main Content Container */}
        <main className="flex flex-1 items-center justify-center p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/add-song" element={<AddSong />} />
            <Route path="/playlist" element={<Playlist />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;