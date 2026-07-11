import React, { useState } from "react";

function LikeCount() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a]">
      {/* Container with a subtle dark border to define the card edge */}
      <div className="bg-[#111111] p-10 rounded-3xl border border-[#1f1f1f] shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col items-center gap-8 w-80">
        
        <div className="text-center">
          <h2 className="text-xs font-bold text-[#666666] tracking-widest uppercase">
            Total Likes
          </h2>
          <p className="text-7xl font-black text-white tabular-nums tracking-tighter mt-2">
            {count}
          </p>
        </div>

        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="group relative w-full py-4 bg-white text-black font-bold rounded-2xl transition-all duration-300 hover:bg-gray-200 active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          <span className="flex items-center justify-center gap-2">
            <span className="group-hover:scale-110 transition-transform duration-300">👍</span>
            Like
          </span>
        </button>
      </div>
    </div>
  );
}

export default LikeCount;