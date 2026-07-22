import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './style.css'
import TrendingSongs from './Component/TrendingSongs'
import IPLScoreFetcher from './Component/IPLScoreFetcher'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TrendingSongs />
      <IPLScoreFetcher />
    </>
  )
}

export default App
