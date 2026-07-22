import React, { useRef, useState } from "react";

function Feed_back() {
    const messageRef = useRef(null);

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !message.trim()) {
            alert("Please fill all fields");
            return;
        }

        alert(`Feedback Submitted!\nName: ${name}\nMessage: ${message}`);

        setName("");
        setMessage("");
    };

    const focusMessage = () => {
        messageRef.current.focus();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black flex items-center justify-center px-4">
            <div className="w-full max-w-xl bg-gray-900/90 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(34,211,238,0.2)]">

                <h2 className="text-4xl font-bold text-center text-white mb-2">
                    Feedback Form 💬
                </h2>

                <p className="text-center text-gray-400 mb-8">
                    We'd love to hear your feedback
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">

                    <div>
                        <label className="block text-cyan-400 font-medium mb-2">
                            Name
                        </label>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                        />
                    </div>

                    <div>
                        <label className="block text-cyan-400 font-medium mb-2">
                            Message
                        </label>

                        <textarea
                            ref={messageRef}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Enter your feedback"
                            rows="5"
                            className="w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                        />
                    </div>

                    <div className="flex gap-4">

                        <button
                            type="button"
                            onClick={focusMessage}
                            className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-xl transition-all duration-300"
                        >
                            Focus Message
                        </button>

                        <button
                            type="submit"
                            className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
                        >
                            Submit Feedback
                        </button>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default Feed_back