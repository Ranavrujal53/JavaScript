import React, { useCallback, useState } from "react";

/*
  PERFORMANCE OPTIMIZATION

  Problem:
  When the user types in the search box, the parent component
  re-renders. Without optimization, MovieItem components can
  also re-render unnecessarily.

  Solution:
  1. React.memo() prevents MovieItem from rendering when its props
     have not changed.
  2. useCallback() keeps the same function reference between renders.
*/

// ==========================================
// OPTIMIZED MOVIE ITEM
// ==========================================

const MovieItem = React.memo(function MovieItem({
  movie,
  onSelect,
}) {
  console.log("MovieItem rendered:", movie.title);

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 transition hover:border-blue-500/40">
      <div className="flex items-center justify-between gap-4">

        <div>
          <h3 className="font-bold text-white">
            {movie.title}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {movie.genre} • {movie.year}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onSelect(movie)}
          className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-500"
        >
          Select
        </button>

      </div>
    </div>
  );
});

// ==========================================
// PERFORMANCE PAGE
// ==========================================

function Performance() {
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const movies = [
    {
      id: 1,
      title: "Interstellar",
      genre: "Sci-Fi",
      year: 2014,
    },
    {
      id: 2,
      title: "Inception",
      genre: "Sci-Fi",
      year: 2010,
    },
    {
      id: 3,
      title: "The Dark Knight",
      genre: "Action",
      year: 2008,
    },
    {
      id: 4,
      title: "Avengers: Endgame",
      genre: "Action",
      year: 2019,
    },
    {
      id: 5,
      title: "The Hangover",
      genre: "Comedy",
      year: 2009,
    },
    {
      id: 6,
      title: "Joker",
      genre: "Drama",
      year: 2019,
    },
  ];

  // ==========================================
  // useCallback
  // ==========================================

  const handleSelect = useCallback((movie) => {
    setSelectedMovie(movie);
  }, []);

  // ==========================================
  // SEARCH FILTER
  // ==========================================

  const filteredMovies = movies.filter((movie) => {
    const searchValue = search.toLowerCase();

    return (
      movie.title.toLowerCase().includes(searchValue) ||
      movie.genre.toLowerCase().includes(searchValue)
    );
  });

  return (
    <div className="min-h-screen w-full bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-8">

      <div className="mx-auto max-w-5xl">

        {/* ==========================================
            HEADER
        ========================================== */}

        <div className="mb-10 text-center">

          <div className="mb-4 text-5xl">
            ⚡
          </div>

          <h1 className="text-3xl font-extrabold sm:text-4xl">
            React Performance
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Optimized movie search using React.memo() and
            useCallback().
          </p>

        </div>

        {/* ==========================================
            PERFORMANCE EXPLANATION
        ========================================== */}

        <div className="mb-8 grid gap-5 md:grid-cols-2">

          <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6">

            <div className="text-3xl">
              ⚠️
            </div>

            <h2 className="mt-4 text-lg font-bold text-red-400">
              Before Optimization
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Every time the user types in the search box,
              the parent component re-renders. Child movie
              components may also re-render even when their
              data has not changed.
            </p>

          </div>

          <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-6">

            <div className="text-3xl">
              🚀
            </div>

            <h2 className="mt-4 text-lg font-bold text-green-400">
              After Optimization
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              React.memo() prevents unnecessary MovieItem
              renders, while useCallback() keeps the callback
              function reference stable.
            </p>

          </div>

        </div>

        {/* ==========================================
            SEARCH BOX
        ========================================== */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">

          <label className="mb-2 block text-sm font-semibold text-slate-300">
            🔍 Search Movies
          </label>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by movie name or genre..."
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />

          <p className="mt-3 text-xs text-slate-500">
            Open the browser console and type in the search box.
            You can see when MovieItem components render.
          </p>

        </div>

        {/* ==========================================
            MOVIE LIST
        ========================================== */}

        <div className="mt-8">

          <div className="mb-4 flex items-center justify-between">

            <h2 className="text-xl font-bold">
              Movies
            </h2>

            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
              {filteredMovies.length} Results
            </span>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {filteredMovies.map((movie) => (
              <MovieItem
                key={movie.id}
                movie={movie}
                onSelect={handleSelect}
              />
            ))}

          </div>

          {/* No Results */}

          {filteredMovies.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-700 p-10 text-center">

              <div className="text-4xl">
                🔍
              </div>

              <h3 className="mt-3 font-bold">
                No movies found
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Try another movie name or genre.
              </p>

            </div>
          )}

        </div>

        {/* ==========================================
            SELECTED MOVIE
        ========================================== */}

        {selectedMovie && (
          <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">

            <h2 className="font-bold text-blue-400">
              Selected Movie
            </h2>

            <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <h3 className="font-bold text-white">
                  {selectedMovie.title}
                </h3>

                <p className="text-sm text-slate-400">
                  {selectedMovie.genre} • {selectedMovie.year}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedMovie(null)}
                className="mt-3 rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-300 hover:bg-slate-700 sm:mt-0"
              >
                Clear
              </button>

            </div>

          </div>
        )}

        {/* ==========================================
            OPTIMIZATION SUMMARY
        ========================================== */}

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="text-xl font-bold">
            Optimization Used
          </h2>

          <div className="mt-5 space-y-4">

            <div className="rounded-xl bg-slate-950 p-4">
              <code className="text-sm text-blue-400">
                React.memo(MovieItem)
              </code>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Prevents MovieItem from re-rendering when its
                props have not changed.
              </p>
            </div>

            <div className="rounded-xl bg-slate-950 p-4">
              <code className="text-sm text-blue-400">
                useCallback(handleSelect, [])
              </code>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Keeps the same callback reference between
                parent renders.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Performance;
