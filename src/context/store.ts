import { configureStore } from "@reduxjs/toolkit";
import muiscReducer from "./musicSlice/musicSlice";

export const store = configureStore({
  reducer: {
    music: muiscReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
