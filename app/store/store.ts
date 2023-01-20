import { configureStore } from "@reduxjs/toolkit";

import cart from "./slices/cart.slice";

const store = configureStore({
  reducer: {
    cart,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
