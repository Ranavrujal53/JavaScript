import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './style.css'
import SearchBar from './Component/SearchBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar />
    </>
  )
}

export default App
