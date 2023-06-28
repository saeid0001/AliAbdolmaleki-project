import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api/api";
import { RootState } from "../store";

interface ConcertType {
  id?: number;
  city: string;
  time: string;
  baner: string;
  price: string;
  link: string;
}

interface InitialType {
  concert: ConcertType[];
  loading: boolean;
}

const initialState = {
  concert: [],
  loading: false,
} as InitialType;

export const fetchingConcert = createAsyncThunk("concert/fetch", async () => {
  const respons = await api.get("concert");
  return respons.data;
});

const concertSlice = createSlice({
  name: "concert",
  initialState,
  reducers: {},
  extraReducers: (buildr) => {
    buildr.addCase(fetchingConcert.pending, (state) => {
      state.loading = true;
    });
    buildr.addCase(fetchingConcert.fulfilled, (state, action) => {
      state.loading = false;
      state.concert = action.payload;
    });
  },
});

export const AllConcert = (state: RootState) => state.concert.concert;
export const LoadingConcert = (state: RootState) => state.concert.loading;

export default concertSlice.reducer;
