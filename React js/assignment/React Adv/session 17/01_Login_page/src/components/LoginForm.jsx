import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submittedEmail, setSubmittedEmail] = useState("");
  const [submittedPassword, setSubmittedPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedEmail(email);
    setSubmittedPassword(password);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-slate-100 p-8">
        <h2 className="text-2xl font-bold text-slate-800 text-center mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors cursor-pointer"
          >
            Sign In
          </button>
        </form>

        {/* Submitted Values Section */}
        {submittedEmail && (
          <div className="mt-8 pt-6 border-t border-slate-100">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Submitted Values
            </h3>
            <div className="bg-slate-50 rounded-lg p-4 space-y-2 border border-slate-200 text-sm">
              <p className="text-slate-700">
                <strong className="font-medium text-slate-900">Email:</strong> {submittedEmail}
              </p>
              <p className="text-slate-700">
                <strong className="font-medium text-slate-900">Password:</strong> {submittedPassword}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginForm;