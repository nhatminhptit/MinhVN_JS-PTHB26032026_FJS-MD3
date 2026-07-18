import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminProductApi = createApi({
  reducerPath: "adminProductApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query<any, void>({
      query: () => "products",
      providesTags: ["Product"],
    }),
    deleteProduct: builder.mutation<any, number>({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery, useDeleteProductMutation } =
  adminProductApi;
