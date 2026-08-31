import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { state } = useContext(AuthContext);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Container to keep content centered and constrained on large screens */}
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Brand Logo with an Instagram-style gradient */}
        <h1 className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 cursor-pointer hover:opacity-80 transition-opacity">
          Instagram Clone
        </h1>

        {/* User Info Section */}
        <div className="flex items-center space-x-3">
          {state.user ? (
            <>
              <span className="text-sm font-medium text-gray-700 hidden sm:block">
                Welcome, <span className="font-bold text-black">{state.user.displayName}</span>
              </span>
              {/* Optional: Simple Avatar Circle */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-violet-500 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                {state.user.displayName?.charAt(0).toUpperCase() || "U"}
              </div>
            </>
          ) : (
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-1.5 px-4 rounded-lg transition-colors">
              Log In
            </button>
          )}
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;