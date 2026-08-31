import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../Firebase/firebase";

function MovieForm({ editingMovie, onCancel }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");

  // Load selected movie data into the form
  useEffect(() => {
    if (editingMovie) {
      setTitle(editingMovie.title || "");
      setYear(editingMovie.year || "");
      setGenre(editingMovie.genre || "");
    } else {
      // Clear form when not editing
      setTitle("");
      setYear("");
      setGenre("");
    }
  }, [editingMovie]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!title.trim() || !year || !genre) {
      alert("Please fill all fields.");
      return;
    }

    try {
      // ==========================
      // UPDATE MOVIE
      // ==========================
      if (editingMovie) {
        const movieRef = doc(
          db,
          "movies",
          editingMovie.id
        );

        await updateDoc(movieRef, {
          title: title.trim(),
          year: year,
          genre: genre,
        });

        alert("Movie updated successfully!");

        // Close edit mode
        onCancel();
      }

      // ==========================
      // ADD MOVIE
      // ==========================
      else {
        await addDoc(collection(db, "movies"), {
          title: title.trim(),
          year: year,
          genre: genre,
          createdAt: new Date(),
        });

        alert("Movie added successfully!");

        // Clear form
        setTitle("");
        setYear("");
        setGenre("");
      }
    } catch (error) {
      console.error("Firebase Error:", error);

      alert("Something went wrong.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl space-y-5 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl"
    >
      {/* Heading */}
      <div>
        <h2 className="text-2xl font-bold text-white">
          {editingMovie ? "✏️ Edit Movie" : "🎬 Add Movie"}
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          {editingMovie
            ? "Update your movie information"
            : "Add a new movie to your watchlist"}
        </p>
      </div>

      {/* Movie Title */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-300">
          Movie Title
        </label>

        <input
          type="text"
          placeholder="Enter movie title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
      </div>

      {/* Release Year */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-300">
          Release Year
        </label>

        <input
          type="number"
          placeholder="Enter release year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
      </div>

      {/* Genre */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-300">
          Genre
        </label>

        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        >
          <option value="">Select genre</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          className="flex-1 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-500 active:scale-95"
        >
          {editingMovie
            ? "✓ Update Movie"
            : "+ Add Movie"}
        </button>

        {editingMovie && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-xl bg-slate-700 px-5 py-3 font-semibold text-white transition hover:bg-slate-600 active:scale-95"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default MovieForm;
