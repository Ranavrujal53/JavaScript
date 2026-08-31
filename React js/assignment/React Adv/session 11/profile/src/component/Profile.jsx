import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/db.js";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 px-4 py-12 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Background ambient glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px] pointer-events-none" />

      <div className="relative w-full max-w-xl rounded-2xl border border-slate-800/80 bg-slate-900/60 p-8 text-center shadow-2xl backdrop-blur-xl">
        {loading ? (
          <div className="flex justify-center py-12">
            <svg className="animate-spin h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </div>
        ) : user ? (
          <>
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-3xl font-bold text-white shadow-lg shadow-indigo-500/25">
              {user.email?.charAt(0).toUpperCase()}
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-white">
              My Profile
            </h1>

            <div className="mt-6 space-y-4 rounded-xl border border-slate-800 bg-slate-950/50 p-6 text-left">
              <div>
                <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">
                  Account Name / Username
                </span>
                <p className="mt-1 text-sm font-medium text-slate-200">
                  {user.displayName || "Not provided"}
                </p>
              </div>

              <div className="border-t border-slate-800/80 pt-4">
                <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">
                  Email Address
                </span>
                <p className="mt-1 text-sm font-medium text-slate-200">
                  {user.email}
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="py-8">
            <p className="text-sm text-slate-400">Please sign in to view your profile details.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;