import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './style.css'
import ProfileCard from "./components/ProfileCard";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 p-6">
        {/* Ambient Glow Effects */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-1/3 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

        {/* Profile Cards Container */}
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-6">
          <ProfileCard
            name="Rahul"
            profilePic="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202405/pm-modi-smiling-064650291-16x9_0.jpeg?VersionId=jB9Lbi.Ok_FF1q5NWLNuMtK9MVa7EfRp&size=690:388"
            bio="Full Stack Developer | React & Django Learner"
          />

          <ProfileCard
            name="John"
            profilePic="https://indianmemetemplates.com/wp-content/uploads/amit-shah-looking-angrily.jpg"
            bio="UI Designer | Creative Thinker"
          />

          <ProfileCard
            name="Emma"
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYxR5gg3b22lFEXfpioohBxMdYMFd0NhH0mKuYhRUnZEZni-1okF3mI745&s=10"
            bio="Frontend Developer | JavaScript Lover"
          />
        </div>
      </div>
    </>
  )
}

export default App