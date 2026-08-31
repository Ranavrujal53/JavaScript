import React, { useCallback, useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

import { db } from "../Firebase/firebase";

import MovieCard from "../components/MovieCard";
import MovieForm from "../components/MovieForm";
import SearchBox from "../components/SearchBox";

function MovieWishlist() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingMovie, setEditingMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  // ==========================================
  // FETCH MOVIES FROM FIREBASE
  // ==========================================
  const fetchMovies = async () => {
    try {
      setLoading(true);

      const querySnapshot = await getDocs(
        collection(db, "movies")
      );

      const movieList = querySnapshot.docs.map((movie) => ({
        id: movie.id,
        ...movie.data(),
      }));

      setMovies(movieList);
    } catch (error) {
      console.error("Error fetching movies:", error);
      alert("Unable to load movies.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch movies when page loads
  useEffect(() => {
    fetchMovies();
  }, []);

  // ==========================================
  // SEARCH
  // ==========================================
  const handleSearch = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  // ==========================================
  // EDIT
  // ==========================================
  const handleEdit = useCallback((movie) => {
    setEditingMovie(movie);

    // Scroll to form
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // ==========================================
  // DELETE
  // ==========================================
  const handleDelete = useCallback(async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this movie?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteDoc(doc(db, "movies", id));

      // Remove movie immediately from UI
      setMovies((previousMovies) =>
        previousMovies.filter((movie) => movie.id !== id)
      );

      // If deleted movie was being edited
      setEditingMovie((currentMovie) =>
        currentMovie?.id === id ? null : currentMovie
      );

      alert("Movie deleted successfully!");
    } catch (error) {
      console.error("Error deleting movie:", error);
      alert("Unable to delete movie.");
    }
  }, []);

  // ==========================================
  // FORM CANCEL
  // ==========================================
  const handleCancel = useCallback(() => {
    setEditingMovie(null);
  }, []);

  // ==========================================
  // AFTER ADD / UPDATE
  // ==========================================
  const handleRecipeSaved = useCallback(() => {
    setEditingMovie(null);
    fetchMovies();
  }, []);

  // ==========================================
  // FILTER MOVIES
  // ==========================================
  const filteredMovies = movies.filter((movie) => {
    const title = movie.title?.toLowerCase() || "";
    const genre = movie.genre?.toLowerCase() || "";
    const search = searchTerm.toLowerCase();

    return (
      title.includes(search) ||
      genre.includes(search)
    );
  });

  return (
    <div className="min-h-screen w-full bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* ==========================================
            HEADER
        ========================================== */}
        <div className="mb-10 text-center">

          <div className="mb-4 text-5xl">
            🎬
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            My Movie Wishlist
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Keep track of all the movies you want to watch.
            Add, edit, search and remove movies from your wishlist.
          </p>

        </div>

        {/* ==========================================
            MOVIE FORM
        ========================================== */}
        <section className="mb-12">

          <MovieForm
            editingMovie={editingMovie}
            onCancel={handleCancel}
            onRecipeSaved={handleRecipeSaved}
          />

        </section>

        {/* ==========================================
            SEARCH
        ========================================== */}
        <section>

          <SearchBox
            onSearch={handleSearch}
          />

        </section>

        {/* ==========================================
            RESULTS HEADER
        ========================================== */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h2 className="text-2xl font-bold text-white">
              Your Movies
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {filteredMovies.length}{" "}
              {filteredMovies.length === 1
                ? "movie"
                : "movies"}{" "}
              found
            </p>
          </div>

          {searchTerm && (
            <button
              type="button"
              onClick={() => handleSearch("")}
              className="w-fit rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-blue-500/40 hover:text-white"
            >
              Clear Search
            </button>
          )}

        </div>

        {/* ==========================================
            LOADING
        ========================================== */}
        {loading && (
          <div className="flex min-h-60 items-center justify-center">

            <div className="text-center">

              <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-blue-500" />

              <p className="mt-4 text-sm text-slate-500">
                Loading movies...
              </p>

            </div>

          </div>
        )}

        {/* ==========================================
            NO MOVIES
        ========================================== */}
        {!loading && movies.length === 0 && (
          <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900/50 px-6 py-16 text-center">

            <div className="text-6xl">
              🎬
            </div>

            <h2 className="mt-5 text-2xl font-bold text-white">
              Your wishlist is empty
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Start building your movie collection by adding
              your first movie using the form above.
            </p>

          </div>
        )}

        {/* ==========================================
            SEARCH RESULT EMPTY
        ========================================== */}
        {!loading &&
          movies.length > 0 &&
          filteredMovies.length === 0 && (
            <div className="rounded-3xl border border-slate-800 bg-slate-900 px-6 py-16 text-center">

              <div className="text-5xl">
                🔍
              </div>

              <h2 className="mt-4 text-xl font-bold text-white">
                No movies found
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                No movie matches "{searchTerm}".
              </p>

              <button
                type="button"
                onClick={() => handleSearch("")}
                className="mt-5 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Show All Movies
              </button>

            </div>
          )}

        {/* ==========================================
            MOVIE GRID
        ========================================== */}
        {!loading &&
          filteredMovies.length > 0 && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {filteredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}

            </div>
          )}

      </div>
    </div>
  );
}

export default MovieWishlist;
