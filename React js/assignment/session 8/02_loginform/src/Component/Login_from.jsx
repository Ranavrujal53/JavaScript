import React, { useRef, useState } from 'react'

function Login_from() {
    const usernameref = useRef(null);

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    const handlelogin = () => {
        if(username.trim() === "" || password.trim() === ""){
            alert("Please enter Username and Password");
            return;
        }

        alert(`Welcome ${username}`);

        setusername("");
        setpassword("");

        usernameref.current.focus();
    };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden p-4 sm:p-8">
        
        {/* Core Ambient Light: Seamless deep blue fading into pitch black */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,#1e3a8a_0%,transparent_50%)] opacity-80"></div>

        {/* Card Wrapper with 1px Gradient Border Effect */}
        <div className="relative w-full max-w-md rounded-[1.5rem] p-[1px] bg-gradient-to-b from-blue-500/40 via-blue-900/10 to-transparent shadow-[0_0_50px_-15px_rgba(37,99,235,0.4)]">
            
            {/* Main Inner Card */}
            <div className="bg-black/95 backdrop-blur-3xl rounded-[calc(1.5rem-1px)] p-8 sm:p-10 space-y-8">
                
                {/* Header */}
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-white tracking-tight">
                        Sign In
                    </h2>
                    <p className="text-sm text-blue-200/60 font-medium">
                        Enter your credentials to continue
                    </p>
                </div>

                {/* Form Elements */}
                <div className="space-y-5">
                    <div className="space-y-2">
                        <label className="block text-[11px] font-bold tracking-widest text-blue-500 uppercase">
                            Username
                        </label>
                        <input 
                            type="text" 
                            ref={usernameref} 
                            value={username} 
                            onChange={(e) => setusername(e.target.value)} 
                            placeholder="Enter username" 
                            className="w-full px-4 py-3.5 bg-white/[0.03] text-white rounded-xl border border-white/10 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:bg-blue-950/20 transition-all duration-300 placeholder-white/20 text-sm"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-[11px] font-bold tracking-widest text-blue-500 uppercase">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full px-4 py-3.5 bg-white/[0.03] text-white rounded-xl border border-white/10 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:bg-blue-950/20 transition-all duration-300 placeholder-white/20 text-sm tracking-widest"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                    <button 
                        onClick={handlelogin}
                        className="relative w-full py-3.5 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-[0_0_20px_-5px_rgba(37,99,235,0.6)] hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.8)] overflow-hidden group"
                    >
                        {/* Button Shimmer Effect */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
                        <span className="relative">Login</span>
                    </button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Login_from