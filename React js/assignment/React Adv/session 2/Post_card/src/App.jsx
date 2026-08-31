import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './style.css'
import PostCard from './Component/PostCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <PostCard  username="Rahul"
        image="https://picsum.photos/400/300"
        likes={120}/>
    </div>
    </>
  )
}

export default App
