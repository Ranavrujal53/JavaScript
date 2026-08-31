import React from "react";

function SongItem({ song, onToggleFavorite }) {
  console.log("SongItem rendered:", song.name);

  return (
    <div className="mb-3 flex items-center justify-between rounded-lg bg-white p-4 shadow">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          {song.name}
        </h3>

        <p className="text-gray-500">{song.artist}</p>
      </div>

      <button
        onClick={() => onToggleFavorite(song.id)}
        className={`rounded-lg px-4 py-2 font-medium ${
          song.favorite
            ? "bg-red-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        {song.favorite ? "❤️ Favorite" : "🤍 Favorite"}
      </button>
    </div>
  );
}

export default React.memo(SongItem);