import React, { createContext, useMemo, useState } from "react";

export const MusicContext = createContext();

function MusicProvider({ children }) {
  const [playlist] = useState([
    "Believer",
    "Faded",
    "Perfect",
    "Shape of You",
  ]);

  const [volume, setVolume] = useState(50);

  const value = useMemo(() => {
    return {
      playlist,
      volume,
      setVolume,
    };
  }, [playlist, volume]);

  return (
    <MusicContext.Provider value={value}>
      {children}
    </MusicContext.Provider>
  );
}

export default MusicProvider;