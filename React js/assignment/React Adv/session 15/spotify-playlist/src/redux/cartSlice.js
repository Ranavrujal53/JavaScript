import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    // ADD PRODUCT
    addToCart: (state, action) => {
      state.push(action.payload);
    },

    // REMOVE PRODUCT
    removeFromCart: (state, action) => {
      return state.filter(
        (item) => item.id !== action.payload
      );
    },

    // CLEAR CART
    clearCart: () => {
      return [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export const cartReducer =
  cartSlice.reducer;