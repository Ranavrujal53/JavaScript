import React from "react";
import ProfileCard from "./components/ProfileCard";
import HomePage from "./pages/HomePage";

function App() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: "📸",
      url: "https://instagram.com"
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://linkedin.com"
    },
    {
      name: "GitHub",
      icon: "🐙",
      url: "https://github.com"
    }
  ];

  return (
    <HomePage />

    // <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-emerald-950/90 p-6">
    //   <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
    //   <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-green-600/20 blur-3xl" />
    //   <div className="pointer-events-none absolute -bottom-20 left-1/3 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl" />

    //   <div className="relative z-10">
    //     <ProfileCard
    //       name="Rahul Rana"
    //       profilePic="https://i.pravatar.cc/300?img=12"
    //       bio="Full Stack Developer | React & Django Learner"
    //       socialLinks={socialLinks}
    //     />
    //   </div>
    // </div>


    

    
  );
}

export default App;