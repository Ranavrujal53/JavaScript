import React, { useReducer, useState } from "react";
import playlistReducer from "./playlistReducer";
import SongItem from "./SongItem";

function PlaylistManager() {
  const [songs, dispatch] = useReducer(playlistReducer, []);

  const [songName, setSongName] = useState("");

  // CREATE
  const handleAddSong = () => {
    if (!songName.trim()) {
      alert("Please enter a song name");
      return;
    }

    const newSong = {
      id: Date.now(),
      name: songName.trim(),
    };

    dispatch({
      type: "ADD_SONG",
      payload: newSong,
    });

    setSongName("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl">

        {/* Playlist Card */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl p-6 md:p-8">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">
              🎵
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white">
              My Playlist
            </h1>

            <p className="text-slate-400 mt-2">
              Manage your songs using useReducer
            </p>
          </div>

          {/* CREATE */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">

            <input
              type="text"
              placeholder="Enter song name..."
              value={songName}
              onChange={(e) => setSongName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAddSong();
                }
              }}
              className="
                flex-1
                px-4
                py-3
                rounded-xl
                bg-slate-800
                border
                border-slate-700
                text-white
                placeholder-slate-500
                outline-none
                focus:border-cyan-500
                focus:ring-2
                focus:ring-cyan-500/20
                transition
              "
            />

            <button
              onClick={handleAddSong}
              className="
                px-6
                py-3
                rounded-xl
                bg-cyan-500
                hover:bg-cyan-600
                text-white
                font-semibold
                transition
                duration-300
                hover:scale-105
                shadow-lg
                shadow-cyan-500/20
              "
            >
              + Add
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 mb-6"></div>

          {/* READ */}
          <div className="flex items-center justify-between mb-5">

            <h2 className="text-2xl font-bold text-white">
              Songs
            </h2>

            <span
              className="
                px-4
                py-1
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-500/20
                text-cyan-400
                text-sm
                font-semibold
              "
            >
              {songs.length} Songs
            </span>

          </div>

          {/* Empty Playlist */}
          {songs.length === 0 ? (

            <div
              className="
                text-center
                py-12
                rounded-2xl
                bg-slate-800/50
                border
                border-dashed
                border-slate-700
              "
            >
              <div className="text-5xl mb-4">
                🎶
              </div>

              <p className="text-lg text-slate-300 font-medium">
                No songs in your playlist.
              </p>

              <p className="text-sm text-slate-500 mt-2">
                Add your first song above!
              </p>
            </div>

          ) : (

            /* Song List */
            <ul className="space-y-3">

              {songs.map((song) => (
                <SongItem
                  key={song.id}
                  song={song}
                  dispatch={dispatch}
                />
              ))}

            </ul>

          )}

        </div>

        {/* Footer */}
        <p className="text-center text-slate-600 text-sm mt-6">
          React useReducer • Playlist Manager
        </p>

      </div>
    </div>
  );
}

export default PlaylistManager;