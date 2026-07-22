import React, { useState } from "react";
import axios from "axios";

function Playlist() {
  const [playlistname, setPlaylistName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(""); // Clear previous messages

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          playlistname,
          description,
        }
      );

      console.log("Response:", response.data);
      setMessage("🎵 Playlist added successfully!");
      setPlaylistName("");
      setDescription("");
    } catch (error) {
      console.error("Error adding playlist:", error);
      setMessage("❌ Failed to add playlist. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4 font-sans relative overflow-hidden">
      
      {/* Decorative Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Form Card */}
      <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl p-8 relative z-10">
        <header className="mb-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30">
            <span className="text-3xl text-white">🎧</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-wide">
            Create Playlist
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Give your new mixtape a name and vibe.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Playlist Name Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-300 ml-1">
              Playlist Name
            </label>
            <input
              type="text"
              value={playlistname}
              onChange={(e) => setPlaylistName(e.target.value)}
              placeholder="e.g. Late Night Drives"
              required
              className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Description Textarea */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-300 ml-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What's the mood?"
              required
              rows="3"
              className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-purple-500/25 transition-all duration-300 transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
          >
            {isSubmitting ? "Saving..." : "Add Playlist"}
          </button>
        </form>

        {/* Status Message */}
        {message && (
          <div
            className={`mt-6 p-4 rounded-xl text-sm font-medium text-center transition-all ${
              message.includes("successfully")
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                : "bg-red-500/10 text-red-400 border border-red-500/20"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default Playlist;