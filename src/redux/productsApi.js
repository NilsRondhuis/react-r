import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://623e1178e8fbc4f1626ba3ce.mockapi.io',
  }),
  tagTypes: ['Products'],
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => '/products',
      providesTags: ['Products'],
    }),
    addProducts: builder.mutation({
      query: newProduct => ({
        url: '/products',
        method: 'POST',
        body: {
          name: newProduct,
        },
      }),
      invalidatesTags: ['Products'],
    }),
    deleteProduct: builder.mutation({
      query: productId => ({
        url: `/products/${productId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Products'],
    }),
    updateProduct: builder.mutation({
      query: product => ({
        url: `/products/${product.id}`,
        method: 'PUT',
        body: {
          ...product,
        },
      }),
      invalidatesTags: ['Products'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductsMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productsApi;
