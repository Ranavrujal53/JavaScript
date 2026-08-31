import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSong } from "../redux/playlistSlice";

function PlaylistList() {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.playlist.songs);

  const handleDelete = (id) => {
    dispatch(deleteSong(id));
  };

  return (
    <div className="relative flex w-full max-w-5xl min-h-[75vh] flex-col overflow-hidden rounded-3xl border border-blue-900/50 bg-black p-6 font-sans shadow-[0_0_50px_-10px_rgba(37,99,235,0.25)] antialiased sm:p-10">
      {/* Expanded ambient glow for a larger screen */}
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl"></div>

      {/* Header Section */}
      <div className="relative z-10 mb-8 flex items-end justify-between border-b border-blue-900/40 pb-6">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400 sm:text-5xl">
            My Playlist
          </h2>
          <p className="mt-2 text-base text-blue-200/60">
            Your saved tracks collection
          </p>
        </div>

        {/* Track counter badge */}
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-800/40 bg-blue-950/30 text-lg font-bold text-blue-400 shadow-inner">
          {songs.length}
        </div>
      </div>

      {/* Song List Content */}
      <div className="relative z-10 flex flex-1 flex-col">
        {songs.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-dashed border-blue-900/40 bg-blue-950/10 p-12 text-center">
            <span className="mb-4 text-5xl" role="img" aria-label="headphones">
              🎧
            </span>
            <p className="text-lg font-medium text-blue-200/50">
              No songs in your playlist yet.
            </p>
            <p className="mt-2 text-sm text-blue-300/30">
              Add your favorite music using the form.
            </p>
          </div>
        ) : (
          <div className="flex-1 space-y-4 overflow-y-auto pr-3">
            {/* Column Headers for wider screens */}
            <div className="hidden px-16 pb-2 sm:flex">
              <span className="w-1/2 text-xs font-bold uppercase tracking-wider text-blue-300/40">
                Title
              </span>
              <span className="w-1/2 text-xs font-bold uppercase tracking-wider text-blue-300/40">
                Artist
              </span>
            </div>

            {songs.map((song) => (
              <div
                key={song.id}
                className="group flex items-center justify-between rounded-2xl border border-blue-900/30 bg-blue-950/20 p-4 transition-all duration-300 hover:border-blue-700/50 hover:bg-blue-950/40 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] sm:p-5"
              >
                <div className="flex w-full items-center gap-5 overflow-hidden pr-4">
                  {/* Music Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-800/30 bg-blue-900/20 text-blue-400 transition-colors group-hover:border-blue-500/50 group-hover:bg-blue-600/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 19V6l12-2v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12 0c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-2"
                      />
                    </svg>
                  </div>

                  {/* Track Info (Spread across the screen horizontally) */}
                  <div className="flex min-w-0 flex-1 flex-col sm:flex-row sm:items-center sm:gap-8">
                    <h3 className="w-full truncate text-base font-bold text-white transition-colors group-hover:text-blue-200 sm:w-1/2 sm:text-lg">
                      {song.title}
                    </h3>
                    <p className="w-full truncate text-sm text-blue-300/60 sm:w-1/2 sm:text-base">
                      {song.artist}
                    </p>
                  </div>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(song.id)}
                  title="Remove song"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 opacity-100 transition-all duration-200 hover:border-red-500/40 hover:bg-red-500/20 hover:text-red-300 active:scale-95 sm:opacity-0 sm:group-hover:opacity-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PlaylistList;