import React from "react";

function SocialLinks(props) {

  // Optional theme prop
  const theme = props.theme || "dark";


  const containerClass =
    theme === "light"
      ? "bg-slate-900/80 border-purple-500/30"
      : "bg-orange-50/80 border-orange-300/40";


  const iconClass =
    theme === "light"
      ? "border-purple-500/30 bg-purple-950/60 text-purple-300 hover:bg-purple-500/20 hover:text-white hover:border-purple-400"
      : "border-orange-500/30 bg-orange-950/60 text-orange-400 hover:bg-orange-500/20 hover:text-orange-300 hover:border-orange-400";


  return (
    <div
      className={`mt-5 flex justify-center gap-4 rounded-xl border p-3 backdrop-blur-md ${containerClass}`}
    >

      {props.links.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          title={social.name}
          className={`flex h-11 w-11 items-center justify-center rounded-full border text-lg shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 ${iconClass}`}
        >
          {social.icon}
        </a>
      ))}

    </div>
  );
}

export default SocialLinks;