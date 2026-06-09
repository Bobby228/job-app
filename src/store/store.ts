import { configureStore } from "@reduxjs/toolkit";
import JobReducer from "../reducers/JobSlice.ts";

export const store = configureStore({
  reducer: {
    jobs: JobReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;