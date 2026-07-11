import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-4 font-sans overflow-hidden">
      
      {/* Background ambient light glows */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-[120px]" />

      {/* Login Card */}
      <div className="w-full max-w-md rounded-2xl border border-slate-800/80 bg-slate-900/50 p-8 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-blue-500/20">
        <h2 className="mb-2 text-center text-3xl font-extrabold tracking-tight text-white">
          Sign In
        </h2>
        <p className="mb-8 text-center text-sm text-slate-400">
          Enter your details below to access your account
        </p>

        <form onSubmit={submit} className="space-y-6">
          {/* Username Field */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
              Username
            </label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Enter your username"
              className="w-full rounded-xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-white placeholder-slate-600 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
              required
            />
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
              Password
            </label>
            <input 
              type="password" 
              id="password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-white placeholder-slate-600 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
              required
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 hover:from-blue-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950 transition-all duration-300 active:scale-[0.98]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;