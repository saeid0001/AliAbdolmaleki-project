import { configureStore } from "@reduxjs/toolkit";
import muiscReducer from "./musicSlice/MusicSlice";
import ConcertReducer from "./concertSlice/ConcertSlice";
import AlbumReducer from "./albumSlice/AlbumSlice";

export const store = configureStore({
  reducer: {
    music: muiscReducer,
    concert: ConcertReducer,
    album: AlbumReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
