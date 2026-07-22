import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Component/HomePage";
import DealsPage from "./Component/DealsPage";
import CartPage from "./Component/CartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/deals" element={<DealsPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default App;