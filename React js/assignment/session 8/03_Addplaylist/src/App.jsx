import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './style.css'
import Play_list from './Component/Play_list'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Play_list />
    </>
  )
}

export default App
