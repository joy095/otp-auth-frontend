/** @format */

// Define interfaces for the response types
interface User {
  id: number;
  username: string;
  email: string;
  // Add other user properties as needed
}

interface AuthResponse {
  token: string;
  user: User;
}

interface LoginCredentials {
  username: string;
  password: string;
}

interface RegisterCredentials {
  username: string;
  email: string;
  password: string;
}

// Define the RootState type for proper typing of getState
interface RootState {
  auth: {
    token: string | null;
  };
}

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/server/api/users",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginCredentials>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation<AuthResponse, RegisterCredentials>({
      query: (newUser) => ({
        url: "/register",
        method: "POST",
        body: newUser,
      }),
    }),
    getUser: builder.query<User, number>({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetUserQuery } =
  baseApi;
