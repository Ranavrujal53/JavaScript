import React from "react";

function MovieCard({ movie, onEdit, onDelete }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-blue-500/10">

      {/* Movie Poster */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-800 to-slate-950">

        {movie.image ? (
          <img
            src={movie.image}
            alt={movie.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="text-center">
            <div className="text-6xl">🎬</div>
            <p className="mt-2 text-sm text-slate-500">
              No Poster
            </p>
          </div>
        )}

        {/* Wishlist Badge */}
        <div className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-blue-400 backdrop-blur-md">
          ❤️ Wishlist
        </div>
      </div>

      {/* Movie Details */}
      <div className="p-5">

        {/* Title */}
        <h2 className="truncate text-xl font-bold text-white">
          {movie.title || "Untitled Movie"}
        </h2>

        {/* Movie Information */}
        <div className="mt-3 flex flex-wrap gap-2">

          {movie.year && (
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
              📅 {movie.year}
            </span>
          )}

          {movie.genre && (
            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
              🎭 {movie.genre}
            </span>
          )}

        </div>

        {/* Description */}
        {movie.description && (
          <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-400">
            {movie.description}
          </p>
        )}

        {/* Action Buttons */}
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">

          {/* Edit */}
          <button
            type="button"
            onClick={() => onEdit(movie)}
            className="flex-1 rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-2.5 text-sm font-semibold text-blue-400 transition-all duration-200 hover:bg-blue-500/20 hover:text-blue-300 active:scale-[0.98]"
          >
            ✏️ Edit
          </button>

          {/* Delete */}
          <button
            type="button"
            onClick={() => onDelete(movie.id)}
            className="flex-1 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm font-semibold text-red-400 transition-all duration-200 hover:bg-red-500/20 hover:text-red-300 active:scale-[0.98]"
          >
            🗑️ Delete
          </button>

        </div>

      </div>
    </div>
  );
}

/*
  Q3 PERFORMANCE OPTIMIZATION

  React.memo prevents MovieCard from re-rendering
  when its props have not changed.

  This is useful when searching/filtering movies because
  many MovieCard components may otherwise render again.
*/
export default React.memo(MovieCard);
