import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

// A function, not one shared store, so each server request gets its own store.
export const makeStore = () => {
  const store = configureStore({
    reducer: {
      todos: todoReducer,
    },
  });

  // Save the todos to localStorage after every change.
  store.subscribe(() => {
    localStorage.setItem("todos", JSON.stringify(store.getState().todos.list));
  });

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
