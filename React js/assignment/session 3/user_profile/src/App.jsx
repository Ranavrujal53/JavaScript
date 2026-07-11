import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import User_profile from './Component/User_profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >

        <User_profile
          username="Narendra Modi"
          followers="400M"
          profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0FKhz_jeRVUANgYKpRBliYOrcXHdD0CLHNXxGAsghyYAv32JrwtdaDNI&s=10"
        />

        <User_profile
          username="Amit Shah"
          followers="190M"
          profilePic="https://www.orissapost.com/wp-content/uploads/2020/01/amit-shah-3.jpg"
        />

        <User_profile
          username="Rohit Sharma"
          followers="120M"
          profilePic="https://i.pinimg.com/236x/79/70/ea/7970eae864b33f8b71296dd71ce6b56e.jpg"
        />
        <User_profile
          username="virat_kohli"
          followers="270M"
          profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8P3Qbb6ycWAZ11wr6tOFGRthHUtJvGks_li__OcMC2TVuQ-VSjd08l-Cg&s=10"
        />

        <User_profile
          username="cristiano"
          followers="0"
          profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbl83C4JYNhQmFRxqXk891wNIL_ymrihILVuiwrf-hLSxpOhb_HOu2E9lg&s=10"
        />

        <User_profile
          username="mukeshambani304"
          followers="327K"
          profilePic="https://imageio.forbes.com/specials-images/imageserve/5c7d7829a7ea434b351ba0b6/0x0.jpg?format=jpg&crop=1837,1839,x206,y250,safe&height=416&width=416&fit=bounds"
        />


      </div>
    </>
  )
}

export default App
