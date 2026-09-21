import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

appStore.subscribe(() => {
  try {
    localStorage.setItem("cart", JSON.stringify(appStore.getState().cart));
  } catch (err) {
    console.warn("Could not save cart:", err.message);
  }
});

export default appStore;
