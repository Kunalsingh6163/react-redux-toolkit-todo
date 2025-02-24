import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./feature/TodoSlice"; // Ensure correct relative path

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

// Define types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
