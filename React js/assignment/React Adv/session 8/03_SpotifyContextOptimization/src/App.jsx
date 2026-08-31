import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './style.css'
import MusicProvider from "./context/MusicContext";
import Playlist from "./components/Playlist";
import Player from "./components/Player";


function App() {
  return (
    <MusicProvider>
      <Playlist />
      <Player />
    </MusicProvider>
  );
}
export default App
