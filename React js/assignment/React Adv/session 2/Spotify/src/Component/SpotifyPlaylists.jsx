import React from "react";
import useFetchData from "../hook/useFetchData";

const SpotifyPlaylists = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const { data, loading, error } = useFetchData(url);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-neutral-900 text-emerald-400">
        <h2 className="text-xl font-semibold animate-pulse">
          Loading playlists...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-neutral-900 text-red-500">
        <h2 className="text-xl font-semibold">
          Error: {error}
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold mb-8 text-emerald-400">
          Spotify Playlists
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {data?.map((playlist) => (
            <div
              key={playlist.id}
              className="bg-neutral-800/60 p-4 rounded-xl hover:bg-neutral-800 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-2xl"
            >

              <div className="relative w-full aspect-square overflow-hidden rounded-md mb-4 bg-neutral-900 shadow-md flex items-center justify-center">
                <span className="text-5xl">🎵</span>
              </div>

              <h3 className="font-semibold text-base text-neutral-100 truncate group-hover:text-emerald-400 transition-colors">
                {playlist.title}
              </h3>

              <p className="text-sm text-neutral-400 mt-2 line-clamp-2">
                {playlist.body}
              </p>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default SpotifyPlaylists;