import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Spotify_style from './Component/Spotify_style'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Spotify_style />
    </>
  )
}

export default App
