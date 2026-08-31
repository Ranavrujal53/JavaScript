import React, { useState } from "react";

function SongItem({ song, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(song.name);

  const handleSave = () => {
    if (!editName.trim()) {
      return;
    }

    dispatch({
      type: "EDIT_SONG",
      payload: {
        id: song.id,
        name: editName.trim(),
      },
    });

    setIsEditing(false);
  };

  // DELETE WITH ALERT
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${song.name}"?`
    );

    if (confirmDelete) {
      dispatch({
        type: "REMOVE_SONG",
        payload: song.id,
      });
    }
  };

  return (
    <li className="flex items-center justify-between bg-slate-800 p-4 rounded-xl">
      
      {isEditing ? (
        <div className="flex gap-2 w-full">
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="flex-1 px-3 py-2 rounded-lg bg-slate-700 text-white outline-none"
          />

          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-500 rounded-lg text-white"
          >
            Save
          </button>

          <button
            onClick={() => {
              setEditName(song.name);
              setIsEditing(false);
            }}
            className="px-4 py-2 bg-slate-600 rounded-lg text-white"
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <span className="text-white font-medium">
            🎵 {song.name}
          </span>

          <div className="flex gap-2">

            {/* EDIT */}
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white"
            >
              Edit
            </button>

            {/* DELETE */}
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white"
            >
              Delete
            </button>

          </div>
        </>
      )}
    </li>
  );
}

export default SongItem;