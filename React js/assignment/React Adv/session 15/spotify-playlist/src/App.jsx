import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Playlist from "./components/Playlist";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      {/* Main App Container */}
      <div className="min-h-screen bg-black text-gray-100 font-sans flex flex-col tracking-wide">
        
        {/* Navigation Bar */}
        <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-blue-900/50">
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            
            {/* Branding / Logo */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-blue-700 to-blue-950 flex items-center justify-center font-extrabold text-white text-xl shadow-[0_0_15px_rgba(29,78,216,0.4)] border border-blue-800">
                SR
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight text-white hidden sm:block">
                Trading <span className="text-blue-500">Portal</span>
              </h2>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-2 sm:gap-6">
              <Link
                to="/"
                className="px-4 py-2 rounded-md text-gray-300 hover:text-white hover:bg-blue-900/30 transition-all duration-300 font-medium"
              >
                Playlist
              </Link>

              <Link
                to="/cart"
                className="px-4 py-2 rounded-md text-gray-300 hover:text-white hover:bg-blue-900/30 transition-all duration-300 font-medium"
              >
                Shopping Cart
              </Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Playlist />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        
      </div>
    </BrowserRouter>
  );
}

export default App;