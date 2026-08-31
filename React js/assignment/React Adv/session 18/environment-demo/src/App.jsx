import React from "react";
import "./App.css";

function App() {
  const welcomeMessage = import.meta.env.VITE_WELCOME_MSG;

  return (
    <div className="app">

      <div className="card">

        <h1>Environment Variable Demo</h1>

        <p className="label">
          Current Environment Message
        </p>

        <h2>{welcomeMessage}</h2>

      </div>

    </div>
  );
}

export default App;
