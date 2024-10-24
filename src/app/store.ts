/** @format */

// src/app/store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { usersApi } from "../features/users/usersApi"; // Import your API slice

// Combine the reducers
const rootReducer = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer, // Add the usersApi reducer
});

// Configure the store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware), // Add API middleware
});

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
