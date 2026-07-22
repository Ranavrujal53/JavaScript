import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './style.css'
import Parent from "./Component/Parent";
import ThemeContext from "./Component/ThemeContext";

function App() {
  const [count, setCount] = useState(0)

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <div
          className={`min-h-screen p-6 transition-all duration-300 ${
            theme === "light"
              ? "bg-white text-black"
              : "bg-gray-900 text-white"
          }`}
        >
          <h1 className="text-4xl font-bold text-center mb-6">
            Theme Context Example
          </h1>

          <div className="flex justify-center mb-8">
            <button
              onClick={toggleTheme}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Switch to {theme === "light" ? "Dark" : "Light"} Theme
            </button>
          </div>

          <Parent />
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App