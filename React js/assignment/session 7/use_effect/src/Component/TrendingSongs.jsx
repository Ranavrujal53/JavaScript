import React, { useEffect } from 'react'

function TrendingSongs() {
    useEffect(() => {
        console.log("Component Mounted");

    }, []);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            <div className="bg-white shadow-2xl rounded-2xl p-8 text-center w-96">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Trending Songs 🎵
                </h2>

                <p className="text-gray-600">
                    Discover the most popular songs right now!
                </p>
            </div>
        </div>
    )
}

export default TrendingSongs
