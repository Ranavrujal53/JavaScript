import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 shadow-lg px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-center gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-semibold text-lg transition duration-300 ${
              isActive
                ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                : "text-white hover:text-blue-400"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/deals"
          className={({ isActive }) =>
            `font-semibold text-lg transition duration-300 ${
              isActive
                ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                : "text-white hover:text-blue-400"
            }`
          }
        >
          Deals
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `font-semibold text-lg transition duration-300 ${
              isActive
                ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                : "text-white hover:text-blue-400"
            }`
          }
        >
          Cart
        </NavLink>
         <NavLink
          to="/Notfound"
          className={({ isActive }) =>
            `font-semibold text-lg transition duration-300 ${
              isActive
                ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                : "text-white hover:text-blue-400"
            }`
          }
        >
          NotFound
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;