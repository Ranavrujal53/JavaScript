
import React, { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../Firebase/firebase";
import MovieForm from "../components/MovieForm";

function Watchlist() {
  const [movies, setMovies] = useState([]);
  const [editingMovie, setEditingMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const snapshot = await getDocs(
        collection(db, "movies")
      );

      const movieData = snapshot.docs.map((movie) => ({
        id: movie.id,
        ...movie.data(),
      }));

      setMovies(movieData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this movie?"
    );

    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "movies", id));

      setMovies((prevMovies) =>
        prevMovies.filter((movie) => movie.id !== id)
      );

      alert("Movie deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("Unable to delete movie.");
    }
  };

  const handleCancelEdit = () => {
    setEditingMovie(null);
    fetchMovies();
  };

  return (
    <div className="w-full max-w-6xl">

      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-white">
          🎬 My Movie Watchlist
        </h1>

        <p className="mt-2 text-slate-400">
          Add, edit and manage your favorite movies
        </p>
      </div>

      <MovieForm
        editingMovie={editingMovie}
        onCancel={handleCancelEdit}
      />

      <div className="mt-10">

        {loading ? (
          <p className="text-center text-slate-400">
            Loading movies...
          </p>
        ) : movies.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-700 p-10 text-center">
            <p className="text-slate-400">
              No movies in your watchlist.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {movies.map((movie) => (
              <div
                key={movie.id}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-lg"
              >
                <div className="mb-4 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-700 text-5xl">
                  🎬
                </div>

                <h3 className="text-xl font-bold text-white">
                  {movie.title}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Year: {movie.year}
                </p>

                <p className="text-sm text-blue-400">
                  Genre: {movie.genre}
                </p>

                <div className="mt-5 flex gap-2">

                  <button
                    onClick={() => setEditingMovie(movie)}
                    className="flex-1 rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-500"
                  >
                    ✏️ Edit
                  </button>

                  <button
                    onClick={() => handleDelete(movie.id)}
                    className="flex-1 rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-500"
                  >
                    🗑 Delete
                  </button>

                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}

export default Watchlist;
