import { configureStore } from "@reduxjs/toolkit";

import postReducer from "./slices/post.slice";
import searchReducer from "./slices/search.slice";

import { productApi } from "./apis/product.api";

const store = configureStore({
  reducer: {
    postStore: postReducer,

    searchStore: searchReducer,

    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
