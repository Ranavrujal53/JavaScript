import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './style.css'
import Comparison from './components/Comparison'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Comparison />
    </>
  )
}

export default App
