import { useState } from 'react'
import './style.css'
import Playlistcard from './Component/Playlistcard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Playlistcard song="Rama Dhun" artist="Hemant Chauhan" />
      <Playlistcard song="Vaishnav Jan To" artist="Lata Mangeshkar" />
      <Playlistcard song="Kesariya" artist="Arijit Singh" />
      <Playlistcard song="Apna Bana Le" artist="Arijit Singh" />
      <Playlistcard song="Maan Meri Jaan" artist="King" />
      <Playlistcard song="Channa Mereya" artist="Arijit Singh" />
      <Playlistcard song="Tera Ban Jaunga" artist="Akhil Sachdeva" />
      <Playlistcard song="Ranjha" artist="B Praak" />
      <Playlistcard song="Heeriye" artist="Arijit Singh" />
      <Playlistcard song="Shayad" artist="Arijit Singh" />
    </>
  )
}

export default App
