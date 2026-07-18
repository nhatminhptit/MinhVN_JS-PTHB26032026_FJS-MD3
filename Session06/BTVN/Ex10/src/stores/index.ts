import { configureStore } from "@reduxjs/toolkit";
import { ecommerceApi } from "./apis/ecommerceApi";
import cartReducer from "./slices/cartSlice";
import checkoutReducer from "./slices/checkoutSlice";

const store = configureStore({
  reducer: {
    [ecommerceApi.reducerPath]: ecommerceApi.reducer,
    cart: cartReducer,
    checkout: checkoutReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ecommerceApi.middleware),
});

export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
