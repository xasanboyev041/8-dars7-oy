import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakeapi.platzi.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "en/rest/products",
    }),
    updateProduct: builder.mutation({
      query: ({ id, body }) => ({
        url: `en/rest/products/${id}`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useUpdateProductMutation } = productsApi;
