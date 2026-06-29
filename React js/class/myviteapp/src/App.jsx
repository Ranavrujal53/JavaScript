import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Wlocome to vite app</h1>
      <Home/>
    </>
  )
}

export default App
