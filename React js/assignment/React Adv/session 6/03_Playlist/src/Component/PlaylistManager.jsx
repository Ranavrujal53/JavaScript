import React, { useCallback, useState } from "react";
import SongItem from "./SongItem";

function PlaylistManager() {
  const [songs, setSongs] = useState([
    {
      id: 1,
      name: "Shape of You",
      artist: "Ed Sheeran",
      favorite: false,
    },
    {
      id: 2,
      name: "Perfect",
      artist: "Ed Sheeran",
      favorite: false,
    },
    {
      id: 3,
      name: "Believer",
      artist: "Imagine Dragons",
      favorite: false,
    },
    {
      id: 4,
      name: "Faded",
      artist: "Alan Walker",
      favorite: false,
    },
    {
      id: 5,
      name: "Closer",
      artist: "The Chainsmokers",
      favorite: false,
    },
  ]);

  const toggleFavorite = useCallback((id) => {
    setSongs((prevSongs) =>
      prevSongs.map((song) =>
        song.id === id
          ? { ...song, favorite: !song.favorite }
          : song
      )
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
        My Playlist
      </h1>

      <div className="mx-auto max-w-2xl">
        {songs.map((song) => (
          <SongItem
            key={song.id}
            song={song}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default PlaylistManager;