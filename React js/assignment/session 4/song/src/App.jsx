import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Song_count from './Component/SongVote'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Song_count />
      </div>
    </>
  )
}

export default App
