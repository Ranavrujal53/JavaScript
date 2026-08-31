import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";

function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen bg-slate-950 text-white">

        {/* Navbar */}
        <nav className="border-b border-slate-800 bg-black/80 px-6 py-4 backdrop-blur">

          <div className="mx-auto flex max-w-6xl items-center justify-between">

            <NavLink
              to="/"
              className="text-xl font-bold text-blue-400"
            >
              🎬 MovieWatchlist
            </NavLink>

            <div className="flex gap-3">

              <NavLink
                to="/"
                className="rounded-lg px-4 py-2 text-sm hover:bg-slate-800"
              >
                Home
              </NavLink>

              <NavLink
                to="/watchlist"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-500"
              >
                Watchlist
              </NavLink>

            </div>

          </div>

        </nav>

        {/* Pages */}
        <main className="flex min-h-[calc(100vh-73px)] justify-center px-4 py-10">

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/watchlist"
              element={<Watchlist />}
            />

          </Routes>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;
