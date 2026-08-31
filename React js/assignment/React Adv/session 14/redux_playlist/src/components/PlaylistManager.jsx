import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../redux/playlistSlice";

function PlaylistManager() {
  // =========================================
  // STATE
  // =========================================
  const [songName, setSongName] = useState("");

  // =========================================
  // REDUX
  // =========================================
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlist);

  // =========================================
  // ADD SONG
  // =========================================
  const handleAddSong = () => {
    if (!songName.trim()) {
      alert("Please enter song name");
      return;
    }

    dispatch(addSong(songName.trim()));
    setSongName("");
  };

  // =========================================
  // REMOVE SONG
  // =========================================
  const handleRemoveSong = (id) => {
    dispatch(removeSong(id));
  };

  // =========================================
  // JSX
  // =========================================
  return (
    /* 
      1. FULL PAGE BACKGROUND WRAPPER 
      This creates the canvas for our ambient background theme
    */
    <div className="relative min-h-screen px-4 py-12 overflow-hidden bg-stone-100 font-sans flex items-start justify-center">
      
      {/* 2. AMBIENT GLOW EFFECTS (The magical premium background) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-400/30 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-amber-300/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-rose-300/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-blob animation-delay-4000"></div>

      {/* 3. MAIN APP CONTAINER (Frosted Glassmorphism) */}
      <div className="relative z-10 w-full max-w-3xl px-6 py-10 shadow-2xl bg-white/70 backdrop-blur-2xl rounded-[2.5rem] border border-white/60 shadow-orange-900/10">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center justify-center w-14 h-14 shadow-xl bg-gradient-to-br from-orange-400 to-amber-600 rounded-2xl shadow-orange-500/30">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V7.5L9 9.5V19z"></path>
            </svg>
          </div>
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 drop-shadow-sm">
              Playlist Manager
            </h1>
            <p className="font-medium text-stone-500 mt-1">Curate your perfect vibe</p>
          </div>
        </div>

        {/* =====================================
            ADD SONG FORM
        ===================================== */}
        <div className="flex flex-col gap-3 p-3 mb-10 bg-white/80 shadow-sm rounded-2xl md:flex-row md:items-center border border-white/50 backdrop-blur-md">
          <input
            type="text"
            placeholder="What do you want to listen to?"
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
            className="flex-1 px-5 py-4 font-medium transition-all bg-stone-50/50 border-2 border-transparent rounded-xl outline-none text-stone-700 placeholder-stone-400 focus:bg-white focus:border-orange-400/50 focus:ring-4 focus:ring-orange-500/10"
          />

          <button
            onClick={handleAddSong}
            className="w-full px-8 py-4 font-bold text-white transition-all shadow-lg rounded-xl md:w-auto bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-orange-500/25 hover:shadow-orange-500/40 active:scale-95"
          >
            Add Track
          </button>
        </div>

        {/* =====================================
            PLAYLIST
        ===================================== */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-stone-800">
            Your Tracks
          </h2>
          <span className="px-4 py-1.5 text-sm font-extrabold tracking-wide uppercase bg-orange-100/80 rounded-full text-orange-600 border border-orange-200/50">
            {playlist.length} {playlist.length === 1 ? 'Song' : 'Songs'}
          </span>
        </div>

        {playlist.length === 0 ? (
          <div className="py-16 text-center bg-white/50 border-2 border-dashed rounded-[2rem] border-orange-200/50 backdrop-blur-sm">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 text-orange-400 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V7.5L9 9.5V19z"></path>
              </svg>
            </div>
            <p className="font-medium text-stone-500 text-lg">
              No tracks yet. Drop your first song above!
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {playlist.map((song, index) => (
              <div
                className="flex items-center justify-between p-4 transition-all duration-300 bg-white/80 border border-white/40 shadow-sm group rounded-2xl hover:shadow-lg hover:shadow-orange-500/5 hover:border-orange-200/60 backdrop-blur-md hover:-translate-y-0.5"
                key={song.id}
              >
                
                <div className="flex items-center gap-4">
                  {/* Play Button Icon */}
                  <button className="flex items-center justify-center w-12 h-12 transition-all duration-300 rounded-xl bg-gradient-to-br from-stone-100 to-stone-200 text-stone-400 group-hover:from-orange-400 group-hover:to-amber-500 group-hover:text-white group-hover:shadow-md group-hover:shadow-orange-500/30">
                    <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  </button>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-stone-700 group-hover:text-orange-600 transition-colors">
                      {song.name}
                    </span>
                    <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                      Track {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleRemoveSong(song.id)}
                  className="px-5 py-2.5 text-sm font-bold transition-all rounded-xl bg-stone-100 text-stone-500 hover:bg-rose-50 hover:text-rose-600 active:scale-95"
                >
                  Remove
                </button>
                
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PlaylistManager;