import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slice/cartSlice";
import productsReducer from "./slice/productsSlice";

const rootReducer = {
  cart: cartReducer,
  products: productsReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
