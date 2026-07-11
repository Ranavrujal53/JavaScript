import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Like_count from './Component/Like_count'
import Searchbar from './Component/Searchbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Like Button & SearchBar</h1>
      <Like_count />
      <Searchbar />
    </>
  )
}

export default App
