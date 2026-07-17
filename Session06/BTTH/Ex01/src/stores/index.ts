import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todo.slice";

const store = configureStore({
  reducer: {
    todoStore: todoReducer,
  },
});

export type StoreType = ReturnType<typeof store.getState>;

export type StoreDispatch = typeof store.dispatch;

export default store;
