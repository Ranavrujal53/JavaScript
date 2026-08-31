import React, { useState } from "react";
import useSearchMovies from "../hook/useSearchMovies";

const Movies = () => {
  const [query, setQuery] = useState("");

  const { movies, loading, error } = useSearchMovies(query);

  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            🎬 Movie Search
          </h1>

          <p className="text-slate-400">
            Search for your favorite movies
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-2xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search Movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="
              w-full
              px-5
              py-4
              rounded-xl
              bg-slate-800
              border
              border-slate-700
              text-white
              placeholder-slate-400
              outline-none
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500/30
              transition
            "
          />
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center py-10">
            <div className="w-10 h-10 border-4 border-slate-600 border-t-blue-500 rounded-full animate-spin"></div>
            <span className="ml-4 text-lg text-slate-300">
              Loading...
            </span>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="max-w-xl mx-auto mb-8">
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-5 py-4 rounded-xl text-center">
              {error}
            </div>
          </div>
        )}

        {/* Movies */}
        {!loading && !error && movies.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

            {movies.map((movie) => (
              <div
                key={movie.imdbID}
                className="
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-2xl
                  overflow-hidden
                  shadow-lg
                  hover:-translate-y-2
                  hover:border-blue-500/50
                  hover:shadow-blue-500/10
                  transition-all
                  duration-300
                "
              >
                {/* Poster */}
                <div className="h-80 bg-slate-800 overflow-hidden">
                  <img
                    src={
                      movie.Poster !== "N/A"
                        ? movie.Poster
                        : "https://via.placeholder.com/300x450?text=No+Poster"
                    }
                    alt={movie.Title}
                    className="
                      w-full
                      h-full
                      object-cover
                      hover:scale-105
                      transition-transform
                      duration-500
                    "
                  />
                </div>

                {/* Movie Details */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white truncate">
                    {movie.Title}
                  </h3>

                  <p className="text-slate-400 mt-2">
                    📅 {movie.Year}
                  </p>
                </div>
              </div>
            ))}

          </div>
        )}

        {/* No Movies */}
        {!loading && !error && query && movies.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-400 text-lg">
              No movies found.
            </p>
          </div>
        )}

        {/* Initial Message */}
        {!query && !loading && (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">
              🔎 Start typing to search for movies
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Movies;