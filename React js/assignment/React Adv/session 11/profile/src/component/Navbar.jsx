import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/db.js";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl text-slate-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-sm font-bold text-white shadow-md shadow-indigo-500/25">
            I
          </div>
          <span>InstaFirebase</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-5">
          <Link
            to="/"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Home
          </Link>

          {user ? (
            <>
              <Link
                to="/profile"
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                Profile
              </Link>

              <span className="hidden md:inline-block rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1 text-xs font-medium text-slate-400">
                {user.displayName || user.email}
              </span>

              <button
                onClick={handleLogout}
                className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-semibold text-red-400 transition-all duration-200 hover:bg-red-500/20 active:scale-[0.98]"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <span className="hidden md:inline-block text-xs text-slate-400">
                Welcome, Guest
              </span>

              <Link
                to="/login"
                className="rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-2 text-xs font-semibold text-slate-300 transition-all duration-200 hover:bg-slate-800 hover:text-white active:scale-[0.98]"
              >
                Sign In
              </Link>

              <Link
                to="/signup"
                className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-200 hover:from-indigo-500 hover:to-violet-500 active:scale-[0.98]"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;