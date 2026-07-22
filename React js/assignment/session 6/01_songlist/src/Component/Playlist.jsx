import React from 'react'

function Playlist({songs}) {
  return (
    <div>
      <h2>My Playlist</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            <strong>{song.title}</strong> - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Playlist
