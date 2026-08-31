import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './style.css'
import PlaylistManager from './components/PlaylistManager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PlaylistManager />
    </>
  )
}

export default App
