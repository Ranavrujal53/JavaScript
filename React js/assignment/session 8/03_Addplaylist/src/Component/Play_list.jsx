import React, { useRef, useState } from 'react'

function Play_list() {
    const inputref = useRef(null);

    const [song, setsong] = useState("");
    const [playlist, setplaylist] = useState([]);

    const handeladd = () => {
        const trimedsong = song.trim();

        if (!trimedsong) {
            alert("Please Enter a song name");
            inputref.current.focus();
            return;
        }

        setplaylist([...playlist, trimedsong]);
        setsong("");

        inputref.current.focus();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-gray-950 flex items-center justify-center px-4">
            <div className="w-full max-w-lg p-8 bg-gradient-to-br from-slate-900 via-gray-900 to-black rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.3)] border border-blue-500/30">

                <h2 className="text-4xl font-bold text-center text-white mb-6 tracking-wide">
                    Add To Playlist 🎵
                </h2>

                <input
                    type="text"
                    ref={inputref}
                    placeholder="Enter song name"
                    value={song}
                    onChange={(e) => setsong(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-400 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 mb-4"
                />

                <button
                    onClick={handeladd}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-lg shadow-lg hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
                >
                    ADD SONG
                </button>

                <h3 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4 border-b border-gray-700 pb-2">
                    Playlist
                </h3>

                <ul className="space-y-3 max-h-72 overflow-y-auto pr-2">
                    {playlist.map((item, i) => (
                        <li
                            key={i}
                            className="px-4 py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl text-white shadow-md hover:border-cyan-400 hover:translate-x-1 transition-all duration-300 flex items-center gap-3"
                        >
                            🎶 {item}
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Play_list