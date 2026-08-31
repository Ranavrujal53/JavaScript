
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteSong,
  editSong,
} from "../redux/playlistSlice";

function PlaylistList() {
  const dispatch = useDispatch();

  const songs = useSelector(
    (state) => state.playlist.songs
  );

  // Edit states
  const [editingId, setEditingId] = useState(null);

  const [editTitle, setEditTitle] = useState("");
  const [editArtist, setEditArtist] = useState("");

  // Start editing
  const handleEditClick = (song) => {
    setEditingId(song.id);
    setEditTitle(song.title);
    setEditArtist(song.artist);
  };

  // Update song
  const handleUpdate = (id) => {
    if (!editTitle.trim() || !editArtist.trim()) {
      alert("Please enter song name and artist.");
      return;
    }

    dispatch(
      editSong({
        id: id,
        title: editTitle,
        artist: editArtist,
      })
    );

    // Close edit mode
    setEditingId(null);
    setEditTitle("");
    setEditArtist("");
  };

  // Cancel edit
  const handleCancel = () => {
    setEditingId(null);
    setEditTitle("");
    setEditArtist("");
  };

  // Delete song
  const handleDelete = (id) => {
    dispatch(deleteSong(id));
  };

  return (
    <div className="w-full max-w-3xl rounded-3xl border border-blue-900/40 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8">

      {/* Header */}
      <div className="mb-6">

        <h2 className="text-2xl font-bold text-white">
          My Playlist 🎵
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Manage your favorite songs
        </p>

      </div>

      {/* Songs */}
      {songs.length === 0 ? (

        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-800/40 p-10 text-center">

          <div className="mb-3 text-4xl">
            🎵
          </div>

          <p className="text-slate-400">
            Your playlist is empty.
          </p>

        </div>

      ) : (

        <div className="space-y-3">

          {songs.map((song) => (

            <div
              key={song.id}
              className="rounded-2xl border border-slate-700/60 bg-slate-800/60 p-4 transition hover:border-blue-500/30"
            >

              {editingId === song.id ? (

                /* ================= EDIT MODE ================= */
                <div className="space-y-4">

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Song Name
                    </label>

                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) =>
                        setEditTitle(e.target.value)
                      }
                      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Artist
                    </label>

                    <input
                      type="text"
                      value={editArtist}
                      onChange={(e) =>
                        setEditArtist(e.target.value)
                      }
                      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  {/* Edit Buttons */}
                  <div className="flex gap-2">

                    <button
                      type="button"
                      onClick={() =>
                        handleUpdate(song.id)
                      }
                      className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 active:scale-95"
                    >
                      ✓ Update Song
                    </button>

                    <button
                      type="button"
                      onClick={handleCancel}
                      className="rounded-xl border border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-slate-700 active:scale-95"
                    >
                      Cancel
                    </button>

                  </div>

                </div>

              ) : (

                /* ================= NORMAL MODE ================= */
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  {/* Song Information */}
                  <div className="flex items-center gap-4">

                    {/* Music Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-xl shadow-lg shadow-blue-600/20">
                      🎵
                    </div>

                    <div className="min-w-0">

                      <h3 className="truncate text-base font-bold text-white">
                        {song.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        {song.artist}
                      </p>

                    </div>

                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">

                    <button
                      type="button"
                      onClick={() =>
                        handleEditClick(song)
                      }
                      className="rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400 transition hover:bg-blue-500/20 hover:text-blue-300 active:scale-95"
                    >
                      ✏️ Edit
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        handleDelete(song.id)
                      }
                      className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500/20 hover:text-red-300 active:scale-95"
                    >
                      🗑 Remove
                    </button>

                  </div>

                </div>

              )}

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default PlaylistList;
