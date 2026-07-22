import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './style.css'
import TrendingMovies from './Component/TrendingMovies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TrendingMovies />
    </>
  )
}

export default App
