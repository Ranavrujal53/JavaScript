import React from "react";
import useLikeButton from "../Custome_hook/useLikeButton";

const PostCard = ({ image, username, likes }) => {
  const { liked, likeCount, toggleLike } = useLikeButton(likes);

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      
      <img
        src={image}
        alt="Post"
        className="w-full h-72 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold">{username}</h2>

        <button
          onClick={toggleLike}
          className="mt-3 text-3xl transition-transform hover:scale-110"
        >
          {liked ? "❤️" : "🤍"}
        </button>

        <p className="mt-2 text-gray-600 font-medium">
          {likeCount} likes
        </p>
      </div>
    </div>
  );
};

export default PostCard;