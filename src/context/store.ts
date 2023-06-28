import { configureStore } from "@reduxjs/toolkit";
import muiscReducer from "./musicSlice/MusicSlice";
import ConcertReducer from "./concertSlice/ConcertSlice";

export const store = configureStore({
  reducer: {
    music: muiscReducer,
    concert: ConcertReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
