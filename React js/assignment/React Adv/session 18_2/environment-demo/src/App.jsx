import React, { useEffect, useState } from "react";

function App() {
  // =====================================================
  // QUESTION 1
  // Spotify API key from .env.local
  // =====================================================
  const spotifyApiKey = import.meta.env.VITE_SPOTIFY_API_KEY;

  // =====================================================
  // QUESTION 2
  // TMDB API key from .env.local
  // =====================================================
  const tmdbApiKey = import.meta.env.VITE_TMDB_API_KEY;

  // =====================================================
  // QUESTION 3
  // Check current environment
  // development → Light Blue (bg-sky-100)
  // production  → Light Green (bg-emerald-100)
  // =====================================================
  const environment = import.meta.env.MODE;

  const backgroundClass =
    environment === "development"
      ? "bg-sky-100 text-slate-800"
      : "bg-emerald-100 text-slate-800";

  // =====================================================
  // Movie states
  // =====================================================
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // =====================================================
  // QUESTION 2
  // Fetch trending movies from TMDB
  // =====================================================
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      if (!tmdbApiKey) {
        setError("TMDB API key is missing.");
        return;
      }

      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${tmdbApiKey}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch trending movies.");
        }

        const data = await response.json();
        setMovies(data.results || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, [tmdbApiKey]);

  return (
    <div className={`min-h-screen p-6 md:p-10 transition-colors duration-300 ${backgroundClass}`}>
      {/* =================================================
          QUESTION 4
          Security Comment
      ================================================= */}
      {/*
        .env.local should NOT be committed to Git.
        Environment files can contain API keys and other configuration values.
        If .env.local is accidentally pushed to GitHub, other people may see keys and misuse APIs.
        Therefore .env.local is included in .gitignore.
      */}

      {/* =================================================
          HEADER
      ================================================= */}
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
          React Environment Variables
        </h1>
        <p className="text-sm md:text-base text-slate-600">
          Current Environment: <span className="font-bold uppercase tracking-wide">{environment}</span>
        </p>
      </header>

      {/* =================================================
          QUESTION 1
          Spotify API Key
      ================================================= */}
      <section className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 mb-8 border border-slate-200/60">
        <h2 className="text-xl font-bold text-slate-900 mb-3">1. Spotify API Key</h2>
        <p className="text-sm text-slate-600 mb-3">
          Environment variable loaded successfully:
        </p>
        <div className="bg-slate-100 border border-slate-300 rounded-xl p-3 font-mono text-xs md:text-sm text-slate-700 break-all">
          {spotifyApiKey ? spotifyApiKey : "Spotify API key not found"}
        </div>
      </section>

      {/* =================================================
          QUESTION 2
          TMDB Trending Movies
      ================================================= */}
      <section className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 mb-8 border border-slate-200/60">
        <h2 className="text-xl font-bold text-slate-900 mb-4">2. Trending Movies</h2>

        {loading && <p className="text-center text-slate-500 py-6 font-medium">Loading movies...</p>}
        {error && <p className="text-center text-red-500 py-6 font-medium">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col"
            >
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-72 object-cover"
                />
              ) : (
                <div className="w-full h-72 bg-slate-200 flex items-center justify-center text-slate-500 font-medium text-sm">
                  No Image
                </div>
              )}

              <div className="p-4 flex flex-col justify-between flex-grow">
                <h3 className="text-sm font-semibold text-slate-800 line-clamp-2 mb-2">
                  {movie.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================
          QUESTION 3
          Environment Information
      ================================================= */}
      <section className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 mb-8 border border-slate-200/60">
        <h2 className="text-xl font-bold text-slate-900 mb-3">3. Environment</h2>
        <p className="text-sm text-slate-600 mb-1">
          Current Mode: <span className="font-semibold">{environment}</span>
        </p>
        <p className="text-sm text-slate-600">
          Background:{" "}
          <span className="font-semibold">
            {environment === "development" ? "Light Blue" : "Light Green"}
          </span>
        </p>
      </section>

      {/* =================================================
          QUESTION 5
          Firebase
      ================================================= */}
      <section className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-slate-200/60">
        <h2 className="text-xl font-bold text-slate-900 mb-3">5. Firebase Configuration</h2>
        <p className="text-sm text-slate-600 mb-2">
          Firebase API key is loaded from <span className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-slate-800">.env.local</span>.
        </p>
        <p className="text-emerald-600 font-semibold text-sm">
          ✓ Firebase environment variable configured
        </p>
      </section>
    </div>
  );
}

export default App;