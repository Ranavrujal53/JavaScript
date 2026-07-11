import React, { useState } from "react";

function SongVote() {
  const [votes, setVotes] = useState(0);

  const upVote = () => {
    setVotes(votes + 1);
  };

  const downVote = () => {
    if (votes > 0) {
      setVotes(votes - 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-96 bg-zinc-900 rounded-2xl shadow-2xl p-8 text-center border border-zinc-800">
        
        <h2 className="text-3xl font-bold text-green-500 mb-2">
          🎵 Shape of You
        </h2>

        <p className="text-zinc-400 mb-6">
          Spotify Playlist Voting
        </p>

        <div className="text-5xl font-bold text-white mb-6">
          {votes}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={upVote}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
          >
            ⬆ Upvote
          </button>

          <button
            onClick={downVote}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
          >
            ⬇ Downvote
          </button>
        </div>

        <p className="text-zinc-500 text-sm mt-6">
          Vote count cannot go below 0
        </p>
      </div>
    </div>
  );
}

export default SongVote;