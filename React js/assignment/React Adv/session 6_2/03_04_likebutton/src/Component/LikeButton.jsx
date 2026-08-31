import React from "react";

function LikeButton({ likes, onLike }) {
  console.log("LikeButton Rendered");

  return (
    <div className="mt-4 flex items-center gap-3">
      <button
        onClick={onLike}
        className="rounded-lg bg-pink-500 px-4 py-2 text-white hover:bg-pink-600"
      >
        ❤️ Like
      </button>

      <span className="font-semibold">
        Likes: {likes}
      </span>
    </div>
  );
}

export default React.memo(LikeButton);