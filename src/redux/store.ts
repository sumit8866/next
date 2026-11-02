import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

// A function, not one shared store, so each server request gets its own store.
export const makeStore = () =>
  configureStore({
    reducer: {
      todos: todoReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
