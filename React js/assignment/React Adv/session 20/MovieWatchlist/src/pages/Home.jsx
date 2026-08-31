import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="flex w-full max-w-4xl items-center justify-center">

      <div className="text-center">

        <div className="mb-6 text-7xl">
          🎬
        </div>

        <h1 className="text-4xl font-extrabold sm:text-6xl">
          Movie Watchlist
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          Keep track of your favorite movies using
          React and Firebase.
        </p>

        <NavLink
          to="/watchlist"
          className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
        >
          Open Watchlist →
        </NavLink>

      </div>

    </div>
  );
}

export default Home;
