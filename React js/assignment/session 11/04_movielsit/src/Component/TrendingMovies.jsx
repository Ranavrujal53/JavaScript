import React, { useEffect, useState } from "react";
import axios from "axios";

function TrendingMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMovies = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setMovies(response.data.slice(0, 9));
    } catch (err) {
      setError("Failed to load movies. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // Simple colorful poster themes
  const colorThemes = [
    { bg: "bg-rose-100 text-rose-600", btn: "bg-rose-500 hover:bg-rose-600" },
    { bg: "bg-purple-100 text-purple-600", btn: "bg-purple-500 hover:bg-purple-600" },
    { bg: "bg-emerald-100 text-emerald-600", btn: "bg-emerald-500 hover:bg-emerald-600" },
    { bg: "bg-amber-100 text-amber-600", btn: "bg-amber-500 hover:bg-amber-600" },
    { bg: "bg-blue-100 text-blue-600", btn: "bg-blue-500 hover:bg-blue-600" },
    { bg: "bg-fuchsia-100 text-fuchsia-600", btn: "bg-fuchsia-500 hover:bg-fuchsia-600" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto">
        
        {/* Simple Header */}
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
              <span>🎬</span> Trending Movies
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Simple, colorful picks for today.
            </p>
          </div>
          <span className="bg-pink-100 text-pink-700 text-xs font-bold px-3 py-1.5 rounded-full">
            🔥 {movies.length} Movies
          </span>
        </header>

        {/* Simple Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400 gap-3">
            <div className="w-8 h-8 border-3 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm font-medium">Loading movies...</p>
          </div>
        )}

        {/* Simple Error State */}
        {error && (
          <div className="bg-rose-50 border border-rose-200 text-rose-700 p-6 rounded-2xl text-center max-w-sm mx-auto my-10">
            <p className="font-semibold text-sm mb-3">{error}</p>
            <button
              onClick={fetchMovies}
              className="bg-rose-600 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-rose-700 transition"
            >
              Retry
            </button>
          </div>
        )}

        {/* Simple Colorful Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map((movie, index) => {
              const theme = colorThemes[index % colorThemes.length];

              return (
                <div
                  key={movie.id}
                  className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Colorful Poster Box */}
                    <div
                      className={`w-full h-36 rounded-xl ${theme.bg} flex items-center justify-center text-4xl mb-4 relative`}
                    >
                      🍿
                      <span className="absolute top-2 right-2 bg-white text-slate-700 text-xs font-bold px-2 py-0.5 rounded-md shadow-sm">
                        ⭐ 8.{index + 1}
                      </span>
                    </div>

                    {/* Movie Info */}
                    <h2 className="font-bold text-slate-900 text-lg mb-2 capitalize line-clamp-1">
                      {movie.title}
                    </h2>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-5">
                      {movie.body}
                    </p>
                  </div>

                  {/* Colored Button */}
                  <button
                    className={`w-full ${theme.btn} text-white text-sm font-semibold py-2.5 rounded-xl transition-colors`}
                  >
                    View Details
                  </button>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}

export default TrendingMovies;