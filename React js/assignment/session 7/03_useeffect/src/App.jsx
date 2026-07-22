import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './style.css'
import MovieSuggestions from './Component/MovieSuggestions'
import Userlist from './Component/Userlist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MovieSuggestions />
      <Userlist />
    </>
  )
}

export default App
