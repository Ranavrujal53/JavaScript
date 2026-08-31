import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../redux/playlistSlice";

function Playlist() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlist);

  const handleAddSong = (e) => {
    e.preventDefault();

    if (!title.trim() || !artist.trim()) {
      alert("Please enter title and artist");
      return;
    }

    const newSong = {
      id: Date.now(),
      title: title.trim(),
      artist: artist.trim(),
    };

    dispatch(addSong(newSong));

    setTitle("");
    setArtist("");
  };

  const handleRemoveSong = (id) => {
    dispatch(removeSong(id));
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-gray-100 p-6 md:p-12 font-sans">
      <div className="max-w-3xl mx-auto">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-10 tracking-tight">
          🎵 <span className="text-green-500">Spotify</span> Playlist
        </h1>

        {/* Add Song Form */}
        <div className="bg-neutral-900 rounded-2xl p-6 mb-10 border border-neutral-800 shadow-xl">
          <form onSubmit={handleAddSong} className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Song title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="flex-1 bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
            />

            <input
              type="text"
              placeholder="Artist name"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              className="flex-1 bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
            />

            <button 
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-8 rounded-full shadow-lg shadow-green-500/20 hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Add Song
            </button>
          </form>
        </div>

        {/* Playlist Section */}
        <h2 className="text-2xl font-bold border-b border-neutral-800 pb-4 mb-6 flex items-center gap-3">
          My Playlist 
          <span className="text-sm font-medium bg-neutral-800 text-neutral-300 py-1 px-3 rounded-full">
            {playlist.length} {playlist.length === 1 ? 'song' : 'songs'}
          </span>
        </h2>

        {playlist.length === 0 ? (
          <div className="bg-neutral-900/50 rounded-2xl p-12 text-center border border-neutral-800 border-dashed">
            <p className="text-neutral-400 text-lg">Your playlist is looking a little empty.</p>
            <p className="text-neutral-500 text-sm mt-2">Add some tracks above to get started!</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {playlist.map((song, index) => (
              <div
                key={song.id}
                className="group bg-neutral-900 border border-transparent hover:border-neutral-700 hover:bg-neutral-800 rounded-xl p-4 flex justify-between items-center transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  {/* Track Number */}
                  <span className="text-neutral-500 font-medium w-6 text-right">
                    {index + 1}
                  </span>
                  
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                      {song.title}
                    </h3>
                    <p className="text-neutral-400 text-sm font-medium">
                      {song.artist}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleRemoveSong(song.id)}
                  className="text-neutral-500 hover:text-red-400 hover:bg-red-400/10 px-4 py-2 rounded-lg font-medium opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-200"
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

export default Playlist;