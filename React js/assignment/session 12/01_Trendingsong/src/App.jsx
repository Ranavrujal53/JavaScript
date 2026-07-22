import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './style.css'
import TrendingSongs from './Component/TrendingSongs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TrendingSongs />
    </>
  )
}

export default App
