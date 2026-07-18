import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    searchProducts: builder.query({
      query: (keyword: string) => `products/search?q=${keyword}`,
    }),
  }),
});


export const {
  useSearchProductsQuery,
  useLazySearchProductsQuery,
} = productApi;
