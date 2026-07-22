import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './style.css'
import RestaurantSearch from './Component/RestaurantSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RestaurantSearch />
    </>
  )
}

export default App
