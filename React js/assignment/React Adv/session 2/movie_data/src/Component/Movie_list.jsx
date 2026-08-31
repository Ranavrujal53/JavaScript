import React from "react";
import useTrendingMovies from "../Custome_hook/useTrenkdingmovies";

const Movie_list = () => {
  const { data, loading, error } = useTrendingMovies();

  if (loading) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Loading Movies...
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-center text-red-500 text-2xl mt-10">
        {error}
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Trending Movies
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((movie) => (
          <div
            key={movie.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-80 object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold">
                {movie.title}
              </h2>

              <p className="text-gray-600 text-sm mt-2">
                ⭐ {movie.vote_average}
              </p>

              <p className="text-gray-500 text-sm mt-2 line-clamp-3">
                {movie.overview}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie_list;