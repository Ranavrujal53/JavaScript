import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/db.js";

function Logout() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 px-4 py-12 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Background ambient glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px] pointer-events-none" />

      <div className="relative w-full max-w-md rounded-2xl border border-slate-800/80 bg-slate-900/60 p-8 text-center shadow-2xl backdrop-blur-xl">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-red-600 to-rose-500 text-xl font-bold text-white shadow-lg shadow-red-500/25">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-white">
          Sign out
        </h1>

        <p className="mt-1.5 mb-8 text-sm text-slate-400">
          Are you sure you want to log out of your account?
        </p>

        <div className="flex gap-3">
          <button
            onClick={() => navigate(-1)}
            disabled={loading}
            className="w-1/2 rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3 text-sm font-semibold text-slate-300 transition-all duration-200 hover:bg-slate-800 hover:text-white active:scale-[0.98]"
          >
            Cancel
          </button>

          <button
            onClick={handleLogout}
            disabled={loading}
            className="flex w-1/2 items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition-all duration-200 hover:from-red-500 hover:to-rose-500 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            ) : null}
            {loading ? "Signing out..." : "Sign Out"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logout;