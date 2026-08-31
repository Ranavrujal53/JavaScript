import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../Firebase/firebase";

function MovieForm({ editingMovie, onCancel, onMovieSaved }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");

  // Load selected movie data into form when Edit is clicked
  useEffect(() => {
    if (editingMovie) {
      setTitle(editingMovie.title || "");
      setYear(editingMovie.year || "");
      setGenre(editingMovie.genre || "");
    } else {
      setTitle("");
      setYear("");
      setGenre("");
    }
  }, [editingMovie]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !year || !genre) {
      alert("Please fill all fields.");
      return;
    }

    try {
      if (editingMovie) {
        // UPDATE MOVIE
        const movieRef = doc(
          db,
          "movies",
          editingMovie.id
        );

        await updateDoc(movieRef, {
          title: title.trim(),
          year: Number(year),
          genre: genre,
        });

        alert("Movie updated successfully!");

        if (onMovieSaved) {
          onMovieSaved();
        }

        if (onCancel) {
          onCancel();
        }
      } else {
        // ADD MOVIE
        await addDoc(collection(db, "movies"), {
          title: title.trim(),
          year: Number(year),
          genre: genre,
          createdAt: new Date(),
        });

        alert("Movie added successfully!");

        setTitle("");
        setYear("");
        setGenre("");

        if (onMovieSaved) {
          onMovieSaved();
        }
      }
    } catch (error) {
      console.error("Firebase Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="mx-auto w-full max-w-xl">
      <form
        onSubmit={handleSubmit}
        className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl sm:p-8"
      >
        {/* Header */}
        <div className="mb-7">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Movie Wishlist
          </p>

          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {editingMovie ? "Edit Movie" : "Add Movie"}
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            {editingMovie
              ? "Update your movie information below."
              : "Add a movie to your personal wishlist."}
          </p>
        </div>

        {/* Movie Title */}
        <div className="mb-5">
          <label
            htmlFor="title"
            className="mb-2 block text-sm font-semibold text-slate-300"
          >
            Movie Title
          </label>

          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Interstellar"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        {/* Release Year */}
        <div className="mb-5">
          <label
            htmlFor="year"
            className="mb-2 block text-sm font-semibold text-slate-300"
          >
            Release Year
          </label>

          <input
            id="year"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="e.g. 2014"
            min="1900"
            max="2100"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        {/* Genre */}
        <div className="mb-7">
          <label
            htmlFor="genre"
            className="mb-2 block text-sm font-semibold text-slate-300"
          >
            Genre
          </label>

          <select
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full cursor-pointer rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="">Select a genre</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Thriller">Thriller</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            className="flex-1 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 active:scale-[0.98]"
          >
            {editingMovie ? "Update Movie" : "Add Movie"}
          </button>

          {editingMovie && (
            <button
              type="button"
              onClick={onCancel}
              className="rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 font-semibold text-slate-300 transition hover:bg-slate-700 hover:text-white"
            >
              Cancel
            </button>
          )}
        </div>

        {/* Edit Information */}
        {editingMovie && (
          <div className="mt-5 rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">
            <p className="text-sm text-blue-300">
              ✏️ You are currently editing:
              <span className="ml-1 font-semibold">
                {editingMovie.title}
              </span>
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export default MovieForm;
