import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './style.css'
import LoginForm from './component/LoginForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginForm />
    </>
  )
}

export default App
