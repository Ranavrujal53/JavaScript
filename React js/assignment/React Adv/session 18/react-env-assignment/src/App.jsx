
import React from "react";

function App() {
  const spotifyApiKey = import.meta.env.VITE_SPOTIFY_API_KEY;
  const firebaseApiKey = import.meta.env.VITE_FIREBASE_API_KEY;

  return (
    <div className="app">

      <h1>Environment Variables</h1>

      {/* Spotify API Key */}
      <div>
        <h2>Spotify API Key</h2>
        <p>{spotifyApiKey}</p>
      </div>

      {/* Firebase API Key */}
      <div>
        <h2>Firebase API Key</h2>
        <p>{firebaseApiKey}</p>
      </div>

    </div>
  );
}

export default App;
