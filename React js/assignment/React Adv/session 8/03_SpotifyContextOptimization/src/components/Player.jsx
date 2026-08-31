import React, { useContext } from "react";
import { MusicContext } from "../context/MusicContext";

function Player() {
  const { volume, setVolume } = useContext(MusicContext);

  return (
    /* Full-page theme wrapper */
    <div className="min-h-screen bg-slate-950 flex flex-col items-center pt-20 px-4">
      
      {/* The Player Card */}
      <div className="w-full max-w-sm p-8 bg-gradient-to-br from-black to-blue-900 rounded-2xl shadow-2xl flex flex-col items-center border border-blue-800">
        <h2 className="text-2xl font-extrabold text-white mb-6 tracking-wide drop-shadow-md">
          Music Player
        </h2>

        {/* Styled Volume Indicator */}
        <div className="w-full flex items-center justify-between mb-8 px-5 py-4 bg-black/40 backdrop-blur-sm rounded-xl shadow-inner border border-blue-500/20">
          <span className="text-blue-200 font-medium tracking-wide">Volume</span>
          <span className="text-2xl font-bold text-blue-400 drop-shadow-sm">{volume}%</span>
        </div>

        {/* Interactive Button */}
        <button
          onClick={() => setVolume(volume + 10)}
          className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-500 transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
        >
          Increase Volume
        </button>
      </div>
      
    </div>
  );
}

export default Player;