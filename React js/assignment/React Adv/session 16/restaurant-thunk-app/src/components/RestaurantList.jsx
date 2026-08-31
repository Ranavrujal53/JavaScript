import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchRestaurants } from "../redux/restaurantSlice";

function RestaurantList() {
  const [city, setCity] = useState("");

  const dispatch = useDispatch();

  const { data, loading, error } = useSelector(
    (state) => state.restaurants
  );

  // Load all restaurants when page opens
  useEffect(() => {
    dispatch(fetchRestaurants(""));
  }, [dispatch]);

  // Search by city
  const handleSearch = () => {
    dispatch(fetchRestaurants(city));
  };

  // Show all restaurants
  const handleShowAll = () => {
    setCity("");
    dispatch(fetchRestaurants(""));
  };

  // Search when pressing Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 p-8 bg-black rounded-2xl shadow-2xl border border-gray-800 font-sans">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-white mb-6 text-center tracking-wide">
        Restaurant Finder
      </h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Enter city e.g. Ahmedabad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all mb-4"
      />

      {/* Buttons */}
      <div className="flex gap-3">

        <button
          onClick={handleSearch}
          disabled={loading}
          className="flex-1 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-900 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-all duration-200"
        >
          {loading ? "Searching..." : "Search"}
        </button>

        <button
          onClick={handleShowAll}
          disabled={loading}
          className="flex-1 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-all duration-200"
        >
          Show All
        </button>

      </div>

      <hr className="my-8 border-gray-800" />

      {/* Loading */}
      {loading && (
        <div className="text-center py-5">
          <p className="text-blue-400 font-medium animate-pulse">
            Loading restaurants...
          </p>
        </div>
      )}

      {/* Error */}
      {error && !loading && (
        <div className="text-center bg-red-950/30 py-4 px-3 rounded-lg border border-red-900/50">
          <p className="text-red-400 font-medium">
            Error: {error}
          </p>
        </div>
      )}

      {/* No result */}
      {!loading && !error && data.length === 0 && (
        <div className="text-center py-5">
          <p className="text-gray-500 italic">
            No restaurants found
            {city && ` in ${city}`}.
          </p>
        </div>
      )}

      {/* Restaurant data */}
      {!loading && !error && data.length > 0 && (
        <div>

          <p className="text-gray-400 mb-4">
            {city
              ? `Restaurants in ${city}`
              : "All Restaurants"}
          </p>

          <ul className="space-y-3">

            {data.map((restaurant, index) => {

              const restaurantCity =
                restaurant.city ||
                restaurant.location?.city ||
                "City not available";

              const restaurantLocation =
                restaurant.address ||
                restaurant.location?.address ||
                restaurant.location ||
                "Location not available";

              return (
                <li
                  key={restaurant.id || index}
                  className="px-5 py-4 bg-gray-900 border border-gray-800 rounded-lg text-gray-200 shadow-sm hover:border-blue-500 transition-colors duration-200"
                >

                  {/* Restaurant name */}
                  <h2 className="text-xl font-semibold text-white mb-2">
                    {restaurant.name || "Restaurant Name"}
                  </h2>

                  {/* City */}
                  <p className="text-gray-400 text-sm">
                    <span className="text-blue-400 font-medium">
                      City:
                    </span>{" "}
                    {restaurantCity}
                  </p>

                  {/* Location */}
                  <p className="text-gray-400 text-sm mt-1">
                    <span className="text-blue-400 font-medium">
                      Location:
                    </span>{" "}
                    {restaurantLocation}
                  </p>

                </li>
              );
            })}

          </ul>
        </div>
      )}

    </div>
  );
}

export default RestaurantList;