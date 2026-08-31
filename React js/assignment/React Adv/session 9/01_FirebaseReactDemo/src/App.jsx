import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
      <h1>Firebase React Demo</h1>
      <p>Firebase project initialized successfully.</p>
    </div>
    </>
  )
}

export default App
