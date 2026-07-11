import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css';
import UserGreeting from "./Component/UserGreeting ";
import UserGreetingClass from "./Component/UserGreetingClass";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome to React JSX!</h1>
    <UserGreeting user={{name : "Rana Vrujal"}} />

    <UserGreetingClass  user={{name : "Rana Vrujal"}} />
    </>
  )
}

export default App
