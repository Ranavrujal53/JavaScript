import React from "react";
import SocialLinks from "./SocialLinks";

function ProfileCard(props) {
  return (
    <div className="group relative z-10 w-96 overflow-hidden rounded-3xl border border-orange-500/30 bg-gradient-to-b from-orange-950/90 via-slate-950/95 to-slate-950 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-400/60 hover:shadow-2xl hover:shadow-orange-500/20">
      <div className="relative mx-auto h-32 w-32">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-600 via-amber-500 to-yellow-400 blur-sm opacity-80 transition-opacity group-hover:opacity-100" />
        <img
          src={props.profilePic}
          alt={props.name}
          className="relative h-full w-full rounded-full border-2 border-orange-950 object-cover shadow-inner"
        />
      </div>

      <h2 className="mt-5 text-3xl font-bold tracking-tight text-orange-50 transition-colors group-hover:text-orange-400">
        {props.name}
      </h2>

      <p className="mt-3 text-sm leading-relaxed text-orange-200/70">
        {props.bio}
      </p>

      <div className="mt-6 border-t border-orange-500/20 pt-4">
        <SocialLinks links={props.socialLinks} />
      </div>
    </div>
  );
}

export default ProfileCard;