import React from "react";

function MovieCard({ movie, onEdit, onDelete }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-blue-500/10">

      {/* Movie Poster */}
      <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">

        <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />

        <span className="relative text-7xl transition duration-300 group-hover:scale-110">
          🎬
        </span>

        {/* Genre Badge */}
        <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
          {movie.genre}
        </span>

      </div>

      {/* Movie Information */}
      <div className="p-5">

        <div className="mb-4">

          <h3 className="truncate text-xl font-bold text-white">
            {movie.title}
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            Release Year:{" "}
            <span className="font-medium text-slate-300">
              {movie.year}
            </span>
          </p>

        </div>

        {/* Actions */}
        <div className="flex gap-2">

          {/* Edit Button */}
          <button
            type="button"
            onClick={() => onEdit(movie)}
            className="flex-1 rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-2.5 text-sm font-semibold text-blue-400 transition-all duration-200 hover:bg-blue-500/20 hover:text-blue-300 active:scale-95"
          >
            ✏️ Edit
          </button>

          {/* Delete Button */}
          <button
            type="button"
            onClick={() => onDelete(movie.id)}
            className="flex-1 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm font-semibold text-red-400 transition-all duration-200 hover:bg-red-500/20 hover:text-red-300 active:scale-95"
          >
            🗑️ Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default MovieCard;