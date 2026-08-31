
import { createSlice } from "@reduxjs/toolkit";

// Initial Playlist Data
const initialState = {
  songs: [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
    },
    {
      id: 2,
      title: "Shape of You",
      artist: "Ed Sheeran",
    },
    {
      id: 3,
      title: "Believer",
      artist: "Imagine Dragons",
    },
  ],
};

// Create Playlist Slice
const playlistSlice = createSlice({
  name: "playlist",

  initialState,

  reducers: {
    // =========================
    // ADD SONG
    // =========================
    addSong: (state, action) => {
      state.songs.push({
        id: Date.now(),
        title: action.payload.title,
        artist: action.payload.artist,
      });
    },

    // =========================
    // EDIT SONG
    // =========================
    editSong: (state, action) => {
      const song = state.songs.find(
        (song) => song.id === action.payload.id
      );

      if (song) {
        song.title = action.payload.title;
        song.artist = action.payload.artist;
      }
    },

    // =========================
    // DELETE SONG
    // =========================
    deleteSong: (state, action) => {
      state.songs = state.songs.filter(
        (song) => song.id !== action.payload
      );
    },
  },
});

// Export Actions
export const {
  addSong,
  editSong,
  deleteSong,
} = playlistSlice.actions;

// Export Reducer
export default playlistSlice.reducer;
