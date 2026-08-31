import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../Firebase/db";

function PlaylistEditor() {
  // =========================================
  // STATES
  // =========================================
  const [playlistName, setPlaylistName] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [editId, setEditId] = useState(null);

  // =========================================
  // READ PLAYLISTS - REAL TIME
  // =========================================
  useEffect(() => {
    const playlistRef = collection(db, "playlists");

    const unsubscribe = onSnapshot(
      playlistRef,
      (snapshot) => {
        const playlistData = snapshot.docs.map((item) => {
          return {
            id: item.id,
            ...item.data(),
          };
        });
        setPlaylists(playlistData);
      },
      (error) => {
        console.log("Error fetching playlists:", error);
      }
    );

    // CLEANUP
    return () => {
      unsubscribe();
    };
  }, []);

  // =========================================
  // ADD PLAYLIST
  // =========================================
  const handleAdd = async () => {
    if (!playlistName.trim()) {
      alert("Please enter playlist name");
      return;
    }

    try {
      await addDoc(collection(db, "playlists"), {
        name: playlistName.trim(),
      });
      alert("Playlist added successfully!");
      setPlaylistName("");
    } catch (error) {
      console.log("Error adding playlist:", error);
      alert("Error adding playlist");
    }
  };

  // =========================================
  // EDIT PLAYLIST
  // =========================================
  const handleEdit = (playlist) => {
    setEditId(playlist.id);
    setPlaylistName(playlist.name);
  };

  // =========================================
  // UPDATE PLAYLIST
  // =========================================
  const handleUpdate = async () => {
    if (!playlistName.trim()) {
      alert("Please enter playlist name");
      return;
    }

    if (!editId) {
      alert("Please select a playlist");
      return;
    }

    try {
      const playlistRef = doc(db, "playlists", editId);
      await updateDoc(playlistRef, {
        name: playlistName.trim(),
      });
      alert("Playlist updated successfully!");
      setPlaylistName("");
      setEditId(null);
    } catch (error) {
      console.log("Error updating playlist:", error);
      alert("Error updating playlist");
    }
  };

  // =========================================
  // DELETE PLAYLIST
  // =========================================
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this playlist?"
    );

    if (!confirmDelete) return;

    try {
      const playlistRef = doc(db, "playlists", id);
      await deleteDoc(playlistRef);
      alert("Playlist deleted successfully!");

      // If deleted playlist was currently being edited
      if (editId === id) {
        setEditId(null);
        setPlaylistName("");
      }
    } catch (error) {
      console.log("Error deleting playlist:", error);
      alert("Error deleting playlist");
    }
  };

  // =========================================
  // CANCEL EDIT
  // =========================================
  const handleCancel = () => {
    setEditId(null);
    setPlaylistName("");
  };

  // =========================================
  // JSX
  // =========================================
  return (
    <div className="max-w-3xl px-6 py-8 mx-auto mt-10 shadow-xl bg-slate-50 rounded-2xl text-slate-800">
      
      <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-700">
        Playlist Manager
      </h2>

      {/* =====================================
          FORM
      ===================================== */}
      <div className="flex flex-col gap-4 p-5 mb-8 bg-white border shadow-sm rounded-xl border-slate-200 md:flex-row md:items-center">
        <input
          type="text"
          placeholder="Enter playlist name..."
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg outline-none bg-slate-50 border-slate-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all text-slate-700"
        />

        <div className="flex gap-2">
          {editId ? (
            <>
              <button
                onClick={handleUpdate}
                className="px-5 py-2 font-medium text-white transition-all bg-blue-500 rounded-lg shadow-sm hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
              >
                Update
              </button>
              <button
                onClick={handleCancel}
                className="px-5 py-2 font-medium transition-all rounded-lg shadow-sm bg-slate-400 text-slate-50 hover:bg-slate-500 focus:ring-2 focus:ring-slate-400 focus:ring-offset-1"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={handleAdd}
              className="w-full px-6 py-2 font-medium text-white transition-all bg-blue-500 rounded-lg shadow-sm md:w-auto hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
            >
              Add Playlist
            </button>
          )}
        </div>
      </div>

      {/* =====================================
          PLAYLIST LIST
      ===================================== */}
      <h3 className="mb-4 text-xl font-semibold text-slate-600">
        All Playlists
      </h3>

      {playlists.length === 0 ? (
        <p className="py-8 font-medium text-center text-slate-400 bg-white border border-dashed rounded-xl border-slate-300">
          No playlists found. Create one above!
        </p>
      ) : (
        <div className="space-y-3">
          {playlists.map((playlist) => (
            <div
              className="flex items-center justify-between p-4 transition-all duration-200 bg-white border border-transparent shadow-sm rounded-xl hover:border-slate-200 hover:shadow-md"
              key={playlist.id}
            >
              <div>
                <h4 className="text-lg font-bold text-slate-700">
                  {playlist.name}
                </h4>
                <small className="text-xs font-mono text-slate-400">
                  ID: {playlist.id}
                </small>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(playlist)}
                  className="px-4 py-1.5 text-sm font-medium transition-colors bg-slate-100 text-slate-600 rounded-md hover:bg-slate-200 hover:text-slate-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(playlist.id)}
                  className="px-4 py-1.5 text-sm font-medium transition-colors bg-red-50 text-red-500 rounded-md hover:bg-red-100 hover:text-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PlaylistEditor;