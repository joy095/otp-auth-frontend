/** @format */

// src/services/apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (newUser) => ({
        url: "/users/register",
        method: "POST",
        body: newUser,
        headers: { "Content-Type": "application/json" },
      }),
    }),
  }),
});

export const { useCreateUserMutation } = apiSlice;

export default apiSlice;
