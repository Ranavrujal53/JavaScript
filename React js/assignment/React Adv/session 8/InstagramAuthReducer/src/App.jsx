import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './style.css'
import AuthProvider from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <AuthProvider>
      <Navbar />
      <Profile />
    </AuthProvider>
    </>
  )
}

export default App
