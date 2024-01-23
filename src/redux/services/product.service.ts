import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../lib";
import { ProductT, ProductsResponseT } from "../../../typs";

type Product = {};

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query<
      ProductsResponseT,
      { limit: number; take: number }
    >({
      query: ({ limit, take }) => `/?limit=${limit}&skip=${(take - 1) * 10}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newProduct) => {
        currentCache.products.push(...newProduct.products);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      providesTags: ["Product"],
    }),

    getProduct: builder.query<ProductT, string>({
      query: (id) => ({
        url: `/${id}`,
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productApi;
