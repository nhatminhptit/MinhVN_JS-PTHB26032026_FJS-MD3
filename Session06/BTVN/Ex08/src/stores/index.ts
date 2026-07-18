import { configureStore } from "@reduxjs/toolkit";
import { adminProductApi } from "./apis/adminProduct.api";

const store = configureStore({
  reducer: {
    [adminProductApi.reducerPath]: adminProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminProductApi.middleware),
});

export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
