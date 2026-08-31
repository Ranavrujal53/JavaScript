import React from "react";
import UserProvider from "./context/UserContext";
import FavoritesProvider from "./context/FavoritesContext";
import RestaurantList from "./components/RestaurantList";
import './style.css'

function App() {
  return (
    <UserProvider>
      <FavoritesProvider>
        <RestaurantList />
      </FavoritesProvider>
    </UserProvider>
  );
}

export default App;