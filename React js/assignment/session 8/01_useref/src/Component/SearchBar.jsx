import React, { useEffect, useRef, useState } from 'react'

function SearchBar() {
    const inputref = useRef(null);
    const [search, setsearch] = useState("");
    const [history, sethistory] = useState([]);

    useEffect(() => {
        inputref.current.focus();
    }, []);

    const handlesearch = () => {
        const trimsearch = search.trim();

        if (!trimsearch) {
            alert("Please enter something to search");
            return;
        }

        sethistory((prev) => [trimsearch, ...prev]);
        setsearch("");
        inputref.current.focus();
    };

    const clearhistory = () => {
        sethistory([]);
        inputref.current.focus();
    }

    return (
        <div>
            <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 flex justify-center items-center p-5">
                <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-3xl p-8 w-full max-w-xl border border-white/30">
                    
                    <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-6 tracking-wide">
                        Search Bar Using useRef
                    </h1>

                    <div className="flex gap-3">
                        <input
                            ref={inputref}
                            type="text"
                            placeholder="Search here..."
                            value={search}
                            onChange={(e) => setsearch(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handlesearch()}
                            className="flex-1 border-2 border-gray-200 rounded-xl px-4 py-3 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition-all duration-300"
                        />

                        <button
                            onClick={handlesearch}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Search
                        </button>
                    </div>

                    {history.length > 0 && (
                        <div className="mt-6">
                            <div className="flex justify-between items-center mb-3">
                                <h2 className="text-2xl font-bold text-gray-800">
                                    Search History
                                </h2>

                                <button
                                    onClick={clearhistory}
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                                >
                                    Clear
                                </button>
                            </div>

                            <ul className="space-y-3 mt-3">
                                {history.map((item, index) => (
                                    <li
                                        key={index}
                                        className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:translate-x-1 transition-all duration-300 font-medium text-gray-700"
                                    >
                                        🔍 {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchBar