import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slice/cartSlice";
import productsReducer from "./slice/productsSlice";
import authReducer from "./slice/authSlice";

import authSaga from "./saga/authSaga";
import cartSaga from "./saga/cartSaga";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = {
  cart: cartReducer,
  products: productsReducer,
  auth: authReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(authSaga);
sagaMiddleware.run(cartSaga);

export default store;
