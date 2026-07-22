import React, { useState } from "react";
import axios from "axios";

function CommentForm() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/comments",
        {
          username,
          comment,
        }
      );

      setResponseData(response.data);
      setUsername("");
      setComment("");
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-3">🌈</div>
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
            Add Comment
          </h2>
          <p className="text-gray-500 mt-2">
            Share your thoughts with everyone
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block font-semibold text-purple-700 mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
              className="w-full p-4 rounded-xl border-2 border-pink-300 focus:border-pink-500 focus:outline-none bg-pink-50"
            />
          </div>

          <div>
            <label className="block font-semibold text-indigo-700 mb-2">
              Comment
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your comment..."
              rows="4"
              required
              className="w-full p-4 rounded-xl border-2 border-indigo-300 focus:border-indigo-500 focus:outline-none bg-indigo-50 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl text-white font-bold text-lg bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 hover:scale-105 transition duration-300 shadow-lg"
          >
            🚀 Submit Comment
          </button>
        </form>

        {responseData && (
          <div className="mt-8 bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-300 rounded-2xl p-5">
            <h3 className="text-2xl font-bold text-green-700 mb-3">
              ✅ Comment Submitted
            </h3>

            <p className="text-gray-700">
              <strong>ID:</strong> {responseData.id}
            </p>

            <p className="text-gray-700">
              <strong>Username:</strong> {responseData.username}
            </p>

            <p className="text-gray-700">
              <strong>Comment:</strong> {responseData.comment}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CommentForm;