import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Cart_items from './Component/Cart_items'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Flipkart cart</h1>
      <Cart_items />
    </>
  )
}

export default App
