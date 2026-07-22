import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './style.css'
import Cartsummary from './Component/Cartsummary'

function App() {
  const [count, setCount] = useState(0)

  const cartitems = [
        { name: "Laptop", price: 50000 },
        { name: "Mouse", price: 1000 },
        { name: "Keyboard", price: 2000 },
      ];

  const emptycart = [];

  return (
    <>
      <Cartsummary cartitems={cartitems} />
      <hr />
      <Cartsummary cartitems={emptycart} />
    </>
  )
}

export default App
