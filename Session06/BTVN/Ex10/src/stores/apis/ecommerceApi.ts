import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ecommerceApi = createApi({
  reducerPath: "ecommerceApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<any, void>({
      query: () => "products",
    }),
    createOrder: builder.mutation<any, any>({
      query: (orderPayload) => ({
        url: "posts/add",
        method: "POST",
        body: orderPayload,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useCreateOrderMutation } = ecommerceApi;
