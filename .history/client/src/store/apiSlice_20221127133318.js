import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURI = 'http://localhost:8080';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
    endpoints: builder => ({
        // get categories
        getCategories: builder.query({
            // get: 'http://localhost:8080/api/categories
            query: () => '/api/categories'
        }),

        // get labels
        getLabels: builder.query({
            query: () => '/api/labels'
        }),

        // add new Transaction
        addTransaction: builder.mutation({
            query: () => ({
                url: '/api/'
            })
        })
    })
})

export default apiSlice;