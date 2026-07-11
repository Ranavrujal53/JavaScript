import React, { useState } from 'react'

function Zomato() {
    const [rating, setRating] = useState(0);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-4"> 🍽️ Rate This Restaurant</h2>
                <div className="flex justify-center gap-2 text-4xl">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            onClick={() => setRating(star)}
                            className={`cursor-pointer transition-transform duration-200 hover:scale-125 ${star <= rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                                }`}
                        >
                            ★
                        </span>
                    ))}
                    <p className="mt-4 text-lg font-semibold text-gray-700">
                        Selected Rating: {rating} / 5
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Zomato
