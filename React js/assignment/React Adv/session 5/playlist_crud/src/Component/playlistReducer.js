const playlistReducer = (state, action) => {
  switch (action.type) {

    // CREATE
    case "ADD_SONG":
      return [...state, action.payload];

    // DELETE
    case "REMOVE_SONG":
      return state.filter(
        (song) => song.id !== action.payload
      );

    // UPDATE
    case "EDIT_SONG":
      return state.map((song) =>
        song.id === action.payload.id
          ? {
              ...song,
              name: action.payload.name,
            }
          : song
      );

    default:
      return state;
  }
};

export default playlistReducer;