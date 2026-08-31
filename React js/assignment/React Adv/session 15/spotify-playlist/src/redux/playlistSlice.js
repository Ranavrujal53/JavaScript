import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Perfect",
    artist: "Ed Sheeran",
  },
  {
    id: 2,
    title: "Believer",
    artist: "Imagine Dragons",
  },
];

const playlistSlice = createSlice({
  name: "playlist",

  initialState,

  reducers: {
    // ADD SONG
    addSong: (state, action) => {
      state.push(action.payload);
    },

    // REMOVE SONG
    removeSong: (state, action) => {
      return state.filter(
        (song) => song.id !== action.payload
      );
    },
  },
});

export const {
  addSong,
  removeSong,
} = playlistSlice.actions;

export const playlistReducer =
  playlistSlice.reducer;