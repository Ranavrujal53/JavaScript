import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './style.css'
import SpotifyPlaylists from './Component/SpotifyPlaylists'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SpotifyPlaylists />
    </>
  )
}

export default App
