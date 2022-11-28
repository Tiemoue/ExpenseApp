import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseURI = 'http'
export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: })
})