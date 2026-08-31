import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setIsLoggedIn(true);
    navigate("/playlist");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    setError("");
    navigate("/login");
  };

  // Logged-in Card View
  if (isLoggedIn) {
    return (
      <div className="w-full max-w-[420px] font-sans antialiased">
        <div className="relative overflow-hidden rounded-2xl border border-blue-900/50 bg-black p-8 text-center shadow-[0_0_50px_-10px_rgba(37,99,235,0.3)]">
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute -top-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl"></div>

          {/* Success Badge */}
          <div className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-950/40 shadow-[0_0_30px_rgba(37,99,235,0.2)] backdrop-blur-md">
            <span className="text-3xl text-blue-400">✓</span>
          </div>

          <h2 className="relative z-10 text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-400">
            Welcome Back!
          </h2>

          <p className="relative z-10 mt-1.5 text-xs text-blue-200/60">
            You are successfully logged in as
          </p>

          <p className="relative z-10 mt-1 break-all text-sm font-semibold text-blue-400">
            {email}
          </p>

          <div className="relative z-10 mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => navigate("/playlist")}
              className="group relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 px-4 py-2.5 text-xs font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] active:scale-[0.98]"
            >
              <span>View Playlist</span>
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-xs font-bold text-red-400 transition-all duration-200 hover:border-red-500/50 hover:bg-red-500/20 hover:text-red-300 active:scale-[0.98]"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Standard Login View
  return (
    <div className="w-full max-w-[420px] font-sans antialiased">
      {/* Brand Header */}
      <div className="mb-5 text-center">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-800/40 bg-blue-950/40 shadow-inner backdrop-blur-md">
          <span className="text-2xl" role="img" aria-label="music note">
            🎵
          </span>
        </div>

        <h1 className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-400">
          Playlist Manager
        </h1>
      </div>

      {/* Main Login Card */}
      <div className="relative overflow-hidden rounded-2xl border border-blue-900/50 bg-black p-8 shadow-[0_0_50px_-10px_rgba(37,99,235,0.3)]">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-600/15 blur-3xl"></div>

        <div className="relative z-10 mb-5">
          <h2 className="text-xl font-bold text-white">Welcome back</h2>
          <p className="mt-1 text-xs text-blue-200/60">
            Enter your credentials to continue
          </p>
        </div>

        {/* Validation Error Alert */}
        {error && (
          <div className="relative z-10 mb-4 flex items-center gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-xs text-red-400">
            <span>⚠</span>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
          {/* Email Input */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-[11px] font-bold uppercase tracking-wider text-blue-300/70"
            >
              Email Address
            </label>

            <div className="relative">
              <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-300/40">
                ✉
              </span>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className="w-full rounded-xl border border-blue-900/40 bg-black/50 py-2.5 pl-10 pr-4 text-sm text-white placeholder-blue-200/30 transition-all duration-300 focus:border-blue-500 focus:bg-blue-950/20 focus:outline-none focus:ring-4 focus:ring-blue-500/10"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-[11px] font-bold uppercase tracking-wider text-blue-300/70"
              >
                Password
              </label>

              <span className="text-[10px] text-blue-300/40">
                Min. 6 characters
              </span>
            </div>

            <div className="relative">
              <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-300/40">
                🔒
              </span>

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                className="w-full rounded-xl border border-blue-900/40 bg-black/50 py-2.5 pl-10 pr-10 text-sm text-white placeholder-blue-200/30 transition-all duration-300 focus:border-blue-500 focus:bg-blue-950/20 focus:outline-none focus:ring-4 focus:ring-blue-500/10"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-300/40 hover:text-blue-200"
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
          </div>

          {/* Remember / Forgot */}
          <div className="flex items-center justify-between pt-1 text-xs">
            <label className="flex cursor-pointer items-center gap-2 text-blue-200/60 transition-colors hover:text-white">
              <input
                type="checkbox"
                className="h-3.5 w-3.5 rounded border-blue-900/60 bg-black/50 text-blue-600 focus:ring-blue-500/20 focus:ring-offset-0"
              />
              Remember me
            </label>

            <button
              type="button"
              className="text-blue-400 transition-colors hover:text-blue-300 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Login Submit Button */}
          <button
            type="submit"
            className="group relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 px-4 py-3 text-sm font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] focus:outline-none active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <span>Login</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;