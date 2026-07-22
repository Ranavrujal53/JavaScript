import React, { useEffect, useState } from "react";
import axios from "axios";

function TrendingMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setMovies(response.data.slice(0, 6));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // A mix of vibrant gradients for the movie posters
  const posterGradients = [
    "from-pink-500 to-rose-500",
    "from-purple-500 to-indigo-500",
    "from-cyan-400 to-blue-500",
    "from-emerald-400 to-teal-500",
    "from-amber-400 to-orange-500",
    "from-fuchsia-500 to-purple-600",
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-500">
        <div className="text-xl font-bold text-white animate-bounce shadow-xl bg-white/20 px-8 py-4 rounded-full backdrop-blur-md border border-white/30">
          🍿 Grabbing popcorn...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-500 p-6 md:p-12 font-sans selection:bg-fuchsia-300 selection:text-fuchsia-900">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-100 drop-shadow-sm mb-4">
            Popcorn Picks 🍿
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto drop-shadow-sm">
            The most colorful and vibrant trending movies right now.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              className="group relative bg-white/80 backdrop-blur-xl border border-white/60 rounded-[2rem] p-4 hover:-translate-y-2 transition-all duration-300 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col justify-between"
            >
              <div>
                {/* Colorful Poster Area */}
                <div
                  className={`w-full h-56 rounded-3xl mb-6 flex items-center justify-center bg-gradient-to-br ${
                    posterGradients[index % posterGradients.length]
                  } shadow-inner overflow-hidden relative group-hover:shadow-lg transition-all duration-300`}
                >
                  <span className="text-6xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 ease-out drop-shadow-lg">
                    🎬
                  </span>
                  {/* Glass glare effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Text Content Area */}
                <div className="px-2">
                  <h2 className="text-xl font-extrabold text-gray-900 mb-3 capitalize line-clamp-1 group-hover:text-fuchsia-600 transition-colors">
                    {movie.title}
                  </h2>
                  <p className="text-gray-700 text-sm line-clamp-3 leading-relaxed mb-6 font-medium">
                    {movie.body}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-2 pb-2">
                <button className="w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-black hover:to-black text-white font-bold py-4 px-4 rounded-2xl transition-all duration-300 transform active:scale-95 shadow-md flex items-center justify-center gap-2 group/btn">
                  <span>View Details</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingMovies;