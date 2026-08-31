import React, { useState } from 'react'

function Like_counter() {
    const [likes, setlikes] = useState(0);

    const handlelike = () => {
        setlikes(likes + 1);
    };
  return (
   <div className="p-6 max-w-xs mx-auto bg-slate-950 rounded-2xl shadow-2xl border border-slate-800 text-center space-y-5">
    <h2 className="text-2xl font-bold text-slate-100 tracking-tight flex items-center justify-center gap-2 select-none">
        <span className="text-rose-500 drop-shadow">❤️</span> Likes: 
        <span className="text-blue-400 font-extrabold font-mono text-2xl">{likes}</span>
    </h2>
    
    <button className="w-full py-2.5 px-5 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all duration-150 cursor-pointer select-none" onClick={handlelike}>Like</button>
    </div>
  )
}

export default Like_counter
