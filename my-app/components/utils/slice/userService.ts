import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com'}),
    endpoints: (build) => ({
        fetchAllUsers: build.query({
            query: () => ({
                url: '/users'
            })
        })
    })
})