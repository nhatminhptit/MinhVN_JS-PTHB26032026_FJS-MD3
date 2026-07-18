import { configureStore } from "@reduxjs/toolkit";
import { errorApi } from "./apis/error.api";
import { rtkQueryErrorLogger } from "./middlewares/ErrorMiddleware";

const store = configureStore({
  reducer: {
    [errorApi.reducerPath]: errorApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(errorApi.middleware)
      .concat(rtkQueryErrorLogger),
});

export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
