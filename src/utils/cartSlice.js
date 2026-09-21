import { createSlice } from "@reduxjs/toolkit";

const getItemId = (item) => item?.card?.info?.id;

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const id = getItemId(action.payload);
      const existing = state.items.find((item) => getItemId(item) === id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const existing = state.items.find((item) => getItemId(item) === action.payload);
      if (!existing) return;
      if (existing.quantity > 1) {
        existing.quantity -= 1;
      } else {
        state.items.splice(state.items.indexOf(existing), 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;