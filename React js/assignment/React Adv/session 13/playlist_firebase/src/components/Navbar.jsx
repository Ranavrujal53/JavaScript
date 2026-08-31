import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 shadow-lg bg-slate-600 text-slate-100">

      {/* Logo Section */}
      <div className="flex items-center">
        <h2 className="text-2xl font-extrabold tracking-wide text-blue-300 cursor-pointer">
          Playlist App
        </h2>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-2 md:space-x-6">
        <Link 
          to="/" 
          className="px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-slate-800 hover:text-blue-300 hover:shadow-md"
        >
          Home
        </Link>

        <Link 
          to="/playlists" 
          className="px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-slate-800 hover:text-blue-300 hover:shadow-md"
        >
          Playlists
        </Link>

        <Link 
          to="/comments" 
          className="px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-slate-800 hover:text-blue-300 hover:shadow-md"
        >
          Live Comments
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;