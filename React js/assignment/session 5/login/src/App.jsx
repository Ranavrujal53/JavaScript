import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Lgin_page from './Component/Lgin_page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Lgin_page />
    </>
  )
}

export default App
