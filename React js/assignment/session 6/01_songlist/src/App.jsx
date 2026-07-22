import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Playlist from './Component/Playlist'
import Followlist from './Component/Followlist'

function App() {
  const [count, setCount] = useState(0)
  const songs = [
    { title: "Shri Ram Jai Ram Jai Jai Ram", artist: "Traditional Bhajan" },
    { title: "Ram Siya Ram", artist: "Sachet Tandon" },
    { title: "Mere Ghar Ram Aaye Hain", artist: "Jubin Nautiyal" },
    { title: "Raghupati Raghav Raja Ram", artist: "Traditional Bhajan" },
    { title: "Shree Ramchandra Kripalu Bhajman", artist: "Traditional Bhajan" },
    { title: "Jai Shri Ram", artist: "Hansraj Raghuwanshi" },
    { title: "Ram Naam Ke Heere Moti", artist: "Anup Jalota" },
    { title: "Ram Ayenge", artist: "Swati Mishra" },
  ];

  const followers = ["Rahul", "Amit", "Neha"];
  const emptyfollowers = [];

  return (

    <>
      <div>
        <Playlist songs={songs} />
        <Followlist followers={followers} />
        <Followlist followers={emptyfollowers} />
      </div>
    </>
  )
}

export default App
