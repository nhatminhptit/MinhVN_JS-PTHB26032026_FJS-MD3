import { configureStore } from "@reduxjs/toolkit";
// Import API mà ông vừa tạo
import { productApi } from "./apis/product.api";

const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
