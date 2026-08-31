import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './style.css'
import ProductList from './Component/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductList />
    </>
  )
}

export default App
