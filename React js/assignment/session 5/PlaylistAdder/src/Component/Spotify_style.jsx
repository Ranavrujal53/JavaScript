import React, { useState } from 'react'

function Spotify_style() {
    const [songname, setsongname] = useState("");
    const [artist, setartist] = useState("");
    const [playlist, setplaylist] =useState([]);

    const submit = (e) => {
        e.preventDefault();

        if(!songname || !artist){
            alert("Please enter both song name and artist");
            return;
        }

        const newsong ={
            songname,
            artist,
        };

        setplaylist([...playlist,newsong]);

        setsongname("");
        setartist("");
    };
  return (
    <div className="w-full max-w-md mx-auto my-10 rounded-2xl border border-slate-800/80 bg-slate-900 p-6 shadow-2xl font-sans text-slate-100">
      <h2 className="mb-6 text-center text-2xl font-black tracking-tight text-white bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Spotify Playlist Adder</h2>

      <form action="" onSubmit={submit} className="space-y-4">
        <div className="flex flex-col gap-1.5">
            <label htmlFor="" className="text-xs font-semibold uppercase tracking-wider text-slate-400">Song name:</label>
            <input type="text" value={songname} onChange={(e) => setsongname(e.target.value)} placeholder='Enter the song name' className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all" />
        </div>

        <div className="flex flex-col gap-1.5">
            <label htmlFor="" className="text-xs font-semibold uppercase tracking-wider text-slate-400">Artist:</label>
            <input type="text" value={artist} onChange={(e) => setartist(e.target.value)} placeholder='Enter Artist name' className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all" />
        </div>

        <button type='submit' className="w-full rounded-xl bg-blue-600 py-3 text-sm font-bold tracking-wide text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all active:scale-[0.98]">Add Song</button>
      </form>
      <h3 className="mb-3 mt-6 border-t border-slate-800/60 pt-5 text-xs font-semibold uppercase tracking-wider text-slate-400">Playlist</h3>

      <ul className="space-y-2 max-h-52 overflow-y-auto pr-1">
        {playlist.map((song, index) => (
          <li key={index} className="flex items-center gap-2 rounded-xl border border-slate-800/40 bg-slate-950/40 px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-slate-800/40 hover:text-blue-400">
            🎵 {song.songname} - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Spotify_style