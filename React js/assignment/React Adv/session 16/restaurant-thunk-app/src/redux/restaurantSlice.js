import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch restaurants according to city
export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",

  async (city = "") => {
    if (!city.trim()) {
      throw new Error("Please enter a city name");
    }

    // Overpass API query
    const query = `
      [out:json];
      area["name"="${city.trim()}"]["boundary"="administrative"]->.searchArea;
      (
        node["amenity"="restaurant"](area.searchArea);
        way["amenity"="restaurant"](area.searchArea);
        relation["amenity"="restaurant"](area.searchArea);
      );
      out center tags;
    `;

    const response = await fetch(
      "https://overpass-api.de/api/interpreter",
      {
        method: "POST",
        body: query,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch restaurant data");
    }

    const result = await response.json();

    console.log("API DATA:", result);

    // Convert API data into simple restaurant objects
    const restaurants = result.elements.map((item) => {
      const tags = item.tags || {};

      return {
        id: item.id,

        name: tags.name || "Restaurant Name Not Available",

        cuisine: tags.cuisine || "Not Available",

        phone:
          tags.phone ||
          tags["contact:phone"] ||
          "Not Available",

        website:
          tags.website ||
          tags["contact:website"] ||
          "Not Available",

        address:
          tags["addr:street"] ||
          "Address Not Available",

        city:
          tags["addr:city"] ||
          city,

        postcode:
          tags["addr:postcode"] ||
          "Not Available",

        latitude:
          item.lat ||
          item.center?.lat,

        longitude:
          item.lon ||
          item.center?.lon,
      };
    });

    return restaurants;
  }
);

const restaurantSlice = createSlice({
  name: "restaurants",

  initialState: {
    data: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {

    // Loading
    builder.addCase(
      fetchRestaurants.pending,
      (state) => {
        state.loading = true;
        state.error = null;
      }
    );

    // Success
    builder.addCase(
      fetchRestaurants.fulfilled,
      (state, action) => {
        state.loading = false;
        state.data = action.payload;
      }
    );

    // Error
    builder.addCase(
      fetchRestaurants.rejected,
      (state, action) => {
        state.loading = false;

        state.error =
          action.error.message ||
          "Something went wrong";
      }
    );
  },
});

export default restaurantSlice.reducer;