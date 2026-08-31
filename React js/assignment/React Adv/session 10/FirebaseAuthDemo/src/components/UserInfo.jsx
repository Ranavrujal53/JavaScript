import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../Firebase/db.js";

function UserInfo() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        try {
          // Fetch additional profile info saved in Firestore during signup
          const docRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserData(docSnap.data());
          }
        } catch (err) {
          console.error("Error fetching user data:", err);
        }
      } else {
        setUserData(null);
      }
      
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent"></div>
          <p className="text-sm text-slate-400">Loading session...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden px-4 py-12">
      {/* Background glow effects matching the prime design theme */}
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />

      {user ? (
        /* User Logged In */
        <div className="relative w-full max-w-lg rounded-3xl bg-slate-900/80 backdrop-xl border border-slate-800 p-8 sm:p-10 shadow-2xl shadow-indigo-950/50 text-center">

          {/* Profile Icon */}
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-3xl font-extrabold text-white shadow-lg shadow-indigo-500/30">
            {userData?.name ? userData.name.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
          </div>

          {/* Title */}
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            Welcome back{userData?.name ? `, ${userData.name}` : ""}!
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Your account is active and secure.
          </p>

          {/* User Information Details Card */}
          <div className="mt-8 space-y-4 rounded-2xl bg-slate-950/50 border border-slate-800 p-6 text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Full Name
              </p>
              <p className="mt-1 text-sm font-medium text-white">
                {userData?.name || "Not provided"}
              </p>
            </div>

            <div className="border-t border-slate-800/80 pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Email Address
              </p>
              <p className="mt-1 text-sm font-medium text-white break-all">
                {user.email}
              </p>
            </div>

            <div className="border-t border-slate-800/80 pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Phone Number
              </p>
              <p className="mt-1 text-sm font-medium text-white">
                {userData?.phone || "Not provided"}
              </p>
            </div>
          </div>

          {/* Status Indicator */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50 animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Session Active
            </span>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="mt-8 w-full rounded-xl bg-rose-600/20 border border-rose-800 px-4 py-3.5 text-sm font-semibold text-rose-400 transition-all duration-200 hover:bg-rose-600 hover:text-white hover:shadow-lg hover:shadow-rose-900/50 active:scale-[0.98]"
          >
            Sign Out
          </button>

        </div>
      ) : (
        /* No User */
        <div className="relative w-full max-w-lg rounded-3xl bg-slate-900/80 backdrop-xl border border-slate-800 p-8 sm:p-10 shadow-2xl shadow-indigo-950/50 text-center">

          {/* Icon */}
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-950 border border-slate-800 text-3xl shadow-inner">
            🔒
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            Authentication Required
          </h2>

          <p className="mt-3 text-sm text-slate-400">
            Please sign in to view your dashboard and account details.
          </p>

          {/* Login Button */}
          <button
            onClick={() => navigate("/login")}
            className="mt-8 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all duration-200 hover:from-indigo-500 hover:to-violet-500 hover:shadow-indigo-600/50 active:scale-[0.98]"
          >
            Sign In
          </button>

        </div>
      )}
    </div>
  );
}

export default UserInfo;