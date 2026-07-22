import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './style.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import HomePage from "./Component/HomePage";
import DealsPage from "./Component/DealsPage";
import CartPage from "./Component/CartPage";
import NotFound from './Component/NotFound';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/Notfound" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
