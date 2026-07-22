import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Orderstatus from './Component/Orderstatus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>Order Tracking</h1>

      <Orderstatus isDelivered={true} />
      <Orderstatus isDelivered={false} />
    </div >
    </>
  )
}

export default App
