import React, {
  createContext,
  useReducer,
} from "react";

export const FavoritesContext = createContext();

const initialState = [];

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      if (state.includes(action.payload)) {
        return state;
      }

      return [...state, action.payload];

    case "REMOVE_FAVORITE":
      return state.filter(
        (id) => id !== action.payload
      );

    default:
      return state;
  }
};

function FavoritesProvider({ children }) {
  const [favorites, dispatch] = useReducer(
    favoritesReducer,
    initialState
  );

  return (
    <FavoritesContext.Provider
      value={{ favorites, dispatch }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesProvider;