import React, { useEffect, useState } from "react";

function DataFetcher() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/invalidurl"
        );

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 p-4">
        <div className="flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-slate-900/60 p-8 text-center shadow-2xl backdrop-blur-xl">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-amber-400 border-t-transparent"></div>
          <p className="text-lg font-semibold text-slate-200">
            Fetching Data...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 p-4">
        <div className="rounded-3xl border border-red-500/30 bg-slate-900/80 p-8 text-center shadow-2xl shadow-red-950/50 backdrop-blur-xl">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10 text-2xl text-red-400">
            ⚠️
          </div>
          <h2 className="text-2xl font-bold text-white">Error Loading Data</h2>
          <p className="mt-2 text-sm text-slate-400">
            Unable to fetch data from the server. Please check the API URL or try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 p-4 md:p-8">
      <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/3 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <header className="mb-10 text-center">
          <h1 className="bg-gradient-to-r from-amber-200 via-orange-400 to-yellow-500 bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-5xl md:text-6xl">
            Fetched Data
          </h1>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(data) &&
            data.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/10"
              >
                <p className="text-lg font-bold text-slate-100 transition-colors group-hover:text-amber-300">
                  {item.title || item.name}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default DataFetcher;