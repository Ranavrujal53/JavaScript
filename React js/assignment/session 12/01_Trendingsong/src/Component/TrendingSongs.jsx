import React, { useEffect, useState } from "react";

function TrendingSongs() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [reloadCount, setReloadCount] = useState(0);

  const fetchSongs = async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      const shuffledSongs = [...data].sort(() => Math.random() - 0.5);

      setSongs(shuffledSongs.slice(0, 9));
      setReloadCount((prev) => prev + 1);
    } catch (error) {

      console.error(error);
      setError(true);
      setSongs([]);
    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-900">
        <h2 className="text-2xl font-bold text-white animate-pulse">
          🎵 Loading Trending Songs...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-900">
        <h2 className="rounded-lg bg-red-500 px-6 py-4 text-xl font-bold text-white shadow-lg">
          ❌ Error loading data
        </h2>

        <button
          onClick={fetchSongs}
          className="rounded-lg bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-600"
        >
          🔄 Reload
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 p-6">
      <div className="mx-auto w-full max-w-5xl rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
        
        <h1 className="mb-4 text-center text-4xl font-extrabold text-white">
          🔥 Trending Songs
        </h1>

        {/* <p className="mb-6 text-center text-gray-300">
          Reload Count: {reloadCount}
        </p> */}

        <div className="mb-8 flex justify-center">
          <button
            onClick={fetchSongs}
            className="rounded-lg bg-green-500 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-green-600 hover:scale-105"
          >
            🔄 Reload Songs
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {songs.map((song, index) => (
            <div
              key={song.id}
              className="group rounded-2xl border border-white/20 bg-white/10 p-5 transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-500 text-lg font-bold text-white">
                  {index + 1}
                </div>

                <div>
                  <p className="text-sm text-gray-300">
                    Trending Song #{index + 1}
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-white capitalize">
                    {song.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default TrendingSongs;