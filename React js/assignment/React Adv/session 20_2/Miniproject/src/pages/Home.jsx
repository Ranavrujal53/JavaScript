import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left Content */}
            <div>
              <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
                🎬 Your Personal Movie Collection
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Never Forget a Movie
                <span className="block bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  You Want to Watch.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
                Create your personal movie wishlist, keep track of movies
                you want to watch, and manage your collection from one
                simple and beautiful application.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/wishlist"
                  className="rounded-xl bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 active:scale-[0.98]"
                >
                  🎥 View Wishlist
                </Link>

                <Link
                  to="/movies"
                  className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-slate-200 transition hover:border-blue-500/40 hover:bg-slate-800 active:scale-[0.98]"
                >
                  + Add Movie
                </Link>

              </div>
            </div>

            {/* Right Movie Illustration */}
            <div className="flex justify-center lg:justify-end">

              <div className="relative w-full max-w-md">

                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl bg-blue-600/20 blur-3xl" />

                {/* Movie Card */}
                <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">

                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
                        My Wishlist
                      </p>

                      <h2 className="mt-1 text-xl font-bold">
                        Movie Collection
                      </h2>
                    </div>

                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                      12 Movies
                    </span>
                  </div>

                  {/* Fake Movie Items */}
                  <div className="space-y-3">

                    <MoviePreview
                      emoji="🚀"
                      title="Interstellar"
                      genre="Sci-Fi"
                      year="2014"
                    />

                    <MoviePreview
                      emoji="🦇"
                      title="The Batman"
                      genre="Action"
                      year="2022"
                    />

                    <MoviePreview
                      emoji="🧙"
                      title="Harry Potter"
                      genre="Fantasy"
                      year="2001"
                    />

                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Features
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Everything You Need
            </h2>

            <p className="mt-4 text-slate-500">
              Easily manage your movie wishlist with simple tools.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <FeatureCard
              icon="➕"
              title="Add Movies"
              description="Add movies to your personal wishlist."
            />

            <FeatureCard
              icon="✏️"
              title="Edit Movies"
              description="Update movie information whenever you want."
            />

            <FeatureCard
              icon="🗑️"
              title="Delete Movies"
              description="Remove movies that you no longer want."
            />

            <FeatureCard
              icon="🔍"
              title="Search"
              description="Quickly find movies in your collection."
            />

          </div>

        </div>
      </section>

      {/* Firebase Section */}
      <section className="border-t border-slate-900 bg-slate-900/40">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">

          <div className="text-5xl">🔥</div>

          <h2 className="mt-5 text-3xl font-bold">
            Powered by Firebase
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
            Your movie wishlist data is stored in Firebase Firestore,
            providing reliable cloud storage and real-time data
            synchronization.
          </p>

          <Link
            to="/documentation"
            className="mt-7 inline-flex rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-500/40 hover:bg-slate-800"
          >
            📚 Read Documentation
          </Link>

        </div>
      </section>

    </div>
  );
}

/* Movie Preview */
function MoviePreview({ emoji, title, genre, year }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-3 transition hover:border-blue-500/30">

      <div className="flex h-14 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-2xl">
        {emoji}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-bold text-white">
          {title}
        </h3>

        <p className="mt-1 text-xs text-slate-500">
          {genre} • {year}
        </p>
      </div>

      <span className="text-blue-400">
        ✓
      </span>

    </div>
  );
}

/* Feature Card */
function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-slate-800">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
        {icon}
      </div>

      <h3 className="mt-5 font-bold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>

    </div>
  );
}

export default Home;
