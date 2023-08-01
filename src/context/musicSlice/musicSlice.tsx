import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api/api";
import { RootState } from "../store";

interface MusicType {
  id?: number;
  namefa: string;
  nameen: string;
  image: string;
  music: string;
  musicBy: string;
  arng: string;
  songwriter: string;
  lyrics: string;
}

interface InitialType {
  music: MusicType[];
  loading: boolean;
}

const initialState = {
  music: [],
  loading: false,
} as InitialType;

// eslint-disable-next-line react-refresh/only-export-components
export const fetchinMusic = createAsyncThunk("music/fetch", async () => {
  const respons = await api.get("music");
  return respons.data;
});

const muiscSlice = createSlice({
  name: "music",
  initialState,
  reducers: {},
  extraReducers: (builer) => {
    builer.addCase(fetchinMusic.pending, (state) => {
      state.loading = true;
    });
    builer.addCase(fetchinMusic.fulfilled, (state, action) => {
      state.loading = false;
      state.music = action.payload;
    });
  },
});

export const AllMusic = (state: RootState) => state.music.music;
export const LoadingMusic = (state: RootState) => state.music.loading;

export default muiscSlice.reducer;
