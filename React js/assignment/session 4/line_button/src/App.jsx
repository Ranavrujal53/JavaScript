import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Like_button from './Components/Like_button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Like Button</h1>
      <Like_button />
    </>
  )
}

export default App
