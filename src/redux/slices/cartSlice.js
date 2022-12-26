import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const cartSlice = createSlice({
  name: "cart",

  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state[itemIndex].qty += 1;
      } else {
        const temp = { ...action.payload, qty: 1 };

        state.push(temp);
      }
    },

    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
