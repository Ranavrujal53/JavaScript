import React from 'react';

function BackgroundEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-80" 
      />

      {/* Glowing Ambient Light Orbs */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-purple-600/20 rounded-full blur-[140px] animate-pulse-glow" />
      <div className="absolute top-[35%] -left-32 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] animate-float" />
      <div className="absolute top-[60%] -right-32 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[400px] bg-indigo-600/15 rounded-full blur-[160px]" />
    </div>
  );
}

export default BackgroundEffect;
