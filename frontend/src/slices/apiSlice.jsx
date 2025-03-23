import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({baseUrl: 'https://mern-auth-backend-gamma.vercel.app/'});

const apiSlice = createApi ({
    baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({})
})


export {apiSlice} 