
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import MovieWishlist from "./pages/MovieWishlist";
import Performance from "./pages/Performance";
import MobileTesting from "./pages/MobileTesting";
import Documentation from "./pages/Documentation";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white">

        {/* Navbar */}
        <nav className="border-b border-slate-800 bg-black px-4 py-4">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">

            <NavLink
              to="/"
              className="text-xl font-bold text-blue-400"
            >
              🎬 React Assignment
            </NavLink>

            <div className="flex flex-wrap gap-2">

              <NavLink
                to="/"
                className="rounded-lg px-3 py-2 text-sm hover:bg-slate-800"
              >
                Home
              </NavLink>

              <NavLink
                to="/recipes"
                className="rounded-lg px-3 py-2 text-sm hover:bg-slate-800"
              >
                Recipes
              </NavLink>

              <NavLink
                to="/movies"
                className="rounded-lg px-3 py-2 text-sm hover:bg-slate-800"
              >
                Movies
              </NavLink>

              <NavLink
                to="/performance"
                className="rounded-lg px-3 py-2 text-sm hover:bg-slate-800"
              >
                Performance
              </NavLink>

              <NavLink
                to="/mobile-testing"
                className="rounded-lg px-3 py-2 text-sm hover:bg-slate-800"
              >
                Mobile
              </NavLink>

              <NavLink
                to="/documentation"
                className="rounded-lg px-3 py-2 text-sm hover:bg-slate-800"
              >
                README
              </NavLink>

            </div>
          </div>
        </nav>

        {/* Pages */}
        <main className="mx-auto max-w-7xl p-6">

          <Routes>

            {/* Q1 */}
            <Route
              path="/recipes"
              element={<Recipes />}
            />

            {/* Q2 */}
            <Route
              path="/movies"
              element={<MovieWishlist />}
            />

            {/* Q3 */}
            <Route
              path="/performance"
              element={<Performance />}
            />

            {/* Q4 */}
            <Route
              path="/mobile-testing"
              element={<MobileTesting />}
            />

            {/* Q5 */}
            <Route
              path="/documentation"
              element={<Documentation />}
            />

            {/* Home */}
            <Route
              path="/"
              element={<Home />}
            />

          </Routes>

        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
