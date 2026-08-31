import React from "react";

function Documentation() {
  return (
    <div className="min-h-screen w-full bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-8">

      {/* Main Container */}
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 text-5xl">🎬</div>

          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Movie Wishlist Documentation
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Learn how the Movie Wishlist application works, how to manage
            movies, and how the application is connected to Firebase.
          </p>
        </div>

        {/* Project Overview */}
        <section className="mb-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
          <h2 className="mb-3 text-xl font-bold text-blue-400">
            📌 Project Overview
          </h2>

          <p className="leading-7 text-slate-400">
            Movie Wishlist is a React application that allows users to
            maintain a personal list of movies they want to watch.
            Movies are stored in Firebase Firestore, allowing the data
            to persist even after refreshing the browser.
          </p>
        </section>

        {/* Features */}
        <section className="mb-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
          <h2 className="mb-5 text-xl font-bold text-blue-400">
            ✨ Features
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">

            <Feature
              icon="➕"
              title="Add Movie"
              text="Add a new movie with title, year, genre and image."
            />

            <Feature
              icon="✏️"
              title="Edit Movie"
              text="Update existing movie information using the Edit button."
            />

            <Feature
              icon="🗑️"
              title="Delete Movie"
              text="Remove unwanted movies from the wishlist."
            />

            <Feature
              icon="🔍"
              title="Search Movies"
              text="Search and filter movies by their title."
            />

            <Feature
              icon="🔥"
              title="Firebase"
              text="Store and manage movie data using Firestore."
            />

            <Feature
              icon="📱"
              title="Responsive Design"
              text="The interface works on desktop, tablet and mobile screens."
            />

          </div>
        </section>

        {/* Technology */}
        <section className="mb-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
          <h2 className="mb-5 text-xl font-bold text-blue-400">
            🛠️ Technologies Used
          </h2>

          <div className="flex flex-wrap gap-3">
            <Tech name="React.js" />
            <Tech name="React Router DOM" />
            <Tech name="Firebase" />
            <Tech name="Firestore" />
            <Tech name="Tailwind CSS" />
            <Tech name="JavaScript" />
          </div>
        </section>

        {/* CRUD */}
        <section className="mb-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
          <h2 className="mb-5 text-xl font-bold text-blue-400">
            🔄 Movie Management
          </h2>

          <div className="space-y-4">

            <Step
              number="01"
              title="Create"
              text="Enter movie information and click Add Movie. The movie is stored in Firestore."
            />

            <Step
              number="02"
              title="Read"
              text="The application fetches movies from Firestore and displays them as MovieCard components."
            />

            <Step
              number="03"
              title="Update"
              text="Click Edit to load the selected movie into MovieForm. Update the information and save it."
            />

            <Step
              number="04"
              title="Delete"
              text="Click Delete to remove the selected movie from Firestore."
            />

          </div>
        </section>

        {/* Performance */}
        <section className="mb-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
          <h2 className="mb-4 text-xl font-bold text-blue-400">
            ⚡ Performance Optimization
          </h2>

          <p className="leading-7 text-slate-400">
            React.memo() is used with MovieCard to prevent unnecessary
            re-rendering when the movie data and other props have not
            changed. The SearchBox can also use React.memo() and the
            parent component can use useCallback() to keep callback
            references stable.
          </p>

          <div className="mt-4 rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">
            <code className="text-sm text-blue-300">
              export default React.memo(MovieCard);
            </code>
          </div>
        </section>

        {/* Firebase */}
        <section className="mb-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
          <h2 className="mb-4 text-xl font-bold text-blue-400">
            🔥 Firebase Integration
          </h2>

          <p className="leading-7 text-slate-400">
            Firebase Firestore is used as the backend database. The
            application performs CRUD operations using Firebase's
            addDoc(), getDocs(), updateDoc(), and deleteDoc() methods.
          </p>

          <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-sm text-slate-500">
              Collection
            </p>

            <p className="mt-1 font-mono text-orange-400">
              movies
            </p>
          </div>
        </section>

        {/* Project Structure */}
        <section className="mb-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
          <h2 className="mb-5 text-xl font-bold text-blue-400">
            📁 Project Structure
          </h2>

          <pre className="overflow-x-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-300">
{`src/
│
├── components/
│   ├── MovieCard.jsx
│   ├── MovieForm.jsx
│   └── SearchBox.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── MovieWishlist.jsx
│   └── Documentation.jsx
│
├── Firebase/
│   └── firebase.js
│
├── App.jsx
├── main.jsx
└── index.css

.env.local
.gitignore
package.json`}
          </pre>
        </section>

        {/* Deployment */}
        <section className="rounded-2xl border border-slate-800 bg-gradient-to-br from-blue-500/10 to-slate-900 p-6 shadow-xl">
          <h2 className="mb-4 text-xl font-bold text-blue-400">
            🚀 Deployment
          </h2>

          <p className="leading-7 text-slate-400">
            The application can be deployed using Firebase Hosting or
            Netlify. Before deployment, make sure the production build
            completes successfully and all required environment variables
            are configured.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
              <h3 className="font-semibold text-white">
                Firebase Hosting
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Build the React application and deploy the generated
                build/dist folder using Firebase Hosting.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
              <h3 className="font-semibold text-white">
                Netlify
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Connect the GitHub repository to Netlify and configure
                the React build command and publish directory.
              </p>
            </div>

          </div>
        </section>

        {/* Footer */}
        <div className="py-8 text-center">
          <p className="text-sm text-slate-600">
            🎬 Movie Wishlist • React + Firebase
          </p>
        </div>

      </div>
    </div>
  );
}

/* Feature Component */
function Feature({ icon, title, text }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 transition hover:border-blue-500/30">
      <div className="flex items-start gap-3">
        <span className="text-2xl">{icon}</span>

        <div>
          <h3 className="font-semibold text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

/* Technology Badge */
function Tech({ name }) {
  return (
    <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
      {name}
    </span>
  );
}

/* CRUD Step */
function Step({ number, title, text }) {
  return (
    <div className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
        {number}
      </div>

      <div>
        <h3 className="font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Documentation;
