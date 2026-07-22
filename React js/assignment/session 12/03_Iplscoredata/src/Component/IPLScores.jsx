import React, { useEffect, useState } from "react";

function IPLScores() {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (response.status !== 200) {
          throw new Error("Failed to load scores");
        }

        const data = await response.json();

        const dummyScores = data.map((team) => ({
          id: team.id,
          team: team.name,
          score: Math.floor(Math.random() * 101) + 100,
          wickets: Math.floor(Math.random() * 10),
        }));

        setScores(dummyScores);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchScores();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 p-4">
        <div className="flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-slate-900/60 p-8 text-center shadow-2xl backdrop-blur-xl">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-amber-400 border-t-transparent"></div>
          <p className="text-lg font-semibold text-slate-200">
            Fetching Match Updates...
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
          <h2 className="text-2xl font-bold text-white">Failed to Load Scores</h2>
          <p className="mt-2 text-sm text-slate-400">
            Unable to reach the scoreboard server. Please check back shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 p-4 md:p-8">
      {/* Ambient Stadium Glow Background Effects */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/3 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
            </span>
            Live Match Center
          </div>
          <h1 className="bg-gradient-to-r from-amber-200 via-orange-400 to-yellow-500 bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-5xl md:text-6xl">
            IPL Dashboard
          </h1>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {scores.map((team) => (
            <div
              key={team.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-lg font-bold text-white shadow-md shadow-indigo-500/20 transition-transform group-hover:scale-105">
                  {team.team.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="truncate text-lg font-bold text-slate-100 transition-colors group-hover:text-amber-300">
                    {team.team}
                  </h2>
                  <span className="inline-block text-xs font-medium text-slate-400">
                    Innings 1
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-baseline justify-between rounded-2xl border border-white/5 bg-slate-800/40 p-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Runs / Wkts
                  </p>
                  <p className="mt-1 text-2xl font-black text-emerald-400">
                    {team.score}
                    <span className="font-normal text-slate-400">/</span>
                    {team.wickets}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Overs
                  </p>
                  <p className="mt-1 text-base font-semibold text-slate-200">
                    20.0
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IPLScores;