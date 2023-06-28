import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api/api";
import { RootState } from "../store";

interface AlbumType {
  id?: number;
  namefa: string;
  nameen: string;
  image: string[];
  tracks: {
    id: number;
    name: string;
    music: string;
  }[];
}

interface InitialType {
  album: AlbumType[];
  loading: boolean;
}

const initialState = {
  album: [],
  loading: false,
} as InitialType;

export const fetchingAlbum = createAsyncThunk("album/fetch", async () => {
  const respons = await api.get("album");
  return respons.data;
});

const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {},
  extraReducers: (buildr) => {
    buildr.addCase(fetchingAlbum.pending, (state) => {
      state.loading = true;
    });
    buildr.addCase(fetchingAlbum.fulfilled, (state, action) => {
      state.loading = false;
      state.album = action.payload;
    });
  },
});

export const AllAlbum = (state: RootState) => state.album.album;
export const LoadingAlbum = (state: RootState) => state.album.loading;

export default albumSlice.reducer;
