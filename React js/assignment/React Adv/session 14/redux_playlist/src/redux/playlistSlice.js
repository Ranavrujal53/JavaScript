import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const playlistSlice = createSlice({
  name: "playlist",

  initialState,

  reducers: {
    // ADD SONG
    addSong: (state, action) => {
      state.push({
        id: Date.now(),
        name: action.payload,
      });
    },

    // REMOVE SONG
    removeSong: (state, action) => {
      return state.filter(
        (song) => song.id !== action.payload
      );
    },
  },
});

// Export actions
export const {
  addSong,
  removeSong,
} = playlistSlice.actions;

// Export reducer
export const playlistReducer = playlistSlice.reducer;