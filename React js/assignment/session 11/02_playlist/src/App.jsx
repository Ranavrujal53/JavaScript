import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './style.css'
import Playlist from './Component/Playlist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <Playlist />
    </div>
    </>
  )
}

export default App
