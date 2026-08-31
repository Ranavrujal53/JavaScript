import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function LikeButton() {
  const user = useContext(UserContext);
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex items-center justify-between">

      <div>
        <p className="text-sm text-gray-500">
          Posted by
        </p>

        <p className="font-semibold text-gray-800">
          {user.name}
        </p>

        <p className="text-sm text-gray-500">
          {user.email}
        </p>
      </div>

      <button
        onClick={() => setLiked(!liked)}
        className={`rounded-lg px-5 py-2.5 font-medium transition-all duration-200 ${
          liked
            ? "bg-red-500 text-white shadow-md"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>

    </div>
  );
}

export default LikeButton;