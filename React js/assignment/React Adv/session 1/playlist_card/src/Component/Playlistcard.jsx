import React from 'react';

function Playlistcard(props) {
  return (
   <div className="max-w-sm p-4 m-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-blue-600">
        Song: {props.song}
      </h3>

      <p className="mt-2 text-gray-700">
        Artist: {props.artist}
      </p>
    </div>
  );
}

export default Playlistcard;