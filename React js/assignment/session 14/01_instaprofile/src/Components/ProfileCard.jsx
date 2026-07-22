import React from 'react'

function ProfileCard(props) {
  return (
    <div className="group relative z-10 w-80 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10">
      <div className="relative mx-auto h-32 w-32">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400 via-orange-500 to-indigo-500 blur-sm opacity-70 group-hover:opacity-100 transition-opacity" />
        <img
          src={props.profilePic}
          alt={props.name}
          className="relative h-full w-full rounded-full object-cover border-2 border-slate-900 shadow-inner"
        />
      </div>

      <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-100 transition-colors group-hover:text-amber-300">
        {props.name}
      </h2>

      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        {props.bio}
      </p>
    </div>
  )
}

export default ProfileCard;