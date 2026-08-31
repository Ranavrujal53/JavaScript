import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import ToggleThemeButton from "./components/ToggleThemeButton";
import Feed from "./components/Feed";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
        <Navbar />

        <div className="flex justify-center py-8">
          <ToggleThemeButton />
        </div>

        <Feed />
      </div>
    </ThemeProvider>
  );
}

export default App;