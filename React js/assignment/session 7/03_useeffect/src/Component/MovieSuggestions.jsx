import React, { useEffect, useState } from 'react'

function MovieSuggestions() {
    const [movies, setmovies] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setmovies(data);
                setloading(false);
            })
            .catch((error) => {
                console.error("Error Fetching movies", error);
                setloading(false);

            });

    }, []);
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 flex items-center justify-center p-6">
            <div className="w-full max-w-2xl bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-white">
                <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
                    🎬 Movie Suggestions
                </h2>

                {loading ? (
                    <p className="text-center text-gray-600 text-xl font-medium animate-pulse">
                        Loading movies...
                    </p>
                ) : (
                    <ul className="space-y-4">
                        {movies.map((movie) => (
                            <li
                                key={movie.id}
                                className="p-4 bg-white shadow-md rounded-xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 hover:bg-blue-50 transition-all duration-300 cursor-pointer"
                            >
                                <span className="text-lg font-semibold text-gray-800">
                                    {movie.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )

}

export default MovieSuggestions