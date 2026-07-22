import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './style.css'
import UserContext from './Component/UserContext'
import Navbar from './Component/Navbar'
import ThemeContext from './Component/ThemeContext'
import ThemeToggle from './Component/ThemeToggle'

function App() {
  const [count, setCount] = useState(0)

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <UserContext.Provider
        value={{
          username: "Vrujal",
          loggedIn: true,
        }}
      >
        <Navbar />
      </UserContext.Provider>

      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div
          className={`min-h-screen p-5 flex flex-col items-center justify-center ${
            theme === "light"
              ? "bg-white text-black"
              : "bg-gray-900 text-white"
          }`}
        >
          <h1 className="text-4xl font-bold mb-4">
            Theme Toggle Using Context API
          </h1>

          <p className="text-xl mb-6">
            Current Theme: {theme}
          </p>

          <ThemeToggle />
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App