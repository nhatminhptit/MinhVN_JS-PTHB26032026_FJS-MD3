import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slices/post.slice";

const store = configureStore({
  reducer: {
    postStore: postReducer,
  },
});

export type StoreType = ReturnType<typeof store.getState>;

export default store;
