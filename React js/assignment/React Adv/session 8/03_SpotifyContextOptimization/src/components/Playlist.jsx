import React, { useContext } from "react";
import { MusicContext } from "../context/MusicContext";

function Playlist() {
  const { playlist, currentSongIndex, setCurrentSongIndex } = useContext(MusicContext);

  return (
    /* Full-page theme wrapper */
    <div className="min-h-screen bg-slate-950 flex flex-col items-center pt-12 px-4">
      
      {/* The Playlist Card */}
      <div className="w-full max-w-sm p-6 bg-gradient-to-br from-black to-blue-900 rounded-2xl shadow-2xl border border-blue-800">
        <h2 className="text-2xl font-extrabold text-white mb-6 tracking-wide border-b border-blue-800 pb-3 drop-shadow-md">
          Playlist
        </h2>

        {/* Scrollable list container */}
        <div className="flex flex-col gap-3 max-h-72 overflow-y-auto pr-2 custom-scrollbar">
          {playlist.map((song, index) => {
            const isActive = currentSongIndex === index;

            return (
              <div 
                key={index}
                onClick={() => setCurrentSongIndex && setCurrentSongIndex(index)}
                className={`flex items-center px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 border-l-4 ${
                  isActive 
                    ? "bg-blue-900/50 border-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.3)]" 
                    : "bg-black/40 border-transparent hover:bg-black/70 hover:border-blue-700"
                }`}
              >
                {/* Song Number */}
                <span className={`font-bold mr-4 text-sm w-4 ${isActive ? "text-blue-300" : "text-blue-600"}`}>
                  {index + 1}.
                </span>
                
                {/* Song Title */}
                <p className={`font-medium truncate ${isActive ? "text-white drop-shadow-sm" : "text-blue-100"}`}>
                  {song}
                </p>

                {/* Playing Indicator */}
                {isActive && (
                  <div className="ml-auto flex gap-1 items-end h-4">
                    <div className="w-1 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-1 h-4 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-1 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                )}
              </div>
            );
          })}
          
          {/* Empty state fallback */}
          {playlist.length === 0 && (
            <p className="text-blue-300/50 text-center italic py-4">
              Your playlist is empty.
            </p>
          )}
        </div>
      </div>
      
    </div>
  );
}

export default Playlist;