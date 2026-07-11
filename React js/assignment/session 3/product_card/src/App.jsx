import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Productcard from './Component/Productcard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Productcard productName="Laptop" price="50000" />
    <Productcard productName="Mobile" price="20000" />
    <Productcard productName="Headphones" price="3000" />
    </>
  );
}

export default App
