import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css';
import MiniProfile from './Component/MiniProfile';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MiniProfile user={{name:"Rana Vrujal", status:"Learning React.js and building awesome projects 🚀"}}/>
    </>
  );
}

export default App
