import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state > 0 ? state - 1 : 0;

    case "RESET":
      return 0;

    default:
      return state;
  }
};

function PlaylistCounter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-3xl shadow-2xl p-8 text-center">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-3">
            🎵 Playlist Counter
          </h1>

          <p className="text-slate-400">
            Manage your playlist songs easily
          </p>
        </div>

        {/* Counter Display */}
        <div className="bg-slate-800 rounded-2xl p-6 mb-8 border border-slate-700">
          <h2 className="text-slate-400 text-lg mb-2">
            Number of Songs
          </h2>

          <p className="text-6xl font-extrabold text-cyan-400">
            {count}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mb-6">

          <button
            onClick={() => dispatch({ type: "DECREMENT" })}
            disabled={count === 0}
            className="
              w-14 h-14
              rounded-full
              bg-red-500
              text-white
              text-2xl
              font-bold
              hover:scale-110
              transition-all
              disabled:bg-gray-600
              disabled:cursor-not-allowed
              disabled:hover:scale-100
            "
          >
            −
          </button>

          <button
            onClick={() => dispatch({ type: "INCREMENT" })}
            className="
              w-14 h-14
              rounded-full
              bg-green-500
              text-white
              text-2xl
              font-bold
              hover:scale-110
              transition-all
            "
          >
            +
          </button>
        </div>

        {/* Reset Button */}
        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="
            w-full
            py-3
            rounded-xl
            bg-cyan-500
            text-white
            font-semibold
            hover:bg-cyan-600
            transition-all
            shadow-lg
          "
        >
          Reset Counter
        </button>

        {/* Footer */}
        <p className="mt-6 text-sm text-slate-500">
          Built with React useReducer & Tailwind CSS
        </p>
      </div>
    </div>
  );
}

export default PlaylistCounter;