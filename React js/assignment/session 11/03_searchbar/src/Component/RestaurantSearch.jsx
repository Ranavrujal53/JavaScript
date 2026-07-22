import React, { useEffect, useState } from "react";
import axios from "axios";

function RestaurantSearch() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setRestaurants(response.data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  // Gradient styles for each restaurant's icon avatar
  const avatarGradients = [
    "from-amber-400 to-orange-500 shadow-orange-500/20",
    "from-rose-400 to-pink-500 shadow-rose-500/20",
    "from-emerald-400 to-teal-500 shadow-teal-500/20",
    "from-violet-400 to-purple-500 shadow-purple-500/20",
    "from-cyan-400 to-blue-500 shadow-blue-500/20",
    "from-fuchsia-400 to-pink-600 shadow-fuchsia-500/20",
  ];

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-500 via-rose-500 to-purple-600 flex flex-col items-center pt-12 md:pt-16 px-4 font-sans selection:bg-rose-200 selection:text-rose-900 pb-12">
      <div className="w-full max-w-2xl">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex p-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg mb-3">
            <span className="text-3xl">🍕</span>
          </div>
          <h1 className="text-4xl font-extrabold text-white drop-shadow-sm tracking-tight">
            Foodie Finder
          </h1>
          <p className="text-white/90 mt-2 text-base font-medium">
            Discover local hotspots, top tastes, and favorite eateries.
          </p>
        </div>

        {/* Colorful Glass Search Bar */}
        <div className="relative mb-6 group">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-rose-500 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          
          <input
            type="text"
            placeholder="Search restaurants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/90 backdrop-blur-xl border border-white/60 rounded-2xl pl-12 pr-10 py-4 text-gray-900 placeholder-gray-500 shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-300 focus:bg-white transition-all text-base font-medium"
          />

          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full w-5 h-5 flex items-center justify-center transition-colors"
            >
              ✕
            </button>
          )}
        </div>

        {/* Glass Container for Results */}
        <div className="bg-white/85 backdrop-blur-xl border border-white/60 rounded-3xl overflow-hidden shadow-2xl p-2 sm:p-4">
          {isLoading ? (
            <div className="p-12 text-center text-gray-600 font-semibold flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-4 border-rose-500 border-t-transparent rounded-full animate-spin"></div>
              <span>Cooking up results...</span>
            </div>
          ) : filteredRestaurants.length > 0 ? (
            <ul className="space-y-2">
              {filteredRestaurants.map((restaurant, index) => (
                <li
                  key={restaurant.id}
                  className="group p-4 rounded-2xl hover:bg-gradient-to-r hover:from-rose-50 hover:to-amber-50 border border-transparent hover:border-rose-200/60 transition-all duration-300 cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    {/* Colorful Avatar Badge */}
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${
                        avatarGradients[index % avatarGradients.length]
                      } flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform duration-300`}
                    >
                      🍔
                    </div>

                    <div>
                      <h2 className="text-base font-bold text-gray-900 group-hover:text-rose-600 transition-colors">
                        {restaurant.name}
                      </h2>
                      <p className="text-sm text-gray-600 font-medium mt-0.5 flex flex-wrap items-center gap-2">
                        <span>📍 {restaurant.address.city}</span>
                        <span className="text-gray-300">•</span>
                        <span className="text-xs bg-amber-100/80 text-amber-900 font-bold px-2 py-0.5 rounded-full border border-amber-200">
                          {restaurant.company.name}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Rating Tag & Action Arrow */}
                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-flex bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-xl items-center gap-1 border border-emerald-200">
                      ⭐ 4.8
                    </span>
                    
                    <div className="w-9 h-9 rounded-xl bg-gray-100/80 group-hover:bg-rose-500 group-hover:text-white text-gray-400 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 shadow-sm">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-12 text-center">
              <span className="text-4xl mb-2 block">🍽️</span>
              <p className="text-gray-900 font-bold text-lg">No restaurants found</p>
              <p className="text-gray-500 text-sm mt-1">
                We couldn't find anything matching "<span className="font-semibold text-rose-500">{search}</span>".
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default RestaurantSearch;