import { createSlice } from "@reduxjs/toolkit";

const getItemId = (item) => item?.card?.info?.id;

const getInitialCart = () => {
  try {
    const stored = localStorage.getItem("cart");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed && Array.isArray(parsed.items)) return { items: parsed.items };
    }
  } catch (err) {
    console.warn("Could not restore cart:", err.message);
  }
  return { items: [] };
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getInitialCart(),
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