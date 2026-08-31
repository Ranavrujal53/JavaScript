import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function PostCard() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full max-w-md rounded-2xl p-6 shadow-xl transition-all duration-300 ${
        theme === "light"
          ? "bg-white text-gray-900"
          : "bg-gray-800 text-white"
      }`}
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-xl">
          👤
        </div>

        <div>
          <h3 className="font-bold">Rahul</h3>
          <p className="text-sm text-gray-500">
            @rahul_dev
          </p>
        </div>
      </div>

      <div
        className={`mb-5 rounded-xl p-10 text-center text-6xl ${
          theme === "light"
            ? "bg-gray-100"
            : "bg-gray-700"
        }`}
      >
        📸
      </div>

      <h2 className="mb-2 text-xl font-bold">
        My First Instagram Post
      </h2>

      <p
        className={`mb-5 ${
          theme === "light"
            ? "text-gray-600"
            : "text-gray-300"
        }`}
      >
        This PostCard gets the theme directly from
        ThemeContext without prop drilling.
      </p>

      <div className="flex gap-3">
        <button className="rounded-lg bg-pink-500 px-4 py-2 text-white hover:bg-pink-600">
          ❤️ Like
        </button>

        <button className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          💬 Comment
        </button>
      </div>
    </div>
  );
}

export default PostCard;