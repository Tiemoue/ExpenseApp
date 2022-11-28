import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURI = 'http://localhost:8080';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
    endpoints: builder => ({
        // get categories
        getCategories: builder.query({
            // get: 'http://localhost:8080/api/categories
            query: () => '/api/categories',
            providesTags:
        }),

        // get labels
        getLabels: builder.query({
            query: () => '/api/labels'
        }),

        // add new Transaction
        addTransaction: builder.mutation({
            query: (initialTransaction) => ({
                // post: 'http://localhost:8080/api/transaction'
                url: '/api/transaction',
                method: "POST",
                body: initialTransaction,
            })
        }),

        // delete record
        deleteTransaction: builder.mutation({
            // delete: 'http://localhost:8080/api/transaction'
            query: recordId => ({
                url: '/api/transaction',
                method: "DELETE",
                body: recordId,
            })
        })
    })
})

export default apiSlice;