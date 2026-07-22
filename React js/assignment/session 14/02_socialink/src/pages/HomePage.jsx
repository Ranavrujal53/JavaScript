import React from "react";
import ProfileCard from "../components/ProfileCard";

function HomePage() {
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
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0c0400] p-6 md:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.15)_0%,rgba(0,0,0,0)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ea580c1a_1px,transparent_1px),linear-gradient(to_bottom,#ea580c1a_1px,transparent_1px)] bg-[size:2rem_2rem]" />
      
      <div className="pointer-events-none absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-orange-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-1/4 -right-1/4 h-[800px] w-[800px] rounded-full bg-amber-500/15 blur-[120px]" />

      <div className="relative z-10 w-full max-w-4xl">
        <h1 className="mb-14 text-center text-6xl font-black tracking-tighter text-transparent bg-gradient-to-b from-white via-orange-100 to-orange-600 bg-clip-text drop-shadow-[0_0_20px_rgba(234,88,12,0.3)] sm:text-7xl">
          InstaBio
        </h1>

        <div className="flex justify-center">
          <ProfileCard
            name="Rahul Rana"
            profilePic="https://i.pravatar.cc/300?img=12"
            bio="Full Stack Developer | React & Django Learner | Building Creative Apps"
            socialLinks={socialLinks}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;