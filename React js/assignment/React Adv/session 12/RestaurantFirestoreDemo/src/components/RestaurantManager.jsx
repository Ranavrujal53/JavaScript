import React, {
  useState,
  useEffect,
  useCallback,
} from "react";

import {
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../Firebase/db";

function RestaurantManager() {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");

  const [restaurants, setRestaurants] = useState([]);

  const [searchCuisine, setSearchCuisine] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Fetch Restaurants
  const fetchRestaurants = useCallback(async () => {
    try {
      setLoading(true);

      const querySnapshot = await getDocs(
        collection(db, "restaurants")
      );

      const restaurantList = querySnapshot.docs.map(
        (doc) => ({
          id: doc.id,
          ...doc.data(),
        })
      );

      setRestaurants(restaurantList);
      setError("");
    } catch (err) {
      setError("Failed to load restaurants.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  // Add Restaurant
  const handleSubmit = async (e) => {
    e.preventDefault();

    const restaurantName = name.trim();
    const restaurantCuisine = cuisine.trim();

    if (!restaurantName || !restaurantCuisine) {
      alert("Please enter all fields.");
      return;
    }

    try {
      setSaving(true);

      await addDoc(
        collection(db, "restaurants"),
        {
          name: restaurantName,
          cuisine: restaurantCuisine,
        }
      );

      setName("");
      setCuisine("");

      await fetchRestaurants();

      alert("Restaurant Added Successfully!");
    } catch (err) {
      setError("Failed to add restaurant.");
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  // Filter Restaurants
  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.cuisine
        ?.toLowerCase()
        .includes(searchCuisine.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Restaurant Manager
          </h1>

          <p className="mt-2 text-gray-500">
            Firebase Firestore CRUD Demo
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-5 rounded-lg bg-red-100 p-4 text-red-600">
            {error}
          </div>
        )}

        {/* Add Restaurant */}
        <div className="mb-8 rounded-2xl bg-white p-6 shadow-lg">
          <h2 className="mb-5 text-2xl font-bold">
            Add Restaurant
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid gap-4 md:grid-cols-3"
          >
            <input
              type="text"
              placeholder="Restaurant Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              required
              className="rounded-lg border px-4 py-3"
            />

            <input
              type="text"
              placeholder="Cuisine"
              value={cuisine}
              onChange={(e) =>
                setCuisine(e.target.value)
              }
              required
              className="rounded-lg border px-4 py-3"
            />

            <button
              type="submit"
              disabled={saving}
              className="rounded-lg bg-blue-600 px-4 py-3 text-white hover:bg-blue-700 disabled:bg-gray-400"
            >
              {saving
                ? "Adding..."
                : "Add Restaurant"}
            </button>
          </form>
        </div>

        {/* Filter */}
        <div className="mb-8 rounded-2xl bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold">
            Filter by Cuisine
          </h2>

          <input
            type="text"
            placeholder="Italian, Chinese, Indian..."
            value={searchCuisine}
            onChange={(e) =>
              setSearchCuisine(e.target.value)
            }
            className="w-full rounded-lg border px-4 py-3"
          />
        </div>

        {/* Restaurant List */}
        <div>
          <h2 className="mb-5 text-2xl font-bold">
            Restaurants
          </h2>

          {loading ? (
            <div className="rounded-xl bg-white p-8 text-center shadow">
              Loading Restaurants...
            </div>
          ) : filteredRestaurants.length === 0 ? (
            <div className="rounded-xl bg-white p-8 text-center shadow">
              No restaurants found.
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredRestaurants.map(
                (restaurant) => (
                  <div
                    key={restaurant.id}
                    className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <h3 className="text-xl font-bold">
                      {restaurant.name}
                    </h3>

                    <p className="mt-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                      {restaurant.cuisine}
                    </p>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RestaurantManager;