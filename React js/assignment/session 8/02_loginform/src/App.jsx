import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './style.css'
import Login_from from './Component/Login_from'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login_from />
    </>
  )
}

export default App
