import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const errorApi = createApi({
  reducerPath: "errorApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getAuthError: builder.query<any, void>({
      query: () => "auth/me",
    }),
  }),
});

export const { useLazyGetAuthErrorQuery } = errorApi;
