import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './style.css'
import Like_counter from './Component/Like_counter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Like_counter />
    </>
  )
}

export default App
