import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/db.js";

function Logout() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogout = async () => {
    setIsLoading(true);
    setError("");

    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
      setError("Failed to sign out. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden px-4 py-12">
      {/* Background glow effects matching the prime design theme */}
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Logout Card */}
      <div className="relative w-full max-w-lg rounded-3xl bg-slate-900/80 backdrop-xl border border-slate-800 p-8 sm:p-10 shadow-2xl shadow-indigo-950/50 text-center">

        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-rose-500/10 border border-rose-500/20 text-3xl text-rose-400 shadow-inner">
          👋
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-extrabold tracking-tight text-white">
          Sign Out
        </h2>

        <p className="mt-3 text-sm text-slate-400">
          Are you sure you want to end your current session?
        </p>

        {/* Error Message */}
        {error && (
          <div className="mt-4 rounded-xl border border-rose-800 bg-rose-950/50 px-4 py-3 text-sm text-rose-400 text-left">
            <p>{error}</p>
          </div>
        )}

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          disabled={isLoading}
          className="mt-8 w-full rounded-xl bg-rose-600 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-rose-600/30 transition-all duration-200 hover:bg-rose-500 hover:shadow-rose-600/50 active:scale-[0.98] disabled:opacity-50"
        >
          {isLoading ? "Signing out..." : "Yes, Sign Out"}
        </button>

        {/* Cancel Button */}
        <button
          onClick={() => navigate("/userinfo")}
          disabled={isLoading}
          className="mt-3 w-full rounded-xl bg-slate-800/80 border border-slate-700 px-4 py-3.5 text-sm font-semibold text-slate-300 transition-all duration-200 hover:bg-slate-800 hover:text-white active:scale-[0.98]"
        >
          Cancel
        </button>

      </div>
    </div>
  );
}

export default Logout;