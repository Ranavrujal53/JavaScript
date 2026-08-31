import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { FavoritesContext } from "../context/FavoritesContext";

function RestaurantList() {
  const user = useContext(UserContext);
  const { favorites, dispatch } = useContext(FavoritesContext);

  const restaurants = [
    {
      id: 101,
      name: "Domino's Pizza",
      category: "Pizza, Fast Food",
      rating: 4.4,
    },
    {
      id: 102,
      name: "McDonald's",
      category: "Burgers, Fast Food",
      rating: 4.2,
    },
    {
      id: 103,
      name: "Spice Garden",
      category: "North Indian, Chinese",
      rating: 4.5,
    },
    {
      id: 104,
      name: "The Food Factory",
      category: "Gujarati, Punjabi",
      rating: 4.3,
    },
  ];

  const handleFavorite = (restaurantId) => {
    if (favorites.includes(restaurantId)) {
      dispatch({
        type: "REMOVE_FAVORITE",
        payload: restaurantId,
      });
    } else {
      dispatch({
        type: "ADD_FAVORITE",
        payload: restaurantId,
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-800 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-800 to-slate-900 p-6 md:p-10">
      {/* Header Section */}
      <div className="mx-auto mb-10 max-w-5xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Welcome, <span className="text-blue-400">{user?.name || "Guest"}</span> 👋
        </h1>
        <p className="mt-3 text-lg font-medium text-slate-300">
          Find and save your top dining spots.
        </p>
      </div>

      {/* Restaurant Grid */}
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        {restaurants.map((restaurant) => {
          const isFavorite = favorites.includes(restaurant.id);

          return (
            <div
              key={restaurant.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-slate-700/40 p-6 shadow-xl backdrop-blur-md ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-700/60 hover:shadow-blue-900/30"
            >
              <div>
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold tracking-wide text-white">
                      {restaurant.name}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-slate-300">
                      {restaurant.category}
                    </p>
                  </div>

                  {/* Rating Badge */}
                  <span className="flex items-center gap-1.5 rounded-full bg-slate-800/80 px-3 py-1.5 text-sm font-semibold text-blue-300 ring-1 ring-slate-600 shadow-inner">
                    ⭐ {restaurant.rating}
                  </span>
                </div>
              </div>

              {/* Dynamic Action Button */}
              <button
                onClick={() => handleFavorite(restaurant.id)}
                className={`mt-6 w-full rounded-xl px-4 py-3.5 font-semibold tracking-wide transition-all duration-300 ${
                  isFavorite
                    ? "bg-slate-600/50 text-slate-200 ring-1 ring-slate-500 hover:bg-slate-600 hover:text-white"
                    : "bg-blue-600 text-white shadow-lg shadow-blue-900/40 ring-1 ring-blue-500/50 hover:bg-blue-500 hover:shadow-blue-500/25"
                }`}
              >
                {isFavorite ? "Remove from Favorites" : "🤍 Add to Favorites"}
              </button>
            </div>
          );
        })}
      </div>

      {/* Favorites Dashboard */}
      <div className="mx-auto mt-12 max-w-5xl rounded-3xl bg-slate-700/30 p-8 shadow-xl backdrop-blur-md ring-1 ring-white/10">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          ❤️ My Favorite Restaurants
        </h2>

        {favorites.length === 0 ? (
          <p className="mt-4 text-slate-300">
            You haven't saved any restaurants yet. Click "Add to Favorites" above to start building your list!
          </p>
        ) : (
          <div className="mt-6">
            <div className="flex flex-col gap-3">
              {favorites.map((id) => {
                // Find the actual restaurant object to display its name
                const favRestaurant = restaurants.find((r) => r.id === id);
                
                return (
                  <div
                    key={id}
                    className="flex items-center justify-between rounded-2xl bg-slate-800/50 px-5 py-4 ring-1 ring-slate-600/50 transition-all hover:bg-slate-700/50"
                  >
                    <div>
                      <h3 className="font-bold text-slate-100">
                        {favRestaurant?.name || "Unknown Restaurant"}
                      </h3>
                      <p className="text-sm text-slate-400">
                        {favRestaurant?.category}
                      </p>
                    </div>
                    <button
                      onClick={() => handleFavorite(id)}
                      className="text-sm font-medium text-slate-400 transition-colors hover:text-rose-400"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RestaurantList;